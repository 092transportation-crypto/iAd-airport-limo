import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { CheckCircle2, Star, Users, Shield, Award, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const values = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Elegance & Comfort',
      description: 'Ride in comfort with our meticulously maintained luxury vehicles.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Experienced Chauffeurs',
      description: 'Our professional drivers ensure your safety and provide courteous, seamless service.'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Reliable & Timely',
      description: 'We pride ourselves on being punctual — every time.'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Client-Focused Service',
      description: 'We go above and beyond to ensure your satisfaction on every trip.'
    }
  ];

  const fleet = [
    'Sleek Executive Sedans',
    'Premium SUVs',
    'Elegant Stretch Limousines',
    'Luxury Sprinter Vans',
    'Executive Coaches'
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
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About King Limo Inc</h1>
          <p className="text-xl text-gray-300">
            Your Trusted Partner in Executive Transportation
          </p>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Welcome to King Limo Inc</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At King Limo Inc, we deliver exceptional luxury transportation tailored to your needs. Whether you're heading to the airport, attending a corporate function, celebrating a wedding, or planning an elegant night out, we're here to ensure your ride is smooth, stylish, and dependable.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                King Limo Inc is committed to providing superior chauffeured services with elegance and professionalism. Our fleet includes sleek executive sedans, premium SUVs, and elegant stretch limousines — all crafted to deliver an outstanding travel experience.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We pride ourselves on exceptional service, meticulous attention to detail, and an unwavering commitment to customer satisfaction. Every journey with us is designed to exceed your expectations.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#d4af37]/10 to-[#d4af37]/5 rounded-lg p-12 flex items-center justify-center">
              <Award className="h-48 w-48 text-[#d4af37]" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Promise to You</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#d4af37]/10 rounded-full text-[#d4af37] mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose King Limo Inc?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start space-x-4">
              <CheckCircle2 className="h-6 w-6 text-[#d4af37] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">First-Class Fleet</h3>
                <p className="text-gray-400">A premium variety of luxury vehicles for every occasion</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle2 className="h-6 w-6 text-[#d4af37] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Transparent Pricing</h3>
                <p className="text-gray-400">Fair, upfront rates with zero hidden fees</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle2 className="h-6 w-6 text-[#d4af37] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Around-the-Clock Availability</h3>
                <p className="text-gray-400">Transportation services available 24/7</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle2 className="h-6 w-6 text-[#d4af37] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Tailored Services</h3>
                <p className="text-gray-400">Packages designed to fit your unique requirements</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Fleet */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Luxury Fleet</h2>
          <p className="text-lg text-gray-700 mb-12">
            Every vehicle in our fleet is meticulously maintained, detailed, and sanitized for your safety and comfort.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {fleet.map((vehicle, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow">
                <Star className="h-5 w-5 text-[#d4af37] flex-shrink-0" />
                <span className="text-gray-800 font-medium">{vehicle}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-black via-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">
            Let King Limo Inc Elevate Your Travel Experience
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Because you deserve more than just a ride
          </p>
          <Link to="/book-now">
            <Button size="lg" className="bg-[#d4af37] hover:bg-[#b8941f] text-black font-bold px-8 py-6 text-lg transition-all hover:scale-105">
              Book Online Now
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;