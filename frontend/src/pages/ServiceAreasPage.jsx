import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import FaqSection from '../components/FaqSection';
import routesData from '../data/routesData';
import venuesData from '../data/venuesData';
import { MARYLAND_PAGES } from '../data/marylandPages';
import { GUIDES } from '../data/guides';

// Hub page: one crawlable link to every data-driven landing page. Most of
// these were previously reachable only from the sitemap or from each other.
const md = (type) => MARYLAND_PAGES.filter((p) => p.type === type).map((p) => ({ to: `/${p.slug}`, label: p.h1 }));
const GROUPS = [
  { title: 'Chauffeur Services', items: [
    { to: '/airport-transfer', label: 'Airport Transfers' }, { to: '/corporate', label: 'Corporate Travel' },
    { to: '/wedding-limo', label: 'Wedding Limo' }, { to: '/prom-limo', label: 'Prom Limo' }, { to: '/birthday-limo', label: 'Birthday Limo' },
    { to: '/wine-tours', label: 'Wine Tours' }, { to: '/concert-transportation', label: 'Concert Transportation' }, ...md('service'),
  ] },
  { title: 'Routes from Dulles (IAD)', items: routesData.map((r) => ({ to: `/${r.slug}`, label: r.h1 })) },
  { title: 'Cities We Serve', items: md('city') },
  { title: 'More Airport & City Routes', items: md('route') },
  { title: 'Events & Venues', items: [...venuesData.map((v) => ({ to: `/${v.slug}`, label: v.h1 })), ...md('event')] },
  { title: 'Guides', items: GUIDES.map((g) => ({ to: `/${g.slug}`, label: g.title })) },
];

const faqs = [
  { question: 'What areas does IAD Airport Limo cover?', answer: 'Northern Virginia — Loudoun, Fairfax, Arlington and Alexandria — plus Washington DC and Maryland, with airport service at Dulles (IAD), Reagan National (DCA) and BWI.' },
  { question: 'My town is not listed — can I still book?', answer: 'Almost certainly. The listed pages are the places we are asked about most, not the limit of where we drive. Send your addresses through the booking form or call (877) 609-1919.' },
  { question: 'Is the rate the same from every town?', answer: 'No — rates depend on distance and vehicle. Every trip is quoted as a flat rate before you book, and the rate is confirmed with you before your card is charged.' },
  { question: 'Do you track flights for Dulles pickups?', answer: 'Yes. Every airport pickup is flight-tracked, and airport pickups include 45 minutes of complimentary waiting time on domestic arrivals and 60 minutes on international arrivals.' },
  { question: 'What is the cancellation policy?', answer: 'Sedan and SUV reservations cancel free of charge up to 3 hours before pickup. Sprinter vans, limousines and special-event bookings cancel free of charge up to 12 hours before pickup.' },
];

const ServiceAreasPage = () => (
  <div className="min-h-screen bg-black" data-testid="service-areas-page">
    <Seo
      title="Service Areas | Northern Virginia, DC & Maryland | IAD Limo"
      description="Every city, Dulles airport route, venue and service IAD Airport Limo covers across Northern Virginia, Washington DC and Maryland. Call (877) 609-1919."
      path="/service-areas"
      faqs={faqs}
    />
    <Navbar />
    <section className="pt-40 pb-16 md:pt-48 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <p className="font-accent text-white/50 text-xs sm:text-sm tracking-[0.2em] uppercase mb-4">Service Areas</p>
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-white font-medium leading-tight mb-4">Where IAD Airport Limo Drives</h1>
        <p className="font-body text-white/60 text-base sm:text-lg max-w-2xl mx-auto mb-8">
          Chauffeured car service from Dulles across Northern Virginia, Washington DC and Maryland — every route, city,
          venue and service we publish a page for, in one place.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/book-now" className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 font-bold uppercase text-sm tracking-wider hover:bg-white/90 transition-colors">
            Book Now <ArrowRight className="w-4 h-4" />
          </Link>
          <a href="tel:+18776091919" className="inline-flex items-center justify-center gap-2 border border-white text-white px-8 py-4 font-bold uppercase text-sm tracking-wider hover:bg-white hover:text-black transition-colors">
            <Phone className="w-4 h-4" /> (877) 609-1919
          </a>
        </div>
      </div>
    </section>
    <section className="py-14 bg-[#0a0a0a] border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        {GROUPS.filter((g) => g.items.length).map((group) => (
          <div key={group.title} data-testid="service-area-group">
            <h2 className="font-display text-2xl sm:text-3xl text-white mb-5">{group.title}</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
              {group.items.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="font-body text-white/60 hover:text-white transition-colors text-sm sm:text-base">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
    <FaqSection faqs={faqs} />
    <Footer />
  </div>
);

export default ServiceAreasPage;
