import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import FaqSection from '../components/FaqSection';
import { Briefcase, Check, Building, Users, Clock, Globe, Shield } from 'lucide-react';

const corporateFaqs = [
  {
    question: 'What does a corporate account include?',
    answer:
      'Centralized booking for travel coordinators, consolidated monthly invoicing, fixed rates for your common routes, priority dispatch, and automatic flight tracking on every airport trip.',
  },
  {
    question: 'Can executive assistants book on behalf of travelers?',
    answer:
      'Yes. Corporate accounts include coordinator booking by phone or online, with confirmations sent to both the coordinator and the traveler.',
  },
  {
    question: 'Do you handle roadshows and multi-stop itineraries?',
    answer:
      'Yes. Hourly as-directed service with a dedicated chauffeur covers investor roadshows, multi-meeting days, and event shuttles across DC, Maryland, and Virginia.',
  },
  {
    question: 'How do I set up corporate car service at Dulles?',
    answer:
      'Call (877) 609-1919 and ask for corporate accounts. We will review your travel patterns, set your rate card, and configure billing — usually the same week.',
  },
];

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
      <Seo
        title="Corporate Transportation Service Dulles | IAD Airport Limo"
        description="IAD Airport Limo offers corporate transportation in Dulles, VA. Executive car service, corporate accounts & priority scheduling. Book 24/7. (877) 609-1919."
        path="/corporate"
        faqs={corporateFaqs}
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

      {/* Trust Banner */}
      <section className="py-16 bg-[#c9a227]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Shield className="h-12 w-12 text-black mx-auto mb-4" />
          <div className="text-3xl md:text-4xl font-bold text-black mb-2">Licensed &amp; Insured Virginia &amp; Maryland Carrier</div>
          <div className="text-sm text-black/70 uppercase tracking-wider">Commercial Insurance • Vetted Chauffeurs • 24/7 Dispatch</div>
        </div>
      </section>

      {/* CTA */}
      {/* SEO: executive coverage */}
      <section className="py-16 md:py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-light mb-6">Executive Car Service for Every Business Need</h2>
          <p className="text-white/70 leading-relaxed mb-4">
            Dulles corporate transportation should be the most predictable part of a business day. Our executive
            transportation across Northern Virginia gives your team the same chauffeur standard in every vehicle:
            Wi-Fi-ready cabins, professionally attired drivers, and billing that finance actually likes — corporate
            accounts, consolidated invoicing, and priority scheduling.
          </p>
          <p className="text-white/70 leading-relaxed">
            We cover the whole corridor: limo service in McLean VA for headquarters visits, chauffeur service in
            Tysons Corner VA for client dinners, Reston car service for tech campuses, and Ashburn car service for
            data-center teams working odd hours. From a single airport pickup to a week-long executive roadshow, one
            call moves everyone — on time, every time.
          </p>
        </div>
      </section>

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
              href="tel:+18776091919"
              className="px-8 py-4 border-2 border-[#c9a227] text-[#c9a227] font-semibold uppercase tracking-wider hover:bg-[#c9a227] hover:text-black transition-all"
            >
              Call (877) 609-1919
            </a>
          </div>
        </div>
      </section>

      <FaqSection faqs={corporateFaqs} />

      <Footer />
    </div>
  );
};

export default CorporatePage;
