import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { PartyPopper, Check, Star, Music, Users } from 'lucide-react';
import Seo from '../components/Seo';
import FaqSection from '../components/FaqSection';

const birthdayFaqs = [
  {
    question: 'How many people fit in a birthday party vehicle?',
    answer:
      'Sedans carry up to 3 guests, SUVs up to 6, and our Mercedes Sprinter party van up to 12 with LED lighting, premium sound, and space to celebrate.',
  },
  {
    question: 'Can we plan multiple stops for the night?',
    answer:
      'Yes. Birthday packages are hourly with a dedicated chauffeur, so dinner, an event, and a night out can all be on one itinerary.',
  },
  {
    question: 'Do you do kids’ and milestone birthdays?',
    answer:
      'Yes — from sweet sixteens (alcohol-free, with adult supervision requirements) to 30th, 40th, and beyond. Call (877) 609-1919 to plan the details.',
  },
  {
    question: 'What areas do you cover for birthday limo service?',
    answer:
      'Washington DC, Northern Virginia, and Maryland — including pickups throughout the Dulles, Tysons, Bethesda, and Arlington areas.',
  },
];

const BirthdayLimoPage = () => {
  const heroImage = 'https://images.unsplash.com/photo-1740485863233-032dff964d0d?w=1920&q=80';

  const packages = [
    {
      name: 'Party Sedan',
      hours: '3 hours',
      passengers: 'Up to 3',
      features: ['Luxury sedan', 'Bluetooth audio', 'Refreshments', 'Professional chauffeur']
    },
    {
      name: 'Party SUV',
      hours: '4 hours',
      passengers: 'Up to 6',
      features: ['Premium SUV', 'Premium sound system', 'Refreshments', 'Photo opportunities', 'Red carpet'],
      popular: true
    },
    {
      name: 'Party Sprinter',
      hours: '5 hours',
      passengers: 'Up to 12',
      features: ['Mercedes Sprinter', 'LED party lights', 'Premium sound', 'Bar area', 'Dance space']
    }
  ];

  return (
    <div className="min-h-screen bg-[#111]">
      <Seo
        title="Birthday Limo Service | DC, Maryland & Virginia"
        description="Celebrate in style with a birthday limo or party Sprinter — LED lights, premium sound & a professional chauffeur across DC, MD & VA. Call (877) 609-1919."
        path="/birthday-limo"
        faqs={birthdayFaqs}
      />
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
          <PartyPopper className="w-16 h-16 text-[#c9a227] mx-auto mb-6" />
          <p className="text-[#c9a227] text-sm tracking-[0.3em] uppercase mb-4">Celebrate in Style</p>
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6">Birthday Limousine</h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto mb-8">
            Make your birthday unforgettable with our luxury party transportation
          </p>
          <Link 
            to="/book-now"
            className="inline-block px-10 py-4 bg-[#c9a227] text-black font-semibold uppercase tracking-wider hover:bg-[#b8941f] transition-all"
          >
            Book Your Party Ride
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-[#c9a227] text-sm tracking-[0.2em] uppercase mb-4">The Party Experience</p>
            <h2 className="text-4xl font-light text-white">Birthday Celebration Features</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Music />, title: 'Premium Sound', desc: 'Bluetooth connectivity & speakers' },
              { icon: <Star />, title: 'Party Lights', desc: 'LED mood lighting' },
              { icon: <Users />, title: 'Group Friendly', desc: 'Vehicles for all party sizes' },
              { icon: <PartyPopper />, title: 'Decorations', desc: 'Custom birthday setup' }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#1a1a1a] border border-[#333] p-6 text-center hover:border-[#c9a227] transition-colors">
                <div className="text-[#c9a227] mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-[#111]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-[#c9a227] text-sm tracking-[0.2em] uppercase mb-4">Birthday Packages</p>
            <h2 className="text-4xl font-light text-white">Choose Your Party Ride</h2>
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
                <h3 className="text-2xl font-semibold text-white mb-4">{pkg.name}</h3>
                <div className="flex justify-between text-sm text-gray-400 mb-6 border-b border-[#333] pb-4">
                  <span>{pkg.hours}</span>
                  <span>{pkg.passengers}</span>
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

      {/* Ideas Section */}
      <section className="py-20 bg-[#0d0d0d]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#c9a227] text-sm tracking-[0.2em] uppercase mb-4">Birthday Ideas</p>
          <h2 className="text-3xl font-light text-white mb-8">Popular Birthday Experiences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Dinner & Night Out',
              'Bar Hopping Tour',
              'Concert Transportation',
              'Surprise Pickup',
              'DC Monuments Tour',
              'Casino Trip'
            ].map((idea, idx) => (
              <div key={idx} className="bg-[#1a1a1a] border border-[#333] p-4 hover:border-[#c9a227] transition-colors">
                <span className="text-gray-300">{idea}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#c9a227]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-light text-black mb-4">Ready to Celebrate?</h2>
          <p className="text-black/70 mb-8">
            Book your birthday limousine today and make it a day to remember!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/book-now"
              className="px-8 py-4 bg-black text-white font-semibold uppercase tracking-wider hover:bg-[#222] transition-all"
            >
              Book Now
            </Link>
            <a 
              href="tel:8776091919"
              className="px-8 py-4 border-2 border-black text-black font-semibold uppercase tracking-wider hover:bg-black hover:text-white transition-all"
            >
              Call (877) 609-1919
            </a>
          </div>
        </div>
      </section>

      <FaqSection faqs={birthdayFaqs} />

      <Footer />
    </div>
  );
};

export default BirthdayLimoPage;
