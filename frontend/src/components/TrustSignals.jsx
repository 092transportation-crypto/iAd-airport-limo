import React from 'react';
import { ShieldCheck, Zap, BadgeDollarSign } from 'lucide-react';

// Compact trust line shown near CTAs and booking forms.
const signals = [
  { icon: ShieldCheck, label: 'Licensed & Insured' },
  { icon: Zap, label: 'Instant Confirmation' },
  { icon: BadgeDollarSign, label: 'Flat Rates No Surge' },
];

const TrustSignals = ({ className = '', dark = false }) => (
  <div data-testid="trust-signals" className={`flex flex-wrap items-center justify-center gap-x-4 gap-y-1 ${className}`}>
    {signals.map(({ icon: Icon, label }, i) => (
      <span
        key={label}
        className={`flex items-center gap-1.5 text-xs sm:text-sm whitespace-nowrap ${dark ? 'text-black/70' : 'text-white/60'}`}
      >
        <Icon className={`w-3.5 h-3.5 flex-shrink-0 ${dark ? 'text-black' : 'text-white'}`} />
        {label}
        {i < signals.length - 1 && <span className={`ml-2.5 hidden sm:inline ${dark ? 'text-black/40' : 'text-white/30'}`}>•</span>}
      </span>
    ))}
  </div>
);

export default TrustSignals;
