import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import FaqSection from '../components/FaqSection';
import TrustSignals from '../components/TrustSignals';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { sanitizePhone, isValidPhone } from '../lib/phone';
import AddressAutocomplete from '../components/AddressAutocomplete';

const contactFaqs = [
  {
    question: 'What is the fastest way to reach IAD Airport Limo?',
    answer:
      'Call (877) 609-1919 — the line is answered 24/7. You can also email limoiadairport@gmail.com or use the contact form on this page.',
  },
  {
    question: 'Can I get a quote over the phone?',
    answer:
      'Yes. Share your pickup address, destination, date, and passenger count and a reservation specialist will quote a flat rate on the spot and confirm it in writing.',
  },
  {
    question: 'Do you answer after hours and on holidays?',
    answer:
      'Yes. As a 24/7 airport transportation provider, our dispatch answers around the clock, every day of the year, including holidays.',
  },
];

const ContactPage = () => {
  const emptyForm = {
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    pickup_location: '',
    dropoff_location: '',
    pickup_lat: null,
    pickup_lng: null,
    dropoff_lat: null,
    dropoff_lng: null,
    date: '',
    passengers: ''
  };
  const [formData, setFormData] = useState(emptyForm);

  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sending) return;
    if (!isValidPhone(formData.phone)) {
      alert('Please enter a valid phone number (digits only, at least 10).');
      return;
    }
    setSending(true);
    try {
      const response = await fetch('/api/quote-requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          name: `${formData.first_name.trim()} ${formData.last_name.trim()}`.trim(),
          first_name: formData.first_name.trim(),
          last_name: formData.last_name.trim(),
          phone: formData.phone.trim(),
          source: 'Contact page'
        })
      });
      const data = await response.json();
      if (!response.ok || !data.success) {
        throw new Error(data.message || `HTTP ${response.status}`);
      }
      alert('Thank you! We will get back to you within 15 minutes.');
      setFormData(emptyForm);
    } catch (err) {
      alert("Couldn't send your message. Please call (877) 609-1919 instead.");
    }
    setSending(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: name === 'phone' ? sanitizePhone(value) : value });
  };

  return (
    <div className="min-h-screen bg-[#111]">
      <Seo
        title="Contact IAD Airport Limo | Call (877) 609-1919"
        description="Contact IAD Airport Limo for Dulles airport car service quotes and bookings. Phone, email & contact form — reservations answered 24/7 across DC, MD & VA."
        path="/contact"
        faqs={contactFaqs}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-32 bg-[#0d0d0d]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <p className="text-[#c9a227] text-sm tracking-[0.3em] uppercase mb-4">Get in Touch</p>
          <h1 className="text-5xl md:text-6xl font-light text-white mb-6">Contact Us</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have questions? We're here to help 24/7. Reach out to us for bookings, inquiries, or any assistance.
          </p>
        </div>
      </section>

      {/* Contact Info + Form Section */}
      <section className="py-20 bg-[#111]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-light text-white mb-8">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#c9a227]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#c9a227]" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Phone</h3>
                    <a href="tel:+18776091919" className="text-[#c9a227] text-lg font-medium hover:opacity-80">
                      (877) 609-1919
                    </a>
                    <p className="text-gray-500 text-sm mt-1">Available 24/7 for reservations</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#c9a227]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#c9a227]" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email</h3>
                    <a href="mailto:limoiadairport@gmail.com" className="text-[#c9a227] hover:opacity-80">
                      limoiadairport@gmail.com
                    </a>
                    <p className="text-gray-500 text-sm mt-1">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#c9a227]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#c9a227]" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Office</h3>
                    <p className="text-gray-400">9836 Lyon Ave, Laurel, MD 20723</p>
                    <p className="text-gray-500 text-sm mt-1">Serving Dulles, Washington DC, Maryland &amp; Virginia</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#c9a227]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#c9a227]" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Hours of Operation</h3>
                    <p className="text-gray-400">24 Hours / 7 Days a Week</p>
                    <p className="text-gray-500 text-sm mt-1">Including holidays</p>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="mt-12 p-6 bg-[#1a1a1a] border border-[#333]">
                <h3 className="text-white font-semibold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Link to="/book-now" className="block text-[#c9a227] hover:text-white transition-colors">
                    → Book a Ride Online
                  </Link>
                  <Link to="/fleet" className="block text-[#c9a227] hover:text-white transition-colors">
                    → View Our Fleet
                  </Link>
                  <Link to="/reviews" className="block text-[#c9a227] hover:text-white transition-colors">
                    → Read Customer Reviews
                  </Link>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-[#1a1a1a] border border-[#333] p-8">
                <h2 className="text-2xl font-light text-white mb-1">Get a Free Quote</h2>
                <p className="text-[#c9a227] text-sm mb-6">We respond within 15 minutes</p>

                <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-quote-form">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact-first-name" className="block text-gray-400 text-sm mb-2">First Name *</label>
                      <input
                        id="contact-first-name"
                        type="text"
                        name="first_name"
                        autoComplete="given-name"
                        value={formData.first_name}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#111] border border-[#333] text-white px-4 py-3 focus:border-[#c9a227] focus:outline-none transition-colors"
                        placeholder="First Name"
                        data-testid="contact-first-name-input"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-last-name" className="block text-gray-400 text-sm mb-2">Last Name *</label>
                      <input
                        id="contact-last-name"
                        type="text"
                        name="last_name"
                        autoComplete="family-name"
                        value={formData.last_name}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#111] border border-[#333] text-white px-4 py-3 focus:border-[#c9a227] focus:outline-none transition-colors"
                        placeholder="Last Name"
                        data-testid="contact-last-name-input"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact-phone" className="block text-gray-400 text-sm mb-2">Phone Number *</label>
                      <input
                        id="contact-phone"
                        type="tel"
                        inputMode="tel"
                        pattern="[0-9+()\-.\s]*"
                        name="phone"
                        autoComplete="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#111] border border-[#333] text-white px-4 py-3 focus:border-[#c9a227] focus:outline-none transition-colors"
                        placeholder="Phone Number"
                        data-testid="contact-phone-input"
                      />
                    </div>
                    <div>
                    <label htmlFor="contact-email" className="block text-gray-400 text-sm mb-2">Email Address *</label>
                    <input
                      id="contact-email"
                      type="email"
                      autoComplete="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#111] border border-[#333] text-white px-4 py-3 focus:border-[#c9a227] focus:outline-none transition-colors"
                      placeholder="john@example.com"
                      data-testid="contact-email-input"
                    />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-400 text-sm mb-2">Pickup Location *</label>
                      <AddressAutocomplete
                        label="Pickup Location"
                        name="pickup_location"
                        required
                        value={formData.pickup_location}
                        onChange={(v) => setFormData((f) => ({ ...f, pickup_location: v }))}
                        onSelect={(p) => setFormData((f) => ({ ...f, pickup_lat: p ? p.lat : null, pickup_lng: p ? p.lng : null }))}
                        inputClassName="w-full bg-[#111] border border-[#333] text-white px-4 py-3 focus:border-[#c9a227] focus:outline-none transition-colors"
                        placeholder="Address or Airport"
                        testId="contact-pickup-input"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 text-sm mb-2">Drop-off Location *</label>
                      <AddressAutocomplete
                        label="Drop-off Location"
                        name="dropoff_location"
                        required
                        value={formData.dropoff_location}
                        onChange={(v) => setFormData((f) => ({ ...f, dropoff_location: v }))}
                        onSelect={(p) => setFormData((f) => ({ ...f, dropoff_lat: p ? p.lat : null, dropoff_lng: p ? p.lng : null }))}
                        inputClassName="w-full bg-[#111] border border-[#333] text-white px-4 py-3 focus:border-[#c9a227] focus:outline-none transition-colors"
                        placeholder="Address or Airport"
                        testId="contact-dropoff-input"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-400 text-sm mb-2">Pickup Date *</label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#111] border border-[#333] text-white px-4 py-3 focus:border-[#c9a227] focus:outline-none transition-colors"
                        data-testid="contact-date-input"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 text-sm mb-2">Passengers</label>
                      <input
                        type="number"
                        name="passengers"
                        value={formData.passengers}
                        onChange={handleChange}
                        min="1"
                        max="14"
                        className="w-full bg-[#111] border border-[#333] text-white px-4 py-3 focus:border-[#c9a227] focus:outline-none transition-colors"
                        placeholder="How many?"
                        data-testid="contact-passengers-input"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full py-4 bg-[#c9a227] text-black font-semibold uppercase tracking-wider hover:bg-[#b8941f] disabled:opacity-60 transition-all flex items-center justify-center gap-2"
                    data-testid="contact-submit-btn"
                  >
                    <Send className="w-4 h-4" />
                    {sending ? 'Sending...' : 'Get My Free Quote'}
                  </button>

                  <TrustSignals />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FaqSection faqs={contactFaqs} />

      <Footer />
    </div>
  );
};

export default ContactPage;
