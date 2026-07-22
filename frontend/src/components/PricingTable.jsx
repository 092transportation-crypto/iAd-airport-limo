import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight } from 'lucide-react';
import TrustSignals from './TrustSignals';

const rates = [
  { route: 'IAD to Washington DC', price: 75, href: '/iad-to-washington-dc', note: 'Downtown, Capitol Hill & hotels' },
  { route: 'IAD to Arlington', price: 70, href: '/iad-to-arlington', note: 'Rosslyn, Crystal City, Pentagon' },
  { route: 'IAD to Bethesda', price: 85, href: '/iad-to-bethesda', note: 'NIH, downtown Bethesda' },
  { route: 'IAD to Tysons', price: 65, href: '/iad-to-tysons', note: 'Tysons Corner business district' },
  { route: 'IAD to Baltimore', price: 145, href: '/iad-to-baltimore', note: 'Long-distance flat rate' },
];

const PricingTable = () => (
  <section className="py-16 md:py-20 bg-[#0a0a0a] border-b border-white/10" data-testid="pricing-table">
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-10">
        <p className="font-accent text-white/40 text-xs tracking-widest uppercase mb-3">Flat-Rate Transfers</p>
        <h2 className="font-display text-3xl sm:text-4xl text-white mb-4">Simple, Upfront Pricing</h2>
        <p className="text-white/60 max-w-2xl mx-auto text-sm sm:text-base">
          Know your fare before you ride. Every quote is a flat rate — no meters, no surge, no surprises at the curb.
        </p>
      </div>

      <div className="border border-white/15 divide-y divide-white/10">
        {rates.map(({ route, price, href, note }, i) => (
          <Link
            key={href}
            to={href}
            data-testid={`pricing-row-${i}`}
            className="flex items-center justify-between gap-4 px-4 sm:px-8 py-5 hover:bg-white/5 transition-colors group"
          >
            <div className="min-w-0">
              <p className="text-white font-semibold text-base sm:text-lg">{route}</p>
              <p className="text-white/40 text-xs sm:text-sm mt-0.5">{note}</p>
            </div>
            <div className="flex items-center gap-3 sm:gap-5 flex-shrink-0">
              <div className="text-right">
                <p className="text-white/40 text-xs uppercase tracking-wider">from</p>
                <p className="text-white font-bold text-2xl sm:text-3xl leading-none">${price}</p>
              </div>
              <ArrowRight className="w-5 h-5 text-white/30 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8 flex flex-col items-center gap-4">
        <a
          href="tel:+18776091919"
          className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 font-bold uppercase tracking-wider text-sm hover:bg-white/90 transition-colors"
        >
          <Phone className="w-4 h-4" />
          Lock In Your Flat Rate — (877) 609-1919
        </a>
        <TrustSignals />
      </div>
    </div>
  </section>
);

export default PricingTable;
