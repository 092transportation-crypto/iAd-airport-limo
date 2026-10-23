// Batch 11 (2026-10-23, SEO expansion round 6) — 10 new landing pages: four
// city+wedding gap-fills (Tysons, Bethesda, Arlington, Potomac — each city
// already has a limo-service and/or corporate page but no wedding page),
// one brand-new city page (College Park, MD), two new city+service gap-fills
// (National Harbor corporate, Silver Spring corporate), one new corporate-
// by-industry page (healthcare/biotech — distinct from the government-
// contractor/tech/professional-services pages added in batch 10), one new
// service page (embassy/diplomatic transportation, distinct from the
// existing blog post on the same subject), and one new event-venue page
// (Northwest Stadium in Landover, MD — home of the Washington Commanders,
// not previously covered as a landing page). Same entry shape as
// MARYLAND_PAGES. Lives in its own file.
const VEHICLES = [
  { name: "Mercedes-Benz E-Class", cls: "Business sedan", seats: 3, best: "solo executives and couples" },
  { name: "BMW 7 Series", cls: "First-class sedan", seats: 3, best: "VIP and executive travel" },
  { name: "Cadillac Escalade", cls: "Premium SUV", seats: 6, best: "families and small groups with luggage" },
  { name: "Chevrolet Suburban", cls: "Luxury SUV", seats: 6, best: "airport runs with beach or golf luggage" },
  { name: "Mercedes Sprinter van", cls: "Executive van", seats: 14, best: "wedding parties, corporate teams and groups" },
  { name: "Stretch limousine", cls: "Limousine", seats: 8, best: "proms, weddings and celebrations" },
];

export const MARYLAND_BATCH11 = [
  // ---------------------------------------------------------------------
  // City + wedding gap-fills
  // ---------------------------------------------------------------------
  {
    slug: "tysons-wedding-limo-service",
    type: "service",
    name: "Tysons",
    badge: "Tysons, VA · Wedding Transportation",
    h1: "Tysons Wedding Limo Service",
    metaTitle: "Tysons Wedding Limo Service | Tysons, VA",
    metaDescription:
      "Chauffeured wedding transportation in Tysons, VA — hotel-to-venue coordination, bridal party limos and guest shuttles. Call (877) 609-1919.",
    stats: [
      { label: "Dulles (IAD)", value: "15–25 minutes, depending on traffic" },
      { label: "Pricing", value: "Hourly, as-directed wedding packages" },
      { label: "Fleet", value: "Stretch limousine up to 14-passenger Sprinter van" },
    ],
    intro: [
      "Tysons is a hotel-heavy, high-rise part of Northern Virginia, which makes it a common staging point for a wedding day even when the ceremony itself is elsewhere — a bridal party getting ready at a Tysons hotel, then moving to a ceremony and reception somewhere in McLean, Vienna, Great Falls or downtown DC. We build that kind of day as one hourly reservation rather than a series of separate rides.",
      "Because several of Tysons' hotels sit close to both the Capital Beltway and the Dulles Toll Road, a Tysons-based wedding day also keeps airport pickups for out-of-town guests simple — Dulles is 15 to 25 minutes away for most Tysons addresses.",
    ],
    highlights: [
      "Hourly wedding-day packages from a Tysons hotel through ceremony and reception",
      "Bridal party pickup and drop-off coordinated against the photographer's schedule",
      "Guest shuttle service in Sprinter vans for venues with limited parking",
      "Dulles airport pickups for out-of-town wedding guests, 15 to 25 minutes away",
      "Decoration-ready stretch limousines for the wedding party",
      "Licensed and insured Virginia carrier with a dedicated day-of coordinator",
    ],
    sections: [
      {
        h2: "Using a Tysons hotel as your wedding-day base",
        paragraphs: [
          "A getting-ready suite at one of Tysons' hotels works well as a home base even when the ceremony is in McLean, Vienna or across the river in DC — it keeps hair and makeup, catering coordination and guest check-in centralized in one place before everyone moves to the venue. We stage the vehicle at the hotel and run the day from there on one confirmed schedule.",
        ],
      },
      {
        h2: "Coordinating with McLean, Vienna and DC venues",
        paragraphs: [
          "Tysons sits within a short drive of several of the area's most-used ceremony and reception venues, and a Tysons-based wedding day frequently includes a stop in one or more of these neighboring areas. We confirm the full route and timing with your planner or venue coordinator before the date, building buffer time between stops rather than treating the drive as an afterthought.",
        ],
      },
      {
        h2: "Airport pickups for out-of-town wedding guests",
        paragraphs: [
          "With Dulles only 15 to 25 minutes from most Tysons hotels, we regularly run group airport pickups the day or two before the wedding for family and wedding-party members flying in, coordinated against each traveler's actual flight rather than a fixed schedule.",
        ],
      },
      {
        h2: "Booking your Tysons wedding day",
        paragraphs: [
          "Rates are hourly and confirmed in writing before the date is booked. Call (877) 609-1919 or book online with your hotel, venue and timeline.",
        ],
      },
    ],
    vehicles: VEHICLES,
    faqs: [
      { q: "Can our wedding day start at a Tysons hotel even if the ceremony is elsewhere?", a: "Yes, this is a common pattern — we stage at the hotel and run the full day's route to your ceremony and reception venue on one reservation." },
      { q: "How far is Tysons from Dulles Airport?", a: "About 15 to 25 minutes depending on traffic, which makes group pickups for out-of-town wedding guests straightforward." },
      { q: "Can you shuttle guests to a venue with limited parking?", a: "Yes. A Mercedes Sprinter van is the most common choice for a guest shuttle route from a Tysons hotel to a nearby venue." },
      { q: "Is wedding transportation billed hourly or as a flat rate?", a: "Hourly, as-directed service for the wedding day, confirmed in writing before you book." },
      { q: "How far ahead should we book a Tysons wedding date?", a: "As early as possible, especially for a Saturday between April and November, which is this region's peak wedding season." },
    ],
    related: [
      { label: "Tysons Limo Service", to: "/tysons-limo-service" },
      { label: "Tysons Corporate Car Service", to: "/tysons-corporate-car-service" },
      { label: "McLean Limo Service", to: "/mclean-limo-service" },
      { label: "Vienna Wedding Limo Service", to: "/vienna-wedding-limo-service" },
      { label: "Top 10 Wedding Venues Near Dulles & NoVA", to: "/top-10-wedding-venues-near-dulles-nova" },
      { label: "Wedding Limo Service", to: "/wedding-limo" },
    ],
    schema: { areaServed: ["Tysons", "Fairfax County"], serviceType: "Wedding limousine service" },
  },
  {
    slug: "bethesda-wedding-limo-service",
    type: "service",
    name: "Bethesda",
    badge: "Bethesda, MD · Wedding Transportation",
    h1: "Bethesda Wedding Limo Service",
    metaTitle: "Bethesda Wedding Limo Service | Bethesda, MD",
    metaDescription:
      "Chauffeured wedding transportation in Bethesda, MD — downtown Bethesda hotels, ceremony and reception coordination. Call (877) 609-1919.",
    stats: [
      { label: "Dulles (IAD)", value: "35–50 minutes, depending on traffic" },
      { label: "Pricing", value: "Hourly, as-directed wedding packages" },
      { label: "Fleet", value: "Stretch limousine up to 14-passenger Sprinter van" },
    ],
    intro: [
      "Downtown Bethesda's density of hotels and restaurants makes it a frequent wedding-day base in Montgomery County, whether the ceremony itself is at a downtown venue or the day includes a drive out to a reception elsewhere in the DC area. We run Bethesda wedding days as one hourly reservation, with the same chauffeur and vehicle dedicated to the wedding party from getting-ready through the reception exit.",
    ],
    highlights: [
      "Hourly wedding-day packages covering getting ready through the reception exit",
      "Coordination with downtown Bethesda hotels and nearby Chevy Chase and Rockville venues",
      "Guest shuttle coordination with Sprinter vans for venues with limited parking",
      "Decoration-ready stretch limousines for the bridal party",
      "Airport pickups for out-of-town wedding guests at Dulles, Reagan or BWI",
      "Licensed and insured Maryland carrier with a dedicated day-of coordinator",
    ],
    sections: [
      {
        h2: "Building the Bethesda wedding-day schedule",
        paragraphs: [
          "Most Bethesda weddings move between a getting-ready location, a ceremony venue, and a reception that is sometimes downtown and sometimes out toward Chevy Chase or Rockville. We build the schedule around the photographer's shot list and the ceremony start time, with buffer built in so one delay does not cascade through the rest of the day.",
        ],
      },
      {
        h2: "Airport pickups for out-of-town wedding guests",
        paragraphs: [
          "Bethesda sits within reasonable reach of all three regional airports — Reagan National and Dulles both run 30 to 50 minutes depending on the specific pickup point, with BWI a comparable distance to the north. We coordinate group pickups for wedding-party members and family flying in, timed against each traveler's actual flight.",
        ],
      },
      {
        h2: "What to expect on the wedding day itself",
        paragraphs: [
          "One chauffeur and one vehicle stay with your reservation for the full booked window, confirmed in writing before the date — including buffer time between stops, so the wedding party is not the one managing logistics on the day itself.",
        ],
      },
      {
        h2: "Vehicles and booking for a Bethesda wedding",
        paragraphs: [
          "A stretch limousine suits a bridal party of six to eight; a Mercedes Sprinter van handles a larger wedding party or a guest shuttle route. Call (877) 609-1919 or book online with your venue and timeline.",
        ],
      },
    ],
    vehicles: VEHICLES,
    faqs: [
      { q: "Can you handle a wedding day that starts in downtown Bethesda and ends at a reception elsewhere?", a: "Yes. We build the full route into one hourly reservation, with the same chauffeur staying with the wedding party all day." },
      { q: "How far is Bethesda from the three regional airports?", a: "Reagan National and Dulles both run roughly 30 to 50 minutes depending on the specific pickup point; BWI is a comparable distance to the north." },
      { q: "Can you shuttle guests between a hotel and the ceremony venue?", a: "Yes. A Mercedes Sprinter van is the most common choice for a Bethesda guest shuttle, especially for venues with limited on-site parking." },
      { q: "Is wedding transportation billed hourly or as a flat rate?", a: "Hourly, as-directed service for the wedding day, confirmed in writing before you book." },
      { q: "How far in advance should we book a Bethesda wedding date?", a: "As early as possible, especially for a Saturday between April and November, which is this region's peak wedding season." },
    ],
    related: [
      { label: "Bethesda Limo Service", to: "/bethesda-limo-service" },
      { label: "Bethesda Corporate Car Service", to: "/bethesda-corporate-car-service" },
      { label: "Chevy Chase Limo Service", to: "/chevy-chase-limo-service" },
      { label: "Rockville Limo Service", to: "/rockville-limo-service" },
      { label: "Maryland Wedding Limo", to: "/maryland-wedding-limo" },
      { label: "Wedding Limo Service", to: "/wedding-limo" },
    ],
    schema: { areaServed: ["Bethesda", "Montgomery County"], serviceType: "Wedding limousine service" },
  },
  {
    slug: "arlington-wedding-limo-service",
    type: "service",
    name: "Arlington",
    badge: "Arlington, VA · Wedding Transportation",
    h1: "Arlington Wedding Limo Service",
    metaTitle: "Arlington Wedding Limo Service | Arlington, VA",
    metaDescription:
      "Chauffeured wedding transportation in Arlington, VA — Crystal City, Rosslyn and Ballston venues, guest shuttles and DC coordination. Call (877) 609-1919.",
    stats: [
      { label: "Reagan (DCA)", value: "10–20 minutes, depending on traffic" },
      { label: "Pricing", value: "Hourly, as-directed wedding packages" },
      { label: "Fleet", value: "Stretch limousine up to 14-passenger Sprinter van" },
    ],
    intro: [
      "Arlington wedding days frequently cross into Washington, DC for part of the itinerary — a ceremony at an Arlington venue, photos near the Potomac, and a reception downtown, or the reverse. We build that kind of cross-jurisdiction day as one hourly reservation, so a chauffeur familiar with both Arlington's streets and the District's bridges and traffic patterns handles the whole route.",
    ],
    highlights: [
      "Hourly wedding-day packages spanning Arlington and DC venues on one reservation",
      "Reagan National pickups 10 to 20 minutes from most Arlington venues for out-of-town guests",
      "Guest shuttle coordination with Sprinter vans for venues with limited parking",
      "Decoration-ready stretch limousines for the bridal party",
      "Chauffeurs familiar with Crystal City, Rosslyn, Ballston and the DC bridges",
      "Licensed and insured Virginia carrier with a dedicated day-of coordinator",
    ],
    sections: [
      {
        h2: "Weddings that cross between Arlington and DC",
        paragraphs: [
          "A ceremony in Arlington with photos along the Potomac and a reception across the river in DC — or the reverse — is a common pattern for Arlington weddings, and it is exactly the kind of multi-stop day hourly, as-directed service is built for. We confirm the full route with your planner before the date, including bridge timing during rush hour.",
        ],
      },
      {
        h2: "Airport pickups for out-of-town wedding guests",
        paragraphs: [
          "Reagan National sits 10 to 20 minutes from most Arlington neighborhoods, making it the fastest airport option in our entire service area for group pickups of wedding-party members and family flying in the day before.",
        ],
      },
      {
        h2: "Serving Crystal City, Rosslyn and Ballston venues",
        paragraphs: [
          "Each of Arlington's corridors has slightly different venue access and parking patterns, and a chauffeur who runs these neighborhoods daily knows where a wedding-day vehicle can actually stage without circling the block looking for a drop point.",
        ],
      },
      {
        h2: "Vehicles and booking for an Arlington wedding",
        paragraphs: [
          "A stretch limousine suits a bridal party of six to eight; a Mercedes Sprinter van handles a larger wedding party or a guest shuttle route. Call (877) 609-1919 or book online with your venue and timeline.",
        ],
      },
    ],
    vehicles: VEHICLES,
    faqs: [
      { q: "Can our wedding day cross between Arlington and DC venues?", a: "Yes, this is a common pattern for Arlington weddings — we build the full cross-river route into one hourly reservation." },
      { q: "How far is Arlington from Reagan National Airport?", a: "About 10 to 20 minutes depending on traffic, making it one of the fastest airport connections for out-of-town wedding guests." },
      { q: "Can you shuttle guests between a hotel and the ceremony venue?", a: "Yes. A Mercedes Sprinter van is the most common choice for an Arlington guest shuttle, especially for venues with limited parking." },
      { q: "Is wedding transportation billed hourly or as a flat rate?", a: "Hourly, as-directed service for the wedding day, confirmed in writing before you book." },
      { q: "How far in advance should we book an Arlington wedding date?", a: "As early as possible, especially for a Saturday between April and November, which is this region's peak wedding season." },
    ],
    related: [
      { label: "Arlington Limo Service", to: "/arlington-limo-service" },
      { label: "Arlington Corporate Car Service", to: "/arlington-corporate-car-service" },
      { label: "Georgetown Limo Service", to: "/georgetown-limo-service" },
      { label: "Dupont Circle Limo Service", to: "/dupont-circle-limo-service" },
      { label: "Top 10 Wedding Venues Near Dulles & NoVA", to: "/top-10-wedding-venues-near-dulles-nova" },
      { label: "Wedding Limo Service", to: "/wedding-limo" },
    ],
    schema: { areaServed: ["Arlington", "Arlington County"], serviceType: "Wedding limousine service" },
  },
  {
    slug: "potomac-wedding-limo-service",
    type: "service",
    name: "Potomac",
    badge: "Potomac, MD · Wedding Transportation",
    h1: "Potomac Wedding Limo Service",
    metaTitle: "Potomac Wedding Limo Service | Potomac, MD",
    metaDescription:
      "Chauffeured wedding transportation in Potomac, MD — estate and country club venues, guest shuttles and bridal party limos. Call (877) 609-1919.",
    stats: [
      { label: "Dulles (IAD)", value: "35–50 minutes, depending on traffic" },
      { label: "Pricing", value: "Hourly, as-directed wedding packages" },
      { label: "Fleet", value: "Stretch limousine up to 14-passenger Sprinter van" },
    ],
    intro: [
      "Potomac's private estates, country clubs and conference-center venues host a steady calendar of weddings, and the area's winding, unmarked roads reward a chauffeur who already knows the way rather than one following a map app through a gravel driveway for the first time. We build Potomac wedding days as one hourly reservation, from getting-ready through the reception exit.",
    ],
    highlights: [
      "Hourly wedding-day packages for Potomac estate, club and conference-center venues",
      "Chauffeurs familiar with Potomac's private roads and venue entrances",
      "Guest shuttle coordination with Sprinter vans for venues with limited on-site parking",
      "Decoration-ready stretch limousines for the bridal party",
      "Coordination with nearby Bethesda and Rockville hotels for out-of-town guests",
      "Licensed and insured Maryland carrier with a dedicated day-of coordinator",
    ],
    sections: [
      {
        h2: "Private estates, clubs and conference-center venues",
        paragraphs: [
          "Many Potomac wedding venues sit on private roads or set back from the main routes in a way that is easy to miss on a first visit — a chauffeur who regularly runs this area already knows the entrance, the drop-off point and where a vehicle can actually stage during the ceremony and reception.",
        ],
      },
      {
        h2: "Hotel coordination for out-of-town guests",
        paragraphs: [
          "Potomac itself has limited hotel inventory, so most out-of-town wedding guests stay in nearby Bethesda or Rockville and need a reliable shuttle out to the venue. We build that guest-transportation leg into the same reservation as the wedding party's own schedule.",
        ],
      },
      {
        h2: "What to expect on the wedding day itself",
        paragraphs: [
          "One chauffeur and one vehicle stay with your reservation for the full booked window, confirmed in writing before the date, with buffer time built in between stops.",
        ],
      },
      {
        h2: "Vehicles and booking for a Potomac wedding",
        paragraphs: [
          "A stretch limousine suits a bridal party of six to eight; a Mercedes Sprinter van handles a larger wedding party or a guest shuttle route from a Bethesda or Rockville hotel. Call (877) 609-1919 or book online with your venue and timeline.",
        ],
      },
    ],
    vehicles: VEHICLES,
    faqs: [
      { q: "Do your chauffeurs know how to find Potomac's estate and club venues?", a: "Yes, we run this area regularly and our chauffeurs know the entrances and drop-off points at Potomac's private venues, not just the main road address." },
      { q: "Where do out-of-town guests usually stay for a Potomac wedding?", a: "Most commonly in nearby Bethesda or Rockville, since Potomac itself has limited hotel inventory. We build the guest shuttle from there into the same reservation." },
      { q: "Can you shuttle guests to a venue with limited on-site parking?", a: "Yes. A Mercedes Sprinter van is the most common choice for a Potomac guest shuttle." },
      { q: "Is wedding transportation billed hourly or as a flat rate?", a: "Hourly, as-directed service for the wedding day, confirmed in writing before you book." },
      { q: "How far in advance should we book a Potomac wedding date?", a: "As early as possible, especially for a Saturday between April and November, which is this region's peak wedding season." },
    ],
    related: [
      { label: "Potomac Limo Service", to: "/potomac-limo-service" },
      { label: "Potomac Prom Limo Service", to: "/potomac-prom-limo-service" },
      { label: "Bethesda Wedding Limo Service", to: "/bethesda-wedding-limo-service" },
      { label: "Rockville Limo Service", to: "/rockville-limo-service" },
      { label: "Maryland Wedding Transportation", to: "/maryland-wedding-transportation" },
      { label: "Wedding Limo Service", to: "/wedding-limo" },
    ],
    schema: { areaServed: ["Potomac", "Montgomery County"], serviceType: "Wedding limousine service" },
  },
  // ---------------------------------------------------------------------
  // New city page
  // ---------------------------------------------------------------------
  {
    slug: "college-park-md-limo-service",
    type: "city",
    name: "College Park",
    badge: "Prince George's County · Maryland",
    h1: "College Park Limo Service",
    metaTitle: "College Park MD Limo Service | Black Car Service",
    metaDescription:
      "Private limo and black car service in College Park, MD — University of Maryland transportation, airport transfers and corporate travel. Call (877) 609-1919.",
    stats: [
      { label: "Dulles (IAD)", value: "40–55 minutes" },
      { label: "Reagan (DCA)", value: "25–35 minutes" },
      { label: "BWI", value: "25–35 minutes" },
    ],
    intro: [
      "IAD Airport Limo provides private chauffeured transportation in College Park, Maryland — home to the University of Maryland's flagship campus, airport transfers and corporate travel across Prince George's County.",
      "College Park sits roughly equidistant from Reagan National and BWI, both about 25 to 35 minutes away, with Dulles a longer 40 to 55 minute run via the Beltway. All three are served with flight tracking, meet and greet and flat rates confirmed in writing.",
    ],
    highlights: [
      "Written flat rates for Dulles, Reagan National and BWI — no surge, no hidden fees",
      "University of Maryland move-in, game-day and graduation transportation",
      "Chauffeurs familiar with Route 1, the Capital Beltway and campus traffic patterns",
      "Late-model Mercedes, BMW, Cadillac and Chevrolet sedans and SUVs; Sprinter vans for groups",
      "Family and group transportation for Terrapins athletics and campus events",
      "Licensed and insured Virginia and Maryland carrier",
    ],
    sections: [
      {
        h2: "Door-to-door in College Park",
        paragraphs: [
          "We pick up and drop off anywhere in College Park, including the University of Maryland campus, Downtown College Park, Berwyn Heights and the Route 1 corridor. Regular destinations include XFINITY Center, SECU Stadium, the Stamp Student Union and the campus's many residence halls and Greek houses, where families and visiting faculty expect a chauffeur rather than a scramble through campus parking.",
          "Our chauffeurs drive Route 1, the Capital Beltway (I-495), the Baltimore-Washington Parkway and Kenilworth Avenue daily, and plan around football Saturdays, graduation weekends and move-in days when campus traffic runs well above normal.",
        ],
      },
      {
        h2: "Airport transfers between College Park and Dulles, Reagan and BWI",
        paragraphs: [
          "Reagan National: 25 to 35 minutes via the Baltimore-Washington Parkway and the Beltway. BWI: 25 to 35 minutes via the Baltimore-Washington Parkway. Dulles: 40 to 55 minutes via the Beltway and the Dulles Toll Road. Arrivals are tracked from wheels-up; departures are scheduled from your flight time with a buffer built in.",
        ],
      },
      {
        h2: "University of Maryland events and family travel",
        paragraphs: [
          "College Park bookings run heavily around the University of Maryland calendar — move-in day, home football and basketball games, and the two annual graduation weekends are our busiest stretches in this city. Families flying in for a student's graduation or move-in regularly combine an airport pickup with a drop-off directly at the residence hall or the ceremony venue on one reservation.",
        ],
      },
    ],
    vehicles: VEHICLES,
    faqs: [
      { q: "Do you provide transportation for University of Maryland move-in day?", a: "Yes. Move-in weekends are among our busiest in College Park, and we recommend booking as early as possible once your move-in date is confirmed." },
      { q: "How far is College Park from BWI and Reagan National?", a: "Both run about 25 to 35 minutes depending on traffic — College Park sits roughly equidistant between the two." },
      { q: "Can you pick up a family for a graduation weekend?", a: "Yes, we regularly combine airport pickups with drop-offs directly at campus venues for graduation weekend, and recommend booking well ahead for the two annual ceremony dates." },
      { q: "Do you serve game days at SECU Stadium or XFINITY Center?", a: "Yes, we run regular transportation for Terrapins football and basketball games, including group bookings in Sprinter vans." },
      { q: "Is College Park served by both Virginia and Maryland chauffeurs?", a: "We are a licensed and insured Virginia and Maryland carrier and serve College Park as a routine part of our Prince George's County coverage." },
    ],
    related: [
      { label: "University of Maryland Transportation", to: "/university-of-maryland-transportation" },
      { label: "Hyattsville Limo Service", to: "/hyattsville-limo-service" },
      { label: "Greenbelt Limo Service", to: "/greenbelt-limo-service" },
      { label: "Bowie Limo Service", to: "/bowie-limo-service" },
      { label: "BWI to Rockville", to: "/bwi-to-rockville" },
      { label: "Northern Virginia Graduation Limo", to: "/northern-virginia-graduation-limo" },
    ],
    schema: { areaServed: ["College Park", "Prince George's County"], serviceType: "Airport car service" },
  },
  // ---------------------------------------------------------------------
  // City + service gap-fills
  // ---------------------------------------------------------------------
  {
    slug: "national-harbor-corporate-car-service",
    type: "service",
    name: "National Harbor",
    badge: "National Harbor, MD · Corporate Transportation",
    h1: "National Harbor Corporate Car Service",
    metaTitle: "National Harbor Corporate Car Service | MD",
    metaDescription:
      "Corporate and conference transportation at National Harbor, MD — Gaylord National meetings, executive transfers and airport pickups. Call (877) 609-1919.",
    stats: [
      { label: "Reagan (DCA)", value: "25–35 minutes, depending on traffic" },
      { label: "Dulles (IAD)", value: "50–65 minutes, depending on traffic" },
      { label: "Billing", value: "Direct invoicing and corporate accounts" },
    ],
    intro: [
      "National Harbor's Gaylord National Resort & Convention Center makes it one of the region's busiest conference and corporate-meeting destinations, and the transportation that comes with it is rarely a single executive heading to the airport — it is a conference shuttle schedule, a set of staggered VIP arrivals, or a client meeting that needs a billed, documented ride rather than a rideshare receipt.",
      "We run daily corporate and conference service to National Harbor, with Reagan National 25 to 35 minutes away for most attendees and Dulles the right call for international arrivals.",
    ],
    highlights: [
      "Flight-tracked airport pickups for conference attendees and executives at Reagan or Dulles",
      "Multi-vehicle shuttle service for Gaylord National conference schedules",
      "Direct corporate billing and monthly invoicing — no per-ride expense reports",
      "Executive sedans for solo travel, SUVs and Sprinter vans for visiting teams",
      "Coordination with convention schedules and hotel group blocks",
      "Licensed and insured Maryland carrier with 24/7 dispatch",
    ],
    sections: [
      {
        h2: "Conference and convention transportation at Gaylord National",
        paragraphs: [
          "A conference at the Gaylord National Resort & Convention Center often needs a shuttle loop between the airport, nearby hotels and the convention center itself, run on a schedule a meeting planner can actually rely on. We size the vehicle count to attendee volume and build in contingency time for a session that runs long or a flight that lands late.",
        ],
      },
      {
        h2: "Executive and client transportation",
        paragraphs: [
          "A client or executive flying in for a single meeting at National Harbor is met at baggage claim if requested, driven directly to the venue, and returned to the airport on a flight-tracked pickup — billed as one reservation rather than a separate rideshare charge on each leg.",
        ],
      },
      {
        h2: "Reagan National vs. Dulles for a National Harbor trip",
        paragraphs: [
          "Reagan National is the faster, more common choice for domestic conference travel at 25 to 35 minutes from National Harbor. Dulles remains the right call for international attendees, and we build the extra drive time into the pickup schedule accordingly.",
        ],
      },
      {
        h2: "Setting up a National Harbor corporate account",
        paragraphs: [
          "Direct billing and monthly invoicing are available for companies or event planners booking this corridor regularly. Call (877) 609-1919 or book online to set up an account or request a single reservation.",
        ],
      },
    ],
    vehicles: VEHICLES,
    faqs: [
      { q: "How far is National Harbor from Reagan National Airport?", a: "About 25 to 35 minutes depending on traffic, making it the faster airport option for most National Harbor conference attendees." },
      { q: "Can you run a shuttle for a multi-day conference at Gaylord National?", a: "Yes. We build a shuttle schedule around your conference's attendee volume and session times, with contingency built in for delays." },
      { q: "Do you offer direct corporate billing?", a: "Yes. We set up direct billing and monthly invoicing for companies and event planners booking National Harbor transportation regularly." },
      { q: "Should international attendees use Dulles instead of Reagan?", a: "Yes, Dulles is the practical choice for international itineraries even though it runs a longer drive — about 50 to 65 minutes from National Harbor." },
      { q: "Can you handle a visiting team of six or more?", a: "Yes. A luxury SUV covers up to six passengers with luggage; for larger teams a Mercedes Sprinter van seats up to 14." },
    ],
    related: [
      { label: "National Harbor Transportation", to: "/national-harbor-transportation" },
      { label: "MGM National Harbor Casino Night Transportation from NoVA", to: "/blog/mgm-national-harbor-casino-night-transportation-from-nova" },
      { label: "Maryland Corporate Car Service", to: "/maryland-corporate-car-service" },
      { label: "Corporate Event Planner Guide: Chauffeured Transportation in DC", to: "/blog/corporate-event-planner-guide-chauffeured-transportation-dc" },
      { label: "IAD to DCA Airport Transfer", to: "/iad-to-dca-airport" },
      { label: "Washington Convention Center Transportation", to: "/washington-convention-center-transportation" },
    ],
    schema: { areaServed: ["National Harbor", "Prince George's County"], serviceType: "Corporate car service" },
  },
  {
    slug: "silver-spring-corporate-car-service",
    type: "service",
    name: "Silver Spring",
    badge: "Silver Spring, MD · Corporate Transportation",
    h1: "Silver Spring Corporate Car Service",
    metaTitle: "Silver Spring Corporate Car Service | MD",
    metaDescription:
      "Corporate car service in Silver Spring, MD — executive sedans, FDA-area transfers, Dulles and Reagan airport runs. Call (877) 609-1919.",
    stats: [
      { label: "Reagan (DCA)", value: "20–30 minutes, depending on traffic" },
      { label: "Dulles (IAD)", value: "40–55 minutes, depending on traffic" },
      { label: "Billing", value: "Direct invoicing and corporate accounts" },
    ],
    intro: [
      "Silver Spring's downtown office core and its proximity to the FDA's White Oak campus and federal offices along Colesville Road make it a steady source of corporate and government-adjacent travel in Montgomery County. We run executive sedans for individual travelers, SUVs for small teams, and Sprinter vans for larger visiting groups, with Reagan National 20 to 30 minutes away for most Silver Spring addresses.",
    ],
    highlights: [
      "Flight-tracked airport pickups for clients and executives at Reagan or Dulles",
      "Visitor transportation coordinated with federal and corporate campus security desks",
      "Direct corporate billing and monthly invoicing — no per-ride expense reports",
      "Executive sedans for solo travel, SUVs and Sprinter vans for visiting teams",
      "Service across downtown Silver Spring, the FDA White Oak campus and Colesville Road corridor",
      "Licensed and insured Maryland carrier with 24/7 dispatch",
    ],
    sections: [
      {
        h2: "Downtown Silver Spring and the Colesville Road corridor",
        paragraphs: [
          "Silver Spring's downtown office and media sector sits close enough to the Beltway and the Metro Red Line that a flight-tracked Reagan National pickup is typically the fastest airport connection for domestic executive travel in this part of Montgomery County.",
        ],
      },
      {
        h2: "Visitor transportation near the FDA White Oak campus",
        paragraphs: [
          "A portion of our Silver Spring corporate traffic involves visitors to the FDA's White Oak campus and nearby federal and contractor offices, some of which have their own badging or visitor-log requirements. We coordinate arrival timing with facility front desks on request.",
        ],
      },
      {
        h2: "Setting up a Silver Spring corporate account",
        paragraphs: [
          "Companies booking this corridor regularly can set up direct billing, saved pickup addresses and a preferred vehicle class. Call (877) 609-1919 or book online for a single reservation or a standing account.",
        ],
      },
    ],
    vehicles: VEHICLES,
    faqs: [
      { q: "How far is Silver Spring from Reagan National Airport?", a: "About 20 to 30 minutes depending on traffic — one of the faster airport connections in Montgomery County." },
      { q: "Do you serve the FDA White Oak campus?", a: "Yes, we regularly coordinate visitor transportation to the FDA White Oak campus and nearby federal and contractor offices." },
      { q: "Can you coordinate with a facility's security desk for a visitor pickup?", a: "Yes, we confirm arrival windows directly with front-desk and security teams at Silver Spring-area facilities with visitor requirements." },
      { q: "Do you offer direct corporate billing?", a: "Yes. We offer direct billing and monthly invoicing for corporate accounts that book Silver Spring transportation regularly." },
      { q: "Can our company set up a standing arrangement?", a: "Yes, companies that book this corridor regularly can set up saved pickup addresses and a preferred vehicle class on file." },
    ],
    related: [
      { label: "Silver Spring Limo Service", to: "/silver-spring-limo-service" },
      { label: "Takoma Park Limo Service", to: "/takoma-park-limo-service" },
      { label: "Rockville Corporate Car Service", to: "/rockville-corporate-car-service" },
      { label: "Maryland Corporate Transportation", to: "/maryland-corporate-transportation" },
      { label: "DCA to Bethesda", to: "/dca-to-bethesda" },
      { label: "Government Contractor Car Service", to: "/government-contractor-car-service" },
    ],
    schema: { areaServed: ["Silver Spring", "Montgomery County"], serviceType: "Corporate car service" },
  },
  // ---------------------------------------------------------------------
  // Corporate-by-industry + service pages
  // ---------------------------------------------------------------------
  {
    slug: "healthcare-biotech-corporate-car-service",
    type: "service",
    name: "Healthcare & Biotech Corridor",
    badge: "I-270 Corridor, MD · Corporate Transportation",
    h1: "Healthcare & Biotech Corporate Car Service",
    metaTitle: "Healthcare & Biotech Corporate Car Service | MD",
    metaDescription:
      "Corporate car service for healthcare and biotech firms along the I-270 corridor — NIH, FDA and Rockville/Gaithersburg transfers. Call (877) 609-1919.",
    stats: [
      { label: "Dulles (IAD)", value: "35–55 minutes, depending on origin" },
      { label: "Reagan (DCA)", value: "20–40 minutes, depending on origin" },
      { label: "Billing", value: "Direct invoicing and corporate accounts" },
    ],
    intro: [
      "The I-270 corridor between Bethesda and Gaithersburg is one of the country's densest concentrations of biotech, pharmaceutical and health-science companies, anchored by the NIH campus in Bethesda and the FDA's offices in Rockville and White Oak. Transportation for this sector tends to be visiting scientific collaborators, regulatory-affairs travel, and board or investor meetings — trips where a documented, billed car service matters as much as the ride itself.",
      "We run executive sedans, SUVs and Sprinter vans across the full corridor, with Dulles and Reagan National both realistic airport options depending on where along I-270 your trip starts.",
    ],
    highlights: [
      "Flight-tracked airport pickups for visiting scientists, executives and board members",
      "Service across the full I-270 corridor — Bethesda, Rockville, Gaithersburg and the NIH/FDA campuses",
      "Direct corporate billing and monthly invoicing for recurring accounts",
      "Multi-stop service for site visits across several campuses in one day",
      "Executive sedans for individual travelers, SUVs and Sprinter vans for visiting delegations",
      "Licensed and insured Maryland carrier with 24/7 dispatch",
    ],
    sections: [
      {
        h2: "Serving the NIH, FDA and the I-270 biotech corridor",
        paragraphs: [
          "Visiting researchers, regulatory consultants and conference attendees moving between the NIH campus in Bethesda, FDA offices in Rockville and White Oak, and the biotech and pharmaceutical firms clustered around Rockville and Gaithersburg make up a steady share of our corridor bookings. A chauffeur who runs this stretch of I-270 regularly knows which campuses require advance visitor notice and plans pickup timing accordingly.",
        ],
      },
      {
        h2: "Board meetings, investor visits and site tours",
        paragraphs: [
          "A board member or investor visiting several of a company's facilities in one day — a lab, a manufacturing site, a headquarters office — is a multi-stop, hourly booking rather than a single point-to-point trip. We keep one vehicle and chauffeur with the group for the full day, coordinated against your itinerary.",
        ],
      },
      {
        h2: "Airport connections for the corridor",
        paragraphs: [
          "Reagan National tends to be faster for Bethesda-end trips, while Dulles is often the more practical choice for Gaithersburg-end addresses and for international scientific travel. We confirm the right airport and drive-time estimate based on your specific starting point.",
        ],
      },
      {
        h2: "Setting up a corridor corporate account",
        paragraphs: [
          "Companies booking this corridor regularly can set up direct billing, saved pickup addresses for multiple campuses, and a preferred vehicle class. Call (877) 609-1919 or book online.",
        ],
      },
    ],
    vehicles: VEHICLES,
    faqs: [
      { q: "Do you serve the NIH campus and FDA offices directly?", a: "Yes, we regularly serve visitor and staff transportation to and from the NIH campus in Bethesda and FDA offices in Rockville and White Oak." },
      { q: "Can you handle a multi-site visit for a board member or investor in one day?", a: "Yes. Hourly, as-directed service keeps one vehicle and chauffeur with the group across multiple campuses on one reservation." },
      { q: "Should I use Dulles or Reagan for a trip along this corridor?", a: "Reagan National is generally faster for Bethesda-end addresses; Dulles is often the better choice for Gaithersburg-end addresses and international travel." },
      { q: "Do you offer direct corporate billing?", a: "Yes. We set up direct billing and monthly invoicing for biotech and healthcare companies booking this corridor regularly." },
      { q: "Can you accommodate a visiting delegation of scientists or executives?", a: "Yes. SUVs cover small teams and a Mercedes Sprinter van seats up to 14 for larger visiting delegations." },
    ],
    related: [
      { label: "Rockville Corporate Car Service", to: "/rockville-corporate-car-service" },
      { label: "Gaithersburg Limo Service", to: "/gaithersburg-limo-service" },
      { label: "North Bethesda Limo Service", to: "/north-bethesda-limo-service" },
      { label: "Maryland Car Service for Business Travelers", to: "/blog/maryland-car-service-for-business-travelers" },
      { label: "Maryland Corporate Car Service", to: "/maryland-corporate-car-service" },
      { label: "Professional Services Corporate Car Service", to: "/professional-services-corporate-car-service" },
    ],
    schema: { areaServed: ["Bethesda", "Rockville", "Gaithersburg", "Montgomery County"], serviceType: "Corporate car service" },
  },
  {
    slug: "embassy-diplomatic-transportation-service",
    type: "service",
    name: "Embassy & Diplomatic",
    badge: "Washington, DC · Diplomatic Transportation",
    h1: "Embassy & Diplomatic Transportation Service",
    metaTitle: "Embassy & Diplomatic Car Service | Washington, DC",
    metaDescription:
      "Chauffeured transportation for embassies, diplomatic missions and visiting delegations in Washington, DC. Discreet, flight-tracked service. Call (877) 609-1919.",
    stats: [
      { label: "Dulles (IAD)", value: "35–50 minutes, depending on traffic" },
      { label: "Reagan (DCA)", value: "15–25 minutes, depending on traffic" },
      { label: "Billing", value: "Direct invoicing and standing accounts" },
    ],
    intro: [
      "Embassy Row and the diplomatic missions scattered across Massachusetts Avenue, Kalorama and the rest of the District generate a steady need for discreet, reliable chauffeured transportation — ambassadorial travel, visiting delegations, and staff moving between a mission, the State Department and the airport. We provide that service with the same flight tracking, written rates and licensed chauffeurs we run for every corporate client, with the added discretion this kind of travel calls for.",
    ],
    highlights: [
      "Discreet, flight-tracked pickups at Dulles and Reagan National for diplomatic staff and delegations",
      "Service to and from embassies and chanceries along Massachusetts Avenue and throughout DC",
      "Multi-vehicle coordination for visiting delegations and official motorcades",
      "Direct billing and standing accounts for missions and consulates",
      "Executive sedans, SUVs and Sprinter vans sized to delegation size",
      "Licensed and insured Virginia and Maryland carrier available 24/7",
    ],
    sections: [
      {
        h2: "Discreet transportation for diplomatic staff",
        paragraphs: [
          "Mission staff traveling between an embassy, the State Department and the airport benefit from the same written, flat-rate approach we use for every client, without the unpredictability of hailing an unscheduled ride near a chancery. Pickups are flight-tracked for international arrivals, and vehicles are positioned to avoid unnecessary attention near sensitive addresses.",
        ],
      },
      {
        h2: "Visiting delegations and multi-vehicle coordination",
        paragraphs: [
          "A visiting delegation often needs several vehicles moving in coordination — a lead sedan, supporting SUVs, and sometimes a Sprinter van for staff and luggage. We plan the full group's movement as one coordinated booking rather than a set of unrelated individual trips, confirmed against the delegation's schedule in advance.",
        ],
      },
      {
        h2: "Embassy Row and Massachusetts Avenue coverage",
        paragraphs: [
          "Chauffeurs who run Embassy Row and the Kalorama area regularly know the entrance and security protocol differences between missions, and plan pickup and drop-off accordingly rather than treating every chancery address the same way.",
        ],
      },
      {
        h2: "Setting up a standing diplomatic account",
        paragraphs: [
          "Missions and consulates that book regularly can set up direct billing and a standing account with saved pickup addresses and preferred vehicle classes. Call (877) 609-1919 to discuss a specific delegation's needs.",
        ],
      },
    ],
    vehicles: VEHICLES,
    faqs: [
      { q: "Do you provide transportation for embassy staff and delegations?", a: "Yes. We regularly serve embassies, missions and visiting delegations across Washington, DC with discreet, flight-tracked transportation." },
      { q: "Can you coordinate multiple vehicles for a visiting delegation?", a: "Yes. We plan a delegation's full vehicle group as one coordinated booking, confirmed against the schedule in advance." },
      { q: "Can a mission set up a standing account?", a: "Yes, missions and consulates that book regularly can set up direct billing with saved pickup addresses and preferred vehicle classes." },
      { q: "How far is Embassy Row from Reagan National Airport?", a: "About 15 to 25 minutes depending on traffic — one of the faster airport connections in DC." },
      { q: "Is the service discreet near sensitive mission addresses?", a: "Yes, our chauffeurs who regularly serve this area plan pickup and drop-off to avoid unnecessary attention near chancery and mission buildings." },
    ],
    related: [
      { label: "Embassy & Diplomatic Visitor Transportation at Dulles", to: "/blog/embassy-diplomatic-visitor-transportation-dulles" },
      { label: "Dupont Circle Limo Service", to: "/dupont-circle-limo-service" },
      { label: "Capitol Hill Limo Service", to: "/capitol-hill-limo-service" },
      { label: "Washington DC Airport Transfers", to: "/washington-dc-airport-transfers" },
      { label: "Pentagon & Fort Belvoir Visitor Transportation Guide", to: "/pentagon-fort-belvoir-visitor-transportation-guide" },
      { label: "Government Contractor Car Service", to: "/government-contractor-car-service" },
    ],
    schema: { areaServed: ["Washington, DC"], serviceType: "Corporate car service" },
  },
  // ---------------------------------------------------------------------
  // New event-venue page
  // ---------------------------------------------------------------------
  {
    slug: "northwest-stadium-landover-transportation",
    type: "event",
    name: "Northwest Stadium",
    badge: "Landover, MD · Commanders Game Day",
    h1: "Limo & Car Service to Northwest Stadium in Landover, MD",
    metaTitle: "Northwest Stadium Limo Service | Landover, MD",
    metaDescription:
      "Chauffeured car service to Northwest Stadium in Landover, MD for Washington Commanders games — skip the post-game parking lot. Call (877) 609-1919.",
    stats: [
      { label: "Location", value: "Landover, Prince George's County, MD" },
      { label: "Dulles (IAD)", value: "50–65 minutes, depending on traffic" },
      { label: "Pricing", value: "Flat rate or hourly, confirmed in writing" },
    ],
    intro: [
      "Northwest Stadium in Landover, Maryland — the Washington Commanders' home field — shares the same problem every large stadium has: tens of thousands of cars funneling out through a limited number of exits onto Arena Drive and Brightseat Road after the final whistle. A chauffeured pickup staged for your actual exit time avoids that exit crawl entirely.",
      "We run game-day transportation to Northwest Stadium from Dulles, Northern Virginia, Washington, DC and Maryland, with a drop-off near the gate rather than a long walk from an overflow lot.",
    ],
    highlights: [
      "Door-to-door drop-off near Northwest Stadium's main gates",
      "Pickup staged for your actual exit time, not an estimated one",
      "Game-day service from Dulles, Northern Virginia, DC and Maryland",
      "Group transportation in SUVs and Sprinter vans for tailgate parties and larger groups",
      "Standing season-ticket-holder arrangements available for the full season",
      "Licensed and insured Virginia and Maryland carrier available 24/7",
    ],
    sections: [
      {
        h2: "Getting to a Commanders game without the parking lot wait",
        paragraphs: [
          "Northwest Stadium's general parking lots are large, but the exit roads around Arena Drive back up fast once a game ends, and a chauffeured drop-off at the gate skips the search for parking entirely. For the return trip, tell us your game's expected end time and we stage the vehicle to be waiting rather than requiring a call from a crowded lot.",
        ],
      },
      {
        h2: "Coming from Dulles, Northern Virginia, DC or Maryland",
        paragraphs: [
          "Northwest Stadium sits about 50 to 65 minutes from Dulles depending on traffic, and a shorter run from most DC and Maryland starting points. We frequently combine a flight arrival with a same-day game for visiting fans, tracking the inbound flight and timing the drop-off to kickoff.",
        ],
      },
      {
        h2: "Tailgates, group outings and season-ticket arrangements",
        paragraphs: [
          "A Sprinter van handles a tailgate group's coolers and gear along with the group itself, and season-ticket holders can set up a standing arrangement so the same pickup pattern repeats across the season without re-coordinating logistics before every home game.",
        ],
      },
      {
        h2: "Booking Northwest Stadium transportation",
        paragraphs: [
          "Rates are flat for a direct drop-off and pickup, or hourly for a day that includes tailgating beforehand. Call (877) 609-1919 or book online with the game date and your group size.",
        ],
      },
    ],
    vehicles: VEHICLES,
    faqs: [
      { q: "Can you drop us off right at Northwest Stadium?", a: "Yes, we drop off and pick up near the main gates, avoiding the general parking lot search." },
      { q: "How do you handle the pickup after a Commanders game ends?", a: "Tell us the game's expected end time and we stage the vehicle to be waiting, rather than requiring a call from a crowded lot." },
      { q: "How far is Northwest Stadium from Dulles Airport?", a: "About 50 to 65 minutes, depending on traffic." },
      { q: "Can you handle a tailgate group with coolers and gear?", a: "Yes. A Mercedes Sprinter van comfortably handles a tailgate group's gear along with the group itself." },
      { q: "Can season-ticket holders set up a standing arrangement?", a: "Yes, we set up recurring game-day bookings on request so a regular group does not have to re-coordinate logistics before every home game." },
    ],
    related: [
      { label: "Washington Commanders Game Day Car Service", to: "/blog/washington-commanders-game-day-car-service" },
      { label: "Capital One Arena DC Transportation", to: "/capital-one-arena-dc-transportation" },
      { label: "Nationals Park Transportation", to: "/nationals-park-transportation" },
      { label: "Audi Field Transportation", to: "/audi-field-transportation" },
      { label: "Concert Transportation", to: "/concert-transportation" },
      { label: "Bowie Limo Service", to: "/bowie-limo-service" },
    ],
    schema: { areaServed: ["Landover", "Prince George's County"], serviceType: "Event transportation" },
  },
];
