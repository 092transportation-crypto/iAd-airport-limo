import React from 'react';
import { ChevronRight } from 'lucide-react';

// Visible FAQ block matching the FAQPage schema injected by <Seo faqs={...} />.
const FaqSection = ({ faqs, dark = true }) => (
  <section className={`py-14 md:py-20 ${dark ? 'bg-[#0a0a0a] border-t border-white/10' : 'bg-white'}`}>
    <div className="max-w-3xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-10">
        <p className={`font-accent text-xs tracking-widest uppercase mb-3 ${dark ? 'text-white/40' : 'text-black/40'}`}>FAQ</p>
        <h2 className={`font-display text-3xl sm:text-4xl ${dark ? 'text-white' : 'text-black'}`}>Frequently Asked Questions</h2>
      </div>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <details key={idx} className={`border group ${dark ? 'border-white/10' : 'border-black/10'}`}>
            <summary className={`cursor-pointer list-none p-5 flex justify-between items-center gap-4 font-semibold text-sm sm:text-base ${dark ? 'text-white hover:bg-white/5' : 'text-black hover:bg-black/5'}`}>
              {faq.question}
              <ChevronRight className="w-4 h-4 flex-shrink-0 transition-transform group-open:rotate-90" />
            </summary>
            <p className={`px-5 pb-5 text-sm sm:text-base leading-relaxed ${dark ? 'text-white/60' : 'text-black/60'}`}>{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export default FaqSection;
