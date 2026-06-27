import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Briefcase, Check, Building, Users, Clock, Globe } from 'lucide-react';

const CorporatePage = () => {
  const heroImage = 'https://images.unsplash.com/photo-1758518727707-b023e285b709?w=1920&q=80';

  const services = [
    {
      icon: <Building className="w-8 h-8" />,
      title: 'Executive Travel',
      description: 'First-class transportation for C-suite executives and VIP clients'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Team Transportation',
      description: 'Group transport for meetings, conferences, and corporate events'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Roadshow Services',
      description: 'Coordinated multi-day transportation for investor meetings'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Airport Services',
      description: 'Reliable pickups and drop-offs for business travelers'
    }
  ];

  const benefits = [
    'Dedicated account manager',
    'Centralized billing & invoicing',
    'Priority scheduling',
    'Volume discounts',
    'Detailed trip reporting',
    '24/7 customer support',
    'Last-minute booking capability',
    'Global affiliate network'
  ];

  const clients = [
    'Fortune 500 Companies',
    'Law Firms',
    'Consulting Firms',
    'Financial Institutions',
    'Technology Companies',
    'Government Agencies'
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
          <Briefcase className="w-16 h-16 text-[#c9a227] mx-auto mb-6" />
          <p className="text-[#c9a227] text-sm tracking-[0.3em] uppercase mb-4">Business Solutions</p>
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6">Corporate Services</h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto mb-8">
            Elevate your corporate image with premium executive transportation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/book-now"
              className="px-10 py-4 bg-[#c9a227] text-black font-semibold uppercase tracking-wider hover:bg-[#b8941f] transition-all"
            >
              Request Quote
            </Link>
            <Link 
              to="/contact"
              className="px-10 py-4 border-2 border-[#c9a227] text-[#c9a227] font-semibold uppercase tracking-wider hover:bg-[#c9a227] hover:text-black transition-all"
            >
              Open Account
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-[#c9a227] text-sm tracking-[0.2em] uppercase mb-4">Our Services</p>
            <h2 className="text-4xl font-light text-white">Corporate Transportation Solutions</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <div 
                key={idx}
                className="bg-[#1a1a1a] border border-[#333] p-8 hover:border-[#c9a227] transition-all group"
              >
                <div className="text-[#c9a227] mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-white text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Account Benefits */}
      <section className="py-20 bg-[#111]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#c9a227] text-sm tracking-[0.2em] uppercase mb-4">Corporate Accounts</p>
              <h2 className="text-4xl font-light text-white mb-6">Benefits of Partnership</h2>
              <p className="text-gray-400 mb-8">
                Streamline your company's transportation needs with a dedicated corporate account. Enjoy priority service, simplified billing, and exclusive benefits designed for business.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-[#c9a227]" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#1a1a1a] border border-[#333] p-8">
              <h3 className="text-xl font-semibold text-white mb-6">Trusted By</h3>
              <div className="space-y-4">
                {clients.map((client, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-gray-400 border-b border-[#333] pb-4 last:border-b-0">
                    <div className="w-2 h-2 bg-[#c9a227] rounded-full" />
                    {client}
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-[#333]">
                <Link 
                  to="/contact"
                  className="text-[#c9a227] hover:text-white transition-colors"
                >
                  Open a Corporate Account →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#c9a227]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '10+', label: 'Years Experience' },
              { value: '500+', label: 'Corporate Clients' },
              { value: '99%', label: 'On-Time Rate' },
              { value: '24/7', label: 'Support' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-black mb-2">{stat.value}</div>
                <div className="text-sm text-black/70 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0d0d0d]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-light text-white mb-4">Ready to Elevate Your Corporate Travel?</h2>
          <p className="text-gray-400 mb-8">
            Contact us today to discuss your company's transportation needs and open a corporate account.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="px-8 py-4 bg-[#c9a227] text-black font-semibold uppercase tracking-wider hover:bg-[#b8941f] transition-all"
            >
              Contact Sales
            </Link>
            <a 
              href="tel:6674000092"
              className="px-8 py-4 border-2 border-[#c9a227] text-[#c9a227] font-semibold uppercase tracking-wider hover:bg-[#c9a227] hover:text-black transition-all"
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

export default CorporatePage;
