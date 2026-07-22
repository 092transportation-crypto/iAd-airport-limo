import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import FaqSection from '../components/FaqSection';
import PricingTable from '../components/PricingTable';
import QuickQuoteForm from '../components/QuickQuoteForm';
import TrustSignals from '../components/TrustSignals';
import { ChevronRight, Users, Briefcase, Plane, Wine, Heart, Star, Shield, Clock, Award, Phone, ArrowRight, Search } from 'lucide-react';

const homeFaqs = [
  {
    question: 'How do I book an IAD airport car service?',
    answer:
      'Book online through our booking page in under two minutes, or call (877) 609-1919 any hour. You receive a written flat-rate confirmation with your chauffeur and vehicle details.',
  },
  {
    question: 'Do you track flights arriving at Dulles Airport?',
    answer:
      'Yes. Every airport pickup includes automatic flight tracking. If your flight lands early or late, your chauffeur adjusts at no extra charge.',
  },
  {
    question: 'What areas does your Dulles airport limo service cover?',
    answer:
      'We serve Washington DC, Maryland, and Virginia — including Bethesda, Arlington, Alexandria, Tysons, Rockville, Silver Spring, Annapolis, Columbia, and Baltimore — plus transfers between IAD, DCA, and BWI.',
  },
  {
    question: 'What vehicles are in your fleet?',
    answer:
      'Executive sedans including the Mercedes-Benz S-Class and BMW 7 Series, luxury SUVs like the Cadillac Escalade, Lincoln Navigator, Chevy Suburban, and GMC Yukon XL, and Mercedes Sprinter vans for up to 13 passengers.',
  },
  {
    question: 'Is your car service licensed and insured?',
    answer:
      'Yes. We are a licensed and insured Virginia and Maryland carrier with commercial insurance and background-checked professional chauffeurs.',
  },
];

const HomePage = () => {
  const [activeFleetTab, setActiveFleetTab] = useState('all');

  const logo = '/logo.png';

  const fleetImages = {
    eclass: 'https://92limo.com/wp-content/uploads/2025/06/mercedes-e-class-removebg-preview-300x138.png',
    sclass: '/mercedes-sclass-new.png',
    escalade: 'https://92limo.com/wp-content/uploads/2025/06/cadillac-escalade-300x169.png',
    sprinter: 'https://92limo.com/wp-content/uploads/2025/06/mercedes-sprinter-300x200.png',
    navigator: '/lincoln-navigator-new.png',
    suburban: '/chevy-suburban-new.png',
    yukon: '/gmc-yukon-new.png',
    bmw7: '/bmw-7-new.png',
  };

  const images = {
    hero: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1920&q=85',
    airport: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=85',
    wedding: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=85',
    corporate: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=85',
    wine: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&q=85',
    nightCity: 'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?w=1920&q=85',
  };

  const allVehicles = [
    { name: 'BMW 7 Series', subtitle: '2022 Premium Sedan', category: 'Sedan', pax: 3, luggage: 2, image: fleetImages.bmw7 },
    { name: 'Business Class', subtitle: 'Mercedes E-Class', category: 'Sedan', pax: 3, luggage: 2, image: fleetImages.eclass },
    { name: 'First Class', subtitle: 'Mercedes S-Class', category: 'Sedan', pax: 3, luggage: 2, image: fleetImages.sclass },
    { name: 'Lincoln Navigator L', subtitle: '2024 Premium SUV', category: 'SUV', pax: 6, luggage: 5, image: fleetImages.navigator },
    { name: 'Cadillac Escalade', subtitle: 'Premium SUV', category: 'SUV', pax: 5, luggage: 5, image: fleetImages.escalade },
    { name: 'Chevy Suburban', subtitle: '2025 Luxury SUV', category: 'SUV', pax: 6, luggage: 6, image: fleetImages.suburban },
    { name: 'GMC Yukon XL', subtitle: '2024 Luxury SUV', category: 'SUV', pax: 6, luggage: 6, image: fleetImages.yukon },
    { name: 'Sprinter Van', subtitle: 'Mercedes Sprinter', category: 'Van', pax: 13, luggage: 12, image: fleetImages.sprinter },
  ];

  const fleetData = {
    all: allVehicles,
    sedans: allVehicles.filter(v => v.category === 'Sedan'),
    suv: allVehicles.filter(v => v.category === 'SUV'),
    sprinter: allVehicles.filter(v => v.category === 'Van'),
  };

  const services = [
    { icon: <Plane className="w-6 h-6 md:w-8 md:h-8" />, title: 'Airport Transfers', desc: 'IAD, DCA, BWI', link: '/airport-transfer', image: images.airport },
    { icon: <Briefcase className="w-6 h-6 md:w-8 md:h-8" />, title: 'Corporate Travel', desc: 'Executive transportation', link: '/corporate', image: images.corporate },
    { icon: <Heart className="w-6 h-6 md:w-8 md:h-8" />, title: 'Weddings', desc: 'Your special day', link: '/wedding-limo', image: images.wedding },
    { icon: <Wine className="w-6 h-6 md:w-8 md:h-8" />, title: 'Wine Tours', desc: 'Virginia wine country', link: '/wine-tours', image: images.wine },
  ];

  const testimonials = [
    { text: "Exceptional service. The S-Class was immaculate and our chauffeur was outstanding.", author: "Michael R.", role: "Executive", rating: 5 },
    { text: "We use IAD Airport Limo for all corporate travel. Always reliable and professional.", author: "Sarah C.", role: "VP Operations", rating: 5 },
    { text: "Made our wedding day perfect. Highly recommend their services!", author: "James & Emily", role: "Newlyweds", rating: 5 },
  ];

  const currentFleet = fleetData[activeFleetTab] || fleetData.all;

  return (
    <div className="min-h-screen bg-black">
      <Seo
        title="Dulles Airport Transportation & Limo Service | IAD Airport Limo"
        description="IAD Airport Limo offers premium airport transportation in Dulles, VA. Mercedes & BMW luxury fleet, real-time flight tracking & meet & greet. Book 24/7. (877) 609-1919."
        path="/"
        faqs={homeFaqs}
      />
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 md:pt-0">
        <div className="absolute inset-0">
          <img src={images.hero} alt="Luxury Transportation" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6 py-8 w-full">
          <img src={logo} alt="IAD Airport Limo" className="w-40 sm:w-52 md:w-64 mx-auto mb-5 md:mb-6" style={{background:'transparent'}} data-testid="hero-logo" />
          <p className="font-accent text-white/60 text-xs sm:text-sm tracking-[0.2em] uppercase mb-4">IAD Dulles, Virginia, USA</p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-medium leading-tight mb-4 px-4">IAD Airport Limo - Premium Transportation</h1>
          <p className="font-body text-white/60 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-6 px-4">Arrive on time and in style with your trusted partner for executive travel.</p>

          {/* Big phone CTA */}
          <div className="mb-6">
            <p className="text-white/60 text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-2 flex items-center justify-center gap-2">
              <Phone className="w-4 h-4 text-white" /> Call or Text 24/7
            </p>
            <a
              href="tel:+18776091919"
              data-testid="hero-phone-number"
              className="inline-block font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white hover:text-white/80 transition-colors tracking-tight"
            >
              (877) 609-1919
            </a>
            <TrustSignals className="mt-3" />
          </div>

          {/* Quick quote form */}
          <div className="px-2 sm:px-4 mb-6">
            <QuickQuoteForm />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Link to="/book-now" className="inline-flex items-center justify-center gap-2 bg-white text-black px-6 sm:px-10 py-4 font-bold uppercase tracking-wider hover:bg-white/90 transition-colors text-sm sm:text-base" data-testid="hero-book-now-btn">Free Quote <ArrowRight className="w-4 h-4" /></Link>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 border border-white text-white px-6 sm:px-10 py-4 font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all text-sm sm:text-base" data-testid="hero-contact-btn">Contact Us</Link>
          </div>
        </div>
      </section>

      {/* Flight Tracking */}
      <section className="py-12 md:py-16 bg-[#0a0a0a] border-y border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4"><Plane className="w-5 h-5 text-white" /><p className="font-accent text-white/60 text-xs sm:text-sm tracking-widest uppercase">Live Flight Tracking</p></div>
          <h3 className="font-display text-2xl sm:text-3xl text-white mb-6">Track Your Flight</h3>
          <form onSubmit={(e) => { e.preventDefault(); const flight = e.target.flight.value.trim().toUpperCase(); if(flight) window.open(`https://www.flightaware.com/live/flight/${flight}`, '_blank'); }} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="text" name="flight" placeholder="Enter flight number (e.g., UA123)" className="flex-1 px-4 py-3 bg-black border border-white/20 text-white placeholder-white/40 focus:border-white outline-none text-sm" required />
            <button type="submit" className="px-6 py-3 bg-white text-black font-bold uppercase tracking-wider text-sm hover:bg-white/90 flex items-center justify-center gap-2"><Search className="w-4 h-4" /> Track</button>
          </form>
          <p className="text-white/40 text-xs mt-3">We monitor all flights for timely pickups</p>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-6 md:py-8 bg-black border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:flex md:justify-center items-center gap-4 md:gap-12">
            {[{ icon: <Shield className="w-4 h-4" />, text: 'Licensed & Insured' },{ icon: <Award className="w-4 h-4" />, text: 'Professional Chauffeurs' },{ icon: <Clock className="w-4 h-4" />, text: '24/7 Availability' },{ icon: <Star className="w-4 h-4" />, text: 'Flat-Rate Pricing' }].map((badge, idx) => (
              <div key={idx} className="flex items-center gap-2 text-white/60"><span className="text-white">{badge.icon}</span><span className="text-xs sm:text-sm">{badge.text}</span></div>
            ))}
          </div>
        </div>
      </section>

      {/* Flat-Rate Pricing */}
      <PricingTable />

      {/* Fleet */}
      <section className="py-16 md:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10"><p className="font-accent text-white/40 text-xs tracking-widest uppercase mb-3">Vehicles</p><h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white mb-4">Our Fleet</h2></div>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {['all', 'sedans', 'suv', 'sprinter'].map((tab) => (
              <button key={tab} onClick={() => setActiveFleetTab(tab)} className={`px-4 sm:px-6 py-2 text-xs sm:text-sm uppercase tracking-wider transition-all ${activeFleetTab === tab ? 'bg-white text-black font-semibold' : 'text-white/50 border border-white/20 hover:border-white hover:text-white'}`}>{tab === 'all' ? 'All' : tab}</button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {currentFleet.map((vehicle, idx) => (
              <div key={idx} className="luxury-card group overflow-hidden border border-white/10">
                <div className="h-48 sm:h-52 overflow-hidden">
                  <img src={vehicle.image} alt={vehicle.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-4 bg-black">
                  <div className="text-white/40 text-xs uppercase tracking-widest mb-1">{vehicle.category}</div>
                  <h3 className="font-display text-lg text-white mb-1">{vehicle.name}</h3>
                  <p className="text-white/40 text-xs mb-3">{vehicle.subtitle}</p>
                  <div className="flex items-center gap-4 mb-4 text-white/50 text-xs">
                    <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {vehicle.pax} PAX</span>
                    <span className="flex items-center gap-1"><Briefcase className="w-3 h-3" /> {vehicle.luggage} Bags</span>
                  </div>
                  <Link to="/book-now" className="block w-full py-3 bg-white text-black text-center font-semibold uppercase tracking-wider text-xs hover:bg-white/90">Free Quote</Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8"><Link to="/fleet" className="inline-flex items-center gap-2 text-white font-semibold uppercase tracking-wider text-sm hover:gap-4 transition-all">View Complete Fleet <ChevronRight className="w-4 h-4" /></Link></div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10"><p className="font-accent text-white/40 text-xs tracking-widest uppercase mb-3">Services</p><h2 className="font-display text-3xl sm:text-4xl text-white mb-4">What We Offer</h2></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((service, idx) => (
              <Link key={idx} to={service.link} className="group relative h-48 sm:h-56 overflow-hidden luxury-card">
                <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end">
                  <div className="text-white mb-2">{service.icon}</div>
                  <h3 className="font-display text-xl sm:text-2xl text-white mb-1">{service.title}</h3>
                  <p className="text-white/60 text-sm">{service.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Shield className="w-10 h-10 text-black mx-auto mb-4" />
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3">Licensed &amp; Insured Virginia &amp; Maryland Carrier</h2>
          <p className="text-black/60 text-sm sm:text-base max-w-2xl mx-auto">Commercial insurance, background-checked professional chauffeurs, and 24/7 dispatch — the standard behind every trip we run at Dulles.</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10"><p className="font-accent text-white/40 text-xs tracking-widest uppercase mb-3">Testimonials</p><h2 className="font-display text-3xl sm:text-4xl text-white mb-4">Client Reviews</h2></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {testimonials.map((t, idx) => (
              <div key={idx} className="luxury-card p-5">
                <div className="flex gap-1 mb-4">{[...Array(t.rating)].map((_, i) => (<Star key={i} className="w-4 h-4 text-white fill-white" />))}</div>
                <p className="text-white/80 text-base italic mb-6">"{t.text}"</p>
                <div className="border-t border-white/10 pt-4"><p className="font-semibold text-white text-sm">{t.author}</p><p className="text-white/40 text-xs">{t.role}</p></div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8"><Link to="/reviews" className="text-white underline hover:text-white/80">Read More Reviews</Link></div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="py-12 bg-black border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-xl sm:text-2xl text-white text-center mb-8">Popular Dulles Airport Routes</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-center">
            {[
              { name: 'Washington DC', slug: 'iad-to-washington-dc' },
              { name: 'Bethesda', slug: 'iad-to-bethesda' },
              { name: 'Arlington', slug: 'iad-to-arlington' },
              { name: 'Alexandria', slug: 'iad-to-alexandria' },
              { name: 'Tysons', slug: 'iad-to-tysons' },
              { name: 'Rockville', slug: 'iad-to-rockville' },
              { name: 'Silver Spring', slug: 'iad-to-silver-spring' },
              { name: 'Annapolis', slug: 'iad-to-annapolis' },
              { name: 'Columbia', slug: 'iad-to-columbia' },
              { name: 'Baltimore', slug: 'iad-to-baltimore' },
              { name: 'Fairfax', slug: 'iad-to-fairfax' },
              { name: 'McLean', slug: 'iad-to-mclean' },
              { name: 'Reston', slug: 'iad-to-reston' },
              { name: 'Herndon', slug: 'iad-to-herndon' },
              { name: 'Fredericksburg', slug: 'iad-to-fredericksburg' },
              { name: 'Northern Virginia', slug: 'iad-to-northern-virginia' },
              { name: 'Columbia MD', slug: 'iad-to-columbia-md' },
              { name: 'Ocean City', slug: 'iad-to-ocean-city' },
              { name: 'Downtown Baltimore', slug: 'iad-to-baltimore-downtown' },
              { name: 'BWI Airport', slug: 'iad-to-bwi-airport' },
            ].map((r) => (
              <Link key={r.slug} to={`/${r.slug}`} className="text-white/60 hover:text-white text-sm py-2 border border-white/10 hover:border-white/40 transition-colors">
                IAD to {r.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FaqSection faqs={homeFaqs} />

      {/* Internal Links Section */}
      <section className="py-12 bg-[#0a0a0a] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <Link to="/airport-transfer" className="text-white hover:text-white/70 transition-colors">Airport Transfers</Link>
            <Link to="/corporate" className="text-white hover:text-white/70 transition-colors">Corporate Travel</Link>
            <Link to="/wedding-limo" className="text-white hover:text-white/70 transition-colors">Wedding Limo</Link>
            <Link to="/wine-tours" className="text-white hover:text-white/70 transition-colors">Wine Tours</Link>
            <Link to="/fleet" className="text-white hover:text-white/70 transition-colors">Our Fleet</Link>
            <Link to="/about" className="text-white hover:text-white/70 transition-colors">About Us</Link>
            <Link to="/contact" className="text-white hover:text-white/70 transition-colors">Contact</Link>
            <Link to="/reviews" className="text-white hover:text-white/70 transition-colors">Reviews</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* SEO: booking overview */}
      <section className="py-16 md:py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="font-display text-3xl md:text-4xl font-medium mb-6">Book Your Dulles Airport Transportation Today</h2>
          <p className="text-white/70 leading-relaxed mb-4">
            When you need a dependable airport transportation service in Northern Virginia, IAD Airport Limo is the
            call locals make first. Our chauffeurs track your flight in real time, meet you inside the terminal, and
            load your luggage into a spotless Mercedes or BMW — no rideshare roulette, no surge pricing, no waiting
            at the curb.
          </p>
          <p className="text-white/70 leading-relaxed">
            Prefer something more discreet? Our Dulles black car service is the professional&apos;s choice for early
            departures, late arrivals, and everything between: flat all-inclusive rates, licensed and insured
            chauffeurs, and 24/7 dispatch across Virginia, Maryland, and Washington DC. Book online in minutes or
            call — we answer around the clock.
          </p>
        </div>
      </section>

      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0"><img src={images.nightCity} alt="City" className="w-full h-full object-cover opacity-30" /><div className="absolute inset-0 bg-black/80" /></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <img src={logo} alt="IAD Airport Limo" className="w-32 sm:w-40 mx-auto mb-6" style={{background:'transparent'}} />
          <h2 className="font-display text-3xl sm:text-4xl text-white mb-6">Start Your Journey</h2>
          <p className="text-white/50 text-base mb-8">Book your premium transportation today. Available 24/7.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/book-now" className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 font-bold uppercase tracking-wider hover:bg-white/90 text-sm">Free Quote <ArrowRight className="w-4 h-4" /></Link>
            <a href="tel:+18776091919" className="inline-flex items-center justify-center gap-2 border border-white text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all text-sm"><Phone className="w-4 h-4" /> (877) 609-1919</a>
          </div>
          <TrustSignals className="mt-6" />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
