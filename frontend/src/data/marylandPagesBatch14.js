// Batch 14 (2026-10-28, SEO expansion round 9) — 20 new landing pages filling
// gaps left after eight prior rounds, cross-checked against every existing
// MARYLAND_PAGES / routesData / venuesData / GUIDES / blogData slug before
// writing: eight wedding-limo gap-fills for destination and NoVA markets
// that already had a general city page but no wedding-specific variant
// (Charlottesville, Winchester, Annapolis, National Harbor, Purcellville,
// Fredericksburg, McLean, Sterling — the same gap-fill pattern already used
// for Middleburg/Great Falls in round 8); eight corporate-car-service
// gap-fills for markets with a general city page and/or a different service
// variant but no corporate page (Crystal City, Pentagon City, Richmond,
// Annapolis, Georgetown, Columbia MD, Great Falls, Capitol Hill — Crystal
// City and Pentagon City in particular cover the Amazon HQ2/National
// Landing and Pentagon contractor markets, which had no dedicated corporate
// page despite both already having a general city page); and four
// prom-limo-service gap-fills for major suburban high-school markets that
// already had general/wedding/corporate pages but no prom page (Bethesda,
// Arlington, Alexandria, Vienna — joining the existing Centreville/Fairfax/
// Leesburg/McLean/Oakton/Potomac/Reston/Rockville/Tysons/Ashburn prom pages).
// Same entry shape as MARYLAND_PAGES. Lives in its own file.
const VEHICLES = [
  { name: "Mercedes-Benz E-Class", cls: "Business sedan", seats: 3, best: "solo executives and couples" },
  { name: "BMW 7 Series", cls: "First-class sedan", seats: 3, best: "VIP and executive travel" },
  { name: "Cadillac Escalade", cls: "Premium SUV", seats: 6, best: "families and small groups with luggage" },
  { name: "Chevrolet Suburban", cls: "Luxury SUV", seats: 6, best: "airport runs with beach or golf luggage" },
  { name: "Mercedes Sprinter van", cls: "Executive van", seats: 14, best: "wedding parties, corporate teams and groups" },
  { name: "Stretch limousine", cls: "Limousine", seats: 8, best: "proms, weddings and celebrations" },
];

export const MARYLAND_BATCH14 = [
  // ---------------------------------------------------------------------
  // Charlottesville wedding
  // ---------------------------------------------------------------------
  {
    slug: "charlottesville-va-wedding-limo-service",
    type: "service",
    name: "Charlottesville",
    badge: "Charlottesville, VA · Wedding Transportation",
    h1: "Charlottesville Wedding Limo Service",
    metaTitle: "Charlottesville Wedding Limo Service | VA Wine Country",
    metaDescription:
      "Chauffeured wedding transportation for Charlottesville and Monticello-area wineries and estates. Hourly packages, groups welcome. Call (877) 609-1919.",
    stats: [
      { label: "Dulles (IAD)", value: "110 mi · 2 hours – 2 hours 15 minutes" },
      { label: "Pricing", value: "Hourly, as-directed wedding packages" },
      { label: "Fleet", value: "Stretch limousine up to 14-passenger Sprinter van" },
    ],
    intro: [
      "Charlottesville and the surrounding Monticello wine trail are one of Virginia's best-known wedding destinations — vineyard venues with Blue Ridge views, historic estates, and a compact, walkable downtown where most wedding parties stay the weekend. Because so many Charlottesville weddings draw guests flying into Dulles or Richmond rather than driving from town, we run this as a destination-wedding market: group airport pickups, hotel shuttles and a full wedding-day itinerary on a single reservation.",
      "A typical Charlottesville wedding weekend spans a rehearsal dinner downtown, a ceremony at a vineyard or estate 20 to 30 minutes outside the city, and a reception that may be the same property or a different one entirely. We coordinate the full schedule with your planner in advance so the chauffeur already knows every stop before the weekend starts.",
    ],
    highlights: [
      "Hourly wedding-day packages covering rehearsal dinner, ceremony and reception stops",
      "Group airport pickups from Dulles for out-of-town wedding guests flying in for the weekend",
      "Guest shuttles between downtown hotels and vineyard or estate venues",
      "Chauffeurs experienced with gravel vineyard drives and limited on-site parking",
      "Decoration-ready stretch limousines for the bridal party",
      "Licensed and insured Virginia carrier for the full Charlottesville weekend",
    ],
    sections: [
      {
        h2: "Built for a destination-wedding weekend",
        paragraphs: [
          "Most Charlottesville weddings are not a single-day local event — they are a weekend that out-of-town guests fly in for, often through Dulles, and we treat the transportation the same way: one coordinated plan covering airport pickups, hotel transfers, the rehearsal dinner and the wedding day itself, rather than separate one-off bookings for each piece.",
          "Because the drive from Dulles is just over two hours, we confirm flight times well in advance and stage group pickups so wedding-party members and family arriving on different flights are not left waiting at the airport or arranging their own transportation into town.",
        ],
      },
      {
        h2: "Vineyard and estate venue logistics",
        paragraphs: [
          "Charlottesville's most-booked wedding venues sit along the Monticello wine trail and surrounding countryside, often at the end of gravel entrance roads with limited guest parking by design. We confirm each venue's specific access and parking plan ahead of time, and will recommend a sedan or SUV instead of a stretch limousine when a particular drive calls for it.",
        ],
      },
      {
        h2: "Downtown hotel shuttles for the wedding weekend",
        paragraphs: [
          "With much of the wedding party staying downtown near the Corner or the Downtown Mall, a Mercedes Sprinter van runs guest shuttles between the hotel block and the venue for the rehearsal dinner and the wedding day, so no one is driving unfamiliar country roads after dark.",
        ],
      },
      {
        h2: "One chauffeur for the whole itinerary",
        paragraphs: [
          "Booking the rehearsal dinner, ceremony and reception as one hourly, as-directed reservation keeps the same chauffeur and vehicle with the bridal party for the entire weekend, rather than juggling different drivers who do not know the schedule.",
        ],
      },
      {
        h2: "Booking your Charlottesville wedding weekend",
        paragraphs: [
          "Rates are hourly and confirmed in writing before the date is booked. Call (877) 609-1919 or book online with your venue, guest count and arrival flights — the earlier the better for a Saturday during the spring or fall wedding season.",
        ],
      },
    ],
    vehicles: VEHICLES,
    faqs: [
      { q: "Do you provide wedding transportation for Charlottesville vineyard and estate venues?", a: "Yes, including venues along the Monticello wine trail and surrounding countryside. Tell us the venue when you book and we confirm gate and parking logistics in advance." },
      { q: "Can you pick up out-of-town wedding guests flying into Dulles?", a: "Yes. We regularly run group airport pickups from Dulles for Charlottesville wedding weekends, tracked against each guest's actual flight." },
      { q: "How far is Charlottesville from Dulles Airport?", a: "About 110 miles, roughly 2 hours to 2 hours 15 minutes depending on traffic." },
      { q: "Can a stretch limousine access a vineyard's gravel entrance road?", a: "It depends on the specific drive. We confirm vehicle access with the venue ahead of time and will recommend a sedan or SUV instead when a limousine is not practical." },
      { q: "How far ahead should we book a Charlottesville wedding weekend?", a: "As early as possible, especially for a Saturday in spring or fall, which is peak wedding season for the Monticello wine trail." },
    ],
    related: [
      { label: "Charlottesville Limo Service", to: "/charlottesville-va-limo-service" },
      { label: "IAD to Charlottesville", to: "/iad-to-charlottesville-va" },
      { label: "How Much Does a Limo Cost From IAD to Charlottesville", to: "/blog/how-much-does-a-limo-cost-from-iad-to-charlottesville" },
      { label: "Top 10 Wedding Venues Near Dulles & NoVA", to: "/top-10-wedding-venues-near-dulles-nova" },
      { label: "Winchester Wedding Limo Service", to: "/winchester-va-wedding-limo-service" },
      { label: "Wedding Limo Service", to: "/wedding-limo" },
    ],
    schema: { areaServed: ["Charlottesville, VA", "Albemarle County, VA", "Monticello Wine Trail"], serviceType: "Wedding limousine and chauffeur service" },
  },
  // ---------------------------------------------------------------------
  // Winchester wedding
  // ---------------------------------------------------------------------
  {
    slug: "winchester-va-wedding-limo-service",
    type: "service",
    name: "Winchester",
    badge: "Winchester, VA · Wedding Transportation",
    h1: "Winchester Wedding Limo Service",
    metaTitle: "Winchester VA Wedding Limo Service | Shenandoah Valley",
    metaDescription:
      "Chauffeured wedding transportation for Winchester and Shenandoah Valley wineries and orchards. Hourly packages for the whole bridal party. Call (877) 609-1919.",
    stats: [
      { label: "Dulles (IAD)", value: "70 mi · 75–90 minutes" },
      { label: "Pricing", value: "Hourly, as-directed wedding packages" },
      { label: "Fleet", value: "Stretch limousine up to 14-passenger Sprinter van" },
    ],
    intro: [
      "Winchester sits at the northern end of the Shenandoah Valley, surrounded by a growing cluster of wineries, orchard venues and historic farm properties that have made it a regional wedding destination distinct from the Loudoun horse-country scene closer to Dulles. We provide hourly, as-directed wedding-day transportation built around valley venue logistics — long approach roads, orchard and vineyard parking fields, and ceremony sites set well back from the highway.",
      "Because Winchester draws guests from both the DC metro and the Shenandoah Valley itself, a Winchester wedding day often needs a chauffeur who can run between a downtown Old Town hotel, an orchard or vineyard ceremony site, and a reception venue — all on one reservation with a single chauffeur for the day.",
    ],
    highlights: [
      "Hourly wedding-day packages covering getting-ready, ceremony and reception stops",
      "Chauffeurs experienced with Shenandoah Valley winery and orchard venue access",
      "Guest shuttles in Sprinter vans between Old Town hotels and farm or vineyard venues",
      "Coordinated timing with wedding planners familiar with valley venue logistics",
      "Decoration-ready stretch limousines for the bridal party",
      "Licensed and insured Virginia carrier, 70 miles and 75–90 minutes from Dulles",
    ],
    sections: [
      {
        h2: "Built for Shenandoah Valley venue logistics",
        paragraphs: [
          "Winchester-area wineries and orchard venues are often working agricultural properties first, with ceremony lawns and reception barns a short drive from the main parking field. We confirm each venue's specific gate, parking and vendor-arrival instructions in advance, and flag any gravel or unpaved stretches that call for an SUV instead of a stretch limousine.",
        ],
      },
      {
        h2: "One reservation for the whole wedding day",
        paragraphs: [
          "A Winchester wedding day commonly starts at an Old Town hotel for hair, makeup and photos, moves out to a ceremony site, and continues to a reception that may be the same orchard or vineyard or a separate property nearby. We book this as a single hourly, as-directed reservation so the same chauffeur and vehicle stay with the bridal party across the entire day.",
        ],
      },
      {
        h2: "Guest shuttles for valley wineries and orchards",
        paragraphs: [
          "Many Shenandoah Valley venues intentionally limit on-site parking, which makes a guest shuttle from a nearby hotel a practical necessity rather than an upgrade. A Mercedes Sprinter van runs a loop between the hotel block and the venue through the reception, keeping guests off unlit rural roads after dark.",
        ],
      },
      {
        h2: "Airport pickups for out-of-town wedding guests",
        paragraphs: [
          "Dulles is the nearest major airport to Winchester at roughly 70 miles and 75 to 90 minutes, and we run group pickups in the days before a wedding for family and wedding-party members flying in, tracked against each guest's actual flight.",
        ],
      },
      {
        h2: "Booking your Winchester wedding day",
        paragraphs: [
          "Rates are hourly and confirmed in writing before the date is booked. Call (877) 609-1919 or book online with your venue, timeline and guest count — the earlier the better for a Saturday during peak orchard-wedding season.",
        ],
      },
    ],
    vehicles: VEHICLES,
    faqs: [
      { q: "Do you serve Winchester-area wineries and orchard wedding venues?", a: "Yes, including working-orchard venues and wineries throughout the Shenandoah Valley near Winchester — tell us the venue when you book and we confirm gate and parking logistics in advance." },
      { q: "How far is Winchester from Dulles Airport?", a: "About 70 miles and 75 to 90 minutes depending on traffic, which makes group pickups for out-of-town wedding guests straightforward." },
      { q: "Can you shuttle guests between an Old Town hotel and a valley venue with limited parking?", a: "Yes. A Mercedes Sprinter van is the most common choice for a guest shuttle loop between a downtown hotel block and a Winchester-area venue." },
      { q: "Can a stretch limousine access an orchard or vineyard's gravel drive?", a: "It depends on the specific drive. We confirm vehicle access with the venue ahead of time and will recommend a sedan or SUV instead when a limousine is not practical." },
      { q: "How far ahead should we book a Winchester wedding date?", a: "As early as possible, especially for a Saturday in fall orchard season, which is the Shenandoah Valley's busiest wedding window." },
    ],
    related: [
      { label: "Winchester Limo Service", to: "/winchester-va-limo-service" },
      { label: "IAD to Winchester", to: "/iad-to-winchester-va" },
      { label: "Charlottesville Wedding Limo Service", to: "/charlottesville-va-wedding-limo-service" },
      { label: "Loudoun's Horse Country Estate Weddings Guide", to: "/blog/loudoun-horse-country-estate-wedding-transportation-vendor-guide" },
      { label: "Purcellville Wedding Limo Service", to: "/purcellville-wedding-limo-service" },
      { label: "Wedding Limo Service", to: "/wedding-limo" },
    ],
    schema: { areaServed: ["Winchester, VA", "Shenandoah Valley", "Frederick County, VA"], serviceType: "Wedding limousine and chauffeur service" },
  },
  // ---------------------------------------------------------------------
  // Annapolis wedding
  // ---------------------------------------------------------------------
  {
    slug: "annapolis-wedding-limo-service",
    type: "service",
    name: "Annapolis",
    badge: "Annapolis, MD · Wedding Transportation",
    h1: "Annapolis Wedding Limo Service",
    metaTitle: "Annapolis Wedding Limo Service | Waterfront & Naval Venues",
    metaDescription:
      "Chauffeured wedding transportation for Annapolis waterfront venues, the Naval Academy and historic downtown. Hourly packages. Call (877) 609-1919.",
    stats: [
      { label: "Dulles (IAD)", value: "55 mi · 65–85 minutes" },
      { label: "BWI", value: "25 mi · 30–45 minutes" },
      { label: "Pricing", value: "Hourly, as-directed wedding packages" },
    ],
    intro: [
      "Annapolis is one of the region's most-booked waterfront wedding destinations — Chesapeake Bay views, historic downtown venues, Naval Academy connections, and a cluster of yacht clubs and inns along the water. We provide hourly, as-directed wedding-day transportation built around Annapolis's compact but congested downtown, limited event parking, and venues that are sometimes a short boat ride or a longer drive from each other depending on the property.",
      "An Annapolis wedding day frequently includes a getting-ready suite downtown, a ceremony at the Naval Academy chapel or a waterfront venue, and a reception at a yacht club or inn — often all within a few miles but with parking and traffic that make a single, planner-coordinated reservation far easier than separate rides.",
    ],
    highlights: [
      "Hourly wedding-day packages covering getting-ready, ceremony and reception stops",
      "Chauffeurs experienced with downtown Annapolis parking and summer boat-show traffic",
      "Guest shuttles between downtown hotels and waterfront or Naval Academy venues",
      "Coordinated timing with wedding planners familiar with Annapolis's historic district",
      "Decoration-ready stretch limousines for the bridal party",
      "Licensed and insured Maryland carrier, 55 miles from Dulles and 25 miles from BWI",
    ],
    sections: [
      {
        h2: "Built for Annapolis's historic downtown and waterfront",
        paragraphs: [
          "Annapolis's narrow colonial-era streets, limited downtown parking and Naval Academy security checkpoints make a self-driven wedding day risky on timing alone. We confirm each venue's specific drop-off point, Academy gate requirements and parking plan in advance so the chauffeur is never guessing on the day.",
          "During the City Dock boat shows and peak summer weekends, downtown traffic adds real unpredictability to any drive — we build that into the timeline rather than treating it as a surprise.",
        ],
      },
      {
        h2: "One reservation for the whole wedding day",
        paragraphs: [
          "A typical Annapolis wedding day moves between a downtown hotel, a ceremony site at the Naval Academy chapel or a waterfront venue, and a reception at a yacht club or inn. We book this as a single hourly, as-directed reservation so the same chauffeur and vehicle stay with the bridal party across every stop.",
        ],
      },
      {
        h2: "Guest shuttles for waterfront venues",
        paragraphs: [
          "Many Annapolis waterfront venues have limited on-site parking by design, which makes a guest shuttle from a downtown hotel a practical requirement. A Mercedes Sprinter van runs a loop between the hotel block and the venue through the reception.",
        ],
      },
      {
        h2: "Airport pickups for out-of-town wedding guests",
        paragraphs: [
          "BWI is the closest major airport to Annapolis at roughly 25 miles and 30 to 45 minutes, with Dulles a reasonable alternative at about 55 miles. We run group pickups in the days before a wedding for family and wedding-party members flying into either airport, each tracked against their actual flight.",
        ],
      },
      {
        h2: "Booking your Annapolis wedding day",
        paragraphs: [
          "Rates are hourly and confirmed in writing before the date is booked. Call (877) 609-1919 or book online with your venue, timeline and guest count — the earlier the better for a Saturday in peak wedding season.",
        ],
      },
    ],
    vehicles: VEHICLES,
    faqs: [
      { q: "Do you serve Naval Academy and waterfront wedding venues in Annapolis?", a: "Yes, including the Naval Academy chapel, downtown historic venues and waterfront yacht clubs and inns — tell us the venue when you book and we confirm gate and parking logistics in advance." },
      { q: "Can you handle Naval Academy security and gate requirements for a wedding?", a: "Yes. We confirm each Academy gate's specific entry requirements ahead of time so the chauffeur and vehicle are cleared for the ceremony day." },
      { q: "How far is Annapolis from BWI and Dulles?", a: "About 25 miles and 30 to 45 minutes from BWI, or about 55 miles and 65 to 85 minutes from Dulles, depending on traffic." },
      { q: "Can you shuttle guests between a downtown hotel and a waterfront venue?", a: "Yes. A Mercedes Sprinter van is the most common choice for a guest shuttle loop between a downtown Annapolis hotel block and a waterfront venue." },
      { q: "How far ahead should we book an Annapolis wedding date?", a: "As early as possible, especially for a Saturday between May and October, which is Annapolis's peak waterfront wedding season." },
    ],
    related: [
      { label: "Annapolis Limo Service", to: "/annapolis-limo-service" },
      { label: "BWI to Annapolis Car Service", to: "/bwi-to-annapolis-car-service" },
      { label: "Maryland Wedding Transportation", to: "/maryland-wedding-transportation" },
      { label: "Top 10 Wedding Venues Near Dulles & NoVA", to: "/top-10-wedding-venues-near-dulles-nova" },
      { label: "National Harbor Wedding Limo Service", to: "/national-harbor-wedding-limo-service" },
      { label: "Wedding Limo Service", to: "/wedding-limo" },
    ],
    schema: { areaServed: ["Annapolis, MD", "Anne Arundel County, MD", "United States Naval Academy"], serviceType: "Wedding limousine and chauffeur service" },
  },
  // ---------------------------------------------------------------------
  // National Harbor wedding
  // ---------------------------------------------------------------------
  {
    slug: "national-harbor-wedding-limo-service",
    type: "service",
    name: "National Harbor",
    badge: "National Harbor, MD · Wedding Transportation",
    h1: "National Harbor Wedding Limo Service",
    metaTitle: "National Harbor Wedding Limo Service | Waterfront MD",
    metaDescription:
      "Chauffeured wedding transportation for National Harbor waterfront venues and the Gaylord National. Hourly packages for the full bridal party. (877) 609-1919.",
    stats: [
      { label: "Dulles (IAD)", value: "50–65 minutes, depending on traffic" },
      { label: "Reagan (DCA)", value: "25–35 minutes, depending on traffic" },
      { label: "Pricing", value: "Hourly, as-directed wedding packages" },
    ],
    intro: [
      "National Harbor's Potomac waterfront, the Gaylord National resort and a growing list of rooftop and marina-adjacent event spaces have made it one of the DC region's busiest wedding and reception destinations. We provide hourly, as-directed wedding-day transportation built around National Harbor's single-entry road network, convention-weekend traffic and valet-only venue drop-offs.",
      "Because many National Harbor weddings host out-of-town guests at the Gaylord National or a nearby hotel, a wedding day here usually needs one chauffeur covering a hotel pickup, a waterfront or marina ceremony, and a reception — often all within National Harbor itself but still requiring careful valet and loading-zone coordination.",
    ],
    highlights: [
      "Hourly wedding-day packages covering hotel pickup, ceremony and reception stops",
      "Chauffeurs experienced with Gaylord National valet and convention-weekend traffic",
      "Guest shuttles between hotel blocks and waterfront or marina ceremony sites",
      "Coordinated timing with wedding planners familiar with National Harbor's venue network",
      "Decoration-ready stretch limousines for the bridal party",
      "Licensed and insured Maryland and DC-area carrier, available 24/7",
    ],
    sections: [
      {
        h2: "Built for National Harbor's venue network",
        paragraphs: [
          "National Harbor runs on a single main entrance road, and the Gaylord National and nearby venues can see significant valet backups during a busy convention weekend. We confirm the specific loading zone and valet arrangement for each venue in advance so the chauffeur is never guessing on the wedding day.",
        ],
      },
      {
        h2: "One reservation for the whole wedding day",
        paragraphs: [
          "A National Harbor wedding day typically moves between a hotel for getting-ready, a waterfront or marina ceremony site, and a reception at the same property or a nearby one. We book this as a single hourly, as-directed reservation so the same chauffeur and vehicle stay with the bridal party across every stop.",
        ],
      },
      {
        h2: "Guest shuttles for waterfront and marina venues",
        paragraphs: [
          "With much of the wedding party and guests staying at the Gaylord National or a nearby hotel, a Mercedes Sprinter van runs a loop between the hotel block and the ceremony or reception venue, keeping guests off the resort's internal roads and parking garages.",
        ],
      },
      {
        h2: "Airport pickups for out-of-town wedding guests",
        paragraphs: [
          "Reagan National is the closest major airport to National Harbor at about 25 to 35 minutes, with Dulles a practical alternative at 50 to 65 minutes. We run group pickups in the days before a wedding for family and wedding-party members flying into either airport.",
        ],
      },
      {
        h2: "Booking your National Harbor wedding day",
        paragraphs: [
          "Rates are hourly and confirmed in writing before the date is booked. Call (877) 609-1919 or book online with your venue, timeline and guest count — the earlier the better for a Saturday during the busy spring and fall wedding season.",
        ],
      },
    ],
    vehicles: VEHICLES,
    faqs: [
      { q: "Do you provide wedding transportation for the Gaylord National and National Harbor waterfront venues?", a: "Yes, including the Gaylord National resort, marina-adjacent venues and rooftop event spaces throughout National Harbor — tell us the venue when you book and we confirm valet and loading-zone logistics in advance." },
      { q: "How far is National Harbor from Reagan National and Dulles airports?", a: "About 25 to 35 minutes from Reagan National, or 50 to 65 minutes from Dulles, depending on traffic." },
      { q: "Can you shuttle guests between a hotel and a waterfront ceremony site?", a: "Yes. A Mercedes Sprinter van is the most common choice for a guest shuttle loop within National Harbor during convention-weekend traffic." },
      { q: "Does National Harbor traffic affect wedding-day timing?", a: "It can, especially during a busy convention weekend. We build realistic buffer time into the schedule and confirm each venue's valet arrangement in advance." },
      { q: "How far ahead should we book a National Harbor wedding date?", a: "As early as possible, especially for a Saturday in spring or fall, which is National Harbor's busiest wedding and event season." },
    ],
    related: [
      { label: "National Harbor Transportation", to: "/national-harbor-transportation" },
      { label: "National Harbor Corporate Car Service", to: "/national-harbor-corporate-car-service" },
      { label: "DCA to National Harbor", to: "/dca-to-national-harbor" },
      { label: "Annapolis Wedding Limo Service", to: "/annapolis-wedding-limo-service" },
      { label: "Maryland Wedding Transportation", to: "/maryland-wedding-transportation" },
      { label: "Wedding Limo Service", to: "/wedding-limo" },
    ],
    schema: { areaServed: ["National Harbor, MD", "Prince George's County, MD", "Gaylord National Resort"], serviceType: "Wedding limousine and chauffeur service" },
  },
  // ---------------------------------------------------------------------
  // Purcellville wedding
  // ---------------------------------------------------------------------
  {
    slug: "purcellville-wedding-limo-service",
    type: "service",
    name: "Purcellville",
    badge: "Purcellville, VA · Wedding Transportation",
    h1: "Purcellville Wedding Limo Service",
    metaTitle: "Purcellville Wedding Limo Service | Western Loudoun, VA",
    metaDescription:
      "Chauffeured wedding transportation for Purcellville and western Loudoun wineries, breweries and farm venues. Hourly packages. Call (877) 609-1919.",
    stats: [
      { label: "Dulles (IAD)", value: "35–50 minutes, depending on traffic" },
      { label: "Pricing", value: "Hourly, as-directed wedding packages" },
      { label: "Fleet", value: "Stretch limousine up to 14-passenger Sprinter van" },
    ],
    intro: [
      "Purcellville anchors western Loudoun's wine and farm-brewery scene, within easy reach of the wineries and farm venues that make this corner of the county one of Northern Virginia's busiest wedding destinations alongside neighboring Middleburg. We provide hourly, as-directed wedding-day transportation built around rural venue access, unpaved drives and ceremony sites set well back from Route 7.",
      "A Purcellville wedding day often combines a getting-ready stop in town with a ceremony at a winery or farm venue and a reception that may be the same property, which we run as one continuous reservation with a single chauffeur who already knows the route and the venue's parking plan.",
    ],
    highlights: [
      "Hourly wedding-day packages covering getting-ready, ceremony and reception stops",
      "Chauffeurs experienced with western Loudoun winery and farm-brewery venue access",
      "Guest shuttles in Sprinter vans for venues with limited on-site parking",
      "Coordinated timing with wedding planners familiar with Purcellville-area properties",
      "Decoration-ready stretch limousines for the bridal party",
      "Licensed and insured Virginia carrier, 35–50 minutes from Dulles",
    ],
    sections: [
      {
        h2: "Built for western Loudoun venue logistics",
        paragraphs: [
          "Purcellville-area wineries and farm-brewery venues sit along rural roads off Route 7 and Route 9, often with gravel entrance drives and parking fields rather than paved lots. We confirm each venue's specific access and parking plan in advance and will recommend an SUV instead of a stretch limousine when a particular drive calls for it.",
        ],
      },
      {
        h2: "One reservation for the whole wedding day",
        paragraphs: [
          "A Purcellville wedding day typically starts in town for hair, makeup and photos, moves to a winery or farm ceremony site, and continues to a reception at the same or a nearby property. We book this as a single hourly, as-directed reservation so the same chauffeur and vehicle stay with the bridal party across every stop.",
        ],
      },
      {
        h2: "Guest shuttles for wineries and farm venues",
        paragraphs: [
          "Many western Loudoun venues intentionally limit on-site parking to protect working farmland, which makes a guest shuttle a practical requirement. A Mercedes Sprinter van runs a loop between a Purcellville-area hotel or inn and the venue through the reception.",
        ],
      },
      {
        h2: "Booking your Purcellville wedding day",
        paragraphs: [
          "Rates are hourly and confirmed in writing before the date is booked. Call (877) 609-1919 or book online with your venue, timeline and guest count — the earlier the better for a Saturday in peak wedding and wine-harvest season.",
        ],
      },
    ],
    vehicles: VEHICLES,
    faqs: [
      { q: "Do you serve wineries and farm-brewery venues around Purcellville?", a: "Yes, including wineries and working-farm venues throughout western Loudoun — tell us the venue when you book and we confirm gate and parking logistics in advance." },
      { q: "How far is Purcellville from Dulles Airport?", a: "About 35 to 50 minutes depending on traffic, making group pickups for out-of-town wedding guests straightforward." },
      { q: "Can a stretch limousine access a winery or farm venue's gravel drive?", a: "It depends on the specific drive. We confirm vehicle access with the venue ahead of time and will recommend a sedan or SUV instead when a limousine is not practical." },
      { q: "Can you shuttle guests between a hotel and a venue with limited parking?", a: "Yes. A Mercedes Sprinter van is the most common choice for a guest shuttle loop between a Purcellville-area hotel and a winery or farm venue." },
      { q: "How far ahead should we book a Purcellville wedding date?", a: "As early as possible, especially for a Saturday between April and November, which is western Loudoun's peak wedding season." },
    ],
    related: [
      { label: "Purcellville Limo Service", to: "/purcellville-limo-service" },
      { label: "Middleburg Wedding Limo Service", to: "/middleburg-wedding-limo-service" },
      { label: "Winery Wedding Transportation in Loudoun County", to: "/blog/winery-wedding-transportation-loudoun-county" },
      { label: "Loudoun's Horse Country Estate Weddings Guide", to: "/blog/loudoun-horse-country-estate-wedding-transportation-vendor-guide" },
      { label: "Loudoun Wine Tours", to: "/wine-tours" },
      { label: "Wedding Limo Service", to: "/wedding-limo" },
    ],
    schema: { areaServed: ["Purcellville, VA", "Western Loudoun County", "Hamilton, VA", "Round Hill, VA"], serviceType: "Wedding limousine and chauffeur service" },
  },
  // ---------------------------------------------------------------------
  // Fredericksburg wedding
  // ---------------------------------------------------------------------
  {
    slug: "fredericksburg-va-wedding-limo-service",
    type: "service",
    name: "Fredericksburg",
    badge: "Fredericksburg, VA · Wedding Transportation",
    h1: "Fredericksburg Wedding Limo Service",
    metaTitle: "Fredericksburg VA Wedding Limo Service | Historic Venues",
    metaDescription:
      "Chauffeured wedding transportation for Fredericksburg's historic downtown venues and area estates. Hourly packages for the bridal party. (877) 609-1919.",
    stats: [
      { label: "Dulles (IAD)", value: "65 mi · 70–85 minutes" },
      { label: "Pricing", value: "Hourly, as-directed wedding packages" },
      { label: "Fleet", value: "Stretch limousine up to 14-passenger Sprinter van" },
    ],
    intro: [
      "Fredericksburg's historic downtown — brick storefronts, riverfront venues and a cluster of 18th- and 19th-century buildings converted into event spaces — has made it a popular mid-Atlantic wedding destination roughly halfway between Washington and Richmond. We provide hourly, as-directed wedding-day transportation built around downtown's narrow one-way streets, limited event parking and venues within easy walking distance of each other.",
      "A Fredericksburg wedding day commonly moves between a downtown hotel, a historic venue ceremony and a reception at the same or a nearby property, all compact enough to run as a single reservation with one chauffeur who already knows the parking and loading plan for each stop.",
    ],
    highlights: [
      "Hourly wedding-day packages covering hotel pickup, ceremony and reception stops",
      "Chauffeurs experienced with downtown Fredericksburg's historic-district streets and parking",
      "Guest shuttles between hotel blocks and historic venue ceremony sites",
      "Coordinated timing with wedding planners familiar with Fredericksburg's venue network",
      "Decoration-ready stretch limousines for the bridal party",
      "Licensed and insured Virginia carrier, 65 miles and 70–85 minutes from Dulles",
    ],
    sections: [
      {
        h2: "Built for Fredericksburg's historic downtown",
        paragraphs: [
          "Fredericksburg's historic district is dense and walkable, which is part of its appeal for a wedding, but it also means narrow one-way streets and limited event-day parking. We confirm each venue's specific drop-off point and loading plan in advance so the chauffeur is never guessing on the day.",
        ],
      },
      {
        h2: "One reservation for the whole wedding day",
        paragraphs: [
          "A Fredericksburg wedding day typically moves between a downtown hotel for getting-ready, a historic venue for the ceremony, and a reception at the same or a nearby property. We book this as a single hourly, as-directed reservation so the same chauffeur and vehicle stay with the bridal party across every stop.",
        ],
      },
      {
        h2: "Guest shuttles for downtown venues",
        paragraphs: [
          "With much of the wedding party staying downtown, a Mercedes Sprinter van runs a loop between the hotel block and the venue through the reception, so guests are not searching for parking on event-day streets.",
        ],
      },
      {
        h2: "Booking your Fredericksburg wedding day",
        paragraphs: [
          "Rates are hourly and confirmed in writing before the date is booked. Call (877) 609-1919 or book online with your venue, timeline and guest count — the earlier the better for a Saturday during peak wedding season.",
        ],
      },
    ],
    vehicles: VEHICLES,
    faqs: [
      { q: "Do you provide wedding transportation for Fredericksburg's historic downtown venues?", a: "Yes, including historic-district venues, riverfront properties and area estates — tell us the venue when you book and we confirm drop-off and parking logistics in advance." },
      { q: "How far is Fredericksburg from Dulles Airport?", a: "About 65 miles and 70 to 85 minutes depending on traffic." },
      { q: "Can you shuttle guests between a downtown hotel and a historic venue?", a: "Yes. A Mercedes Sprinter van is the most common choice for a guest shuttle loop within Fredericksburg's historic district." },
      { q: "Can you handle narrow downtown streets with a stretch limousine?", a: "Yes, we regularly navigate Fredericksburg's historic district, and will recommend a sedan or SUV instead for any venue where a limousine is not practical." },
      { q: "How far ahead should we book a Fredericksburg wedding date?", a: "As early as possible, especially for a Saturday in spring or fall, which is Fredericksburg's peak wedding season." },
    ],
    related: [
      { label: "Fredericksburg Limo Service", to: "/fredericksburg-va-limo-service" },
      { label: "IAD to Fredericksburg", to: "/iad-to-fredericksburg" },
      { label: "Top 10 Wedding Venues Near Dulles & NoVA", to: "/top-10-wedding-venues-near-dulles-nova" },
      { label: "Warrenton Wedding Limo Service", to: "/warrenton-wedding-limo-service" },
      { label: "Richmond Corporate Car Service", to: "/richmond-va-corporate-car-service" },
      { label: "Wedding Limo Service", to: "/wedding-limo" },
    ],
    schema: { areaServed: ["Fredericksburg, VA", "Stafford County, VA", "Spotsylvania County, VA"], serviceType: "Wedding limousine and chauffeur service" },
  },
  // ---------------------------------------------------------------------
  // McLean wedding
  // ---------------------------------------------------------------------
  {
    slug: "mclean-wedding-limo-service",
    type: "service",
    name: "McLean",
    badge: "McLean, VA · Wedding Transportation",
    h1: "McLean Wedding Limo Service",
    metaTitle: "McLean VA Wedding Limo Service | Estate & Club Venues",
    metaDescription:
      "Chauffeured wedding transportation for McLean estate and country-club venues. Hourly packages for the full bridal party. Call (877) 609-1919.",
    stats: [
      { label: "Dulles (IAD)", value: "25–40 minutes, depending on traffic" },
      { label: "Reagan (DCA)", value: "20–40 minutes, depending on traffic" },
      { label: "Pricing", value: "Hourly, as-directed wedding packages" },
    ],
    intro: [
      "McLean's private estates, country clubs and riverfront properties along the Potomac make it one of the wealthiest and most frequently-booked wedding markets in Northern Virginia, distinct from the farm-venue weddings further out in Loudoun. We provide hourly, as-directed wedding-day transportation built around gated estate entrances, country-club valet procedures and tight residential streets.",
      "A McLean wedding day typically moves between a private residence or hotel for getting-ready, a club or estate ceremony, and a reception at the same or a different property nearby, which we run as a single reservation so the chauffeur already knows the gate codes and arrival sequence for the day.",
    ],
    highlights: [
      "Hourly wedding-day packages covering getting-ready, ceremony and reception stops",
      "Chauffeurs experienced with McLean's gated estates and country-club valet procedures",
      "Discreet, professional service for high-profile and privacy-conscious families",
      "Guest shuttles between hotels and estate or club venues",
      "Decoration-ready stretch limousines for the bridal party",
      "Licensed and insured Virginia carrier, 20–40 minutes from Dulles or Reagan National",
    ],
    sections: [
      {
        h2: "Built for McLean's estate and club venues",
        paragraphs: [
          "Many McLean wedding venues are private residences or country clubs with gated entrances, specific arrival sequences and valet procedures rather than open public parking. We confirm each venue's requirements in advance — gate codes, approved vehicle types, drop-off points — so the chauffeur is fully prepared before the day.",
        ],
      },
      {
        h2: "One reservation for the whole wedding day",
        paragraphs: [
          "A McLean wedding day commonly starts at a private residence or hotel for hair, makeup and photos, moves to a club or estate ceremony, and continues to a reception at the same or a different property. We book this as a single hourly, as-directed reservation so the same chauffeur and vehicle stay with the bridal party throughout.",
        ],
      },
      {
        h2: "Discretion for high-profile families",
        paragraphs: [
          "McLean's proximity to Washington means we regularly serve families who value discretion as much as service quality. Chauffeurs are professional, low-key and briefed only on what is needed to run the day smoothly.",
        ],
      },
      {
        h2: "Booking your McLean wedding day",
        paragraphs: [
          "Rates are hourly and confirmed in writing before the date is booked. Call (877) 609-1919 or book online with your venue, timeline and guest count.",
        ],
      },
    ],
    vehicles: VEHICLES,
    faqs: [
      { q: "Do you serve private estate and country-club wedding venues in McLean?", a: "Yes, including gated estates, country clubs and riverfront properties — tell us the venue when you book and we confirm gate and arrival logistics in advance." },
      { q: "How far is McLean from Dulles and Reagan National?", a: "About 25 to 40 minutes from Dulles and 20 to 40 minutes from Reagan National, depending on traffic." },
      { q: "Do your chauffeurs handle privacy-conscious or high-profile weddings?", a: "Yes. We regularly serve McLean families who value discretion, and chauffeurs are briefed only on what is needed to run the day." },
      { q: "Can you navigate gated McLean estate entrances?", a: "Yes, we confirm gate codes and approved vehicle access with the venue or family in advance of the wedding day." },
      { q: "How far ahead should we book a McLean wedding date?", a: "As early as possible, especially for a Saturday in spring or fall, which is McLean's busiest estate and club wedding season." },
    ],
    related: [
      { label: "McLean Limo Service", to: "/mclean-limo-service" },
      { label: "McLean Corporate Car Service", to: "/mclean-corporate-car-service" },
      { label: "McLean Prom Limo Service", to: "/mclean-prom-limo-service" },
      { label: "Great Falls Wedding Limo Service", to: "/great-falls-wedding-limo-service" },
      { label: "Potomac Wedding Limo Service", to: "/potomac-wedding-limo-service" },
      { label: "Wedding Limo Service", to: "/wedding-limo" },
    ],
    schema: { areaServed: ["McLean, VA", "Great Falls, VA", "Fairfax County, VA"], serviceType: "Wedding limousine and chauffeur service" },
  },
  // ---------------------------------------------------------------------
  // Sterling wedding
  // ---------------------------------------------------------------------
  {
    slug: "sterling-wedding-limo-service",
    type: "service",
    name: "Sterling",
    badge: "Sterling, VA · Wedding Transportation",
    h1: "Sterling Wedding Limo Service",
    metaTitle: "Sterling VA Wedding Limo Service | Next to Dulles",
    metaDescription:
      "Chauffeured wedding transportation for Sterling, VA venues and nearby Loudoun wineries. Hourly packages, airport-adjacent convenience. (877) 609-1919.",
    stats: [
      { label: "Dulles (IAD)", value: "6 mi · 10–15 minutes" },
      { label: "Pricing", value: "Hourly, as-directed wedding packages" },
      { label: "Fleet", value: "Stretch limousine up to 14-passenger Sprinter van" },
    ],
    intro: [
      "Sterling sits directly next to Dulles Airport, which makes it a practical wedding base for couples with out-of-town guests flying in and a convenient staging point for weddings at nearby Loudoun wineries and event venues. We provide hourly, as-directed wedding-day transportation covering hotel pickups, venue ceremonies and guest shuttles for weddings based in or near Sterling.",
      "Because so many Sterling-area weddings draw family flying into Dulles, we treat the airport's proximity as an advantage — group pickups for arriving guests the day before, and a short, predictable commute from airport hotels to the ceremony and reception on the wedding day itself.",
    ],
    highlights: [
      "Hourly wedding-day packages covering hotel pickup, ceremony and reception stops",
      "A 10-to-15-minute transfer from Dulles, ideal for fly-in wedding guests",
      "Guest shuttles between airport-area hotels and nearby winery or event venues",
      "Coordinated timing with wedding planners familiar with the Sterling-Loudoun venue network",
      "Decoration-ready stretch limousines for the bridal party",
      "Licensed and insured Virginia carrier, available 24/7",
    ],
    sections: [
      {
        h2: "An airport-adjacent wedding base",
        paragraphs: [
          "Sterling's airport hotels make a convenient home base for a wedding weekend when family and wedding-party members are flying in from out of town. We run group pickups from Dulles the day before, so guests arrive at the hotel without arranging their own transportation.",
        ],
      },
      {
        h2: "One reservation for the whole wedding day",
        paragraphs: [
          "A Sterling-based wedding day typically moves between an airport-area hotel for getting-ready, a nearby winery or event-venue ceremony, and a reception at the same or a different property. We book this as a single hourly, as-directed reservation so the same chauffeur and vehicle stay with the bridal party throughout.",
        ],
      },
      {
        h2: "Guest shuttles for nearby venues",
        paragraphs: [
          "Many Loudoun venues near Sterling limit on-site parking, which makes a guest shuttle from the hotel block a practical choice. A Mercedes Sprinter van runs a loop between the hotel and the venue through the reception.",
        ],
      },
      {
        h2: "Booking your Sterling wedding day",
        paragraphs: [
          "Rates are hourly and confirmed in writing before the date is booked. Call (877) 609-1919 or book online with your venue, timeline, guest count and arrival flights.",
        ],
      },
    ],
    vehicles: VEHICLES,
    faqs: [
      { q: "Is Sterling a good base for a wedding with out-of-town guests?", a: "Yes. Sterling's airport hotels are about 10 to 15 minutes from Dulles, making group pickups for fly-in wedding guests straightforward the day before the wedding." },
      { q: "Do you serve venues near Sterling in the broader Loudoun wine region?", a: "Yes, we regularly run Sterling-based weddings out to nearby wineries and event venues throughout Loudoun County." },
      { q: "Can you shuttle guests between an airport hotel and a venue?", a: "Yes. A Mercedes Sprinter van is the most common choice for a guest shuttle loop from Sterling's airport-area hotels." },
      { q: "How far is Sterling from Dulles Airport?", a: "About 6 miles and 10 to 15 minutes, one of the shortest transfers in our service area." },
      { q: "How far ahead should we book a Sterling wedding date?", a: "As early as possible, especially for a Saturday in peak spring or fall wedding season." },
    ],
    related: [
      { label: "Sterling Limo Service", to: "/sterling-limo-service" },
      { label: "Sterling Corporate Car Service", to: "/sterling-corporate-car-service" },
      { label: "Leesburg Wedding Limo Service", to: "/leesburg-wedding-limo-service" },
      { label: "Ashburn Wedding Limo Service", to: "/ashburn-wedding-limo-service" },
      { label: "Loudoun Wine Tours", to: "/wine-tours" },
      { label: "Wedding Limo Service", to: "/wedding-limo" },
    ],
    schema: { areaServed: ["Sterling, VA", "Loudoun County, VA", "Dulles International Airport"], serviceType: "Wedding limousine and chauffeur service" },
  },
  // ---------------------------------------------------------------------
  // Crystal City corporate
  // ---------------------------------------------------------------------
  {
    slug: "crystal-city-corporate-car-service",
    type: "service",
    name: "Crystal City",
    badge: "Crystal City, Arlington · Corporate Transportation",
    h1: "Crystal City Corporate Car Service",
    metaTitle: "Crystal City Corporate Car Service | Amazon HQ2 & DCA",
    metaDescription:
      "Corporate car service in Crystal City and National Landing — minutes from Amazon HQ2, the Pentagon and Reagan National. Call (877) 609-1919.",
    stats: [
      { label: "Reagan (DCA)", value: "3 mi · 10–15 minutes" },
      { label: "Dulles (IAD)", value: "24 mi · 35–45 minutes" },
      { label: "Pricing", value: "Flat rate, confirmed before you book" },
    ],
    intro: [
      "Crystal City anchors the National Landing corridor alongside Pentagon City and Amazon's HQ2 campus, and it has become one of the region's busiest corporate-travel markets for exactly that reason — tech employees, government contractors and Pentagon-adjacent businesses all moving between office towers, Reagan National and client sites across the DC metro. Our Crystal City corporate car service covers airport transfers, office-to-office travel and standing accounts for companies with a regular presence here.",
      "With Reagan National just 3 miles away, Crystal City is one of the most time-sensitive corporate markets we serve — a flat-rate, flight-tracked transfer removes the uncertainty of a short trip that still has a hard departure deadline.",
    ],
    highlights: [
      "A 10-to-15-minute flat-rate transfer to Reagan National, tracked against your flight",
      "Daily office-to-client transfers throughout the National Landing corridor",
      "Corporate accounts for Amazon HQ2-adjacent businesses, contractors and law firms",
      "Hourly as-directed service for multi-stop client or meeting days",
      "Standing accounts with consolidated monthly invoicing",
      "Licensed and insured Virginia and DC-area carrier, available 24/7",
    ],
    sections: [
      {
        h2: "Serving the National Landing corporate corridor",
        paragraphs: [
          "Crystal City's office towers and the Amazon HQ2 campus generate constant short-hop corporate travel — between offices, to Reagan National for a same-day trip, or out to a client meeting elsewhere in Arlington or DC. We run this kind of travel daily, with chauffeurs who know the corridor's one-way streets and underground garage access points.",
        ],
      },
      {
        h2: "Fast, predictable Reagan National transfers",
        paragraphs: [
          "Because Reagan National is only 3 miles away, a Crystal City corporate traveler's biggest risk on a short trip is not distance — it's an unpredictable pickup. We confirm a flat rate in advance and track your flight, so a short transfer never becomes the reason for a missed departure.",
        ],
      },
      {
        h2: "Booking Crystal City corporate transportation",
        paragraphs: [
          "Rates are flat and confirmed in writing before you book, whether it is a single airport transfer or a recurring meeting-day schedule. Call (877) 609-1919 or book online to set up a standing account.",
        ],
      },
    ],
    vehicles: VEHICLES,
    faqs: [
      { q: "How close is Crystal City to Reagan National Airport?", a: "About 3 miles and 10 to 15 minutes, one of the fastest and most predictable airport transfers we offer." },
      { q: "Do you serve Amazon HQ2 and the National Landing corridor?", a: "Yes, we regularly transport employees, contractors and visitors between Crystal City, Pentagon City and client sites across Arlington and DC." },
      { q: "Can you handle a recurring office-to-airport pickup schedule?", a: "Yes. A standing corporate account keeps every transfer billed consistently with the same flat rate." },
      { q: "Do you offer monthly invoicing for Crystal City corporate accounts?", a: "Yes, consolidated monthly invoicing with trip-level detail is available for a standing account." },
      { q: "What vehicles are available for a Crystal City meeting day?", a: "Sedans and SUVs for individual travelers, plus 14-passenger Sprinter vans for larger teams moving between meetings." },
    ],
    related: [
      { label: "Crystal City Limo Service", to: "/crystal-city-limo-service" },
      { label: "Pentagon City Corporate Car Service", to: "/pentagon-city-corporate-car-service" },
      { label: "Arlington Corporate Car Service", to: "/arlington-corporate-car-service" },
      { label: "Government Contractor Transportation", to: "/government-contractor-car-service" },
      { label: "Tech Company Corporate Transportation", to: "/tech-company-corporate-car-service" },
      { label: "Corporate Car Service", to: "/corporate" },
    ],
    schema: { areaServed: ["Crystal City, Arlington, VA", "National Landing, VA", "Reagan National Airport"], serviceType: "Corporate car service" },
  },
  // ---------------------------------------------------------------------
  // Pentagon City corporate
  // ---------------------------------------------------------------------
  {
    slug: "pentagon-city-corporate-car-service",
    type: "service",
    name: "Pentagon City",
    badge: "Pentagon City, Arlington · Corporate Transportation",
    h1: "Pentagon City Corporate Car Service",
    metaTitle: "Pentagon City Corporate Car Service | DoD & DCA",
    metaDescription:
      "Corporate car service in Pentagon City — minutes from the Pentagon, Reagan National and Crystal City offices. Flat rates 24/7. (877) 609-1919.",
    stats: [
      { label: "Reagan (DCA)", value: "2 mi · 8–12 minutes" },
      { label: "Dulles (IAD)", value: "23 mi · 35–45 minutes" },
      { label: "Pricing", value: "Flat rate, confirmed before you book" },
    ],
    intro: [
      "Pentagon City sits directly beside the Pentagon and Reagan National Airport, making it one of the region's densest corporate and defense-contractor markets — consultants and contractors with Pentagon-adjacent business, retail and hospitality executives, and travelers who need the shortest possible ride to a DCA gate. Our Pentagon City corporate car service covers Pentagon-adjacent client visits, airport transfers and standing accounts for companies with a regular presence here.",
      "With Reagan National only 2 miles away, Pentagon City corporate travelers often have the tightest timing of any market we serve — we treat every transfer as flight-tracked and flat-rate so a short trip never becomes an unpredictable one.",
    ],
    highlights: [
      "An 8-to-12-minute flat-rate transfer to Reagan National, tracked against your flight",
      "Pentagon-adjacent client and contractor visit transportation",
      "Corporate accounts for defense, consulting and retail-headquarters businesses",
      "Hourly as-directed service for multi-stop meeting days across Crystal City and Arlington",
      "Standing accounts with consolidated monthly invoicing",
      "Licensed and insured Virginia and DC-area carrier, available 24/7",
    ],
    sections: [
      {
        h2: "Serving Pentagon-adjacent corporate travel",
        paragraphs: [
          "Pentagon City's proximity to the Pentagon makes it a common staging point for defense contractors, consultants and vendors with business at the building or nearby federal offices. We run this travel daily, with chauffeurs familiar with the area's security checkpoints and restricted-access routes.",
        ],
      },
      {
        h2: "The region's fastest airport transfer",
        paragraphs: [
          "At about 2 miles and 8 to 12 minutes from Reagan National, Pentagon City has one of the shortest airport commutes we serve anywhere in the region — which also means the margin for a late or unreliable pickup is smallest here. A confirmed flat rate and flight tracking remove that risk.",
        ],
      },
      {
        h2: "Booking Pentagon City corporate transportation",
        paragraphs: [
          "Rates are flat and confirmed in writing before you book. Call (877) 609-1919 or book online to set up a standing account for recurring Pentagon-adjacent or airport travel.",
        ],
      },
    ],
    vehicles: VEHICLES,
    faqs: [
      { q: "How close is Pentagon City to Reagan National Airport?", a: "About 2 miles and 8 to 12 minutes, one of the shortest and fastest airport transfers we offer anywhere in the region." },
      { q: "Do you serve Pentagon-adjacent contractor and consultant travel?", a: "Yes, we regularly transport contractors, consultants and vendors with business at or near the Pentagon and nearby federal offices." },
      { q: "Can you handle a recurring meeting-day schedule across Pentagon City and Crystal City?", a: "Yes. A standing corporate account keeps every transfer billed consistently with the same flat rate." },
      { q: "Do you offer monthly invoicing for Pentagon City corporate accounts?", a: "Yes, consolidated monthly invoicing with trip-level detail is available for a standing account." },
      { q: "What vehicles are available for a Pentagon City meeting day?", a: "Sedans and SUVs for individual travelers, plus 14-passenger Sprinter vans for larger contractor or vendor teams." },
    ],
    related: [
      { label: "Pentagon City Limo Service", to: "/pentagon-city-limo-service" },
      { label: "Crystal City Corporate Car Service", to: "/crystal-city-corporate-car-service" },
      { label: "Government Contractor Transportation", to: "/government-contractor-car-service" },
      { label: "Arlington Corporate Car Service", to: "/arlington-corporate-car-service" },
      { label: "IAD to DCA Airport", to: "/iad-to-dca-airport" },
      { label: "Corporate Car Service", to: "/corporate" },
    ],
    schema: { areaServed: ["Pentagon City, Arlington, VA", "The Pentagon", "Reagan National Airport"], serviceType: "Corporate car service" },
  },
  // ---------------------------------------------------------------------
  // Richmond corporate
  // ---------------------------------------------------------------------
  {
    slug: "richmond-va-corporate-car-service",
    type: "service",
    name: "Richmond",
    badge: "Richmond, VA · Corporate Transportation",
    h1: "Richmond Corporate Car Service",
    metaTitle: "Richmond VA Corporate Car Service | State Capital",
    metaDescription:
      "Corporate car service in Richmond, Virginia's state capital — airport transfers, client visits and standing accounts. Call (877) 609-1919.",
    stats: [
      { label: "Dulles (IAD)", value: "105 mi · 1 hour 45 minutes – 2 hours" },
      { label: "Richmond Airport (RIC)", value: "Local pickups available" },
      { label: "Pricing", value: "Flat rate, confirmed before you book" },
    ],
    intro: [
      "Richmond is Virginia's state capital and a major mid-Atlantic business hub — state government, law firms, financial services and a growing corporate base downtown and along the Innsbrook and Boulders office corridors. Our Richmond corporate car service covers Dulles airport transfers for Richmond-based executives, client visits throughout the metro area, and standing accounts for companies with a regular presence here.",
      "Because Richmond sits roughly two hours from Dulles, we primarily serve Richmond corporate travel as pre-scheduled Dulles transfers and local point-to-point business travel rather than same-day rideshare-style requests, with rates confirmed in writing before the trip.",
    ],
    highlights: [
      "Dulles Airport transfers for Richmond-based executives and visiting clients",
      "Local corporate transportation across downtown, Innsbrook and the Boulders corridor",
      "Corporate accounts for law firms, financial services and state-government-adjacent business",
      "Hourly as-directed service for multi-stop client or meeting days",
      "Standing accounts with consolidated monthly invoicing",
      "Licensed and insured Virginia carrier, available 24/7",
    ],
    sections: [
      {
        h2: "Dulles transfers for Richmond executives",
        paragraphs: [
          "Richmond executives who fly internationally or need Dulles's broader route network over Richmond International often book us for the two-hour transfer rather than driving themselves or parking long-term. We confirm the flat rate and track your flight so the trip is predictable in both directions.",
        ],
      },
      {
        h2: "Local corporate travel across Richmond",
        paragraphs: [
          "Beyond airport transfers, we run day-to-day corporate transportation across downtown Richmond and the Innsbrook and Boulders business corridors — client visits, law-firm travel and executive point-to-point trips, billed at a confirmed flat rate.",
        ],
      },
      {
        h2: "Booking Richmond corporate transportation",
        paragraphs: [
          "Rates are flat and confirmed in writing before you book, whether it is a single Dulles transfer or a recurring local travel schedule. Call (877) 609-1919 or book online to set up a standing account.",
        ],
      },
    ],
    vehicles: VEHICLES,
    faqs: [
      { q: "Do you provide Dulles Airport transfers for Richmond executives?", a: "Yes, Richmond is about 105 miles and 1 hour 45 minutes to 2 hours from Dulles. We confirm a flat rate and track your flight for the transfer." },
      { q: "Do you serve corporate travel within Richmond itself, not just airport transfers?", a: "Yes, we run local point-to-point corporate transportation across downtown Richmond and the Innsbrook and Boulders business corridors." },
      { q: "Can you handle a recurring Richmond-to-Dulles travel schedule?", a: "Yes. A standing corporate account keeps every transfer billed consistently with the same flat rate." },
      { q: "Do you offer monthly invoicing for Richmond corporate accounts?", a: "Yes, consolidated monthly invoicing with trip-level detail is available for a standing account." },
      { q: "What vehicles are available for Richmond corporate travel?", a: "Sedans and SUVs for individual executives, plus 14-passenger Sprinter vans for larger teams or client groups." },
    ],
    related: [
      { label: "Richmond Limo Service", to: "/richmond-va-limo-service" },
      { label: "IAD to Richmond", to: "/iad-to-richmond-va" },
      { label: "How Much Does a Limo Cost From IAD to Richmond", to: "/how-much-does-a-limo-cost-from-iad-to-richmond" },
      { label: "Fredericksburg Wedding Limo Service", to: "/fredericksburg-va-wedding-limo-service" },
      { label: "Professional Services Transportation", to: "/professional-services-corporate-car-service" },
      { label: "Corporate Car Service", to: "/corporate" },
    ],
    schema: { areaServed: ["Richmond, VA", "Henrico County, VA", "Chesterfield County, VA"], serviceType: "Corporate car service" },
  },
  // ---------------------------------------------------------------------
  // Annapolis corporate
  // ---------------------------------------------------------------------
  {
    slug: "annapolis-corporate-car-service",
    type: "service",
    name: "Annapolis",
    badge: "Annapolis, MD · Corporate Transportation",
    h1: "Annapolis Corporate Car Service",
    metaTitle: "Annapolis MD Corporate Car Service | State Capital",
    metaDescription:
      "Corporate car service in Annapolis, Maryland's state capital — BWI and Dulles transfers, client visits, standing accounts. (877) 609-1919.",
    stats: [
      { label: "BWI", value: "25 mi · 30–45 minutes" },
      { label: "Dulles (IAD)", value: "55 mi · 65–85 minutes" },
      { label: "Pricing", value: "Flat rate, confirmed before you book" },
    ],
    intro: [
      "Annapolis is Maryland's state capital and home to a corporate base built around state government, the Naval Academy's contractor and vendor community, and the maritime and insurance industries headquartered downtown. Our Annapolis corporate car service covers BWI and Dulles airport transfers, downtown client visits, and standing accounts for companies with a regular presence here.",
      "Annapolis's downtown parking and Naval Academy security perimeter can complicate a self-driven client visit — we confirm drop-off points and gate requirements in advance so a corporate trip runs on schedule regardless of which part of the city it touches.",
    ],
    highlights: [
      "BWI transfers in 30–45 minutes, Dulles transfers in 65–85 minutes",
      "Downtown Annapolis client and government-office visits",
      "Corporate accounts for state-government vendors and Naval Academy contractors",
      "Hourly as-directed service for multi-stop meeting days",
      "Standing accounts with consolidated monthly invoicing",
      "Licensed and insured Maryland carrier, available 24/7",
    ],
    sections: [
      {
        h2: "Serving Annapolis's state-government and maritime corridor",
        paragraphs: [
          "Annapolis's downtown core houses state government offices, maritime and insurance-industry headquarters, and a steady flow of Naval Academy contractors and vendors. We run daily corporate transportation through this corridor, with chauffeurs who know downtown's parking limits and Academy gate requirements.",
        ],
      },
      {
        h2: "Airport transfers for Annapolis business travelers",
        paragraphs: [
          "BWI is the closer airport at roughly 25 miles and 30 to 45 minutes, with Dulles a practical alternative for broader route options at about 55 miles. We confirm a flat rate and track your flight for either transfer.",
        ],
      },
      {
        h2: "Booking Annapolis corporate transportation",
        paragraphs: [
          "Rates are flat and confirmed in writing before you book, whether it is a single airport transfer or a recurring downtown meeting schedule. Call (877) 609-1919 or book online to set up a standing account.",
        ],
      },
    ],
    vehicles: VEHICLES,
    faqs: [
      { q: "Do you provide BWI and Dulles airport transfers for Annapolis business travelers?", a: "Yes, BWI is about 25 miles and 30 to 45 minutes away, and Dulles is about 55 miles and 65 to 85 minutes away. We confirm a flat rate and track your flight for either." },
      { q: "Can you handle Naval Academy contractor or vendor visits?", a: "Yes, we regularly transport contractors and vendors with business at or near the Naval Academy, and confirm gate requirements in advance." },
      { q: "Do you serve state-government offices in downtown Annapolis?", a: "Yes, we run daily corporate transportation through downtown Annapolis's state-government and maritime-industry corridor." },
      { q: "Do you offer monthly invoicing for Annapolis corporate accounts?", a: "Yes, consolidated monthly invoicing with trip-level detail is available for a standing account." },
      { q: "What vehicles are available for an Annapolis corporate meeting day?", a: "Sedans and SUVs for individual executives, plus 14-passenger Sprinter vans for larger teams or delegations." },
    ],
    related: [
      { label: "Annapolis Limo Service", to: "/annapolis-limo-service" },
      { label: "BWI to Annapolis Car Service", to: "/bwi-to-annapolis-car-service" },
      { label: "Maryland Corporate Transportation", to: "/maryland-corporate-transportation" },
      { label: "Columbia MD Corporate Car Service", to: "/columbia-md-corporate-car-service" },
      { label: "Annapolis Wedding Limo Service", to: "/annapolis-wedding-limo-service" },
      { label: "Corporate Car Service", to: "/corporate" },
    ],
    schema: { areaServed: ["Annapolis, MD", "Anne Arundel County, MD", "United States Naval Academy"], serviceType: "Corporate car service" },
  },
  // ---------------------------------------------------------------------
  // Georgetown corporate
  // ---------------------------------------------------------------------
  {
    slug: "georgetown-corporate-car-service",
    type: "service",
    name: "Georgetown",
    badge: "Georgetown, DC · Corporate Transportation",
    h1: "Georgetown Corporate Car Service",
    metaTitle: "Georgetown DC Corporate Car Service | Business & Embassy",
    metaDescription:
      "Corporate car service in Georgetown, DC — law firms, embassies and waterfront offices. Airport transfers and standing accounts. (877) 609-1919.",
    stats: [
      { label: "Dulles (IAD)", value: "25 mi · 40–50 minutes" },
      { label: "Reagan (DCA)", value: "8 mi · 20–30 minutes" },
      { label: "Pricing", value: "Flat rate, confirmed before you book" },
    ],
    intro: [
      "Georgetown's mix of law firms, financial advisory offices, embassies and waterfront corporate space makes it one of DC's more specialized business markets — client-facing, image-conscious and often tied to the neighborhood's diplomatic community along nearby Embassy Row. Our Georgetown corporate car service covers airport transfers, embassy and client visits, and standing accounts for firms based here.",
      "Georgetown's narrow, cobblestone and one-way streets make a self-driven corporate visit genuinely harder than in most of the city — we know which blocks allow a brief stop and which require a short walk from the nearest legal loading zone.",
    ],
    highlights: [
      "Dulles transfers in 40–50 minutes, Reagan National transfers in 20–30 minutes",
      "Client and embassy visit transportation throughout Georgetown and Embassy Row",
      "Corporate accounts for law firms and financial advisory offices",
      "Hourly as-directed service for multi-stop meeting days",
      "Standing accounts with consolidated monthly invoicing",
      "Licensed and insured DC-area carrier, available 24/7",
    ],
    sections: [
      {
        h2: "Serving Georgetown's law-firm and embassy corridor",
        paragraphs: [
          "Georgetown sits adjacent to Embassy Row and houses a cluster of law firms and advisory offices that regularly host international clients and diplomatic visitors. We run this travel daily, with chauffeurs who know Georgetown's parking restrictions and the fastest legal drop-off points near each office.",
        ],
      },
      {
        h2: "Airport transfers for Georgetown business travelers",
        paragraphs: [
          "Reagan National is the closer airport at about 8 miles and 20 to 30 minutes, with Dulles the choice for international and broader route options at roughly 25 miles. We confirm a flat rate and track your flight for either.",
        ],
      },
      {
        h2: "Booking Georgetown corporate transportation",
        paragraphs: [
          "Rates are flat and confirmed in writing before you book. Call (877) 609-1919 or book online to set up a standing account for recurring Georgetown client or airport travel.",
        ],
      },
    ],
    vehicles: VEHICLES,
    faqs: [
      { q: "Do you provide corporate transportation for Georgetown law firms and advisory offices?", a: "Yes, we regularly serve Georgetown's law-firm and financial advisory corridor, including embassy and diplomatic client visits." },
      { q: "How far is Georgetown from Reagan National and Dulles airports?", a: "About 8 miles and 20 to 30 minutes from Reagan National, or about 25 miles and 40 to 50 minutes from Dulles." },
      { q: "Can you navigate Georgetown's narrow, one-way streets?", a: "Yes, our chauffeurs know which blocks allow a brief stop and the nearest legal loading zones for each office." },
      { q: "Do you offer monthly invoicing for Georgetown corporate accounts?", a: "Yes, consolidated monthly invoicing with trip-level detail is available for a standing account." },
      { q: "What vehicles are available for a Georgetown client visit?", a: "Sedans and SUVs for individual executives, plus 14-passenger Sprinter vans for larger delegations." },
    ],
    related: [
      { label: "Georgetown Limo Service", to: "/georgetown-limo-service" },
      { label: "Georgetown University Event Transportation", to: "/georgetown-university-event-transportation" },
      { label: "Embassy & Diplomatic Transportation", to: "/embassy-diplomatic-transportation-service" },
      { label: "Capitol Hill Corporate Car Service", to: "/capitol-hill-corporate-car-service" },
      { label: "Professional Services Transportation", to: "/professional-services-corporate-car-service" },
      { label: "Corporate Car Service", to: "/corporate" },
    ],
    schema: { areaServed: ["Georgetown, Washington, DC", "Embassy Row, DC", "Washington, DC"], serviceType: "Corporate car service" },
  },
  // ---------------------------------------------------------------------
  // Columbia MD corporate
  // ---------------------------------------------------------------------
  {
    slug: "columbia-md-corporate-car-service",
    type: "service",
    name: "Columbia",
    badge: "Columbia, MD · Corporate Transportation",
    h1: "Columbia MD Corporate Car Service",
    metaTitle: "Columbia MD Corporate Car Service | Tech & Business",
    metaDescription:
      "Corporate car service in Columbia, Maryland's business and biotech corridor — BWI and Dulles transfers, standing accounts. (877) 609-1919.",
    stats: [
      { label: "BWI", value: "18 mi · 25–35 minutes" },
      { label: "Dulles (IAD)", value: "45 mi · 55–70 minutes" },
      { label: "Pricing", value: "Flat rate, confirmed before you book" },
    ],
    intro: [
      "Columbia, Maryland sits roughly midway between Baltimore and Washington along the I-95 corridor and has grown into a major corporate and biotech business hub, anchored by a dense cluster of office parks and the Merriweather District's growing downtown. Our Columbia corporate car service covers BWI and Dulles airport transfers, office-park client visits, and standing accounts for companies with a regular presence here.",
      "Columbia's office-park layout — numbered buildings, internal access roads and visitor-parking rules that differ by campus — is exactly the kind of destination our dispatch team maps in advance, so a visiting client or employee is never the one trying to find the right entrance.",
    ],
    highlights: [
      "BWI transfers in 25–35 minutes, Dulles transfers in 55–70 minutes",
      "Office-park client and employee transportation throughout the Columbia business corridor",
      "Corporate accounts for tech, biotech and professional-services companies",
      "Hourly as-directed service for multi-stop meeting days",
      "Standing accounts with consolidated monthly invoicing",
      "Licensed and insured Maryland carrier, available 24/7",
    ],
    sections: [
      {
        h2: "Serving Columbia's business and biotech corridor",
        paragraphs: [
          "Columbia's office parks house a mix of tech, biotech and professional-services companies, often spread across campuses with their own internal roads and numbered buildings. We confirm the exact building and visitor-entrance instructions before every pickup, so a visiting client or employee is dropped at the right door.",
        ],
      },
      {
        h2: "Airport transfers for Columbia business travelers",
        paragraphs: [
          "BWI is the closer airport at about 18 miles and 25 to 35 minutes, with Dulles a practical alternative at roughly 45 miles for broader route options. We confirm a flat rate and track your flight for either.",
        ],
      },
      {
        h2: "Booking Columbia corporate transportation",
        paragraphs: [
          "Rates are flat and confirmed in writing before you book, whether it is a single airport transfer or a recurring office-park travel schedule. Call (877) 609-1919 or book online to set up a standing account.",
        ],
      },
    ],
    vehicles: VEHICLES,
    faqs: [
      { q: "Do you provide BWI and Dulles airport transfers for Columbia business travelers?", a: "Yes, BWI is about 18 miles and 25 to 35 minutes away, and Dulles is about 45 miles and 55 to 70 minutes away." },
      { q: "Can you navigate Columbia's office-park campuses?", a: "Yes, we confirm the exact building and visitor-entrance instructions for each campus before every pickup." },
      { q: "Do you serve biotech and tech companies in Columbia?", a: "Yes, we regularly transport employees, clients and vendors for biotech, tech and professional-services companies throughout the Columbia corridor." },
      { q: "Do you offer monthly invoicing for Columbia corporate accounts?", a: "Yes, consolidated monthly invoicing with trip-level detail is available for a standing account." },
      { q: "What vehicles are available for a Columbia corporate meeting day?", a: "Sedans and SUVs for individual travelers, plus 14-passenger Sprinter vans for larger teams moving between office parks." },
    ],
    related: [
      { label: "Columbia MD Limo Service", to: "/columbia-md-limo-service" },
      { label: "BWI to Columbia, MD", to: "/bwi-to-columbia-md" },
      { label: "Healthcare & Biotech Corridor Transportation", to: "/healthcare-biotech-corporate-car-service" },
      { label: "Maryland Corporate Transportation", to: "/maryland-corporate-transportation" },
      { label: "Annapolis Corporate Car Service", to: "/annapolis-corporate-car-service" },
      { label: "Corporate Car Service", to: "/corporate" },
    ],
    schema: { areaServed: ["Columbia, MD", "Howard County, MD", "Merriweather District"], serviceType: "Corporate car service" },
  },
  // ---------------------------------------------------------------------
  // Great Falls corporate
  // ---------------------------------------------------------------------
  {
    slug: "great-falls-corporate-car-service",
    type: "service",
    name: "Great Falls",
    badge: "Great Falls, VA · Corporate Transportation",
    h1: "Great Falls Corporate Car Service",
    metaTitle: "Great Falls VA Corporate Car Service | Executive Travel",
    metaDescription:
      "Corporate car service for Great Falls, VA executives — Dulles transfers, discreet point-to-point travel, standing accounts. (877) 609-1919.",
    stats: [
      { label: "Dulles (IAD)", value: "About 20–30 minutes, depending on traffic" },
      { label: "Reagan (DCA)", value: "About 35–50 minutes, depending on traffic" },
      { label: "Pricing", value: "Flat rate, confirmed before you book" },
    ],
    intro: [
      "Great Falls is one of the wealthiest residential communities in the DC metro, and much of its corporate travel is executives and principals working from home or a private office rather than commuting to a downtown headquarters. Our Great Falls corporate car service covers Dulles and Reagan National transfers, discreet point-to-point travel into DC or Tysons, and standing accounts for households and small offices with regular travel needs.",
      "Because many Great Falls trips start at a private residence rather than a commercial address, we confirm gate codes, driveway access and any security requirements in advance, the same way we do for a Great Falls wedding or estate event.",
    ],
    highlights: [
      "Dulles transfers in 20–30 minutes, Reagan National transfers in 35–50 minutes",
      "Discreet point-to-point travel between Great Falls and DC, Tysons or Reston offices",
      "Private-residence pickups with confirmed gate and driveway access",
      "Hourly as-directed service for multi-stop executive travel days",
      "Standing accounts with consolidated monthly invoicing",
      "Licensed and insured Virginia carrier, available 24/7",
    ],
    sections: [
      {
        h2: "Discreet travel from a private residence",
        paragraphs: [
          "Many Great Falls corporate trips begin at a private estate rather than an office building. We confirm gate codes, driveway access and any household security requirements before the pickup, and chauffeurs are briefed only on what is needed to run the trip smoothly.",
        ],
      },
      {
        h2: "Airport transfers for Great Falls executives",
        paragraphs: [
          "Dulles is the closest major airport at about 20 to 30 minutes, with Reagan National a common choice for domestic travel at roughly 35 to 50 minutes. We confirm a flat rate and track your flight for either.",
        ],
      },
      {
        h2: "Booking Great Falls corporate transportation",
        paragraphs: [
          "Rates are flat and confirmed in writing before you book, whether it is a single airport transfer or a recurring executive travel schedule. Call (877) 609-1919 or book online to set up a standing account.",
        ],
      },
    ],
    vehicles: VEHICLES,
    faqs: [
      { q: "Do you provide corporate transportation from a private Great Falls residence?", a: "Yes, we regularly pick up from private estates. We confirm gate codes, driveway access and any security requirements in advance." },
      { q: "How far is Great Falls from Dulles and Reagan National?", a: "About 20 to 30 minutes from Dulles and 35 to 50 minutes from Reagan National, depending on traffic." },
      { q: "Can you handle a recurring executive travel schedule for a Great Falls household or small office?", a: "Yes. A standing corporate account keeps every transfer billed consistently with the same flat rate." },
      { q: "Do you offer monthly invoicing for Great Falls corporate accounts?", a: "Yes, consolidated monthly invoicing with trip-level detail is available for a standing account." },
      { q: "What vehicles are available for Great Falls executive travel?", a: "Sedans and SUVs for individual executives, plus a 14-passenger Sprinter van when a larger group is traveling together." },
    ],
    related: [
      { label: "Great Falls Limo Service", to: "/great-falls-limo-service" },
      { label: "Great Falls Wedding Limo Service", to: "/great-falls-wedding-limo-service" },
      { label: "McLean Corporate Car Service", to: "/mclean-corporate-car-service" },
      { label: "Potomac Limo Service", to: "/potomac-limo-service" },
      { label: "Northern Virginia Hourly Chauffeur Service", to: "/northern-virginia-hourly-chauffeur-service" },
      { label: "Corporate Car Service", to: "/corporate" },
    ],
    schema: { areaServed: ["Great Falls, VA", "McLean, VA", "Fairfax County, VA"], serviceType: "Corporate car service" },
  },
  // ---------------------------------------------------------------------
  // Capitol Hill corporate
  // ---------------------------------------------------------------------
  {
    slug: "capitol-hill-corporate-car-service",
    type: "service",
    name: "Capitol Hill",
    badge: "Capitol Hill, DC · Corporate Transportation",
    h1: "Capitol Hill Corporate Car Service",
    metaTitle: "Capitol Hill Corporate Car Service | Govt & Lobbying",
    metaDescription:
      "Corporate car service for Capitol Hill — government affairs, lobbying firms and congressional-office travel. Call (877) 609-1919.",
    stats: [
      { label: "Dulles (IAD)", value: "28 mi · 40–55 minutes" },
      { label: "Reagan (DCA)", value: "6 mi · 15–25 minutes" },
      { label: "Pricing", value: "Flat rate, confirmed before you book" },
    ],
    intro: [
      "Capitol Hill's government-affairs firms, lobbying offices and congressional-adjacent businesses generate some of the most schedule-sensitive corporate travel in the city — hearing days, hard committee-meeting start times and security checkpoints that a late pickup can turn into a missed appearance. Our Capitol Hill corporate car service covers congressional-office visits, airport transfers and standing accounts for government-affairs and advocacy organizations based here.",
      "Capitol Hill's security perimeter, restricted streets and valet-free loading zones mean a self-driven trip often loses more time circling for parking than it saves — we know which blocks allow a brief stop near each House and Senate office building.",
    ],
    highlights: [
      "Dulles transfers in 40–55 minutes, Reagan National transfers in 15–25 minutes",
      "Congressional-office and committee-hearing day transportation",
      "Corporate accounts for lobbying firms, trade associations and advocacy organizations",
      "Hourly as-directed service for multi-stop Hill visit days",
      "Standing accounts with consolidated monthly invoicing",
      "Licensed and insured DC-area carrier, available 24/7",
    ],
    sections: [
      {
        h2: "Built for Capitol Hill's schedule pressure",
        paragraphs: [
          "A hearing or committee meeting on Capitol Hill starts exactly on time, and the security perimeter around the House and Senate office buildings makes a self-driven arrival genuinely risky to time correctly. We confirm the nearest legal drop-off point for each building in advance so a visitor is never the one circling for parking minutes before a hearing.",
        ],
      },
      {
        h2: "Airport transfers for Hill-based travelers",
        paragraphs: [
          "Reagan National is the closer airport at about 6 miles and 15 to 25 minutes, with Dulles the choice for international and broader route options at roughly 28 miles. We confirm a flat rate and track your flight for either.",
        ],
      },
      {
        h2: "Booking Capitol Hill corporate transportation",
        paragraphs: [
          "Rates are flat and confirmed in writing before you book, whether it is a single hearing-day transfer or a recurring government-affairs travel schedule. Call (877) 609-1919 or book online to set up a standing account.",
        ],
      },
    ],
    vehicles: VEHICLES,
    faqs: [
      { q: "Do you provide transportation for congressional hearing and committee meeting days?", a: "Yes, we regularly transport government-affairs and advocacy clients to House and Senate office buildings and confirm the nearest legal drop-off point in advance." },
      { q: "How far is Capitol Hill from Reagan National and Dulles airports?", a: "About 6 miles and 15 to 25 minutes from Reagan National, or about 28 miles and 40 to 55 minutes from Dulles." },
      { q: "Can you handle Capitol Hill's security perimeter and restricted streets?", a: "Yes, our chauffeurs know which blocks allow a brief stop near each House and Senate office building." },
      { q: "Do you offer monthly invoicing for Capitol Hill corporate accounts?", a: "Yes, consolidated monthly invoicing with trip-level detail is available for a standing account." },
      { q: "What vehicles are available for a Capitol Hill client visit?", a: "Sedans and SUVs for individual executives, plus 14-passenger Sprinter vans for larger delegations." },
    ],
    related: [
      { label: "Capitol Hill Limo Service", to: "/capitol-hill-limo-service" },
      { label: "Georgetown Corporate Car Service", to: "/georgetown-corporate-car-service" },
      { label: "Government Contractor Transportation", to: "/government-contractor-car-service" },
      { label: "Professional Services Transportation", to: "/professional-services-corporate-car-service" },
      { label: "Washington DC Airport Transfers", to: "/washington-dc-airport-transfers" },
      { label: "Corporate Car Service", to: "/corporate" },
    ],
    schema: { areaServed: ["Capitol Hill, Washington, DC", "United States Capitol", "Washington, DC"], serviceType: "Corporate car service" },
  },
  // ---------------------------------------------------------------------
  // Bethesda prom
  // ---------------------------------------------------------------------
  {
    slug: "bethesda-prom-limo-service",
    type: "service",
    name: "Bethesda",
    badge: "Bethesda, MD · Prom Transportation",
    h1: "Bethesda Prom Limo Service",
    metaTitle: "Bethesda Prom Limo Service | Safe Group Transportation",
    metaDescription:
      "Prom limo service in Bethesda, MD — safe, chauffeured group transportation parents trust. Flat rates, licensed drivers. Call (877) 609-1919.",
    stats: [
      { label: "Dulles (IAD)", value: "28 mi · 40–55 minutes" },
      { label: "Pricing", value: "Flat rate by the hour, groups welcome" },
      { label: "Fleet", value: "Stretch limousine up to 14-passenger Sprinter van" },
    ],
    intro: [
      "Prom night in Bethesda means a group of students, a dinner stop, the dance itself, and often an after-party — and parents want one word for the whole evening: safe. We provide licensed, insured prom transportation for Bethesda-area high schools with a professional chauffeur who stays with the group for every stop on the itinerary, confirmed in writing before the night.",
      "Rather than splitting a group across rideshare accounts or relying on a newly licensed driver, a single reserved vehicle keeps the group together, on schedule, and off the road as passengers rather than drivers for the entire night.",
    ],
    highlights: [
      "Flat hourly rate confirmed in writing before prom night",
      "Licensed, background-checked chauffeurs who stay with the group all evening",
      "Stretch limousines and Sprinter vans for groups of any size",
      "Dinner, dance and after-party stops on one reservation",
      "Parent-friendly booking with a direct point of contact for questions",
      "Serving Bethesda-area high schools and neighboring Montgomery County communities",
    ],
    sections: [
      {
        h2: "Why Bethesda parents book a professional prom service",
        paragraphs: [
          "A reserved, professionally driven vehicle removes the two biggest risks of prom night: a new driver navigating an unfamiliar route after dark, and a group splitting up across multiple rideshare cars with no one keeping everyone together. Our chauffeurs are licensed, insured and briefed on the full evening's itinerary before pickup.",
        ],
      },
      {
        h2: "One reservation for the whole night",
        paragraphs: [
          "Dinner, the dance, and an after-party stop all run on a single hourly reservation, so the same chauffeur and vehicle are there for every leg of the evening rather than booking separate one-off rides.",
        ],
      },
      {
        h2: "Built for groups",
        paragraphs: [
          "A stretch limousine comfortably seats a group of eight, and a 14-passenger Sprinter van covers a larger group of friends splitting the cost — both with the same flat, confirmed rate and the same licensed chauffeur for the night.",
        ],
      },
      {
        h2: "Booking Bethesda prom transportation",
        paragraphs: [
          "Call (877) 609-1919 or book online with your date, pickup time and planned stops. Rates are confirmed in writing before the night, and we recommend booking several weeks ahead during peak prom season.",
        ],
      },
    ],
    vehicles: VEHICLES,
    faqs: [
      { q: "Do you serve Bethesda-area high schools for prom?", a: "Yes, we regularly serve Bethesda and neighboring Montgomery County high schools for prom night." },
      { q: "Are your prom chauffeurs background-checked?", a: "Yes, every chauffeur is licensed and background-checked, and stays with the group for the entire evening." },
      { q: "Can we book dinner, the dance and an after-party on one reservation?", a: "Yes. We build the full itinerary into a single hourly reservation so the same chauffeur covers every stop." },
      { q: "How many people fit in a prom limo or Sprinter van?", a: "A stretch limousine seats up to 8, and a 14-passenger Sprinter van covers larger groups splitting the cost." },
      { q: "How far ahead should we book Bethesda prom transportation?", a: "Several weeks ahead is recommended, since weekend prom dates in April and May book up quickly." },
    ],
    related: [
      { label: "Bethesda Limo Service", to: "/bethesda-limo-service" },
      { label: "Bethesda Wedding Limo Service", to: "/bethesda-wedding-limo-service" },
      { label: "Bethesda Corporate Car Service", to: "/bethesda-corporate-car-service" },
      { label: "Rockville Prom Limo Service", to: "/rockville-prom-limo-service" },
      { label: "Prom & Homecoming Limo Safety Guide for Parents", to: "/blog/prom-homecoming-limo-safety-guide-northern-virginia-parents" },
      { label: "Prom Limo Service", to: "/prom-limo" },
    ],
    schema: { areaServed: ["Bethesda, MD", "Montgomery County, MD"], serviceType: "Prom limousine service" },
  },
  // ---------------------------------------------------------------------
  // Arlington prom
  // ---------------------------------------------------------------------
  {
    slug: "arlington-prom-limo-service",
    type: "service",
    name: "Arlington",
    badge: "Arlington, VA · Prom Transportation",
    h1: "Arlington Prom Limo Service",
    metaTitle: "Arlington Prom Limo Service | Safe Group Transportation",
    metaDescription:
      "Prom limo service in Arlington, VA — safe, chauffeured group transportation parents trust. Flat rates, licensed drivers. Call (877) 609-1919.",
    stats: [
      { label: "Dulles (IAD)", value: "35–55 minutes, depending on traffic" },
      { label: "Pricing", value: "Flat rate by the hour, groups welcome" },
      { label: "Fleet", value: "Stretch limousine up to 14-passenger Sprinter van" },
    ],
    intro: [
      "Arlington prom nights usually run through a few stops — dinner in Clarendon or Ballston, the dance itself, and a group after-party — and parents book a professional chauffeur for exactly the reason they'd book one for an airport run: a confirmed vehicle, a licensed driver, and no one in the group behind the wheel. We cover the whole evening on one reservation, with the vehicle and chauffeur staying with the group at every stop.",
      "Arlington's dense neighborhoods — Clarendon, Ballston, Rosslyn, Crystal City — mean prom-night parking and drop-off logistics vary block by block. Our chauffeurs know the area well enough to handle that without the group losing time circling for a spot.",
    ],
    highlights: [
      "Flat hourly rate confirmed in writing before prom night",
      "Licensed, background-checked chauffeurs who stay with the group all evening",
      "Stretch limousines and Sprinter vans for groups of any size",
      "Dinner, dance and after-party stops across Arlington's neighborhoods on one reservation",
      "Parent-friendly booking with a direct point of contact for questions",
      "Serving Arlington-area high schools and nearby National Landing communities",
    ],
    sections: [
      {
        h2: "Why Arlington parents book a professional prom service",
        paragraphs: [
          "A reserved, professionally driven vehicle removes the two biggest risks of prom night: a new driver navigating Arlington's busy corridors after dark, and a group splitting across multiple rideshare cars with no one keeping everyone together.",
        ],
      },
      {
        h2: "One reservation for the whole night",
        paragraphs: [
          "Dinner in Clarendon or Ballston, the dance, and an after-party stop all run on a single hourly reservation, so the same chauffeur and vehicle are there for every leg of the evening.",
        ],
      },
      {
        h2: "Built for groups",
        paragraphs: [
          "A stretch limousine comfortably seats a group of eight, and a 14-passenger Sprinter van covers a larger group of friends splitting the cost — both with the same flat, confirmed rate.",
        ],
      },
      {
        h2: "Booking Arlington prom transportation",
        paragraphs: [
          "Call (877) 609-1919 or book online with your date, pickup time and planned stops. Rates are confirmed in writing before the night.",
        ],
      },
    ],
    vehicles: VEHICLES,
    faqs: [
      { q: "Do you serve Arlington-area high schools for prom?", a: "Yes, we regularly serve Arlington high schools, including students from Clarendon, Ballston, Rosslyn and Crystal City." },
      { q: "Are your prom chauffeurs background-checked?", a: "Yes, every chauffeur is licensed and background-checked, and stays with the group for the entire evening." },
      { q: "Can we book dinner, the dance and an after-party on one reservation?", a: "Yes. We build the full itinerary into a single hourly reservation so the same chauffeur covers every stop." },
      { q: "How many people fit in a prom limo or Sprinter van?", a: "A stretch limousine seats up to 8, and a 14-passenger Sprinter van covers larger groups splitting the cost." },
      { q: "How far ahead should we book Arlington prom transportation?", a: "Several weeks ahead is recommended, since weekend prom dates in April and May book up quickly." },
    ],
    related: [
      { label: "Arlington Limo Service", to: "/arlington-limo-service" },
      { label: "Arlington Wedding Limo Service", to: "/arlington-wedding-limo-service" },
      { label: "Arlington Corporate Car Service", to: "/arlington-corporate-car-service" },
      { label: "Vienna Prom Limo Service", to: "/vienna-prom-limo-service" },
      { label: "Prom & Homecoming Limo Safety Guide for Parents", to: "/blog/prom-homecoming-limo-safety-guide-northern-virginia-parents" },
      { label: "Prom Limo Service", to: "/prom-limo" },
    ],
    schema: { areaServed: ["Arlington, VA", "Clarendon, VA", "Ballston, VA"], serviceType: "Prom limousine service" },
  },
  // ---------------------------------------------------------------------
  // Alexandria prom
  // ---------------------------------------------------------------------
  {
    slug: "alexandria-prom-limo-service",
    type: "service",
    name: "Alexandria",
    badge: "Alexandria, VA · Prom Transportation",
    h1: "Alexandria Prom Limo Service",
    metaTitle: "Alexandria Prom Limo Service | Safe Group Transportation",
    metaDescription:
      "Prom limo service in Alexandria, VA — safe, chauffeured group transportation parents trust. Flat rates, licensed drivers. Call (877) 609-1919.",
    stats: [
      { label: "Dulles (IAD)", value: "40–60 minutes, depending on traffic" },
      { label: "Pricing", value: "Flat rate by the hour, groups welcome" },
      { label: "Fleet", value: "Stretch limousine up to 14-passenger Sprinter van" },
    ],
    intro: [
      "Alexandria prom night often means a dinner stop in Old Town, the dance, and a group after-party, and parents choose a professional car service for the same reason they would for any evening with teenagers on the road: a licensed chauffeur, a confirmed vehicle, and no one in the group driving. We run the entire night on one reservation, with the chauffeur and vehicle staying with the group at every stop.",
      "Old Town's cobblestone streets and limited event-night parking make a self-driven prom evening harder than it needs to be — our chauffeurs know the neighborhood and the fastest legal stops near its restaurants and venues.",
    ],
    highlights: [
      "Flat hourly rate confirmed in writing before prom night",
      "Licensed, background-checked chauffeurs who stay with the group all evening",
      "Stretch limousines and Sprinter vans for groups of any size",
      "Old Town dinner, dance and after-party stops on one reservation",
      "Parent-friendly booking with a direct point of contact for questions",
      "Serving Alexandria-area high schools and neighboring Fairfax County communities",
    ],
    sections: [
      {
        h2: "Why Alexandria parents book a professional prom service",
        paragraphs: [
          "A reserved, professionally driven vehicle removes the two biggest risks of prom night: a new driver navigating Old Town's narrow streets after dark, and a group splitting across multiple rideshare cars with no one keeping everyone together.",
        ],
      },
      {
        h2: "One reservation for the whole night",
        paragraphs: [
          "Dinner in Old Town, the dance, and an after-party stop all run on a single hourly reservation, so the same chauffeur and vehicle are there for every leg of the evening.",
        ],
      },
      {
        h2: "Built for groups",
        paragraphs: [
          "A stretch limousine comfortably seats a group of eight, and a 14-passenger Sprinter van covers a larger group of friends splitting the cost — both with the same flat, confirmed rate.",
        ],
      },
      {
        h2: "Booking Alexandria prom transportation",
        paragraphs: [
          "Call (877) 609-1919 or book online with your date, pickup time and planned stops. Rates are confirmed in writing before the night.",
        ],
      },
    ],
    vehicles: VEHICLES,
    faqs: [
      { q: "Do you serve Alexandria-area high schools for prom?", a: "Yes, we regularly serve Alexandria high schools, including students from Old Town and neighboring Fairfax County communities." },
      { q: "Are your prom chauffeurs background-checked?", a: "Yes, every chauffeur is licensed and background-checked, and stays with the group for the entire evening." },
      { q: "Can we book dinner in Old Town, the dance and an after-party on one reservation?", a: "Yes. We build the full itinerary into a single hourly reservation so the same chauffeur covers every stop." },
      { q: "How many people fit in a prom limo or Sprinter van?", a: "A stretch limousine seats up to 8, and a 14-passenger Sprinter van covers larger groups splitting the cost." },
      { q: "How far ahead should we book Alexandria prom transportation?", a: "Several weeks ahead is recommended, since weekend prom dates in April and May book up quickly." },
    ],
    related: [
      { label: "Alexandria Limo Service", to: "/alexandria-limo-service" },
      { label: "Alexandria Wedding Limo Service", to: "/alexandria-wedding-limo-service" },
      { label: "Alexandria Corporate Car Service", to: "/alexandria-corporate-car-service" },
      { label: "Arlington Prom Limo Service", to: "/arlington-prom-limo-service" },
      { label: "Prom & Homecoming Limo Safety Guide for Parents", to: "/blog/prom-homecoming-limo-safety-guide-northern-virginia-parents" },
      { label: "Prom Limo Service", to: "/prom-limo" },
    ],
    schema: { areaServed: ["Alexandria, VA", "Old Town Alexandria, VA"], serviceType: "Prom limousine service" },
  },
  // ---------------------------------------------------------------------
  // Vienna prom
  // ---------------------------------------------------------------------
  {
    slug: "vienna-prom-limo-service",
    type: "service",
    name: "Vienna",
    badge: "Vienna, VA · Prom Transportation",
    h1: "Vienna Prom Limo Service",
    metaTitle: "Vienna Prom Limo Service | Safe Group Transportation",
    metaDescription:
      "Prom limo service in Vienna, VA — safe, chauffeured group transportation parents trust. Flat rates, licensed drivers. Call (877) 609-1919.",
    stats: [
      { label: "Dulles (IAD)", value: "About 20–30 minutes, depending on traffic" },
      { label: "Pricing", value: "Flat rate by the hour, groups welcome" },
      { label: "Fleet", value: "Stretch limousine up to 14-passenger Sprinter van" },
    ],
    intro: [
      "Vienna prom night typically means a dinner stop near Church Street or Tysons, the dance, and a group after-party — and parents book a professional chauffeur for exactly the reason they would for any night with a group of teenagers on the road: a confirmed vehicle, a licensed driver, and no one in the group driving. We run the entire night on one reservation, with the chauffeur and vehicle staying with the group at every stop.",
      "Rather than splitting a group across multiple rideshare cars with no single adult keeping everyone together, a reserved limo or Sprinter van keeps the whole group on one schedule for the night.",
    ],
    highlights: [
      "Flat hourly rate confirmed in writing before prom night",
      "Licensed, background-checked chauffeurs who stay with the group all evening",
      "Stretch limousines and Sprinter vans for groups of any size",
      "Dinner, dance and after-party stops on one reservation",
      "Parent-friendly booking with a direct point of contact for questions",
      "Serving Vienna-area high schools and neighboring Tysons and McLean communities",
    ],
    sections: [
      {
        h2: "Why Vienna parents book a professional prom service",
        paragraphs: [
          "A reserved, professionally driven vehicle removes the two biggest risks of prom night: a new driver navigating unfamiliar routes after dark, and a group splitting across multiple rideshare cars with no one keeping everyone together.",
        ],
      },
      {
        h2: "One reservation for the whole night",
        paragraphs: [
          "Dinner, the dance, and an after-party stop all run on a single hourly reservation, so the same chauffeur and vehicle are there for every leg of the evening rather than booking separate one-off rides.",
        ],
      },
      {
        h2: "Built for groups",
        paragraphs: [
          "A stretch limousine comfortably seats a group of eight, and a 14-passenger Sprinter van covers a larger group of friends splitting the cost — both with the same flat, confirmed rate.",
        ],
      },
      {
        h2: "Booking Vienna prom transportation",
        paragraphs: [
          "Call (877) 609-1919 or book online with your date, pickup time and planned stops. Rates are confirmed in writing before the night.",
        ],
      },
    ],
    vehicles: VEHICLES,
    faqs: [
      { q: "Do you serve Vienna-area high schools for prom?", a: "Yes, we regularly serve Vienna high schools, including students from neighboring Tysons and McLean communities." },
      { q: "Are your prom chauffeurs background-checked?", a: "Yes, every chauffeur is licensed and background-checked, and stays with the group for the entire evening." },
      { q: "Can we book dinner, the dance and an after-party on one reservation?", a: "Yes. We build the full itinerary into a single hourly reservation so the same chauffeur covers every stop." },
      { q: "How many people fit in a prom limo or Sprinter van?", a: "A stretch limousine seats up to 8, and a 14-passenger Sprinter van covers larger groups splitting the cost." },
      { q: "How far ahead should we book Vienna prom transportation?", a: "Several weeks ahead is recommended, since weekend prom dates in April and May book up quickly." },
    ],
    related: [
      { label: "Vienna Limo Service", to: "/vienna-limo-service" },
      { label: "Vienna Wedding Limo Service", to: "/vienna-wedding-limo-service" },
      { label: "McLean Prom Limo Service", to: "/mclean-prom-limo-service" },
      { label: "Oakton Prom Limo Service", to: "/oakton-prom-limo-service" },
      { label: "Arlington Prom Limo Service", to: "/arlington-prom-limo-service" },
      { label: "Prom Limo Service", to: "/prom-limo" },
    ],
    schema: { areaServed: ["Vienna, VA", "Tysons, VA", "McLean, VA"], serviceType: "Prom limousine service" },
  },
];
