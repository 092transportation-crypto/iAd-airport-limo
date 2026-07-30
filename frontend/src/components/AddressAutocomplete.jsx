import React, { useCallback, useEffect, useRef, useState } from 'react';
import { MapPin, Plane, Loader2 } from 'lucide-react';

// Address autocomplete backed by Photon (photon.komoot.io) — free, no API key,
// OpenStreetMap data. Results are biased toward the Dulles / DC metro area.

const AIRPORT_PICKS = [
  'Washington Dulles International Airport (IAD), Dulles, VA',
  'Ronald Reagan Washington National Airport (DCA), Arlington, VA',
  'Baltimore/Washington International Airport (BWI), Baltimore, MD',
];

const formatSuggestion = (feature) => {
  const p = feature.properties || {};
  const street = [p.housenumber, p.street].filter(Boolean).join(' ');
  const seen = new Set();
  return [p.name, street, p.district, p.city, p.state, p.postcode]
    .filter((part) => part && !seen.has(part) && seen.add(part))
    .join(', ');
};

const AddressAutocomplete = ({ label, name, value, onChange, required = false, className = '', style }) => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [highlight, setHighlight] = useState(-1);
  const abortRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => () => {
    if (abortRef.current) abortRef.current.abort();
    if (timerRef.current) clearTimeout(timerRef.current);
  }, []);

  const fetchSuggestions = useCallback((q) => {
    if (abortRef.current) abortRef.current.abort();
    const ctrl = new AbortController();
    abortRef.current = ctrl;
    setLoading(true);
    fetch(
      `https://photon.komoot.io/api/?q=${encodeURIComponent(q)}&limit=6&lat=38.95&lon=-77.35&lang=en`,
      { signal: ctrl.signal }
    )
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error('bad response'))))
      .then((data) => {
        const seen = new Set();
        const labels = (data.features || [])
          .filter((f) => (f.properties || {}).countrycode === 'US')
          .map(formatSuggestion)
          .filter((s) => s && !seen.has(s) && seen.add(s))
          .slice(0, 6);
        setItems(labels);
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
    if (q.trim().length < 3) {
      setItems([]);
      setLoading(false);
      setOpen(true);
      return;
    }
    setOpen(true);
    timerRef.current = setTimeout(() => fetchSuggestions(q.trim()), 250);
  };

  const select = (text) => {
    onChange(text);
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
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        onKeyDown={onKeyDown}
        required={required}
        placeholder=" "
        autoComplete="off"
        className="bk-input pr-10"
        aria-label={label}
      />
      <label className="bk-label">{label}{required ? ' *' : ''}</label>
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
              <li key={item}>
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
                  {showAirports ? (
                    <Plane className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#d4af37]" />
                  ) : (
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#d4af37]" />
                  )}
                  <span className="leading-snug">{item}</span>
                </button>
              </li>
            ))}
          </ul>
          {!showAirports && (
            <div className="px-4 py-1.5 border-t border-white/10 text-[10px] text-white/30 text-right">
              Suggestions © OpenStreetMap
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AddressAutocomplete;
