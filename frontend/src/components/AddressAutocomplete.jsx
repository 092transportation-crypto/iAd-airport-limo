import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Building2, Hotel, Landmark, Loader2, MapPin, Plane, TrainFront } from 'lucide-react';
import { hasGooglePlaces, prefetchGooglePlaces, providerLabel, suggest } from '../lib/placesAutocomplete';

// Address autocomplete for the pickup / drop-off fields. Suggestions come from
// Google Maps Places when REACT_APP_GOOGLE_MAPS_API_KEY is configured, and
// from the free Photon geocoder otherwise (see lib/placesAutocomplete).
// Selecting a suggestion fills the formatted address via onChange.
//
// Two looks: the booking form's floating "bk-input" style (default), or a
// plain input when `inputClassName` is passed (contact page).

const AIRPORT_PICKS = [
  { main: 'Washington Dulles International Airport (IAD)', secondary: 'Dulles, VA', isAirport: true, source: 'local' },
  { main: 'Ronald Reagan Washington National Airport (DCA)', secondary: 'Arlington, VA', isAirport: true, source: 'local' },
  { main: 'Baltimore/Washington International Airport (BWI)', secondary: 'Baltimore, MD', isAirport: true, source: 'local' },
];

// Bias results toward the Dulles / DC metro area.
const BIAS = { lat: 38.95, lng: -77.35 };


// Google Maps-style icons per place type.
const ICONS = { airport: Plane, hotel: Hotel, landmark: Landmark, transit: TrainFront, city: Building2, address: MapPin };
const SuggestionIcon = ({ item, size, className }) => {
  const Icon = item.isAirport ? Plane : ICONS[item.kind] || MapPin;
  return <Icon size={size} className={className} />;
};

const labelOf = (item) => (item.secondary ? `${item.main}, ${item.secondary}` : item.main);

const AddressAutocomplete = ({
  label,
  name,
  value,
  onChange,
  required = false,
  className = '',
  style,
  inputClassName,
  placeholder,
  testId,
}) => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [highlight, setHighlight] = useState(-1);
  const abortRef = useRef(null);
  const timerRef = useRef(null);
  const plain = Boolean(inputClassName);

  useEffect(() => () => {
    if (abortRef.current) abortRef.current.abort();
    if (timerRef.current) clearTimeout(timerRef.current);
  }, []);

  const fetchSuggestions = useCallback((q) => {
    if (abortRef.current) abortRef.current.abort();
    const ctrl = new AbortController();
    abortRef.current = ctrl;
    setLoading(true);
    suggest(q, { bias: BIAS, signal: ctrl.signal })
      .then((results) => {
        if (ctrl.signal.aborted) return;
        const seen = new Set();
        setItems(results.filter((s) => { const k = labelOf(s); return k && !seen.has(k) && seen.add(k); }).slice(0, 6));
        setHighlight(-1);
        setLoading(false);
      })
      .catch((err) => {
        if (err && err.name === 'AbortError') return;
        setItems([]);
        setLoading(false);
      });
  }, []);

  const handleInput = (e) => {
    const q = e.target.value;
    onChange(q);
    if (timerRef.current) clearTimeout(timerRef.current);
    // Google answers usefully from two characters; Photon needs three.
    if (q.trim().length < (hasGooglePlaces() ? 2 : 3)) {
      setItems([]);
      setLoading(false);
      setOpen(true);
      return;
    }
    setOpen(true);
    timerRef.current = setTimeout(() => fetchSuggestions(q.trim()), 120);
  };

  const select = (item) => {
    onChange(item.address || labelOf(item));
    setItems([]);
    setOpen(false);
  };

  const showAirports = value.trim().length === 0;
  const visible = showAirports ? AIRPORT_PICKS : items;

  const onKeyDown = (e) => {
    if (!open || visible.length === 0) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlight((h) => (h + 1) % visible.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlight((h) => (h - 1 + visible.length) % visible.length);
    } else if (e.key === 'Enter' && highlight >= 0) {
      e.preventDefault();
      select(visible[highlight]);
    } else if (e.key === 'Escape') {
      setOpen(false);
    }
  };

  return (
    <div className={`relative ${open ? 'z-40' : ''} ${className}`} style={style}>
      <input
        type="text"
        name={name}
        value={value}
        onChange={handleInput}
        onFocus={() => {
          prefetchGooglePlaces();
          setOpen(true);
        }}
        onBlur={() => setOpen(false)}
        onKeyDown={onKeyDown}
        required={required}
        placeholder={plain ? placeholder || label : ' '}
        autoComplete="off"
        className={plain ? `${inputClassName} pr-10` : 'bk-input pr-10'}
        aria-label={label}
        data-testid={testId}
      />
      {!plain && <label className="bk-label">{label}{required ? ' *' : ''}</label>}
      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#d4af37]/70 pointer-events-none">
        {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <MapPin className="w-4 h-4" />}
      </span>

      {open && visible.length > 0 && (
        <div
          className="absolute z-50 left-0 right-0 mt-2 border border-white/20 rounded-xl shadow-[0_12px_40px_rgba(0,0,0,0.85)] overflow-hidden bk-scale-in"
          style={{ backgroundColor: '#1a1a1a' }}
        >
          {showAirports && (
            <div className="px-4 pt-2.5 pb-1 text-[10px] uppercase tracking-widest text-white/35">
              Popular airports
            </div>
          )}
          <ul className="max-h-64 overflow-y-auto overscroll-contain">
            {visible.map((item, i) => (
              <li key={`${item.placeId || ''}${labelOf(item)}`}>
                <button
                  type="button"
                  onMouseDown={(e) => {
                    e.preventDefault();
                    select(item);
                  }}
                  onTouchStart={() => setHighlight(i)}
                  onMouseEnter={() => setHighlight(i)}
                  className={`w-full flex items-start gap-2.5 px-4 py-3 text-left text-sm transition-colors duration-150 hover:bg-[#d4af37]/20 hover:text-white ${
                    i === highlight ? 'bg-[#d4af37]/20 text-white' : 'text-white/90'
                  }`}
                >
                  <SuggestionIcon item={item} className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#d4af37]" />
                  <span className="leading-snug">
                    {item.main}
                    {item.secondary && <span className="block text-xs text-white/50">{item.secondary}</span>}
                  </span>
                </button>
              </li>
            ))}
          </ul>
          {!showAirports && (
            <div className="px-4 py-1.5 border-t border-white/10 text-[10px] text-white/30 text-right">
              {providerLabel(items)}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AddressAutocomplete;
