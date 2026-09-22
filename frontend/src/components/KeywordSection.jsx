import React from 'react';
import { keywordSection } from '../lib/keywordSection';

// Keyword-rich H2 + two paragraphs (see lib/keywordSection.js), dark theme.
const KeywordSection = ({ slug, place, kind }) => {
  const kw = keywordSection(slug, place, kind);
  return (
    <section className="py-14 md:py-20 bg-black border-t border-white/10" data-testid="keyword-section">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="font-display text-2xl sm:text-3xl text-white mb-6">{kw.h2}</h2>
        {kw.text.map((t) => (
          <p key={t.slice(0, 40)} className="text-white/70 text-base sm:text-lg leading-relaxed mb-5">{t}</p>
        ))}
      </div>
    </section>
  );
};

export default KeywordSection;
