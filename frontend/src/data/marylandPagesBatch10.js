// Batch 10 (2026-10-21, SEO expansion round 5) — 10 new landing pages: three
// city+corporate-service gap-fills (Tysons, Arlington, Ashburn), two
// city+wedding/prom gap-fills (Herndon wedding, Leesburg prom, Reston prom),
// three non-city "corporate car service by industry" pages (government
// contractors, tech companies, professional services/law/finance), and one
// new event-venue page (Capital One Arena in DC, distinct from the existing
// Capital One Hall page in Tysons). Same entry shape as MARYLAND_PAGES — the
// name is historical, these are DC/VA/MD pages. Lives in its own file.

const VEHICLES = [
  { name: "Mercedes-Benz E-Class", cls: "Business sedan", seats: 3, best: "solo executives and couples" },
  { name: "BMW 7 Series", cls: "First-class sedan", seats: 3, best: "VIP and executive travel" },
  { name: "Lincoln Navigator", cls: "Premium SUV", seats: 6, best: "families and small groups with luggage" },
  { name: "Chevrolet Suburban", cls: "Luxury SUV", seats: 6, best: "airport runs with beach or golf luggage" },
  { name: "Mercedes Sprinter van", cls: "Executive van", seats: 14, best: "wedding parties, corporate teams and groups" },
  { name: "Stretch limousine", cls: "Limousine", seats: 8, best: "proms, weddings and celebrations" },
];

export const MARYLAND_BATCH10 = [
  // ---------------------------------------------------------------------
  // City + corporate car service gap-fills
  // ---------------------------------------------------------------------
  {
    slug: "tysons-corporate-car-service",
    type: "service",
    name: "Tysons",
    badge: "Tysons, VA · Corporate Transportation",
    h1: "Tysons Corporate Car Service",
    metaTitle: "Tysons Corporate Car Service | Executive Transportation VA",
    metaDescription:
      "Licensed corporate car service in Tysons, VA — executive sedans, roadshow fleets and Dulles transfers for Tysons offices. Call (877) 609-1919.",
    stats: [
      { label: "Dulles (IAD)", value: "15–25 minutes, depending on traffic" },
      { label: "Reagan (DCA)", value: "25–40 minutes, depending on traffic" },
      { label: "Billing", value: "Direct invoicing and corporate accounts" },
    ],
    intro: [
      "Tysons is the region's largest office market outside the District, and the corporate transportation here is rarely a single executive heading to the airport. It is a client landing at Dulles for a meeting at a Route 7 office tower, a roadshow moving between three buildings in an afternoon, or a visiting team that needs one invoice instead of eleven rideshare receipts.",
      "We run daily corporate service through Tysons for firms along the Capital Beltway and Route 123 corridor, with Dulles 15 to 25 minutes away for client pickups and Reagan National a reasonable second option for domestic-only trips.",
    ],
    highlights: [
      "Flight-tracked airport pickups for clients and executives landing at Dulles or Reagan National",
      "Multi-stop roadshow service across Tysons' office towers on one hourly reservation",
      "Direct corporate billing and monthly invoicing — no per-ride expense reports",
      "Executive sedans for solo travel, SUVs and Sprinter vans for visiting teams",
      "Coordination with building front desks for scheduled visitor arrivals",
      "Licensed and insured Virginia carrier with 24/7 dispatch",
    ],
    sections: [
      {
        h2: "Client pickups and visitor transportation in Tysons",
        paragraphs: [
          "A client flying into Dulles for a Tysons meeting is met at baggage claim if requested, driven directly to the office, and returned to the airport on a flight-tracked pickup — all billed as one reservation rather than a separate rideshare charge on each leg. We coordinate arrival windows directly with several Tysons buildings' front-desk teams for recurring visitor traffic.",
          "For Reagan National arrivals, the Dulles Toll Road and Route 7 corridor keep Tysons within a reasonable drive, though Dulles remains faster for most Tysons addresses and is the only realistic option for international arrivals.",
        ],
      },
      {
        h2: "Roadshows and multi-stop corporate days",
        paragraphs: [
          "Tysons' density of office towers means a single corporate day often touches three or four buildings — a pitch meeting, a lunch, a second meeting across the street. Hourly, as-directed service keeps one vehicle and chauffeur with the group all day, with belongings staying in the vehicle between stops rather than changing cars or waiting for a new rideshare request outside each building.",
        ],
      },
      {
        h2: "After-hours and weekend corporate travel in Tysons",
        paragraphs: [
          "Tysons' office towers do not go quiet after 6 p.m. — client dinners, weekend site visits and off-hours deal work are common enough in this corridor that our dispatch runs 24/7 rather than business hours only. A late dinner reservation after a long negotiation session or a Saturday visit from an out-of-town team is booked the same way as a weekday meeting run: one confirmed rate, one chauffeur, no scrambling for a rideshare at 10 p.m. outside a restaurant.",
        ],
      },
      {
        h2: "Setting up a Tysons corporate account",
        paragraphs: [
          "Direct billing and monthly invoicing are available for companies that book this corridor regularly, with saved pickup addresses and preferred vehicle class on file so repeat bookings do not start from zero. Call (877) 609-1919 or book online to set up an account or request a single reservation.",
        ],
      },
    ],
    vehicles: VEHICLES,
    faqs: [
      { q: "How far is Tysons from Dulles Airport?", a: "About 15 to 25 minutes depending on traffic, making it one of the fastest corporate airport runs in our service area." },
      { q: "Can you handle a multi-stop roadshow across several Tysons office buildings?", a: "Yes. Hourly, as-directed service keeps one vehicle and chauffeur with your team for the whole day across multiple stops." },
      { q: "Do you offer direct corporate billing?", a: "Yes. We set up direct billing and monthly invoicing for Tysons companies that book regularly, rather than per-ride expense reports." },
      { q: "Can you coordinate arrival times with our building's front desk?", a: "Yes, we regularly confirm visitor arrival windows directly with front-desk and security teams at Tysons office buildings." },
      { q: "What vehicle is right for a visiting team of six?", a: "A luxury SUV comfortably covers six passengers with luggage; for larger teams a Mercedes Sprinter van seats up to 14." },
    ],
    related: [
      { label: "Tysons Limo Service", to: "/tysons-limo-service" },
      { label: "Reston Corporate Car Service", to: "/reston-corporate-car-service" },
      { label: "Arlington Corporate Car Service", to: "/arlington-corporate-car-service" },
      { label: "Tysons, Reston & Herndon Transportation Guide", to: "/tysons-reston-herndon-transportation-guide" },
      { label: "Corporate Travel Guide: Tysons & Reston Corridor", to: "/corporate-travel-guide-tysons-reston-corridor" },
      { label: "IAD to Tysons", to: "/iad-to-tysons" },
    ],
    schema: { areaServed: ["Tysons", "Fairfax County"], serviceType: "Corporate car service" },
  },
  {
    slug: "arlington-corporate-car-service",
    type: "service",
    name: "Arlington",
    badge: "Arlington, VA · Corporate Transportation",
    h1: "Arlington Corporate Car Service",
    metaTitle: "Arlington Corporate Car Service | Executive VA",
    metaDescription:
      "Corporate car service in Arlington, VA — Crystal City, Rosslyn and Pentagon City, flight-tracked Reagan and Dulles transfers. Call (877) 609-1919.",
    stats: [
      { label: "Reagan (DCA)", value: "10–20 minutes, depending on traffic" },
      { label: "Dulles (IAD)", value: "30–45 minutes, depending on traffic" },
      { label: "Billing", value: "Direct invoicing and corporate accounts" },
    ],
    intro: [
      "Arlington runs on a mix of government, defense and corporate traffic — Crystal City, Rosslyn, Pentagon City and the Ballston corridor all sit close to the Pentagon, and a meaningful share of our Arlington bookings involve visitor transportation to facilities with badging or escort requirements rather than an ordinary office lobby.",
      "We run executive sedans for individual travelers, SUVs for small teams, and Sprinter vans for larger visiting delegations, with Reagan National just 10 to 20 minutes away for most Arlington addresses and Dulles the practical choice whenever the itinerary is international.",
    ],
    highlights: [
      "Flight-tracked Reagan National pickups 10 to 20 minutes from most Arlington addresses",
      "Dulles transfers for international arrivals and longer-haul connections",
      "Visitor transportation coordinated with facility badging and security desks",
      "Direct corporate billing and monthly invoicing for recurring accounts",
      "Service across Crystal City, Rosslyn, Pentagon City and Ballston",
      "Licensed and insured Virginia carrier with 24/7 dispatch",
    ],
    sections: [
      {
        h2: "Crystal City, Rosslyn and Pentagon City corporate travel",
        paragraphs: [
          "Arlington's office corridors sit close enough to Reagan National that a flight-tracked pickup is typically the fastest airport connection in our entire Virginia service area, which makes it the default choice for domestic executive travel. For international itineraries, Dulles remains the right call, and we build the extra drive time into the schedule rather than treating it as an afterthought.",
        ],
      },
      {
        h2: "Visitor transportation near Pentagon-adjacent facilities",
        paragraphs: [
          "A portion of our Arlington corporate traffic involves visitors to buildings near the Pentagon with their own badging, visitor-log or escort requirements. A scheduled chauffeured pickup with a known driver and confirmed arrival window supports that process directly, and we coordinate timing with facility front desks on request rather than leaving the handoff to chance with an unscheduled rideshare drop-off.",
        ],
      },
      {
        h2: "Serving Crystal City, Rosslyn and Ballston specifically",
        paragraphs: [
          "Crystal City's mix of federal agencies and defense contractors, Rosslyn's law and consulting towers along the Potomac, and Ballston's tech and association offices each have slightly different drop-off and building-access patterns, and a chauffeur who runs these corridors daily knows which entrance to use and where a scheduled pickup can actually stage without circling the block. We cover all three as part of routine Arlington corporate service, not as a special request.",
        ],
      },
      {
        h2: "Setting up an Arlington corporate account",
        paragraphs: [
          "Companies booking this corridor regularly can set up direct billing, saved pickup addresses and a preferred vehicle class so repeat trips do not start from scratch each time. Call (877) 609-1919 or book online for a single reservation or a standing account.",
        ],
      },
    ],
    vehicles: VEHICLES,
    faqs: [
      { q: "How far is Arlington from Reagan National Airport?", a: "About 10 to 20 minutes depending on traffic and the specific Arlington neighborhood — one of the shortest airport connections in our Virginia service area." },
      { q: "Should I use Dulles or Reagan for an Arlington pickup?", a: "Reagan National for domestic flights; Dulles for international itineraries, where the extra drive time is worth it for the route options." },
      { q: "Can you coordinate with a facility's security or front desk for a visitor pickup?", a: "Yes, we regularly confirm arrival windows directly with front-desk and security teams at Arlington-area facilities with visitor or badging requirements." },
      { q: "Do you serve Crystal City and Pentagon City specifically?", a: "Yes, these are among the Arlington corridors we serve most regularly for corporate travel." },
      { q: "Can our company set up direct billing?", a: "Yes. We offer direct billing and monthly invoicing for corporate accounts that book Arlington transportation regularly." },
    ],
    related: [
      { label: "Arlington Limo Service", to: "/arlington-limo-service" },
      { label: "Tysons Corporate Car Service", to: "/tysons-corporate-car-service" },
      { label: "Government Contractor Car Service", to: "/government-contractor-car-service" },
      { label: "IAD to Arlington", to: "/iad-to-arlington" },
      { label: "IAD to DCA Airport Transfer", to: "/iad-to-dca-airport" },
      { label: "Limo Service Near Arlington National Cemetery", to: "/limo-service-near-arlington-national-cemetery" },
    ],
    schema: { areaServed: ["Arlington", "Arlington County"], serviceType: "Corporate car service" },
  },
  {
    slug: "ashburn-corporate-car-service",
    type: "service",
    name: "Ashburn",
    badge: "Ashburn, VA · Corporate Transportation",
    h1: "Ashburn Corporate Car Service",
    metaTitle: "Ashburn Corporate Car Service | Data Center Alley VA",
    metaDescription:
      "Corporate car service in Ashburn, VA — Data Center Alley client visits, tech-corridor transportation and quick Dulles transfers. Call (877) 609-1919.",
    stats: [
      { label: "Dulles (IAD)", value: "15–25 minutes, depending on traffic" },
      { label: "Reagan (DCA)", value: "45–60 minutes, depending on traffic" },
      { label: "Billing", value: "Direct invoicing and corporate accounts" },
    ],
    intro: [
      "Ashburn is the center of Data Center Alley — the densest concentration of data center campuses in the world — and the corporate traffic here looks different from a typical downtown office run: client and vendor visits to secure facility campuses, technical teams flying in for short site visits, and executives connecting through Dulles, 15 to 25 minutes away on the Dulles Greenway.",
      "The corridor along Loudoun County Parkway, Waxpool Road and Pacific Boulevard has grown well beyond data centers alone, adding corporate offices and professional-services firms that serve that industry directly — our corporate fleet covers all of it as one service area rather than treating data center visits as a separate category from ordinary office travel.",
    ],
    highlights: [
      "Flight-tracked Dulles pickups 15 to 25 minutes from Ashburn's data center campuses",
      "Client and vendor visitor transportation coordinated with facility security desks",
      "Direct corporate billing and monthly invoicing for recurring accounts",
      "Sedans for individual engineers and executives, SUVs and Sprinters for visiting teams",
      "Service throughout the Loudoun County Parkway and Waxpool Road corridor",
      "Licensed and insured Virginia carrier with 24/7 dispatch",
    ],
    sections: [
      {
        h2: "Data Center Alley client and vendor transportation",
        paragraphs: [
          "Visits to data center campuses in Ashburn often involve facility security requirements beyond a typical office lobby — advance notice, visitor logging, and sometimes an escort from the parking area. A scheduled chauffeured pickup with a confirmed arrival window supports that process, and we coordinate directly with several Ashburn campuses' security teams for recurring vendor and client visits.",
        ],
      },
      {
        h2: "Short technical site visits and Dulles connections",
        paragraphs: [
          "A large share of Ashburn's corporate travel is a short, focused trip: a technical team flying in for a one- or two-day site visit, with Dulles only 15 to 25 minutes away on the Greenway. We run that exact pattern regularly — airport pickup, campus visit, return flight — with flight tracking handling any schedule change automatically.",
        ],
      },
      {
        h2: "Combining Ashburn with other Loudoun tech-corridor stops",
        paragraphs: [
          "A single corporate day in Ashburn often extends into neighboring Sterling or Herndon, or pairs a data center visit with a meeting at a vendor's Reston office later the same afternoon. Hourly, as-directed service keeps one vehicle with the group for stops like this rather than booking a separate transfer for each leg.",
        ],
      },
      {
        h2: "Setting up an Ashburn corporate account",
        paragraphs: [
          "Companies and campuses that book this corridor regularly can set up direct billing and saved pickup details so repeat visits do not require re-explaining logistics each time. Call (877) 609-1919 or book online.",
        ],
      },
    ],
    vehicles: VEHICLES,
    faqs: [
      { q: "How far is Ashburn from Dulles Airport?", a: "About 15 to 25 minutes via the Dulles Greenway, depending on traffic — one of the shortest corporate airport runs in our service area." },
      { q: "Can you coordinate with a data center campus's security desk?", a: "Yes, we regularly confirm visitor arrival windows directly with security teams at Ashburn data center campuses." },
      { q: "Do you handle short technical site-visit trips?", a: "Yes, this is a common pattern we run — an airport pickup, a campus visit, and a return flight, all flight-tracked." },
      { q: "Can our company set up direct billing for Ashburn trips?", a: "Yes. We offer direct billing and monthly invoicing for corporate accounts that book Ashburn transportation regularly." },
      { q: "Is Reagan National a practical option for Ashburn corporate travel?", a: "Generally no — Reagan runs 45 to 60 minutes from Ashburn. Dulles is the practical choice for nearly all Ashburn corporate trips." },
    ],
    related: [
      { label: "Ashburn Limo Service", to: "/ashburn-limo-service" },
      { label: "Ashburn Wedding Limo Service", to: "/ashburn-wedding-limo-service" },
      { label: "Data Center Alley: Client & Vendor Transportation", to: "/blog/data-center-alley-loudoun-transportation" },
      { label: "Tech Company Corporate Car Service", to: "/tech-company-corporate-car-service" },
      { label: "IAD to Ashburn, VA", to: "/iad-to-ashburn-va" },
      { label: "Loudoun County Car Service", to: "/loudoun-county-car-service" },
    ],
    schema: { areaServed: ["Ashburn", "Loudoun County"], serviceType: "Corporate car service" },
  },
  // ---------------------------------------------------------------------
  // City + wedding/prom gap-fills
  // ---------------------------------------------------------------------
  {
    slug: "herndon-wedding-limo-service",
    type: "service",
    name: "Herndon",
    badge: "Herndon, VA · Wedding Transportation",
    h1: "Herndon Limo Service for Weddings",
    metaTitle: "Herndon Wedding Limo Service | VA",
    metaDescription:
      "Chauffeured wedding transportation in Herndon, VA — getting-ready suites, ceremony venues and guest shuttles, with Dulles minutes away. Call (877) 609-1919.",
    stats: [
      { label: "Dulles (IAD)", value: "10–20 minutes, depending on traffic" },
      { label: "Reagan (DCA)", value: "40–55 minutes, depending on traffic" },
      { label: "Pricing", value: "Hourly, as-directed wedding packages" },
    ],
    intro: [
      "Herndon's historic downtown and its position right at the edge of Dulles make it a practical base for a wedding day that also needs to handle out-of-town guests flying in. We build Herndon wedding days as one hourly reservation — getting ready, ceremony, reception and a timed exit — with the chauffeur and vehicle dedicated to the wedding party throughout.",
      "Because Herndon sits only 10 to 20 minutes from Dulles, it is one of the easiest Northern Virginia towns to combine a wedding-day booking with group airport pickups for family and wedding-party members arriving the day before.",
    ],
    highlights: [
      "Hourly wedding-day packages covering getting ready through the reception exit",
      "10 to 20 minute Dulles pickups for out-of-town wedding parties",
      "Guest shuttle coordination with Sprinter vans for venues with limited parking",
      "Decoration-ready stretch limousines for the bridal party",
      "Coordination with downtown Herndon venues and nearby Reston and Tysons reception sites",
      "Licensed and insured Virginia carrier with a dedicated day-of coordinator",
    ],
    sections: [
      {
        h2: "Building the Herndon wedding-day schedule",
        paragraphs: [
          "Most Herndon weddings move between a getting-ready location, a ceremony venue, and a reception that is sometimes in Herndon itself and sometimes in neighboring Reston or Tysons. We build the schedule around the photographer's shot list and the ceremony start time, with buffer built in so one delay does not cascade through the rest of the day.",
        ],
      },
      {
        h2: "Airport pickups for out-of-town wedding guests",
        paragraphs: [
          "Herndon's proximity to Dulles — 10 to 20 minutes depending on traffic — makes it practical to run group airport pickups for the wedding party and close family the day before the wedding, rather than leaving each guest to arrange their own ride. We coordinate these pickups against each traveler's actual flight, adjusting automatically for delays.",
        ],
      },
      {
        h2: "What to expect on the wedding day itself",
        paragraphs: [
          "One chauffeur and one vehicle are dedicated to your reservation for the full booked window — the same driver who picked up the wedding party in the morning is the one staged at the reception exit that night. We confirm the day's full schedule in writing before the date, including buffer time between stops, so the wedding party is not the one managing logistics on the actual day.",
        ],
      },
      {
        h2: "Vehicles and booking for a Herndon wedding",
        paragraphs: [
          "A stretch limousine suits a bridal party of six to eight; a Mercedes Sprinter van handles a larger wedding party or a guest shuttle route. Rates are hourly and confirmed in writing before the date is booked. Call (877) 609-1919 or book online with your venue and timeline.",
        ],
      },
    ],
    vehicles: VEHICLES,
    faqs: [
      { q: "How far is Herndon from Dulles Airport?", a: "About 10 to 20 minutes depending on traffic, making it practical to run group airport pickups for wedding guests the day before." },
      { q: "Can you shuttle guests between a hotel and the ceremony venue?", a: "Yes. A Mercedes Sprinter van is the most common choice for a Herndon guest shuttle, especially at venues with limited on-site parking." },
      { q: "Do you serve reception venues in Reston and Tysons as well?", a: "Yes, Herndon wedding bookings frequently include a reception stop in neighboring Reston or Tysons on the same reservation." },
      { q: "Is wedding transportation billed hourly or as a flat rate?", a: "Hourly, as-directed service for the wedding day, confirmed in writing before you book." },
      { q: "How far in advance should we book a Herndon wedding date?", a: "As early as possible, especially for a Saturday between April and November, which is this region's peak wedding season." },
    ],
    related: [
      { label: "Herndon Limo Service", to: "/herndon-limo-service" },
      { label: "Reston Wedding Limo Service", to: "/reston-wedding-limo-service" },
      { label: "Herndon & the Dulles Tech Corridor Guide", to: "/blog/herndon-dulles-tech-corridor-transportation" },
      { label: "Top 10 Wedding Venues Near Dulles & NoVA", to: "/top-10-wedding-venues-near-dulles-nova" },
      { label: "IAD to Herndon", to: "/iad-to-herndon" },
      { label: "Wedding Limo Service", to: "/wedding-limo" },
    ],
    schema: { areaServed: ["Herndon", "Fairfax County"], serviceType: "Wedding limousine service" },
  },
  {
    slug: "leesburg-prom-limo-service",
    type: "service",
    name: "Leesburg",
    badge: "Leesburg, VA · Prom Transportation",
    h1: "Leesburg Prom Limo Service",
    metaTitle: "Leesburg Prom Limo Service | Loudoun County, VA",
    metaDescription:
      "Safe, licensed prom limo and party bus service in Leesburg, VA — group pricing, strict no-alcohol policy and parent-confirmed schedules. Call (877) 609-1919.",
    stats: [
      { label: "Group size", value: "Sedans up to Sprinter vans (14 passengers)" },
      { label: "Pricing", value: "Hourly, confirmed in writing before you book" },
      { label: "Policy", value: "Strict no-alcohol policy, enforced" },
    ],
    intro: [
      "Leesburg prom groups typically run a similar pattern — a photo stop at a family home, dinner in downtown Leesburg or a drive into DC, the dance itself, and sometimes an after-party. We book the whole night as one hourly reservation with a licensed, background-checked chauffeur and a written schedule confirmed with parents in advance.",
    ],
    highlights: [
      "Hourly prom-night packages covering photos, dinner, the dance and after-party",
      "Stretch limousines for groups of six to eight; Sprinter vans for larger friend groups",
      "Strict no-alcohol policy inside the vehicle, enforced by the chauffeur",
      "Fixed pickup and drop-off windows communicated to parents in writing",
      "Direct dispatch phone line for parents during the night",
      "Licensed and insured Virginia carrier serving Loudoun County high schools",
    ],
    sections: [
      {
        h2: "Planning a Leesburg prom night",
        paragraphs: [
          "Most groups start with a photo stop, move to dinner in downtown Leesburg or drive the 30 to 45 minutes into DC for a different kind of night, then head to the dance with a return trip or after-party planned for later. We confirm this full sequence with the group and with parents before the date, so the schedule is set rather than improvised the night of.",
        ],
      },
      {
        h2: "Vehicle choice for Leesburg prom groups",
        paragraphs: [
          "A stretch limousine comfortably covers six to eight students. Larger groups of ten to fourteen are better served by a Mercedes Sprinter van, which keeps everyone together for every stop rather than splitting into two vehicles with two separate pickup times — a common cause of a late arrival at the dance.",
        ],
      },
      {
        h2: "What parents should expect from us",
        paragraphs: [
          "Before the date, we send a written confirmation of the full schedule, the chauffeur's and dispatch's contact number, and a plain statement of our conduct policy, so parents have something concrete to review rather than taking a verbal assurance. If anything about the plan changes the day of — a dinner reservation moved, an after-party added — we ask that a parent or the group lead calls to update it rather than improvising with the chauffeur directly.",
        ],
      },
      {
        h2: "Safety policy and booking",
        paragraphs: [
          "Our no-alcohol policy is enforced by the chauffeur, not just stated in writing, and dispatch keeps a direct phone line open for parents throughout the night. Loudoun County prom dates cluster in April and May and fill quickly for larger vehicles — call (877) 609-1919 as soon as your group has a date and headcount.",
        ],
      },
    ],
    vehicles: VEHICLES,
    faqs: [
      { q: "What is your alcohol policy for prom bookings?", a: "A strict no-alcohol policy is enforced inside the vehicle by the chauffeur, not just stated as a rule." },
      { q: "Is a limo or a Sprinter van better for a group of twelve?", a: "A Sprinter van. It keeps a larger group together for every stop, avoiding the split pickup times that come with two smaller vehicles." },
      { q: "Can parents get the schedule and a direct phone number?", a: "Yes. We confirm the full night's schedule with parents in writing and provide a direct dispatch line to call if plans change." },
      { q: "How far in advance should a Leesburg prom group book?", a: "As soon as the date is set — April and May bookings fill quickly, especially for larger vehicles." },
      { q: "Can you add a stop for dinner in DC before the dance?", a: "Yes, hourly as-directed service covers multiple stops on one reservation, including a dinner trip into the District." },
    ],
    related: [
      { label: "Leesburg Limo Service", to: "/leesburg-limo-service" },
      { label: "Leesburg Wedding Limo Service", to: "/leesburg-wedding-limo-service" },
      { label: "Reston Prom Limo Service", to: "/reston-prom-limo-service" },
      { label: "Prom & Homecoming Limo Safety Guide", to: "/blog/prom-homecoming-limo-safety-guide-northern-virginia-parents" },
      { label: "Prom Limo Service", to: "/prom-limo" },
      { label: "Loudoun County Car Service", to: "/loudoun-county-car-service" },
    ],
    schema: { areaServed: ["Leesburg", "Loudoun County"], serviceType: "Prom limousine service" },
  },
  {
    slug: "reston-prom-limo-service",
    type: "service",
    name: "Reston",
    badge: "Reston, VA · Prom Transportation",
    h1: "Reston Prom Limo Service",
    metaTitle: "Reston Prom Limo Service | Fairfax County, VA",
    metaDescription:
      "Safe, licensed prom limo and party bus service in Reston, VA — group pricing, strict no-alcohol policy and parent-confirmed schedules. Call (877) 609-1919.",
    stats: [
      { label: "Group size", value: "Sedans up to Sprinter vans (14 passengers)" },
      { label: "Pricing", value: "Hourly, confirmed in writing before you book" },
      { label: "Policy", value: "Strict no-alcohol policy, enforced" },
    ],
    intro: [
      "Reston prom groups often build the night around Reston Town Center — dinner, photos near the fountain, and sometimes the dance itself nearby — before heading to the school or an after-party. We run the whole night as one hourly reservation with a written schedule confirmed with parents beforehand.",
      "Because several Reston-area high schools share this same general pattern, we are used to coordinating multiple group bookings for the same prom night — different friend groups, same date, each with their own confirmed vehicle and schedule rather than one provider trying to stretch too thin across the evening.",
    ],
    highlights: [
      "Hourly prom-night packages covering photos, dinner, the dance and after-party",
      "Stretch limousines for groups of six to eight; Sprinter vans for larger friend groups",
      "Strict no-alcohol policy inside the vehicle, enforced by the chauffeur",
      "Fixed pickup and drop-off windows communicated to parents in writing",
      "Direct dispatch phone line for parents during the night",
      "Licensed and insured Virginia carrier serving Reston-area high schools",
    ],
    sections: [
      {
        h2: "Planning a Reston prom night",
        paragraphs: [
          "A common Reston pattern is a photo stop at a family home, dinner at Reston Town Center, the dance, and an after-party that sometimes runs toward midnight. We confirm this full sequence and the exact times with parents before the date rather than leaving it loose.",
        ],
      },
      {
        h2: "Vehicle choice for Reston prom groups",
        paragraphs: [
          "A stretch limousine comfortably covers six to eight students; larger groups of ten to fourteen are better served by a Mercedes Sprinter van, which keeps the whole group together for every stop instead of splitting across two vehicles with two pickup times.",
        ],
      },
      {
        h2: "What parents should expect from us",
        paragraphs: [
          "Before the date, we send a written confirmation of the full schedule, the chauffeur's and dispatch's contact number, and a plain statement of our conduct policy, so parents have something concrete to review rather than taking a verbal assurance. If anything about the plan changes the day of — a dinner reservation moved, an after-party added — we ask that a parent or the group lead calls to update it rather than improvising with the chauffeur directly.",
        ],
      },
      {
        h2: "Safety policy and booking",
        paragraphs: [
          "Our no-alcohol policy is enforced by the chauffeur, and dispatch keeps a direct line open for parents all night. Reston-area prom dates cluster in April and May — call (877) 609-1919 as soon as your group has a date and headcount.",
        ],
      },
    ],
    vehicles: VEHICLES,
    faqs: [
      { q: "What is your alcohol policy for prom bookings?", a: "A strict no-alcohol policy is enforced inside the vehicle by the chauffeur, not just stated as a rule." },
      { q: "Can we build the night around Reston Town Center?", a: "Yes, a Reston Town Center dinner or photo stop is one of the most common parts of a Reston prom-night itinerary." },
      { q: "Is a limo or a Sprinter van better for a group of twelve?", a: "A Sprinter van. It keeps a larger group together for every stop, avoiding the split pickup times that come with two smaller vehicles." },
      { q: "Can parents get the schedule and a direct phone number?", a: "Yes. We confirm the full night's schedule with parents in writing and provide a direct dispatch line to call if plans change." },
      { q: "How far in advance should a Reston prom group book?", a: "As soon as the date is set — April and May bookings fill quickly, especially for larger vehicles." },
    ],
    related: [
      { label: "Reston Limo Service", to: "/reston-limo-service" },
      { label: "Reston Wedding Limo Service", to: "/reston-wedding-limo-service" },
      { label: "Leesburg Prom Limo Service", to: "/leesburg-prom-limo-service" },
      { label: "Reston Town Center Event Transportation", to: "/blog/reston-town-center-event-transportation" },
      { label: "Prom & Homecoming Limo Safety Guide", to: "/blog/prom-homecoming-limo-safety-guide-northern-virginia-parents" },
      { label: "Prom Limo Service", to: "/prom-limo" },
    ],
    schema: { areaServed: ["Reston", "Fairfax County"], serviceType: "Prom limousine service" },
  },
  // ---------------------------------------------------------------------
  // Corporate car service by industry (non-city "service" pages)
  // ---------------------------------------------------------------------
  {
    slug: "government-contractor-car-service",
    type: "service",
    name: "Government Contractor Transportation",
    badge: "Northern Virginia · Government & Defense Contractors",
    h1: "Government Contractor Car Service in Northern Virginia",
    metaTitle: "Government Contractor Car Service | Northern Virginia",
    metaDescription:
      "Licensed corporate car service for NoVA government contractors — facility visitor coordination, GSA SmartPay billing, duty of care. Call (877) 609-1919.",
    stats: [
      { label: "Service area", value: "Tysons, Reston, Herndon, Arlington & Alexandria" },
      { label: "Billing", value: "Direct invoicing & GSA SmartPay compatible" },
      { label: "Dispatch", value: "24/7 with facility-coordinated arrivals" },
    ],
    intro: [
      "Government and defense contractors across the Tysons-Reston-Herndon corridor and Arlington's Pentagon-adjacent office market operate under a different set of expectations than ordinary corporate travel — facility badging and visitor logs, security-clearance travelers with a duty-of-care obligation attached, and expense reconciliation that needs to hold up under an audit. We built our corporate account structure around those requirements.",
      "A licensed, commercially insured Virginia carrier with background-checked chauffeurs is a defensible standard for contractors who cannot simply default to an anonymous rideshare driver for a client visit or a cleared employee's airport transfer.",
    ],
    highlights: [
      "Facility visitor transportation coordinated with front-desk and security teams",
      "Direct billing and GSA SmartPay-compatible invoicing for expense reconciliation",
      "Flight-tracked airport transfers for executives and cleared employees",
      "Licensed and insured Virginia carrier with background-checked chauffeurs",
      "Service throughout Tysons, Reston, Herndon, Arlington and Alexandria",
      "24/7 dispatch able to redirect a vehicle on short notice for a schedule change",
    ],
    sections: [
      {
        h2: "Facility access, visitor logs and duty of care",
        paragraphs: [
          "Many contractor sites in this corridor require visitors to be announced in advance, logged on arrival, and sometimes escorted from the parking area — a scheduled chauffeured pickup with a known driver and confirmed arrival window supports that process directly in a way a rideshare drop-off cannot. Employees and visitors holding security clearances also carry additional travel considerations, and the company retains a duty-of-care obligation for them in transit; a licensed carrier with dispatch oversight gives a travel manager a defensible, documented answer if a trip is ever questioned.",
        ],
      },
      {
        h2: "GSA SmartPay and expense compliance",
        paragraphs: [
          "A confirmed flat rate invoiced to a company account or billed against a GSA SmartPay card reconciles far more cleanly than a stack of individual rideshare receipts with variable surge pricing attached. We set up direct billing and monthly invoicing specifically so travel managers are not reconciling one-off app charges against a program budget line.",
        ],
      },
      {
        h2: "Working with prime contractors and subcontractor teams",
        paragraphs: [
          "Large programs in this corridor often involve a prime contractor and several subcontractor teams moving between the same facilities over the life of a contract — a pattern that benefits from one consistent transportation vendor rather than each company booking separately. We set up shared or linked accounts for program teams on request, so visitor transportation stays consistent across every company involved in a single engagement.",
        ],
      },
      {
        h2: "Setting up a government contractor account",
        paragraphs: [
          "If you are drafting a transportation vendor requirement, ask for proof of Virginia carrier licensing and commercial insurance, a named dispatch contact, billing compatibility with your finance system, flight tracking, and a documented driver background-check standard. Call (877) 609-1919 to set up a corporate account or request a single reservation.",
        ],
      },
    ],
    vehicles: VEHICLES,
    faqs: [
      { q: "Can you coordinate with our facility's security or visitor desk?", a: "Yes, we regularly confirm arrival windows directly with front-desk and security teams at contractor facilities with visitor logging or badging requirements." },
      { q: "Do you support GSA SmartPay or direct corporate billing?", a: "Yes. We set up direct billing and monthly invoicing, including GSA SmartPay-compatible billing, for corporate accounts." },
      { q: "Is a licensed chauffeur held to a different standard than a rideshare driver?", a: "Yes. A licensed Virginia carrier maintains commercial passenger insurance and background-checked chauffeurs, distinct from a rideshare platform's driver vetting and personal-auto insurance." },
      { q: "Can dispatch redirect a vehicle if a meeting runs long or a facility change happens last-minute?", a: "Yes, a dispatched chauffeur service can be redirected in real time, unlike a rideshare request that has to be cancelled and restarted." },
      { q: "What should go into a transportation vendor RFP for a government contractor?", a: "Proof of licensing and insurance, a named dispatch contact, billing compatibility, flight tracking, and a documented driver background-check standard." },
    ],
    related: [
      { label: "Tysons Corporate Car Service", to: "/tysons-corporate-car-service" },
      { label: "Arlington Corporate Car Service", to: "/arlington-corporate-car-service" },
      { label: "Government Contractor & Tysons Campus Transportation", to: "/blog/government-contractor-tysons-corporate-campus-transportation" },
      { label: "Corporate Car Service vs. Rideshare for NoVA Government Contractors", to: "/blog/corporate-car-service-vs-rideshare-government-contractors-nova" },
      { label: "Corporate Services", to: "/corporate" },
      { label: "Law Firm, Consulting & Finance Car Service", to: "/professional-services-corporate-car-service" },
    ],
    schema: { areaServed: ["Tysons", "Reston", "Herndon", "Arlington", "Alexandria"], serviceType: "Corporate car service" },
  },
  {
    slug: "tech-company-corporate-car-service",
    type: "service",
    name: "Tech Company Corporate Transportation",
    badge: "Dulles Tech Corridor · Tech Company Transportation",
    h1: "Tech Company Corporate Car Service in the Dulles Tech Corridor",
    metaTitle: "Tech Company Corporate Car Service | Dulles Tech Corridor",
    metaDescription:
      "Corporate car service for Herndon, Reston and Ashburn tech companies — client visits, Data Center Alley site tours and Dulles transfers. Call (877) 609-1919.",
    stats: [
      { label: "Service area", value: "Herndon, Reston, Ashburn & Data Center Alley" },
      { label: "Dulles (IAD)", value: "10–25 minutes from most corridor addresses" },
      { label: "Billing", value: "Direct invoicing and corporate accounts" },
    ],
    intro: [
      "The Herndon-Reston-Ashburn stretch of the Dulles Toll Road and Greenway is one of the densest technology corridors in the country — cloud infrastructure, data centers, telecom and enterprise software companies sit within minutes of each other and of Dulles itself. We run daily transportation for client visits, candidate interviews, and technical site tours across this corridor.",
      "Because these companies frequently host out-of-town visitors on compressed schedules — a one-day site visit, a same-day round trip for a key meeting — reliability on the airport leg matters as much as the office-to-office driving. A flight-tracked pickup removes the single biggest variable in that kind of day.",
    ],
    highlights: [
      "Client and investor pickups flight-tracked directly from Dulles",
      "Data Center Alley site-visit transportation coordinated with facility security",
      "Candidate and executive interview transportation across Herndon, Reston and Ashburn",
      "Direct corporate billing and monthly invoicing for recurring accounts",
      "Multi-stop service for a single day touching several corridor campuses",
      "Licensed and insured Virginia carrier with 24/7 dispatch",
    ],
    sections: [
      {
        h2: "Client and investor transportation for tech companies",
        paragraphs: [
          "A client or investor flying into Dulles for a meeting at a Herndon, Reston or Ashburn campus is met at baggage claim if requested and driven directly to the office, with the return flight flight-tracked automatically. We run this exact trip daily across the corridor and bill it as one invoice rather than a separate rideshare charge per leg.",
        ],
      },
      {
        h2: "Data center and campus site visits",
        paragraphs: [
          "Technical site visits to data center campuses in Ashburn's Data Center Alley often involve facility security requirements — advance notice, visitor logging, sometimes an escort. We coordinate directly with several campuses' security teams for recurring vendor, client and partner visits.",
        ],
      },
      {
        h2: "Supporting fast-growing teams and board visits",
        paragraphs: [
          "A fast-growing tech company's transportation needs change quickly — a board visit one month, a round of onsite interviews the next, a sudden push of customer visits after a product launch. We scale fleet availability to that kind of variable schedule rather than requiring a fixed monthly commitment, which matters more to a growing company than to an established enterprise with a predictable travel calendar.",
        ],
      },
      {
        h2: "Setting up a corridor-wide corporate account",
        paragraphs: [
          "Companies with offices spread across Herndon, Reston and Ashburn can set up a single corporate account covering the whole corridor, with saved addresses for each office and direct billing across all of them. Call (877) 609-1919 or book online.",
        ],
      },
    ],
    vehicles: VEHICLES,
    faqs: [
      { q: "Do you serve companies across Herndon, Reston and Ashburn under one account?", a: "Yes, a single corporate account can cover multiple office addresses across the corridor with one invoice." },
      { q: "Can you coordinate a data center site visit with facility security?", a: "Yes, we regularly confirm visitor arrival windows directly with security teams at Data Center Alley campuses." },
      { q: "How close is this corridor to Dulles?", a: "Most addresses in Herndon, Reston and Ashburn are 10 to 25 minutes from Dulles, depending on traffic." },
      { q: "Can you handle candidate interview transportation?", a: "Yes, we run flight-tracked airport pickups for candidates and executives flying in for interviews across the corridor." },
      { q: "Do you offer direct billing for tech companies?", a: "Yes. We set up direct billing and monthly invoicing for corporate accounts booking this corridor regularly." },
    ],
    related: [
      { label: "Herndon & the Dulles Tech Corridor Guide", to: "/blog/herndon-dulles-tech-corridor-transportation" },
      { label: "Ashburn Corporate Car Service", to: "/ashburn-corporate-car-service" },
      { label: "Data Center Alley: Client & Vendor Transportation", to: "/blog/data-center-alley-loudoun-transportation" },
      { label: "Reston Corporate Car Service", to: "/reston-corporate-car-service" },
      { label: "Tysons Corporate Car Service", to: "/tysons-corporate-car-service" },
      { label: "Corporate Services", to: "/corporate" },
    ],
    schema: { areaServed: ["Herndon", "Reston", "Ashburn", "Loudoun County"], serviceType: "Corporate car service" },
  },
  {
    slug: "professional-services-corporate-car-service",
    type: "service",
    name: "Law Firm, Consulting & Finance Transportation",
    badge: "Tysons & DC · Law, Consulting & Finance",
    h1: "Law Firm, Consulting & Finance Corporate Car Service",
    metaTitle: "Law Firm & Consulting Corporate Car Service | Tysons & DC",
    metaDescription:
      "Corporate car service for law, consulting and finance firms in Tysons and DC — client-facing transportation that matches the standard. Call (877) 609-1919.",
    stats: [
      { label: "Service area", value: "Tysons, DC, Arlington & Alexandria" },
      { label: "Fleet", value: "Mercedes-Benz & BMW executive sedans" },
      { label: "Billing", value: "Direct invoicing and corporate accounts" },
    ],
    intro: [
      "Law firm partners, management consultants and financial services executives all share a common requirement that a generic corporate car page does not fully address: the car itself is part of the client impression, not just a logistics problem. A partner arriving to a closing, a consultant meeting a client team, or a banker hosting a visiting executive all need transportation that matches the standard of the meeting.",
    ],
    highlights: [
      "Executive sedans — Mercedes-Benz E-Class, S-Class and BMW 7 Series — for partner and client travel",
      "Flight-tracked airport pickups for visiting clients and executives",
      "Direct corporate billing and monthly invoicing for firm accounts",
      "Multi-stop service for client visits spanning Tysons, DC and Arlington in one day",
      "Discreet, professional chauffeurs accustomed to confidential conversations in transit",
      "Licensed and insured Virginia carrier with 24/7 dispatch",
    ],
    sections: [
      {
        h2: "Client-facing transportation for law and consulting firms",
        paragraphs: [
          "When a firm sends a car for a client or a visiting partner, the vehicle and the chauffeur's professionalism are part of how that relationship is perceived. We run executive sedans — Mercedes-Benz S-Class and BMW 7 Series among them — specifically for this kind of trip, with chauffeurs accustomed to quiet, confidential transit between a client meeting and the next appointment.",
        ],
      },
      {
        h2: "Multi-stop days across Tysons, DC and Arlington",
        paragraphs: [
          "A single client day for a law firm or consulting team often touches a Tysons office, a DC meeting, and a dinner reservation — hourly, as-directed service keeps one vehicle and chauffeur with the group throughout rather than booking three separate rideshares with three separate billing records.",
        ],
      },
      {
        h2: "Billing and confidentiality for client engagements",
        paragraphs: [
          "Engagement-based billing is common for law and consulting work, and we can structure invoices by matter or project code on request so transportation costs can be allocated to the correct client engagement rather than appearing as an unexplained line item on a firm-wide account. Chauffeurs on these bookings are briefed to treat in-vehicle conversation as confidential, consistent with the standard firms already hold for other vendors with client access.",
        ],
      },
      {
        h2: "Setting up a firm-wide corporate account",
        paragraphs: [
          "Firms booking this corridor regularly can set up direct billing and a standing account with saved pickup preferences for partners and visiting clients alike. Call (877) 609-1919 or book online to set it up.",
        ],
      },
    ],
    vehicles: VEHICLES,
    faqs: [
      { q: "Do you serve law firms, consulting firms and financial services companies?", a: "Yes, this is a common client base for our executive sedan fleet across Tysons, DC and Arlington." },
      { q: "Can you run a single reservation covering multiple client stops in one day?", a: "Yes, hourly as-directed service covers multiple stops across Tysons, DC and Arlington on one reservation." },
      { q: "Are your chauffeurs accustomed to confidential client conversations in transit?", a: "Yes, our chauffeurs are trained for discreet, professional service appropriate to client-facing and confidential business travel." },
      { q: "Can our firm set up direct billing?", a: "Yes. We offer direct billing and monthly invoicing for firm-wide corporate accounts." },
      { q: "What vehicles do you use for partner and executive client travel?", a: "Primarily Mercedes-Benz E-Class and S-Class sedans and the BMW 7 Series, with SUVs and Sprinter vans available for larger groups." },
    ],
    related: [
      { label: "Law Firm Client Transportation in Tysons and DC", to: "/blog/law-firm-client-transportation-tysons-dc" },
      { label: "Government Contractor Car Service", to: "/government-contractor-car-service" },
      { label: "Tysons Corporate Car Service", to: "/tysons-corporate-car-service" },
      { label: "Arlington Corporate Car Service", to: "/arlington-corporate-car-service" },
      { label: "Corporate Car Service vs. Rideshare", to: "/corporate-car-service-vs-rideshare" },
      { label: "Corporate Services", to: "/corporate" },
    ],
    schema: { areaServed: ["Tysons", "Washington, DC", "Arlington", "Alexandria"], serviceType: "Corporate car service" },
  },
  // ---------------------------------------------------------------------
  // New event-venue page
  // ---------------------------------------------------------------------
  {
    slug: "capital-one-arena-dc-transportation",
    type: "event",
    name: "Capital One Arena",
    badge: "Washington, DC · Sports & Concerts",
    h1: "Limo Service to Capital One Arena in Washington, DC",
    metaTitle: "Limo Service to Capital One Arena | Washington, DC",
    metaDescription:
      "Chauffeured car service to Capital One Arena in DC — Capitals, Wizards and concert transportation from Dulles, Virginia and Maryland. Call (877) 609-1919.",
    stats: [
      { label: "Location", value: "Chinatown / Penn Quarter, Washington, DC" },
      { label: "Dulles (IAD)", value: "35–50 minutes, depending on traffic" },
      { label: "Pricing", value: "Flat rate or hourly, confirmed in writing" },
    ],
    intro: [
      "Capital One Arena in downtown DC's Chinatown and Penn Quarter neighborhood hosts the Washington Capitals, the Washington Wizards and a steady calendar of major touring concerts, and it shares the same end-of-night problem every packed downtown venue has: a parking garage exit that can take longer than the drive home. A chauffeured pickup staged for your actual exit time solves that directly.",
      "We run game-night and concert transportation to Capital One Arena from Dulles, Northern Virginia and Maryland regularly, with a drop-off right at the venue rather than a long walk from a satellite garage.",
    ],
    highlights: [
      "Door-to-door drop-off near Capital One Arena's main entrances",
      "Pickup staged for your actual exit time, not an estimated one",
      "Game-night and concert service from Dulles, Northern Virginia and Maryland",
      "Group transportation in SUVs and Sprinter vans for larger parties",
      "Easy pairing with dinner in Chinatown, Penn Quarter or the Wharf",
      "Licensed and insured Virginia and Maryland carrier available 24/7",
    ],
    sections: [
      {
        h2: "Getting to a Capitals, Wizards or concert night without the parking garage",
        paragraphs: [
          "Downtown DC parking garages near Capital One Arena fill well before puck drop or tip-off on a busy night, and a chauffeured drop-off at the venue entrance skips that search entirely. For the return trip, tell us your event's expected end time and we stage the vehicle to be waiting rather than requiring a call from the sidewalk into a packed exit crowd.",
        ],
      },
      {
        h2: "Coming from Dulles, Northern Virginia or Maryland",
        paragraphs: [
          "Capital One Arena sits about 35 to 50 minutes from Dulles depending on traffic, and a similar range from most Northern Virginia and Maryland starting points. We frequently combine a flight arrival with a same-evening game or concert for visiting fans, tracking the inbound flight and timing the drop-off to the event start.",
        ],
      },
      {
        h2: "Group transportation for suites and season-ticket holders",
        paragraphs: [
          "Season-ticket holders and groups with a suite for the night often prefer one standing arrangement rather than booking each game individually — a Mercedes Sprinter van for a group of friends or a company suite, with the same pickup pattern repeated across the season. We set up recurring game-night bookings on request so a regular group does not have to re-coordinate logistics before every home game.",
        ],
      },
      {
        h2: "Booking Capital One Arena transportation",
        paragraphs: [
          "Rates are flat for a direct drop-off and pickup, or hourly for an evening that includes dinner nearby in Chinatown, Penn Quarter or down at the Wharf. Call (877) 609-1919 or book online with the event date and your group size.",
        ],
      },
    ],
    vehicles: VEHICLES,
    faqs: [
      { q: "Can you drop us off right at Capital One Arena?", a: "Yes, we drop off and pick up near the arena's main entrances, avoiding the downtown parking garages." },
      { q: "How do you handle the pickup after a game or concert ends?", a: "Tell us the event's expected end time and we stage the vehicle to be waiting, rather than requiring a call from a crowded exit." },
      { q: "How far is Capital One Arena from Dulles Airport?", a: "About 35 to 50 minutes, depending on traffic." },
      { q: "Can you combine an airport pickup with a same-night game or concert?", a: "Yes, this is a common request for visiting fans — we track the inbound flight and time the drop-off to the event." },
      { q: "Is this the same venue as Capital One Hall in Tysons?", a: "No. Capital One Arena is in downtown DC and hosts the Capitals, Wizards and major concerts. Capital One Hall is a separate performing-arts venue in Tysons, Virginia." },
    ],
    related: [
      { label: "Capital One Hall Transportation", to: "/capital-one-hall-transportation" },
      { label: "Nationals Park Transportation", to: "/nationals-park-transportation" },
      { label: "Audi Field Transportation", to: "/audi-field-transportation" },
      { label: "Washington Commanders Game Day Car Service", to: "/blog/washington-commanders-game-day-car-service" },
      { label: "Northwest Stadium Transportation", to: "/northwest-stadium-landover-transportation" },
      { label: "The Wharf DC Limo Service", to: "/the-wharf-dc-limo-service" },
      { label: "Concert Transportation", to: "/concert-transportation" },
    ],
    schema: { areaServed: ["Washington, DC"], serviceType: "Event transportation" },
  },
];
