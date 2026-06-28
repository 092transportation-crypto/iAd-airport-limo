import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-[#111]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-32 bg-[#0d0d0d]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <p className="text-[#c9a227] text-sm tracking-[0.3em] uppercase mb-4">Legal</p>
          <h1 className="text-5xl md:text-6xl font-light text-white mb-6">Terms & Conditions</h1>
          <p className="text-gray-400">Last updated: December 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-[#111]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-invert max-w-none">
            <div className="bg-[#1a1a1a] border border-[#333] p-8 mb-8">
              <h2 className="text-2xl font-light text-white mb-4">1. Reservation & Booking</h2>
              <div className="text-gray-400 space-y-4">
                <p>
                  All reservations are subject to vehicle availability. A reservation is confirmed only when you receive a confirmation email or confirmation number from IAD Airport Limo.
                </p>
                <p>
                  Advance reservations are recommended, especially during peak travel seasons and holidays. Walk-up service may be available but is not guaranteed.
                </p>
              </div>
            </div>

            <div className="bg-[#1a1a1a] border border-[#333] p-8 mb-8">
              <h2 className="text-2xl font-light text-white mb-4">2. Cancellation Policy</h2>
              <div className="text-gray-400 space-y-4">
                <p>
                  <strong className="text-white">Standard Cancellation:</strong> Cancellations made 24 hours or more before the scheduled pickup time will receive a full refund.
                </p>
                <p>
                  <strong className="text-white">Late Cancellation:</strong> Cancellations made less than 24 hours before the scheduled pickup time may be subject to a cancellation fee of up to 50% of the total fare.
                </p>
                <p>
                  <strong className="text-white">No-Show:</strong> Failure to appear at the scheduled pickup time without prior notice will result in a charge of the full fare.
                </p>
              </div>
            </div>

            <div className="bg-[#1a1a1a] border border-[#333] p-8 mb-8">
              <h2 className="text-2xl font-light text-white mb-4">3. Payment Terms</h2>
              <div className="text-gray-400 space-y-4">
                <p>
                  We accept all major credit cards (Visa, MasterCard, American Express, Discover), cash, and corporate accounts for approved businesses.
                </p>
                <p>
                  Full payment or a deposit may be required at the time of booking. Any additional charges (tolls, parking, wait time) will be charged to the payment method on file.
                </p>
              </div>
            </div>

            <div className="bg-[#1a1a1a] border border-[#333] p-8 mb-8">
              <h2 className="text-2xl font-light text-white mb-4">4. Wait Time & Delays</h2>
              <div className="text-gray-400 space-y-4">
                <p>
                  <strong className="text-white">Airport Pickups:</strong> We monitor flight arrivals and adjust pickup times accordingly. A complimentary wait time of 60 minutes after flight landing is included for domestic flights and 90 minutes for international flights.
                </p>
                <p>
                  <strong className="text-white">Other Pickups:</strong> A complimentary wait time of 15 minutes is included. Additional wait time will be charged at the applicable hourly rate.
                </p>
              </div>
            </div>

            <div className="bg-[#1a1a1a] border border-[#333] p-8 mb-8">
              <h2 className="text-2xl font-light text-white mb-4">5. Passenger Conduct</h2>
              <div className="text-gray-400 space-y-4">
                <p>
                  Passengers are expected to conduct themselves in a respectful manner. Smoking, vaping, and consumption of alcohol (unless in an approved party vehicle) are prohibited.
                </p>
                <p>
                  Any damage to the vehicle caused by passengers will be charged to the customer. This includes cleaning fees for excessive mess or odors.
                </p>
              </div>
            </div>

            <div className="bg-[#1a1a1a] border border-[#333] p-8 mb-8">
              <h2 className="text-2xl font-light text-white mb-4">6. Liability</h2>
              <div className="text-gray-400 space-y-4">
                <p>
                  IAD Airport Limo is not responsible for delays caused by traffic, weather, road conditions, or other circumstances beyond our control.
                </p>
                <p>
                  We are not liable for any lost, stolen, or damaged personal items left in our vehicles. Customers are advised to check for personal belongings before exiting the vehicle.
                </p>
              </div>
            </div>

            <div className="bg-[#1a1a1a] border border-[#333] p-8">
              <h2 className="text-2xl font-light text-white mb-4">7. Contact Information</h2>
              <div className="text-gray-400 space-y-4">
                <p>
                  For questions about these terms or to make a reservation, please contact us:
                </p>
                <ul className="list-none space-y-2">
                  <li><strong className="text-[#c9a227]">Phone:</strong> (877) 679-0100</li>
                  <li><strong className="text-[#c9a227]">Email:</strong> limoiadairport@gmail.com</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsPage;
