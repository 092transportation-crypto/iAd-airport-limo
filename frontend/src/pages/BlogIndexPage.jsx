import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import posts from '../data/blogData';
import { Calendar, Clock, ArrowRight, Phone } from 'lucide-react';

const formatDate = (iso) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

const blogFaqs = [
  {
    question: 'What topics does the IAD Airport Limo blog cover?',
    answer:
      'Practical guidance for Dulles Airport travelers: car service vs. rideshare comparisons, transportation guides, flat-rate pricing explainers, and corporate travel planning for the DC, Maryland, and Virginia region.',
  },
  {
    question: 'How do I book a car service after reading a guide?',
    answer:
      'Use our online booking page or call (877) 609-1919 any hour. Quotes are flat rates confirmed in writing, with flight tracking on every airport pickup.',
  },
];

const BlogIndexPage = () => {
  const sorted = [...posts].sort((a, b) => (a.datePublished < b.datePublished ? 1 : -1));

  return (
    <div className="min-h-screen bg-black">
      <Seo
        title="Dulles Airport Travel Blog | IAD Airport Limo"
        description="Guides for IAD travelers: Dulles airport transportation options, car service vs. Uber, flat-rate pricing, and corporate travel tips for DC, MD & VA."
        path="/blog"
        faqs={blogFaqs}
      />
      <Navbar />

      <section className="pt-40 pb-12 md:pt-48 bg-[#0a0a0a] text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="font-accent text-white/50 text-xs sm:text-sm tracking-[0.2em] uppercase mb-4">Travel Intelligence</p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-white font-medium leading-tight mb-4">The Dulles Airport Travel Blog</h1>
          <p className="text-white/60 text-base sm:text-lg">Honest guides to ground transportation at IAD — from the team that drives it every day.</p>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
          {sorted.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="block border border-white/10 p-6 sm:p-8 hover:border-white/40 transition-colors">
              <div className="flex items-center gap-6 text-white/40 text-xs uppercase tracking-widest mb-3">
                <span className="flex items-center gap-2"><Calendar className="w-3 h-3" /> {formatDate(post.datePublished)}</span>
                <span className="flex items-center gap-2"><Clock className="w-3 h-3" /> {post.readTime}</span>
              </div>
              <h2 className="font-display text-xl sm:text-2xl text-white mb-3">{post.title}</h2>
              <p className="text-white/50 text-sm sm:text-base mb-4">{post.excerpt}</p>
              <span className="inline-flex items-center gap-2 text-white text-sm font-semibold uppercase tracking-wider">Read Article <ArrowRight className="w-4 h-4" /></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-14 bg-[#0a0a0a] border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-2xl sm:text-3xl text-white mb-4">Need a Ride from Dulles?</h2>
          <p className="text-white/50 text-base mb-8">Licensed &amp; Insured Virginia &amp; Maryland Carrier — flat rates, 24/7.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/book-now" className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 font-bold uppercase tracking-wider hover:bg-white/90 text-sm">
              Book Now <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="tel:8776091919" className="inline-flex items-center justify-center gap-2 border border-white text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all text-sm">
              <Phone className="w-4 h-4" /> (877) 609-1919
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogIndexPage;
