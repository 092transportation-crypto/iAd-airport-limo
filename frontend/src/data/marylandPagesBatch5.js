// Batch 5 (2026-10-09): 8 Northern Virginia city pages and 6 Loudoun/Fairfax
// venue & university event pages. Same entry shape as MARYLAND_PAGES / Batch3 / Batch4
// (the name is historical — these are Virginia pages). Import-free on purpose.

const VEHICLES = [
  { name: "Mercedes-Benz E-Class", cls: "Business sedan", seats: 3, best: "solo executives and couples" },
  { name: "BMW 7 Series", cls: "First-class sedan", seats: 3, best: "VIP and executive travel" },
  { name: "Cadillac Escalade", cls: "Premium SUV", seats: 6, best: "families and small groups with luggage" },
  { name: "Chevrolet Suburban", cls: "Luxury SUV", seats: 6, best: "airport runs with beach or golf luggage" },
  { name: "Mercedes Sprinter van", cls: "Executive van", seats: 14, best: "wedding parties, corporate teams and groups" },
  { name: "Stretch limousine", cls: "Limousine", seats: 8, best: "proms, weddings and celebrations" },
];

export const MARYLAND_BATCH5 = [
  {
    slug: "falls-church-limo-service",
    type: "city",
    name: "Falls Church",
    badge: "Independent City · Northern Virginia",
    h1: "Falls Church Limo Service",
    metaTitle: "Falls Church Limo Service | Black Car Near DC",
    metaDescription:
      "Chauffeured limo and black car service in Falls Church, VA. Eden Center, downtown, West Falls Church Metro, Dulles and Reagan transfers. Call (877) 609-1919.",
    stats: [
      { label: "Dulles (IAD)", value: "18 mi · 25–35 minutes" },
      { label: "Reagan (DCA)", value: "10 mi · 20–30 minutes" },
      { label: "BWI", value: "45 mi · 55–70 minutes" },
    ],
    intro: [
      "IAD Airport Limo provides private chauffeured transportation in Falls Church, Virginia — one of the smallest independent cities in the country, tucked between Arlington and Fairfax County along Route 7 and Route 50. We cover downtown Falls Church, the West Falls Church Metro corridor, Tinner Hill and the City's close residential streets with airport transfers, corporate travel and event service.",
      "Falls Church sits almost equidistant between Dulles and Reagan National, which makes airport choice as much a timing question as a geography one. Dulles is about 18 miles and 25 to 35 minutes via Route 7 and the Dulles Toll Road; Reagan National is closer on the map at roughly 10 miles, but the drive through Arlington can take just as long once rush hour builds. We track your flight and route live traffic rather than picking an airport by mileage alone.",
    ],
    highlights: [
      "Written flat rates for Dulles and Reagan National — no surge, no hidden fees",
      "Meet and greet inside baggage claim, with 45 minutes of complimentary wait on domestic arrivals and 60 on international",
      "Chauffeurs who know the Route 7/Route 50 interchange, the West Falls Church Metro corridor and Arlington Boulevard traffic patterns",
      "Corporate accounts for the City's dense small-business core along Broad Street and Washington Street",
      "Sedans, SUVs and Sprinter vans for families, wedding parties and groups",
      "Licensed and insured Virginia and Maryland carrier",
    ],
    sections: [
      {
        h2: "Falls Church pickups and destinations",
        paragraphs: [
          "We serve all of Falls Church: the compact downtown around City Hall and the Farmers Market, the Eden Center shopping plaza on Wilson Boulevard — one of the region's largest Vietnamese-American retail and dining destinations — the State Theatre on North Washington Street, and the residential streets around West Falls Church and Tinner Hill. Business clients come from the commercial strip along Broad Street and the office buildings near the West Falls Church Metro station.",
          "For evenings out, we cover dinner and a show at the State Theatre, dinner at Eden Center, and connections to the West Falls Church Silver Line/Orange Line station for guests continuing into DC by rail. Families book us for proms and graduations at the City's schools.",
        ],
      },
      {
        h2: "Falls Church to Dulles, Reagan National and BWI",
        paragraphs: [
          "Dulles is about 18 miles northwest via Route 7 and the Dulles Toll Road, typically 25 to 35 minutes outside rush hour. Reagan National is closer on paper — about 10 miles — but the drive through Arlington on Route 50 or I-66 can take just as long once traffic builds. BWI is the longer trip north around the Beltway, roughly 45 miles.",
          "Every arrival is flight-tracked, with 45 minutes of complimentary wait on domestic flights and 60 on international, and a chauffeur meeting you at baggage claim or, for international arrivals, outside customs.",
        ],
      },
      {
        h2: "Corporate, family and event travel",
        paragraphs: [
          "Falls Church's dense little business core generates steady corporate accounts — law firms, healthcare practices and small headquarters along Broad Street and Washington Street use us for recurring airport transfers and client visits. Families use SUVs with car seats installed on request for school runs and airport departures, and stretch limousines handle proms and anniversaries.",
          "Cancellation is free up to 3 hours before pickup for sedans and SUVs, and up to 12 hours for Sprinter vans, limousines and special-event bookings.",
        ],
      },
    ],
    vehicles: VEHICLES,
    faqs: [
      {
        q: "How far is Falls Church from Dulles Airport?",
        a: "About 18 miles, typically 25 to 35 minutes via Route 7 and the Dulles Toll Road outside rush hour. We track your flight and adjust the pickup automatically.",
      },
      {
        q: "Is Reagan National or Dulles closer to Falls Church?",
        a: "Reagan National is closer on the map at about 10 miles, but Arlington traffic can make the drive comparable to Dulles at rush hour. Tell us your flight and we will recommend the better routing.",
      },
      {
        q: "Do you serve the Eden Center and State Theatre?",
        a: "Yes. Eden Center on Wilson Boulevard and the State Theatre on North Washington Street are regular pickup and drop-off points for dinner, shows and events.",
      },
      {
        q: "Can you pick up near the West Falls Church Metro station?",
        a: "Yes, including connections for guests continuing into Washington, DC by rail, or a direct door-to-door transfer if you would rather skip the train.",
      },
      {
        q: "Do you offer corporate accounts for Falls Church businesses?",
        a: "Yes. Companies along Broad Street and Washington Street use standing accounts for recurring airport transfers and client visits, with one point of contact and consolidated invoicing.",
      },
    ],
    related: [
      { label: "IAD to Falls Church, VA", to: "/iad-to-falls-church-va" },
      { label: "Arlington Limo Service", to: "/arlington-limo-service" },
      { label: "Fairfax Limo Service", to: "/fairfax-limo-service" },
      { label: "Dulles Airport Car Service", to: "/iad-dulles-airport-car-service" },
      { label: "Corporate Transportation", to: "/corporate" },
      { label: "Fleet", to: "/fleet" },
    ],
    schema: { areaServed: ["Falls Church, VA", "Northern Virginia"], serviceType: "Limousine and car service" },
  },
  {
    slug: "woodbridge-limo-service",
    type: "city",
    name: "Woodbridge",
    badge: "Prince William County · Northern Virginia",
    h1: "Woodbridge Limo Service",
    metaTitle: "Woodbridge VA Limo Service | Black Car to Dulles",
    metaDescription:
      "Chauffeured limo and black car service in Woodbridge, VA. Potomac Mills, Belmont Bay, Lake Ridge, I-95 corridor, Dulles and Reagan transfers. Call (877) 609-1919.",
    stats: [
      { label: "Dulles (IAD)", value: "35 mi · 45–55 minutes" },
      { label: "Reagan (DCA)", value: "22 mi · 30–40 minutes" },
      { label: "BWI", value: "55 mi · 65–80 minutes" },
    ],
    intro: [
      "IAD Airport Limo provides chauffeured limo and black car service in Woodbridge, Virginia, covering Potomac Mills, Belmont Bay, Lake Ridge, Featherstone and the Occoquan riverfront along the I-95 corridor in Prince William County. Airport transfers, corporate travel and event service are confirmed at a flat rate before you ride.",
      "Woodbridge is the commercial anchor of eastern Prince William County, built around Potomac Mills — one of the largest outlet malls on the East Coast — and the I-95/Prince William Parkway interchange. Most of our Woodbridge work pairs an airport run with a destination elsewhere in the region: a Dulles departure for a business trip, a Reagan National pickup for a weekend visitor, or a shopping trip from a Woodbridge hotel.",
    ],
    highlights: [
      "Flat rates to Dulles, Reagan National and BWI, confirmed before you book",
      "Chauffeurs who know the I-95/Prince William Parkway interchange and the Occoquan River crossings",
      "Hotel and shopping pickups near Potomac Mills and the Stonebridge at Potomac Town Center retail district",
      "Corporate accounts for Woodbridge and Prince William County businesses",
      "Sedans, SUVs and Sprinter vans, with car seats available on request",
      "Licensed and insured Virginia and Maryland carrier with 24/7 dispatch",
    ],
    sections: [
      {
        h2: "Woodbridge pickups and destinations",
        paragraphs: [
          "We serve all of Woodbridge: the Potomac Mills shopping district and the newer Stonebridge retail center, the waterfront community of Belmont Bay, the residential neighborhoods of Lake Ridge, Dale City and Featherstone, and the historic Occoquan riverfront just across the water. Business clients come from the office parks along Prince William Parkway and the government and defense contractors working the I-95 corridor.",
          "Shoppers and visiting family regularly book a Dulles or Reagan arrival paired with a Potomac Mills stop on the same reservation, and VRE commuters at the Woodbridge rail station use us for connections when Metro does not reach far enough.",
        ],
      },
      {
        h2: "Woodbridge to Dulles, Reagan National and BWI",
        paragraphs: [
          "Dulles is the longest of the three airport runs from Woodbridge at roughly 35 miles, typically 45 to 55 minutes via the Fairfax County Parkway or I-66, depending on which side of the Beltway has less traffic that day. Reagan National is closer at about 22 miles and 30 to 40 minutes down I-95 and the GW Parkway. BWI runs about 55 miles around the Beltway.",
          "Every arrival is flight-tracked, with 45 minutes of complimentary wait on domestic flights and 60 on international.",
        ],
      },
      {
        h2: "Corporate and family travel",
        paragraphs: [
          "Defense and government contractors along the I-95 corridor use standing accounts for recurring Dulles and Reagan transfers, with consolidated monthly invoicing. Families use SUVs and Sprinter vans for reunions, school events and weekend trips, with car seats installed on request.",
          "Cancellation is free up to 3 hours before pickup for sedans and SUVs, and up to 12 hours for Sprinter vans, limousines and special-event bookings.",
        ],
      },
    ],
    vehicles: VEHICLES,
    faqs: [
      {
        q: "How long does it take to get from Woodbridge to Dulles Airport?",
        a: "Usually 45 to 55 minutes, roughly 35 miles via the Fairfax County Parkway or I-66 depending on traffic. We schedule against your flight status, not just the mileage.",
      },
      {
        q: "Is Reagan National closer to Woodbridge than Dulles?",
        a: "Yes, Reagan National is about 22 miles and 30 to 40 minutes via I-95, somewhat closer than the 35-mile run to Dulles.",
      },
      {
        q: "Do you pick up near Potomac Mills?",
        a: "Yes. Potomac Mills and the Stonebridge retail district are common pickup and drop-off points, often paired with an airport arrival on the same booking.",
      },
      {
        q: "Can you serve Belmont Bay and the Occoquan waterfront?",
        a: "Yes, including Belmont Bay, Lake Ridge, Dale City and the Occoquan riverfront communities just across the river.",
      },
      {
        q: "Do you offer corporate accounts for Prince William County businesses?",
        a: "Yes. Government and defense contractors along the I-95 corridor use standing accounts for recurring airport transfers with consolidated invoicing.",
      },
    ],
    related: [
      { label: "IAD to Woodbridge, VA", to: "/iad-to-woodbridge-va" },
      { label: "Dumfries Limo Service", to: "/dumfries-limo-service" },
      { label: "Lorton Limo Service", to: "/lorton-limo-service" },
      { label: "IAD to BWI Airport", to: "/iad-to-bwi-airport" },
      { label: "Corporate Transportation", to: "/corporate" },
      { label: "Fleet", to: "/fleet" },
    ],
    schema: { areaServed: ["Woodbridge, VA", "Prince William County"], serviceType: "Limousine and car service" },
  },
  {
    slug: "springfield-limo-service",
    type: "city",
    name: "Springfield",
    badge: "Fairfax County · Springfield Interchange",
    h1: "Springfield Limo Service",
    metaTitle: "Springfield VA Limo Service | Black Car to IAD",
    metaDescription:
      "Chauffeured limo and black car service in Springfield, VA. NGA campus, Springfield Town Center, Franconia-Springfield Metro, Dulles transfers. Call (877) 609-1919.",
    stats: [
      { label: "Dulles (IAD)", value: "24 mi · 35–45 minutes" },
      { label: "Reagan (DCA)", value: "15 mi · 25–35 minutes" },
      { label: "BWI", value: "50 mi · 60–75 minutes" },
    ],
    intro: [
      "IAD Airport Limo provides chauffeured limo and black car service in Springfield, Virginia, covering the Springfield Town Center shopping district, the National Geospatial-Intelligence Agency's Fairfax campus, the Franconia-Springfield Metro and VRE station, and the surrounding Fairfax County neighborhoods near the I-95/I-395/I-495 interchange.",
      "Springfield is best known regionally for its interchange — travelers call it the Mixing Bowl — but the area is also a serious employment center. The NGA relocated its headquarters campus here, joining a cluster of government and contractor offices that generate steady corporate and cleared-traveler business for us alongside everyday Dulles and Reagan National transfers.",
    ],
    highlights: [
      "Flat rates to Dulles, Reagan National and BWI, confirmed before you book",
      "Chauffeurs experienced with the I-95/I-395/I-495 Springfield Interchange and its ramp patterns",
      "Corporate and cleared-traveler accounts for the NGA campus and nearby government contractors",
      "Pickups at Springfield Town Center and the Franconia-Springfield Metro and VRE station",
      "Sedans, SUVs and Sprinter vans for teams and families",
      "Licensed and insured Virginia and Maryland carrier with 24/7 dispatch",
    ],
    sections: [
      {
        h2: "Springfield pickups and destinations",
        paragraphs: [
          "We serve Springfield Town Center and its hotels and restaurants, the NGA campus and the government and defense office parks nearby, the residential neighborhoods off Backlick Road and Old Keene Mill Road, and the Franconia-Springfield Metro and VRE station for guests making a rail connection.",
          "Visiting contractors and government travelers frequently book a Dulles or Reagan National arrival with a direct run to the NGA campus or a nearby office, skipping the Metro transfer entirely.",
        ],
      },
      {
        h2: "Springfield to Dulles, Reagan National and BWI",
        paragraphs: [
          "Dulles is about 24 miles, typically 35 to 45 minutes via the Fairfax County Parkway and the Dulles Toll Road, avoiding the Mixing Bowl itself where possible. Reagan National is closer at roughly 15 miles and 25 to 35 minutes down I-395. BWI runs about 50 miles around the Beltway.",
          "Every arrival is flight-tracked, with 45 minutes of complimentary wait on domestic flights and 60 on international, and chauffeurs who plan routing around the interchange's notorious rush-hour backups.",
        ],
      },
      {
        h2: "Corporate and government travel",
        paragraphs: [
          "Standing accounts serve the NGA campus and nearby contractors with recurring airport transfers and consolidated monthly invoicing — a single point of contact handles schedule changes without back-and-forth. Families and groups use SUVs and Sprinter vans for Springfield Town Center outings and school events.",
          "Cancellation is free up to 3 hours before pickup for sedans and SUVs, and up to 12 hours for Sprinter vans, limousines and special-event bookings.",
        ],
      },
    ],
    vehicles: VEHICLES,
    faqs: [
      {
        q: "How long does it take to get from Springfield to Dulles Airport?",
        a: "Usually 35 to 45 minutes, about 24 miles via the Fairfax County Parkway and the Dulles Toll Road. We route around the Springfield Interchange's rush-hour backups where possible.",
      },
      {
        q: "Do you serve the NGA campus and nearby government contractors?",
        a: "Yes. We run standing corporate accounts for cleared travelers and contractors around the NGA Fairfax campus, with consolidated invoicing and a single point of contact.",
      },
      {
        q: "Can you pick up at Springfield Town Center?",
        a: "Yes, including the hotels and restaurants on the Town Center campus and nearby retail.",
      },
      {
        q: "Do you serve the Franconia-Springfield Metro and VRE station?",
        a: "Yes, for guests connecting to rail or as a direct door-to-door alternative to the Metro transfer.",
      },
      {
        q: "Is Reagan National closer than Dulles from Springfield?",
        a: "Yes, Reagan National is about 15 miles versus roughly 24 for Dulles, though both run comparably during rush hour depending on the exact route.",
      },
    ],
    related: [
      { label: "IAD to Springfield, VA", to: "/iad-to-springfield-va" },
      { label: "Burke Limo Service", to: "/burke-limo-service" },
      { label: "Lorton Limo Service", to: "/lorton-limo-service" },
      { label: "Corporate Transportation", to: "/corporate" },
      { label: "Dulles Airport Car Service", to: "/iad-dulles-airport-car-service" },
      { label: "Fleet", to: "/fleet" },
    ],
    schema: { areaServed: ["Springfield, VA", "Fairfax County"], serviceType: "Limousine and car service" },
  },
  {
    slug: "annandale-limo-service",
    type: "city",
    name: "Annandale",
    badge: "Fairfax County · Northern Virginia",
    h1: "Annandale Limo Service",
    metaTitle: "Annandale VA Limo Service | Black Car to Dulles",
    metaDescription:
      "Chauffeured limo and black car service in Annandale, VA. Little River Turnpike, NOVA Community College, Dulles and Reagan transfers. Call (877) 609-1919.",
    stats: [
      { label: "Dulles (IAD)", value: "20 mi · 30–35 minutes" },
      { label: "Reagan (DCA)", value: "12 mi · 20–30 minutes" },
      { label: "BWI", value: "48 mi · 60–75 minutes" },
    ],
    intro: [
      "IAD Airport Limo provides chauffeured limo and black car service in Annandale, Virginia, covering the Little River Turnpike commercial corridor, the Northern Virginia Community College (NOVA) Annandale campus, and the dense residential neighborhoods between Arlington and Fairfax City.",
      "Annandale is one of the most internationally diverse communities in Northern Virginia, anchored by a Little River Turnpike corridor of Korean, Vietnamese and other restaurants and markets that draws visitors from across the region. We run everyday airport transfers here alongside family event and group travel tied to that corridor's restaurants, banquet halls and the NOVA campus.",
    ],
    highlights: [
      "Flat rates to Dulles and Reagan National — no surge, no hidden fees",
      "Chauffeurs who know the Little River Turnpike corridor and the Beltway interchanges on either side of Annandale",
      "Pickups at NOVA Community College's Annandale campus for students, staff and visiting families",
      "Group service to Little River Turnpike restaurants and banquet halls for celebrations",
      "Sedans, SUVs and Sprinter vans, with car seats available on request",
      "Licensed and insured Virginia and Maryland carrier with 24/7 dispatch",
    ],
    sections: [
      {
        h2: "Annandale pickups and destinations",
        paragraphs: [
          "We serve the Little River Turnpike commercial corridor and its restaurants, markets and banquet halls, the NOVA Community College Annandale campus, and the residential neighborhoods surrounding Columbia Pike and Backlick Road. Family celebrations booked around a Little River Turnpike restaurant or hall are a regular part of our Annandale calendar.",
          "Students and visiting parents at NOVA's Annandale campus book airport transfers around move-in weekends, finals week and graduation, often pairing a Dulles or Reagan arrival with a direct campus drop-off.",
        ],
      },
      {
        h2: "Annandale to Dulles, Reagan National and BWI",
        paragraphs: [
          "Dulles is about 20 miles, typically 30 to 35 minutes via I-495 and the Dulles Toll Road. Reagan National is closer at roughly 12 miles and 20 to 30 minutes down the Beltway and the GW Parkway. BWI runs about 48 miles.",
          "Every arrival is flight-tracked, with 45 minutes of complimentary wait on domestic flights and 60 on international.",
        ],
      },
      {
        h2: "Family, student and group travel",
        paragraphs: [
          "Families use SUVs and Sprinter vans for reunions and celebrations along the Little River Turnpike corridor, and stretch limousines handle proms and anniversaries. NOVA students and staff book sedans for everyday airport trips and Sprinter vans for group moves at the start and end of each semester.",
          "Cancellation is free up to 3 hours before pickup for sedans and SUVs, and up to 12 hours for Sprinter vans, limousines and special-event bookings.",
        ],
      },
    ],
    vehicles: VEHICLES,
    faqs: [
      {
        q: "How long does it take to get from Annandale to Dulles Airport?",
        a: "Usually 30 to 35 minutes, about 20 miles via I-495 and the Dulles Toll Road, depending on traffic.",
      },
      {
        q: "Do you serve NOVA Community College's Annandale campus?",
        a: "Yes, including airport pickups and drop-offs for students and visiting families around move-in, finals and graduation.",
      },
      {
        q: "Can you book a group ride to a Little River Turnpike restaurant or banquet hall?",
        a: "Yes. Sprinter vans and stretch limousines are popular for celebrations along that corridor, with one confirmed rate per booking.",
      },
      {
        q: "Is Reagan National closer than Dulles from Annandale?",
        a: "Yes, Reagan National is about 12 miles versus roughly 20 for Dulles, though both are reasonable options depending on your flight.",
      },
      {
        q: "Do you provide car seats for family trips?",
        a: "Yes. Infant, convertible and booster seats are available on request and installed before the vehicle arrives.",
      },
    ],
    related: [
      { label: "IAD to Falls Church, VA", to: "/iad-to-falls-church-va" },
      { label: "Falls Church Limo Service", to: "/falls-church-limo-service" },
      { label: "Fairfax Limo Service", to: "/fairfax-limo-service" },
      { label: "Arlington Limo Service", to: "/arlington-limo-service" },
      { label: "Dulles Airport Car Service", to: "/iad-dulles-airport-car-service" },
      { label: "Fleet", to: "/fleet" },
    ],
    schema: { areaServed: ["Annandale, VA", "Fairfax County"], serviceType: "Limousine and car service" },
  },
  {
    slug: "burke-limo-service",
    type: "city",
    name: "Burke",
    badge: "Fairfax County · Northern Virginia",
    h1: "Burke Limo Service",
    metaTitle: "Burke VA Limo Service | Black Car to Dulles",
    metaDescription:
      "Chauffeured limo and black car service in Burke, VA. Burke Lake Park, Burke Centre VRE, Dulles, Reagan and BWI airport transfers. Call (877) 609-1919.",
    stats: [
      { label: "Dulles (IAD)", value: "22 mi · 30–40 minutes" },
      { label: "Reagan (DCA)", value: "18 mi · 25–35 minutes" },
      { label: "BWI", value: "50 mi · 65–80 minutes" },
    ],
    intro: [
      "IAD Airport Limo provides chauffeured limo and black car service in Burke, Virginia, a residential Fairfax County community built around Burke Lake Park and the Burke Centre VRE station, roughly midway between Fairfax City and Springfield.",
      "Burke is almost entirely residential and commuter-focused, which makes our work here mostly about dependable airport transfers around work schedules: early-morning Dulles departures ahead of the VRE rush, evening Reagan National arrivals timed to beat Fairfax County Parkway traffic home, and weekend family trips to and from the airport with everyone's luggage in one vehicle.",
    ],
    highlights: [
      "Flat rates to Dulles, Reagan National and BWI, confirmed before you book",
      "Early-morning and late-night pickups timed around VRE and commuter schedules",
      "Chauffeurs who know the Fairfax County Parkway, Burke Lake Road and Ox Road routing",
      "Family-friendly SUVs and Sprinter vans with car seats on request",
      "Sedans for everyday commuter-style airport trips",
      "Licensed and insured Virginia and Maryland carrier with 24/7 dispatch",
    ],
    sections: [
      {
        h2: "Burke pickups and destinations",
        paragraphs: [
          "We serve the residential neighborhoods around Burke Lake Park, the Burke Centre VRE station and the Old Keene Mill Road and Burke Lake Road corridors. Most trips start or end at a home address rather than a business, which keeps our Burke bookings straightforward: a flight number, a pickup address and a confirmed time.",
          "Families headed to Burke Lake Park events or school functions occasionally add a stop on an airport-adjacent booking, and we accommodate that through dispatch when it is arranged in advance.",
        ],
      },
      {
        h2: "Burke to Dulles, Reagan National and BWI",
        paragraphs: [
          "Dulles is about 22 miles, typically 30 to 40 minutes via the Fairfax County Parkway and Route 28. Reagan National is closer at roughly 18 miles and 25 to 35 minutes via I-495. BWI is the longest run at about 50 miles around the Beltway.",
          "Every arrival is flight-tracked, with 45 minutes of complimentary wait on domestic flights and 60 on international, so an early landing or a delay never leaves you waiting on us.",
        ],
      },
      {
        h2: "Commuter and family travel",
        paragraphs: [
          "Burke residents commonly book recurring early-morning Dulles departures ahead of a work trip and a late Reagan National pickup on the return, scheduled to avoid the worst of Fairfax County Parkway congestion. Families use SUVs with car seats installed on request for vacation departures with a full set of luggage.",
          "Cancellation is free up to 3 hours before pickup for sedans and SUVs, and up to 12 hours for Sprinter vans, limousines and special-event bookings.",
        ],
      },
    ],
    vehicles: VEHICLES,
    faqs: [
      {
        q: "How long does it take to get from Burke to Dulles Airport?",
        a: "Usually 30 to 40 minutes, about 22 miles via the Fairfax County Parkway and Route 28, depending on traffic.",
      },
      {
        q: "Can you handle an early-morning pickup from Burke?",
        a: "Yes. Early-morning Dulles and Reagan departures are among our most common Burke bookings, confirmed in advance with the pickup time you request.",
      },
      {
        q: "Do you serve the Burke Centre VRE station?",
        a: "Yes, for guests connecting to rail or as a direct door-to-door alternative to driving and parking at the station.",
      },
      {
        q: "Can I get an SUV with a car seat for a family vacation trip?",
        a: "Yes. Infant, convertible and booster seats are available on request and installed before the vehicle arrives, and SUVs accommodate a full set of luggage.",
      },
      {
        q: "Do you serve BWI from Burke as well?",
        a: "Yes, it is about 50 miles and 65 to 80 minutes around the Beltway, quoted as a flat rate confirmed before you book.",
      },
    ],
    related: [
      { label: "IAD to Springfield, VA", to: "/iad-to-springfield-va" },
      { label: "Springfield Limo Service", to: "/springfield-limo-service" },
      { label: "Fairfax Limo Service", to: "/fairfax-limo-service" },
      { label: "Clifton Limo Service", to: "/clifton-limo-service" },
      { label: "Dulles Airport Car Service", to: "/iad-dulles-airport-car-service" },
      { label: "Fleet", to: "/fleet" },
    ],
    schema: { areaServed: ["Burke, VA", "Fairfax County"], serviceType: "Limousine and car service" },
  },
  {
    slug: "clifton-limo-service",
    type: "city",
    name: "Clifton",
    badge: "Historic Town · Fairfax County",
    h1: "Clifton Limo Service",
    metaTitle: "Clifton VA Limo Service | Black Car & Wine Tours",
    metaDescription:
      "Chauffeured limo and black car service in historic Clifton, VA. Clifton Village, wine tours, weddings, Dulles and Reagan transfers. Call (877) 609-1919.",
    stats: [
      { label: "Dulles (IAD)", value: "20 mi · 25–35 minutes" },
      { label: "Reagan (DCA)", value: "22 mi · 30–40 minutes" },
      { label: "BWI", value: "55 mi · 65–80 minutes" },
    ],
    intro: [
      "IAD Airport Limo provides chauffeured limo and black car service in Clifton, Virginia, a small historic railroad town in southern Fairfax County known for its Victorian-era downtown, antique shops and restaurants along Main Street.",
      "Clifton's compact historic core makes it a popular pickup point for wine tours and wedding transportation rather than everyday commuter traffic, and its country roads sit closer to Dulles than most people expect, despite feeling tucked away from the rest of Fairfax County.",
    ],
    highlights: [
      "Flat rates to Dulles, Reagan National and BWI, confirmed before you book",
      "Chartered wine-tour transportation through Fairfax and Loudoun County wineries from Clifton Village",
      "Wedding and event transportation for Clifton's historic venues and surrounding estates",
      "Chauffeurs who know Clifton's narrow country roads and Route 123/Route 28 connections",
      "Sedans, SUVs, Sprinter vans and stretch limousines",
      "Licensed and insured Virginia and Maryland carrier with 24/7 dispatch",
    ],
    sections: [
      {
        h2: "Clifton pickups and destinations",
        paragraphs: [
          "We serve historic Clifton Village and Main Street's shops and restaurants, the surrounding country estates often used for small weddings, and the residential roads that wind out toward Fairfax Station and Union Mill. The town's historic character and slower pace make it a favored starting point for chartered wine-country days.",
          "Clifton's annual Historic Clifton Day festival and its restaurant scene draw visitors from across the region, and we handle both everyday pickups and the heavier festival-weekend traffic with advance scheduling.",
        ],
      },
      {
        h2: "Clifton to Dulles, Reagan National and BWI",
        paragraphs: [
          "Dulles is about 20 miles, typically 25 to 35 minutes via Route 28, closer in practice than Clifton's rural feel suggests. Reagan National runs about 22 miles and 30 to 40 minutes via I-66 and I-495. BWI is the longest trip at about 55 miles around the Beltway.",
          "Every arrival is flight-tracked, with 45 minutes of complimentary wait on domestic flights and 60 on international.",
        ],
      },
      {
        h2: "Wine tours and weddings from Clifton",
        paragraphs: [
          "Clifton's location makes it a natural jumping-off point for a chartered day through Fairfax and Loudoun County wineries, with an SUV or Sprinter van and a chauffeur who waits at each stop. Clifton's historic venues and country estates also book our stretch limousines and Sprinter vans for weddings, with the vehicle staged for photos before the ceremony.",
          "Cancellation is free up to 3 hours before pickup for sedans and SUVs, and up to 12 hours for Sprinter vans, limousines and wedding bookings.",
        ],
      },
    ],
    vehicles: VEHICLES,
    faqs: [
      {
        q: "How long does it take to get from Clifton to Dulles Airport?",
        a: "Usually 25 to 35 minutes, about 20 miles via Route 28 — closer than Clifton's rural setting suggests.",
      },
      {
        q: "Can you arrange a wine-tour day starting from Clifton Village?",
        a: "Yes. We regularly charter SUVs and Sprinter vans from Clifton through Fairfax and Loudoun County wineries, with the chauffeur waiting at each stop on an hourly rate.",
      },
      {
        q: "Do you provide wedding transportation for Clifton venues?",
        a: "Yes. Stretch limousines and Sprinter vans serve Clifton's historic venues and surrounding country estates, staged for photos before the ceremony.",
      },
      {
        q: "Is Dulles or Reagan National closer to Clifton?",
        a: "Dulles is closer at about 20 miles versus roughly 22 for Reagan National, though both are reasonable depending on your flight and the time of day.",
      },
      {
        q: "Can you handle Historic Clifton Day festival weekend traffic?",
        a: "Yes, with advance scheduling. Festival weekends draw heavier traffic into the village, so we recommend booking a few days ahead for that weekend specifically.",
      },
    ],
    related: [
      { label: "IAD to Springfield, VA", to: "/iad-to-springfield-va" },
      { label: "Burke Limo Service", to: "/burke-limo-service" },
      { label: "Wine Tours", to: "/wine-tours" },
      { label: "Wedding Limo", to: "/wedding-limo" },
      { label: "Stone Tower Winery Transportation", to: "/stone-tower-winery-transportation" },
      { label: "Fleet", to: "/fleet" },
    ],
    schema: { areaServed: ["Clifton, VA", "Fairfax County"], serviceType: "Limousine and car service" },
  },
  {
    slug: "lorton-limo-service",
    type: "city",
    name: "Lorton",
    badge: "Fairfax County · Fort Belvoir Area",
    h1: "Lorton Limo Service",
    metaTitle: "Lorton VA Limo Service | Black Car to Dulles & DCA",
    metaDescription:
      "Chauffeured limo and black car service in Lorton, VA. Fort Belvoir, Workhouse Arts Center, Auto Train station, Dulles and Reagan transfers. Call (877) 609-1919.",
    stats: [
      { label: "Dulles (IAD)", value: "28 mi · 35–45 minutes" },
      { label: "Reagan (DCA)", value: "18 mi · 25–35 minutes" },
      { label: "BWI", value: "50 mi · 60–75 minutes" },
    ],
    intro: [
      "IAD Airport Limo provides chauffeured limo and black car service in Lorton, Virginia, covering Fort Belvoir, the Workhouse Arts Center, Gunston Hall, the Lorton VRE station and the Amtrak Auto Train terminal along the Fairfax County Parkway and Route 1 corridor.",
      "Lorton's identity is shaped by Fort Belvoir, one of the Army's largest installations, and by the Workhouse Arts Center — a former federal prison converted into a working arts campus with galleries, studios and events. Between military travel, arts-center visitors and Auto Train passengers connecting to Florida, Lorton generates a mix of airport and station transfers unlike anywhere else we serve.",
    ],
    highlights: [
      "Flat rates to Dulles, Reagan National and BWI, confirmed before you book",
      "Military and government traveler accounts tied to Fort Belvoir",
      "Transfers to and from the Amtrak Auto Train terminal and the Lorton VRE station",
      "Pickups and drop-offs at the Workhouse Arts Center for exhibitions and events",
      "Sedans, SUVs and Sprinter vans for families and groups",
      "Licensed and insured Virginia and Maryland carrier with 24/7 dispatch",
    ],
    sections: [
      {
        h2: "Lorton pickups and destinations",
        paragraphs: [
          "We serve Fort Belvoir's gates and surrounding housing, the Workhouse Arts Center's galleries and event spaces, the historic Gunston Hall estate, and the residential neighborhoods along Lorton Road and the Fairfax County Parkway. The Amtrak Auto Train terminal — the only one of its kind on the East Coast, running overnight to Sanford, Florida — is a regular pickup and drop-off point for travelers starting or ending a road trip without the drive.",
          "Military families relocating to or from Fort Belvoir use us for airport transfers during PCS moves, and arts-center visitors book us for gallery openings and the Workhouse's seasonal events.",
        ],
      },
      {
        h2: "Lorton to Dulles, Reagan National and BWI",
        paragraphs: [
          "Dulles is about 28 miles, typically 35 to 45 minutes via the Fairfax County Parkway and I-495. Reagan National is closer at roughly 18 miles and 25 to 35 minutes down I-95 and the GW Parkway. BWI runs about 50 miles around the Beltway.",
          "Every arrival is flight-tracked, with 45 minutes of complimentary wait on domestic flights and 60 on international.",
        ],
      },
      {
        h2: "Military, Auto Train and arts-center travel",
        paragraphs: [
          "Fort Belvoir personnel and relocating families use standing accounts for recurring airport runs, and we coordinate directly with household-goods and PCS schedules when asked. Auto Train passengers book a Dulles or Reagan arrival timed to the terminal's boarding window, skipping the long highway drive south.",
          "Cancellation is free up to 3 hours before pickup for sedans and SUVs, and up to 12 hours for Sprinter vans, limousines and special-event bookings.",
        ],
      },
    ],
    vehicles: VEHICLES,
    faqs: [
      {
        q: "How long does it take to get from Lorton to Dulles Airport?",
        a: "Usually 35 to 45 minutes, about 28 miles via the Fairfax County Parkway and I-495, depending on traffic.",
      },
      {
        q: "Do you serve the Amtrak Auto Train terminal in Lorton?",
        a: "Yes. We regularly connect Dulles and Reagan National arrivals to the Auto Train terminal, timed to the boarding window for the overnight run to Sanford, Florida.",
      },
      {
        q: "Can you serve Fort Belvoir for military travel?",
        a: "Yes. We run standing accounts for Fort Belvoir personnel and relocating families, including coordination around PCS move schedules on request.",
      },
      {
        q: "Do you pick up at the Workhouse Arts Center?",
        a: "Yes, for gallery openings, exhibitions and the Workhouse's seasonal events throughout the year.",
      },
      {
        q: "Is Reagan National closer to Lorton than Dulles?",
        a: "Yes, Reagan National is about 18 miles versus roughly 28 for Dulles.",
      },
    ],
    related: [
      { label: "IAD to Woodbridge, VA", to: "/iad-to-woodbridge-va" },
      { label: "Springfield Limo Service", to: "/springfield-limo-service" },
      { label: "Woodbridge Limo Service", to: "/woodbridge-limo-service" },
      { label: "Corporate Transportation", to: "/corporate" },
      { label: "Dulles Airport Car Service", to: "/iad-dulles-airport-car-service" },
      { label: "Fleet", to: "/fleet" },
    ],
    schema: { areaServed: ["Lorton, VA", "Fairfax County"], serviceType: "Limousine and car service" },
  },
  {
    slug: "dumfries-limo-service",
    type: "city",
    name: "Dumfries",
    badge: "Prince William County · Oldest Chartered Town in VA",
    h1: "Dumfries Limo Service",
    metaTitle: "Dumfries VA Limo Service | Black Car to Dulles",
    metaDescription:
      "Chauffeured limo and black car service in Dumfries, VA. Quantico, Leesylvania State Park, Potomac Mills, Dulles and Reagan transfers. Call (877) 609-1919.",
    stats: [
      { label: "Dulles (IAD)", value: "40 mi · 50–60 minutes" },
      { label: "Reagan (DCA)", value: "28 mi · 35–45 minutes" },
      { label: "BWI", value: "55 mi · 65–80 minutes" },
    ],
    intro: [
      "IAD Airport Limo provides chauffeured limo and black car service in Dumfries, Virginia — chartered in 1749 and recognized as the oldest continuously chartered town in the Commonwealth — covering the Leesylvania State Park waterfront, the Potomac Mills retail corridor and the neighborhoods bordering Marine Corps Base Quantico.",
      "Dumfries sits at the southern edge of Prince William County's I-95 corridor, close enough to Quantico that much of our work here overlaps with Marine Corps families, FBI Academy visitors and defense contractors heading to or from a Dulles or Reagan National flight.",
    ],
    highlights: [
      "Flat rates to Dulles, Reagan National and BWI, confirmed before you book",
      "Chauffeurs experienced with Quantico-area security procedures and gate access",
      "Pickups near Leesylvania State Park and the Potomac riverfront",
      "Military, FBI Academy and defense-contractor travel accounts",
      "Sedans, SUVs and Sprinter vans for families and groups",
      "Licensed and insured Virginia and Maryland carrier with 24/7 dispatch",
    ],
    sections: [
      {
        h2: "Dumfries pickups and destinations",
        paragraphs: [
          "We serve the historic town center, the Leesylvania State Park waterfront along the Potomac, the Potomac Mills retail corridor shared with neighboring Woodbridge, and the residential neighborhoods closest to Marine Corps Base Quantico and the FBI Academy. Many of our Dumfries trips start or end at a Quantico gate rather than a home address.",
          "Families with a Marine stationed at Quantico, FBI Academy trainees and visiting relatives, and contractors working the base all use Dumfries as a staging point for Dulles and Reagan National flights.",
        ],
      },
      {
        h2: "Dumfries to Dulles, Reagan National and BWI",
        paragraphs: [
          "Dulles is the longest of the three runs at about 40 miles, typically 50 to 60 minutes via I-66 and the Fairfax County Parkway. Reagan National is considerably closer at roughly 28 miles and 35 to 45 minutes down I-95. BWI runs about 55 miles around the Beltway.",
          "Every arrival is flight-tracked, with 45 minutes of complimentary wait on domestic flights and 60 on international — useful given how far in advance Quantico-area travelers often need to plan.",
        ],
      },
      {
        h2: "Military and government travel",
        paragraphs: [
          "We coordinate Quantico gate pickups with the lead time base security procedures require, and maintain standing accounts for defense contractors with recurring Dulles and Reagan transfers. Families use SUVs and Sprinter vans for graduation weekends and visiting relatives, with car seats installed on request.",
          "Cancellation is free up to 3 hours before pickup for sedans and SUVs, and up to 12 hours for Sprinter vans, limousines and special-event bookings.",
        ],
      },
    ],
    vehicles: VEHICLES,
    faqs: [
      {
        q: "Can you pick up inside Marine Corps Base Quantico?",
        a: "Yes, coordinated with base gate procedures and the lead time they require. Tell us your gate and timing when you book so we can plan accordingly.",
      },
      {
        q: "How long does it take to get from Dumfries to Dulles Airport?",
        a: "Usually 50 to 60 minutes, about 40 miles via I-66 and the Fairfax County Parkway, the longest of our regular Northern Virginia runs.",
      },
      {
        q: "Is Reagan National closer to Dumfries than Dulles?",
        a: "Yes, considerably — about 28 miles and 35 to 45 minutes via I-95, versus roughly 40 miles for Dulles.",
      },
      {
        q: "Do you serve FBI Academy graduation weekends?",
        a: "Yes. We regularly handle family travel around FBI Academy and Marine Corps graduation weekends, with SUVs and Sprinter vans for larger groups.",
      },
      {
        q: "Do you offer accounts for Quantico-area defense contractors?",
        a: "Yes. Standing accounts cover recurring Dulles and Reagan National transfers with consolidated invoicing and a single point of contact.",
      },
    ],
    related: [
      { label: "IAD to Quantico, VA", to: "/iad-to-quantico-va" },
      { label: "IAD to Dumfries, VA", to: "/iad-to-dumfries-va" },
      { label: "Woodbridge Limo Service", to: "/woodbridge-limo-service" },
      { label: "Corporate Transportation", to: "/corporate" },
      { label: "Dulles Airport Car Service", to: "/iad-dulles-airport-car-service" },
      { label: "Fleet", to: "/fleet" },
    ],
    schema: { areaServed: ["Dumfries, VA", "Prince William County"], serviceType: "Limousine and car service" },
  },
  {
    slug: "national-conference-center-lansdowne-transportation",
    type: "event",
    name: "National Conference Center",
    badge: "Conference & Training Center · Lansdowne",
    h1: "National Conference Center Transportation",
    metaTitle: "National Conference Center Car Service | Lansdowne",
    metaDescription:
      "Chauffeured transportation to the National Conference Center in Lansdowne/Leesburg, VA for corporate training and government conferences. Call (877) 609-1919.",
    stats: [
      { label: "Location", value: "Lansdowne, near Leesburg, VA" },
      { label: "From Dulles (IAD)", value: "22 mi · 25–35 minutes" },
      { label: "Pricing", value: "Flat rate or hourly, confirmed in writing" },
    ],
    intro: [
      "IAD Airport Limo provides chauffeured transportation to the National Conference Center at 18980 Upper Belmont Place in Lansdowne, near Leesburg, Virginia — one of the largest dedicated conference and training campuses in the country, with more than 900 guest rooms and well over a hundred meeting spaces spread across a wooded campus near the Potomac River.",
      "The center runs heavily on federal agency and corporate training business, which means long stretches — multi-day seminars, certification courses, government onboarding programs — rather than single evening events. We support that pattern with airport transfers timed to arrival banks at the start of a program and departure flights at the end, plus daily shuttle-style runs for attendees who need to leave campus during a multi-day stay.",
    ],
    highlights: [
      "Dulles transfers in 25 to 35 minutes with flight tracking and complimentary wait time",
      "Group arrivals coordinated for multi-day training programs and conferences",
      "Daily on-campus pickup and return for attendees stepping out during a seminar",
      "Corporate and government billing with consolidated invoicing for group bookings",
      "Sedans and SUVs for individual travelers, Sprinter vans for cohorts arriving together",
      "Licensed and insured Virginia and Maryland carrier with 24/7 dispatch",
    ],
    sections: [
      {
        h2: "What happens at the National Conference Center",
        paragraphs: [
          "The campus hosts federal agency training, corporate leadership programs, professional certification courses and large conferences, often running several days with attendees arriving from across the country. Its scale — hundreds of guest rooms and a large meeting-space inventory — means arrival and departure days can see dozens of attendees moving through Dulles within the same few hours.",
        ],
      },
      {
        h2: "Coordinating group arrivals and departures",
        paragraphs: [
          "Program coordinators booking for a cohort give us the roster of flights once, and we build a staggered pickup schedule across sedans, SUVs and Sprinter vans so everyone reaches the Lansdowne campus without a shared shuttle wait. The same coordination runs in reverse at the end of the program, with departure times built around the center's checkout schedule rather than a single bus departure.",
          "Individual attendees booking on their own get the same flat-rate, flight-tracked transfer as any other Dulles trip, with the 22-mile, 25-to-35-minute drive out Route 7 and Route 15 one of the more straightforward runs we handle.",
        ],
      },
      {
        h2: "During a multi-day stay",
        paragraphs: [
          "Attendees who need to leave campus mid-program — a client meeting in Leesburg, a dinner off-site, an early flight out ahead of the group — book individual trips through the same dispatch that handled the group's arrival, with billing routed to the same account if the organizer prefers.",
          "Cancellation is free up to 3 hours before pickup for sedans and SUVs, and up to 12 hours for Sprinter vans and group bookings.",
        ],
      },
    ],
    vehicles: VEHICLES,
    faqs: [
      {
        q: "How far is the National Conference Center from Dulles Airport?",
        a: "About 22 miles, typically 25 to 35 minutes via Route 7 and Route 15. We flight-track every arrival for group and individual bookings alike.",
      },
      {
        q: "Can you coordinate pickups for a group arriving on different flights?",
        a: "Yes. Send us the full roster once and we build a staggered pickup schedule across sedans, SUVs and Sprinter vans, billed to one consolidated invoice if you prefer.",
      },
      {
        q: "Do you provide transportation during a multi-day conference?",
        a: "Yes. Attendees can book individual trips off-campus during a stay through the same dispatch that handled the group arrival.",
      },
      {
        q: "Do you work with government and corporate training programs directly?",
        a: "Yes. We regularly coordinate with program organizers and travel coordinators for both government and corporate bookings at the center.",
      },
      {
        q: "Can you handle a large group departure at the end of a program?",
        a: "Yes, with staggered departure times built around checkout and flight schedules rather than a single shared shuttle.",
      },
    ],
    related: [
      { label: "Leesburg Limo Service", to: "/leesburg-limo-service" },
      { label: "Loudoun County Fairgrounds Transportation", to: "/loudoun-county-fairgrounds-transportation" },
      { label: "Loudoun County Car Service", to: "/loudoun-county-car-service" },
      { label: "Corporate Transportation", to: "/corporate" },
      { label: "Dulles Airport Car Service", to: "/iad-dulles-airport-car-service" },
      { label: "Fleet", to: "/fleet" },
    ],
    schema: { areaServed: ["Lansdowne, VA", "Leesburg, VA", "Loudoun County"], serviceType: "Event transportation" },
  },
  {
    slug: "stone-tower-winery-transportation",
    type: "event",
    name: "Stone Tower Winery",
    badge: "Winery · Leesburg, Loudoun County",
    h1: "Stone Tower Winery Transportation",
    metaTitle: "Stone Tower Winery Car Service | Leesburg, VA",
    metaDescription:
      "Chauffeured car and Sprinter van service to Stone Tower Winery in Leesburg, VA for tastings, events and weddings. Flat rates. Call (877) 609-1919.",
    stats: [
      { label: "Location", value: "Hogback Mountain Rd, Leesburg, VA" },
      { label: "From Dulles (IAD)", value: "25 mi · 35–45 minutes" },
      { label: "Pricing", value: "Hourly, confirmed in writing" },
    ],
    intro: [
      "IAD Airport Limo provides chauffeured transportation to Stone Tower Winery on Hogback Mountain Road in Leesburg, Virginia, one of Loudoun County's best-known wineries, set on a ridge with panoramic views toward the Blue Ridge Mountains and a large event barn used for weddings and private gatherings.",
      "The winery's rural, hilltop setting is exactly why a chauffeured vehicle makes sense: narrow country roads, no rideshare availability to count on, and a tasting experience that works a lot better when nobody in the group has to drive. We run hourly service that waits through the tasting and brings everyone home.",
    ],
    highlights: [
      "Hourly, as-directed service that waits through tastings, tours and events",
      "Multi-winery day trips combining Stone Tower with other Loudoun County stops",
      "Dedicated Sprinter vans and stretch limousines for wedding parties and bachelorette groups",
      "Chauffeurs familiar with Hogback Mountain Road and the surrounding Loudoun wine-country roads",
      "Dulles pickups and drop-offs for out-of-town wedding and event guests",
      "Licensed and insured Virginia and Maryland carrier with 24/7 dispatch",
    ],
    sections: [
      {
        h2: "Why a chauffeur makes sense for Stone Tower",
        paragraphs: [
          "Stone Tower sits on a working farm up a winding rural road, with no sidewalk, no rideshare density and no safe way to split a group across multiple personal vehicles after a tasting. An hourly booking lets everyone enjoy the wine while the chauffeur handles the roads, the parking and the drive home.",
        ],
      },
      {
        h2: "Tastings, tours and multi-winery days",
        paragraphs: [
          "Most Stone Tower bookings run two to four hours for a tasting and a few glasses on the view deck, and we quote those as a straightforward hourly rate with a confirmed minimum. Groups building a full day often pair Stone Tower with one or two nearby Loudoun wineries on the same booking, with the chauffeur handling the route between stops.",
          "Weekday bookings tend to be easier to schedule than weekend afternoons during peak wine-country season, roughly April through October, when both tasting-room reservations and vehicle availability tighten.",
        ],
      },
      {
        h2: "Weddings and private events",
        paragraphs: [
          "Stone Tower's event barn hosts weddings regularly, and we provide guest shuttles from Dulles or local hotels, a stretch limousine or Sprinter van for the wedding party, and staged photo-ready vehicles for the ceremony. Out-of-town guests flying into Dulles can combine their airport transfer with the winery trip on one booking.",
          "Cancellation is free up to 3 hours before pickup for sedans and SUVs, and up to 12 hours for Sprinter vans, limousines and wedding bookings.",
        ],
      },
    ],
    vehicles: VEHICLES,
    faqs: [
      {
        q: "How far is Stone Tower Winery from Dulles Airport?",
        a: "About 25 miles, typically 35 to 45 minutes via Route 7 and Route 9. We can pair a Dulles pickup directly with the winery trip.",
      },
      {
        q: "Do you offer hourly service that waits during a tasting?",
        a: "Yes. Hourly, as-directed bookings are the standard for winery trips — the chauffeur waits through the tasting and drives everyone home when you are ready.",
      },
      {
        q: "Can you combine Stone Tower with other Loudoun wineries in one day?",
        a: "Yes. Multi-stop winery days are common; tell us your preferred stops and we build the route and the hourly quote around them.",
      },
      {
        q: "Do you provide wedding transportation for Stone Tower Winery?",
        a: "Yes. Stretch limousines and Sprinter vans serve weddings at Stone Tower's event barn, including guest shuttles from Dulles and local hotels.",
      },
      {
        q: "Is weekend availability more limited during wine season?",
        a: "Yes. April through October weekends are the busiest stretch for both tasting-room reservations and vehicle availability, so we recommend booking a winery day as early as your plans allow.",
      },
    ],
    related: [
      { label: "Wine Tours", to: "/wine-tours" },
      { label: "The Barns at Hamilton Station Transportation", to: "/the-barns-at-hamilton-station-transportation" },
      { label: "Leesburg Limo Service", to: "/leesburg-limo-service" },
      { label: "Wedding Limo", to: "/wedding-limo" },
      { label: "Loudoun County Car Service", to: "/loudoun-county-car-service" },
      { label: "Fleet", to: "/fleet" },
    ],
    schema: { areaServed: ["Leesburg, VA", "Loudoun County"], serviceType: "Event transportation" },
  },
  {
    slug: "the-barns-at-hamilton-station-transportation",
    type: "event",
    name: "The Barns at Hamilton Station",
    badge: "Wedding Venue · Hamilton, Loudoun County",
    h1: "The Barns at Hamilton Station Transportation",
    metaTitle: "Barns at Hamilton Station Car Service | Weddings",
    metaDescription:
      "Chauffeured wedding and guest-shuttle transportation to The Barns at Hamilton Station in Hamilton, VA. Sprinter vans & limousines. Call (877) 609-1919.",
    stats: [
      { label: "Location", value: "Hamilton Station Rd, Hamilton, VA" },
      { label: "From Dulles (IAD)", value: "30 mi · 40–50 minutes" },
      { label: "Pricing", value: "Flat rate or hourly, confirmed in writing" },
    ],
    intro: [
      "IAD Airport Limo provides chauffeured transportation to The Barns at Hamilton Station in Hamilton, Virginia — a pair of restored 1930s dairy barns set among vineyards in western Loudoun County, one of the region's most-booked wedding venues.",
      "Weddings here mean two distinct transportation jobs on the same day: a wedding party that needs to arrive on schedule and look the part doing it, and a guest list that is often flying in from out of town and unfamiliar with Loudoun's country roads. We handle both from the same booking.",
    ],
    highlights: [
      "Wedding-party transportation in stretch limousines and Sprinter vans, staged for photos",
      "Guest shuttles from Dulles, Leesburg hotels and Purcellville hotels to the venue and back",
      "Chauffeurs familiar with Hamilton Station Road and the surrounding wine-country routes",
      "Round-trip shuttle runs timed to ceremony, reception and end-of-night pickup",
      "Rehearsal dinner and welcome-event transportation the night before",
      "Licensed and insured Virginia and Maryland carrier with 24/7 dispatch",
    ],
    sections: [
      {
        h2: "Wedding-day transportation at The Barns",
        paragraphs: [
          "The venue's rural setting photographs beautifully but offers nowhere for guests to park safely after a reception with an open bar, which is exactly the problem a guest shuttle solves. We run a loop between a central hotel — typically in Leesburg or Purcellville — and the venue, with pickups timed to the ceremony start and return runs through the end of the reception.",
          "The wedding party itself usually books a stretch limousine or Sprinter van separately, staged for getting-ready photos and timed to deliver the couple and attendants to the barn with room to breathe before the ceremony.",
        ],
      },
      {
        h2: "Flying in for the wedding",
        paragraphs: [
          "Out-of-town guests landing at Dulles are about 30 miles and 40 to 50 minutes from Hamilton via Route 7 and Route 9. We quote individual airport transfers at a flat rate and can coordinate several arriving on the same day into a single pickup block if the wedding coordinator provides the flight list in advance.",
        ],
      },
      {
        h2: "Rehearsal dinners and the morning after",
        paragraphs: [
          "Many couples book us for the rehearsal dinner the night before as well, and for departure transfers back to Dulles the morning after, so the whole weekend runs through one point of contact and one invoice rather than several separate bookings.",
          "Cancellation is free up to 3 hours before pickup for sedans and SUVs, and up to 12 hours for Sprinter vans, limousines and wedding-day bookings.",
        ],
      },
    ],
    vehicles: VEHICLES,
    faqs: [
      {
        q: "Do you provide guest shuttles for weddings at The Barns at Hamilton Station?",
        a: "Yes. We run a loop between a Leesburg or Purcellville hotel and the venue, timed to the ceremony and reception schedule, so no guest needs to drive after the reception.",
      },
      {
        q: "Can we book a limousine or Sprinter van for the wedding party?",
        a: "Yes, staged for getting-ready photos and timed to deliver the couple and attendants to the venue ahead of the ceremony.",
      },
      {
        q: "How far is the venue from Dulles Airport?",
        a: "About 30 miles, typically 40 to 50 minutes via Route 7 and Route 9 — common for out-of-town guests flying in for the wedding.",
      },
      {
        q: "Can you coordinate pickups for several guests arriving at Dulles the same day?",
        a: "Yes. Provide the flight list in advance and we build a coordinated pickup schedule into one invoice.",
      },
      {
        q: "Do you handle rehearsal dinner transportation as well?",
        a: "Yes. Many couples book the rehearsal dinner, the wedding day and the morning-after departure transfer as one coordinated weekend.",
      },
    ],
    related: [
      { label: "Wedding Limo", to: "/wedding-limo" },
      { label: "Stone Tower Winery Transportation", to: "/stone-tower-winery-transportation" },
      { label: "Leesburg Limo Service", to: "/leesburg-limo-service" },
      { label: "Purcellville Limo Service", to: "/purcellville-limo-service" },
      { label: "Loudoun County Car Service", to: "/loudoun-county-car-service" },
      { label: "Fleet", to: "/fleet" },
    ],
    schema: { areaServed: ["Hamilton, VA", "Leesburg, VA", "Loudoun County"], serviceType: "Event transportation" },
  },
  {
    slug: "loudoun-county-fairgrounds-transportation",
    type: "event",
    name: "Loudoun County Fairgrounds",
    badge: "Fairgrounds & Event Center · Leesburg",
    h1: "Loudoun County Fairgrounds Transportation",
    metaTitle: "Loudoun County Fairgrounds Car Service | Leesburg",
    metaDescription:
      "Chauffeured transportation to the Loudoun County Fairgrounds in Leesburg, VA for the county fair, equestrian events and expos. Call (877) 609-1919.",
    stats: [
      { label: "Location", value: "Dry Mill Rd, Leesburg, VA" },
      { label: "From Dulles (IAD)", value: "22 mi · 25–35 minutes" },
      { label: "Pricing", value: "Flat rate or hourly, confirmed in writing" },
    ],
    intro: [
      "IAD Airport Limo provides chauffeured transportation to the Loudoun County Fairgrounds on Dry Mill Road in Leesburg, Virginia, home to the annual Loudoun County Fair each August along with equestrian competitions, craft and gun shows, and holiday markets throughout the year.",
      "Fairgrounds traffic is a known headache for anyone who has driven in for the county fair on a summer evening — the parking fields fill fast and the exit afterward crawls. A chauffeur drops you at the gate and picks you up at a pre-arranged point rather than leaving you to find your own car in a dark field.",
    ],
    highlights: [
      "Drop-off at the fairgrounds gate and a pre-arranged pickup away from the exit queue",
      "Group transportation in Sprinter vans for families and clubs attending the county fair together",
      "Service for equestrian competitions, craft shows and seasonal markets year-round",
      "Chauffeurs familiar with Dry Mill Road and Leesburg's event-weekend traffic patterns",
      "Dulles transfers paired with a fairgrounds visit for out-of-town visitors",
      "Licensed and insured Virginia and Maryland carrier with 24/7 dispatch",
    ],
    sections: [
      {
        h2: "What happens at the fairgrounds",
        paragraphs: [
          "The Loudoun County Fair runs for about a week each August with rides, livestock competitions, concerts and the kind of crowds that overwhelm the on-site parking fields by early evening. Outside fair week, the grounds host equestrian shows, gun and craft shows, and seasonal markets that draw their own steady traffic.",
        ],
      },
      {
        h2: "Avoiding the parking field and the exit line",
        paragraphs: [
          "We drop off at the main gate and set a pickup point away from the parking field exits, which during fair week back up for a considerable stretch after the evening events let out. Families and groups attending together use Sprinter vans so everyone arrives and leaves in one vehicle instead of splitting across separate cars.",
          "For equestrian competitions, which often run early mornings through late afternoon, we schedule around the specific event block rather than a single evening pickup.",
        ],
      },
      {
        h2: "Visiting from out of town",
        paragraphs: [
          "Visitors flying into Dulles for the fair or a specific competition are about 22 miles and 25 to 35 minutes away, and we pair the airport transfer with the fairgrounds trip on request. Cancellation is free up to 3 hours before pickup for sedans and SUVs, and up to 12 hours for Sprinter vans and group bookings.",
        ],
      },
    ],
    vehicles: VEHICLES,
    faqs: [
      {
        q: "Can you avoid the fairgrounds parking field and exit traffic?",
        a: "Yes. We drop off at the main gate and set a pickup point away from the parking field exits, which back up considerably during fair week evenings.",
      },
      {
        q: "Do you provide group transportation for families attending the county fair?",
        a: "Yes. Sprinter vans are popular for families and clubs attending together, with one confirmed rate for the group.",
      },
      {
        q: "Do you serve equestrian events and shows outside of fair week?",
        a: "Yes. We schedule around the specific event block for competitions, craft and gun shows, and seasonal markets held at the fairgrounds throughout the year.",
      },
      {
        q: "How far is the fairgrounds from Dulles Airport?",
        a: "About 22 miles, typically 25 to 35 minutes via Route 7 and Route 15.",
      },
      {
        q: "Should I book ahead for Loudoun County Fair week?",
        a: "Yes. Fair week in August is one of the busiest stretches in Leesburg, so booking several days ahead is a good idea if your pickup time matters to you.",
      },
    ],
    related: [
      { label: "Leesburg Limo Service", to: "/leesburg-limo-service" },
      { label: "National Conference Center Transportation", to: "/national-conference-center-lansdowne-transportation" },
      { label: "Loudoun County Car Service", to: "/loudoun-county-car-service" },
      { label: "Stone Tower Winery Transportation", to: "/stone-tower-winery-transportation" },
      { label: "Dulles Airport Car Service", to: "/iad-dulles-airport-car-service" },
      { label: "Fleet", to: "/fleet" },
    ],
    schema: { areaServed: ["Leesburg, VA", "Loudoun County"], serviceType: "Event transportation" },
  },
  {
    slug: "george-mason-university-transportation",
    type: "event",
    name: "George Mason University",
    badge: "University · Fairfax Campus",
    h1: "George Mason University Transportation",
    metaTitle: "George Mason University Car Service | Fairfax, VA",
    metaDescription:
      "Chauffeured car service for George Mason University — move-in, commencement, Family Weekend and international student airport transfers. Call (877) 609-1919.",
    stats: [
      { label: "Location", value: "4400 University Dr, Fairfax, VA" },
      { label: "From Dulles (IAD)", value: "23 mi · 30–40 minutes" },
      { label: "Pricing", value: "Flat rate or hourly, confirmed in writing" },
    ],
    intro: [
      "IAD Airport Limo provides chauffeured transportation to and from George Mason University's main Fairfax campus — the largest public research university in Virginia, with roughly 40,000 students and a significant international population that keeps Dulles traffic steady almost every week of the academic year.",
      "This page covers the campus broadly: move-in and move-out weekends, Family Weekend, commencement at EagleBank Arena, and the everyday airport runs international and out-of-state students rely on. If you are headed to a concert or arena event specifically, see our EagleBank Arena transportation page instead.",
    ],
    highlights: [
      "Dulles transfers in 30 to 40 minutes for students, families and visiting faculty",
      "Move-in and move-out weekend group transportation with luggage-ready SUVs and Sprinter vans",
      "Commencement-day coordination for graduates and multiple family members arriving separately",
      "International student airport pickups with meet and greet and flight tracking",
      "Family Weekend and parent-visit transportation across campus and Fairfax",
      "Licensed and insured Virginia and Maryland carrier with 24/7 dispatch",
    ],
    sections: [
      {
        h2: "Move-in, move-out and the academic calendar",
        paragraphs: [
          "Move-in weekend in August and move-out at the end of each semester are our busiest Mason weeks — students landing at Dulles with the semester's luggage need an SUV or Sprinter van, not a sedan, and we schedule those trips with the extra cargo space built in from booking. Winter and summer break create a second wave in both directions as international and out-of-state students head home and return.",
          "Students without a car on campus also use us for routine Dulles trips home for shorter breaks, booked the same way as any other airport transfer — flat rate, flight tracked, confirmed before you travel.",
        ],
      },
      {
        h2: "Commencement and Family Weekend",
        paragraphs: [
          "Commencement ceremonies at EagleBank Arena draw families from across the country and sometimes overseas, often arriving on different flights and different days around the same weekend. We coordinate multiple pickups into one organized plan when a family provides the flight list in advance, so nobody is left solving their own transportation on graduation morning.",
          "Family Weekend each fall brings a similar but smaller wave of parent visits, typically a single flight each way rather than a coordinated group, which we handle as a standard round-trip airport booking.",
        ],
      },
      {
        h2: "International students and visiting faculty",
        paragraphs: [
          "Mason's large international student population means a steady stream of first arrivals — often a student's first time in the US, landing with the semester's belongings and no local contact to call. Meet and greet puts a chauffeur with a name sign at baggage claim, and international arrivals get 60 minutes of complimentary wait time to clear customs and collect bags.",
          "Visiting faculty and conference guests at Mason's Arlington and Fairfax campuses book the same service for shorter, business-style trips. Cancellation is free up to 3 hours before pickup for sedans and SUVs, and up to 12 hours for Sprinter vans and group bookings.",
        ],
      },
    ],
    vehicles: VEHICLES,
    faqs: [
      {
        q: "How far is George Mason University from Dulles Airport?",
        a: "About 23 miles, typically 30 to 40 minutes via the Dulles Toll Road and I-66, depending on traffic.",
      },
      {
        q: "Can you handle move-in or move-out weekend with a lot of luggage?",
        a: "Yes. SUVs and Sprinter vans are the standard choice for move-in and move-out weekends; tell us the amount of luggage when you book so we send the right vehicle.",
      },
      {
        q: "Can you coordinate pickups for several family members arriving for commencement?",
        a: "Yes. Provide the flight list in advance and we build a coordinated pickup schedule across multiple vehicles for graduation weekend.",
      },
      {
        q: "Do you provide meet and greet for international students arriving for the first time?",
        a: "Yes. A chauffeur meets international arrivals outside customs with a name sign, with 60 minutes of complimentary wait time included.",
      },
      {
        q: "Is this the same page as EagleBank Arena transportation?",
        a: "No. This page covers campus-wide transportation — move-in, commencement, student and family travel. For concerts and arena events specifically, see our EagleBank Arena transportation page.",
      },
    ],
    related: [
      { label: "EagleBank Arena Transportation", to: "/eaglebank-arena-transportation" },
      { label: "Fairfax Limo Service", to: "/fairfax-limo-service" },
      { label: "Northern Virginia Graduation Limo", to: "/northern-virginia-graduation-limo" },
      { label: "Corporate Transportation", to: "/corporate" },
      { label: "Dulles Airport Car Service", to: "/iad-dulles-airport-car-service" },
      { label: "Fleet", to: "/fleet" },
    ],
    schema: { areaServed: ["Fairfax, VA", "Fairfax County"], serviceType: "Event transportation" },
  },
  {
    slug: "dulles-town-center-transportation",
    type: "event",
    name: "Dulles Town Center",
    badge: "Shopping & Entertainment · Sterling, Minutes From IAD",
    h1: "Dulles Town Center Transportation",
    metaTitle: "Dulles Town Center Car Service | Minutes From IAD",
    metaDescription:
      "Chauffeured car service to Dulles Town Center in Sterling, VA — the closest major mall to Dulles Airport. Layover shopping, dining. Call (877) 609-1919.",
    stats: [
      { label: "Location", value: "Dulles Town Circle, Sterling, VA" },
      { label: "From Dulles (IAD)", value: "6 mi · 10–15 minutes" },
      { label: "Pricing", value: "Flat rate or hourly, confirmed in writing" },
    ],
    intro: [
      "IAD Airport Limo provides chauffeured transportation to Dulles Town Center on Dulles Town Circle in Sterling, Virginia — the closest major shopping and entertainment destination to Dulles International Airport, anchored by Macy's, a large retail mix and an AMC movie theater.",
      "Being minutes from the terminal makes this one of our shortest regular trips, and one of the most useful: business travelers with a long layover, families killing time before a late flight, and local shoppers who would rather book a car than deal with mall parking all use the same quick, flat-rate run.",
    ],
    highlights: [
      "One of the shortest transfers we run — about 6 miles, 10 to 15 minutes from the terminal",
      "Layover-friendly bookings for travelers with extended time between flights",
      "Round-trip service that waits through a shopping or dinner stop and returns to the airport",
      "Hotel pickups from the airport-area hotel corridor along Route 28 and Route 7",
      "Sedans and SUVs for individuals and families, Sprinter vans for groups",
      "Licensed and insured Virginia and Maryland carrier with 24/7 dispatch",
    ],
    sections: [
      {
        h2: "A quick trip for layovers and long connections",
        paragraphs: [
          "Travelers with several hours between flights sometimes prefer a short trip off-airport to a sit-down meal or some shopping over waiting at the gate. At 6 miles and 10 to 15 minutes from the terminal, Dulles Town Center is close enough to make that practical, and we book it as a round trip with the vehicle waiting or returning on a schedule you set.",
        ],
      },
      {
        h2: "Hotel guests and local shoppers",
        paragraphs: [
          "Guests staying at the airport-area hotels along Route 28 and Route 7 use us for quick trips to the mall for dinner, a movie at the AMC, or shopping before an early flight the next morning. Local residents also book us for mall trips when they would rather skip parking altogether, especially around the holiday shopping season when the lots fill up.",
        ],
      },
      {
        h2: "Pairing it with your flight",
        paragraphs: [
          "Because of the short distance, this trip pairs easily with an airport pickup or drop-off on the same booking — land at Dulles, stop at the mall for a few hours, then continue to your final destination, all coordinated through one dispatch.",
          "Cancellation is free up to 3 hours before pickup for sedans and SUVs, and up to 12 hours for Sprinter vans and group bookings.",
        ],
      },
    ],
    vehicles: VEHICLES,
    faqs: [
      {
        q: "How far is Dulles Town Center from the airport?",
        a: "About 6 miles, typically 10 to 15 minutes — one of the shortest trips we run.",
      },
      {
        q: "Can I book a round trip that waits while I shop or have dinner?",
        a: "Yes. We quote an hourly rate for the vehicle to wait, or you can schedule a separate return pickup at a time you choose.",
      },
      {
        q: "Do you pick up from the airport-area hotels near Dulles Town Center?",
        a: "Yes, including the hotel corridor along Route 28 and Route 7.",
      },
      {
        q: "Can I combine this with my Dulles airport transfer?",
        a: "Yes. A mall stop pairs easily with an airport pickup or drop-off on the same booking.",
      },
      {
        q: "Is this good for a long layover at Dulles?",
        a: "Yes. At 10 to 15 minutes each way, it is a practical way to use a long connection without cutting it too close to your next flight's boarding time.",
      },
    ],
    related: [
      { label: "Ashburn Limo Service", to: "/ashburn-limo-service" },
      { label: "Sterling VA Limo Service", to: "/sterling-limo-service" },
      { label: "Dulles Airport Car Service", to: "/iad-dulles-airport-car-service" },
      { label: "Airport Transfer", to: "/airport-transfer" },
      { label: "Book Now", to: "/book-now" },
      { label: "Fleet", to: "/fleet" },
    ],
    schema: { areaServed: ["Sterling, VA", "Loudoun County"], serviceType: "Event transportation" },
  },
];
