import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import FaqSection from '../components/FaqSection';
import { Users, Briefcase } from 'lucide-react';
import { fleetImageAlt } from '../lib/fleetImageAlt';

const fleetFaqs = [
  {
    question: 'What vehicles can I book for a Dulles airport transfer?',
    answer:
      'Business and First Class sedans cover one to three riders: the Mercedes-Benz E-Class, BMW 7 Series and Mercedes S-Class. Our SUVs are the Lincoln Nautilus (three passengers), Chevrolet Suburban (five) and Lincoln Navigator (six). Groups of up to 13 ride in a Mercedes Sprinter shuttle or executive van.',
  },
  {
    question: 'Which vehicle fits a family of five with checked luggage?',
    answer:
      'A full-size SUV — the Chevrolet Suburban seats five passengers with five bags, and the Lincoln Navigator seats six with five bags. For more people or luggage, choose a Sprinter van.',
  },
  {
    question: 'Are the vehicles cleaned between trips?',
    answer:
      'Yes. Every vehicle is detailed before each pickup and maintained to commercial standards as part of our licensed and insured Virginia and Maryland carrier operation.',
  },
  {
    question: 'Can I request a specific vehicle model?',
    answer:
      'Yes. Ask for a specific sedan, SUV or Sprinter when you book online or call (877) 609-1919. Dispatch confirms availability for your date and puts the vehicle class in writing before you travel.',
  },
];

const FleetPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  // The 8 fleet categories, in exact order — kept in sync with 92limo.com.
  // Images live in /public/images, byte-identical to 92limo's fleet photos.
  const fleetImages = {
    eclass: '/images/mercedes-e-class.webp',
    bmw7: '/images/bmw-7-series.webp',
    nautilus: '/images/lincoln-nautilus.webp',
    suburban: '/images/chevrolet-suburban.webp',
    navigator: '/images/lincoln-navigator.webp',
    sprinterShuttle: '/images/sprinter-shuttle-seats.webp',
    sprinterExecutive: '/images/mercedes-sprinter.webp',
  };

  const vehicles = [
    { id: 1, name: 'Business Sedan', subtitle: 'Mercedes-Benz E-Class 2023+ or similar', category: 'sedans', pax: 3, luggage: 2, image: fleetImages.eclass },
    { id: 2, name: 'First Class Sedan', subtitle: 'BMW 7 Series / Mercedes S-Class 2023+ or similar', category: 'sedans', pax: 3, luggage: 2, image: fleetImages.bmw7 },
    { id: 3, name: 'Midsize SUV', subtitle: 'Lincoln Nautilus 2023+ or similar', category: 'suv', pax: 3, luggage: 4, image: fleetImages.nautilus },
    { id: 4, name: 'Luxury SUV', subtitle: 'Chevrolet Suburban 2023+ or similar', category: 'suv', pax: 5, luggage: 5, image: fleetImages.suburban },
    { id: 5, name: 'Premium SUV', subtitle: '2026 Lincoln Navigator or similar', category: 'suv', pax: 6, luggage: 5, image: fleetImages.navigator },
    { id: 6, name: 'Sprinter Shuttle', subtitle: 'Mercedes Sprinter 2023+ or similar', category: 'vans', pax: 13, luggage: 13, image: fleetImages.sprinterShuttle },
    { id: 7, name: 'Sprinter Executive', subtitle: 'Mercedes Sprinter 2023+ or similar', category: 'vans', pax: 13, luggage: 13, image: fleetImages.sprinterExecutive },
  ];

  const filteredVehicles = activeCategory === 'all' ? vehicles : vehicles.filter(v => v.category === activeCategory);

  return (
    <div className="min-h-screen bg-black">
      <Seo
        title="Luxury Fleet | Dulles Airport Limo Sedans & SUVs"
        description="IAD Airport Limo fleet for Dulles and Northern Virginia: Mercedes S-Class, BMW 7 Series, Navigator, Suburban & Sprinter vans. Call (877) 609-1919."
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
                  <img src={v.image} alt={fleetImageAlt(v.image, v.name)} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
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
      <section className="py-16 bg-[#161616]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-2xl sm:text-3xl text-white mb-6">Choosing a Vehicle Class</h2>
          <div className="space-y-4">
            <p className="text-white/70 leading-relaxed">
              Whichever class you pick, the same licensed and insured Virginia and Maryland carrier stands behind the ride: live flight tracking at Dulles, a professional chauffeur and dispatch that answers 24/7. What changes between classes is how many people and bags fit and how the cabin is finished. Sedans take one to three riders with two checked bags, SUVs three to six riders with four or five bags, and a Sprinter van keeps up to 13 people together.
            </p>
            <p className="text-white/70 leading-relaxed">
              For a closer look at any single class — Sedans, SUVs or Sprinters — the <Link to="/vehicles/sedans" className="text-[#c9a227] hover:text-white transition-colors">vehicles</Link> pages break down which model fits which trip, from a solo executive heading from Dulles to a Tysons or Reston office to a wedding party moving between venues around Leesburg and Ashburn.
            </p>
            <p className="text-white/70 leading-relaxed">
              Each vehicle is detailed between trips and runs on a scheduled inspection program for brakes, tires and safety systems, not just repairs after something breaks. All of them operate under our commercial Virginia and Maryland carrier authority, with DOT-mandated inspections and commercial liability coverage well above a personal auto policy, whether you book a Business Sedan for a Fairfax meeting or a Sprinter Executive for a Herndon team.
            </p>
            <p className="text-white/70 leading-relaxed">
              To reserve a particular model, name it when you book online or call <a href="tel:+18776091919" className="text-[#c9a227] hover:text-white transition-colors">(877) 609-1919</a>, and dispatch confirms availability and the vehicle class in writing before your travel date. The Mercedes S-Class and the Sprinter vans are the scarcest vehicles we have, so reserve them a few days early for a wedding, a VIP arrival at IAD or a holiday travel week.
            </p>
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
