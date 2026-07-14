import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import posts from '../data/blogData';
import { Phone, ArrowRight, Calendar, Clock, ChevronRight } from 'lucide-react';

const formatDate = (iso) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

const BlogPostPage = ({ slug }) => {
  const post = posts.find((p) => p.slug === slug);
  const otherPosts = posts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-black">
      <Seo
        title={post.metaTitle}
        description={post.metaDescription}
        path={`/blog/${post.slug}`}
        faqs={post.faqs}
        article={{ headline: post.title, datePublished: post.datePublished }}
      />
      <Navbar />

      {/* Header */}
      <section className="pt-40 pb-12 md:pt-48 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Link to="/blog" className="text-white/40 text-xs uppercase tracking-widest hover:text-white transition-colors">← Back to Blog</Link>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-white font-medium leading-tight mt-4 mb-6">{post.title}</h1>
          <div className="flex items-center gap-6 text-white/40 text-sm">
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {formatDate(post.datePublished)}</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Body */}
      <article className="py-12 md:py-16 bg-black">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {post.intro.map((para, idx) => (
            <p key={idx} className="text-white/70 text-base sm:text-lg leading-relaxed mb-6">{para}</p>
          ))}
          {post.sections.map((section, idx) => (
            <div key={idx} className="mt-10">
              <h2 className="font-display text-2xl sm:text-3xl text-white mb-5">{section.heading}</h2>
              {section.paragraphs.map((para, pIdx) => (
                <p key={pIdx} className="text-white/70 text-base sm:text-lg leading-relaxed mb-6">{para}</p>
              ))}
              {section.list && (
                <ul className="space-y-3 mb-6">
                  {section.list.map((item, lIdx) => (
                    <li key={lIdx} className="flex items-start gap-3 text-white/70 text-base sm:text-lg">
                      <ChevronRight className="w-4 h-4 mt-1.5 flex-shrink-0 text-white/40" /> {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* FAQ */}
          <div className="mt-14 border-t border-white/10 pt-10">
            <h2 className="font-display text-2xl sm:text-3xl text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {post.faqs.map((faq, idx) => (
                <details key={idx} className="border border-white/10 group">
                  <summary className="cursor-pointer list-none p-5 flex justify-between items-center gap-4 text-white font-semibold text-sm sm:text-base hover:bg-white/5">
                    {faq.question}
                    <ChevronRight className="w-4 h-4 flex-shrink-0 transition-transform group-open:rotate-90" />
                  </summary>
                  <p className="px-5 pb-5 text-white/60 text-sm sm:text-base leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="py-14 bg-[#0a0a0a] border-y border-white/10">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-2xl sm:text-3xl text-white mb-4">Ride with IAD Airport Limo</h2>
          <p className="text-white/50 text-base mb-8">Flat rates, flight tracking, professional chauffeurs — 24/7 at Dulles.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/book-now" className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 font-bold uppercase tracking-wider hover:bg-white/90 text-sm">
              Book Now <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="tel:+18776091919" className="inline-flex items-center justify-center gap-2 border border-white text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all text-sm">
              <Phone className="w-4 h-4" /> Call (877) 609-1919
            </a>
          </div>
        </div>
      </section>

      {/* More Posts */}
      <section className="py-14 bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-xl sm:text-2xl text-white text-center mb-8">More from the Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {otherPosts.map((p) => (
              <Link key={p.slug} to={`/blog/${p.slug}`} className="border border-white/10 p-5 hover:border-white/40 transition-colors">
                <p className="text-white/40 text-xs uppercase tracking-widest mb-2">{formatDate(p.datePublished)}</p>
                <h3 className="font-display text-lg text-white mb-2">{p.title}</h3>
                <p className="text-white/50 text-sm">{p.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPostPage;
