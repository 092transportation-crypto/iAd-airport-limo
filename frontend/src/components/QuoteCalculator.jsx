import React, { useEffect, useMemo, useRef, useState } from 'react';
import AddressAutocomplete from './AddressAutocomplete';
import { computeQuote, isShortNotice, PRICING, money, MAX_MILES, SHORT_NOTICE_HOURS } from '../lib/pricing';
import {
  Calculator, Clock, Loader2, PartyPopper, Route, Car, CarFront, Bus, ArrowDown,
} from 'lucide-react';

// Standalone instant-quote calculator. Sits ABOVE the booking form; the
// "Book this trip" button prefills the form below via a window event.

const TRIP_TYPES = [
  { value: 'Point-to-Point', icon: Route },
  { value: 'Hourly', icon: Clock },
  { value: 'Special/Event', icon: PartyPopper },
];

const VEHICLES = [
  { value: 'Business Sedan', icon: Car },
  { value: 'Mid-Size SUV', icon: CarFront },
  { value: 'Luxury SUV', icon: CarFront },
  { value: 'Premium SUV', icon: CarFront },
  { value: 'First Class', icon: Car },
  { value: 'Sprinter Van', icon: Bus },
  { value: 'Sprinter Executive', icon: Bus },
];

const pillClasses = (active) =>
  `px-4 py-2 rounded-full text-xs sm:text-sm font-semibold border transition-all duration-300 active:scale-95 inline-flex items-center gap-1.5 ${
    active
      ? 'bg-[#d4af37] text-black border-[#d4af37] shadow-[0_0_18px_rgba(212,175,55,0.35)]'
      : 'bg-white/[0.04] text-white/60 border-white/15 hover:border-[#d4af37]/60 hover:text-white'
  }`;

const QuoteCalculator = () => {
  const [tripType, setTripType] = useState('Point-to-Point');
  const [vehicle, setVehicle] = useState('Business Sedan');
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  // idle | loading | ready | error
  const [distance, setDistance] = useState({ status: 'idle', miles: null });
  const timerRef = useRef(null);
  const lastPairRef = useRef('');

  const pickupTrimmed = pickup.trim();
  const dropoffTrimmed = dropoff.trim();

  useEffect(() => {
    if (tripType !== 'Point-to-Point') return undefined;
    if (pickupTrimmed.length < 4 || dropoffTrimmed.length < 4) {
      lastPairRef.current = '';
      setDistance({ status: 'idle', miles: null });
      return undefined;
    }
    const pair = `${pickupTrimmed}|${dropoffTrimmed}`;
    if (pair === lastPairRef.current) return undefined;
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(async () => {
      setDistance({ status: 'loading', miles: null });
      try {
        const res = await fetch('/api/distance', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ origin: pickupTrimmed, destination: dropoffTrimmed }),
        });
        const data = await res.json().catch(() => ({}));
        if (!res.ok || !data.success) throw new Error(data.message || 'lookup failed');
        lastPairRef.current = pair;
        setDistance({ status: 'ready', miles: data.miles });
      } catch {
        lastPairRef.current = '';
        setDistance({ status: 'error', miles: null });
      }
    }, 800);
    return () => clearTimeout(timerRef.current);
  }, [tripType, pickupTrimmed, dropoffTrimmed]);

  const shortNotice = useMemo(
    () => isShortNotice(pickupDate, pickupTime),
    [pickupDate, pickupTime]
  );

  const quote = useMemo(
    () =>
      tripType === 'Point-to-Point' && distance.status === 'ready'
        ? computeQuote(distance.miles, vehicle, shortNotice)
        : null,
    [tripType, vehicle, distance, shortNotice]
  );

  const applyToForm = () => {
    window.dispatchEvent(
      new CustomEvent('iad:quote-apply', {
        detail: {
          tripType,
          vehicle,
          pickup: pickupTrimmed,
          dropoff: dropoffTrimmed,
          pickupDate,
          pickupTime,
        },
      })
    );
  };

  const isP2P = tripType === 'Point-to-Point';

  return (
    <div
      data-testid="quote-calculator"
      className="mb-8 overflow-hidden rounded-2xl border border-[#d4af37]/25 bg-[#0d0d0d] shadow-[0_0_60px_rgba(212,175,55,0.08)]"
    >
      <div className="h-1 w-full bg-gradient-to-r from-[#a8871c] to-[#d4af37]" aria-hidden="true" />
      <div className="p-6 sm:p-8">
        <div className="mb-4 flex items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#d4af37] to-[#f4e5c3] shadow-lg shadow-[#d4af37]/30">
            <Calculator className="h-5 w-5 text-black" />
          </span>
          <div>
            <h2 className="font-display text-2xl text-white">Instant Quote Calculator</h2>
            <p className="mt-0.5 text-xs text-white/50">
              Point-to-point trips price instantly — all-inclusive, no surge.
            </p>
          </div>
        </div>

        {/* Trust line */}
        <p
          data-testid="calc-trust-line"
          className="mb-5 flex items-center gap-2 rounded-xl border border-[#d4af37]/25 bg-[#d4af37]/[0.07] px-4 py-2.5 text-xs font-semibold text-[#e8cd7a] sm:text-sm"
        >
          <Clock className="h-4 w-4 shrink-0 text-[#d4af37]" />
          We reply to all quote requests in under 20 minutes.
        </p>

        {/* Trip type */}
        <div className="mb-4 flex flex-wrap gap-2">
          {TRIP_TYPES.map(({ value, icon: Icon }) => (
            <button
              key={value}
              type="button"
              data-testid={`calc-trip-${value.toLowerCase().replace(/[^a-z]+/g, '-')}`}
              onClick={() => setTripType(value)}
              className={pillClasses(tripType === value)}
            >
              <Icon className="h-3.5 w-3.5" /> {value}
            </button>
          ))}
        </div>

        {isP2P ? (
          <>
            {/* Addresses */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="relative z-30">
                <AddressAutocomplete
                  label="Pickup Location"
                  name="calc_pickup"
                  value={pickup}
                  onChange={setPickup}
                />
              </div>
              <div className="relative z-20">
                <AddressAutocomplete
                  label="Drop-off Location"
                  name="calc_dropoff"
                  value={dropoff}
                  onChange={setDropoff}
                />
              </div>
            </div>

            {/* Vehicle */}
            <div className="mt-4">
              <p className="mb-2 pl-1 text-[10px] uppercase tracking-widest text-white/40">
                Vehicle Class
              </p>
              <div className="flex flex-wrap gap-2">
                {VEHICLES.map(({ value, icon: Icon }) => (
                  <button
                    key={value}
                    type="button"
                    data-testid={`calc-vehicle-${value.toLowerCase().replace(/[^a-z]+/g, '-')}`}
                    onClick={() => setVehicle(value)}
                    className={pillClasses(vehicle === value)}
                  >
                    <Icon className="h-3.5 w-3.5" /> {value}
                  </button>
                ))}
              </div>
              {PRICING[vehicle]?.model && (
                <p className="mt-2 pl-1 text-xs text-white/40">{PRICING[vehicle].model}</p>
              )}
            </div>

            {/* Pickup date & time — short-notice check */}
            <div className="mt-4">
              <p className="mb-2 pl-1 text-[10px] uppercase tracking-widest text-white/40">
                Pickup Date &amp; Time
              </p>
              <div className="grid grid-cols-2 gap-3 sm:max-w-md">
                <input
                  type="date"
                  data-testid="calc-pickup-date"
                  aria-label="Pickup date"
                  style={{ colorScheme: 'dark' }}
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                  className="block w-full appearance-none rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-white transition-colors duration-300 focus:border-[#d4af37] focus:outline-none focus:ring-1 focus:ring-[#d4af37]/60"
                />
                <input
                  type="time"
                  data-testid="calc-pickup-time"
                  aria-label="Pickup time"
                  style={{ colorScheme: 'dark' }}
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
                  className="block w-full appearance-none rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-white transition-colors duration-300 focus:border-[#d4af37] focus:outline-none focus:ring-1 focus:ring-[#d4af37]/60"
                />
              </div>
              <p className="mt-2 text-[11px] text-white/40">
                Pickups within {SHORT_NOTICE_HOURS} hours include a 20% short-notice surcharge.
              </p>
            </div>

            {/* Price */}
            <div className="mt-5 rounded-xl border border-[#d4af37]/25 bg-black/50 p-5" data-testid="calc-result">
              {distance.status === 'idle' ? (
                <p className="text-sm text-white/50">
                  Enter your pickup and drop-off locations above to see your instant price.
                </p>
              ) : distance.status === 'loading' ? (
                <p className="flex items-center gap-2 text-sm text-white/70">
                  <Loader2 className="h-4 w-4 animate-spin text-[#d4af37]" />
                  Calculating your route…
                </p>
              ) : distance.status === 'error' ? (
                <p className="text-sm text-white/70">
                  We couldn&apos;t calculate that route — submit the form below and
                  we&apos;ll follow up with an exact quote.
                </p>
              ) : quote?.overLimit ? (
                <p className="text-sm text-white/70" data-testid="calc-over-limit">
                  For trips over {MAX_MILES} miles, please submit your request and
                  we&apos;ll send a custom quote.
                </p>
              ) : !quote ? (
                <p className="text-sm text-white/70">
                  Custom pricing for {vehicle} — submit the form below and we&apos;ll
                  follow up with a quote.
                </p>
              ) : (
                <div data-testid="calc-breakdown">
                  <dl className="space-y-2 text-sm">
                    <div className="flex items-center justify-between gap-3">
                      <dt className="text-white/50">Estimated distance</dt>
                      <dd className="tabular-nums text-white">{quote.miles} miles</dd>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <dt className="text-white/50">Flat rate — {quote.vehicle}</dt>
                      <dd className="tabular-nums text-white">{money(quote.baseFare)}</dd>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <dt className="text-emerald-400">Instant booking discount (10%)</dt>
                      <dd className="tabular-nums text-emerald-400" data-testid="calc-discount">
                        -{money(quote.discount)}
                      </dd>
                    </div>
                    {quote.surcharge > 0 && (
                      <div className="flex items-center justify-between gap-3">
                        <dt className="text-[#d4af37]">Short-notice surcharge (20%)</dt>
                        <dd className="tabular-nums text-[#d4af37]" data-testid="calc-surcharge">
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
                      <dd className="tabular-nums text-xl font-bold text-[#d4af37]" data-testid="calc-total">
                        {money(quote.total)}
                      </dd>
                    </div>
                  </dl>
                  <button
                    type="button"
                    data-testid="calc-book-btn"
                    onClick={applyToForm}
                    className="bk-shimmer-btn mt-4 flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold uppercase tracking-[0.15em] text-black transition-transform duration-200 hover:scale-[1.015] active:scale-[0.99]"
                  >
                    <ArrowDown className="h-4 w-4" /> Book this trip — details below
                  </button>
                  <p className="mt-3 text-center text-[11px] leading-relaxed text-white/40">
                    All-inclusive flat rate — tolls, taxes &amp; gratuity. No payment
                    is taken now; we confirm after you submit.
                  </p>
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="rounded-xl border border-[#d4af37]/25 bg-black/50 p-5" data-testid="calc-custom">
            <p className="text-sm text-white/70">
              Custom pricing — submit your request and we&apos;ll follow up with a quote.
            </p>
            <button
              type="button"
              onClick={applyToForm}
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/60 px-5 py-2.5 text-sm font-semibold text-[#d4af37] transition-colors hover:bg-[#d4af37]/10"
            >
              <ArrowDown className="h-4 w-4" /> Continue to the request form
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuoteCalculator;
