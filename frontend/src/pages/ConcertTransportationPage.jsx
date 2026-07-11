import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import { Phone, ArrowRight, Music, Shield, MapPin, ChevronRight } from 'lucide-react';

const venues = [
  {
    name: 'Capital One Arena',
    location: 'Washington, DC',
    distance: '27 miles from IAD · 35–55 min',
    slug: null,
    description:
      'Downtown DC’s premier indoor venue in the heart of Chinatown hosts arena tours, the Capitals, and the Wizards. Parking nearby is scarce and expensive, and post-show rideshare pickups on F Street are chaotic. We drop you at the door and stage your chauffeur a block away for a clean exit onto I-66 or the George Washington Parkway.',
  },
  {
    name: 'Jiffy Lube Live',
    location: 'Bristow, VA',
    distance: '20 miles from IAD · 30–40 min',
    slug: 'jiffy-lube-live-transportation',
    description:
      'Northern Virginia’s big outdoor amphitheater draws the largest summer tours — and the region’s most notorious post-show parking backup. Booking a chauffeur means you skip the hour-long crawl out of the lot entirely.',
  },
  {
    name: 'Wolf Trap (Filene Center)',
    location: 'Vienna, VA',
    distance: '10 miles from IAD · 15–20 min',
    slug: 'wolf-trap-transportation',
    description:
      'The only national park dedicated to the performing arts, minutes from Tysons and Dulles. Bring a picnic for the lawn, enjoy the wine, and let your chauffeur handle the slow single-exit crawl onto Trap Road.',
  },
  {
    name: 'EagleBank Arena',
    location: 'Fairfax, VA',
    distance: '15 miles from IAD · 25–35 min',
    slug: 'eaglebank-arena-transportation',
    description:
      'George Mason University’s arena hosts concerts, Patriots basketball, family shows, and packed graduation weeks. We drop you at the doors so you never hunt for a campus parking deck.',
  },
  {
    name: 'MGM National Harbor',
    location: 'Oxon Hill, MD',
    distance: '35 miles from IAD · 45–70 min',
    slug: null,
    description:
      'The Theater at MGM National Harbor pairs headline acts with casino and resort nightlife on the Potomac. Make it a full evening — dinner, the show, the tables — and ride home in comfort instead of driving the Beltway at midnight.',
  },
];

const faqs = [
  {
    question: 'Which concert venues do you serve around Washington DC?',
    answer:
      'We provide chauffeured transportation to every major venue in the region, including Capital One Arena in DC, Jiffy Lube Live in Bristow VA, Wolf Trap in Vienna VA, EagleBank Arena in Fairfax VA, MGM National Harbor in Maryland, The Anthem, and more. If there is a show, we can get you there.',
  },
  {
    question: 'How much does concert transportation cost?',
    answer:
      'Every trip is quoted as a flat, written rate based on pickup location, venue, and vehicle — with no surge pricing when the show lets out. Hourly service with the chauffeur standing by is also available. Call (877) 609-1919 for an exact quote.',
  },
  {
    question: 'Will the driver wait during the concert?',
    answer:
      'With hourly service, yes — your chauffeur stays on-site or nearby for the entire event, so departure time never matters. With point-to-point transfers, your chauffeur coordinates a pickup point by text and stages the vehicle as the show ends.',
  },
  {
    question: 'Can you pick us up at Dulles Airport before a show?',
    answer:
      'Yes. Many clients fly into IAD for a tour date. We track your flight, meet you at baggage claim, and can take you straight to the venue or to your hotel first — luggage stays secure in the vehicle either way.',
  },
  {
    question: 'What vehicles are available for concert groups?',
    answer:
      'Luxury sedans for couples, SUVs seating up to six, and Sprinter vans for larger parties. Splitting one flat rate across a group is usually cheaper per person than surge-priced rideshares after the show — and everyone rides together.',
  },
];

const ConcertTransportationPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Seo
        title="Concert Transportation DC, VA & MD | Limo & Car Service"
        description="Chauffeured concert transportation from Dulles Airport & across DC, Virginia, Maryland. Capital One Arena, Jiffy Lube Live, Wolf Trap & more. (877) 609-1919."
        path="/concert-transportation"
        faqs={faqs}
      />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-16 md:pt-48 md:pb-20 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-black" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="font-accent text-white/50 text-xs sm:text-sm tracking-[0.2em] uppercase mb-4 flex items-center justify-center gap-2">
            <Music className="w-4 h-4" /> Concerts &amp; Live Events
          </p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-white font-medium leading-tight mb-4">Concert &amp; Event Transportation in DC, Virginia &amp; Maryland</h1>
          <p className="font-body text-white/60 text-base sm:text-lg max-w-2xl mx-auto mb-8">Chauffeured limos, SUVs &amp; Sprinter vans to every major venue — from Dulles Airport, your home, or your hotel</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/booking" className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 font-bold uppercase tracking-wider hover:bg-white/90 transition-colors text-sm" data-testid="concert-book-now-btn">
              Book Your Ride <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="tel:8776091919" className="inline-flex items-center justify-center gap-2 border border-white text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all text-sm">
              <Phone className="w-4 h-4" /> (877) 609-1919
            </a>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-14 md:py-20 bg-black border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-6">
            A great concert should not end with an hour in a parking lot. Around Washington DC, Northern Virginia, and Maryland, the region’s best venues share the same weak spot: getting out. Amphitheater lots gridlock after the encore, downtown garages empty onto jammed one-way streets, and rideshare prices surge to their peak at the exact moment ten thousand people open the same app. Our concert transportation service fixes the whole problem — a professional chauffeur drops you at the venue entrance, and a spotless luxury vehicle is staged and waiting the moment you walk out.
          </p>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-6">
            We serve every major venue in the region, with pickups anywhere in DC, Virginia, or Maryland — and direct transfers from Dulles International Airport for fans flying in to catch a tour date. Choose a luxury sedan for a date night, an SUV that seats six for a group of friends, or a Sprinter van that keeps a whole birthday party or corporate outing together in one vehicle. Every rate is flat and confirmed in writing before you ride, so there is no surge pricing at 11 p.m. when the house lights come up.
          </p>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed">
            Booking is simple: reserve online in minutes or call <a href="tel:8776091919" className="text-white underline underline-offset-4 hover:text-white/80">(877) 609-1919</a> and a dispatcher will match the right vehicle to your group, your venue, and your schedule. For most concert nights we recommend hourly service — your chauffeur can handle a dinner stop before the show and waits on-site until the final song, so a long encore never leaves you stranded.
          </p>
        </div>
      </section>

      {/* Venues */}
      <section className="py-14 md:py-20 bg-[#0a0a0a] border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="font-accent text-white/40 text-xs tracking-widest uppercase mb-3">Where We Take You</p>
            <h2 className="font-display text-3xl sm:text-4xl text-white">Venues We Serve</h2>
          </div>
          <div className="space-y-6">
            {venues.map((venue) => (
              <div key={venue.name} className="border border-white/10 p-6 sm:p-8 hover:border-white/30 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                  <h3 className="font-display text-xl sm:text-2xl text-white">{venue.name}</h3>
                  <p className="text-white/40 text-xs uppercase tracking-wider flex items-center gap-1"><MapPin className="w-3 h-3" /> {venue.location} · {venue.distance}</p>
                </div>
                <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-4">{venue.description}</p>
                {venue.slug && (
                  <Link to={`/${venue.slug}`} className="inline-flex items-center gap-1 text-white text-sm font-semibold uppercase tracking-wider hover:text-white/70 transition-colors">
                    {venue.name} Transportation <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-14 md:py-20 bg-black border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl text-white mb-5">Why Concertgoers Book a Chauffeur Instead of Driving</h2>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-6">
            The math is simple. Venue parking runs $30 to $60 and puts you at the back of a slow-moving exit line. Post-show rideshares surge to double or triple the normal fare — when you can get one at all, with pickup zones mobbed and drivers cancelling. A chauffeured vehicle at a flat rate, split across a group of four or six, often costs less per person than either option and eliminates every downside: no designated driver, no parking hunt, no surge, no waiting in the cold after the show.
          </p>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-6">
            Every chauffeur is background-checked, professionally trained, and knows the event-night traffic patterns at each venue — which exits clear first at Jiffy Lube Live, where to stage near Capital One Arena, how early to leave Tysons for a Wolf Trap curtain. Vehicles are late-model Mercedes-Benz, BMW, Cadillac, Lincoln, and GMC sedans, SUVs, and Sprinters, detailed before every trip and stocked with bottled water.
          </p>
          <div className="mt-10 flex items-center gap-3 border border-white/15 p-5">
            <Shield className="w-6 h-6 text-white flex-shrink-0" />
            <p className="text-white/80 text-sm sm:text-base">Licensed &amp; Insured Virginia &amp; Maryland Carrier — professional chauffeurs, commercial insurance, 24/7 dispatch.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 md:py-20 bg-[#0a0a0a] border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="font-accent text-white/40 text-xs tracking-widest uppercase mb-3">FAQ</p>
            <h2 className="font-display text-3xl sm:text-4xl text-white">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
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
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-black border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl sm:text-4xl text-white mb-4">Got Tickets? Lock In Your Ride.</h2>
          <p className="text-white/50 text-base mb-8">Flat rates, professional chauffeurs, and a vehicle waiting when the show ends — available 24/7 across DC, Virginia &amp; Maryland.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/booking" className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 font-bold uppercase tracking-wider hover:bg-white/90 text-sm">
              Book Now <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="tel:8776091919" className="inline-flex items-center justify-center gap-2 border border-white text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all text-sm">
              <Phone className="w-4 h-4" /> Call (877) 609-1919
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConcertTransportationPage;
