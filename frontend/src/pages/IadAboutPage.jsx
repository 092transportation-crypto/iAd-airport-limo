import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import FaqSection from '../components/FaqSection';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { CheckCircle2, Star, Shield, Clock, Award, Plane, Users, Car } from 'lucide-react';
import { Link } from 'react-router-dom';

const aboutFaqs = [
  {
    question: 'What is IAD Airport Limo?',
    answer:
      'IAD Airport Limo is a luxury chauffeured transportation company based at Dulles International Airport, serving Washington DC, Maryland, and Virginia with airport transfers, corporate travel, and special-event service.',
  },
  {
    question: 'Which airports do you serve?',
    answer:
      'We specialize in Washington Dulles International (IAD) and also serve Reagan National (DCA) and BWI Marshall, including airport-to-airport transfers between them.',
  },
  {
    question: 'Are your chauffeurs background-checked?',
    answer:
      'Yes. Every chauffeur is professionally trained, background-checked, and employed under our authority as a licensed and insured Virginia and Maryland carrier.',
  },
  {
    question: 'Do you offer corporate accounts?',
    answer:
      'Yes. We provide corporate accounts with centralized booking, consolidated billing, and priority dispatch. Call (877) 609-1919 and ask for corporate service.',
  },
];

const IadAboutPage = () => {
  const values = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Safety First',
      description: 'All chauffeurs are licensed, insured, and undergo comprehensive background checks. Your safety is our top priority.'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Punctuality Guaranteed',
      description: 'We monitor flights in real-time and adjust pickup times accordingly. Never miss a flight or wait at the airport.'
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: 'Luxury Experience',
      description: 'Impeccably maintained vehicles with premium amenities. Travel in comfort and style every time.'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Professional Service',
      description: 'Courteous, knowledgeable chauffeurs dedicated to providing exceptional customer service.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="About Us | IAD Chauffeur Service at Dulles Airport"
        description="Meet the team behind IAD Airport Limo — a licensed & insured Virginia & Maryland carrier providing chauffeured Dulles airport car service across DC, MD & VA."
        path="/about"
        faqs={aboutFaqs}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-black via-gray-900 to-black text-white">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About IAD Airport Limo</h1>
          <p className="text-xl text-gray-300">
            Washington DC's Premier Executive Airport Transportation Service
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Your Trusted Airport Transportation Partner</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              IAD Airport Limo specializes in premium ground transportation to and from Washington Dulles International Airport (IAD), Ronald Reagan Washington National Airport (DCA), and Baltimore/Washington International Airport (BWI).
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We serve corporate executives, business travelers, and discerning clients throughout the Washington DC metropolitan area, Northern Virginia, and Maryland. Our commitment to punctuality, professionalism, and luxury sets us apart as the region's premier airport car service.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-16 bg-gradient-to-r from-[#d4af37] to-[#b8941f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="h-12 w-12 text-black mx-auto mb-4" />
          <div className="text-3xl md:text-4xl font-bold text-black mb-2">Licensed &amp; Insured Virginia &amp; Maryland Carrier</div>
          <div className="text-black/80 font-medium">Commercial insurance, vetted professional chauffeurs, and 24/7 customer support</div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Makes Us Different</h2>
            <p className="text-lg text-gray-600">Excellence in every detail of your journey</p>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Why Executives Choose IAD Airport Limo</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Plane className="h-6 w-6 text-[#d4af37] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Airport Specialists</h3>
                    <p className="text-gray-400">Extensive experience with IAD, DCA, and BWI airport procedures, terminals, and traffic patterns.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Users className="h-6 w-6 text-[#d4af37] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Corporate Expertise</h3>
                    <p className="text-gray-400">Dedicated account management and streamlined billing for business clients.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Car className="h-6 w-6 text-[#d4af37] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Premium Fleet</h3>
                    <p className="text-gray-400">Late-model luxury sedans, SUVs, and sprinter vans maintained to the highest standards.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Shield className="h-6 w-6 text-[#d4af37] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Licensed & Insured</h3>
                    <p className="text-gray-400">Fully licensed, commercially insured, and compliant with all FAA and airport authority regulations.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#d4af37]/20 to-[#d4af37]/5 rounded-lg p-12 flex items-center justify-center">
              <Award className="h-64 w-64 text-[#d4af37]" />
            </div>
          </div>
        </div>
      </section>

      {/* Service Promise */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Service Promise</h2>
          <div className="space-y-4 text-left max-w-2xl mx-auto">
            <div className="flex items-start space-x-3">
              <CheckCircle2 className="h-6 w-6 text-[#d4af37] flex-shrink-0 mt-1" />
              <p className="text-gray-700 text-lg">Flight tracking and real-time monitoring for all airport pickups</p>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle2 className="h-6 w-6 text-[#d4af37] flex-shrink-0 mt-1" />
              <p className="text-gray-700 text-lg">Professional meet & greet service at baggage claim</p>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle2 className="h-6 w-6 text-[#d4af37] flex-shrink-0 mt-1" />
              <p className="text-gray-700 text-lg">Complimentary waiting time for flight delays</p>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle2 className="h-6 w-6 text-[#d4af37] flex-shrink-0 mt-1" />
              <p className="text-gray-700 text-lg">24/7 customer support and reservation assistance</p>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle2 className="h-6 w-6 text-[#d4af37] flex-shrink-0 mt-1" />
              <p className="text-gray-700 text-lg">Transparent pricing with no hidden fees</p>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle2 className="h-6 w-6 text-[#d4af37] flex-shrink-0 mt-1" />
              <p className="text-gray-700 text-lg">Immaculate vehicles cleaned and sanitized before every trip</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-black via-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">
            Experience the IAD Airport Limo Difference
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Book your executive airport transportation today
          </p>
          <Link to="/book-now">
            <Button size="lg" className="bg-[#d4af37] hover:bg-[#b8941f] text-black font-bold px-12 py-6 text-lg transition-all hover:scale-105">
              Book Your Ride Now
            </Button>
          </Link>
        </div>
      </section>

      <FaqSection faqs={aboutFaqs} />

      <Footer />
    </div>
  );
};

export default IadAboutPage;
