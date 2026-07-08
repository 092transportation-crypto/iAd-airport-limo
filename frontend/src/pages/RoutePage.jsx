import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import routes from '../data/routesData';
import { Phone, ArrowRight, MapPin, Clock, Route as RouteIcon, Shield, Plane, ChevronRight } from 'lucide-react';

const RoutePage = ({ slug }) => {
  const route = routes.find((r) => r.slug === slug);
  const otherRoutes = routes.filter((r) => r.slug !== slug);

  return (
    <div className="min-h-screen bg-black">
      <Seo
        title={route.metaTitle}
        description={route.metaDescription}
        path={`/${route.slug}`}
        faqs={route.faqs}
      />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-16 md:pt-48 md:pb-20 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-black" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="font-accent text-white/50 text-xs sm:text-sm tracking-[0.2em] uppercase mb-4 flex items-center justify-center gap-2">
            <Plane className="w-4 h-4" /> Dulles International Airport Transfers
          </p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-white font-medium leading-tight mb-4">{route.h1}</h1>
          <p className="font-body text-white/60 text-base sm:text-lg max-w-2xl mx-auto mb-8">{route.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/book-now" className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 font-bold uppercase tracking-wider hover:bg-white/90 transition-colors text-sm" data-testid="route-book-now-btn">
              Book Your Transfer <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="tel:8776091919" className="inline-flex items-center justify-center gap-2 border border-white text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all text-sm">
              <Phone className="w-4 h-4" /> (877) 609-1919
            </a>
          </div>
        </div>
      </section>

      {/* Trip Facts */}
      <section className="py-8 bg-[#0a0a0a] border-y border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center gap-1">
              <MapPin className="w-5 h-5 text-white/60" />
              <p className="text-white font-semibold">{route.distance}</p>
              <p className="text-white/40 text-xs uppercase tracking-wider">Distance</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Clock className="w-5 h-5 text-white/60" />
              <p className="text-white font-semibold">{route.duration}</p>
              <p className="text-white/40 text-xs uppercase tracking-wider">Typical Travel Time</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <RouteIcon className="w-5 h-5 text-white/60" />
              <p className="text-white font-semibold">{route.corridor}</p>
              <p className="text-white/40 text-xs uppercase tracking-wider">Primary Route</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 md:py-20 bg-black">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {route.intro.map((para, idx) => (
            <p key={idx} className="text-white/70 text-base sm:text-lg leading-relaxed mb-6">{para}</p>
          ))}
          {route.sections.map((section, idx) => (
            <div key={idx} className="mt-10">
              <h2 className="font-display text-2xl sm:text-3xl text-white mb-5">{section.heading}</h2>
              {section.paragraphs.map((para, pIdx) => (
                <p key={pIdx} className="text-white/70 text-base sm:text-lg leading-relaxed mb-6">{para}</p>
              ))}
            </div>
          ))}
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
            {route.faqs.map((faq, idx) => (
              <details key={idx} className="border border-white/10 group">
                <summary className="cursor-pointer list-none p-5 flex justify-between items-center gap-4 text-white font-semibold text-sm sm:text-base hover:bg-white/5">
                  {faq.question}
                  <ChevronRight className="w-4 h-4 flex-shrink-0 transition-transform group-open:rotate-90" />
                </summary>
                <p className="px-5 pb-5 text-white/60 text-sm sm:text-base leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Other Routes */}
      <section className="py-12 bg-black border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-xl sm:text-2xl text-white text-center mb-8">More Dulles Airport Routes</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-center">
            {otherRoutes.map((r) => (
              <Link key={r.slug} to={`/${r.slug}`} className="text-white/60 hover:text-white text-sm py-2 border border-white/10 hover:border-white/40 transition-colors">
                IAD to {r.shortName}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-[#0a0a0a] border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl sm:text-4xl text-white mb-4">Ready to Ride from IAD to {route.shortName}?</h2>
          <p className="text-white/50 text-base mb-8">Flat rates, flight tracking, and a professional chauffeur — available 24/7.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/book-now" className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 font-bold uppercase tracking-wider hover:bg-white/90 text-sm">
              Book Now <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="tel:8776091919" className="inline-flex items-center justify-center gap-2 border border-white text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all text-sm">
              <Phone className="w-4 h-4" /> Call (877) 609-1919
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RoutePage;
