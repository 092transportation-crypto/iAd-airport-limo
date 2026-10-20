import React, { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { sanitizePhone, isValidPhone } from '../lib/phone';

const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v ?? '').trim());

// Shows 30s after mount, once per browser session, unless a lead has
// already been captured this session (by this popup, exit-intent, or chat).
const LeadCapturePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const dialogRef = useRef(null);

  useEffect(() => {
    let alreadyShown = false;
    try {
      alreadyShown =
        sessionStorage.getItem('leadPopupShown') === '1' ||
        sessionStorage.getItem('leadSubmitted') === '1';
    } catch {
      // sessionStorage unavailable — fall back to showing once per page load.
    }
    if (alreadyShown) return undefined;

    const timer = setTimeout(() => {
      let stillOk = true;
      try {
        stillOk = sessionStorage.getItem('leadSubmitted') !== '1';
      } catch {
        // ignore
      }
      if (!stillOk) return;
      try {
        sessionStorage.setItem('leadPopupShown', '1');
      } catch {
        // ignore
      }
      setIsOpen(true);
    }, 30000);

    return () => clearTimeout(timer);
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
    if (form.email && !isValidEmail(form.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/lead-capture', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'lead_popup',
          name: form.name.trim(),
          phone: form.phone.trim(),
          email: form.email.trim(),
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
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="Get a free quote"
        data-testid="lead-popup"
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
              Get a free quote in 60 seconds
            </h3>
            <p className="text-white/50 text-sm mb-5">
              Leave your info and a dispatcher will follow up right away.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  id="lead-popup-name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder=" "
                  required
                  className="bk-input"
                  data-testid="lead-popup-name"
                />
                <label htmlFor="lead-popup-name" className="bk-label">Full Name *</label>
              </div>
              <div className="relative">
                <input
                  id="lead-popup-phone"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder=" "
                  required
                  className="bk-input"
                  data-testid="lead-popup-phone"
                />
                <label htmlFor="lead-popup-phone" className="bk-label">Phone Number *</label>
              </div>
              <div className="relative">
                <input
                  id="lead-popup-email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder=" "
                  className="bk-input"
                  data-testid="lead-popup-email"
                />
                <label htmlFor="lead-popup-email" className="bk-label">Email</label>
              </div>

              {error && (
                <p className="text-red-400 text-xs" role="alert">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="bk-shimmer-btn w-full text-black font-bold uppercase tracking-wide text-sm py-3 rounded-xl disabled:opacity-60"
              >
                {loading ? 'Sending…' : 'Get My Free Quote'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default LeadCapturePopup;
