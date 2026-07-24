import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import FaqSection from '../components/FaqSection';
import TrustSignals from '../components/TrustSignals';
import { Shield, Clock, Star, Award, Phone, Mail, ExternalLink, Send, CheckCircle } from 'lucide-react';

const bookingFaqs = [
  {
    question: 'How far in advance should I book my Dulles airport car?',
    answer:
      'We recommend booking at least 24 hours ahead for guaranteed availability. Same-day requests are often possible — call (877) 609-1919 to check.',
  },
  {
    question: 'What information do I need to book?',
    answer:
      'Your pickup address, destination, date and time, passenger and luggage count, and flight number for airport pickups so we can track your arrival.',
  },
  {
    question: 'Is my rate confirmed when I book?',
    answer:
      'Yes. You receive a written flat-rate confirmation — no surge pricing and no hidden fees. The quoted price is the final price.',
  },
  {
    question: 'Can I change or cancel my reservation?',
    answer:
      'Yes. Contact us at (877) 609-1919 to modify or cancel. Cancellations made more than 24 hours before pickup avoid any fee.',
  },
];

const BookingPage = () => {
  const emptyForm = {
    name: '',
    phone: '',
    email: '',
    preferred_contact: 'Phone',
    service_type: 'Airport Transfer',
    pickup_location: '',
    dropoff_location: '',
    date: '',
    time: '',
    passengers: 1,
    message: ''
  };
  const [formData, setFormData] = useState(emptyForm);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/quote-requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, source: 'Booking page' })
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData(emptyForm);
      } else {
        setError('Failed to submit. Please try again or call us directly.');
      }
    } catch (err) {
      setError('Network error. Please try again or call us directly.');
    }
    setLoading(false);
  };

  const features = [
    { icon: <Shield className="h-5 w-5" />, text: 'Secure Booking' },
    { icon: <Clock className="h-5 w-5" />, text: 'Quick Response' },
    { icon: <Star className="h-5 w-5" />, text: 'Best Rates' },
    { icon: <Award className="h-5 w-5" />, text: 'Professional Service' }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Seo
        title="Book IAD Airport Car Service | Free Flat-Rate Quote"
        description="Book your Dulles airport limo online in minutes. Flat rates, flight tracking & professional chauffeurs across DC, MD & VA. Or call (877) 609-1919 anytime."
        path="/book-now"
        faqs={bookingFaqs}
      />
      <Navbar />

      <section className="relative pt-32 pb-12 bg-black">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-white/40 text-xs tracking-widest uppercase mb-3">Reservations</p>
          <h1 className="font-display text-4xl md:text-5xl text-white mb-4">Book Your Ride</h1>
          <p className="text-white/60 max-w-2xl mx-auto">Get a free quote for premium airport transportation</p>
        </div>
      </section>

      <section className="py-4 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center justify-center gap-2">
                <div className="text-black">{feature.icon}</div>
                <span className="text-black font-semibold text-xs sm:text-sm">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4">
          {/* Booking Form */}
          <div className="bg-white rounded-lg overflow-hidden shadow-xl mb-8">
            <div className="bg-black p-4">
              <h2 className="text-lg font-semibold text-white text-center">Request a Free Quote</h2>
              <p className="text-white/60 text-xs text-center mt-1">We respond within 15 minutes</p>
            </div>
            
            <div className="p-6">
              {submitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Request Submitted!</h3>
                  <p className="text-gray-600 mb-4">We'll contact you shortly with your quote.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2 bg-black text-white font-semibold hover:bg-gray-800"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} required
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-transparent text-gray-900 bg-white" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} required
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-transparent text-gray-900 bg-white" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-transparent text-gray-900 bg-white" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Contact</label>
                      <select name="preferred_contact" value={formData.preferred_contact} onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-transparent text-gray-900 bg-white">
                        <option value="Phone">Phone</option>
                        <option value="Email">Email</option>
                        <option value="Text">Text</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Service Type</label>
                      <select name="service_type" value={formData.service_type} onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-transparent text-gray-900 bg-white">
                        <option value="Airport Transfer">Airport Transfer</option>
                        <option value="Corporate Travel">Corporate Travel</option>
                        <option value="Wedding Transportation">Wedding Transportation</option>
                        <option value="Prom / School Event">Prom / School Event</option>
                        <option value="Wine Tour">Wine Tour</option>
                        <option value="Concert / Event">Concert / Event</option>
                        <option value="Birthday / Night Out">Birthday / Night Out</option>
                        <option value="Hourly Charter">Hourly Charter</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Pickup Location *</label>
                      <input type="text" name="pickup_location" value={formData.pickup_location} onChange={handleChange} required
                        placeholder="Address or Airport"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-transparent text-gray-900 bg-white" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Drop-off Location *</label>
                      <input type="text" name="dropoff_location" value={formData.dropoff_location} onChange={handleChange} required
                        placeholder="Address or Airport"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-transparent text-gray-900 bg-white" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Date *</label>
                      <input type="date" name="date" value={formData.date} onChange={handleChange} required
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-transparent text-gray-900 bg-white" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Pickup Time *</label>
                      <input type="time" name="time" value={formData.time} onChange={handleChange} required
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-transparent text-gray-900 bg-white" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Passengers</label>
                      <input type="number" name="passengers" value={formData.passengers} onChange={handleChange} min="1" max="14"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-transparent text-gray-900 bg-white" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
                      <textarea name="message" value={formData.message} onChange={handleChange} rows={3}
                        placeholder="Flight number, luggage count, child seats, special requests…"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-transparent text-gray-900 bg-white resize-y" />
                    </div>
                  </div>
                  {error && <p className="text-red-500 text-sm">{error}</p>}
                  <button type="submit" disabled={loading}
                    className="w-full py-3 bg-black text-white font-bold uppercase tracking-wider hover:bg-gray-800 disabled:bg-gray-400 flex items-center justify-center gap-2">
                    {loading ? 'Submitting...' : <><Send className="w-4 h-4" /> Get Free Quote</>}
                  </button>
                  <TrustSignals dark className="pt-1" />
                </form>
              )}
            </div>
          </div>

          {/* Contact Options */}
          <div className="mt-10 text-center">
            <p className="text-white/40 mb-4 text-sm">Prefer to book by phone or email?</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:+18776091919"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white text-white font-bold uppercase tracking-wider text-sm hover:bg-white hover:text-black transition-all">
                <Phone className="w-4 h-4" /> (877) 609-1919
              </a>
              <a href="mailto:limoiadairport@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white text-white font-bold uppercase tracking-wider text-sm hover:bg-white hover:text-black transition-all">
                <Mail className="w-4 h-4" /> Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <FaqSection faqs={bookingFaqs} />

      <Footer />
    </div>
  );
};

export default BookingPage;
