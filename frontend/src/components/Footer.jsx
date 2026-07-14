import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const logo = '/logo.png';

  return (
    <footer className="bg-black border-t border-white/10">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img src={logo} alt="IAD Airport Limo" className="h-16" />
            </Link>
            <p className="font-body text-white/40 leading-relaxed mb-6 max-w-sm">
              Premium airport transportation serving Maryland, Virginia, and Washington DC. Licensed &amp; Insured Virginia &amp; Maryland Carrier.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-4">
              {[
                { name: 'Airport Transfers', path: '/airport-transfer' },
                { name: 'Corporate Travel', path: '/corporate' },
                { name: 'Wedding Limos', path: '/wedding-limo' },
                { name: 'Wine Tours', path: '/wine-tours' },
                { name: 'Birthday Limo', path: '/birthday-limo' },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link 
                    to={link.path}
                    className="font-body text-white/40 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Routes */}
          <div>
            <h4 className="font-display text-white font-semibold mb-6">Popular Routes</h4>
            <ul className="space-y-4">
              {[
                { name: 'IAD to Washington DC', path: '/iad-to-washington-dc' },
                { name: 'IAD to Bethesda', path: '/iad-to-bethesda' },
                { name: 'IAD to Arlington', path: '/iad-to-arlington' },
                { name: 'IAD to Alexandria', path: '/iad-to-alexandria' },
                { name: 'IAD to Tysons', path: '/iad-to-tysons' },
                { name: 'IAD to Baltimore', path: '/iad-to-baltimore' },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className="font-body text-white/40 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Our Fleet', path: '/fleet' },
                { name: 'Reviews', path: '/reviews' },
                { name: 'Blog', path: '/blog' },
                { name: 'Contact', path: '/contact' },
                { name: 'Privacy Policy', path: '/privacy' },
                { name: 'Terms of Service', path: '/terms' },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link 
                    to={link.path}
                    className="font-body text-white/40 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-white font-semibold mb-6">Contact</h4>
            <div className="space-y-4">
              <a 
                href="tel:+18776091919" 
                className="flex items-start gap-3 text-white hover:opacity-80 transition-opacity"
              >
                <Phone className="w-5 h-5 mt-0.5" />
                <div>
                  <p className="font-semibold">(877) 609-1919</p>
                  <p className="text-white/40 text-sm">Available 24/7</p>
                </div>
              </a>
              <a 
                href="mailto:limoiadairport@gmail.com"
                className="flex items-center gap-3 text-white/40 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>limoiadairport@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-white/40">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>IAD Dulles, Virginia<br />USA</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-white/40 text-sm">
              © {currentYear} IAD Airport Limo. All Rights Reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="font-body text-white/40 text-sm hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="font-body text-white/40 text-sm hover:text-white transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
