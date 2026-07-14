import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import FaqSection from '../components/FaqSection';
import { Users, Briefcase } from 'lucide-react';

const fleetFaqs = [
  {
    question: 'What vehicles can I book for a Dulles airport transfer?',
    answer:
      'Executive sedans (Mercedes-Benz S-Class, E-Class, BMW 7 Series), luxury SUVs (Cadillac Escalade, Lincoln Navigator, Chevy Suburban, GMC Yukon XL), and Mercedes Sprinter vans for up to 13 passengers.',
  },
  {
    question: 'Which vehicle fits a family of five with checked luggage?',
    answer:
      'A full-size SUV — Suburban, Yukon XL, or Navigator — seats up to six passengers with five to six large bags. For more people or luggage, choose a Sprinter van.',
  },
  {
    question: 'Are the vehicles cleaned between trips?',
    answer:
      'Yes. Every vehicle is detailed before each pickup and maintained to commercial standards as part of our licensed and insured Virginia and Maryland carrier operation.',
  },
  {
    question: 'Can I request a specific vehicle model?',
    answer:
      'Yes — request a specific sedan, SUV, or Sprinter when booking online or by calling (877) 609-1919, and we will confirm availability for your date.',
  },
];

const FleetPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

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

  const vehicles = [
    { id: 1, name: 'BMW 7 Series', subtitle: '2022 Premium Sedan', category: 'sedans', pax: 3, luggage: 2, image: fleetImages.bmw7 },
    { id: 2, name: 'Business Class', subtitle: 'Mercedes E-Class', category: 'sedans', pax: 3, luggage: 2, image: fleetImages.eclass },
    { id: 3, name: 'First Class', subtitle: 'Mercedes S-Class', category: 'sedans', pax: 3, luggage: 2, image: fleetImages.sclass },
    { id: 4, name: 'Lincoln Navigator L', subtitle: '2024 Premium SUV', category: 'suv', pax: 6, luggage: 5, image: fleetImages.navigator },
    { id: 5, name: 'Cadillac Escalade', subtitle: 'Premium SUV', category: 'suv', pax: 5, luggage: 5, image: fleetImages.escalade },
    { id: 6, name: 'Chevy Suburban', subtitle: '2025 Luxury SUV', category: 'suv', pax: 6, luggage: 6, image: fleetImages.suburban },
    { id: 7, name: 'GMC Yukon XL', subtitle: '2024 Luxury SUV', category: 'suv', pax: 6, luggage: 6, image: fleetImages.yukon },
    { id: 8, name: 'Sprinter Van', subtitle: 'Mercedes Sprinter', category: 'vans', pax: 13, luggage: 12, image: fleetImages.sprinter },
  ];

  const filteredVehicles = activeCategory === 'all' ? vehicles : vehicles.filter(v => v.category === activeCategory);

  return (
    <div className="min-h-screen bg-black">
      <Seo
        title="Luxury Fleet | Dulles Airport Limo Sedans & SUVs"
        description="Explore the IAD Airport Limo fleet — Mercedes S-Class, BMW 7 Series, Escalade, Navigator, Suburban & Sprinter vans for Dulles airport car service."
        path="/fleet"
        faqs={fleetFaqs}
      />
      <Navbar />
      <section className="pt-32 pb-12 bg-black">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="font-accent text-white/40 text-xs tracking-widest uppercase mb-3">Vehicles</p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-white mb-4">Our Fleet</h1>
        </div>
      </section>
      <section className="py-4 bg-[#0a0a0a] border-y border-white/10 sticky top-[100px] z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {['all', 'sedans', 'suv', 'vans'].map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-4 sm:px-6 py-2 text-xs sm:text-sm uppercase tracking-wider ${activeCategory === cat ? 'bg-white text-black font-semibold' : 'text-white/50 border border-white/20 hover:border-white hover:text-white'}`}>{cat === 'all' ? 'All' : cat}</button>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredVehicles.map((v) => (
              <div key={v.id} className="luxury-card group overflow-hidden border border-white/10">
                <div className="h-48 overflow-hidden">
                  <img src={v.image} alt={v.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-4 bg-black">
                  <div className="text-white/40 text-xs uppercase tracking-widest mb-1">{v.category}</div>
                  <h3 className="font-display text-lg text-white mb-1">{v.name}</h3>
                  <p className="text-white/40 text-xs mb-3">{v.subtitle}</p>
                  <div className="flex gap-4 mb-4 text-white/50 text-xs"><span className="flex items-center gap-1"><Users className="w-3 h-3" /> {v.pax} PAX</span><span className="flex items-center gap-1"><Briefcase className="w-3 h-3" /> {v.luggage} Bags</span></div>
                  <Link to="/book-now" className="block w-full py-3 bg-white text-black text-center font-semibold uppercase tracking-wider text-xs hover:bg-white/90">Free Quote</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-2xl sm:text-3xl text-black mb-4">Need Help?</h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/contact" className="px-6 py-3 bg-black text-white font-bold uppercase tracking-wider text-sm">Contact Us</Link>
            <a href="tel:+18776091919" className="px-6 py-3 border-2 border-black text-black font-bold uppercase tracking-wider text-sm hover:bg-black hover:text-white">(877) 609-1919</a>
          </div>
        </div>
      </section>
      <FaqSection faqs={fleetFaqs} />
      <Footer />
    </div>
  );
};

export default FleetPage;
