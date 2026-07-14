import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { CheckCircle2, Plane, Clock, Users, Car, Briefcase, Home, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import FaqSection from '../components/FaqSection';

const airportFaqs = [
  {
    question: 'Which airports does your transfer service cover?',
    answer:
      'We specialize in Dulles International (IAD) and also serve Reagan National (DCA) and BWI Marshall, including airport-to-airport connections.',
  },
  {
    question: 'How does airport pickup work at IAD?',
    answer:
      'Your chauffeur tracks your flight and meets you at baggage claim with a name sign (meet & greet) or curbside — your choice at booking. Complimentary wait time is included.',
  },
  {
    question: 'What if my flight is delayed or lands early?',
    answer:
      'Flight tracking is automatic on every airport pickup. Your chauffeur adjusts to the actual arrival time at no extra charge.',
  },
  {
    question: 'Do you offer flat rates for airport transfers?',
    answer:
      'Yes. Every transfer is quoted as a written flat rate based on your address and vehicle — no surge pricing. Call (877) 609-1919 for a quote.',
  },
];

const AirportTransferPage = () => {
  const benefits = [
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Always On Time',
      description: 'We track your flight in real time to ensure timely pickups, even with delays or early arrivals.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Meet & Greet Service',
      description: 'Your professional chauffeur will meet you inside the terminal or curbside with a personalized sign.'
    },
    {
      icon: <Car className="h-8 w-8" />,
      title: 'Luxurious Fleet Options',
      description: 'Choose from elegant executive sedans, spacious luxury SUVs, and stunning stretch limousines.'
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: 'Luggage Assistance',
      description: 'Relax while we handle your bags with professionalism and care.'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: '24/7 Availability',
      description: 'Perfect for red-eyes, early departures, or late-night returns — we operate around the clock.'
    }
  ];

  const clientTypes = [
    { icon: <Briefcase className="h-6 w-6" />, text: 'Corporate travelers' },
    { icon: <Users className="h-6 w-6" />, text: 'Out-of-town visitors' },
    { icon: <Users className="h-6 w-6" />, text: 'Wedding guests & bridal parties' },
    { icon: <Users className="h-6 w-6" />, text: 'Families and large groups' },
    { icon: <Users className="h-6 w-6" />, text: 'High-profile & VIP clients' }
  ];

  const destinations = [
    { icon: <MapPin className="h-5 w-5" />, text: 'Major metropolitan areas and business districts' },
    { icon: <MapPin className="h-5 w-5" />, text: 'Convention centers and corporate venues' },
    { icon: <Home className="h-5 w-5" />, text: 'Hotels, private residences, and vacation rentals' },
    { icon: <Plane className="h-5 w-5" />, text: 'Cruise ports and transportation terminals' },
    { icon: <MapPin className="h-5 w-5" />, text: 'All major suburbs and neighborhoods across the region' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="IAD Airport Transportation & Limo Service Dulles | IAD Airport Limo"
        description="IAD Airport Limo offers airport transportation in Dulles, VA & Washington DC. Flat rates, no hidden fees, flight tracking & meet & greet. Book 24/7. (877) 609-1919."
        path="/airport-transfer"
        faqs={airportFaqs}
      />
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
            <Plane className="h-10 w-10 text-[#d4af37]" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Airport Transfers</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Reliable Ground Transportation for All Airport Travelers
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Arrive or depart from any major airport with ease, comfort, and total confidence. Our airport limo transfer service is crafted for travelers who value professionalism, punctuality, and a truly luxurious experience.
          </p>
        </div>
      </section>

      {/* No Hidden Fees Banner */}
      <section className="py-12 bg-[#d4af37]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">No Hidden Fees!</h2>
          <p className="text-lg text-black">
            No surprise charges for tolls, parking, mileage, beverage service, or wait times. Request a quote today and enjoy clear, upfront pricing!
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Airport Limo Transfer Service?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="text-[#d4af37] mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Who We Serve</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clientTypes.map((client, index) => (
              <div key={index} className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg">
                <div className="text-[#d4af37]">{client.icon}</div>
                <span className="text-gray-800 font-medium">{client.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Destinations We Serve</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {destinations.map((dest, index) => (
              <div key={index} className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow">
                <div className="text-[#d4af37] mt-1">{dest.icon}</div>
                <span className="text-gray-700">{dest.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* SEO: corporate & VIP airport travel */}
      <section className="py-16 md:py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">IAD Airport Transportation for Corporate &amp; VIP Travelers</h2>
          <p className="text-white/70 leading-relaxed mb-4">
            Frequent flyers choose our Dulles luxury airport transportation because it removes every variable from
            the trip. This is the IAD airport limo service business travelers keep on speed dial: a Virginia airport
            car service with real-time flight tracking, inside-terminal meet and greet, and flat rates to Washington
            DC, Tysons Corner, McLean, and beyond. Whether you searched for limo service to Dulles airport, a Dulles
            airport car service for a red-eye landing, or washington dulles airport limo service for a visiting
            executive, the answer is the same vehicle-and-chauffeur standard.
          </p>
          <p className="text-white/70 leading-relaxed">
            We also run IAD Tysons Corner car service and Germantown MD car service to Dulles daily, alongside
            chauffeur service at Dulles airport for VIP arrivals. One flat quote covers tolls, taxes, and gratuity —
            see arrival details at the official{" "}
            <a href="https://www.flydulles.com" target="_blank" rel="noopener noreferrer" className="underline text-white hover:text-white/80">
              Dulles International Airport site
            </a>, then let us handle the rest.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-black via-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">
            Book Your Airport Limo Transfer Today
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Say goodbye to the uncertainty of rideshares and long taxi lines. Travel in style with our premium limo service. Flat rates, no hidden costs, and exceptional service — guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book-now">
              <Button size="lg" className="bg-[#d4af37] hover:bg-[#b8941f] text-black font-bold px-8 py-6 text-lg transition-all hover:scale-105">
                Book Online Now
              </Button>
            </Link>
            <a href="tel:+18776091919">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg transition-all">
                Call for Custom Quote
              </Button>
            </a>
          </div>
        </div>
      </section>

      <FaqSection faqs={airportFaqs} />

      <Footer />
    </div>
  );
};

export default AirportTransferPage;