import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-light text-white mb-6" data-testid="privacy-title">
            Privacy Policy
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-6"></div>
          <p className="text-gray-400">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert prose-lg max-w-none" data-testid="privacy-content">
            
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">Introduction</h2>
              <p className="text-gray-300 leading-relaxed">
                King Transportation ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our limousine and transportation services or visit our website.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">Information We Collect</h2>
              <p className="text-gray-300 leading-relaxed mb-4">We may collect the following types of information:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li><strong className="text-white">Personal Information:</strong> Name, email address, phone number, billing address, and payment information when you make a reservation.</li>
                <li><strong className="text-white">Trip Information:</strong> Pickup and drop-off locations, travel dates and times, flight information, and special requests.</li>
                <li><strong className="text-white">Device Information:</strong> IP address, browser type, operating system, and other technical information when you visit our website.</li>
                <li><strong className="text-white">Communication Records:</strong> Records of your communications with us, including customer service inquiries.</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">How We Use Your Information</h2>
              <p className="text-gray-300 leading-relaxed mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Process and fulfill your transportation reservations</li>
                <li>Communicate with you about your bookings and services</li>
                <li>Send you promotional offers and updates (with your consent)</li>
                <li>Improve our services and customer experience</li>
                <li>Comply with legal obligations and resolve disputes</li>
                <li>Prevent fraudulent transactions and protect our business</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">Information Sharing</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information with:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li><strong className="text-white">Service Providers:</strong> Third-party vendors who assist us in operating our business (payment processors, booking systems).</li>
                <li><strong className="text-white">Legal Requirements:</strong> When required by law or to protect our rights and safety.</li>
                <li><strong className="text-white">Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets.</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">Data Security</h2>
              <p className="text-gray-300 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">Cookies and Tracking</h2>
              <p className="text-gray-300 leading-relaxed">
                Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can control cookie settings through your browser preferences. Disabling cookies may affect certain website functionality.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">Your Rights</h2>
              <p className="text-gray-300 leading-relaxed mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Access and receive a copy of your personal information</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent where applicable</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">Children's Privacy</h2>
              <p className="text-gray-300 leading-relaxed">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">Changes to This Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">Contact Us</h2>
              <p className="text-gray-300 leading-relaxed">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="mt-4 p-6 bg-gray-900 border border-[#d4af37]/20 rounded-lg">
                <p className="text-white font-semibold mb-2">King Transportation</p>
                <p className="text-gray-400">Phone: (877) 679-0100</p>
                <p className="text-gray-400">Email: info@kingtransportation.com</p>
                <p className="text-gray-400">Service Area: Maryland | Virginia | Washington DC</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
