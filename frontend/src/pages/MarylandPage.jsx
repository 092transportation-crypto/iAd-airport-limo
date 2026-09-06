import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import { findMarylandPage } from '../data/marylandPages';
import { Phone, ArrowRight, MapPin, Clock, Route as RouteIcon, Shield, Users, ChevronRight } from 'lucide-react';

const SITE_URL = 'https://www.iadairportlimo.com';
const SCHEMA_ID = 'maryland-page-schema';
const STAT_ICONS = [MapPin, Clock, RouteIcon];

// Maryland city, route and service landing pages — same layout as RoutePage;
// content lives in src/data/marylandPages.js.
const MarylandPage = ({ slug }) => {
  const page = findMarylandPage(slug);

  // LocalBusiness + Service + Breadcrumb JSON-LD (Seo handles the FAQ schema).
  useEffect(() => {
    if (!page) return undefined;
    const canonical = `${SITE_URL}/${page.slug}`;
    const graph = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'LocalBusiness',
          '@id': `${SITE_URL}/#business`,
          name: 'IAD Airport Limo',
          telephone: '+1-877-609-1919',
          url: SITE_URL,
          priceRange: '$$',
          address: { '@type': 'PostalAddress', addressRegion: 'VA', addressCountry: 'US' },
          areaServed: page.schema.areaServed.map((a) => ({ '@type': 'Place', name: a })),
          openingHours: 'Mo-Su 00:00-23:59',
        },
        {
          '@type': 'Service',
          name: page.h1,
          serviceType: page.schema.serviceType,
          url: canonical,
          description: page.metaDescription,
          areaServed: page.schema.areaServed.map((a) => ({ '@type': 'Place', name: a })),
          provider: { '@id': `${SITE_URL}/#business` },
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
            { '@type': 'ListItem', position: 2, name: page.h1, item: canonical },
          ],
        },
      ],
    };
    document.querySelectorAll(`script[data-seo="${SCHEMA_ID}"]`).forEach((s) => s.remove());
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.dataset.seo = SCHEMA_ID;
    script.textContent = JSON.stringify(graph);
    document.head.appendChild(script);
    window.scrollTo(0, 0);
    return () => {
      document.querySelectorAll(`script[data-seo="${SCHEMA_ID}"]`).forEach((s) => s.remove());
    };
  }, [page]);

  if (!page) return null;

  const faqs = page.faqs.map((f) => ({ question: f.q, answer: f.a }));

  return (
    <div className="min-h-screen bg-black" data-testid={`maryland-page-${page.slug}`}>
      <Seo title={page.metaTitle} description={page.metaDescription} path={`/${page.slug}`} faqs={faqs} />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-16 md:pt-48 md:pb-20 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-black" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="font-accent text-white/50 text-xs sm:text-sm tracking-[0.2em] uppercase mb-4 flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4" /> {page.badge}
          </p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-white font-medium leading-tight mb-4">{page.h1}</h1>
          <p className="font-body text-white/60 text-base sm:text-lg max-w-2xl mx-auto mb-8">{page.intro[0]}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/book-now" className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 font-bold uppercase tracking-wider hover:bg-white/90 transition-colors text-sm" data-testid="maryland-book-cta">
              Book Now <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="tel:+18776091919" className="inline-flex items-center justify-center gap-2 border border-white text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all text-sm" data-testid="maryland-call-cta">
              <Phone className="w-4 h-4" /> (877) 609-1919
            </a>
          </div>
        </div>
      </section>

      {/* Facts */}
      <section className="py-8 bg-[#0a0a0a] border-y border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {page.stats.slice(0, 3).map((s, i) => {
              const Icon = STAT_ICONS[i % STAT_ICONS.length];
              return (
                <div key={s.label} className="flex flex-col items-center gap-1">
                  <Icon className="w-5 h-5 text-white/60" />
                  <p className="text-white font-semibold">{s.value}</p>
                  <p className="text-white/40 text-xs uppercase tracking-wider">{s.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 md:py-20 bg-black">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {page.intro.slice(1).map((para, idx) => (
            <p key={idx} className="text-white/70 text-base sm:text-lg leading-relaxed mb-6">{para}</p>
          ))}

          <ul className="my-8 grid sm:grid-cols-2 gap-3">
            {page.highlights.map((h) => (
              <li key={h} className="flex items-start gap-3 border border-white/10 p-4 text-white/80 text-sm sm:text-base">
                <ChevronRight className="w-4 h-4 mt-1 flex-shrink-0 text-white/50" /> {h}
              </li>
            ))}
          </ul>

          {page.sections.map((section, idx) => (
            <div key={idx} className="mt-10">
              <h2 className="font-display text-2xl sm:text-3xl text-white mb-5">{section.h2}</h2>
              {section.paragraphs.map((para, pIdx) => (
                <p key={pIdx} className="text-white/70 text-base sm:text-lg leading-relaxed mb-6">{para}</p>
              ))}
            </div>
          ))}

          <div className="mt-10">
            <h2 className="font-display text-2xl sm:text-3xl text-white mb-5">Vehicles</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {page.vehicles.map((v) => (
                <div key={v.name} className="border border-white/10 p-4">
                  <p className="text-white/40 text-xs uppercase tracking-wider">{v.cls}</p>
                  <p className="text-white font-semibold mt-1">{v.name}</p>
                  <p className="text-white/60 text-sm mt-1 flex items-center gap-2"><Users className="w-4 h-4" /> Up to {v.seats} · {v.best}</p>
                </div>
              ))}
            </div>
            <Link to="/fleet" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mt-4 uppercase tracking-wider">
              View the fleet <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-3 border border-white/15 p-5">
            <Shield className="w-6 h-6 text-white flex-shrink-0" />
            <p className="text-white/80 text-sm sm:text-base">Licensed &amp; Insured Virginia &amp; Maryland Carrier — professional chauffeurs, commercial insurance, 24/7 dispatch.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 md:py-20 bg-[#0a0a0a] border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="font-accent text-white/40 text-xs tracking-widest uppercase mb-3">FAQ</p>
            <h2 className="font-display text-3xl sm:text-4xl text-white">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {page.faqs.map((faq, idx) => (
              <details key={idx} className="border border-white/10 group">
                <summary className="cursor-pointer list-none p-5 flex justify-between items-center gap-4 text-white font-semibold text-sm sm:text-base hover:bg-white/5">
                  {faq.q}
                  <ChevronRight className="w-4 h-4 flex-shrink-0 transition-transform group-open:rotate-90" />
                </summary>
                <p className="px-5 pb-5 text-white/60 text-sm sm:text-base leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-black border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-xl sm:text-2xl text-white text-center mb-8">Related Maryland Service</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-center">
            {page.related.map((r) => (
              <Link key={r.to} to={r.to} className="text-white/60 hover:text-white text-sm py-2 border border-white/10 hover:border-white/40 transition-colors">
                {r.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-[#0a0a0a] border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl sm:text-4xl text-white mb-4">Ready to Book {page.name}?</h2>
          <p className="text-white/50 text-base mb-8">Flat rates, flight tracking and a professional chauffeur — available 24/7.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/book-now" className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 font-bold uppercase tracking-wider hover:bg-white/90 text-sm">
              Book Now <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="tel:+18776091919" className="inline-flex items-center justify-center gap-2 border border-white text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all text-sm">
              <Phone className="w-4 h-4" /> Call (877) 609-1919
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MarylandPage;
