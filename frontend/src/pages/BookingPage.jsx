import React, { useEffect, useMemo, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import FaqSection from '../components/FaqSection';
import AddressAutocomplete from '../components/AddressAutocomplete';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  CardElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import {
  computeQuote,
  isShortNotice,
  money,
  MAX_MILES,
  SHORT_NOTICE_HOURS,
} from '../lib/pricing';
import {
  Phone, Mail, MessageSquare, Send, ShieldCheck, BadgeCheck, Clock,
  PlaneTakeoff, Minus, Plus, BadgeDollarSign, Calculator, Lock, Loader2
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

const SERVICE_TYPES = ['Airport Transfer', 'Corporate', 'Wedding', 'Special Event', 'Hourly'];

// Services that always get a custom quote instead of instant pricing.
const CUSTOM_QUOTE_SERVICES = ['Hourly', 'Wedding', 'Special Event'];

// The 8 fleet categories — kept in sync with the Fleet page and 92limo.com.
const VEHICLE_TYPES = [
  'Business Sedan', 'First Class Sedan', 'Midsize SUV', 'Luxury SUV',
  'Premium SUV', 'Sprinter Shuttle', 'Sprinter Executive', 'Sprinter Limo',
];

// Fleet names above -> keys in the mileage-bracket rate table. Vehicles
// without a mapping (Sprinter Limo) always get the custom-quote flow.
const PRICE_KEY = {
  'Business Sedan': 'Business Sedan',
  'First Class Sedan': 'First Class',
  'Midsize SUV': 'Mid-Size SUV',
  'Luxury SUV': 'Luxury SUV',
  'Premium SUV': 'Premium SUV',
  'Sprinter Shuttle': 'Sprinter Van',
  'Sprinter Executive': 'Sprinter Executive',
};

const HEAR_ABOUT_OPTIONS = [
  'Google Search',
  'Referral / Word of Mouth',
  'Social Media',
  'Repeat Customer',
  'Other',
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

const CARD_STYLE = {
  style: {
    base: {
      color: '#ffffff',
      fontSize: '15px',
      fontFamily: 'inherit',
      '::placeholder': { color: 'rgba(255,255,255,0.4)' },
    },
    invalid: { color: '#f87171' },
  },
};

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

const emptyForm = {
  name: '',
  phone: '',
  email: '',
  preferred_contact: 'Phone',
  service_type: 'Airport Transfer',
  vehicle_type: '',
  flight_number: '',
  pickup_location: '',
  dropoff_location: '',
  date: '',
  time: '',
  passengers: 1,
  hear_about: '',
  message: '',
  sms_consent: false,
};

const InnerBookingForm = ({ stripe, elements, stripeReady }) => {
  const [formData, setFormData] = useState(emptyForm);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [paidDone, setPaidDone] = useState(false);
  const [error, setError] = useState('');
  // idle | loading | ready | error
  const [distance, setDistance] = useState({ status: 'idle', miles: null });
  const distTimerRef = useRef(null);
  const lastPairRef = useRef('');

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

  // ---- Instant quote: driving distance once pickup + drop-off are in ----
  const pickupTrimmed = formData.pickup_location.trim();
  const dropoffTrimmed = formData.dropoff_location.trim();
  useEffect(() => {
    if (pickupTrimmed.length < 4 || dropoffTrimmed.length < 4) {
      lastPairRef.current = '';
      setDistance({ status: 'idle', miles: null });
      return undefined;
    }
    const pair = `${pickupTrimmed}|${dropoffTrimmed}`;
    if (pair === lastPairRef.current) return undefined;
    if (distTimerRef.current) clearTimeout(distTimerRef.current);
    distTimerRef.current = setTimeout(async () => {
      setDistance({ status: 'loading', miles: null });
      try {
        const res = await fetch('/api/distance', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ origin: pickupTrimmed, destination: dropoffTrimmed }),
        });
        const data = await res.json().catch(() => ({}));
        if (!res.ok || !data.success) throw new Error(data.message || 'failed');
        lastPairRef.current = pair;
        setDistance({ status: 'ready', miles: data.miles });
      } catch {
        lastPairRef.current = '';
        setDistance({ status: 'error', miles: null });
      }
    }, 800);
    return () => clearTimeout(distTimerRef.current);
  }, [pickupTrimmed, dropoffTrimmed]);

  const customService = CUSTOM_QUOTE_SERVICES.includes(formData.service_type);
  const priceKey = PRICE_KEY[formData.vehicle_type];
  const shortNotice = useMemo(
    () => isShortNotice(formData.date, formData.time),
    [formData.date, formData.time]
  );
  const quote = useMemo(
    () =>
      !customService && priceKey && distance.status === 'ready'
        ? computeQuote(distance.miles, priceKey, shortNotice)
        : null,
    [customService, priceKey, distance, shortNotice]
  );
  const payable = Boolean(quote && !quote.overLimit && stripeReady);

  // Pricing payload for the notification email. Mirrors exactly what the
  // quote panel shows: a full breakdown when an instant price was
  // calculated, otherwise the reason no price was generated.
  const buildPricing = (serverQuote, paymentIntentId) => {
    if (customService) {
      return { mode: 'custom', reason: 'Hourly / Wedding / Special Event' };
    }
    if (!formData.vehicle_type) return { mode: 'custom', reason: 'No vehicle selected' };
    if (!priceKey) {
      return { mode: 'custom', reason: `${formData.vehicle_type} has no instant pricing` };
    }
    if (distance.status !== 'ready') {
      return { mode: 'custom', reason: 'Driving distance could not be calculated' };
    }
    const q = serverQuote || quote;
    if (!q) return { mode: 'custom', reason: 'No instant price calculated' };
    if (q.overLimit) {
      return {
        mode: 'custom',
        reason: `Trip is ${q.miles} miles (over the ${MAX_MILES}-mile instant-quote limit)`,
      };
    }
    return {
      mode: 'instant',
      vehicle: priceKey,
      vehicle_label: formData.vehicle_type,
      miles: q.miles,
      base_fare: q.baseFare,
      discount: q.discount,
      surcharge: q.surcharge,
      short_notice: q.surcharge > 0,
      card_fee: q.cardFee,
      total: q.total,
      paid: Boolean(paymentIntentId),
      payment_intent: paymentIntentId || '',
    };
  };

  const fileBooking = async (paidNote, pricing) => {
    const message = [
      paidNote,
      formData.hear_about ? `Heard about us: ${formData.hear_about}` : '',
      formData.sms_consent ? 'SMS consent: yes' : '',
      formData.message.trim(),
    ]
      .filter(Boolean)
      .join('\n\n');
    const response = await fetch('/api/quote-requests', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...formData,
        vehicle_type: formData.vehicle_type || 'Any Vehicle',
        message,
        // Flight number only applies to airport transfers.
        flight_number:
          formData.service_type === 'Airport Transfer'
            ? formData.flight_number.trim()
            : '',
        source: paidNote ? 'Booking page — PAID' : 'Booking page',
        pricing,
      })
    });
    if (!response.ok) throw new Error('Request failed');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (payable && stripe && elements) {
        // ---- Pay & Book Now: charge the exact server-verified total ----
        const intentRes = await fetch('/api/create-payment-intent', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            miles: quote.miles,
            vehicle: priceKey,
            pickup: formData.pickup_location,
            dropoff: formData.dropoff_location,
            pickupDate: formData.date,
            pickupTime: formData.time,
          }),
        });
        const intent = await intentRes.json().catch(() => ({}));
        if (!intentRes.ok || !intent.success) {
          throw new Error(intent.message || 'Could not start the payment.');
        }
        const result = await stripe.confirmCardPayment(intent.clientSecret, {
          payment_method: {
            card: elements.getElement(CardElement),
            billing_details: {
              name: formData.name,
              email: formData.email,
              phone: formData.phone,
            },
          },
        });
        if (result.error) {
          setError(result.error.message || 'Payment failed. Try another card.');
          setLoading(false);
          return;
        }
        const sq = intent.quote;
        // The fare breakdown travels in the `pricing` payload (rendered as
        // its own rows in the notification email); notes only carry the receipt.
        const paidNote = [
          '✅ PAID ONLINE via Stripe',
          `Amount charged: $${sq.total.toFixed(2)}`,
          'Site: iadairportlimo.com',
          `PaymentIntent: ${result.paymentIntent.id}`,
        ].join('\n');
        try {
          await fileBooking(paidNote, buildPricing(sq, result.paymentIntent.id));
        } catch {
          // Payment already captured — dispatch still sees it in Stripe.
        }
        setPaidDone(true);
        setSubmitted(true);
        setFormData(emptyForm);
      } else {
        await fileBooking('', buildPricing());
        setPaidDone(false);
        setSubmitted(true);
        setFormData(emptyForm);
      }
    } catch (err) {
      setError(err.message || 'Failed to submit. Please try again or call us directly.');
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
    <div className="bg-[#0d0d0d] border border-[#d4af37]/25 rounded-2xl shadow-[0_0_60px_rgba(212,175,55,0.08)]">
      {/* Card header with completion progress */}
      <div className="px-6 sm:px-8 pt-6 pb-5 border-b border-white/10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl text-white">Book Your Ride</h2>
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
          <div className="text-center py-10 bk-scale-in" data-testid="inquiry-success">
            <svg viewBox="0 0 52 52" className="w-24 h-24 mx-auto mb-6" aria-hidden="true">
              <circle className="bk-success-circle" cx="26" cy="26" r="24" fill="none" stroke={GOLD} strokeWidth="2" />
              <path className="bk-success-check" fill="none" stroke={GOLD} strokeWidth="3"
                strokeLinecap="round" strokeLinejoin="round" d="M14 27l8 8 16-16" />
            </svg>
            <h3 className="font-display text-3xl text-white mb-3">
              {paidDone ? "Payment Received — You're Booked!" : 'Request Submitted!'}
            </h3>
            <p className="text-white/60 mb-8">
              {paidDone
                ? "We'll contact you shortly to confirm your chauffeur."
                : "We'll contact you shortly with your flat-rate quote."}
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="px-8 py-3 border border-[#d4af37] text-[#d4af37] font-semibold uppercase tracking-wider text-sm rounded-full hover:bg-[#d4af37] hover:text-black transition-all duration-300"
            >
              Submit Another Request
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5" data-testid="inquiry-form">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* 1. Vehicle type pills */}
              <Field index={0} className="md:col-span-2">
                <p className="text-[10px] uppercase tracking-widest text-white/40 mb-2 pl-1">
                  Vehicle Type — pick one for an instant price
                </p>
                <div className="flex flex-wrap gap-2">
                  {VEHICLE_TYPES.map((v) => (
                    <button
                      key={v}
                      type="button"
                      data-testid={`inquiry-vehicle-${v.toLowerCase().replace(/\s+/g, '-')}`}
                      onClick={() => setField('vehicle_type', formData.vehicle_type === v ? '' : v)}
                      className={pillClasses(formData.vehicle_type === v)}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </Field>

              {/* 2. Pickup / Drop-off */}
              <Field index={1} className="relative z-30">
                <AddressAutocomplete
                  label="Pickup Location" name="pickup_location" required
                  value={formData.pickup_location}
                  onChange={(v) => setField('pickup_location', v)}
                />
              </Field>
              <Field index={2} className="relative z-20">
                <AddressAutocomplete
                  label="Drop-off Location" name="dropoff_location" required
                  value={formData.dropoff_location}
                  onChange={(v) => setField('dropoff_location', v)}
                />
              </Field>

              {/* 3. Instant quote */}
              <Field index={3} className="md:col-span-2">
                <div
                  className="rounded-xl border border-[#d4af37]/25 bg-black/50 p-5"
                  data-testid="inquiry-quote-panel"
                >
                  <p className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#d4af37]">
                    <Calculator className="h-3.5 w-3.5" /> Instant Quote
                  </p>
                  {customService ? (
                    <p className="text-sm text-white/70" data-testid="inquiry-quote-custom">
                      Custom pricing — we&apos;ll follow up with a quote.
                    </p>
                  ) : !formData.vehicle_type ? (
                    <p className="text-sm text-white/50">
                      Select a vehicle above to see your instant price.
                    </p>
                  ) : !priceKey ? (
                    <p className="text-sm text-white/70" data-testid="inquiry-quote-custom">
                      Custom pricing for {formData.vehicle_type} — we&apos;ll follow up with a quote.
                    </p>
                  ) : distance.status === 'idle' ? (
                    <p className="text-sm text-white/50">
                      Enter your pickup and drop-off locations to see your instant price.
                    </p>
                  ) : distance.status === 'loading' ? (
                    <p className="flex items-center gap-2 text-sm text-white/70">
                      <Loader2 className="h-4 w-4 animate-spin text-[#d4af37]" />
                      Calculating your route…
                    </p>
                  ) : distance.status === 'error' ? (
                    <p className="text-sm text-white/70">
                      We couldn&apos;t calculate that route — submit your request and
                      we&apos;ll follow up with an exact quote.
                    </p>
                  ) : quote?.overLimit ? (
                    <p className="text-sm text-white/70" data-testid="inquiry-quote-over-limit">
                      For trips over {MAX_MILES} miles, please submit your request and
                      we&apos;ll send a custom quote.
                    </p>
                  ) : quote ? (
                    <dl className="space-y-2 text-sm" data-testid="inquiry-quote-breakdown">
                      <div className="flex items-center justify-between gap-3">
                        <dt className="text-white/50">Estimated distance</dt>
                        <dd className="tabular-nums text-white">{quote.miles} miles</dd>
                      </div>
                      <div className="flex items-center justify-between gap-3">
                        <dt className="text-white/50">Flat rate — {formData.vehicle_type}</dt>
                        <dd className="tabular-nums text-white">{money(quote.baseFare)}</dd>
                      </div>
                      <div className="flex items-center justify-between gap-3">
                        <dt className="text-emerald-400">Instant booking discount (10%)</dt>
                        <dd className="tabular-nums text-emerald-400" data-testid="inquiry-quote-discount">
                          -{money(quote.discount)}
                        </dd>
                      </div>
                      {quote.surcharge > 0 && (
                        <div className="flex items-center justify-between gap-3">
                          <dt className="text-[#d4af37]">Short-notice surcharge (20%)</dt>
                          <dd className="tabular-nums text-[#d4af37]" data-testid="inquiry-quote-surcharge">
                            +{money(quote.surcharge)}
                          </dd>
                        </div>
                      )}
                      <div className="flex items-center justify-between gap-3">
                        <dt className="text-white/50">Card processing fee (3%)</dt>
                        <dd className="tabular-nums text-white">{money(quote.cardFee)}</dd>
                      </div>
                      <div className="flex items-center justify-between gap-3 border-t border-[#d4af37]/25 pt-2.5">
                        <dt className="font-bold text-white">Total</dt>
                        <dd className="tabular-nums text-xl font-bold text-[#d4af37]" data-testid="inquiry-quote-total">
                          {money(quote.total)}
                        </dd>
                      </div>
                    </dl>
                  ) : null}
                  {quote && !quote.overLimit && !formData.date && (
                    <p className="mt-3 text-[11px] text-white/40">
                      Pickups within {SHORT_NOTICE_HOURS} hours include a 20%
                      short-notice surcharge — set your date &amp; time below.
                    </p>
                  )}
                </div>
              </Field>

              {/* 4. Service type pills */}
              <Field index={4} className="md:col-span-2">
                <p className="text-[10px] uppercase tracking-widest text-white/40 mb-2 pl-1">Service Type</p>
                <div className="flex flex-wrap gap-2">
                  {SERVICE_TYPES.map((s) => (
                    <button
                      key={s}
                      type="button"
                      data-testid={`inquiry-service-${s.toLowerCase().replace(/\s+/g, '-')}`}
                      onClick={() => setField('service_type', s)}
                      className={pillClasses(formData.service_type === s)}
                    >
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

              {/* 5. Contact fields */}
              <Field index={6}>
                <FloatingInput label="Full Name" name="name" value={formData.name} onChange={handleChange} required />
              </Field>
              <Field index={7}>
                <FloatingInput label="Phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required />
              </Field>
              <Field index={8}>
                <FloatingInput label="Email" name="email" type="email" value={formData.email} onChange={handleChange} required />
              </Field>

              {/* 6. Animated preferred-contact toggle */}
              <Field index={9}>
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

              {/* 7. Date / Time */}
              <Field index={10}>
                <FloatingInput label="Date" name="date" type="date" value={formData.date} onChange={handleChange} required alwaysFloat />
              </Field>
              <Field index={11}>
                <FloatingInput label="Pickup Time" name="time" type="time" value={formData.time} onChange={handleChange} required alwaysFloat />
              </Field>

              {/* 8. Passenger stepper */}
              <Field index={12} className="md:col-span-2">
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

              {/* 9. How did you hear about us */}
              <Field index={13} className="md:col-span-2">
                <p className="text-[10px] uppercase tracking-widest text-white/40 mb-2 pl-1">
                  How did you hear about us? <span className="text-white/25">(optional)</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {HEAR_ABOUT_OPTIONS.map((h) => (
                    <button
                      key={h}
                      type="button"
                      onClick={() => setField('hear_about', formData.hear_about === h ? '' : h)}
                      className={pillClasses(formData.hear_about === h)}
                    >
                      {h}
                    </button>
                  ))}
                </div>
              </Field>

              {/* 10. Notes */}
              <Field index={14} className="md:col-span-2">
                <div className="relative">
                  <textarea name="message" value={formData.message} onChange={handleChange} rows={3}
                    placeholder=" " className="bk-input resize-y" />
                  <label className="bk-label">Notes — luggage, child seats, special requests…</label>
                </div>
              </Field>

              {/* 11. SMS consent */}
              <Field index={15} className="md:col-span-2">
                <label className="flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    data-testid="inquiry-sms-consent"
                    checked={formData.sms_consent}
                    onChange={(e) => setField('sms_consent', e.target.checked)}
                    className="mt-1 h-4 w-4 shrink-0 cursor-pointer accent-[#d4af37]"
                  />
                  <span className="text-sm leading-relaxed text-white/50">
                    By checking this box, you agree to receive SMS messages from IAD Airport Limo
                    related to Customer Care. Reply STOP to opt out. Message &amp; data rates may apply.
                  </span>
                </label>
              </Field>

              {/* 12. Card details — only when paying an instant quote */}
              {payable && (
                <Field index={16} className="md:col-span-2">
                  <p className="text-[10px] uppercase tracking-widest text-white/40 mb-2 pl-1">Card Details</p>
                  <div className="rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3.5">
                    <CardElement options={CARD_STYLE} />
                  </div>
                  <p className="mt-2 flex items-center gap-1.5 text-[11px] text-white/40">
                    <Lock className="h-3 w-3" /> Secure payment by Stripe — you&apos;ll be
                    charged exactly {money(quote.total)}.
                  </p>
                </Field>
              )}
            </div>

            {error && <p className="text-red-400 text-sm" data-testid="inquiry-pay-error">{error}</p>}

            {/* 12. Submit — Pay & Book when an instant price exists */}
            <Field index={17}>
              <button type="submit" disabled={loading} data-testid="inquiry-submit"
                className="bk-shimmer-btn w-full py-4 rounded-xl text-black font-bold uppercase tracking-[0.15em] text-sm flex items-center justify-center gap-2 transition-transform duration-200 hover:scale-[1.015] active:scale-[0.99] disabled:opacity-60 disabled:pointer-events-none">
                {loading ? (
                  payable ? 'Processing payment…' : 'Submitting…'
                ) : payable ? (
                  <><Lock className="w-4 h-4" /> Pay &amp; Book Now — {money(quote.total)}</>
                ) : (
                  <><Send className="w-4 h-4" /> Request Booking</>
                )}
              </button>
            </Field>

            {/* 13. Trust line */}
            <p className="text-center text-xs text-white/40">
              We respond within 15 minutes. We never share your info.
            </p>

            {/* Trust badges */}
            <Field index={18}>
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
  );
};

// Bridges the Stripe hooks to the form. MUST be rendered inside <Elements> —
// calling useStripe/useElements without that context throws and blanks the
// whole route, which is exactly why InnerBookingForm takes them as props.
const StripeBookingForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  return <InnerBookingForm stripe={stripe} elements={elements} stripeReady />;
};

// Loads the shared Stripe publishable key so the card field can mount inside
// the form. If payments aren't configured yet, the form quietly falls back
// to the request-booking flow.
export const UnifiedBookingForm = () => {
  const [stripePromise, setStripePromise] = useState(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch('/api/create-payment-intent')
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error('unavailable'))))
      .then((data) => {
        if (!cancelled && data.success && data.publishableKey) {
          setStripePromise(loadStripe(data.publishableKey));
        }
      })
      .catch(() => {})
      .finally(() => {
        if (!cancelled) setChecked(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (!checked) return null;
  if (!stripePromise) {
    return <InnerBookingForm stripe={null} elements={null} stripeReady={false} />;
  }
  return (
    <Elements stripe={stripePromise}>
      <StripeBookingForm />
    </Elements>
  );
};

const BookingPage = () => {
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
          <p className="text-white/60 max-w-2xl mx-auto">Get an instant flat-rate quote and book premium airport transportation online</p>
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
                  taxes &amp; gratuity. Pick a vehicle and enter your route for your{' '}
                  <span className="font-semibold text-[#d4af37]">free instant quote</span>.
                </p>
              </div>
            </div>
          </div>

          <UnifiedBookingForm />

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
