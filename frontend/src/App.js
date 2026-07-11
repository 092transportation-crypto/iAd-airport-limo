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
import RoutePage from './pages/RoutePage';
import VenuePage from './pages/VenuePage';
import ConcertTransportationPage from './pages/ConcertTransportationPage';
import BlogIndexPage from './pages/BlogIndexPage';
import BlogPostPage from './pages/BlogPostPage';
import routesData from './data/routesData';
import venuesData from './data/venuesData';
import blogPosts from './data/blogData';
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
          <Route path="/booking" element={<BookingPage />} />
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

          {/* IAD Route Landing Pages */}
          {routesData.map((r) => (
            <Route key={r.slug} path={`/${r.slug}`} element={<RoutePage slug={r.slug} />} />
          ))}

          {/* Concert & Event Venue Pages */}
          <Route path="/concert-transportation" element={<ConcertTransportationPage />} />
          {venuesData.map((v) => (
            <Route key={v.slug} path={`/${v.slug}`} element={<VenuePage slug={v.slug} />} />
          ))}

          {/* Blog */}
          <Route path="/blog" element={<BlogIndexPage />} />
          {blogPosts.map((p) => (
            <Route key={p.slug} path={`/blog/${p.slug}`} element={<BlogPostPage slug={p.slug} />} />
          ))}
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;