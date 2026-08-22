import React, { useEffect, useMemo, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import FaqSection from '../components/FaqSection';
import AddressAutocomplete from '../components/AddressAutocomplete';
import QuoteCalculator from '../components/QuoteCalculator';
import {
  Phone, Mail, MessageSquare, Send, ShieldCheck, BadgeCheck, Clock,
  PlaneTakeoff, Minus, Plus, BadgeDollarSign
} from 'lucide-react';

const bookingFaqs = [
  {
    question: 'How far in advance should I book my Dulles airport car?',
    answer:
      'We recommend booking at least 24 hours ahead for guaranteed availability. Same-day requests are often possible — call (877) 609-1919 to check.',
  },
  {
    question: 'What information do I need to book?',
    answer:
      'Your pickup address, destination, date and time, passenger and luggage count, and flight number for airport pickups so we can track your arrival.',
  },
  {
    question: 'Is my rate confirmed when I book?',
    answer:
      'Yes. You receive a written flat-rate confirmation — no surge pricing and no hidden fees. The quoted price is the final price.',
  },
  {
    question: 'Can I change or cancel my reservation?',
    answer:
      'Yes. Contact us at (877) 609-1919 to modify or cancel. Cancellations made more than 24 hours before pickup avoid any fee.',
  },
];

const SERVICE_TYPES = [
  'Airport Transfer', 'Corporate Travel', 'Wedding Transportation', 'Prom / School Event',
  'Wine Tour', 'Concert / Event', 'Birthday / Night Out', 'Hourly Charter', 'Other',
];

// Fleet categories — kept in sync with the instant quote calculator's
// rate table (names must match exactly).
const VEHICLE_TYPES = [
  'Any Vehicle', 'Business Sedan', 'Mid-Size SUV', 'Luxury SUV',
  'Premium SUV', 'First Class', 'Sprinter Van', 'Sprinter Executive',
];

const CONTACT_OPTIONS = [
  { value: 'Phone', icon: Phone },
  { value: 'Text', icon: MessageSquare },
  { value: 'Email', icon: Mail },
];

const TRUST_BADGES = [
  { icon: BadgeCheck, label: 'MD PSC Carrier #6325' },
  { icon: ShieldCheck, label: 'Licensed & Insured' },
  { icon: Clock, label: '24/7 Service' },
  { icon: PlaneTakeoff, label: 'Flight Tracking' },
];

const GOLD = '#d4af37';

// Wrapper that staggers each field's entrance animation on page load.
const Field = ({ index, className = '', children }) => (
  <div className={`bk-field-in ${className}`} style={{ animationDelay: `${index * 70}ms` }}>
    {children}
  </div>
);

const FloatingInput = ({ label, name, value, onChange, type = 'text', required = false, alwaysFloat = false, min, placeholder = ' ' }) => (
  <div className="relative">
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      min={min}
      placeholder={placeholder}
      className="bk-input"
    />
    <label className={`bk-label ${alwaysFloat ? 'bk-label--float' : ''}`}>
      {label}{required ? ' *' : ''}
    </label>
  </div>
);

const BookingPage = () => {
  const emptyForm = {
    name: '',
    phone: '',
    email: '',
    preferred_contact: 'Phone',
    service_type: 'Airport Transfer',
    vehicle_type: 'Any Vehicle',
    flight_number: '',
    pickup_location: '',
    dropoff_location: '',
    date: '',
    time: '',
    passengers: 1,
    message: ''
  };
  const [formData, setFormData] = useState(emptyForm);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const formCardRef = useRef(null);

  // "Book this trip" in the quote calculator prefills the form below.
  useEffect(() => {
    const onApply = (e) => {
      const d = e.detail || {};
      setFormData((f) => ({
        ...f,
        pickup_location: d.pickup || f.pickup_location,
        dropoff_location: d.dropoff || f.dropoff_location,
        date: d.pickupDate || f.date,
        time: d.pickupTime || f.time,
        vehicle_type:
          d.tripType === 'Point-to-Point' && d.vehicle ? d.vehicle : f.vehicle_type,
      }));
      if (formCardRef.current) {
        formCardRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    window.addEventListener('iad:quote-apply', onApply);
    return () => window.removeEventListener('iad:quote-apply', onApply);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const setField = (name, value) => setFormData((f) => ({ ...f, [name]: value }));

  const stepPassengers = (delta) =>
    setFormData((f) => ({ ...f, passengers: Math.min(14, Math.max(1, f.passengers + delta)) }));

  const progress = useMemo(() => {
    const required = ['name', 'phone', 'email', 'pickup_location', 'dropoff_location', 'date', 'time'];
    const filled = required.filter((k) => String(formData[k]).trim() !== '').length;
    return Math.round((filled / required.length) * 100);
  }, [formData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/quote-requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          // Flight number only applies to airport transfers.
          flight_number:
            formData.service_type === 'Airport Transfer'
              ? formData.flight_number.trim()
              : '',
          source: 'Booking page',
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData(emptyForm);
      } else {
        setError('Failed to submit. Please try again or call us directly.');
      }
    } catch (err) {
      setError('Network error. Please try again or call us directly.');
    }
    setLoading(false);
  };

  const contactIndex = CONTACT_OPTIONS.findIndex((o) => o.value === formData.preferred_contact);

  const pillClasses = (active) =>
    `px-4 py-2 rounded-full text-xs sm:text-sm font-semibold border transition-all duration-300 active:scale-95 ${
      active
        ? 'bg-[#d4af37] text-black border-[#d4af37] shadow-[0_0_18px_rgba(212,175,55,0.35)]'
        : 'bg-white/[0.04] text-white/60 border-white/15 hover:border-[#d4af37]/60 hover:text-white'
    }`;

  return (
    <div className="min-h-screen bg-black">
      <Seo
        title="Book IAD Airport Car Service | Free Flat-Rate Quote"
        description="Book your Dulles airport limo online in minutes. Flat rates, flight tracking & professional chauffeurs across DC, MD & VA. Or call (877) 609-1919 anytime."
        path="/book-now"
        faqs={bookingFaqs}
      />
      <Navbar />

      <section className="relative pt-32 pb-10 bg-black">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-[#d4af37] text-xs tracking-[0.3em] uppercase mb-3">Reservations</p>
          <h1 className="font-display text-4xl md:text-5xl text-white mb-4">Book Your Ride</h1>
          <p className="text-white/60 max-w-2xl mx-auto">Get a free flat-rate quote for premium airport transportation</p>
        </div>
      </section>

      <section className="py-10 bg-[#050505]">
        <div className="max-w-3xl mx-auto px-4">
          {/* Flat-Rate Notice */}
          <div
            data-testid="rates-notice"
            className="mb-8 overflow-hidden rounded-2xl border border-[#d4af37]/40 bg-gradient-to-r from-[#d4af37]/10 via-[#d4af37]/5 to-[#d4af37]/10"
          >
            <div className="h-1 w-full bg-gradient-to-r from-[#a8871c] to-[#d4af37]" aria-hidden="true" />
            <div className="flex flex-col items-center gap-4 px-6 py-6 text-center sm:flex-row sm:gap-5 sm:px-8 sm:text-left">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#d4af37] to-[#f4e5c3] shadow-lg shadow-[#d4af37]/30">
                <BadgeDollarSign className="h-6 w-6 text-black" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <p className="text-base font-bold text-white md:text-lg">
                  Flat-Rate Pricing — <span className="text-[#d4af37]">No Surge, Ever</span>
                </p>
                <p className="mt-1 text-sm leading-relaxed text-white/60">
                  Rates vary by vehicle and distance. Every quote is all-inclusive — tolls,
                  taxes &amp; gratuity. Fill out the form below for your{' '}
                  <span className="font-semibold text-[#d4af37]">free instant quote</span>.
                </p>
              </div>
            </div>
          </div>

          {/* Instant quote calculator — above the inquiry form, both coexist */}
          <QuoteCalculator />

          <div ref={formCardRef} className="scroll-mt-28 bg-[#0d0d0d] border border-[#d4af37]/25 rounded-2xl shadow-[0_0_60px_rgba(212,175,55,0.08)]">
            {/* Card header with completion progress */}
            <div className="px-6 sm:px-8 pt-6 pb-5 border-b border-white/10">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <h2 className="font-display text-2xl text-white">Request a Free Quote</h2>
                  <p className="text-white/50 text-xs mt-1">We respond within 15 minutes</p>
                </div>
                {!submitted && (
                  <div className="text-right">
                    <span className="text-[#d4af37] font-semibold text-lg tabular-nums">{progress}%</span>
                    <p className="text-white/40 text-[10px] uppercase tracking-widest">complete</p>
                  </div>
                )}
              </div>
              {!submitted && (
                <div className="mt-4 h-1 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500 ease-out"
                    style={{
                      width: `${progress}%`,
                      background: `linear-gradient(90deg, #a8871c, ${GOLD})`,
                      boxShadow: progress > 0 ? '0 0 10px rgba(212,175,55,0.6)' : 'none',
                    }}
                  />
                </div>
              )}
            </div>

            <div className="p-6 sm:p-8">
              {submitted ? (
                <div className="text-center py-10 bk-scale-in">
                  <svg viewBox="0 0 52 52" className="w-24 h-24 mx-auto mb-6" aria-hidden="true">
                    <circle className="bk-success-circle" cx="26" cy="26" r="24" fill="none" stroke={GOLD} strokeWidth="2" />
                    <path className="bk-success-check" fill="none" stroke={GOLD} strokeWidth="3"
                      strokeLinecap="round" strokeLinejoin="round" d="M14 27l8 8 16-16" />
                  </svg>
                  <h3 className="font-display text-3xl text-white mb-3">Request Submitted!</h3>
                  <p className="text-white/60 mb-8">We'll contact you shortly with your flat-rate quote.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-8 py-3 border border-[#d4af37] text-[#d4af37] font-semibold uppercase tracking-wider text-sm rounded-full hover:bg-[#d4af37] hover:text-black transition-all duration-300"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Field index={0}>
                      <FloatingInput label="Full Name" name="name" value={formData.name} onChange={handleChange} required />
                    </Field>
                    <Field index={1}>
                      <FloatingInput label="Phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required />
                    </Field>
                    <Field index={2}>
                      <FloatingInput label="Email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                    </Field>

                    {/* Animated preferred-contact toggle */}
                    <Field index={3}>
                      <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1.5 pl-1">Preferred Contact</p>
                      <div className="relative grid grid-cols-3 bg-white/[0.05] border border-white/10 rounded-full p-1">
                        <span
                          className="absolute inset-y-1 left-1 w-[calc((100%-0.5rem)/3)] rounded-full bg-[#d4af37] transition-transform duration-300 ease-out shadow-[0_0_14px_rgba(212,175,55,0.4)]"
                          style={{ transform: `translateX(${Math.max(0, contactIndex) * 100}%)` }}
                        />
                        {CONTACT_OPTIONS.map(({ value, icon: Icon }) => (
                          <button
                            key={value}
                            type="button"
                            onClick={() => setField('preferred_contact', value)}
                            className={`relative z-10 flex items-center justify-center gap-1.5 py-2 text-xs font-semibold rounded-full transition-colors duration-300 ${
                              formData.preferred_contact === value ? 'text-black' : 'text-white/60 hover:text-white'
                            }`}
                          >
                            <Icon className="w-3.5 h-3.5" /> {value}
                          </button>
                        ))}
                      </div>
                    </Field>

                    {/* Service type pills */}
                    <Field index={4} className="md:col-span-2">
                      <p className="text-[10px] uppercase tracking-widest text-white/40 mb-2 pl-1">Service Type</p>
                      <div className="flex flex-wrap gap-2">
                        {SERVICE_TYPES.map((s) => (
                          <button key={s} type="button" onClick={() => setField('service_type', s)}
                            className={pillClasses(formData.service_type === s)}>
                            {s}
                          </button>
                        ))}
                      </div>
                    </Field>

                    {/* Flight number — airport transfers only */}
                    {formData.service_type === 'Airport Transfer' && (
                      <Field index={5} className="md:col-span-2">
                        <FloatingInput
                          label="Flight Number (optional)"
                          name="flight_number"
                          value={formData.flight_number}
                          onChange={handleChange}
                          alwaysFloat
                          placeholder="e.g. AA1234"
                        />
                      </Field>
                    )}

                    {/* Vehicle type pills */}
                    <Field index={5} className="md:col-span-2">
                      <p className="text-[10px] uppercase tracking-widest text-white/40 mb-2 pl-1">Vehicle Type</p>
                      <div className="flex flex-wrap gap-2">
                        {VEHICLE_TYPES.map((v) => (
                          <button key={v} type="button" onClick={() => setField('vehicle_type', v)}
                            className={pillClasses(formData.vehicle_type === v)}>
                            {v}
                          </button>
                        ))}
                      </div>
                    </Field>

                    <Field index={6} className="relative z-30">
                      <AddressAutocomplete
                        label="Pickup Location" name="pickup_location" required
                        value={formData.pickup_location}
                        onChange={(v) => setField('pickup_location', v)}
                      />
                    </Field>
                    <Field index={7} className="relative z-20">
                      <AddressAutocomplete
                        label="Drop-off Location" name="dropoff_location" required
                        value={formData.dropoff_location}
                        onChange={(v) => setField('dropoff_location', v)}
                      />
                    </Field>

                    <Field index={8}>
                      <FloatingInput label="Date" name="date" type="date" value={formData.date} onChange={handleChange} required alwaysFloat />
                    </Field>
                    <Field index={9}>
                      <FloatingInput label="Pickup Time" name="time" type="time" value={formData.time} onChange={handleChange} required alwaysFloat />
                    </Field>

                    {/* Passenger stepper */}
                    <Field index={10} className="md:col-span-2">
                      <p className="text-[10px] uppercase tracking-widest text-white/40 mb-2 pl-1">Number of Passengers</p>
                      <div className="flex items-center gap-5">
                        <button type="button" onClick={() => stepPassengers(-1)} disabled={formData.passengers <= 1}
                          aria-label="Fewer passengers"
                          className="w-11 h-11 rounded-full border border-white/20 text-white flex items-center justify-center transition-all duration-200 hover:border-[#d4af37] hover:text-[#d4af37] active:scale-90 disabled:opacity-25 disabled:pointer-events-none">
                          <Minus className="w-4 h-4" />
                        </button>
                        <div className="w-20 text-center">
                          <span key={formData.passengers} className="bk-pop inline-block text-3xl font-bold text-[#d4af37] tabular-nums">
                            {formData.passengers}
                          </span>
                          <p className="text-white/40 text-[10px] uppercase tracking-widest">
                            {formData.passengers === 1 ? 'Passenger' : 'Passengers'}
                          </p>
                        </div>
                        <button type="button" onClick={() => stepPassengers(1)} disabled={formData.passengers >= 14}
                          aria-label="More passengers"
                          className="w-11 h-11 rounded-full border border-white/20 text-white flex items-center justify-center transition-all duration-200 hover:border-[#d4af37] hover:text-[#d4af37] active:scale-90 disabled:opacity-25 disabled:pointer-events-none">
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </Field>

                    <Field index={11} className="md:col-span-2">
                      <div className="relative">
                        <textarea name="message" value={formData.message} onChange={handleChange} rows={3}
                          placeholder=" " className="bk-input resize-y" />
                        <label className="bk-label">Notes — luggage, child seats, special requests…</label>
                      </div>
                    </Field>
                  </div>

                  {error && <p className="text-red-400 text-sm">{error}</p>}

                  <Field index={12}>
                    <button type="submit" disabled={loading}
                      className="bk-shimmer-btn w-full py-4 rounded-xl text-black font-bold uppercase tracking-[0.15em] text-sm flex items-center justify-center gap-2 transition-transform duration-200 hover:scale-[1.015] active:scale-[0.99] disabled:opacity-60 disabled:pointer-events-none">
                      {loading ? 'Submitting…' : <><Send className="w-4 h-4" /> Get My Free Quote</>}
                    </button>
                  </Field>

                  {/* Trust badges */}
                  <Field index={13}>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                      {TRUST_BADGES.map(({ icon: Icon, label }) => (
                        <div key={label} className="flex items-center justify-center gap-2 py-2 px-1 rounded-lg bg-white/[0.03] border border-white/10">
                          <Icon className="w-4 h-4 flex-shrink-0 text-[#d4af37]" />
                          <span className="text-white/60 text-[11px] font-medium leading-tight">{label}</span>
                        </div>
                      ))}
                    </div>
                  </Field>
                </form>
              )}
            </div>
          </div>

          {/* Contact Options */}
          <div className="mt-10 text-center">
            <p className="text-white/40 mb-4 text-sm">Prefer to book by phone or email?</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:+18776091919"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/70 text-white font-bold uppercase tracking-wider text-sm hover:border-[#d4af37] hover:text-[#d4af37] transition-all">
                <Phone className="w-4 h-4" /> (877) 609-1919
              </a>
              <a href="mailto:limoiadairport@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/70 text-white font-bold uppercase tracking-wider text-sm hover:border-[#d4af37] hover:text-[#d4af37] transition-all">
                <Mail className="w-4 h-4" /> Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <FaqSection faqs={bookingFaqs} />

      <Footer />
    </div>
  );
};

export default BookingPage;
