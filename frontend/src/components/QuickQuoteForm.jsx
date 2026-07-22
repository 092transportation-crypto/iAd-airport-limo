import React, { useState } from 'react';
import { MapPin, Calendar, Phone, Send } from 'lucide-react';
import TrustSignals from './TrustSignals';

const inputClass =
  'w-full pl-10 pr-3 py-3 bg-black/70 border border-white/25 text-white placeholder-white/40 focus:border-white outline-none text-sm transition-colors';

// Compact hero quote form: Pickup, Dropoff, Date, Phone.
const QuickQuoteForm = () => {
  const [form, setForm] = useState({ pickup_location: '', dropoff_location: '', date: '', phone: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    try {
      const res = await fetch('/api/quote-requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'Homepage hero quick quote' }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.success) throw new Error(data.message || `HTTP ${res.status}`);
      setSent(true);
      setForm({ pickup_location: '', dropoff_location: '', date: '', phone: '' });
    } catch (err) {
      alert("Couldn't send your request. Please call (877) 609-1919 instead.");
    }
    setSending(false);
  };

  if (sent) {
    return (
      <div data-testid="quick-quote-success" className="max-w-3xl mx-auto border border-white/25 bg-black/70 backdrop-blur-sm p-8 text-center">
        <p className="font-display text-2xl text-white mb-2">Quote Request Received</p>
        <p className="text-white/60 text-sm mb-4">We'll call or text you within 15 minutes with your flat rate.</p>
        <button
          onClick={() => setSent(false)}
          className="text-white underline text-sm hover:text-white/70"
          data-testid="quick-quote-again"
        >
          Request another quote
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto border border-white/25 bg-black/70 backdrop-blur-sm p-5 sm:p-6" data-testid="quick-quote-card">
      <p className="font-display text-xl sm:text-2xl text-white mb-1">Get an Instant Quote</p>
      <p className="text-white/50 text-xs sm:text-sm mb-4">We respond within 15 minutes</p>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-3" data-testid="quick-quote-form">
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
          <input type="text" name="pickup_location" value={form.pickup_location} onChange={handleChange} required
            placeholder="Pickup (e.g. IAD Airport) *" className={inputClass} />
        </div>
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
          <input type="text" name="dropoff_location" value={form.dropoff_location} onChange={handleChange} required
            placeholder="Drop-off Location *" className={inputClass} />
        </div>
        <div className="relative">
          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
          <input type="date" name="date" value={form.date} onChange={handleChange} required aria-label="Pickup date"
            className={inputClass} />
        </div>
        <div className="relative">
          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
          <input type="tel" name="phone" value={form.phone} onChange={handleChange} required
            placeholder="Phone *" className={inputClass} />
        </div>
        <button type="submit" disabled={sending}
          className="sm:col-span-2 w-full py-4 bg-white text-black font-bold uppercase tracking-wider text-sm hover:bg-white/90 disabled:opacity-60 flex items-center justify-center gap-2 transition-colors">
          {sending ? 'Sending...' : (<><Send className="w-4 h-4" /> Get Quote</>)}
        </button>
      </form>
      <TrustSignals className="mt-4" />
    </div>
  );
};

export default QuickQuoteForm;
