import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Shield, Award, Smartphone, Globe, Check, Star } from 'lucide-react';

const WhyChoosePage = () => {
  const { section } = useParams();

  const content = {
    safety: {
      title: 'Safety & Insurance',
      subtitle: 'Your safety is our top priority',
      icon: <Shield className="w-16 h-16" />,
      description: 'We maintain the highest safety standards in the industry with comprehensive insurance coverage and rigorous vehicle maintenance protocols.',
      features: [
        'Fully licensed and insured fleet',
        'Comprehensive liability coverage',
        'Regular vehicle safety inspections',
        'GPS tracking on all vehicles',
        'Emergency response protocols',
        'COVID-19 safety measures'
      ],
      stats: [
        { value: '$5M+', label: 'Insurance Coverage' },
        { value: '100%', label: 'Safety Record' },
        { value: 'Daily', label: 'Vehicle Inspections' }
      ]
    },
    drivers: {
      title: 'Licensed Chauffeurs',
      subtitle: 'Professional and courteous service',
      icon: <Award className="w-16 h-16" />,
      description: 'Our chauffeurs are carefully selected, professionally trained, and committed to providing exceptional service.',
      features: [
        'Extensive background checks',
        'Professional driving licenses',
        'Ongoing training programs',
        'Local area expertise',
        'Multilingual capabilities',
        'Customer service focused'
      ],
      stats: [
        { value: '10+', label: 'Years Avg. Experience' },
        { value: '100%', label: 'Background Verified' },
        { value: '5★', label: 'Average Rating' }
      ]
    },
    technology: {
      title: 'Advanced Technology',
      subtitle: 'Modern solutions for seamless travel',
      icon: <Smartphone className="w-16 h-16" />,
      description: 'We leverage cutting-edge technology to enhance your travel experience from booking to arrival.',
      features: [
        'Real-time flight tracking',
        'Online booking platform',
        'Automated notifications',
        'GPS route optimization',
        'Digital receipts and invoicing',
        'Mobile-friendly interface'
      ],
      stats: [
        { value: '24/7', label: 'Flight Monitoring' },
        { value: 'Instant', label: 'Booking Confirmation' },
        { value: 'Real-time', label: 'Vehicle Tracking' }
      ]
    },
    worldwide: {
      title: 'Worldwide Service',
      subtitle: 'Global network, local expertise',
      icon: <Globe className="w-16 h-16" />,
      description: 'Through our network of trusted partners, we can arrange luxury ground transportation anywhere in the world.',
      features: [
        'Global affiliate network',
        'Consistent service standards',
        'Multi-city coordination',
        'International airport coverage',
        'Corporate travel management',
        'Event transportation logistics'
      ],
      stats: [
        { value: '500+', label: 'Partner Cities' },
        { value: '50+', label: 'Countries Served' },
        { value: '1', label: 'Point of Contact' }
      ]
    }
  };

  const currentContent = content[section] || content.safety;

  const allSections = [
    { key: 'safety', name: 'Safety & Insurance', path: '/why-choose/safety' },
    { key: 'drivers', name: 'Licensed Drivers', path: '/why-choose/drivers' },
    { key: 'technology', name: 'Technology', path: '/why-choose/technology' },
    { key: 'worldwide', name: 'Worldwide Service', path: '/why-choose/worldwide' },
  ];

  return (
    <div className="min-h-screen bg-[#111]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-32 bg-[#0d0d0d]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <p className="text-[#c9a227] text-sm tracking-[0.3em] uppercase mb-4">Why Choose Us</p>
          <h1 className="text-5xl md:text-6xl font-light text-white mb-6">{currentContent.title}</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">{currentContent.subtitle}</p>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-[#1a1a1a] border-b border-[#333]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center">
            {allSections.map((sec) => (
              <Link
                key={sec.key}
                to={sec.path}
                className={`px-6 py-4 text-sm font-medium transition-colors ${
                  section === sec.key
                    ? 'text-[#c9a227] border-b-2 border-[#c9a227]'
                    : 'text-gray-400 hover:text-white'
                }`}
                data-testid={`why-choose-tab-${sec.key}`}
              >
                {sec.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-[#111]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Icon & Description */}
            <div>
              <div className="text-[#c9a227] mb-8">{currentContent.icon}</div>
              <h2 className="text-3xl font-light text-white mb-6">{currentContent.title}</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                {currentContent.description}
              </p>
              
              {/* Features List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentContent.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#c9a227] flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="bg-[#1a1a1a] border border-[#333] p-8">
              <h3 className="text-xl font-semibold text-white mb-8">By The Numbers</h3>
              <div className="space-y-8">
                {currentContent.stats.map((stat, idx) => (
                  <div key={idx} className="flex items-center justify-between border-b border-[#333] pb-6 last:border-b-0">
                    <span className="text-4xl font-bold text-[#c9a227]">{stat.value}</span>
                    <span className="text-gray-400">{stat.label}</span>
                  </div>
                ))}
              </div>
              
              {/* Reviews CTA */}
              <div className="mt-8 pt-8 border-t border-[#333]">
                <div className="flex items-center gap-2 text-[#c9a227] mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#c9a227]" />
                  ))}
                </div>
                <p className="text-gray-400 text-sm mb-4">500+ verified customer reviews</p>
                <Link 
                  to="/reviews"
                  className="text-[#c9a227] hover:text-white transition-colors text-sm"
                >
                  Read Reviews →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#c9a227]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-light text-black mb-4">Ready to Experience the Difference?</h2>
          <p className="text-black/70 mb-8">
            Book your luxury transportation today and discover why thousands of customers choose IAD Airport Limo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/book-now"
              className="px-8 py-4 bg-black text-white font-semibold uppercase tracking-wider hover:bg-[#222] transition-all"
            >
              Book Now
            </Link>
            <Link 
              to="/contact"
              className="px-8 py-4 border-2 border-black text-black font-semibold uppercase tracking-wider hover:bg-black hover:text-white transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhyChoosePage;
