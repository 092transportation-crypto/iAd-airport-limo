import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import FaqSection from '../components/FaqSection';
import { Star, Quote, CheckCircle, Shield } from 'lucide-react';

const reviewsFaqs = [
  {
    question: 'Where do your customer reviews come from?',
    answer:
      'The reviews on this page were shared by clients after airport transfers, corporate trips, and special-event service across the DC, Maryland, and Virginia area.',
  },
  {
    question: 'How can I leave a review after my trip?',
    answer:
      'We welcome feedback by email at limoiadairport@gmail.com or by phone at (877) 609-1919 — and reviews on Google help other travelers find us.',
  },
  {
    question: 'How do I book the same service these reviews describe?',
    answer:
      'Use our online booking page or call (877) 609-1919. Every trip includes flight tracking, a professional chauffeur, and a flat written rate.',
  },
];

const ReviewsPage = () => {
  const reviews = [
    {
      id: 1,
      name: "Michael Thompson",
      location: "Washington, DC",
      rating: 5,
      date: "December 2024",
      service: "Airport Transfer",
      review: "Absolutely outstanding service! Used King Transportation for my trip from Dulles to downtown DC. The chauffeur arrived 10 minutes early, helped with my luggage, and the Mercedes S-Class was immaculate. Will definitely use them again for all my airport transfers.",
      verified: true
    },
    {
      id: 2,
      name: "Sarah Mitchell",
      location: "Bethesda, MD",
      rating: 5,
      date: "November 2024",
      service: "Wedding Limo",
      review: "King Transportation made our wedding day absolutely perfect! The stretch limo was gorgeous and our chauffeur was so professional and accommodating. He made sure we had champagne ready and even helped with my dress getting in and out. Highly recommend!",
      verified: true
    },
    {
      id: 3,
      name: "David Chen",
      location: "Arlington, VA",
      rating: 5,
      date: "November 2024",
      service: "Corporate",
      review: "Our company has been using King Transportation for executive travel for over a year now. Consistently reliable, always on time, and the fleet is top-notch. Our clients are always impressed. The corporate account management is seamless.",
      verified: true
    },
    {
      id: 4,
      name: "Jennifer Williams",
      location: "Rockville, MD",
      rating: 5,
      date: "October 2024",
      service: "Wine Tours",
      review: "Had an amazing wine tour experience in Virginia wine country! Our driver was knowledgeable about all the vineyards and kept us safe while we enjoyed our tastings. The Sprinter van was comfortable and luxurious. Perfect day!",
      verified: true
    },
    {
      id: 5,
      name: "Robert Anderson",
      location: "Alexandria, VA",
      rating: 5,
      date: "October 2024",
      service: "Airport Transfer",
      review: "Flight was delayed by 2 hours and King Transportation tracked it and adjusted pickup time automatically. Driver was waiting for me at baggage claim with a sign. Exceptional service and attention to detail. This is how airport transfers should be!",
      verified: true
    },
    {
      id: 6,
      name: "Emily Parker",
      location: "Fairfax, VA",
      rating: 5,
      date: "September 2024",
      service: "Prom Limo",
      review: "Booked a limo for my daughter's prom and couldn't have been happier. The driver was professional and made the kids feel like VIPs. They had such a memorable night! Thank you King Transportation for the amazing experience.",
      verified: true
    },
    {
      id: 7,
      name: "James Wilson",
      location: "Silver Spring, MD",
      rating: 5,
      date: "September 2024",
      service: "Corporate",
      review: "Used their service for a group of executives visiting from overseas. The Sprinter van was perfect - spacious, comfortable, and our driver navigated DC traffic expertly. Everyone was impressed with the level of service.",
      verified: true
    },
    {
      id: 8,
      name: "Amanda Rodriguez",
      location: "Tysons, VA",
      rating: 5,
      date: "August 2024",
      service: "Birthday Limo",
      review: "Surprised my husband with a limo for his 50th birthday! The whole experience was magical. The driver was so friendly and the car was stocked with our requested drinks. Made his birthday unforgettable!",
      verified: true
    },
    {
      id: 9,
      name: "Christopher Lee",
      location: "Annapolis, MD",
      rating: 5,
      date: "August 2024",
      service: "Airport Transfer",
      review: "Regular business traveler here - King Transportation is my go-to for BWI transfers. Consistent quality, reliable timing, and great communication. The booking system is easy to use and confirmations are always prompt.",
      verified: true
    },
    {
      id: 10,
      name: "Nicole Martinez",
      location: "Reston, VA",
      rating: 5,
      date: "July 2024",
      service: "Wedding Limo",
      review: "From the first call to the last drop-off, King Transportation exceeded every expectation. They helped coordinate transportation for our entire wedding party. Flawless execution and beautiful vehicles. 10/10 would recommend!",
      verified: true
    },
    {
      id: 11,
      name: "Daniel Brown",
      location: "Gaithersburg, MD",
      rating: 5,
      date: "July 2024",
      service: "Wine Tours",
      review: "Best wine tour experience we've ever had! The driver knew all the best spots and even had recommendations for lunch. The SUV was luxurious and comfortable. Already planning our next tour with them!",
      verified: true
    },
    {
      id: 12,
      name: "Lisa Taylor",
      location: "McLean, VA",
      rating: 5,
      date: "June 2024",
      service: "Airport Transfer",
      review: "After a long international flight, the last thing I wanted was to deal with transportation hassles. King Transportation made it effortless. Clean car, friendly driver, smooth ride home. Worth every penny!",
      verified: true
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Seo
        title="Reviews | IAD Airport Car Service Testimonials"
        description="Read what clients say about our IAD airport car service — Dulles airport limo trips, corporate travel & special events across DC, Maryland & Virginia."
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
            See what our valued customers have to say about their experience
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

      {/* Reviews Grid */}
      <section className="py-20 bg-black" data-testid="reviews-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div 
                key={review.id}
                className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 hover:border-[#d4af37]/50 transition-all duration-300 p-6 group"
                data-testid={`review-card-${review.id}`}
              >
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-[#d4af37]/30 mb-4" />
                
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-[#d4af37] fill-[#d4af37]" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  "{review.review}"
                </p>

                {/* Service Badge */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] text-xs uppercase tracking-wider">
                    {review.service}
                  </span>
                </div>

                {/* Reviewer Info */}
                <div className="flex items-center justify-between border-t border-gray-800 pt-4">
                  <div>
                    <div className="flex items-center space-x-2">
                      <p className="text-white font-semibold">{review.name}</p>
                      {review.verified && (
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      )}
                    </div>
                    <p className="text-gray-500 text-sm">{review.location}</p>
                  </div>
                  <p className="text-gray-600 text-xs">{review.date}</p>
                </div>
              </div>
            ))}
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
            Join our growing family of satisfied customers
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
