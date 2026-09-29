// Batch 3 (2026-09-22): 10 Virginia city, 5 venue and 3 service pages. Same
// entry shape as MARYLAND_PAGES (the name is historical — these are Virginia/DC pages).

const VEHICLES = [
  { name: "Mercedes-Benz E-Class", cls: "Business sedan", seats: 3, best: "solo executives and couples" },
  { name: "BMW 7 Series", cls: "First-class sedan", seats: 3, best: "VIP and executive travel" },
  { name: "Cadillac Escalade", cls: "Premium SUV", seats: 6, best: "families and small groups with luggage" },
  { name: "Chevrolet Suburban", cls: "Luxury SUV", seats: 6, best: "airport runs with beach or golf luggage" },
  { name: "Mercedes Sprinter van", cls: "Executive van", seats: 14, best: "wedding parties, corporate teams and groups" },
  { name: "Stretch limousine", cls: "Limousine", seats: 8, best: "proms, weddings and celebrations" },
];

export const MARYLAND_BATCH3 = [
  // ---------------------------------------------------------------- CITIES
  {
    slug: "ashburn-limo-service",
    type: "city",
    name: "Ashburn",
    badge: "Loudoun County Limo Service",
    h1: "Ashburn Limo Service",
    metaTitle: "Ashburn Limo Service | Black Car to Dulles & DC",
    metaDescription:
      "Chauffeured limo and black car service in Ashburn, VA. Dulles pickups minutes away, One Loudoun, Brambleton and data-center corridor. Call (877) 609-1919.",
    stats: [
      { label: "Dulles (IAD)", value: "10–20 minutes, depending on traffic" },
      { label: "Reagan (DCA)", value: "45–70 minutes, depending on traffic" },
      { label: "Pricing", value: "Flat rate, confirmed before you book" },
    ],
    intro: [
      "IAD Airport Limo runs private chauffeured car service throughout Ashburn, Virginia, from One Loudoun and Ashburn Village to Brambleton, Broadlands, Belmont and the data-center blocks along Loudoun County Parkway and Waxpool Road. Airport transfers, executive travel and evening bookings are all handled by licensed, background-checked chauffeurs in commercially insured vehicles.",
      "Ashburn sits so close to Washington Dulles that the ride is often shorter than the walk from the parking garage to the terminal. That proximity is exactly why a scheduled chauffeur makes sense here: no shuttle bus loop, no hunting for a space in the economy lot, and no rideshare surge when a red-eye lands at midnight. Rates are flat and confirmed before you book, whether the trip is to Dulles, Reagan National, BWI or an office in Tysons.",
    ],
    highlights: [
      "Dulles pickups and drop-offs with real-time flight tracking and 45 minutes of complimentary wait time on domestic arrivals, 60 on international",
      "Chauffeurs who know the Greenway, Route 7, Route 28 and the Loudoun County Parkway back way into the airport",
      "Corporate service for the Ashburn data-center corridor, One Loudoun offices and visiting technical teams",
      "Silver Line connections at Ashburn and Loudoun Gateway stations for travelers mixing rail and car",
      "Flat-rate or hourly pricing confirmed in writing, never adjusted for demand",
      "Licensed and insured Virginia and Maryland carrier with 24/7 dispatch",
    ],
    sections: [
      {
        h2: "Where we drive in Ashburn",
        paragraphs: [
          "Pickups cover every part of the community: One Loudoun and its restaurants and theater, Ashburn Village, Ashburn Farm, Broadlands, Brambleton Town Center, Belmont Country Club, Loudoun Station beside the Metro and the newer neighborhoods along Belmont Ridge Road. We also serve the Washington Commanders' team headquarters and practice facility, Topgolf Loudoun and the office campuses clustered around Waxpool Road and the Loudoun County Parkway.",
          "The data-center corridor brings a steady flow of engineers, vendors and executives who need a reliable car between a Dulles arrival, a site visit off Route 606 and a hotel in Ashburn or Sterling. We build those itineraries as one reservation with a single confirmed rate, and dispatch monitors each leg.",
        ],
      },
      {
        h2: "Ashburn to Dulles, Reagan and BWI",
        paragraphs: [
          "Dulles is roughly 10 to 20 minutes from most Ashburn addresses depending on traffic, via the Dulles Greenway or Route 28 to the Dulles Access Road. Reagan National usually takes 45 to 70 minutes on the Toll Road and I-66, and BWI is a longer run across the Beltway and the Baltimore-Washington Parkway. Every airport transfer is tracked from departure, so an early arrival or a long taxi to the gate changes nothing on your end.",
          "For departures we schedule against your flight time and the airline's check-in guidance, with a buffer for the Greenway toll plaza and the Route 28 interchange during the morning rush. Meet and greet at baggage claim is available on request, and car seats can be added for families.",
        ],
      },
      {
        h2: "Corporate, group and evening service",
        paragraphs: [
          "Sedans handle the daily executive traffic between Ashburn and Tysons, Reston or downtown Washington. Sprinter vans move project teams between data-center sites, and stretch limousines and SUVs cover weddings at Belmont, birthdays at One Loudoun and dinner runs to Leesburg or the Loudoun wineries. Hourly, as-directed service is the simplest option when a day involves several stops.",
          "Free cancellation applies up to 3 hours before pickup for sedans and SUVs and 12 hours for Sprinter vans, limousines and special events, so a changed meeting or a rescheduled flight does not cost you anything.",
        ],
      },
    ],
    vehicles: VEHICLES,
    faqs: [
      {
        q: "How far is Ashburn from Dulles Airport by car?",
        a: "Most Ashburn addresses are within about 10 to 20 minutes of the Dulles terminal depending on traffic, using the Greenway or Route 28. We schedule your pickup against live conditions and your flight status.",
      },
      {
        q: "What does an Ashburn limo service to Dulles cost?",
        a: "Every trip is a flat rate by vehicle and address, confirmed before you book, with no surge pricing. Call (877) 609-1919 or use the online booking form for an exact quote.",
      },
      {
        q: "Can the chauffeur meet me inside the terminal at Dulles?",
        a: "Yes. Optional meet and greet places your chauffeur at baggage claim with a name sign. Complimentary wait time is 45 minutes on domestic arrivals and 60 minutes on international arrivals.",
      },
      {
        q: "Do you handle transportation for data-center visits in Ashburn?",
        a: "Yes. Corporate accounts cover recurring visits, multi-site days and team transfers in Sprinter vans, with one confirmed rate for the full itinerary.",
      },
      {
        q: "Is Ashburn service available overnight?",
        a: "Dispatch runs 24/7, so late arrivals, early departures and overnight cargo-schedule pickups are booked and monitored the same way as a midday trip.",
      },
    ],
    related: [
      { label: "IAD to Ashburn Car Service", to: "/iad-to-ashburn-va" },
      { label: "Sterling Limo Service", to: "/sterling-limo-service" },
      { label: "Leesburg Limo Service", to: "/leesburg-limo-service" },
      { label: "Herndon Limo Service", to: "/herndon-limo-service" },
      { label: "Northern Virginia Hourly Car Service", to: "/northern-virginia-hourly-chauffeur-service" },
      { label: "Dulles Airport Car Service", to: "/iad-dulles-airport-car-service" },
      { label: "Loudoun Wine Tours", to: "/wine-tours" },
      { label: "Corporate Transportation", to: "/corporate" },
    ],
    schema: { areaServed: ["Ashburn, VA", "Loudoun County"], serviceType: "Limousine and car service" },
  },
  {
    slug: "sterling-limo-service",
    type: "city",
    name: "Sterling",
    badge: "Loudoun County Limo Service",
    h1: "Sterling Limo Service",
    metaTitle: "Sterling VA Limo Service | Car Service Next to IAD",
    metaDescription:
      "Private limo and black car service in Sterling, VA, next door to Dulles. Cascades, Potomac Falls, Dulles Town Center and airport hotels. Call (877) 609-1919.",
    stats: [
      { label: "Dulles (IAD)", value: "10–15 minutes, depending on traffic" },
      { label: "Reagan (DCA)", value: "45–65 minutes, depending on traffic" },
      { label: "Pricing", value: "Flat rate, confirmed before you book" },
    ],
    intro: [
      "IAD Airport Limo provides chauffeured limo and black car service across Sterling, Virginia, including Sterling Park, Cascades, Countryside, Sugarland Run, Potomac Falls and Lowes Island, plus the hotels and office parks along Route 28 and Old Ox Road. Sterling borders Dulles Airport, which makes it one of the fastest airport transfers we operate.",
      "Being next door to the airport is a mixed blessing when you are driving yourself: the Route 28 ramps back up quickly in the morning and again in the late afternoon. A booked chauffeur removes the question entirely. You leave from your driveway or hotel lobby, the flight is tracked from the moment it departs, and the price is a flat rate confirmed before you book.",
    ],
    highlights: [
      "Airport runs of roughly 10 to 15 minutes from most of Sterling, with flight tracking on every booking",
      "Hotel pickups along Route 28, Waxpool Road and the Dulles Town Center area for visiting business travelers",
      "Chauffeurs experienced with Route 7, Route 28, Cascades Parkway, Algonkian Parkway and Old Ox Road",
      "Loudoun Gateway Silver Line connections for travelers who ride Metro in and take a car out",
      "Sedans, SUVs, Sprinter vans and stretch limousines under one dispatch",
      "Licensed and insured Virginia and Maryland carrier, 24/7",
    ],
    sections: [
      {
        h2: "Sterling neighborhoods and destinations we serve",
        paragraphs: [
          "Our chauffeurs pick up throughout Sterling: the older streets of Sterling Park near Sterling Boulevard, the Cascades and Countryside communities off Algonkian Parkway, Potomac Falls and Lowes Island near the river, and the townhomes around Church Road. Regular destinations include Dulles Town Center, the Dulles 28 Centre shopping district, Algonkian Regional Park for events and picnics, and the data-center and logistics sites strung along Old Ox Road and Route 606.",
          "Sterling has a large inventory of airport hotels, and a good share of our work here is moving executives between a Route 28 hotel, a client office in Ashburn or Reston and the Dulles terminal, often several times over a week. A corporate account keeps that simple: one point of contact, one confirmed rate per leg, and dispatch watching every pickup.",
        ],
      },
      {
        h2: "Sterling to Dulles, Reagan National and BWI",
        paragraphs: [
          "Dulles is the short hop, about 10 to 15 minutes depending on traffic on Route 28 or the Dulles Access Road. Reagan National generally takes 45 to 65 minutes via the Toll Road and I-66, and BWI is a longer trip across the American Legion Bridge and around the Beltway. Airport pickups include 45 minutes of complimentary waiting on domestic flights and 60 minutes on international flights, so a customs line does not turn into a phone call.",
          "For early departures we schedule from your flight time and the airline's check-in guidance, and we add a buffer if the pickup falls inside the Route 28 morning rush.",
        ],
      },
      {
        h2: "Events, groups and nights out",
        paragraphs: [
          "Beyond airport work, Sterling clients book us for weddings and receptions at Loudoun venues, birthday and anniversary dinners in Leesburg or Reston Town Center, concerts at Wolf Trap and Jiffy Lube Live, and family trips into Washington. A Sprinter van seats 14 for a group evening, and a stretch limousine covers proms and milestone celebrations. Car seats are available on request for family bookings.",
          "Cancellation is free up to 3 hours before pickup for sedans and SUVs, and up to 12 hours for Sprinter vans, limousines and special-event reservations.",
        ],
      },
    ],
    vehicles: VEHICLES,
    faqs: [
      {
        q: "How long does it take to get from Sterling to Dulles Airport?",
        a: "Usually about 10 to 15 minutes depending on traffic, using Route 28 or the Dulles Access Road. Because the run is short, we watch your flight closely and time the pickup so you are not waiting at the curb.",
      },
      {
        q: "How is Sterling limo service priced?",
        a: "Point-to-point trips are one flat rate by vehicle and address; multi-stop days are hourly. Either way the price is confirmed before you book. Call (877) 609-1919 for a quote.",
      },
      {
        q: "Do you pick up from Sterling hotels near the airport?",
        a: "Yes. We serve the hotels along Route 28, Waxpool Road and around Dulles Town Center, and the chauffeur meets you in the lobby rather than at the curb if you prefer.",
      },
      {
        q: "Can I book a car from Sterling to Reagan National or BWI instead of Dulles?",
        a: "Yes. All three airports are served with flight tracking and the same complimentary wait time, and the rate for each is confirmed in advance.",
      },
      {
        q: "What vehicles are available in Sterling?",
        a: "Mercedes-Benz E-Class and BMW 7 Series sedans, Cadillac Escalade and Chevrolet Suburban SUVs, 14-passenger Mercedes Sprinter vans and stretch limousines.",
      },
    ],
    related: [
      { label: "Ashburn Limo Service", to: "/ashburn-limo-service" },
      { label: "Herndon Limo Service", to: "/herndon-limo-service" },
      { label: "Leesburg Limo Service", to: "/leesburg-limo-service" },
      { label: "Dulles Expo Center Transportation", to: "/dulles-expo-center-transportation" },
      { label: "Dulles Airport Car Service", to: "/iad-dulles-airport-car-service" },
      { label: "IAD to Northern Virginia", to: "/iad-to-northern-virginia" },
      { label: "Wolf Trap Transportation", to: "/wolf-trap-transportation" },
      { label: "Airport Transfers", to: "/airport-transfer" },
    ],
    schema: { areaServed: ["Sterling, VA", "Loudoun County"], serviceType: "Limousine and car service" },
  },
  {
    slug: "leesburg-limo-service",
    type: "city",
    name: "Leesburg",
    badge: "Loudoun County Limo Service",
    h1: "Leesburg Limo Service",
    metaTitle: "Leesburg Limo Service | Black Car & Wine Country",
    metaDescription:
      "Chauffeured limo service in Leesburg, VA: Dulles transfers, historic downtown, Lansdowne, Loudoun wine-country days and weddings. Call (877) 609-1919.",
    stats: [
      { label: "Dulles (IAD)", value: "15–30 minutes, depending on traffic" },
      { label: "Reagan (DCA)", value: "55–80 minutes, depending on traffic" },
      { label: "Pricing", value: "Flat rate or hourly, confirmed in writing" },
    ],
    intro: [
      "IAD Airport Limo delivers private chauffeured transportation in Leesburg, Virginia, the Loudoun County seat: airport transfers from the historic downtown and Lansdowne, executive travel along the Route 7 corridor, and hourly service for wine-country days, weddings and estate events across western Loudoun.",
      "Leesburg is where the Dulles Greenway ends and the countryside begins. Downtown still runs on its colonial grid of King Street and Market Street around the Loudoun County Courthouse, while Lansdowne, the Village at Leesburg and the Route 7 shopping corridor sit to the east. Our chauffeurs know both sides of town, and they know how much time to leave when a Saturday brings courthouse events, a festival on King Street or heavy winery traffic on Route 9 and Route 15.",
    ],
    highlights: [
      "Dulles transfers via the Greenway in roughly 15 to 30 minutes depending on traffic, with flight tracking on every trip",
      "Hourly wine-country service to Loudoun vineyards such as Stone Tower, Bluemont, Breaux and Sunset Hills",
      "Wedding and event transportation for Lansdowne Resort, Morven Park, Oatlands and downtown venues",
      "Pickups from Lansdowne, River Creek, Potomac Station, Exeter and the historic district",
      "Written flat-rate or hourly pricing with no surge, plus a named chauffeur the day before",
      "Licensed and insured Virginia and Maryland carrier with 24/7 dispatch",
    ],
    sections: [
      {
        h2: "Serving downtown Leesburg, Lansdowne and the Route 7 corridor",
        paragraphs: [
          "We collect passengers from the townhouses and inns of the historic district, from Lansdowne Resort and the surrounding golf communities, from River Creek and Potomac Station, and from hotels near Leesburg Premium Outlets and the Village at Leesburg. Common drop-offs include the Loudoun County Government Center and courthouse complex, Inova Loudoun Hospital, Ida Lee Park, Leesburg Executive Airport for private aviation connections, and Morven Park for equestrian and social events.",
          "Leesburg is also the natural staging point for western Loudoun. Guests staying in town use us for evenings in Middleburg, tastings in Purcellville and Hillsboro, and day trips to Harpers Ferry.",
        ],
      },
      {
        h2: "Leesburg to Dulles, Reagan National and BWI",
        paragraphs: [
          "Dulles is a straight shot down the Dulles Greenway and the Access Road, typically 15 to 30 minutes depending on traffic. Reagan National usually takes 55 to 80 minutes on the Toll Road and I-66, and BWI is a longer trip across the Beltway. We track every arrival and hold 45 minutes free for domestic flights and 60 for international, and meet and greet inside the terminal is available on request.",
          "Departures are scheduled from your flight time and the airline's check-in guidance, with extra margin on Friday afternoons when the Greenway and Route 7 slow together.",
        ],
      },
      {
        h2: "Wine country, weddings and estate events",
        paragraphs: [
          "Loudoun's wineries and farm breweries are spread across narrow rural roads, and a designated chauffeur is the sensible way to visit them. Hourly bookings let you set the route: Stone Tower Winery on Hogback Mountain, Bluemont Vineyard on the ridge, Breaux Vineyards near Hillsboro, Sunset Hills in Purcellville or Fabbioli Cellars north of town. Sprinter vans carry up to 14 for group tastings.",
          "For weddings at Lansdowne, Morven Park, Oatlands or a private farm, we run the getting-ready pickups, the ceremony-to-reception move and the getaway car under one reservation. Cancellation is free up to 3 hours before pickup for sedans and SUVs and 12 hours for Sprinter vans, limousines and special events.",
        ],
      },
    ],
    vehicles: VEHICLES,
    faqs: [
      {
        q: "How long is the ride from Leesburg to Dulles Airport?",
        a: "Typically 15 to 30 minutes depending on traffic, using the Dulles Greenway and the Dulles Access Road. We schedule the pickup against live conditions and your flight status.",
      },
      {
        q: "What does a Leesburg limo or car service cost?",
        a: "Airport and point-to-point trips are flat rates by vehicle and address; winery days and multi-stop bookings are hourly. The price is confirmed before you book. Call (877) 609-1919 for a quote.",
      },
      {
        q: "Do you run wine tours from Leesburg?",
        a: "Yes. Hourly, as-directed service covers any combination of Loudoun wineries and breweries, with the chauffeur waiting at each stop. Sedans, SUVs and 14-passenger Sprinter vans are available.",
      },
      {
        q: "Can you provide wedding transportation at Lansdowne Resort or Morven Park?",
        a: "Yes. We coordinate sedans, SUVs, Sprinter vans and stretch limousines for wedding parties and guests at Leesburg-area venues, with the itinerary confirmed the day before.",
      },
      {
        q: "Do you serve Purcellville, Middleburg and western Loudoun from Leesburg?",
        a: "Yes. Leesburg is our staging point for western Loudoun, and we regularly run to Middleburg, Purcellville, Hillsboro, Waterford and Harpers Ferry.",
      },
    ],
    related: [
      { label: "IAD to Leesburg Car Service", to: "/iad-to-leesburg-va" },
      { label: "Ashburn Limo Service", to: "/ashburn-limo-service" },
      { label: "Sterling Limo Service", to: "/sterling-limo-service" },
      { label: "Northern Virginia Anniversary Limo", to: "/northern-virginia-anniversary-limo" },
      { label: "Wine Tours", to: "/wine-tours" },
      { label: "Wedding Limo", to: "/wedding-limo" },
      { label: "IAD to Winchester", to: "/iad-to-winchester-va" },
      { label: "Dulles Airport Car Service", to: "/iad-dulles-airport-car-service" },
    ],
    schema: { areaServed: ["Leesburg, VA", "Loudoun County"], serviceType: "Limousine and car service" },
  },
  {
    slug: "reston-limo-service",
    type: "city",
    name: "Reston",
    badge: "Fairfax County Limo Service",
    h1: "Reston Limo Service",
    metaTitle: "Reston Limo Service | Black Car & Airport Transfers",
    metaDescription:
      "Executive limo and black car service in Reston, VA. Reston Town Center, Dulles Toll Road offices, Silver Line hotels and Dulles transfers. Call (877) 609-1919.",
    stats: [
      { label: "Dulles (IAD)", value: "15–25 minutes, depending on traffic" },
      { label: "Reagan (DCA)", value: "35–60 minutes, depending on traffic" },
      { label: "Pricing", value: "Flat rate, confirmed before you book" },
    ],
    intro: [
      "IAD Airport Limo provides chauffeured limo and black car service in Reston, Virginia, covering Reston Town Center, Lake Anne, North Point, South Lakes, Hunters Woods and the corporate campuses along Sunrise Valley Drive and Sunset Hills Road. Airport transfers, corporate accounts and hourly service are all confirmed at a flat rate before you ride.",
      "Reston was planned around villages and a walkable center, and its business district now anchors the Dulles Toll Road corridor with headquarters offices, hotels and two Silver Line stations. Most of our Reston work is executive travel: a Dulles arrival to a Town Center hotel, a morning run between offices on the Toll Road, an afternoon meeting in Tysons or Washington, and a return to the airport with the flight tracked the whole way.",
    ],
    highlights: [
      "Dulles transfers in roughly 15 to 25 minutes depending on traffic, with flight tracking and 45 or 60 minutes of complimentary wait time",
      "Corporate service for headquarters campuses along Sunrise Valley Drive, Sunset Hills Road and Reston Parkway",
      "Hotel pickups at Reston Town Center and near the Wiehle-Reston East and Reston Town Center Metro stations",
      "Hourly, as-directed service for multi-meeting days across Reston, Herndon, Tysons and DC",
      "Sedans, SUVs and Sprinter vans for visiting teams, with one confirmed rate per itinerary",
      "Licensed and insured Virginia and Maryland carrier with 24/7 dispatch",
    ],
    sections: [
      {
        h2: "Reston pickups and destinations",
        paragraphs: [
          "We serve all of Reston: Town Center and its hotels and restaurants, the Lake Anne Plaza village, the residential clusters of North Point, Hunters Woods, South Lakes and Tall Oaks, and the townhomes and condos around Wiehle Avenue. Business destinations include the corporate campuses along the Toll Road, Reston Hospital Center, the Reston Association facilities and the office towers along Reston Parkway and Town Center Parkway.",
          "For visiting executives we recommend the Town Center hotels, where a chauffeur can wait in the lobby, and for teams arriving together a Sprinter van moves everyone from the Dulles curb to the hotel in one trip. Corporate accounts receive a single point of contact for changes and monthly invoicing.",
        ],
      },
      {
        h2: "Reston to Dulles, Reagan National and BWI",
        paragraphs: [
          "Dulles is a short drive west on the Toll Road or the Access Road, typically 15 to 25 minutes depending on traffic. Reagan National takes about 35 to 60 minutes east on the Toll Road and I-66, and BWI is a longer trip around the Beltway. Every arrival is tracked in real time; domestic pickups include 45 minutes of complimentary waiting and international pickups 60, and optional meet and greet places the chauffeur at baggage claim.",
          "For morning departures, remember that the Toll Road ramps at Wiehle Avenue and Reston Parkway build early. We schedule from your flight time and check-in guidance with that in mind.",
        ],
      },
      {
        h2: "Evenings, events and family travel",
        paragraphs: [
          "Reston residents book us for dinners and shows at Town Center, concerts at Wolf Trap, evenings at the Kennedy Center or Capital One Hall, and family trips to Washington museums. Stretch limousines cover proms at South Lakes and nearby high schools, and SUVs handle family airport runs with car seats installed on request.",
          "Cancellation is free up to 3 hours before pickup for sedans and SUVs, and up to 12 hours for Sprinter vans, limousines and special-event bookings.",
        ],
      },
    ],
    vehicles: VEHICLES,
    faqs: [
      {
        q: "How long does it take to get from Reston to Dulles Airport?",
        a: "Usually 15 to 25 minutes depending on traffic, via the Dulles Toll Road or the Dulles Access Road. We schedule your pickup against live conditions and your flight status.",
      },
      {
        q: "How much is a Reston car service to Dulles or Reagan National?",
        a: "Airport trips are flat rates by vehicle and address, confirmed before you book, with no surge pricing. Call (877) 609-1919 or book online for an exact quote.",
      },
      {
        q: "Do you offer corporate accounts in Reston?",
        a: "Yes. Companies along the Toll Road corridor use standing accounts for recurring airport transfers, visiting-executive itineraries and team moves in Sprinter vans, with one point of contact and consolidated invoicing.",
      },
      {
        q: "Can I book hourly service for a day of meetings from Reston?",
        a: "Yes. As-directed hourly service keeps the chauffeur with you across Reston, Herndon, Tysons and Washington, with unlimited stops during the booking.",
      },
      {
        q: "Will the chauffeur meet me at the Reston hotel lobby?",
        a: "Yes. The chauffeur can wait in the lobby of any Reston Town Center or Toll Road hotel, and non-airport pickups include 15 minutes of complimentary wait time.",
      },
    ],
    related: [
      { label: "IAD to Reston Car Service", to: "/iad-to-reston" },
      { label: "Herndon Limo Service", to: "/herndon-limo-service" },
      { label: "Tysons Limo Service", to: "/tysons-limo-service" },
      { label: "Northern Virginia Hourly Car Service", to: "/northern-virginia-hourly-chauffeur-service" },
      { label: "Wolf Trap Transportation", to: "/wolf-trap-transportation" },
      { label: "Corporate Transportation", to: "/corporate" },
      { label: "Dulles Airport Car Service", to: "/iad-dulles-airport-car-service" },
      { label: "Fleet", to: "/fleet" },
    ],
    schema: { areaServed: ["Reston, VA", "Fairfax County"], serviceType: "Limousine and car service" },
  },
  {
    slug: "herndon-limo-service",
    type: "city",
    name: "Herndon",
    badge: "Fairfax County Limo Service",
    h1: "Herndon Limo Service",
    metaTitle: "Herndon Limo Service | Chauffeur Minutes from IAD",
    metaDescription:
      "Chauffeured limo and car service in Herndon, VA. Historic downtown, Toll Road tech offices, airport hotels and Dulles transfers nearby. Call (877) 609-1919.",
    stats: [
      { label: "Dulles (IAD)", value: "10–20 minutes, depending on traffic" },
      { label: "Reagan (DCA)", value: "40–65 minutes, depending on traffic" },
      { label: "Pricing", value: "Flat rate, confirmed before you book" },
    ],
    intro: [
      "IAD Airport Limo provides licensed chauffeured limo and black car service in Herndon, Virginia, from the historic downtown around Elden Street and the old depot to the technology offices, hotels and conference centers along the Dulles Toll Road, Herndon Parkway and Woodland Park. Dulles is a few minutes away, and every airport trip is flight-tracked and flat-rated.",
      "Herndon is a town of two speeds: a small-town main street with a caboose, a farmers market and the W&OD Trail running through it, and a business corridor of government contractors, cloud-computing campuses and airport hotels. We serve both, whether that means a family pickup on a quiet street off Dranesville Road or a rolling week of executive transfers between a Toll Road hotel and the Dulles terminal.",
    ],
    highlights: [
      "Dulles transfers of roughly 10 to 20 minutes depending on traffic, with flight tracking and complimentary wait time",
      "Hotel and conference-center pickups along Herndon Parkway, Worldgate and the Dulles Toll Road corridor",
      "Corporate service for technology, aerospace and federal-contracting offices in Woodland Park and Dulles Corner",
      "Silver Line connections at the Herndon and Innovation Center stations",
      "Chauffeurs who know Elden Street, Centreville Road, Route 28 and the Toll Road ramps",
      "Licensed and insured Virginia and Maryland carrier with 24/7 dispatch",
    ],
    sections: [
      {
        h2: "Serving downtown Herndon and the Toll Road corridor",
        paragraphs: [
          "Pickups cover the historic downtown near the Herndon Depot and Municipal Center, the neighborhoods along Dranesville Road and Herndon Parkway, the Fox Mill and Kingstream areas to the south, and the hotels clustered around Worldgate and the Toll Road. Business destinations include the office campuses in Woodland Park and Dulles Corner, the conference hotels near Route 28, Frying Pan Farm Park for events, and the Herndon Metro station for travelers combining Silver Line and car.",
          "Because Herndon holds so many airport hotels, a large share of our bookings are repeat executive transfers: arrival at Dulles, check-in at a Herndon hotel, meetings in Reston or Tysons, and a departure a few days later. A corporate account ties those legs together under one contact and one confirmed rate each.",
        ],
      },
      {
        h2: "Herndon to Dulles, Reagan National and BWI",
        paragraphs: [
          "Dulles is about 10 to 20 minutes from most of Herndon depending on traffic, using the Toll Road, the Access Road or Route 28. Reagan National takes roughly 40 to 65 minutes via the Toll Road and I-66, and BWI is a longer run around the Beltway and up the Baltimore-Washington Parkway. Airport arrivals are tracked in real time with 45 minutes of complimentary wait on domestic flights and 60 on international, and optional meet and greet at baggage claim.",
          "Herndon's hotel curbs get busy at shift-change hours, so we confirm the exact pickup spot the evening before and the chauffeur texts on arrival.",
        ],
      },
      {
        h2: "Events, groups and family travel",
        paragraphs: [
          "Local clients book us for the annual Herndon Festival weekend, dinners in Reston Town Center, shows at Wolf Trap and Capital One Hall, proms at Herndon High and South Lakes, and family days in Washington. Sprinter vans carry up to 14 for a group evening, and SUVs handle airport runs with strollers and car seats, which we install on request.",
          "Cancellation is free up to 3 hours before pickup for sedans and SUVs and 12 hours for Sprinter vans, limousines and special-event bookings.",
        ],
      },
    ],
    vehicles: VEHICLES,
    faqs: [
      {
        q: "How far is Herndon from Dulles Airport?",
        a: "Most Herndon addresses are within about 10 to 20 minutes of the terminal depending on traffic, via the Toll Road, the Access Road or Route 28. Pickups are timed to your flight status.",
      },
      {
        q: "What does a Herndon limo service to the airport cost?",
        a: "Every airport trip is a flat rate by vehicle and address, confirmed before you book, with no surge pricing. Call (877) 609-1919 or use the booking page for an exact quote.",
      },
      {
        q: "Do you pick up from Herndon airport hotels?",
        a: "Yes. We serve all the hotels along Herndon Parkway, Worldgate and the Dulles Toll Road corridor, and the chauffeur can meet you in the lobby.",
      },
      {
        q: "Can you handle recurring corporate transfers in Herndon?",
        a: "Yes. Corporate accounts cover recurring airport transfers, visiting-executive itineraries and team moves in Sprinter vans, with a single point of contact and consolidated billing.",
      },
      {
        q: "Are car seats available for family trips from Herndon?",
        a: "Yes. Infant, convertible and booster seats are available on request when you book, at no charge for the request itself; just tell us the ages of the children.",
      },
    ],
    related: [
      { label: "IAD to Herndon Car Service", to: "/iad-to-herndon" },
      { label: "Reston Limo Service", to: "/reston-limo-service" },
      { label: "Sterling Limo Service", to: "/sterling-limo-service" },
      { label: "Ashburn Limo Service", to: "/ashburn-limo-service" },
      { label: "Dulles Expo Center Transportation", to: "/dulles-expo-center-transportation" },
      { label: "Dulles Airport Car Service", to: "/iad-dulles-airport-car-service" },
      { label: "Corporate Transportation", to: "/corporate" },
    ],
    schema: { areaServed: ["Herndon, VA", "Fairfax County"], serviceType: "Limousine and car service" },
  },
  {
    slug: "tysons-limo-service",
    type: "city",
    name: "Tysons",
    badge: "Fairfax County Limo Service",
    h1: "Tysons Limo Service",
    metaTitle: "Tysons Limo Service | Executive Black Car Tysons VA",
    metaDescription:
      "Executive limo and black car service in Tysons, VA. Corporate headquarters, Tysons Corner Center, Galleria, hotels and airport transfers. Call (877) 609-1919.",
    stats: [
      { label: "Dulles (IAD)", value: "20–35 minutes, depending on traffic" },
      { label: "Reagan (DCA)", value: "25–45 minutes, depending on traffic" },
      { label: "Pricing", value: "Flat rate or hourly, confirmed in writing" },
    ],
    intro: [
      "IAD Airport Limo provides executive limo and black car service in Tysons, Virginia, the largest business district in the Washington suburbs. We serve the corporate headquarters along Route 7, Route 123 and Greensboro Drive, the hotels around Tysons Corner Center and Tysons Galleria, the Boro and Capital One Center, and the four Silver Line stations that link them.",
      "Tysons sits at the meeting point of the Capital Beltway, Route 7, Route 123 and the Dulles Toll Road, which makes it convenient from every airport and difficult to drive at rush hour. Our chauffeurs work the district daily and route around the Beltway ramps and the Route 7 crawl before it becomes your delay. Pricing is flat for airport and point-to-point trips, hourly for meeting days, and confirmed in writing before you book.",
    ],
    highlights: [
      "Executive transfers between Tysons headquarters and Dulles, Reagan National or BWI, with real-time flight tracking",
      "Hourly, as-directed service for multi-meeting days across Tysons, Reston, Arlington and downtown Washington",
      "Hotel pickups at the Ritz-Carlton, the Hyatt at Tysons Corner Center, the Marriott, the Sheraton and the Archer",
      "Concert and theater service to Capital One Hall and Wolf Trap, with a staged pickup after the show",
      "Sedans and SUVs for executives, Sprinter vans for boards, delegations and roadshow teams",
      "Licensed and insured Virginia and Maryland carrier with 24/7 dispatch",
    ],
    sections: [
      {
        h2: "Corporate car service in Tysons",
        paragraphs: [
          "The bulk of our Tysons work is corporate: recurring airport transfers for executives, roadshow days that touch three or four offices between Tysons and Washington, board-meeting logistics, and conference groups moving between hotels and headquarters campuses. Regular destinations include the office towers along Greensboro Drive, Jones Branch Drive, Westpark Drive and Tysons Boulevard, Capital One Center, the Boro, and the professional-services firms clustered near the Tysons and Greensboro Metro stations.",
          "Corporate accounts get a single dispatcher contact, consolidated invoicing and a named chauffeur the day before. Changes during the day are handled by text or phone without anyone leaving a meeting.",
        ],
      },
      {
        h2: "Tysons to Dulles, Reagan National and BWI",
        paragraphs: [
          "Dulles is typically 20 to 35 minutes depending on traffic, west on Route 7 or Route 123 to the Toll Road and the Access Road. Reagan National usually takes 25 to 45 minutes via the Beltway and the GW Parkway or I-66. BWI is a longer trip across the American Legion Bridge and around the Beltway to the Baltimore-Washington Parkway. Each airport pickup includes flight tracking, 45 minutes of complimentary wait on domestic arrivals and 60 on international, and optional meet and greet at baggage claim.",
          "Departures are scheduled from your flight time and the airline's check-in guidance, with a buffer for the Beltway during the evening rush.",
        ],
      },
      {
        h2: "Shopping, dining, shows and celebrations",
        paragraphs: [
          "Outside office hours, Tysons is a destination in its own right. We run shopping and dinner bookings to Tysons Corner Center and Tysons Galleria, performances at Capital One Hall, summer evenings at Wolf Trap a few miles west, and celebrations at the district's hotels. Stretch limousines and Sprinter vans handle proms, anniversaries and birthday groups, and the chauffeur stages nearby so the return is waiting when you walk out.",
          "Cancellation is free up to 3 hours before pickup for sedans and SUVs and 12 hours for Sprinter vans, limousines and special-event reservations.",
        ],
      },
    ],
    vehicles: VEHICLES,
    faqs: [
      {
        q: "How long does it take to get from Tysons to Dulles Airport?",
        a: "Typically 20 to 35 minutes depending on traffic, using Route 7 or Route 123 to the Dulles Toll Road and the Access Road. We schedule your pickup against live conditions and your flight status.",
      },
      {
        q: "What does Tysons limo service cost?",
        a: "Airport and point-to-point trips are flat rates by vehicle and address; multi-meeting days are hourly with a minimum. Both are confirmed in writing before you book. Call (877) 609-1919 for a quote.",
      },
      {
        q: "Is Reagan National or Dulles closer to Tysons?",
        a: "Drive times are similar and depend on the time of day. Reagan National is usually 25 to 45 minutes via the Beltway and GW Parkway, and Dulles 20 to 35 minutes via the Toll Road. We serve both, and BWI, with the same flight tracking and wait time.",
      },
      {
        q: "Do you provide hourly chauffeur service for meetings in Tysons?",
        a: "Yes. As-directed hourly service keeps the chauffeur with you across Tysons, Reston, Arlington and Washington, with unlimited stops during the booking.",
      },
      {
        q: "Can you move a conference group between Tysons hotels and an office campus?",
        a: "Yes. Sprinter vans carry up to 14, and multiple vehicles can run under one reservation for larger delegations, with dispatch coordinating timing.",
      },
    ],
    related: [
      { label: "IAD to Tysons Car Service", to: "/iad-to-tysons" },
      { label: "Capital One Hall Transportation", to: "/capital-one-hall-transportation" },
      { label: "McLean Limo Service", to: "/mclean-limo-service" },
      { label: "Reston Limo Service", to: "/reston-limo-service" },
      { label: "Northern Virginia Hourly Car Service", to: "/northern-virginia-hourly-chauffeur-service" },
      { label: "Wolf Trap Transportation", to: "/wolf-trap-transportation" },
      { label: "Corporate Transportation", to: "/corporate" },
      { label: "Washington DC Airport Transfers", to: "/washington-dc-airport-transfers" },
    ],
    schema: { areaServed: ["Tysons, VA", "Fairfax County"], serviceType: "Limousine and car service" },
  },
  {
    slug: "mclean-limo-service",
    type: "city",
    name: "McLean",
    badge: "Fairfax County Limo Service",
    h1: "McLean Limo Service",
    metaTitle: "McLean Limo Service | Black Car McLean VA",
    metaDescription:
      "Discreet chauffeured limo and black car service in McLean, VA. Residential pickups, Great Falls dining, Dulles and Reagan transfers. Call (877) 609-1919.",
    stats: [
      { label: "Dulles (IAD)", value: "25–40 minutes, depending on traffic" },
      { label: "Reagan (DCA)", value: "20–40 minutes, depending on traffic" },
      { label: "Pricing", value: "Flat rate, confirmed before you book" },
    ],
    intro: [
      "IAD Airport Limo provides private chauffeured limo and black car service in McLean, Virginia, with discreet residential pickups across Langley, Chesterbrook, Franklin Park, Balls Hill, Kent Gardens and the estates along Georgetown Pike, along with executive travel to Tysons, Washington and all three airports.",
      "McLean is residential first and corporate second: quiet streets off Chain Bridge Road and Old Dominion Drive, a village center of restaurants and shops, and the government and business campuses at Langley and along Route 123. Our chauffeurs are accustomed to gated driveways, early departures and clients who expect a car to arrive on time without conversation about it. Rates are flat and confirmed before you book.",
    ],
    highlights: [
      "Residential pickups with the chauffeur at the door, not the curb, and 15 minutes of complimentary wait time on non-airport pickups",
      "Dulles and Reagan National transfers with flight tracking and 45 or 60 minutes of complimentary airport waiting",
      "Chauffeurs experienced on Route 123, the GW Parkway, Georgetown Pike, Chain Bridge and the Beltway ramps at Tysons",
      "Dinner and event service to Great Falls, Tysons, Georgetown and the Kennedy Center",
      "Sedans and SUVs for executives and families, Sprinter vans and limousines for gatherings",
      "Licensed and insured Virginia and Maryland carrier with 24/7 dispatch",
    ],
    sections: [
      {
        h2: "McLean neighborhoods and destinations",
        paragraphs: [
          "We pick up throughout McLean, from the village center at Chain Bridge Road and Old Dominion Drive to Langley, Chesterbrook, West McLean, Franklin Park, Kent Gardens, Balls Hill and the larger properties along Georgetown Pike toward Great Falls. Regular destinations include the McLean Community Center, the Langley and McLean high schools, the Potomac School and the Langley School, the government facilities at Langley, and the corporate offices that spill over from Tysons along Route 123 and Jones Branch Drive.",
          "Many McLean bookings are standing arrangements: a weekly airport run, a school-day pickup for a visiting grandparent, or a monthly board meeting downtown. We keep the same chauffeur on those where possible.",
        ],
      },
      {
        h2: "McLean to Dulles, Reagan National and BWI",
        paragraphs: [
          "Dulles is typically 25 to 40 minutes depending on traffic, via Route 123 or Route 7 to the Toll Road. Reagan National is usually 20 to 40 minutes down the GW Parkway, one of the more pleasant airport drives in the region when the parkway is clear. BWI is a longer trip across the American Legion Bridge and around the Beltway. Every arrival is tracked in real time, with 45 minutes of complimentary waiting on domestic flights and 60 on international, and optional meet and greet at baggage claim.",
          "Departures are scheduled from your flight time and check-in guidance, and we add margin for the Chain Bridge Road and Beltway merges in the morning rush.",
        ],
      },
      {
        h2: "Dining, evenings and family travel",
        paragraphs: [
          "McLean clients book us for dinners at L'Auberge Chez François in Great Falls, evenings in Georgetown across Chain Bridge, performances at the Kennedy Center and Capital One Hall, and summer concerts at Wolf Trap. Families use SUVs for airport runs with luggage and car seats installed on request, and Sprinter vans carry extended families to weddings, graduations and holiday gatherings.",
          "Cancellation is free up to 3 hours before pickup for sedans and SUVs and 12 hours for Sprinter vans, limousines and special-event reservations.",
        ],
      },
    ],
    vehicles: VEHICLES,
    faqs: [
      {
        q: "How long is the drive from McLean to Dulles or Reagan National?",
        a: "Dulles is typically 25 to 40 minutes via Route 123 and the Toll Road, and Reagan National 20 to 40 minutes via the GW Parkway, both depending on traffic. Pickups are timed to live conditions and your flight.",
      },
      {
        q: "What does McLean car service cost?",
        a: "Airport and point-to-point trips are flat rates by vehicle and address, confirmed before you book, with no surge pricing. Call (877) 609-1919 or book online for an exact quote.",
      },
      {
        q: "Will the chauffeur come to the door for a residential pickup?",
        a: "Yes. The chauffeur pulls into the driveway or meets you at the door, helps with luggage, and waits up to 15 minutes at no charge on non-airport pickups.",
      },
      {
        q: "Can I keep the same chauffeur for a standing weekly booking?",
        a: "We assign the same chauffeur to recurring reservations whenever scheduling allows, and you receive the chauffeur's name the day before each trip.",
      },
      {
        q: "Do you provide cars for dinners in Great Falls or Georgetown?",
        a: "Yes. Point-to-point or hourly service covers Great Falls, Georgetown, Tysons and downtown Washington, with the chauffeur waiting nearby for the return.",
      },
    ],
    related: [
      { label: "IAD to McLean Car Service", to: "/iad-to-mclean" },
      { label: "Tysons Limo Service", to: "/tysons-limo-service" },
      { label: "Arlington Limo Service", to: "/arlington-limo-service" },
      { label: "Northern Virginia Anniversary Limo", to: "/northern-virginia-anniversary-limo" },
      { label: "Kennedy Center Transportation", to: "/kennedy-center-transportation" },
      { label: "Capital One Hall Transportation", to: "/capital-one-hall-transportation" },
      { label: "Wolf Trap Transportation", to: "/wolf-trap-transportation" },
    ],
    schema: { areaServed: ["McLean, VA", "Fairfax County"], serviceType: "Limousine and car service" },
  },
  {
    slug: "fairfax-limo-service",
    type: "city",
    name: "Fairfax",
    badge: "City of Fairfax · Virginia",
    h1: "Fairfax Limo Service",
    metaTitle: "Fairfax Limo Service | Black Car Fairfax VA & GMU",
    metaDescription:
      "Chauffeured limo and car service in Fairfax, VA. Old Town Fairfax, George Mason University, Fair Oaks, Mosaic District and Dulles trips. Call (877) 609-1919.",
    stats: [
      { label: "Dulles (IAD)", value: "25–40 minutes, depending on traffic" },
      { label: "Reagan (DCA)", value: "30–55 minutes, depending on traffic" },
      { label: "Pricing", value: "Flat rate or hourly, confirmed in writing" },
    ],
    intro: [
      "IAD Airport Limo provides chauffeured limo and black car service in Fairfax, Virginia, covering the City of Fairfax and the surrounding Fairfax County communities: Old Town Fairfax, George Mason University, Fairfax Corner, Fair Oaks, Fair Lakes and the Mosaic District. Airport transfers, university events, corporate travel and celebrations are all flat-rated or hourly and confirmed before you ride.",
      "Fairfax is where I-66, Route 50, Route 29, Route 123 and Route 236 all cross, which puts it within reach of every airport and every part of the region, and also puts it in the middle of some of Northern Virginia's heaviest commuter traffic. Our chauffeurs plan around the I-66 and Fairfax County Parkway interchanges and the Route 50 retail corridor so the schedule holds.",
    ],
    highlights: [
      "Airport transfers to Dulles, Reagan National and BWI with real-time flight tracking and complimentary wait time",
      "George Mason University service for commencement, EagleBank Arena events, campus visits and move-in weekends",
      "Pickups across Old Town Fairfax, Fairfax Corner, Fair Oaks, Fair Lakes, Mosaic District and Mantua",
      "Sprinter vans for family groups, wedding parties and campus delegations",
      "Court, hospital and government pickups at the Fairfax County courthouse complex and Inova Fair Oaks",
      "Licensed and insured Virginia and Maryland carrier with 24/7 dispatch",
    ],
    sections: [
      {
        h2: "Fairfax City, George Mason and the surrounding county",
        paragraphs: [
          "We serve the City of Fairfax and the Fairfax-addressed communities around it: the historic downtown along Main Street and Chain Bridge Road, the neighborhoods off Route 123 near the county courthouse, the George Mason campus and the student and faculty housing around it, Fairfax Corner and Fair Oaks to the west, Fair Lakes and Greenbriar, Mantua and Kings Park, and the Mosaic District in Merrifield to the east.",
          "George Mason generates a steady flow of bookings: commencement weekend, EagleBank Arena concerts and basketball, Center for the Arts performances, prospective-student visits and parents flying in for move-in. We stage vehicles away from the busiest campus roads and confirm the exact pickup point in advance.",
        ],
      },
      {
        h2: "Fairfax to Dulles, Reagan National and BWI",
        paragraphs: [
          "Dulles is typically 25 to 40 minutes depending on traffic, via Route 50 or the Fairfax County Parkway to Route 28 and the Dulles Access Road. Reagan National usually takes 30 to 55 minutes via I-66 and the GW Parkway or I-395. BWI is a longer trip around the Beltway and up the Baltimore-Washington Parkway. Every airport arrival is tracked in real time, with 45 minutes of complimentary waiting on domestic flights and 60 on international, and optional meet and greet at baggage claim.",
          "For early departures we schedule from your flight time and check-in guidance, with a buffer for the I-66 merge during the morning rush.",
        ],
      },
      {
        h2: "Weddings, proms, dining and corporate travel",
        paragraphs: [
          "Fairfax bookings run from wedding parties at the historic downtown venues and area country clubs to prom night at Fairfax, Woodson, Robinson and Oakton high schools, dinner in the Mosaic District, and corporate travel for the technology and government-services firms along Route 50 and Fair Lakes. Stretch limousines and Sprinter vans handle the celebrations; sedans and SUVs handle the workdays.",
          "Cancellation is free up to 3 hours before pickup for sedans and SUVs and 12 hours for Sprinter vans, limousines and special-event reservations.",
        ],
      },
    ],
    vehicles: VEHICLES,
    faqs: [
      {
        q: "How long does it take to get from Fairfax to Dulles Airport?",
        a: "Typically 25 to 40 minutes depending on traffic, via Route 50 or the Fairfax County Parkway to Route 28 and the Dulles Access Road. Pickups are timed to live conditions and your flight status.",
      },
      {
        q: "How much is Fairfax limo service?",
        a: "Airport and point-to-point trips are flat rates by vehicle and address; multi-stop days and event waiting are hourly. Both are confirmed in writing before you book. Call (877) 609-1919 for a quote.",
      },
      {
        q: "Do you provide transportation for George Mason University events?",
        a: "Yes. We serve commencement, EagleBank Arena concerts and games, Center for the Arts performances and campus visits, with pickup points confirmed in advance to avoid the busiest campus roads.",
      },
      {
        q: "Can you carry a family group from Fairfax to the airport?",
        a: "Yes. Cadillac Escalade and Chevrolet Suburban SUVs seat six with luggage, and Mercedes Sprinter vans carry up to 14. Car seats are available on request.",
      },
      {
        q: "Do you serve Fair Oaks, Fair Lakes and the Mosaic District as part of Fairfax?",
        a: "Yes. We cover the City of Fairfax and all Fairfax-addressed communities in the surrounding county, including Fair Oaks, Fair Lakes, Greenbriar, Mantua and Merrifield.",
      },
    ],
    related: [
      { label: "IAD to Fairfax Car Service", to: "/iad-to-fairfax" },
      { label: "EagleBank Arena Transportation", to: "/eaglebank-arena-transportation" },
      { label: "Northern Virginia Graduation Limo", to: "/northern-virginia-graduation-limo" },
      { label: "Tysons Limo Service", to: "/tysons-limo-service" },
      { label: "Arlington Limo Service", to: "/arlington-limo-service" },
      { label: "Prom Limo", to: "/prom-limo" },
      { label: "Wedding Limo", to: "/wedding-limo" },
      { label: "IAD to Manassas", to: "/iad-to-manassas-va" },
    ],
    schema: { areaServed: ["Fairfax, VA", "Fairfax County"], serviceType: "Limousine and car service" },
  },
  {
    slug: "arlington-limo-service",
    type: "city",
    name: "Arlington",
    badge: "Arlington County Limo Service",
    h1: "Arlington Limo Service",
    metaTitle: "Arlington VA Limo Service | Black Car to IAD & DCA",
    metaDescription:
      "Chauffeured limo and black car service in Arlington, VA. Rosslyn to Ballston, Crystal City, the Pentagon; Dulles and Reagan transfers. Call (877) 609-1919.",
    stats: [
      { label: "Dulles (IAD)", value: "35–55 minutes, depending on traffic" },
      { label: "Reagan (DCA)", value: "10–20 minutes, depending on traffic" },
      { label: "Pricing", value: "Flat rate, confirmed before you book" },
    ],
    intro: [
      "IAD Airport Limo provides chauffeured limo and black car service across Arlington, Virginia: the Rosslyn-Ballston corridor, Crystal City and National Landing, Pentagon City, Shirlington, Columbia Pike and the residential neighborhoods from Lyon Village to Fairlington. Reagan National is next door, and Dulles is the international gateway, and we serve both with flight tracking and flat rates.",
      "Arlington is the closest Virginia jurisdiction to the capital, and its traffic reflects that: I-66, I-395, Route 50, the GW Parkway and four Potomac bridges all funnel through the county. A chauffeur who knows which bridge is moving at 5 p.m. is worth more here than almost anywhere else in the region. We serve business travelers in Rosslyn and Crystal City, defense and government clients around the Pentagon, and residents who want a reliable car for the airport and for evenings in Washington.",
    ],
    highlights: [
      "Reagan National transfers in roughly 10 to 20 minutes and Dulles in 35 to 55 minutes, depending on traffic, with flight tracking on every booking",
      "Hotel pickups in Rosslyn, Courthouse, Clarendon, Ballston, Crystal City and Pentagon City",
      "Government and defense-sector service around the Pentagon, Navy Annex area and Crystal City offices",
      "Chauffeurs who know the Key, Roosevelt, Memorial and 14th Street bridges and the GW Parkway",
      "Sedans and SUVs for executives, Sprinter vans for delegations and conference groups",
      "Licensed and insured Virginia and Maryland carrier with 24/7 dispatch",
    ],
    sections: [
      {
        h2: "Arlington neighborhoods and business districts",
        paragraphs: [
          "We serve every part of the county: Rosslyn, Courthouse, Clarendon, Virginia Square and Ballston along the Orange and Silver Lines; Crystal City, Pentagon City and the National Landing development along Route 1; Shirlington, Columbia Pike and Fairlington to the south; and the residential streets of Lyon Village, Cherrydale, Westover and Yorktown. Frequent destinations include the Pentagon, Arlington National Cemetery for services and ceremonies, the Marine Corps War Memorial and the Air Force Memorial, Virginia Hospital Center, Marymount University and the hotels around each Metro station.",
          "Corporate accounts for Rosslyn and Crystal City firms cover recurring airport transfers, visiting-executive itineraries and hourly service for days that move between Arlington, Tysons and Capitol Hill.",
        ],
      },
      {
        h2: "Arlington to Reagan National, Dulles and BWI",
        paragraphs: [
          "Reagan National is the neighborhood airport, usually 10 to 20 minutes from most of Arlington depending on traffic, via the GW Parkway or Route 1. For international departures and many long-haul routes, Dulles is the airport that matters, typically 35 to 55 minutes via I-66 and the Dulles Access Road. BWI is a longer trip around the Beltway and up the Baltimore-Washington Parkway. Every airport pickup includes real-time flight tracking, 45 minutes of complimentary waiting on domestic arrivals and 60 on international, and optional meet and greet at baggage claim.",
          "Because the I-66 inside-the-Beltway lanes carry peak-hour tolls and restrictions, our chauffeurs choose between I-66, Route 50 and the Toll Road based on the time of day, and the flat rate does not change with the route.",
        ],
      },
      {
        h2: "Evenings in Washington, ceremonies and celebrations",
        paragraphs: [
          "Arlington residents use us for nights at the Kennedy Center and Capital One Arena, dinners in Georgetown and the Wharf, matches at Audi Field, Nationals games and events at the Convention Center, with the chauffeur staging nearby for the return across the river. We also provide dignified transportation for services at Arlington National Cemetery, and stretch limousines and Sprinter vans for weddings, proms at Washington-Liberty, Yorktown and Wakefield high schools, and milestone celebrations.",
          "Cancellation is free up to 3 hours before pickup for sedans and SUVs and 12 hours for Sprinter vans, limousines and special-event reservations.",
        ],
      },
    ],
    vehicles: VEHICLES,
    faqs: [
      {
        q: "How long is the ride from Arlington to Dulles Airport?",
        a: "Typically 35 to 55 minutes depending on traffic, via I-66 or Route 50 to the Dulles Access Road. Reagan National is usually 10 to 20 minutes. We time the pickup to live conditions and your flight status.",
      },
      {
        q: "What does Arlington limo service to the airport cost?",
        a: "Every airport trip is a flat rate by vehicle and address, confirmed before you book, with no surge pricing and no change for the route the chauffeur chooses. Call (877) 609-1919 for a quote.",
      },
      {
        q: "Do you serve hotels in Crystal City and Rosslyn?",
        a: "Yes. We pick up at every hotel in Crystal City, Pentagon City, Rosslyn, Courthouse, Clarendon and Ballston, and the chauffeur can meet you in the lobby.",
      },
      {
        q: "Can you provide transportation for a service at Arlington National Cemetery?",
        a: "Yes. Sedans, SUVs and Sprinter vans are available for family groups attending services and ceremonies, with a chauffeur who understands the cemetery's entry procedures and timing.",
      },
      {
        q: "Do you offer hourly service for a day in Washington from Arlington?",
        a: "Yes. As-directed hourly service keeps the chauffeur with you across Arlington and the District for meetings, sightseeing or a family visit, with unlimited stops during the booking.",
      },
    ],
    related: [
      { label: "IAD to Arlington Car Service", to: "/iad-to-arlington" },
      { label: "Alexandria Limo Service", to: "/alexandria-limo-service" },
      { label: "McLean Limo Service", to: "/mclean-limo-service" },
      { label: "Kennedy Center Transportation", to: "/kennedy-center-transportation" },
      { label: "Audi Field Transportation", to: "/audi-field-transportation" },
      { label: "Washington DC Airport Transfers", to: "/washington-dc-airport-transfers" },
      { label: "IAD to Washington DC", to: "/iad-to-washington-dc" },
      { label: "Corporate Transportation", to: "/corporate" },
    ],
    schema: { areaServed: ["Arlington, VA", "Arlington County"], serviceType: "Limousine and car service" },
  },
  {
    slug: "alexandria-limo-service",
    type: "city",
    name: "Alexandria",
    badge: "City of Alexandria · Virginia",
    h1: "Alexandria Limo Service",
    metaTitle: "Alexandria VA Limo Service | Old Town Black Car",
    metaDescription:
      "Chauffeured limo and black car service in Alexandria, VA. Old Town, King Street, Carlyle, Del Ray; Dulles, Reagan and BWI transfers. Call (877) 609-1919.",
    stats: [
      { label: "Dulles (IAD)", value: "40–60 minutes, depending on traffic" },
      { label: "Reagan (DCA)", value: "10–20 minutes, depending on traffic" },
      { label: "Pricing", value: "Flat rate or hourly, confirmed in writing" },
    ],
    intro: [
      "IAD Airport Limo provides chauffeured limo and black car service throughout Alexandria, Virginia, from the cobblestones of Old Town and the King Street waterfront to Carlyle, Del Ray, Potomac Yard, Rosemont, Seminary Hill, the West End and the Kingstowne and Mount Vernon areas that carry an Alexandria address. Airport transfers, wedding and event service and hourly bookings are confirmed at a written rate before you ride.",
      "Alexandria is a walking city with a driving problem: Old Town's streets are narrow and metered, the waterfront fills on weekends, and the routes out to Dulles cross either the Beltway or the District. A chauffeur turns that into someone else's concern. You are collected at your door or hotel, the flight is tracked, and the return is waiting after dinner on King Street.",
    ],
    highlights: [
      "Reagan National in roughly 10 to 20 minutes up the GW Parkway, Dulles in 40 to 60 minutes, depending on traffic, with flight tracking on every booking",
      "Old Town pickups at the Alexandrian, Morrison House, the Lorien, Hotel Indigo and the Westin and Embassy Suites in Carlyle",
      "Wedding and event transportation for Old Town venues, the waterfront, River Farm and Mount Vernon",
      "Chauffeurs who know King Street, Duke Street, Washington Street, Route 1, I-395 and the Wilson Bridge",
      "Rail connections at King Street-Old Town Metro and Alexandria Union Station for Amtrak and VRE",
      "Licensed and insured Virginia and Maryland carrier with 24/7 dispatch",
    ],
    sections: [
      {
        h2: "Old Town, Carlyle, Del Ray and the rest of Alexandria",
        paragraphs: [
          "We serve the whole city and its neighbors: the townhouses and inns of Old Town, the office and hotel district in Carlyle near Eisenhower Avenue, Del Ray's Mount Vernon Avenue, Potomac Yard, Rosemont, Seminary Hill, the West End along Duke Street, and the Kingstowne, Hollin Hills and Mount Vernon communities south along Route 1 and the parkway. Regular destinations include the Torpedo Factory and the waterfront, Market Square, the George Washington Masonic National Memorial, Inova Alexandria Hospital and the King Street-Old Town Metro station.",
          "Visitors often ask for a chauffeur for the day: George Washington's Mount Vernon at the south end of the parkway, lunch in Old Town, an afternoon in Washington and dinner back on the waterfront. Hourly service covers that itinerary at one confirmed rate.",
        ],
      },
      {
        h2: "Alexandria to Reagan National, Dulles and BWI",
        paragraphs: [
          "Reagan National is a short ride north on the GW Parkway, about 10 to 20 minutes depending on traffic. Dulles typically takes 40 to 60 minutes, either around the Beltway to the Toll Road or through Arlington on I-395 and I-66 to the Access Road, and the chauffeur picks the route by the hour of the day. BWI is a longer trip across the Wilson Bridge and up the Baltimore-Washington Parkway. Each airport pickup includes real-time flight tracking, 45 minutes of complimentary waiting on domestic arrivals and 60 on international, and optional meet and greet at baggage claim.",
          "For early departures we schedule from your flight time and check-in guidance, with a buffer for the I-395 and Beltway merges at Springfield.",
        ],
      },
      {
        h2: "Weddings, evenings and celebrations",
        paragraphs: [
          "Alexandria is one of the region's busiest wedding towns, and we run the full day: getting-ready pickups, ceremony-to-reception transfers between Old Town churches and waterfront or Carlyle venues, hotel shuttles in Sprinter vans and a getaway car at the end of the night. We also serve anniversary dinners on King Street, proms at Alexandria City High School and the private schools near Seminary Hill, and evenings at the Kennedy Center and Audi Field.",
          "Cancellation is free up to 3 hours before pickup for sedans and SUVs and 12 hours for Sprinter vans, limousines and special-event reservations.",
        ],
      },
    ],
    vehicles: VEHICLES,
    faqs: [
      {
        q: "How long does it take to get from Alexandria to Dulles Airport?",
        a: "Typically 40 to 60 minutes depending on traffic, either around the Beltway to the Toll Road or through Arlington on I-395 and I-66 to the Dulles Access Road. Reagan National is about 10 to 20 minutes up the GW Parkway.",
      },
      {
        q: "What does Alexandria limo service cost?",
        a: "Airport and point-to-point trips are flat rates by vehicle and address; wedding days and multi-stop bookings are hourly. Both are confirmed in writing before you book. Call (877) 609-1919 for a quote.",
      },
      {
        q: "Can the chauffeur pick up in Old Town where the streets are narrow?",
        a: "Yes. Our chauffeurs work Old Town regularly and will confirm a workable pickup spot at your inn, townhouse or restaurant the evening before.",
      },
      {
        q: "Do you provide wedding transportation in Alexandria?",
        a: "Yes. Sedans, SUVs, 14-passenger Sprinter vans and stretch limousines are coordinated under one reservation for wedding parties and guests at Old Town, waterfront, Carlyle and Mount Vernon-area venues.",
      },
      {
        q: "Do you serve Kingstowne and Mount Vernon as part of Alexandria?",
        a: "Yes. We cover the City of Alexandria and the Alexandria-addressed communities in Fairfax County, including Kingstowne, Hollin Hills, Mount Vernon and Fort Hunt.",
      },
    ],
    related: [
      { label: "IAD to Alexandria Car Service", to: "/iad-to-alexandria" },
      { label: "Arlington Limo Service", to: "/arlington-limo-service" },
      { label: "Northern Virginia Anniversary Limo", to: "/northern-virginia-anniversary-limo" },
      { label: "Kennedy Center Transportation", to: "/kennedy-center-transportation" },
      { label: "National Harbor Transportation", to: "/national-harbor-transportation" },
      { label: "Wedding Limo", to: "/wedding-limo" },
      { label: "Washington DC Airport Transfers", to: "/washington-dc-airport-transfers" },
      { label: "IAD to Fredericksburg", to: "/iad-to-fredericksburg" },
    ],
    schema: { areaServed: ["Alexandria, VA", "Fairfax County"], serviceType: "Limousine and car service" },
  },

  // ---------------------------------------------------------------- VENUES
  {
    slug: "capital-one-hall-transportation",
    type: "event",
    name: "Capital One Hall",
    badge: "Performing Arts Venue · Tysons",
    h1: "Capital One Hall Transportation",
    metaTitle: "Capital One Hall Transportation | Tysons Black Car",
    metaDescription:
      "Chauffeured car and limo service to Capital One Hall in Tysons for concerts, Broadway tours and comedy. Door drop-off, staged pickup. Call (877) 609-1919.",
    stats: [
      { label: "Location", value: "Capital One Center, Tysons" },
      { label: "Nearest Metro", value: "McLean station, Silver Line" },
      { label: "Pricing", value: "Flat rate or hourly, confirmed in writing" },
    ],
    intro: [
      "IAD Airport Limo provides chauffeured transportation to Capital One Hall at 7750 Capital One Tower Road in Tysons, Virginia, for touring Broadway productions, concerts, comedy, dance and corporate events. The chauffeur delivers you to the hall entrance inside Capital One Center and stages nearby for a pickup that skips the garage queue after the curtain.",
      "Capital One Hall opened as the performing-arts anchor of Capital One Center, the mixed-use campus beside Capital One's headquarters at the edge of Tysons. It sits between Route 123 and the Beltway, a short walk from the McLean Metro station, with a rooftop park, a Wegmans and a hotel on the same campus. That density makes it a good evening out and a slow place to leave by car. Our rates are flat for point-to-point trips or hourly when the vehicle waits, and they are confirmed before you book.",
    ],
    highlights: [
      "Drop-off at the Capital One Hall entrance and a pre-arranged pickup point away from the garage exits",
      "Hourly service when you want the chauffeur to wait through the performance and be ready at the door",
      "Pre-show dinner stops at the Capital One Center restaurants, the Boro or Tysons Galleria on the same booking",
      "Chauffeurs who know Route 123, Capital One Drive, Scotts Crossing Road and the Beltway ramps at Tysons",
      "Sedans and SUVs for couples, Sprinter vans and stretch limousines for groups and celebrations",
      "Licensed and insured Virginia and Maryland carrier with 24/7 dispatch",
    ],
    sections: [
      {
        h2: "What plays at Capital One Hall",
        paragraphs: [
          "The main hall hosts touring Broadway musicals, national concert tours, comedians, dance companies and speaker series, and the smaller performance space and event rooms host cabaret-style shows and private functions. Corporate clients also use the hall and the surrounding campus for conferences and galas. Check the venue calendar for curtain times; most evening performances are preceded by heavy dinner traffic in Tysons.",
        ],
      },
      {
        h2: "Getting there and getting out",
        paragraphs: [
          "Capital One Center sits just inside the Beltway off Route 123, reached by Capital One Drive and Scotts Crossing Road. Parking is in the campus garages, and the exit onto Route 123 after a sold-out show moves slowly as the garage empties onto the same two roads. The McLean Silver Line station is across the street, which helps rail riders but does nothing for anyone who drove.",
          "We drop at the hall's front entrance and set a pickup point a short walk away, clear of the garage ramps, so the chauffeur is out of the queue when you text that the show is over.",
        ],
      },
      {
        h2: "Making an evening of it",
        paragraphs: [
          "Many clients book the evening as one reservation: pickup at home in McLean, Vienna, Reston or Arlington, dinner at a Capital One Center or Boro restaurant, the performance, and the ride home. Hourly service covers that at one confirmed rate. Out-of-town guests staying at the Watermark, the Ritz-Carlton or the Hyatt in Tysons can add a Dulles or Reagan National transfer on either end, with flight tracking included.",
          "Cancellation is free up to 3 hours before pickup for sedans and SUVs and 12 hours for Sprinter vans, limousines and special-event reservations.",
        ],
      },
    ],
    vehicles: VEHICLES,
    faqs: [
      {
        q: "Where does the chauffeur drop off and pick up at Capital One Hall?",
        a: "Drop-off is at the hall's front entrance inside Capital One Center. Pickup is at a pre-arranged point a short walk away, chosen to keep the vehicle out of the garage exit queue on Route 123.",
      },
      {
        q: "How much does transportation to Capital One Hall cost?",
        a: "Point-to-point trips are one flat rate by vehicle and pickup address; if you want the chauffeur to wait through the performance, we quote an hourly rate with a minimum. Both are confirmed before you book. Call (877) 609-1919 for a quote.",
      },
      {
        q: "Can we add a dinner stop before the show?",
        a: "Yes. Hourly bookings include unlimited stops, and a flat-rate trip can usually add a stop at a Capital One Center, Boro or Tysons Galleria restaurant through dispatch.",
      },
      {
        q: "Can you carry a group to Capital One Hall?",
        a: "Yes. SUVs seat six, Mercedes Sprinter vans carry up to 14 and stretch limousines seat eight. Larger parties ride in multiple coordinated vehicles that arrive together.",
      },
      {
        q: "Do you serve Capital One Hall from Dulles or Reagan National?",
        a: "Yes. Visiting guests can combine an airport pickup with the performance on one reservation, with flight tracking and complimentary wait time on the airport leg.",
      },
    ],
    related: [
      { label: "Tysons Limo Service", to: "/tysons-limo-service" },
      { label: "McLean Limo Service", to: "/mclean-limo-service" },
      { label: "Kennedy Center Transportation", to: "/kennedy-center-transportation" },
      { label: "Wolf Trap Transportation", to: "/wolf-trap-transportation" },
      { label: "Jiffy Lube Live Transportation", to: "/jiffy-lube-live-transportation" },
      { label: "Concert Transportation", to: "/concert-transportation" },
      { label: "IAD to Tysons", to: "/iad-to-tysons" },
    ],
    schema: { areaServed: ["Tysons, VA"], serviceType: "Event transportation" },
  },
  {
    slug: "dulles-expo-center-transportation",
    type: "event",
    name: "Dulles Expo Center",
    badge: "Exhibition Venue · Chantilly",
    h1: "Dulles Expo Center Transportation",
    metaTitle: "Dulles Expo Center Transportation | Chantilly Car",
    metaDescription:
      "Chauffeured car and van service to the Dulles Expo Center in Chantilly for trade shows and expos. Airport hotel shuttles, group vans. Call (877) 609-1919.",
    stats: [
      { label: "Location", value: "Route 28 at Willard Road, Chantilly" },
      { label: "Dulles (IAD)", value: "10–20 minutes, depending on traffic" },
      { label: "Pricing", value: "Flat rate or hourly, confirmed in writing" },
    ],
    intro: [
      "IAD Airport Limo provides chauffeured car, SUV and Sprinter van service to the Dulles Expo Center at 4320 Chantilly Shopping Center in Chantilly, Virginia, for trade shows, consumer expos, antique markets, home and garden shows, job fairs and conventions. We connect exhibitors and attendees with Dulles Airport, the Route 28 hotels and the rest of Northern Virginia at flat rates confirmed before you book.",
      "The Expo Center sits beside the Chantilly Shopping Center, just off Route 28 at Willard Road and a few minutes south of the Dulles terminal. Its north and south halls host events nearly every weekend, and on big show days the surface lots fill and the Route 28 ramps stack up. For exhibitors with cases and samples, or for a team flying in for a two-day show, a booked vehicle with a known pickup point is simpler than a shuttle schedule or a rideshare surge.",
    ],
    highlights: [
      "Dulles Airport to the Expo Center in roughly 10 to 20 minutes depending on traffic, with flight tracking on every arrival",
      "Sprinter vans for exhibitor teams, sales groups and attendees staying at the same hotel",
      "Recurring shuttle runs between Route 28, Herndon and Sterling hotels and the show floor across a multi-day event",
      "Room for cases, banners and samples in SUVs and vans, with the chauffeur handling the loading",
      "Pickups at the Westfields Marriott, the airport Marriott, the Hyatt Regency Dulles and the Route 28 hotel corridor",
      "Licensed and insured Virginia and Maryland carrier with 24/7 dispatch",
    ],
    sections: [
      {
        h2: "Events at the Dulles Expo Center",
        paragraphs: [
          "The two halls host a rotating calendar of consumer and trade events: antique and collectibles markets, home improvement and remodeling shows, pet expos, sportsman's and outdoor shows, craft fairs, bridal shows, industry trade exhibitions and hiring events. Show hours and gate times vary, so check the event's own listing; weekend consumer shows draw their heaviest traffic late morning and early afternoon.",
        ],
      },
      {
        h2: "Access, parking and pickup",
        paragraphs: [
          "The center is reached from Route 28 via Willard Road, with additional access from the Chantilly Shopping Center entrances. Parking is in the surrounding surface lots, which overflow on the busiest show days and empty slowly onto Route 28 afterward. We drop at the hall entrance and set a pickup point at the edge of the property so the vehicle is not trapped in the lot when you are ready to leave.",
          "For exhibitors, the chauffeur can stage at the loading side during move-in and move-out hours when the event permits, and Sprinter vans hold display cases and banner stands along with the team.",
        ],
      },
      {
        h2: "Airport, hotel and multi-day service",
        paragraphs: [
          "Because the venue is minutes from Dulles, most of our Expo Center work starts or ends at the airport: a team arrives at IAD, checks in at a Chantilly, Herndon or Sterling hotel, rides to the show each morning and back each evening, and departs from Dulles on the last day. We book that as one itinerary with a confirmed rate per leg and dispatch monitoring throughout. Nearby stops include the Steven F. Udvar-Hazy Center of the National Air and Space Museum for a team outing between show days.",
          "Cancellation is free up to 3 hours before pickup for sedans and SUVs and 12 hours for Sprinter vans and special-event reservations.",
        ],
      },
    ],
    vehicles: VEHICLES,
    faqs: [
      {
        q: "How far is the Dulles Expo Center from Dulles Airport?",
        a: "The center is just south of the airport off Route 28, typically 10 to 20 minutes depending on traffic. Arrivals are flight-tracked and include 45 minutes of complimentary waiting on domestic flights and 60 on international.",
      },
      {
        q: "How much is transportation to the Dulles Expo Center?",
        a: "Point-to-point trips are flat rates by vehicle and address; multi-day hotel shuttles and waiting time are quoted hourly or as a package. Every rate is confirmed before you book. Call (877) 609-1919 for a quote.",
      },
      {
        q: "Can you shuttle our exhibitor team between the hotel and the show for several days?",
        a: "Yes. We schedule recurring morning and evening runs in Sprinter vans or SUVs across the length of the event, with one point of contact for changes.",
      },
      {
        q: "Is there room for display cases and samples?",
        a: "Yes. Cadillac Escalade and Chevrolet Suburban SUVs carry six passengers with cargo, and Mercedes Sprinter vans carry up to 14 with space for cases and banner stands. Tell us what you are bringing when you book.",
      },
      {
        q: "Where does the chauffeur pick up after the show?",
        a: "At a pre-arranged point at the edge of the Expo Center property, confirmed by text, so the vehicle stays clear of the surface-lot exit crawl onto Route 28.",
      },
    ],
    related: [
      { label: "Sterling Limo Service", to: "/sterling-limo-service" },
      { label: "Herndon Limo Service", to: "/herndon-limo-service" },
      { label: "Dulles Airport Car Service", to: "/iad-dulles-airport-car-service" },
      { label: "Washington Convention Center Transportation", to: "/washington-convention-center-transportation" },
      { label: "Jiffy Lube Live Transportation", to: "/jiffy-lube-live-transportation" },
      { label: "IAD to Manassas", to: "/iad-to-manassas-va" },
      { label: "Corporate Transportation", to: "/corporate" },
    ],
    schema: { areaServed: ["Chantilly, VA", "Fairfax County"], serviceType: "Event transportation" },
  },
  {
    slug: "kennedy-center-transportation",
    type: "event",
    name: "Kennedy Center",
    badge: "Performing Arts Venue · Washington DC",
    h1: "Kennedy Center Transportation",
    metaTitle: "Kennedy Center Transportation | DC Black Car & Limo",
    metaDescription:
      "Chauffeured car and limo service to the Kennedy Center in Washington, DC. Plaza drop-off, staged pickup after the show, Dulles pickups. Call (877) 609-1919.",
    stats: [
      { label: "Location", value: "Foggy Bottom, Washington DC" },
      { label: "Dulles (IAD)", value: "35–60 minutes, depending on traffic" },
      { label: "Pricing", value: "Flat rate or hourly, confirmed in writing" },
    ],
    intro: [
      "IAD Airport Limo provides chauffeured transportation to the John F. Kennedy Center for the Performing Arts at 2700 F Street NW in Washington, DC, for the National Symphony Orchestra, Washington National Opera, touring Broadway, ballet, jazz and the free daily performances on the Millennium Stage. The chauffeur drops you at the entrance plaza and returns to a staged pickup that avoids the post-performance garage crush.",
      "The Kennedy Center occupies a bluff above the Potomac in Foggy Bottom, hemmed in by the Rock Creek and Potomac Parkway, the Watergate and the approaches to the Roosevelt Bridge. Nearly every car arrives and leaves by the same few ramps, which is why the garage takes so long to empty after a full house. For guests coming from Northern Virginia, McLean, Alexandria or a Dulles arrival, a chauffeur who knows the E Street Expressway and the parkway ramps is the difference between a relaxed evening and a long wait in a concrete spiral.",
    ],
    highlights: [
      "Drop-off at the main entrance plaza and a pre-set pickup point clear of the garage exit ramps",
      "Hourly service so the chauffeur waits through the performance and is at the door when you text",
      "Routes from Virginia via the Roosevelt Bridge and E Street Expressway, or the Memorial Bridge and Rock Creek Parkway",
      "Dinner stops in Georgetown, the West End or Foggy Bottom on the same booking",
      "Sedans and SUVs for couples and families, Sprinter vans and limousines for groups and galas",
      "Licensed and insured Virginia and Maryland carrier with 24/7 dispatch",
    ],
    sections: [
      {
        h2: "The venue",
        paragraphs: [
          "The Kennedy Center's halls include the Concert Hall, the Opera House, the Eisenhower Theater, the Terrace Theater and the Family Theater, plus the REACH campus of studios and outdoor spaces on the south side. Evening performances typically begin between 7 and 8 p.m., with matinees on weekends, and the Millennium Stage offers free performances most days. Check the center's calendar for exact curtain times; the largest crowds come on opera and Broadway nights and during the holiday season.",
        ],
      },
      {
        h2: "Access, parking and the garage exit",
        paragraphs: [
          "From Virginia the usual approaches are I-66 across the Roosevelt Bridge to the E Street Expressway, or the GW Parkway across the Memorial Bridge to the Rock Creek and Potomac Parkway. From Dulles the trip is typically 35 to 60 minutes depending on traffic. The center's underground garage is convenient going in and slow coming out, because every level drains through the same ramps onto the parkway and Virginia Avenue.",
          "We drop at the entrance plaza and stage the vehicle nearby, outside the garage, for a pickup at a pre-arranged point. Foggy Bottom-GWU Metro is the nearest station for anyone combining rail and car.",
        ],
      },
      {
        h2: "Dinner, galas and out-of-town guests",
        paragraphs: [
          "An hourly booking makes the whole evening one reservation: pickup at home, dinner in Georgetown or the West End, the performance, and the ride back to Virginia or Maryland without a parking receipt. For galas, opening nights and the honors season, stretch limousines and Sprinter vans carry groups in formal dress with the chauffeur handling the door. Guests flying in for a performance can combine a Dulles or Reagan National pickup with the show and a hotel drop-off at the Watergate or a West End hotel.",
          "Cancellation is free up to 3 hours before pickup for sedans and SUVs and 12 hours for Sprinter vans, limousines and special-event reservations.",
        ],
      },
    ],
    vehicles: VEHICLES,
    faqs: [
      {
        q: "Where does the chauffeur drop off and pick up at the Kennedy Center?",
        a: "Drop-off is at the main entrance plaza. Pickup is at a pre-arranged point near the center but outside the garage, so the vehicle is not stuck in the exit ramps after the performance.",
      },
      {
        q: "How much does transportation to the Kennedy Center cost?",
        a: "Point-to-point trips are one flat rate by vehicle and pickup address. If you want the chauffeur to wait through the performance, we quote an hourly rate with a minimum. Both are confirmed before you book. Call (877) 609-1919 for a quote.",
      },
      {
        q: "How long does it take to reach the Kennedy Center from Dulles Airport?",
        a: "Typically 35 to 60 minutes depending on traffic, via the Dulles Access Road, I-66 and the Roosevelt Bridge. Airport pickups include flight tracking and complimentary wait time.",
      },
      {
        q: "Can we add dinner in Georgetown before the show?",
        a: "Yes. Hourly bookings include unlimited stops, and a flat-rate trip can usually add a restaurant stop in Georgetown, the West End or Foggy Bottom through dispatch.",
      },
      {
        q: "Do you carry groups for galas and opening nights?",
        a: "Yes. SUVs seat six, Mercedes Sprinter vans carry up to 14 and stretch limousines seat eight, and larger parties ride in multiple coordinated vehicles that arrive together.",
      },
    ],
    related: [
      { label: "Capital One Hall Transportation", to: "/capital-one-hall-transportation" },
      { label: "Washington Convention Center Transportation", to: "/washington-convention-center-transportation" },
      { label: "Northern Virginia Anniversary Limo", to: "/northern-virginia-anniversary-limo" },
      { label: "Arlington Limo Service", to: "/arlington-limo-service" },
      { label: "McLean Limo Service", to: "/mclean-limo-service" },
      { label: "IAD to Washington DC", to: "/iad-to-washington-dc" },
      { label: "Capital One Arena Transportation", to: "/capital-one-arena-transportation" },
      { label: "Concert Transportation", to: "/concert-transportation" },
    ],
    schema: { areaServed: ["Washington, DC"], serviceType: "Event transportation" },
  },
  {
    slug: "washington-convention-center-transportation",
    type: "event",
    name: "Convention Center",
    badge: "Convention Venue · Washington DC",
    h1: "Washington Convention Center Transportation",
    metaTitle: "Washington Convention Center Transportation | Limo",
    metaDescription:
      "Chauffeured car and Sprinter service to the Walter E. Washington Convention Center. Dulles transfers, hotel shuttles and group moves. Call (877) 609-1919.",
    stats: [
      { label: "Location", value: "Mount Vernon Square, Washington DC" },
      { label: "Dulles (IAD)", value: "40–65 minutes, depending on traffic" },
      { label: "Pricing", value: "Flat rate or hourly, confirmed in writing" },
    ],
    intro: [
      "IAD Airport Limo provides chauffeured transportation to the Walter E. Washington Convention Center at 801 Mount Vernon Place NW in Washington, DC, for conventions, trade shows, association meetings, the auto show and inaugural events. We handle Dulles, Reagan National and BWI transfers for attendees, executive cars for speakers and sponsors, and Sprinter van shuttles between hotels and the show floor.",
      "The convention center fills the blocks between 7th and 9th Streets NW from Mount Vernon Place to N Street, with the Marriott Marquis connected across L Street and the Shaw, Penn Quarter and Chinatown neighborhoods around it. During a large convention the curbs on 7th and 9th become taxi and shuttle queues, and the drive out to Dulles at the end of the closing session is the slowest trip of the week. A booked chauffeur, a confirmed pickup point and a flight-tracked departure remove all three problems.",
    ],
    highlights: [
      "Dulles, Reagan National and BWI transfers with real-time flight tracking and complimentary wait time",
      "Sprinter van shuttles between Northern Virginia or downtown hotels and the convention center on a fixed schedule",
      "Executive sedans and SUVs for keynote speakers, sponsors and board members",
      "Pre-arranged pickup points on the 7th Street, 9th Street or L Street sides to match the hall you are in",
      "One itinerary and one point of contact for a delegation's arrivals, daily moves and departures",
      "Licensed and insured Virginia and Maryland carrier with 24/7 dispatch",
    ],
    sections: [
      {
        h2: "Conventions, trade shows and city events",
        paragraphs: [
          "The center hosts national association conventions, medical and technology trade shows, the Washington Auto Show, consumer festivals, graduation ceremonies for area universities, and inaugural balls every four years. Events span multiple halls and days, and many attendees split time between the show floor, hotel meeting rooms and evening receptions elsewhere in the District. Check the event's own program for hall assignments and daily hours; we confirm your pickup side accordingly.",
        ],
      },
      {
        h2: "Access, curbs and pickup points",
        paragraphs: [
          "From Dulles the trip typically takes 40 to 65 minutes depending on traffic, via I-66, the Roosevelt Bridge and Constitution Avenue or Massachusetts Avenue. From Reagan National it is usually 15 to 30 minutes across the 14th Street Bridge. The main entrance faces Mount Vernon Place, with additional entrances along 7th Street, 9th Street and L Street near the Marriott Marquis connector; the Mount Vernon Square-Convention Center Metro station is at the building's south end.",
          "During big shows the curbs nearest the doors are reserved for event shuttles and taxis, so we set a pickup point a block away that matches the hall you are leaving and confirm it by text.",
        ],
      },
      {
        h2: "Group and multi-day service",
        paragraphs: [
          "For a corporate delegation we build one itinerary: airport arrivals in sedans or a Sprinter van, a daily shuttle from a Tysons, Crystal City or downtown hotel to the center, evening moves to receptions and dinners, and departures timed to each flight. Dispatch monitors every leg and adjusts when a session runs long. Hourly service is available for sponsors who need a car on call across the day.",
          "Cancellation is free up to 3 hours before pickup for sedans and SUVs and 12 hours for Sprinter vans and special-event reservations.",
        ],
      },
    ],
    vehicles: VEHICLES,
    faqs: [
      {
        q: "How long is the ride from Dulles to the Washington Convention Center?",
        a: "Typically 40 to 65 minutes depending on traffic, via the Dulles Access Road, I-66 and the Roosevelt Bridge. Reagan National is usually 15 to 30 minutes. Airport pickups include flight tracking and complimentary wait time.",
      },
      {
        q: "How much does convention center transportation cost?",
        a: "Airport transfers and point-to-point trips are flat rates by vehicle and address; hotel shuttles and cars on call are quoted hourly or as a package for the event. Every rate is confirmed before you book. Call (877) 609-1919 for a quote.",
      },
      {
        q: "Can you run a shuttle between our hotel in Virginia and the convention center?",
        a: "Yes. Sprinter vans carry up to 14 and run on a fixed morning and evening schedule from Tysons, Arlington, Alexandria or any other hotel location, with additional runs added as needed.",
      },
      {
        q: "Where will the chauffeur pick us up after the session?",
        a: "At a pre-arranged point on the 7th Street, 9th Street or L Street side, one block from the reserved shuttle curbs, matched to the hall you are leaving and confirmed by text.",
      },
      {
        q: "Do you provide cars for speakers and sponsors during the event?",
        a: "Yes. Executive sedans and SUVs are available point-to-point or on an hourly basis so a car is waiting between sessions, dinners and media appearances.",
      },
    ],
    related: [
      { label: "Dulles Expo Center Transportation", to: "/dulles-expo-center-transportation" },
      { label: "Kennedy Center Transportation", to: "/kennedy-center-transportation" },
      { label: "Capital One Arena Transportation", to: "/capital-one-arena-transportation" },
      { label: "Washington DC Airport Transfers", to: "/washington-dc-airport-transfers" },
      { label: "IAD to Washington DC", to: "/iad-to-washington-dc" },
      { label: "Arlington Limo Service", to: "/arlington-limo-service" },
      { label: "Corporate Transportation", to: "/corporate" },
      { label: "Fleet", to: "/fleet" },
    ],
    schema: { areaServed: ["Washington, DC"], serviceType: "Event transportation" },
  },
  {
    slug: "audi-field-transportation",
    type: "event",
    name: "Audi Field",
    badge: "Stadium · Buzzard Point, Washington DC",
    h1: "Audi Field Transportation",
    metaTitle: "Audi Field Transportation | Black Car & Limo DC",
    metaDescription:
      "Chauffeured car and limo service to Audi Field at Buzzard Point for D.C. United, Washington Spirit and events. Gate drop-off, pickup. Call (877) 609-1919.",
    stats: [
      { label: "Location", value: "Buzzard Point, Southwest DC" },
      { label: "Dulles (IAD)", value: "40–65 minutes, depending on traffic" },
      { label: "Pricing", value: "Flat rate or hourly, confirmed in writing" },
    ],
    intro: [
      "IAD Airport Limo provides chauffeured transportation to Audi Field at 100 Potomac Avenue SW in Washington, DC, for D.C. United matches, Washington Spirit games, DC Defenders football, concerts and stadium events. The chauffeur brings you to the gate on Potomac Avenue and stages outside the Buzzard Point street closures for a pickup that clears the neighborhood ahead of the crowd.",
      "Audi Field sits at the tip of Buzzard Point, a peninsula between the Anacostia and the Washington Channel with Fort McNair on one side and only a few streets connecting it to the rest of the city. On-site parking is limited and street parking is largely restricted on match days, so most fans arrive on foot from Navy Yard-Ballpark or Waterfront Metro or by car from South Capitol Street. For groups from Northern Virginia, a Sprinter van with a confirmed pickup point is the easiest way in and out.",
    ],
    highlights: [
      "Gate drop-off on Potomac Avenue SW and a pre-set pickup point outside the match-day street closures",
      "Sprinter vans and SUVs for supporters' groups, suites and corporate hospitality",
      "Chauffeurs who know South Capitol Street, the Frederick Douglass Bridge, I-395 and the Southeast-Southwest Freeway",
      "Pre-match stops at the Wharf or Navy Yard restaurants on the same booking",
      "Airport connections at Dulles, Reagan National and BWI for visiting supporters",
      "Licensed and insured Virginia and Maryland carrier with 24/7 dispatch",
    ],
    sections: [
      {
        h2: "Events at Audi Field",
        paragraphs: [
          "The stadium is home to D.C. United in Major League Soccer and hosts the Washington Spirit of the NWSL and the DC Defenders of the UFL, along with international friendlies, concerts and community events. Spring and summer weekends carry the fullest schedule. Check the team or venue calendar for kickoff times; gates generally open well before the match, and the streets around Buzzard Point are busiest in the hour before kickoff and the half hour after the final whistle.",
        ],
      },
      {
        h2: "Access, parking and pickup",
        paragraphs: [
          "Audi Field is reached from South Capitol Street via Potomac Avenue SW, with the Frederick Douglass Memorial Bridge bringing traffic from the Anacostia side and I-395 and the Southeast-Southwest Freeway feeding South Capitol from Virginia and downtown. From Dulles the trip typically takes 40 to 65 minutes depending on traffic; from Arlington or Alexandria it is usually 15 to 35 minutes. Parking near the stadium is scarce, and a number of streets around the point close to general traffic on event days.",
          "We drop near the gates on Potomac Avenue when the closures allow and otherwise at the nearest open corner, then set a pickup point a few blocks north toward Nationals Park or the Wharf where the vehicle can wait legally and pull out without joining the South Capitol crawl.",
        ],
      },
      {
        h2: "Groups, hospitality and the full evening",
        paragraphs: [
          "Supporters' groups, corporate suites and birthday parties ride in Sprinter vans for up to 14 or in coordinated multiple vehicles. Many clients build the evening around the match: pickup in Arlington, Alexandria or Fairfax, dinner at the Wharf or Navy Yard, the game, and the ride home, all on one hourly reservation with the chauffeur waiting nearby. Visiting fans can combine a Dulles or Reagan National arrival with the match and a hotel drop-off.",
          "Cancellation is free up to 3 hours before pickup for sedans and SUVs and 12 hours for Sprinter vans, limousines and special-event reservations.",
        ],
      },
    ],
    vehicles: VEHICLES,
    faqs: [
      {
        q: "Where does the chauffeur drop off and pick up at Audi Field?",
        a: "Drop-off is at the gates on Potomac Avenue SW when street closures allow, otherwise at the nearest open corner. Pickup is at a pre-arranged point a few blocks north toward Nationals Park or the Wharf, confirmed by text, outside the match-day closures.",
      },
      {
        q: "How much does transportation to Audi Field cost?",
        a: "Point-to-point trips are one flat rate by vehicle and pickup address. If you want the chauffeur to wait through the match, we quote an hourly rate with a minimum. Both are confirmed before you book. Call (877) 609-1919 for a quote.",
      },
      {
        q: "Is there parking at Audi Field?",
        a: "On-site parking is limited and many nearby streets are restricted on event days, which is why most fans arrive by Metro or on foot. With a chauffeur there is nothing to park.",
      },
      {
        q: "Can you carry a supporters' group or a suite party?",
        a: "Yes. Mercedes Sprinter vans carry up to 14, SUVs seat six and stretch limousines seat eight; larger groups ride in multiple coordinated vehicles that arrive together.",
      },
      {
        q: "How long is the ride from Northern Virginia to Audi Field?",
        a: "From Arlington or Alexandria typically 15 to 35 minutes, from Tysons or Fairfax 30 to 55 minutes, and from Dulles 40 to 65 minutes, all depending on traffic. We schedule pickups against live conditions.",
      },
    ],
    related: [
      { label: "Capital One Arena Transportation", to: "/capital-one-arena-transportation" },
      { label: "Kennedy Center Transportation", to: "/kennedy-center-transportation" },
      { label: "Washington Convention Center Transportation", to: "/washington-convention-center-transportation" },
      { label: "Arlington Limo Service", to: "/arlington-limo-service" },
      { label: "Alexandria Limo Service", to: "/alexandria-limo-service" },
      { label: "National Harbor Transportation", to: "/national-harbor-transportation" },
      { label: "IAD to Washington DC", to: "/iad-to-washington-dc" },
      { label: "Birthday Limo", to: "/birthday-limo" },
    ],
    schema: { areaServed: ["Washington, DC"], serviceType: "Event transportation" },
  },

  // -------------------------------------------------------------- SERVICES
  {
    slug: "northern-virginia-hourly-chauffeur-service",
    type: "service",
    name: "Northern Virginia Hourly Chauffeur Service",
    badge: "Chauffeured Service · Northern Virginia",
    h1: "Northern Virginia Hourly Car Service",
    metaTitle: "Northern Virginia Hourly Chauffeur Service | As Directed",
    metaDescription:
      "Hourly, as-directed chauffeur service across Northern Virginia and DC: meeting days, shopping, medical appointments, sightseeing. Call (877) 609-1919.",
    stats: [
      { label: "Coverage", value: "Northern Virginia · DC · Maryland" },
      { label: "Stops", value: "Unlimited within the booking" },
      { label: "Pricing", value: "Hourly with a minimum, confirmed in writing" },
    ],
    intro: [
      "IAD Airport Limo offers hourly, as-directed chauffeur service across Northern Virginia, Washington, DC and Maryland: the vehicle and chauffeur stay with you for the block of time you book, and the route is whatever your day requires. Meetings in Tysons and Reston, a shopping afternoon at the Galleria, a medical appointment with a wait, a day of sightseeing for visiting family, or a dinner and a show with the car outside afterward.",
      "Point-to-point transfers work when a day has one destination. Most days in this region do not. Hourly service replaces the guesswork of separate bookings and rideshare estimates with one chauffeur, one confirmed hourly rate and unlimited stops. The car waits where you are, so there is no re-booking after a meeting runs long, no parking garage in Georgetown and no standing in the rain outside a hospital entrance.",
    ],
    highlights: [
      "One chauffeur and one vehicle for the whole block of time, with unlimited stops and route changes",
      "Multi-meeting days across Tysons, Reston, Herndon, Arlington, Alexandria and Capitol Hill",
      "Shopping and dining runs to Tysons Galleria, Reston Town Center, the Mosaic District, Georgetown and Old Town",
      "Medical appointments at Inova Fairfax, Reston Hospital Center, Virginia Hospital Center and downtown DC hospitals, with the chauffeur waiting",
      "Sightseeing days on the National Mall, at Arlington National Cemetery, Mount Vernon and Great Falls for visiting family",
      "Licensed and insured Virginia and Maryland carrier with 24/7 dispatch",
    ],
    sections: [
      {
        h2: "How as-directed hourly service works",
        paragraphs: [
          "You book a starting time, a starting address and the number of hours you expect to need. The chauffeur arrives, and from that point the vehicle is yours: add a stop, change the order, extend the booking by phone if the day runs over. The rate is hourly with a minimum, confirmed in writing before you book, and it does not change with the number of stops or the miles driven within the service area. Waiting time is simply part of the booking, so a two-hour appointment costs the same whether the chauffeur waits in the lot or runs a quick errand for you in the meantime.",
        ],
      },
      {
        h2: "Business days, appointments and errands",
        paragraphs: [
          "Corporate clients use hourly service for roadshow days that touch three or four offices between Tysons, Reston and downtown Washington, for board members who need a car on call, and for visiting executives who would rather not navigate the Beltway between meetings. Residents use it for a medical procedure where someone needs to be waiting afterward, for a day of errands across Fairfax County, or for a wedding-planning circuit of venues in Loudoun.",
          "Because the chauffeur stays with you, the car is also a quiet place to take a call between stops, and luggage or purchases ride along instead of being carried into every building.",
        ],
      },
      {
        h2: "Family visits, sightseeing and evenings out",
        paragraphs: [
          "When parents or in-laws fly into Dulles, an hourly booking lets you show them the region without a parking strategy: the Lincoln Memorial and the Mall, the changing of the guard at Arlington National Cemetery, George Washington's Mount Vernon, Great Falls Park, lunch in Old Town Alexandria and back to Ashburn or McLean by dinner. Evenings work the same way, with dinner in Georgetown followed by the Kennedy Center or Capital One Hall and the car waiting at the door.",
          "SUVs carry six with room for strollers and car seats, which we install on request, and Sprinter vans carry up to 14 for a full family outing. Cancellation is free up to 3 hours before pickup for sedans and SUVs and 12 hours for Sprinter vans and limousines.",
        ],
      },
    ],
    vehicles: VEHICLES,
    faqs: [
      {
        q: "How is hourly chauffeur service priced?",
        a: "By the hour, with a minimum number of hours, confirmed in writing before you book. The rate does not change with the number of stops or the miles driven within the service area. Call (877) 609-1919 for a quote for your date and vehicle.",
      },
      {
        q: "Can I extend the booking if my day runs long?",
        a: "Yes, subject to the chauffeur's next assignment. Call or text dispatch as soon as you know, and the additional time is billed at the same hourly rate.",
      },
      {
        q: "Does the chauffeur wait during a medical appointment or a meeting?",
        a: "Yes. Waiting is part of an hourly booking, and the chauffeur stays nearby so the car is at the entrance when you are ready.",
      },
      {
        q: "Which areas does hourly service cover?",
        a: "Northern Virginia from Loudoun to Alexandria, Washington, DC and the Maryland suburbs, with longer day trips to Charlottesville, Richmond, Annapolis or Baltimore quoted on request.",
      },
      {
        q: "Can I combine an airport pickup with hourly service?",
        a: "Yes. The booking can begin at Dulles, Reagan National or BWI with flight tracking on the arrival, then continue as directed for the rest of the day.",
      },
    ],
    related: [
      { label: "Tysons Limo Service", to: "/tysons-limo-service" },
      { label: "Reston Limo Service", to: "/reston-limo-service" },
      { label: "Arlington Limo Service", to: "/arlington-limo-service" },
      { label: "Northern Virginia Anniversary Limo", to: "/northern-virginia-anniversary-limo" },
      { label: "Kennedy Center Transportation", to: "/kennedy-center-transportation" },
      { label: "Corporate Transportation", to: "/corporate" },
      { label: "Wine Tours", to: "/wine-tours" },
      { label: "Booking", to: "/book-now" },
    ],
    schema: { areaServed: ["Northern Virginia", "Washington, DC", "Maryland"], serviceType: "Hourly chauffeur service" },
  },
  {
    slug: "northern-virginia-anniversary-limo",
    type: "service",
    name: "Northern Virginia Anniversary Limo",
    badge: "Chauffeured Service · Northern Virginia",
    h1: "Northern Virginia Anniversary Limo Service",
    metaTitle: "Northern Virginia Anniversary Limo | Date Night Car",
    metaDescription:
      "Anniversary limo and black car service in Northern Virginia: Old Town waterfront dinners, the Kennedy Center or a Loudoun winery day. Call (877) 609-1919.",
    stats: [
      { label: "Coverage", value: "Northern Virginia · DC · Loudoun wine country" },
      { label: "Fleet", value: "Sedans · SUVs · Sprinters · Limousines" },
      { label: "Pricing", value: "Flat rate or hourly, confirmed in writing" },
    ],
    intro: [
      "IAD Airport Limo provides anniversary limo and chauffeured car service across Northern Virginia and Washington, DC: a sedan for a quiet dinner on the Old Town Alexandria waterfront, a stretch limousine for a milestone year, or a Sprinter van for a vow renewal with the whole family aboard. The chauffeur handles the doors, the parking and the timing so the evening is only about the two of you.",
      "The region offers more anniversary settings than most couples get to in a decade: candlelit dining in Great Falls, the rooftop and hotel restaurants of Tysons, a performance at the Kennedy Center, a Georgetown waterfront stroll, or a full day among the vineyards of western Loudoun with a picnic packed in the back. We plan the itinerary with you, confirm the rate in writing, and send the chauffeur's name the day before.",
    ],
    highlights: [
      "Evening service to Old Town Alexandria's King Street and waterfront restaurants with the chauffeur waiting nearby",
      "Dinner in Great Falls, Tysons, McLean or Georgetown followed by the Kennedy Center, Capital One Hall or Wolf Trap",
      "Loudoun wine-country days to Middleburg, Purcellville and Leesburg vineyards on an hourly booking",
      "Overnight escapes to Lansdowne, Salamander in Middleburg or the inns of Rappahannock County",
      "Stretch limousines, sedans and SUVs with a chosen playlist, quiet cabin and no clock-watching",
      "Licensed and insured Virginia and Maryland carrier with 24/7 dispatch",
    ],
    sections: [
      {
        h2: "Dinner and a show",
        paragraphs: [
          "The classic anniversary evening in Northern Virginia starts with a reservation and ends with a performance. Popular pairings include dinner at L'Auberge Chez François in Great Falls and a late drive along the Potomac, an early table in Tysons or McLean followed by a show at Capital One Hall, a Georgetown dinner and the Kennedy Center's Opera House or Concert Hall, or an Old Town evening that moves from a King Street restaurant to a walk along the waterfront. Book hourly and the chauffeur stays with you throughout; book point-to-point and we schedule the return for the end of the show.",
        ],
      },
      {
        h2: "A day in wine country",
        paragraphs: [
          "For couples who would rather spend the day than the evening, western Loudoun is within an hour of most of Northern Virginia. An hourly booking lets you set the pace: a late morning at Stone Tower Winery outside Leesburg, lunch in Middleburg, an afternoon tasting at Bluemont Vineyard or Breaux Vineyards, and a slow drive back through Purcellville and Hillsboro while the chauffeur handles the rural roads. SUVs carry a picnic and a case of wine comfortably, and a Sprinter van brings the friends who were at the wedding.",
          "Overnight stays at Lansdowne Resort, Salamander in Middleburg or a country inn can be added with a pickup the next morning.",
        ],
      },
      {
        h2: "Milestone years and vow renewals",
        paragraphs: [
          "Tenth, twenty-fifth and fiftieth anniversaries often involve family: a vow renewal at the original church, a dinner for twenty at a Tysons or Alexandria restaurant, or a surprise arrival in a stretch limousine. We coordinate multiple vehicles under one reservation so parents, children and grandchildren arrive together, and the chauffeur is briefed on the surprise if there is one. Flowers, a chilled bottle or a specific route past a meaningful address can be arranged when you book.",
          "Cancellation is free up to 3 hours before pickup for sedans and SUVs and 12 hours for Sprinter vans, limousines and special-event reservations.",
        ],
      },
    ],
    vehicles: VEHICLES,
    faqs: [
      {
        q: "How is anniversary limo service priced?",
        a: "Point-to-point trips are a flat rate by vehicle and address; evenings with waiting time and wine-country days are hourly with a minimum. The price is confirmed in writing before you book. Call (877) 609-1919 for a quote.",
      },
      {
        q: "Will the chauffeur wait during dinner and the show?",
        a: "Yes, on an hourly booking. The chauffeur stages nearby and is at the door when you text, so there is no garage or curb wait at the end of the night.",
      },
      {
        q: "Can you plan a Loudoun wine-country day for two?",
        a: "Yes. We suggest routes among the Leesburg, Middleburg, Purcellville and Hillsboro wineries, and the hourly booking lets you change the order or linger as the day unfolds.",
      },
      {
        q: "Can you arrange flowers or champagne in the vehicle?",
        a: "Yes. Tell us what you would like when you book and we will confirm what can be arranged for your date and vehicle.",
      },
      {
        q: "How far ahead should I book for an anniversary?",
        a: "As early as you can for Saturday evenings and for stretch limousines and Sprinter vans; sedans and SUVs are often available on shorter notice. Cancellation remains free within the standard windows.",
      },
    ],
    related: [
      { label: "Alexandria Limo Service", to: "/alexandria-limo-service" },
      { label: "Leesburg Limo Service", to: "/leesburg-limo-service" },
      { label: "Kennedy Center Transportation", to: "/kennedy-center-transportation" },
      { label: "Capital One Hall Transportation", to: "/capital-one-hall-transportation" },
      { label: "Northern Virginia Hourly Car Service", to: "/northern-virginia-hourly-chauffeur-service" },
      { label: "Wine Tours", to: "/wine-tours" },
      { label: "Wedding Limo", to: "/wedding-limo" },
      { label: "Birthday Limo", to: "/birthday-limo" },
    ],
    schema: { areaServed: ["Northern Virginia", "Washington, DC"], serviceType: "Anniversary limousine service" },
  },
  {
    slug: "northern-virginia-graduation-limo",
    type: "service",
    name: "Northern Virginia Graduation Limo",
    badge: "Chauffeured Service · Northern Virginia",
    h1: "Northern Virginia Graduation Limo Service",
    metaTitle: "Northern Virginia Graduation Limo | Family Car Service",
    metaDescription:
      "Graduation limo and family car service in Northern Virginia: George Mason, Georgetown, GW, UVA, Virginia Tech and high schools. Sprinters. Call (877) 609-1919.",
    stats: [
      { label: "Coverage", value: "Northern Virginia · DC · Charlottesville · Blacksburg" },
      { label: "Fleet", value: "Sedans · SUVs · 14-passenger Sprinters · Limousines" },
      { label: "Pricing", value: "Flat rate or hourly, confirmed in writing" },
    ],
    intro: [
      "IAD Airport Limo provides graduation limo and chauffeured car service across Northern Virginia and Washington, DC, for university commencements, high school ceremonies and the family celebrations that follow. Grandparents fly into Dulles, the family rides together in a Sprinter van, the graduate gets the limousine, and nobody spends commencement morning circling a full parking lot.",
      "Graduation weekends compress a lot of people into a few venues on the same day. George Mason fills EagleBank Arena and the Fairfax campus, Georgetown covers Healy Lawn, George Washington University gathers on the National Mall, and Fairfax County and Loudoun County high schools stagger their ceremonies across arenas, campus halls and school stadiums through late spring. We plan pickups around the venue's traffic pattern, confirm the rate in writing, and coordinate the airport transfers for relatives arriving from out of town.",
    ],
    highlights: [
      "Family groups of up to 14 in a Mercedes Sprinter van, with multiple vehicles coordinated for larger parties",
      "George Mason commencement and EagleBank Arena ceremonies with pickup points set away from the campus crush",
      "Georgetown, George Washington, American and Howard commencements in Washington, DC",
      "Long-distance days to UVA in Charlottesville and Virginia Tech in Blacksburg, quoted in advance",
      "High school graduations across Fairfax, Loudoun, Arlington, Alexandria and Prince William",
      "Licensed and insured Virginia and Maryland carrier with 24/7 dispatch",
    ],
    sections: [
      {
        h2: "University commencements",
        paragraphs: [
          "George Mason's ceremonies in Fairfax bring the heaviest local traffic, with EagleBank Arena and the surrounding lots filling early; we confirm a pickup point on the edge of campus and time the arrival to the ceremony schedule. In the District, Georgetown's ceremonies on Healy Lawn and GW's commencement on the National Mall involve street closures and long walks from any parking, so a drop-off at the nearest open corner and a staged pickup matter more than usual. We also serve American University, Howard, Catholic University and Marymount in Arlington.",
          "For UVA's Final Exercises on the Lawn in Charlottesville and Virginia Tech's commencement in Blacksburg, we quote the full day or weekend in advance, including waiting time, so a family from Northern Virginia can ride together, attend the ceremony and return without a second driver.",
        ],
      },
      {
        h2: "High school graduations and the party afterward",
        paragraphs: [
          "Fairfax County, Loudoun County, Arlington, Alexandria and Prince William high schools hold ceremonies at arenas, campus auditoriums and school stadiums through May and June, often on weekday mornings when the family car is already spoken for. A Sprinter van collects grandparents, siblings and the graduate from one or two addresses, delivers everyone to the ceremony, and moves on to the restaurant or the backyard party afterward. Stretch limousines are popular for the graduate and friends heading to a dinner in Tysons, Reston Town Center or Old Town Alexandria that evening.",
        ],
      },
      {
        h2: "Airport transfers for visiting relatives",
        paragraphs: [
          "Many graduation bookings begin at Dulles, Reagan National or BWI. We track each arriving flight, meet relatives at baggage claim if requested, and bring them to the family home or hotel with 45 minutes of complimentary waiting on domestic arrivals and 60 on international. The departure runs are scheduled the same way at the end of the weekend, and everything sits under one reservation with one point of contact. Car seats are available on request for younger siblings and cousins.",
          "Cancellation is free up to 3 hours before pickup for sedans and SUVs and 12 hours for Sprinter vans, limousines and special-event reservations.",
        ],
      },
    ],
    vehicles: VEHICLES,
    faqs: [
      {
        q: "How is graduation transportation priced?",
        a: "Local ceremonies and airport transfers are flat rates by vehicle and address; days that include waiting during the ceremony, and long-distance trips to Charlottesville or Blacksburg, are quoted hourly or as a package in advance. Call (877) 609-1919 for a quote.",
      },
      {
        q: "How many people fit in one vehicle?",
        a: "Sedans seat three, Cadillac Escalade and Chevrolet Suburban SUVs seat six, stretch limousines seat eight and Mercedes Sprinter vans carry up to 14. Larger families ride in multiple coordinated vehicles.",
      },
      {
        q: "Can you handle a George Mason commencement at EagleBank Arena?",
        a: "Yes. We set a pickup point on the edge of campus away from the arena lots, time the drop-off to the ceremony schedule and stage nearby for the return.",
      },
      {
        q: "Do you travel to UVA in Charlottesville or Virginia Tech in Blacksburg for graduation?",
        a: "Yes. Both are quoted in advance as a full day or weekend, with waiting time included, so the family can travel together from Northern Virginia and back.",
      },
      {
        q: "How far in advance should we book for graduation season?",
        a: "As early as the ceremony date is published, particularly for Sprinter vans and limousines on May and June weekends, which are the first vehicles to fill.",
      },
    ],
    related: [
      { label: "Fairfax Limo Service", to: "/fairfax-limo-service" },
      { label: "EagleBank Arena Transportation", to: "/eaglebank-arena-transportation" },
      { label: "IAD to Charlottesville", to: "/iad-to-charlottesville-va" },
      { label: "Arlington Limo Service", to: "/arlington-limo-service" },
      { label: "Prom Limo", to: "/prom-limo" },
      { label: "Birthday Limo", to: "/birthday-limo" },
      { label: "Washington DC Airport Transfers", to: "/washington-dc-airport-transfers" },
      { label: "Fleet", to: "/fleet" },
    ],
    schema: { areaServed: ["Northern Virginia", "Washington, DC", "Charlottesville, VA"], serviceType: "Graduation limousine service" },
  },
];
