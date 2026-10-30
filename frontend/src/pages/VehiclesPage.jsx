import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Users, Car, Check, Star, ArrowRight } from 'lucide-react';
import Seo from '../components/Seo';
import FaqSection from '../components/FaqSection';

const vehicleSeo = {
  sedans: {
    title: 'Luxury Sedans | IAD Airport Car Service Fleet',
    description:
      'Executive sedans for Dulles airport car service — Mercedes E-Class, S-Class & BMW 7 Series with professional chauffeurs. Call (877) 609-1919 to book.',
  },
  suv: {
    title: 'Luxury SUVs | Dulles Airport Limo Fleet',
    description:
      'Premium SUVs for IAD transfers — Lincoln Nautilus, Chevrolet Suburban & Lincoln Navigator seating up to 6 with full luggage. Book online or call (877) 609-1919.',
  },
  sprinters: {
    title: 'Sprinter Vans | IAD Group Airport Transportation',
    description:
      'Mercedes Sprinter vans for groups up to 13 — Dulles airport transfers, events & tours across DC, MD & VA. Call (877) 609-1919 for group quotes.',
  },
  buses: {
    title: 'Group Transportation | IAD Airport Limo Fleet',
    description:
      'Large-group transportation options for Dulles airport transfers and events across DC, Maryland & Virginia. Call (877) 609-1919 to plan your group trip.',
  },
};

const vehiclesFaqs = [
  {
    question: 'How do I choose the right vehicle for my trip?',
    answer:
      'Count passengers and checked bags: sedans fit 3 passengers with 2 bags, SUVs fit 6 with 5-6 bags, and Sprinter vans fit up to 13. Our team can advise at (877) 609-1919.',
  },
  {
    question: 'Do all vehicles come with a professional chauffeur?',
    answer:
      'Yes. Every vehicle is chauffeured by a background-checked professional under our licensed and insured Virginia and Maryland carrier authority.',
  },
  {
    question: 'Can I see the exact vehicle before booking?',
    answer:
      'Your written confirmation specifies the vehicle class and model. Request a specific model when booking and we will confirm availability for your date.',
  },
];

const VehiclesPage = () => {
  const { category } = useParams();
  const seoMeta = vehicleSeo[category] || vehicleSeo.sedans;

  // Fleet photos in /public/images — byte-identical to 92limo's fleet photos.
  const images = {
    sedan: '/images/mercedes-e-class.webp',
    bmw7: '/images/bmw-7-series.webp',
    nautilus: '/images/lincoln-nautilus.webp',
    suburban: '/images/chevy-suburban.webp',
    suv: '/images/cadillac-escalade.webp',
    sprinter: '/images/mercedes-sprinter.webp',
    sprinterShuttle: '/images/sprinter-shuttle-seats.webp',
    sprinterLimo: '/images/limousine.webp',
  };

  // Category pages mirror the 8-vehicle fleet — kept in sync with 92limo.com.
  const vehicleData = {
    sedans: {
      title: 'Luxury Sedans',
      subtitle: 'Executive comfort for business and pleasure',
      vehicles: [
        {
          name: 'Business Sedan',
          subtitle: 'Mercedes-Benz E-Class 2023+ or similar',
          pax: 3, luggage: 2,
          image: images.sedan,
          features: ['Premium Leather', 'WiFi', 'Phone Charger', 'Privacy Glass', 'Climate Control']
        },
        {
          name: 'First Class Sedan',
          subtitle: 'BMW 7 Series / Mercedes S-Class 2023+ or similar',
          pax: 3, luggage: 2,
          image: images.bmw7,
          features: ['Executive Seating', 'Massage Seats', 'Premium Sound', 'Mini Bar', 'Privacy Partition']
        }
      ]
    },
    suv: {
      title: 'Premium SUVs',
      subtitle: 'Spacious luxury for groups and families',
      vehicles: [
        {
          name: 'Midsize SUV',
          subtitle: 'Lincoln Nautilus 2023+ or similar',
          pax: 3, luggage: 4,
          image: images.nautilus,
          features: ['Extra Luggage Room', 'Leather Interior', 'Climate Control', 'WiFi']
        },
        {
          name: 'Luxury SUV',
          subtitle: 'Chevrolet Suburban 2023+ or similar',
          pax: 5, luggage: 5,
          image: images.suburban,
          features: ['Spacious Interior', 'Fold-Flat Seats', 'Ample Cargo Space', 'Smooth Ride']
        },
        {
          name: 'Premium SUV',
          subtitle: '2026 Lincoln Navigator or similar',
          pax: 6, luggage: 5,
          image: images.suv,
          features: ['Third Row Seating', 'Premium Sound', 'Climate Zones', 'Leather Interior']
        }
      ]
    },
    sprinters: {
      title: 'Sprinter Vans',
      subtitle: 'Perfect for groups and corporate travel',
      vehicles: [
        {
          name: 'Sprinter Shuttle',
          subtitle: 'Mercedes Sprinter 2023+ or similar',
          pax: 13, luggage: 13,
          image: images.sprinterShuttle,
          features: ['Group Seating', 'Spacious Interior', 'WiFi', 'USB Charging']
        },
        {
          name: 'Sprinter Executive',
          subtitle: 'Mercedes Sprinter 2023+ or similar',
          pax: 13, luggage: 13,
          image: images.sprinter,
          features: ['Conference Seating', 'Mood Lighting', 'Premium Audio', 'USB Charging', 'Mini Bar']
        }
      ]
    },
    buses: {
      title: 'Mini Buses',
      subtitle: 'Large group transportation made easy',
      vehicles: [
        {
          name: 'Mini Coach',
          pax: 24, luggage: 24,
          image: images.sprinter,
          features: ['Reclining Seats', 'Overhead Storage', 'PA System', 'Climate Control']
        },
        {
          name: 'Party Bus',
          pax: 20, luggage: 15,
          image: images.sprinter,
          features: ['Dance Floor', 'Premium Sound', 'LED Lighting', 'Bar Service', 'Restroom']
        }
      ]
    },
    // Individual vehicle pages
    'mercedes-s-class': {
      title: 'Mercedes S-Class',
      subtitle: 'The pinnacle of automotive luxury',
      single: true,
      vehicle: {
        name: 'Mercedes S-Class',
        subtitle: 'First Class Experience',
        pax: 3, luggage: 2,
        image: images.sedan,
        features: ['Executive Seating', 'Massage Seats', 'Premium Sound System', 'Mini Bar', 'Privacy Partition', 'WiFi Connectivity', 'USB Charging', 'Climate Control'],
        description: 'The Mercedes S-Class represents the ultimate in luxury sedan travel. With its whisper-quiet cabin, massage seats, and state-of-the-art amenities, every journey becomes a first-class experience.'
      }
    },
    'lincoln-continental': {
      title: 'Lincoln Continental',
      subtitle: 'American luxury at its finest',
      single: true,
      vehicle: {
        name: 'Lincoln Continental',
        subtitle: 'Classic Elegance',
        pax: 3, luggage: 2,
        image: images.sedan,
        features: ['Leather Interior', 'Reclining Seats', 'Premium Audio', 'Climate Control', 'Smooth Ride', 'Privacy Glass'],
        description: 'The Lincoln Continental delivers timeless American luxury with modern refinements. Its spacious interior and smooth ride make it perfect for airport transfers and executive travel.'
      }
    },
    'bmw-7-series': {
      title: 'BMW 7 Series',
      subtitle: 'The ultimate driving machine',
      single: true,
      vehicle: {
        name: 'BMW 7 Series',
        subtitle: 'Executive Performance',
        pax: 3, luggage: 2,
        image: images.sedan,
        features: ['Executive Lounge', 'Panoramic Roof', 'Harman Kardon Audio', 'Ambient Lighting', 'Heated Seats', 'WiFi Hotspot'],
        description: 'The BMW 7 Series combines athletic performance with supreme comfort. Its cutting-edge technology and refined interior create an exceptional travel experience.'
      }
    },
    'cadillac-escalade': {
      title: 'Lincoln Navigator',
      subtitle: 'Bold luxury for any occasion',
      single: true,
      vehicle: {
        name: 'Lincoln Navigator',
        subtitle: 'Premium SUV',
        pax: 5, luggage: 5,
        image: images.suv,
        features: ['Third Row Seating', 'Premium Bose Audio', 'Tri-Zone Climate', 'Night Vision', 'Magnetic Ride Control', 'Heads-Up Display'],
        description: 'The Lincoln Navigator makes a statement wherever it goes. With room for up to 5 passengers and generous luggage space, it\'s the perfect choice for airport runs and special occasions.'
      }
    },
    'chevy-suburban': {
      title: 'Chevy Suburban',
      subtitle: 'Spacious comfort for the whole group',
      single: true,
      vehicle: {
        name: 'Chevy Suburban',
        subtitle: 'Full-Size SUV',
        pax: 6, luggage: 6,
        image: images.suv,
        features: ['Spacious Interior', 'Fold-Flat Seats', 'Ample Cargo', 'Smooth Ride', 'Climate Control', 'USB Ports'],
        description: 'The Chevy Suburban offers unmatched space and versatility. Perfect for families, groups, and anyone who needs extra room for passengers and luggage.'
      }
    },
    'mercedes-sprinter': {
      title: 'Mercedes Sprinter',
      subtitle: 'Executive group transportation',
      single: true,
      vehicle: {
        name: 'Mercedes Sprinter',
        subtitle: 'Executive Van',
        pax: 13, luggage: 12,
        image: images.sprinter,
        features: ['Conference Seating', 'Standing Height', 'Premium Audio', 'LED Lighting', 'USB Charging', 'Climate Control', 'WiFi'],
        description: 'The Mercedes Sprinter is the gold standard in executive van transportation. Whether for corporate groups or special events, it delivers comfort and style for larger parties.'
      }
    },
    'ford-transit': {
      title: 'Ford Transit',
      subtitle: 'Reliable group transportation',
      single: true,
      vehicle: {
        name: 'Ford Transit',
        subtitle: 'Passenger Van',
        pax: 10, luggage: 8,
        image: images.sprinter,
        features: ['Comfortable Seating', 'Climate Control', 'Audio System', 'USB Ports', 'Cargo Space'],
        description: 'The Ford Transit offers reliable and comfortable transportation for medium-sized groups. An economical choice without sacrificing quality.'
      }
    }
  };

  const currentData = vehicleData[category] || vehicleData.sedans;

  const vehicleGuide = {
    sedans: [
      'A sedan is the right call for one to three travelers moving through Dulles with two checked bags or fewer — solo executives on a morning flight, couples heading to a weekend trip, or a single client pickup where a full-size SUV would just be more car than the trip needs. Both the Business Sedan and the First Class Sedan track your flight automatically, so a delayed arrival at IAD does not cost you anything at pickup.',
      'The difference between the two comes down to occasion. The Business Sedan (Mercedes-Benz E-Class) is our most-booked vehicle for routine airport transfers and client meetings across DC, Maryland and Virginia. The First Class Sedan — BMW 7 Series or Mercedes S-Class — adds massage seats, a premium sound system and a privacy partition, and is what we recommend when the ride itself is part of the impression you are making, such as picking up a board member or closing a deal on the way from the airport.',
      'Both sedan classes are booked the same way: specify your preference when you reserve, and dispatch confirms the vehicle class in writing along with your flat rate before travel day. If your plans change — an extra passenger, more luggage than expected — call dispatch before your trip and we will confirm whether an SUV is a better fit rather than letting you find out at the curb.',
    ],
    suv: [
      'SUVs solve the two problems sedans cannot: more passengers and more luggage. The Midsize SUV (Lincoln Nautilus) fits three riders comfortably with room for four bags, which covers most families flying into Dulles with standard checked luggage. Once a group passes four people or the bag count climbs — golf clubs, a stroller, a week of ski gear — the Luxury SUV (Chevrolet Suburban) or Premium SUV (Lincoln Navigator) keeps everyone and everything in one vehicle instead of splitting into two cars.',
      'The Navigator\'s third row makes it the pick for six passengers with full luggage, and it is our most-requested vehicle for corporate groups and wedding-party transport where a Sprinter feels like overkill but a single sedan will not fit everyone. All three SUV classes include the same flight tracking and complimentary wait time as our sedans.',
      'If you are unsure which SUV fits your group, tell dispatch your passenger and luggage count when you book — most mismatches happen when a family underestimates how much space strollers, golf bags or ski equipment actually take, and it is easier to confirm the right vehicle before the day than to discover it does not fit at the curb.',
    ],
    sprinters: [
      'Once a group reaches five or more travelers, a Sprinter van keeps the whole party together at one flat rate instead of coordinating two or three separate vehicles that inevitably arrive at different times. Each of our three Sprinter configurations seats up to 13 with matching luggage capacity, so a full group and their bags travel in one trip from Dulles.',
      'Choose the Sprinter Shuttle for straightforward group airport transfers, or the Sprinter Executive for corporate roadshows and conference travel, wedding parties, proms and celebrations that want limousine styling with the capacity a stretch sedan cannot match. Both are driven by the same background-checked, professionally licensed chauffeurs as the rest of our fleet.',
      'Because Sprinter vans are the tightest inventory in any chauffeured fleet, including ours, book one as early as your date is confirmed — especially for a Saturday during wedding season or a week with a major regional conference — rather than assuming one will be available on short notice.',
    ],
    buses: [
      'For groups larger than a Sprinter can comfortably seat — wedding blocks, corporate conferences, school and university trips — a Mini Coach or Party Bus keeps 20 to 24 travelers moving together instead of dispatching multiple vehicles. Both options are booked well in advance for Dulles-area events, since large-vehicle availability is more limited than our sedan and SUV fleet.',
      'The Mini Coach is built for comfort on longer rides, with reclining seats and overhead storage for luggage-heavy group transfers. The Party Bus is the choice for celebrations rather than transfers — dance floor, premium sound and bar service included — and is popular for milestone birthdays, bachelor and bachelorette parties, and wine-tour groups across Northern Virginia and Loudoun County.',
      'Both large-vehicle options are booked with a dedicated chauffeur under the same licensed and insured carrier authority as the rest of our fleet. Call dispatch with your headcount and event date, and we will confirm which option fits — or recommend splitting a very large group across a Mini Coach and a Sprinter if your party exceeds what either vehicle alone can comfortably seat.',
    ],
    'mercedes-s-class': [
      'The Mercedes-Benz S-Class is the flagship of our sedan fleet and the vehicle most frequently requested for board-level executives, VIP arrivals and milestone celebrations where the car itself is part of the occasion. Rear-seat massage function, a multi-zone climate system and a cabin engineered for near-silence at highway speed set it apart from a standard business sedan the moment the door closes.',
      'For a Dulles arrival, the S-Class is dispatched with the same flight tracking and complimentary wait time as every other vehicle in the fleet, so the upgrade is entirely about the ride itself rather than the service standard underneath it. Chauffeurs assigned to S-Class bookings are selected for executive-level experience, and the privacy partition and mini bar make it a common choice for a client pickup that doubles as a first impression.',
      'Because inventory on this specific model is smaller than our standard sedan fleet, book an S-Class request a few days ahead when the date matters — a wedding, an anniversary, or a VIP client visit — rather than assuming same-day availability. Pair it with our meet-and-greet service at Dulles for a arrival that starts the moment you clear the gate rather than once you reach the curb.',
    ],
    'lincoln-continental': [
      'The Lincoln Continental delivers a quieter, more traditionally American take on luxury sedan travel — deep leather seating, a smooth highway ride and a cabin tuned for comfort over flash. It is a frequent request from clients who want an executive sedan without the overtly sport-luxury styling of a German import, and it performs identically to our other sedans on airport transfers: same flight tracking, same 45-to-60-minute wait allowance, same background-checked chauffeur standard.',
      'Passengers moving between Dulles and Northern Virginia or DC appointments choose the Continental for its balance of interior space and a genuinely smooth ride on longer highway stretches such as I-66 or the Dulles Toll Road, where the car\'s ride tuning is most noticeable compared with a smaller sedan. Reclining seats and a premium audio system make it a comfortable choice for a long one-way transfer, a client pickup, or an evening out where arriving relaxed matters as much as arriving on time.',
      'Book it the same way as any sedan on our fleet — specify the Lincoln Continental by name when you reserve, and dispatch will confirm availability for your date and hold the vehicle class in writing before you travel.',
    ],
    'bmw-7-series': [
      'The BMW 7 Series pairs German engineering with an executive-lounge rear cabin, and it is the sedan most often requested by clients who want performance-oriented handling along with first-class comfort — a panoramic roof, ambient lighting and Harman Kardon audio that make the ride itself notable, not just the destination.',
      'On a Dulles transfer, the 7 Series tracks your flight the same way every vehicle in our fleet does, and its heated seats and WiFi hotspot make it a popular choice for business travelers who want to start working, or simply unwind, the moment they are in the car rather than waiting until they reach a hotel or office. Visiting executives hosted by Tysons-area companies frequently request this model specifically for client pickups, since its styling and interior tech read clearly as a premium experience from the moment the door opens.',
      'Availability on the 7 Series is more limited than our standard Business Sedan, so for an important date — a board visit, a VIP client arrival — request it specifically and book a few days ahead rather than assuming it will be available same-day.',
    ],
    'cadillac-escalade': [
      'The Lincoln Navigator is our boldest SUV, built for groups of up to five passengers who want the capacity of a full-size SUV without sacrificing a genuinely luxury interior — third-row seating, Bose premium audio, tri-zone climate control and features like night vision and a heads-up display that go well beyond a standard rental-class SUV.',
      'Families flying into Dulles with substantial luggage, wedding parties needing a statement vehicle for the couple, and corporate clients hosting a small group all request the Navigator specifically for the combination of space and presence it brings — it reads as a premium vehicle from the outside while comfortably seating five with full luggage inside. Magnetic ride control keeps the cabin smooth even on longer highway transfers to Baltimore, Richmond or the Eastern Shore.',
      'Every Navigator booking includes the same flight tracking, 45-to-60-minute wait allowance and background-checked chauffeur standard as the rest of our fleet — the upgrade is entirely in the vehicle, not the service model underneath it.',
    ],
    'chevy-suburban': [
      'The Chevrolet Suburban is our most practical full-size SUV, built around maximizing usable space for families and groups rather than maximizing styling — fold-flat seats, generous cargo room and a famously smooth ride make it the vehicle we recommend most often for a family of six traveling with a full set of checked luggage, golf clubs or ski gear.',
      'It is a regular choice for airport transfers where luggage volume is the deciding factor rather than passenger count alone, and for group bookings where everyone needs to travel together with room to spare rather than splitting into two vehicles. The Suburban\'s ride quality holds up well on longer transfers beyond the immediate Dulles area, which makes it a common request for trips to Richmond, the Eastern Shore or Ocean City.',
      'As with every vehicle in our fleet, Suburban bookings include flight tracking on airport pickups, a background-checked professional chauffeur, and a flat rate confirmed before you travel.',
    ],
    'mercedes-sprinter': [
      'The Mercedes Sprinter is the standard-bearer of our group transportation fleet, seating up to 13 passengers with matching luggage capacity in a cabin tall enough to stand in — a meaningful difference for anyone who has tried to board a crowded minivan with a week of luggage.',
      'Corporate groups use the Sprinter for roadshows, conference delegations and team transportation where keeping everyone together on one schedule matters more than any single passenger\'s preference. Wedding parties and celebration groups request the same vehicle for its conference-style seating, mood lighting and premium audio, which give it a more elevated feel than a typical passenger van without the cost of multiple stretch limousines.',
      'Because larger vehicles are the tightest inventory in any chauffeured fleet, including ours, book a Sprinter as early as your date is set — especially for a Saturday during wedding season or a week with a major regional conference — rather than waiting until the week of your trip.',
    ],
    'ford-transit': [
      'The Ford Transit is our economical option for mid-sized groups — comfortable seating for up to 10 passengers with solid cargo space, without the premium styling (or premium price) of a Sprinter van. It is a practical choice for a group airport transfer, a school or church trip, or any booking where reliable capacity matters more than conference-style amenities.',
      'Despite being our value-oriented group vehicle, a Transit booking includes the same standards as the rest of our fleet: a background-checked, professionally licensed chauffeur, commercial insurance, and flight tracking with complimentary wait time on airport pickups. Groups that do not need the Sprinter\'s standing height or mood lighting but do need to travel together in one vehicle consistently choose the Transit for the combination of capacity and value.',
      'Book it the same way as any group vehicle — tell dispatch your passenger and luggage count, and we will confirm the Transit is the right fit or recommend a Sprinter if your group\'s needs have grown.',
    ],
  };
  const guideParagraphs = vehicleGuide[category] || vehicleGuide.sedans;

  const categoryLinks = [
    { key: 'sedans', name: 'Sedans', path: '/vehicles/sedans' },
    { key: 'suv', name: 'SUV', path: '/vehicles/suv' },
    { key: 'sprinters', name: 'Sprinters', path: '/vehicles/sprinters' },
    { key: 'buses', name: 'Buses', path: '/vehicles/buses' },
  ];

  return (
    <div className="min-h-screen bg-[#111]">
      <Seo
        title={seoMeta.title}
        description={seoMeta.description}
        path={`/vehicles/${vehicleSeo[category] ? category : 'sedans'}`}
        faqs={vehiclesFaqs}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-32 bg-[#0d0d0d]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <p className="text-[#c9a227] text-sm tracking-[0.3em] uppercase mb-4">Our Fleet</p>
          <h1 className="text-5xl md:text-6xl font-light text-white mb-6">{currentData.title}</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">{currentData.subtitle}</p>
        </div>
      </section>

      {/* Category Navigation (only show for category pages) */}
      {!currentData.single && (
        <section className="bg-[#1a1a1a] border-b border-[#333]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap justify-center">
              {categoryLinks.map((cat) => (
                <Link
                  key={cat.key}
                  to={cat.path}
                  className={`px-8 py-4 text-sm font-medium uppercase tracking-wider transition-colors ${
                    category === cat.key
                      ? 'text-[#c9a227] border-b-2 border-[#c9a227]'
                      : 'text-gray-400 hover:text-white'
                  }`}
                  data-testid={`vehicle-tab-${cat.key}`}
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Content */}
      <section className="py-20 bg-[#111]">
        <div className="max-w-7xl mx-auto px-4">
          {currentData.single ? (
            // Single Vehicle Detail
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <img 
                  src={currentData.vehicle.image} 
                  alt={`${currentData.vehicle.name} — IAD Airport Limo chauffeured vehicle for Dulles airport transfers`}
                  className="w-full h-96 object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-light text-white mb-2">{currentData.vehicle.name}</h2>
                <p className="text-[#c9a227] mb-6">{currentData.vehicle.subtitle}</p>
                <p className="text-gray-400 leading-relaxed mb-8">{currentData.vehicle.description}</p>
                
                {/* Capacity */}
                <div className="flex gap-8 mb-8">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-[#c9a227]" />
                    <span className="text-white">{currentData.vehicle.pax} Passengers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Car className="w-5 h-5 text-[#c9a227]" />
                    <span className="text-white">{currentData.vehicle.luggage} Bags</span>
                  </div>
                </div>

                {/* Features */}
                <h3 className="text-white font-semibold mb-4">Features & Amenities</h3>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {currentData.vehicle.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#c9a227]" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link 
                  to="/book-now"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#c9a227] text-black font-semibold uppercase tracking-wider hover:bg-[#b8941f] transition-all"
                >
                  Book This Vehicle <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ) : (
            // Vehicle Grid
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentData.vehicles.map((vehicle, idx) => (
                <div 
                  key={idx}
                  className="bg-[#1a1a1a] border border-[#333] hover:border-[#c9a227] transition-all group"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={vehicle.image} 
                      alt={`${vehicle.name} — Dulles airport limo and black car service`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-white text-xl font-semibold mb-1 group-hover:text-[#c9a227] transition-colors">
                      {vehicle.name}
                    </h3>
                    {vehicle.subtitle && (
                      <p className="text-gray-500 text-sm mb-4">{vehicle.subtitle}</p>
                    )}
                    
                    <div className="space-y-2 mb-6">
                      {vehicle.features.slice(0, 4).map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-gray-400 text-sm">
                          <Check className="w-4 h-4 text-[#c9a227]" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400 border-t border-[#333] pt-4">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-[#c9a227]" />
                        <span>{vehicle.pax} PAX</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Car className="w-4 h-4 text-[#c9a227]" />
                        <span>{vehicle.luggage} Bags</span>
                      </div>
                    </div>
                  </div>
                  
                  <Link 
                    to="/book-now"
                    className="block w-full py-4 bg-[#c9a227] text-black text-center font-semibold uppercase tracking-wider hover:bg-[#b8941f] transition-all"
                  >
                    Get Quote
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Vehicle guide */}
      <section className="py-16 bg-[#161616]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-light text-white mb-6">
            Which {currentData.title} Fit Your Trip?
          </h2>
          <div className="space-y-4">
            {guideParagraphs.map((p, i) => (
              <p key={i} className="text-white/70 leading-relaxed">{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#c9a227]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-light text-black mb-4">Need Help Choosing?</h2>
          <p className="text-black/70 mb-8">
            Our team will help you select the perfect vehicle for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="px-8 py-4 bg-black text-white font-semibold uppercase tracking-wider hover:bg-[#222] transition-all"
            >
              Contact Us
            </Link>
            <Link 
              to="/fleet"
              className="px-8 py-4 border-2 border-black text-black font-semibold uppercase tracking-wider hover:bg-black hover:text-white transition-all"
            >
              View All Vehicles
            </Link>
          </div>
        </div>
      </section>

      <FaqSection faqs={vehiclesFaqs} />

      <Footer />
    </div>
  );
};

export default VehiclesPage;
