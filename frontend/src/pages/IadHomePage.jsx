import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs';
import { Plane, Users, Briefcase, Star, Shield, Clock, Award, Phone, Mail } from 'lucide-react';

const IadHomePage = () => {
  const [activeTab, setActiveTab] = useState('featured');

  const services = [
    {
      title: 'Airport Transfers',
      icon: <Plane className="h-12 w-12" />,
      description: 'Premium ground transportation to IAD, DCA & BWI airports with flight tracking and meet & greet',
      link: '/services/airport'
    },
    {
      title: 'Corporate Travel',
      icon: <Briefcase className="h-12 w-12" />,
      description: 'Executive transportation for business leaders and Fortune 500 companies',
      link: '/services/corporate'
    },
    {
      title: 'VIP Services',
      icon: <Star className="h-12 w-12" />,
      description: 'Exclusive chauffeur services for high-profile clients and special occasions',
      link: '/services/vip'
    },
    {
      title: 'Hourly Charter',
      icon: <Clock className="h-12 w-12" />,
      description: 'Flexible luxury transportation with professional chauffeurs at your disposal',
      link: '/services/hourly'
    }
  ];

  const fleet = [
    {
      title: '3 Passenger',
      name: 'Executive Sedan',
      subtitle: 'Mercedes S-Class or Similar',
      features: ['Premium Leather', 'Climate Control', 'Privacy Glass', 'WiFi']
    },
    {
      title: '6 Passenger',
      name: 'Luxury SUV',
      subtitle: 'Cadillac Escalade or Similar',
      features: ['Executive Seating', 'Entertainment', 'Extra Luggage', 'Premium Sound']
    },
    {
      title: '10 Passenger',
      name: 'Mercedes Sprinter',
      subtitle: 'Executive Configuration',
      features: ['Conference Seating', 'Flat Screen TV', 'Premium Bar', 'Leather Interior']
    },
    {
      title: '14 Passenger',
      name: 'Executive Sprinter',
      subtitle: 'VIP Layout',
      features: ['Business Class Seats', 'Entertainment System', 'WiFi', 'Power Outlets']
    }
  ];

  const features = [
    { icon: <Shield className="h-8 w-8" />, title: 'Licensed & Insured', desc: 'Fully certified professional service' },
    { icon: <Clock className="h-8 w-8" />, title: 'On-Time Guarantee', desc: 'Flight tracking & punctual service' },
    { icon: <Star className="h-8 w-8" />, title: '5-Star Service', desc: 'Consistently rated excellent' },
    { icon: <Award className="h-8 w-8" />, title: 'Premium Fleet', desc: 'Late-model luxury vehicles' }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 50%)'
            }}
          />
          <div className="absolute inset-0"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, rgba(212, 175, 55, 0.03) 0px, transparent 1px, transparent 2px, rgba(212, 175, 55, 0.03) 3px)',
              backgroundSize: '100% 4px'
            }}
          />
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          {/* Logo */}
          <div className="mb-12 flex justify-center animate-fade-in">
            <img 
              src="/images/logo.png" 
              alt="IAD Airport Limo" 
              className="w-64 md:w-96 drop-shadow-2xl"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-light text-white mb-6 tracking-wider animate-slide-up">
            Executive Chauffeur Service
          </h1>
          <p className="text-xl md:text-2xl text-[#d4af37] mb-4 font-light">
            Premium Ground Transportation
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Washington Dulles (IAD) • Reagan National (DCA) • BWI Airport
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/book-now">
              <Button size="lg" className="bg-gradient-to-r from-[#d4af37] to-[#f4d03f] hover:from-[#b8941f] hover:to-[#d4af37] text-black font-bold px-12 py-7 text-lg shadow-2xl shadow-[#d4af37]/50 transition-all hover:scale-105">
                Reserve Now
              </Button>
            </Link>
            <a href="tel:(667)400-0092">
              <Button size="lg" variant="outline" className="border-2 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black px-12 py-7 text-lg transition-all hover:scale-105">
                <Phone className="mr-2 h-5 w-5" />
                (667) 400-0092
              </Button>
            </a>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-gray-500 text-sm">
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-[#d4af37] fill-[#d4af37]" />
              <span>5-Star Rated</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-[#d4af37]" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-[#d4af37]" />
              <span>24/7 Available</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-black relative">
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(45deg, #d4af37 25%, transparent 25%), linear-gradient(-45deg, #d4af37 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #d4af37 75%), linear-gradient(-45deg, transparent 75%, #d4af37 75%)',
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light text-white mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link key={index} to={service.link}>
                <Card className="h-full bg-gradient-to-b from-gray-900 to-black border-2 border-gray-800 hover:border-[#d4af37] transition-all duration-300 hover:shadow-2xl hover:shadow-[#d4af37]/20 group">
                  <CardContent className="p-8 text-center">
                    <div className="text-[#d4af37] mb-6 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-[#d4af37] transition-colors">{service.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="py-16 bg-gradient-to-r from-[#d4af37] via-[#f4d03f] to-[#d4af37]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-black rounded-full mb-4">
                  <div className="text-[#d4af37]">{feature.icon}</div>
                </div>
                <h3 className="text-lg font-bold text-black mb-1">{feature.title}</h3>
                <p className="text-sm text-black/80">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light text-white mb-4">Premium Fleet</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-6"></div>
            <p className="text-xl text-gray-400">Luxury vehicles maintained to the highest standards</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {fleet.map((vehicle, index) => (
              <Card key={index} className="bg-gradient-to-b from-gray-900 to-black border-2 border-gray-800 hover:border-[#d4af37] transition-all group overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden group-hover:from-gray-700 group-hover:to-gray-800 transition-all">
                  <div className="absolute inset-0 bg-[#d4af37]/5 group-hover:bg-[#d4af37]/10 transition-all"></div>
                  <div className="relative z-10">
                    <div className="text-[#d4af37] text-6xl font-bold opacity-20">{vehicle.title.split(' ')[0]}</div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="text-[#d4af37] text-sm font-semibold mb-1">{vehicle.title}</div>
                  <h3 className="text-xl font-bold text-white mb-1">{vehicle.name}</h3>
                  <p className="text-gray-500 text-sm mb-4">{vehicle.subtitle}</p>
                  <div className="space-y-2">
                    {vehicle.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-gray-400 text-sm">
                        <div className="w-1 h-1 bg-[#d4af37] rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-6xl font-light text-[#d4af37] mb-2">10K+</div>
              <div className="text-sm uppercase tracking-wider text-gray-500">Airport Transfers</div>
            </div>
            <div>
              <div className="text-6xl font-light text-[#d4af37] mb-2">100%</div>
              <div className="text-sm uppercase tracking-wider text-gray-500">On-Time Rate</div>
            </div>
            <div>
              <div className="text-6xl font-light text-[#d4af37] mb-2">24/7</div>
              <div className="text-sm uppercase tracking-wider text-gray-500">Service</div>
            </div>
            <div>
              <div className="text-6xl font-light text-[#d4af37] mb-2">5★</div>
              <div className="text-sm uppercase tracking-wider text-gray-500">Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at center, #d4af37 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <h2 className="text-5xl font-light text-white mb-6">Experience Excellence</h2>
          <p className="text-xl text-gray-400 mb-12">
            Professional chauffeur service for discerning clients
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/book-now">
              <Button size="lg" className="bg-gradient-to-r from-[#d4af37] to-[#f4d03f] hover:from-[#b8941f] hover:to-[#d4af37] text-black font-bold px-12 py-7 text-lg shadow-2xl shadow-[#d4af37]/50">
                Reserve Your Ride
              </Button>
            </Link>
            <a href="mailto:limoiadairport@gmail.com">
              <Button size="lg" variant="outline" className="border-2 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black px-12 py-7 text-lg">
                <Mail className="mr-2 h-5 w-5" />
                Contact Us
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IadHomePage;