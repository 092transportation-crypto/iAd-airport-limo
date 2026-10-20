import React from 'react';
import { Link } from 'react-router-dom';

// Shared "Related Services" + "Nearby Areas" block used by the landing-page,
// route-page and blog-post templates so every page links out to at least a
// handful of other pages in two clearly-labeled, crawlable groups. Either
// list can be omitted; each renders only when it has items.
const LinkGrid = ({ title, items }) => {
  if (!items || items.length === 0) return null;
  return (
    <div className="mb-10 last:mb-0">
      <h3 className="font-display text-lg sm:text-xl text-white/80 mb-4 text-center">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-center">
        {items.map((r) => (
          <Link key={r.to} to={r.to} className="text-white/60 hover:text-white text-sm py-2 border border-white/10 hover:border-white/40 transition-colors">
            {r.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

const RelatedLinksSection = ({ services, areas, className = '' }) => (
  <section className={`py-12 bg-black border-t border-white/10 ${className}`} data-testid="related-links-section">
    <div className="max-w-5xl mx-auto px-4 sm:px-6">
      <LinkGrid title="Related Services" items={services} />
      <LinkGrid title="Nearby Areas" items={areas} />
    </div>
  </section>
);

export default RelatedLinksSection;
