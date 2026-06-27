import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Heart, Check, Star, Users, Calendar } from 'lucide-react';

const WeddingLimoPage = () => {
  const heroImage = 'https://images.unsplash.com/photo-1764269713585-231f628652be?w=1920&q=80';

  const packages = [
    {
      name: 'Classic Package',
      description: 'Perfect for intimate ceremonies',
      features: [
        'Luxury sedan or SUV',
        '4 hours of service',
        'Decorated with ribbons',
        'Complimentary champagne',
        'Red carpet service'
      ]
    },
    {
      name: 'Premium Package',
      description: 'For the ultimate wedding experience',
      features: [
        'Stretch limousine or Sprinter',
        '6 hours of service',
        'Custom floral decorations',
        'Champagne & refreshments',
        'Red carpet service',
        'Bridal party coordination'
      ],
      popular: true
    },
    {
      name: 'Grand Package',
      description: 'Complete wedding transportation',
      features: [
        'Multiple vehicles',
        '8+ hours of service',
        'Full floral package',
        'Premium champagne selection',
        'Photographer coordination',
        'Guest shuttle service',
        'Dedicated coordinator'
      ]
    }
  ];

  const testimonials = [
    {
      text: "IAD Airport Limo made our wedding day absolutely perfect. The Escalade was beautifully decorated and our chauffeur was incredibly professional.",
      author: "Sarah & Michael",
      location: "McLean, VA"
    },
    {
      text: "We used their services for our entire wedding party. The coordination was flawless and everyone arrived on time and in style!",
      author: "Jennifer & David",
      location: "Bethesda, MD"
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
          <Heart className="w-16 h-16 text-[#c9a227] mx-auto mb-6" />
          <p className="text-[#c9a227] text-sm tracking-[0.3em] uppercase mb-4">Special Occasions</p>
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6">Wedding Limousine</h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto mb-8">
            Make your special day unforgettable with our elegant wedding transportation services
          </p>
          <Link 
            to="/book-now"
            className="inline-block px-10 py-4 bg-[#c9a227] text-black font-semibold uppercase tracking-wider hover:bg-[#b8941f] transition-all"
          >
            Request Quote
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-[#c9a227] text-sm tracking-[0.2em] uppercase mb-4">Why Couples Choose Us</p>
            <h2 className="text-4xl font-light text-white">Your Day Deserves the Best</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Heart />, title: 'Elegant Vehicles', desc: 'Beautifully maintained fleet' },
              { icon: <Users />, title: 'Professional Chauffeurs', desc: 'Experienced & courteous' },
              { icon: <Calendar />, title: 'Flexible Scheduling', desc: 'Tailored to your timeline' },
              { icon: <Star />, title: 'Custom Decorations', desc: 'Personalized touches' }
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
            <p className="text-[#c9a227] text-sm tracking-[0.2em] uppercase mb-4">Wedding Packages</p>
            <h2 className="text-4xl font-light text-white">Choose Your Perfect Package</h2>
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
                <p className="text-gray-400 mb-6">{pkg.description}</p>
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

      {/* Testimonials */}
      <section className="py-20 bg-[#0d0d0d]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#c9a227] text-sm tracking-[0.2em] uppercase mb-4">Love Stories</p>
            <h2 className="text-4xl font-light text-white">Happy Couples</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-[#1a1a1a] border border-[#333] p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#c9a227] fill-[#c9a227]" />
                  ))}
                </div>
                <p className="text-gray-300 italic mb-6">"{testimonial.text}"</p>
                <div className="text-white font-semibold">{testimonial.author}</div>
                <div className="text-gray-500 text-sm">{testimonial.location}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#c9a227]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-light text-black mb-4">Let's Plan Your Perfect Day</h2>
          <p className="text-black/70 mb-8">
            Contact us today for a personalized wedding transportation consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/book-now"
              className="px-8 py-4 bg-black text-white font-semibold uppercase tracking-wider hover:bg-[#222] transition-all"
            >
              Request Quote
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

export default WeddingLimoPage;
