import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import FaqSection from '../components/FaqSection';
import { Star, Shield } from 'lucide-react';
import { GOOGLE_REVIEWS_URL, REVIEW_PHONE_HREF, REVIEW_PHONE_LABEL, REVIEW_EMAIL } from '../lib/googleReviews';

const reviewsFaqs = [
  {
    question: 'Where can I read or leave a review?',
    answer:
      'We collect customer reviews on Google, where each one is posted from a signed-in Google account. Until our Google review link is live on this page, you can share feedback by phone at (877) 609-1919 or by email at limoiadairport@gmail.com.',
  },
  {
    question: 'How can I leave a review after my trip?',
    answer:
      'We welcome feedback by email at limoiadairport@gmail.com or by phone at (877) 609-1919. Reviews on Google also help other travelers find us.',
  },
  {
    question: 'How do I book a ride?',
    answer:
      'Use our online booking page or call (877) 609-1919. Every airport trip includes flight tracking, a professional chauffeur, and a flat rate confirmed in writing.',
  },
];

const ReviewsPage = () => {

  return (
    <div className="min-h-screen bg-black">
      <Seo
        title="Reviews & Feedback | IAD Airport Limo"
        description="Share feedback on your IAD Airport Limo ride, or ask about a Dulles airport transfer, corporate trip or special event. Call (877) 609-1919 or email us."
        path="/reviews"
        faqs={reviewsFaqs}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-light text-white mb-6" data-testid="reviews-title">
            Customer Reviews
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-6"></div>
          <p className="text-xl text-gray-400">
            Tell us how your ride went
          </p>
          
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-12 bg-gradient-to-r from-[#d4af37] via-[#f4d03f] to-[#d4af37]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="h-10 w-10 text-black mx-auto mb-3" />
          <div className="text-2xl md:text-3xl font-bold text-black mb-1">Licensed &amp; Insured Virginia &amp; Maryland Carrier</div>
          <div className="text-sm text-black/80 uppercase tracking-wider">Professional Chauffeurs • Flight Tracking • 24/7 Service</div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-black" data-testid="reviews-grid">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 p-10">
            <Star className="h-8 w-8 text-[#d4af37] fill-[#d4af37] mx-auto mb-4" />
            {GOOGLE_REVIEWS_URL ? (
              <>
                <h2 className="text-2xl md:text-3xl font-light text-white mb-4">Read Our Reviews on Google</h2>
                <p className="text-gray-400 mb-8">
                  Reviews from IAD Airport Limo riders are posted on Google, where every review comes from a signed-in Google account. Read what travelers say there, or leave a review after your own trip.
                </p>
                <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-[#d4af37] hover:bg-[#b8941f] text-black font-bold uppercase tracking-wider transition-colors" data-testid="google-reviews-link">
                  See Google Reviews
                </a>
              </>
            ) : (
              <>
                <h2 className="text-2xl md:text-3xl font-light text-white mb-4">Share Your Feedback</h2>
                <p className="text-gray-400 mb-8">
                  Rode with us recently? Tell us how the trip went, or ask us anything about our service before you book.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href={REVIEW_PHONE_HREF} className="inline-block px-8 py-4 bg-[#d4af37] hover:bg-[#b8941f] text-black font-bold uppercase tracking-wider transition-colors" data-testid="reviews-phone">
                    Call {REVIEW_PHONE_LABEL}
                  </a>
                  <a href={`mailto:${REVIEW_EMAIL}`} className="inline-block px-8 py-4 border-2 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black font-bold uppercase tracking-wider transition-colors" data-testid="reviews-email">
                    Email Us
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light text-white mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-gray-400 mb-8">
            Book your Dulles transfer, corporate trip or event ride
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/book-now"
              className="inline-block px-8 py-4 bg-[#d4af37] hover:bg-[#b8941f] text-black font-bold uppercase tracking-wider transition-colors"
              data-testid="book-now-cta"
            >
              Book Your Ride
            </a>
            <a 
              href="tel:+18776091919"
              className="inline-block px-8 py-4 border-2 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black font-bold uppercase tracking-wider transition-colors"
              data-testid="call-cta"
            >
              Call (877) 609-1919
            </a>
          </div>
        </div>
      </section>

      <FaqSection faqs={reviewsFaqs} />

      <Footer />
    </div>
  );
};

export default ReviewsPage;
