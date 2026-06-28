import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { User, Briefcase, PartyPopper, Check, ArrowRight } from 'lucide-react';

const ServicesPage = () => {
  const { type } = useParams();

  const images = {
    personal: 'https://images.unsplash.com/photo-1763789381177-cd8a04aaa2ef?w=1200&q=80',
    corporate: 'https://images.unsplash.com/photo-1758518727707-b023e285b709?w=1200&q=80',
    events: 'https://images.unsplash.com/photo-1764269713585-231f628652be?w=1200&q=80',
  };

  const content = {
    personal: {
      title: 'Personal Transportation',
      subtitle: 'Luxury travel for every occasion',
      icon: <User className="w-12 h-12" />,
      image: images.personal,
      description: 'Whether you\'re heading to the airport, attending a special event, or simply want to travel in style, our personal transportation services provide the comfort and elegance you deserve.',
      services: [
        {
          name: 'Airport Transfers',
          description: 'Reliable pickups and drop-offs at all major DC area airports'
        },
        {
          name: 'City Tours',
          description: 'Explore Washington DC, Maryland, and Virginia in luxury'
        },
        {
          name: 'Shopping Trips',
          description: 'Door-to-door service for your shopping excursions'
        },
        {
          name: 'Medical Appointments',
          description: 'Comfortable and timely transportation for healthcare visits'
        },
        {
          name: 'Night Out',
          description: 'Safe and stylish transportation for dinner and entertainment'
        }
      ],
      benefits: [
        'Professional, courteous chauffeurs',
        'Immaculately maintained vehicles',
        'Flight tracking for airport pickups',
        'Complimentary water and amenities',
        'Meet and greet service available',
        'Child seats available upon request'
      ]
    },
    corporate: {
      title: 'Corporate Services',
      subtitle: 'Executive transportation solutions',
      icon: <Briefcase className="w-12 h-12" />,
      image: images.corporate,
      description: 'Elevate your corporate image with our premium business transportation services. We understand the demands of executive travel and deliver impeccable service for discerning professionals.',
      services: [
        {
          name: 'Executive Travel',
          description: 'First-class transportation for C-suite executives'
        },
        {
          name: 'Client Entertainment',
          description: 'Impress clients with luxury ground transportation'
        },
        {
          name: 'Roadshows',
          description: 'Coordinated transportation for investor presentations'
        },
        {
          name: 'Team Transportation',
          description: 'Group transport for meetings and conferences'
        },
        {
          name: 'Airport Services',
          description: 'Reliable pickups for business travelers'
        }
      ],
      benefits: [
        'Corporate account management',
        'Centralized billing and invoicing',
        'Priority scheduling',
        'Dedicated account representative',
        'Detailed trip reporting',
        'Volume discounts available'
      ]
    },
    events: {
      title: 'Event Transportation',
      subtitle: 'Special occasions deserve special service',
      icon: <PartyPopper className="w-12 h-12" />,
      image: images.events,
      description: 'Make your special day unforgettable with our event transportation services. From weddings to galas, we provide the perfect finishing touch to your celebration.',
      services: [
        {
          name: 'Weddings',
          description: 'Elegant transportation for your special day'
        },
        {
          name: 'Proms & Graduations',
          description: 'Safe, stylish rides for milestone celebrations'
        },
        {
          name: 'Concerts & Sporting Events',
          description: 'Hassle-free transportation to entertainment venues'
        },
        {
          name: 'Galas & Fundraisers',
          description: 'Make a grand entrance at formal events'
        },
        {
          name: 'Birthday Celebrations',
          description: 'Party transportation for all ages'
        }
      ],
      benefits: [
        'Customized decoration options',
        'Red carpet service available',
        'Coordinated multi-vehicle logistics',
        'Flexible timing and routing',
        'Champagne service available',
        'Professional photography packages'
      ]
    }
  };

  const currentContent = content[type] || content.personal;

  const allServices = [
    { key: 'personal', name: 'Personal', path: '/services/personal' },
    { key: 'corporate', name: 'Corporate', path: '/services/corporate' },
    { key: 'events', name: 'Events', path: '/services/events' },
  ];

  return (
    <div className="min-h-screen bg-[#111]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-32">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${currentContent.image})` }}
        >
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <p className="text-[#c9a227] text-sm tracking-[0.3em] uppercase mb-4">Our Services</p>
          <h1 className="text-5xl md:text-6xl font-light text-white mb-6">{currentContent.title}</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">{currentContent.subtitle}</p>
        </div>
      </section>

      {/* Service Navigation */}
      <section className="bg-[#1a1a1a] border-b border-[#333]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center">
            {allServices.map((svc) => (
              <Link
                key={svc.key}
                to={svc.path}
                className={`px-8 py-4 text-sm font-medium uppercase tracking-wider transition-colors ${
                  type === svc.key
                    ? 'text-[#c9a227] border-b-2 border-[#c9a227]'
                    : 'text-gray-400 hover:text-white'
                }`}
                data-testid={`service-tab-${svc.key}`}
              >
                {svc.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-[#111]">
        <div className="max-w-7xl mx-auto px-4">
          {/* Description */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="text-[#c9a227] mb-6 flex justify-center">{currentContent.icon}</div>
            <p className="text-gray-400 text-lg leading-relaxed">{currentContent.description}</p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {currentContent.services.map((service, idx) => (
              <div 
                key={idx}
                className="bg-[#1a1a1a] border border-[#333] p-6 hover:border-[#c9a227] transition-all group"
              >
                <h3 className="text-white text-xl font-semibold mb-3 group-hover:text-[#c9a227] transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Benefits */}
          <div className="bg-[#0d0d0d] border border-[#333] p-8 md:p-12">
            <h2 className="text-2xl font-light text-white mb-8 text-center">What's Included</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentContent.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#c9a227] flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#c9a227]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-light text-black mb-4">Ready to Book?</h2>
          <p className="text-black/70 mb-8">
            Get a free quote for your {currentContent.title.toLowerCase()} needs today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/book-now"
              className="px-8 py-4 bg-black text-white font-semibold uppercase tracking-wider hover:bg-[#222] transition-all flex items-center justify-center gap-2"
            >
              Get a Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <a 
              href="tel:8776790100"
              className="px-8 py-4 border-2 border-black text-black font-semibold uppercase tracking-wider hover:bg-black hover:text-white transition-all"
            >
              Call (877) 679-0100
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
