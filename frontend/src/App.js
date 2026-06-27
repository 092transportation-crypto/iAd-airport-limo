import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import IadAboutPage from './pages/IadAboutPage';
import AirportTransferPage from './pages/AirportTransferPage';
import WineToursPage from './pages/WineToursPage';
import BookingPage from './pages/BookingPage';
import ReviewsPage from './pages/ReviewsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import FleetPage from './pages/FleetPage';
import TermsPage from './pages/TermsPage';
import WhyChoosePage from './pages/WhyChoosePage';
import ServicesPage from './pages/ServicesPage';
import VehiclesPage from './pages/VehiclesPage';
import WeddingLimoPage from './pages/WeddingLimoPage';
import BirthdayLimoPage from './pages/BirthdayLimoPage';
import PromLimoPage from './pages/PromLimoPage';
import CorporatePage from './pages/CorporatePage';
import { Toaster } from './components/ui/toaster';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<IadAboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/book-now" element={<BookingPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          
          {/* Fleet & Vehicles */}
          <Route path="/fleet" element={<FleetPage />} />
          <Route path="/vehicles/:category" element={<VehiclesPage />} />
          
          {/* Services */}
          <Route path="/services/:type" element={<ServicesPage />} />
          <Route path="/airport-transfer" element={<AirportTransferPage />} />
          <Route path="/wine-tours" element={<WineToursPage />} />
          <Route path="/wedding-limo" element={<WeddingLimoPage />} />
          <Route path="/birthday-limo" element={<BirthdayLimoPage />} />
          <Route path="/prom-limo" element={<PromLimoPage />} />
          <Route path="/corporate" element={<CorporatePage />} />
          
          {/* Why Choose Us */}
          <Route path="/why-choose/:section" element={<WhyChoosePage />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;