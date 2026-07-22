import React from 'react';
import { Phone } from 'lucide-react';

// Always-visible floating Call Now button, bottom-right on every page.
const FloatingCallButton = () => (
  <a
    href="tel:+18776091919"
    aria-label="Call IAD Airport Limo now at (877) 609-1919"
    data-testid="floating-call-button"
    className="fixed bottom-5 right-5 z-50 flex items-center gap-2.5 bg-white text-black pl-4 pr-5 py-3.5 rounded-full font-bold text-base uppercase tracking-wider shadow-2xl shadow-white/20 hover:bg-white/90 active:scale-95 transition-all"
  >
    <span className="relative flex items-center justify-center">
      <span className="absolute inline-flex h-full w-full rounded-full bg-black/20 animate-ping" />
      <Phone className="w-5 h-5 relative" />
    </span>
    Call Now
  </a>
);

export default FloatingCallButton;
