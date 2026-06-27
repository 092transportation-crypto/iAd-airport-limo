import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { GraduationCap, Check, Shield, Clock, Users } from 'lucide-react';

const PromLimoPage = () => {
  const heroImage = 'https://images.unsplash.com/photo-1716878438300-46c79ffc208c?w=1920&q=80';

  const safetyFeatures = [
    'Background-checked chauffeurs',
    'Alcohol-free environment',
    'GPS tracking on all vehicles',
    'Direct parent communication',
    'Strict pickup/dropoff protocols',
    'Fully insured fleet'
  ];

  const packages = [
    {
      name: 'Classic Prom',
      vehicle: 'Luxury SUV',
      passengers: 'Up to 6',
      hours: '5 hours',
      features: ['Professional chauffeur', 'Red carpet service', 'Photo opportunities', 'Complimentary water']
    },
    {
      name: 'Premium Prom',
      vehicle: 'Stretch Limo',
      passengers: 'Up to 8',
      hours: '6 hours',
      features: ['Professional chauffeur', 'Red carpet service', 'Photo opportunities', 'Mood lighting', 'Premium sound'],
      popular: true
    },
    {
      name: 'Group Prom',
      vehicle: 'Party Sprinter',
      passengers: 'Up to 12',
      hours: '6 hours',
      features: ['Professional chauffeur', 'LED party lights', 'Premium audio', 'Photo ops', 'Group seating']
    }
  ];

  return (
    <div className="min-h-screen bg-[#111]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <GraduationCap className="w-16 h-16 text-[#c9a227] mx-auto mb-6" />
          <p className="text-[#c9a227] text-sm tracking-[0.3em] uppercase mb-4">A Night to Remember</p>
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6">Prom Limousine</h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto mb-8">
            Arrive in style and make your prom night unforgettable
          </p>
          <Link 
            to="/book-now"
            className="inline-block px-10 py-4 bg-[#c9a227] text-black font-semibold uppercase tracking-wider hover:bg-[#b8941f] transition-all"
          >
            Reserve Your Limo
          </Link>
        </div>
      </section>

      {/* Safety First */}
      <section className="py-20 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-8 h-8 text-[#c9a227]" />
                <p className="text-[#c9a227] text-sm tracking-[0.2em] uppercase">Safety First</p>
              </div>
              <h2 className="text-4xl font-light text-white mb-6">Parents Trust Us</h2>
              <p className="text-gray-400 mb-8">
                We understand that prom night is a milestone for your teen and peace of mind for you. Our prom transportation services are designed with safety as the top priority.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {safetyFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-[#c9a227]" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#1a1a1a] border border-[#333] p-8">
              <h3 className="text-xl font-semibold text-white mb-6">Our Promise to Parents</h3>
              <div className="space-y-4 text-gray-400">
                <p>• Direct communication with designated parent/guardian</p>
                <p>• Real-time GPS tracking available</p>
                <p>• Zero tolerance alcohol policy</p>
                <p>• Confirmed pickup and dropoff notifications</p>
                <p>• Safe, responsible driving at all times</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-[#111]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-[#c9a227] text-sm tracking-[0.2em] uppercase mb-4">Prom Packages</p>
            <h2 className="text-4xl font-light text-white">Choose Your Prom Experience</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <div 
                key={idx}
                className={`bg-[#1a1a1a] border ${pkg.popular ? 'border-[#c9a227]' : 'border-[#333]'} p-8 relative`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#c9a227] text-black px-4 py-1 text-xs font-semibold uppercase">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-semibold text-white mb-2">{pkg.name}</h3>
                <p className="text-[#c9a227] mb-4">{pkg.vehicle}</p>
                <div className="flex justify-between text-sm text-gray-400 mb-6 border-b border-[#333] pb-4">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    {pkg.passengers}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {pkg.hours}
                  </div>
                </div>
                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-[#c9a227]" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link 
                  to="/book-now"
                  className={`block w-full py-4 text-center font-semibold uppercase tracking-wider transition-all ${
                    pkg.popular 
                      ? 'bg-[#c9a227] text-black hover:bg-[#b8941f]' 
                      : 'bg-[#333] text-white hover:bg-[#444]'
                  }`}
                >
                  Get Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-20 bg-[#0d0d0d]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#c9a227] text-sm tracking-[0.2em] uppercase mb-4">Prom Tips</p>
            <h2 className="text-3xl font-light text-white">Planning Your Prom Night</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Book Early', desc: 'Prom season fills up fast - reserve at least 2-3 months ahead' },
              { title: 'Coordinate Groups', desc: 'Split costs by booking together with friends' },
              { title: 'Plan Your Route', desc: 'Include time for photos, dinner, and the venue' },
              { title: 'Communicate', desc: 'Share the itinerary with parents and your chauffeur' }
            ].map((tip, idx) => (
              <div key={idx} className="bg-[#1a1a1a] border border-[#333] p-6 hover:border-[#c9a227] transition-colors">
                <h3 className="text-white font-semibold mb-2">{tip.title}</h3>
                <p className="text-gray-400 text-sm">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#c9a227]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-light text-black mb-4">Make Prom Night Special</h2>
          <p className="text-black/70 mb-8">
            Book your prom limousine today - availability is limited during prom season!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/book-now"
              className="px-8 py-4 bg-black text-white font-semibold uppercase tracking-wider hover:bg-[#222] transition-all"
            >
              Book Now
            </Link>
            <a 
              href="tel:6674000092"
              className="px-8 py-4 border-2 border-black text-black font-semibold uppercase tracking-wider hover:bg-black hover:text-white transition-all"
            >
              Call (667) 400-0092
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PromLimoPage;
