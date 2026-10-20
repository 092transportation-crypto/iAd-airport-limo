import React, { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { sanitizePhone, isValidPhone } from '../lib/phone';

// Desktop-only, one-shot exit-intent popup: fires when the mouse leaves out
// the top of the viewport (heading for the tab bar / address bar), unless
// already shown this session or a lead was already captured this session.
const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const hasShownRef = useRef(false);

  useEffect(() => {
    const isDesktop =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(min-width: 1024px)').matches;
    if (!isDesktop) return undefined;

    try {
      if (
        sessionStorage.getItem('exitIntentShown') === '1' ||
        sessionStorage.getItem('leadSubmitted') === '1'
      ) {
        hasShownRef.current = true;
      }
    } catch {
      // ignore — sessionStorage unavailable
    }
    if (hasShownRef.current) return undefined;

    const handleMouseOut = (e) => {
      if (hasShownRef.current) return;
      if (e.clientY <= 0 && !e.relatedTarget) {
        try {
          if (sessionStorage.getItem('leadSubmitted') === '1') return;
        } catch {
          // ignore
        }
        hasShownRef.current = true;
        try {
          sessionStorage.setItem('exitIntentShown', '1');
        } catch {
          // ignore
        }
        setIsOpen(true);
      }
    };

    document.addEventListener('mouseout', handleMouseOut);
    return () => document.removeEventListener('mouseout', handleMouseOut);
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: name === 'phone' ? sanitizePhone(value) : value }));
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) setIsOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim()) {
      setError('Please enter your name.');
      return;
    }
    if (!isValidPhone(form.phone)) {
      setError('Please enter a valid phone number.');
      return;
    }

    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/lead-capture', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'exit_intent',
          name: form.name.trim(),
          phone: form.phone.trim(),
        }),
      });
      if (!res.ok) throw new Error('Request failed');
      try {
        sessionStorage.setItem('leadSubmitted', '1');
      } catch {
        // ignore
      }
      setSubmitted(true);
      setTimeout(() => setIsOpen(false), 2200);
    } catch (err) {
      setError("Couldn't send that — please call (877) 609-1919 instead.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 px-4"
      onClick={handleBackdropClick}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Get an instant quote before you go"
        data-testid="exit-intent-popup"
        className="relative w-full max-w-sm bg-black border border-white/15 rounded-2xl p-6 shadow-2xl bk-scale-in"
      >
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Close"
          className="absolute top-3 right-3 text-white/50 hover:text-white p-1"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6">
            <p className="text-[#d4af37] font-bold text-lg mb-2">Thank you!</p>
            <p className="text-white/70 text-sm">We'll text or call you shortly with your quote.</p>
          </div>
        ) : (
          <>
            <h3 className="text-white font-display text-xl font-bold mb-1">
              Before you go — get an instant quote
            </h3>
            <p className="text-white/50 text-sm mb-5">
              Just your name and number — a dispatcher will reach out with pricing.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  id="exit-popup-name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder=" "
                  required
                  className="bk-input"
                  data-testid="exit-popup-name"
                />
                <label htmlFor="exit-popup-name" className="bk-label">Full Name *</label>
              </div>
              <div className="relative">
                <input
                  id="exit-popup-phone"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder=" "
                  required
                  className="bk-input"
                  data-testid="exit-popup-phone"
                />
                <label htmlFor="exit-popup-phone" className="bk-label">Phone Number *</label>
              </div>

              {error && (
                <p className="text-red-400 text-xs" role="alert">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="bk-shimmer-btn w-full text-black font-bold uppercase tracking-wide text-sm py-3 rounded-xl disabled:opacity-60"
              >
                {loading ? 'Sending…' : 'Get My Instant Quote'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ExitIntentPopup;
