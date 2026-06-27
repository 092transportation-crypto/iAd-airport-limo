import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Users, Car, Check, Star, ArrowRight } from 'lucide-react';

const VehiclesPage = () => {
  const { category } = useParams();

  const images = {
    sedan: 'https://images.unsplash.com/photo-1763789381177-cd8a04aaa2ef?w=800&q=80',
    suv: 'https://images.unsplash.com/photo-1767749995450-7b63ab7cd4fd?w=800&q=80',
    sprinter: 'https://images.unsplash.com/photo-1740485863233-032dff964d0d?w=800&q=80',
  };

  const vehicleData = {
    sedans: {
      title: 'Luxury Sedans',
      subtitle: 'Executive comfort for business and pleasure',
      vehicles: [
        {
          name: 'Economy Class',
          pax: 3, luggage: 2,
          image: images.sedan,
          features: ['Leather Interior', 'Climate Control', 'Complimentary Water', 'Professional Driver']
        },
        {
          name: 'Business Class',
          subtitle: 'Mercedes E-Class',
          pax: 3, luggage: 2,
          image: images.sedan,
          features: ['Premium Leather', 'WiFi', 'Phone Charger', 'Privacy Glass', 'Climate Control']
        },
        {
          name: 'First Class',
          subtitle: 'Mercedes S-Class',
          pax: 3, luggage: 2,
          image: images.sedan,
          features: ['Executive Seating', 'Massage Seats', 'Premium Sound', 'Mini Bar', 'Privacy Partition']
        }
      ]
    },
    suv: {
      title: 'Premium SUVs',
      subtitle: 'Spacious luxury for groups and families',
      vehicles: [
        {
          name: 'Cadillac Escalade',
          pax: 5, luggage: 5,
          image: images.suv,
          features: ['Third Row Seating', 'Premium Sound', 'Climate Zones', 'Leather Interior']
        },
        {
          name: 'Lincoln Navigator',
          pax: 6, luggage: 5,
          image: images.suv,
          features: ['Perfect Position Seating', 'Panoramic Roof', 'Reclining Seats', 'Premium Audio']
        },
        {
          name: 'Chevy Suburban',
          pax: 6, luggage: 6,
          image: images.suv,
          features: ['Spacious Interior', 'Fold-Flat Seats', 'Ample Cargo Space', 'Smooth Ride']
        }
      ]
    },
    sprinters: {
      title: 'Sprinter Vans',
      subtitle: 'Perfect for groups and corporate travel',
      vehicles: [
        {
          name: 'Executive Sprinter',
          subtitle: 'Mercedes Sprinter',
          pax: 13, luggage: 12,
          image: images.sprinter,
          features: ['Conference Seating', 'LED Lighting', 'Premium Audio', 'USB Charging', 'Standing Room']
        },
        {
          name: 'Party Sprinter',
          subtitle: 'Mercedes Sprinter Limo',
          pax: 10, luggage: 8,
          image: images.sprinter,
          features: ['Disco Lighting', 'Sound System', 'Bar Area', 'Privacy Partition', 'Dance Floor']
        }
      ]
    },
    buses: {
      title: 'Mini Buses',
      subtitle: 'Large group transportation made easy',
      vehicles: [
        {
          name: 'Mini Coach',
          pax: 24, luggage: 24,
          image: images.sprinter,
          features: ['Reclining Seats', 'Overhead Storage', 'PA System', 'Climate Control']
        },
        {
          name: 'Party Bus',
          pax: 20, luggage: 15,
          image: images.sprinter,
          features: ['Dance Floor', 'Premium Sound', 'LED Lighting', 'Bar Service', 'Restroom']
        }
      ]
    },
    // Individual vehicle pages
    'mercedes-s-class': {
      title: 'Mercedes S-Class',
      subtitle: 'The pinnacle of automotive luxury',
      single: true,
      vehicle: {
        name: 'Mercedes S-Class',
        subtitle: 'First Class Experience',
        pax: 3, luggage: 2,
        image: images.sedan,
        features: ['Executive Seating', 'Massage Seats', 'Premium Sound System', 'Mini Bar', 'Privacy Partition', 'WiFi Connectivity', 'USB Charging', 'Climate Control'],
        description: 'The Mercedes S-Class represents the ultimate in luxury sedan travel. With its whisper-quiet cabin, massage seats, and state-of-the-art amenities, every journey becomes a first-class experience.'
      }
    },
    'lincoln-continental': {
      title: 'Lincoln Continental',
      subtitle: 'American luxury at its finest',
      single: true,
      vehicle: {
        name: 'Lincoln Continental',
        subtitle: 'Classic Elegance',
        pax: 3, luggage: 2,
        image: images.sedan,
        features: ['Leather Interior', 'Reclining Seats', 'Premium Audio', 'Climate Control', 'Smooth Ride', 'Privacy Glass'],
        description: 'The Lincoln Continental delivers timeless American luxury with modern refinements. Its spacious interior and smooth ride make it perfect for airport transfers and executive travel.'
      }
    },
    'bmw-7-series': {
      title: 'BMW 7 Series',
      subtitle: 'The ultimate driving machine',
      single: true,
      vehicle: {
        name: 'BMW 7 Series',
        subtitle: 'Executive Performance',
        pax: 3, luggage: 2,
        image: images.sedan,
        features: ['Executive Lounge', 'Panoramic Roof', 'Harman Kardon Audio', 'Ambient Lighting', 'Heated Seats', 'WiFi Hotspot'],
        description: 'The BMW 7 Series combines athletic performance with supreme comfort. Its cutting-edge technology and refined interior create an exceptional travel experience.'
      }
    },
    'cadillac-escalade': {
      title: 'Cadillac Escalade',
      subtitle: 'Bold luxury for any occasion',
      single: true,
      vehicle: {
        name: 'Cadillac Escalade',
        subtitle: 'Premium SUV',
        pax: 5, luggage: 5,
        image: images.suv,
        features: ['Third Row Seating', 'Premium Bose Audio', 'Tri-Zone Climate', 'Night Vision', 'Magnetic Ride Control', 'Heads-Up Display'],
        description: 'The Cadillac Escalade makes a statement wherever it goes. With room for up to 5 passengers and generous luggage space, it\'s the perfect choice for airport runs and special occasions.'
      }
    },
    'chevy-suburban': {
      title: 'Chevy Suburban',
      subtitle: 'Spacious comfort for the whole group',
      single: true,
      vehicle: {
        name: 'Chevy Suburban',
        subtitle: 'Full-Size SUV',
        pax: 6, luggage: 6,
        image: images.suv,
        features: ['Spacious Interior', 'Fold-Flat Seats', 'Ample Cargo', 'Smooth Ride', 'Climate Control', 'USB Ports'],
        description: 'The Chevy Suburban offers unmatched space and versatility. Perfect for families, groups, and anyone who needs extra room for passengers and luggage.'
      }
    },
    'mercedes-sprinter': {
      title: 'Mercedes Sprinter',
      subtitle: 'Executive group transportation',
      single: true,
      vehicle: {
        name: 'Mercedes Sprinter',
        subtitle: 'Executive Van',
        pax: 13, luggage: 12,
        image: images.sprinter,
        features: ['Conference Seating', 'Standing Height', 'Premium Audio', 'LED Lighting', 'USB Charging', 'Climate Control', 'WiFi'],
        description: 'The Mercedes Sprinter is the gold standard in executive van transportation. Whether for corporate groups or special events, it delivers comfort and style for larger parties.'
      }
    },
    'ford-transit': {
      title: 'Ford Transit',
      subtitle: 'Reliable group transportation',
      single: true,
      vehicle: {
        name: 'Ford Transit',
        subtitle: 'Passenger Van',
        pax: 10, luggage: 8,
        image: images.sprinter,
        features: ['Comfortable Seating', 'Climate Control', 'Audio System', 'USB Ports', 'Cargo Space'],
        description: 'The Ford Transit offers reliable and comfortable transportation for medium-sized groups. An economical choice without sacrificing quality.'
      }
    }
  };

  const currentData = vehicleData[category] || vehicleData.sedans;

  const categoryLinks = [
    { key: 'sedans', name: 'Sedans', path: '/vehicles/sedans' },
    { key: 'suv', name: 'SUV', path: '/vehicles/suv' },
    { key: 'sprinters', name: 'Sprinters', path: '/vehicles/sprinters' },
    { key: 'buses', name: 'Buses', path: '/vehicles/buses' },
  ];

  return (
    <div className="min-h-screen bg-[#111]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-32 bg-[#0d0d0d]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <p className="text-[#c9a227] text-sm tracking-[0.3em] uppercase mb-4">Our Fleet</p>
          <h1 className="text-5xl md:text-6xl font-light text-white mb-6">{currentData.title}</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">{currentData.subtitle}</p>
        </div>
      </section>

      {/* Category Navigation (only show for category pages) */}
      {!currentData.single && (
        <section className="bg-[#1a1a1a] border-b border-[#333]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap justify-center">
              {categoryLinks.map((cat) => (
                <Link
                  key={cat.key}
                  to={cat.path}
                  className={`px-8 py-4 text-sm font-medium uppercase tracking-wider transition-colors ${
                    category === cat.key
                      ? 'text-[#c9a227] border-b-2 border-[#c9a227]'
                      : 'text-gray-400 hover:text-white'
                  }`}
                  data-testid={`vehicle-tab-${cat.key}`}
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Content */}
      <section className="py-20 bg-[#111]">
        <div className="max-w-7xl mx-auto px-4">
          {currentData.single ? (
            // Single Vehicle Detail
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <img 
                  src={currentData.vehicle.image} 
                  alt={currentData.vehicle.name}
                  className="w-full h-96 object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-light text-white mb-2">{currentData.vehicle.name}</h2>
                <p className="text-[#c9a227] mb-6">{currentData.vehicle.subtitle}</p>
                <p className="text-gray-400 leading-relaxed mb-8">{currentData.vehicle.description}</p>
                
                {/* Capacity */}
                <div className="flex gap-8 mb-8">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-[#c9a227]" />
                    <span className="text-white">{currentData.vehicle.pax} Passengers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Car className="w-5 h-5 text-[#c9a227]" />
                    <span className="text-white">{currentData.vehicle.luggage} Bags</span>
                  </div>
                </div>

                {/* Features */}
                <h3 className="text-white font-semibold mb-4">Features & Amenities</h3>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {currentData.vehicle.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#c9a227]" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link 
                  to="/book-now"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#c9a227] text-black font-semibold uppercase tracking-wider hover:bg-[#b8941f] transition-all"
                >
                  Book This Vehicle <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ) : (
            // Vehicle Grid
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentData.vehicles.map((vehicle, idx) => (
                <div 
                  key={idx}
                  className="bg-[#1a1a1a] border border-[#333] hover:border-[#c9a227] transition-all group"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={vehicle.image} 
                      alt={vehicle.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-white text-xl font-semibold mb-1 group-hover:text-[#c9a227] transition-colors">
                      {vehicle.name}
                    </h3>
                    {vehicle.subtitle && (
                      <p className="text-gray-500 text-sm mb-4">{vehicle.subtitle}</p>
                    )}
                    
                    <div className="space-y-2 mb-6">
                      {vehicle.features.slice(0, 4).map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-gray-400 text-sm">
                          <Check className="w-4 h-4 text-[#c9a227]" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400 border-t border-[#333] pt-4">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-[#c9a227]" />
                        <span>{vehicle.pax} PAX</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Car className="w-4 h-4 text-[#c9a227]" />
                        <span>{vehicle.luggage} Bags</span>
                      </div>
                    </div>
                  </div>
                  
                  <Link 
                    to="/book-now"
                    className="block w-full py-4 bg-[#c9a227] text-black text-center font-semibold uppercase tracking-wider hover:bg-[#b8941f] transition-all"
                  >
                    Get Quote
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#c9a227]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-light text-black mb-4">Need Help Choosing?</h2>
          <p className="text-black/70 mb-8">
            Our team will help you select the perfect vehicle for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="px-8 py-4 bg-black text-white font-semibold uppercase tracking-wider hover:bg-[#222] transition-all"
            >
              Contact Us
            </Link>
            <Link 
              to="/fleet"
              className="px-8 py-4 border-2 border-black text-black font-semibold uppercase tracking-wider hover:bg-black hover:text-white transition-all"
            >
              View All Vehicles
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VehiclesPage;
