import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Wine, Map, Users, DollarSign, Calendar, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const WineToursPage = () => {
  const features = [
    {
      icon: <Map className="h-8 w-8" />,
      title: 'Custom Wine Tours',
      description: 'Design your own wine adventure with flexible pick-up and drop-off schedules — or let us curate a route featuring some of the region\'s top-rated wineries and most stunning scenic stops.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Transportation for All Group Sizes',
      description: 'From elegant stretch limousines for a romantic day out, to spacious party buses and executive coaches for bigger gatherings, we provide the ideal vehicle to match your occasion.'
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: 'No Hidden Charges',
      description: 'No surprises. No extra tolls, mileage, parking, or beverage fees. Just transparent pricing with complimentary drinks and bottled water.'
    }
  ];

  const occasions = [
    'Birthday Celebrations',
    'Bachelorette & Bachelor Parties',
    'Romantic Escapes',
    'Corporate Team Outings',
    'Anniversary Celebrations',
    'Friends Getaways'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-black via-gray-900 to-black text-white">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        />
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-[#d4af37]/20 rounded-full mb-6">
            <Wine className="h-10 w-10 text-[#d4af37]" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Wine Tours</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Sip, Savor, and Relax with King Limo Inc
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Wine Tour & Chauffeur Services
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Let King Limo Inc handle the driving while you indulge in the rich flavors and aromas of premier wineries. Whether you're exploring rolling vineyards or nearby wine trails, our professional chauffeur services deliver a relaxing, luxurious experience — with total peace of mind.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            We proudly offer custom wine and sightseeing tours throughout the region — perfect for couples, friends, or large group celebrations.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Here's What You Get
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="text-[#d4af37] mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Perfect For Every Occasion</h2>
            <p className="text-lg text-gray-600">
              Sip safely and travel in style with our premier wine tour service
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {occasions.map((occasion, index) => (
              <div key={index} className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <CheckCircle2 className="h-6 w-6 text-[#d4af37] flex-shrink-0" />
                <span className="text-gray-800 font-medium">{occasion}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Transparency */}
      <section className="py-16 bg-gradient-to-r from-[#d4af37] to-[#b8941f]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-black mb-6">Simple, Transparent Pricing</h2>
          <p className="text-lg text-black mb-6">
            No surprises. No extra tolls, mileage, parking, or beverage fees.
          </p>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 inline-block">
            <p className="text-black font-semibold text-lg mb-2">We keep it simple with just:</p>
            <ul className="text-black space-y-2">
              <li>✓ 9.5% transportation fee</li>
              <li>✓ 10% fuel surcharge</li>
              <li>✓ Complimentary drinks and iced bottled water included</li>
            </ul>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#d4af37] rounded-full text-white font-bold text-2xl mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Choose Your Experience</h3>
              <p className="text-gray-600">Select from our curated wine routes or design your own custom tour</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#d4af37] rounded-full text-white font-bold text-2xl mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Pick Your Vehicle</h3>
              <p className="text-gray-600">Choose the perfect luxury vehicle for your group size and style</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#d4af37] rounded-full text-white font-bold text-2xl mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Relax & Enjoy</h3>
              <p className="text-gray-600">Sit back, sip, and let our professional chauffeur handle everything</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-black via-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <Wine className="h-16 w-16 text-[#d4af37] mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">
            Ready for an Unforgettable Wine Experience?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Book your wine tour today and travel in luxury while you explore the finest wineries
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book-now">
              <Button size="lg" className="bg-[#d4af37] hover:bg-[#b8941f] text-black font-bold px-8 py-6 text-lg transition-all hover:scale-105">
                Book Tour Now
              </Button>
            </Link>
            <a href="tel:(667)400-0092">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg transition-all">
                Call for Details
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WineToursPage;