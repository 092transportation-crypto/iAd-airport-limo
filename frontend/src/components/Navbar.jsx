import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Menu, X, ChevronDown, Star, MapPin, Clock, Mail } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const logo = '/logo.png';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const vehiclesDropdown = [
    { name: 'All Vehicles', path: '/fleet' },
    { name: 'Sedans', path: '/fleet' },
    { name: 'SUVs', path: '/fleet' },
    { name: 'Sprinter Vans', path: '/fleet' },
  ];

  const servicesDropdown = [
    { name: 'Airport Transfers', path: '/airport-transfer' },
    { name: 'Corporate Travel', path: '/corporate' },
    { name: 'Wedding Limo', path: '/wedding-limo' },
    { name: 'Wine Tours', path: '/wine-tours' },
  ];

  return (
    <header className="fixed w-full top-0 z-50">
      {/* Top Info Bar */}
      <div className="bg-white text-black py-2 text-xs">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center gap-2">
          <div className="hidden sm:flex items-center gap-4 md:gap-6">
            <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> IAD Dulles, Virginia</span>
            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> 24/7 Service</span>
            <span className="hidden md:flex items-center gap-1"><Mail className="w-3 h-3" /> limoiadairport@gmail.com</span>
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <a href="tel:+18776091919" className="flex items-center gap-1 font-bold"><Phone className="w-3 h-3" /> (877) 609-1919</a>
            <Link to="/book-now" className="bg-black text-white px-3 py-1 font-bold hover:bg-gray-800">BOOK NOW</Link>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className={`transition-all duration-300 ${isScrolled ? 'bg-black/95 backdrop-blur-xl' : 'bg-black/80 backdrop-blur-sm'} border-b border-white/10`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between py-3">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="IAD Airport Limo" className="h-14 md:h-16 object-contain" style={{background: 'transparent'}} />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link to="/" className="px-4 py-2 text-white text-sm font-medium hover:text-white/70">Home</Link>
            
            <div className="relative" onMouseEnter={() => setActiveDropdown('vehicles')} onMouseLeave={() => setActiveDropdown(null)}>
              <button className="flex items-center gap-1 px-4 py-2 text-white text-sm font-medium hover:text-white/70">
                Fleet <ChevronDown className={`w-3 h-3 transition-transform ${activeDropdown === 'vehicles' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'vehicles' && (
                <div className="absolute top-full left-0 pt-1">
                  <div className="bg-black border border-white/20 min-w-[180px] py-2">
                    {vehiclesDropdown.map((item, idx) => (
                      <Link key={idx} to={item.path} className="block px-4 py-2 text-white text-sm hover:bg-white/10">{item.name}</Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="relative" onMouseEnter={() => setActiveDropdown('services')} onMouseLeave={() => setActiveDropdown(null)}>
              <button className="flex items-center gap-1 px-4 py-2 text-white text-sm font-medium hover:text-white/70">
                Services <ChevronDown className={`w-3 h-3 transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 pt-1">
                  <div className="bg-black border border-white/20 min-w-[180px] py-2">
                    {servicesDropdown.map((item, idx) => (
                      <Link key={idx} to={item.path} className="block px-4 py-2 text-white text-sm hover:bg-white/10">{item.name}</Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/concert-transportation" className="px-4 py-2 text-white text-sm font-medium hover:text-white/70">Events &amp; Concerts</Link>
            <Link to="/about" className="px-4 py-2 text-white text-sm font-medium hover:text-white/70">About</Link>
            <Link to="/contact" className="px-4 py-2 text-white text-sm font-medium hover:text-white/70">Contact</Link>
            <Link to="/reviews" className="px-4 py-2 text-white text-sm font-medium hover:text-white/70 flex items-center gap-1">
              <Star className="w-3 h-3 fill-white" /> Reviews
            </Link>
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link to="/book-now" data-testid="header-book-now" className="px-4 md:px-6 py-2 bg-white text-black text-xs md:text-sm font-bold hover:bg-white/90 whitespace-nowrap">
              BOOK NOW
            </Link>
            <button className="lg:hidden text-white p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-black border-t border-white/10">
          <div className="px-4 py-6 space-y-4">
            <Link to="/" className="block text-white py-2" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link to="/fleet" className="block text-white py-2" onClick={() => setIsMobileMenuOpen(false)}>Fleet</Link>
            <Link to="/airport-transfer" className="block text-white py-2" onClick={() => setIsMobileMenuOpen(false)}>Airport Transfers</Link>
            <Link to="/corporate" className="block text-white py-2" onClick={() => setIsMobileMenuOpen(false)}>Corporate</Link>
            <Link to="/concert-transportation" className="block text-white py-2" onClick={() => setIsMobileMenuOpen(false)}>Events &amp; Concerts</Link>
            <Link to="/contact" className="block text-white py-2" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
            <Link to="/book-now" className="block w-full py-3 bg-white text-black text-center font-bold" onClick={() => setIsMobileMenuOpen(false)}>FREE QUOTE</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
