export const PHONE = "(312) 555-0142";
export const PHONE_HREF = "tel:+13125550142";
export const EMAIL = "reservations@royalblackcarschicago.com";

const U = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1400&q=70`;

export const IMG = {
  hero: U("1767285610734-f0858d5248fe"),
  airport: U("1558222209-134191edfe0d"),
  corporate: U("1769787301187-0fab290ba2f2"),
  areaMap: U("1758384076382-21f6587e1048"),
};

export const services = [
  { href: "/airport-car-service/", title: "Airport transfers", text: "O'Hare, Midway and private terminals, with meet and greet inside arrivals.", img: U("1558222209-134191edfe0d") },
  { href: "/corporate-car-service/", title: "Corporate travel", text: "Monthly billing, a named dispatcher and NDA-signed chauffeurs.", img: U("1769787301187-0fab290ba2f2") },
  { href: "/hourly-chauffeur/", title: "Hourly & as-directed", text: "Keep the car and chauffeur for meetings, showings or a night out.", img: U("1449965408869-eaa3f722e40d") },
  { href: "/private-jet-transfers/", title: "Private aviation", text: "Planeside pick-ups at Signature, Atlantic Aviation, PWK and DPA.", img: U("1780296269675-169390638617") },
  { href: "/event-transportation/", title: "Events & venues", text: "United Center, Soldier Field, McCormick Place and every arena night.", img: U("1767285610734-f0858d5248fe") },
  { href: "/services/", title: "Weddings & occasions", text: "Weddings, birthdays and door-to-door medical appointment rides.", img: U("1773063449875-332dff62b6e3") },
];

export const airports = [
  { code: "ORD", name: "O'Hare", note: "All terminals", rate: "$95", href: "/airports/ohare/" },
  { code: "MDW", name: "Midway", note: "Baggage claim", rate: "$85", href: "/airports/midway/" },
  { code: "PWK", name: "Chicago Executive", note: "FBO planeside", rate: "$135", href: "/airports/chicago-executive-pwk/" },
];

export const fleet = [
  { title: "Luxury sedan", models: "Cadillac XTS · Lincoln MKZ", seats: "3 seats", bags: "2 bags", tag: "1–3 guests", img: U("1764090317825-9b76e437c8d8") },
  { title: "Executive sedan", models: "Mercedes-Benz E & S-Class · BMW 5 & 7 Series", seats: "3 seats", bags: "3 bags", tag: "1–3 guests", img: U("1764089859662-7b4773dff85b") },
  { title: "Midsize SUV", models: "Cadillac XT5 · Lincoln Nautilus", seats: "4 seats", bags: "3 bags", tag: "Up to 4", img: U("1617209680907-4f9b76218a4b") },
  { title: "Full-size SUV", models: "Chevrolet Suburban · GMC Yukon XL", seats: "6 seats", bags: "6 bags", tag: "Up to 6", img: U("1769787301187-0fab290ba2f2") },
  { title: "Premium luxury SUV", models: "Lincoln Navigator", seats: "6 seats", bags: "6 bags", tag: "Up to 6", img: U("1764090317565-46fe49fe2a31") },
  { title: "Executive SUV", models: "Cadillac Escalade", seats: "6 seats", bags: "6 bags", tag: "Up to 6", img: U("1698840074036-94aa3fce8750") },
  { title: "Mercedes Sprinter", models: "Executive and passenger layouts", seats: "14 seats", bags: "14 bags", tag: "Up to 14", img: U("1698840059740-ba83e510733b") },
];

export const northwest = ["Schaumburg","Hoffman Estates","Elk Grove Village","Arlington Heights","Rolling Meadows","Mount Prospect","Des Plaines","Roselle","Bloomingdale","Itasca","Wood Dale","Addison","Hanover Park","Streamwood","Bartlett","Wheeling","Buffalo Grove","Palatine","Inverness","Barrington","South Barrington","Barrington Hills"];

export const west = ["Oak Brook","Lombard","Downers Grove","Westmont","Hinsdale","Clarendon Hills","Willowbrook","Darien","Woodridge","Burr Ridge","Lisle","Naperville","Wheaton","Glen Ellyn","Carol Stream","Glendale Heights","West Chicago","Warrenville","Winfield","St. Charles","Geneva","Batavia","Elmhurst","Villa Park","Berkeley","Hillside","Westchester","La Grange","Western Springs","Brookfield","Riverside","River Forest","Oak Park","Forest Park","Elmwood Park"];

export const venues = [
  ["United Center","united-center"],["Soldier Field","soldier-field"],["Wrigley Field","wrigley-field"],
  ["Guaranteed Rate Field","guaranteed-rate-field"],["McCormick Place","mccormick-place"],["Navy Pier","navy-pier"],
  ["Wintrust Arena","wintrust-arena"],["Credit Union 1 Arena","credit-union-1-arena"],["Rosemont Theatre","rosemont-theatre"],["Allstate Arena","allstate-arena"],
];

export const faqs = [
  { q: "How much is a black car from downtown to O'Hare?", a: "A luxury sedan is $95 flat from the Loop, River North and Streeterville, including tolls, parking, meet and greet and gratuity. SUVs and Sprinters are quoted when you book and the rate never changes afterwards." },
  { q: "What happens if my flight is delayed?", a: "We track the flight from departure and move the pick-up automatically. Wait time at O'Hare and Midway is free for the first 60 minutes after landing." },
  { q: "How early should the car collect me for a flight?", a: "Three hours before a domestic departure from O'Hare, three and a half for international. Add 20 to 40 minutes from the Northwest or West suburbs depending on the expressway." },
  { q: "Do you provide child seats?", a: "Yes — infant, toddler and booster seats, fitted and checked before pick-up. The first seat is free on every ride." },
  { q: "Can my company be invoiced monthly?", a: "Yes. Corporate accounts are invoiced monthly with cost centres and trip codes, and we can bill by department. Personal bookings are charged to the card on file after the ride." },
];

export const faqsFull = [
  ...faqs,
  { q: "How do I book a ride?", a: "Use the instant quote form on the homepage, text or call dispatch, or email reservations. Online quotes are confirmed in a couple of minutes." },
  { q: "How is the flat rate calculated?", a: "By distance, vehicle class and time of day, shown to you before you confirm the booking. Airport rates from downtown are published on our rates page." },
  { q: "What's your cancellation policy?", a: "Free cancellation up to 2 hours before pick-up. Cancellations inside that window may be charged a fee — ask dispatch for the specifics on your booking." },
  { q: "Do you charge extra for tolls or gratuity?", a: "No — tolls, standard wait time and gratuity are included in the flat rate for point-to-point and airport trips." },
  { q: "Which suburbs do you serve?", a: "Downtown Chicago, the Northwest and West suburbs, and the North Shore, plus long-distance runs to Milwaukee, Madison, Indianapolis, South Bend and Detroit. See the service areas page for the full list." },
  { q: "Can I book a one-way trip?", a: "Yes — point-to-point trips are one-way by default. Round trips and wait-and-return can be booked together for a combined rate." },
  { q: "Do you accommodate pets?", a: "Small, carried pets are generally fine — tell dispatch when you book so the right vehicle is assigned." },
  { q: "What payment methods do you accept?", a: "Major credit cards for individual bookings, and monthly invoicing for corporate accounts." },
];

export const reviews = [
  { quote: "My flight landed two hours early and the car was already waiting. That has never happened to me in Chicago.", name: "Daniel R.", trip: "O'Hare to the Loop" },
  { quote: "Eleven people between McCormick Place and two hotels for three days, and not one mix-up.", name: "Priya S.", trip: "Convention group" },
  { quote: "Booked a booster seat and it was already fitted when the Escalade arrived in Naperville.", name: "Megan T.", trip: "Naperville to Midway" },
];

export const slug = (s) => s.toLowerCase().replace(/\./g, "").replace(/ /g, "-");

// ---------- Full service pages (hub + 15 spokes) ----------
export const serviceDetails = [
  {
    slug: "airport-car-service", href: "/airport-car-service/", title: "Airport Car Service",
    keyword: "Chicago airport car service", eyebrow: "AIRPORT TRANSFERS",
    lead: "Flat-rate pickups and drop-offs at O'Hare, Midway and the private terminals, with your flight tracked from departure.",
    img: IMG.airport,
    included: ["Live flight tracking, so the car adjusts to an early or delayed landing", "60 minutes of free wait time at O'Hare and Midway", "Meet & greet inside baggage claim with a name board", "Tolls, parking and gratuity built into the flat rate"],
    body: [
      "Airport runs are the most common reason people book us, and the ones where a late car costs the most. We track every flight from the moment it departs, so your chauffeur is already circling or parked by the time you land — not starting the drive when your wheels touch down.",
      "Pickups from downtown, the Northwest suburbs or the West suburbs are quoted as a flat rate before you ride: no meter, no surge for a delayed flight, no surprise toll charges added afterward. Drop-offs work the same way — tell us your terminal and departure time and we build in enough buffer for security and TSA PreCheck lines.",
      "For groups or extra bags, a full-size SUV or Sprinter keeps everyone together instead of splitting into two cars.",
    ],
    bestFor: ["Solo business travel to O'Hare or Midway", "Families with car seats and extra luggage", "Groups arriving on the same flight"],
    fleetLinks: [["Luxury sedan", "/fleet/luxury-sedan/"], ["Luxury SUV", "/fleet/luxury-suv/"]],
    faqs: [
      { q: "How much is a black car to O'Hare?", a: "A luxury sedan is $95 flat from the Loop, River North and Streeterville, including tolls, parking, meet and greet and gratuity. SUVs and Sprinters are quoted when you book." },
      { q: "What if my flight is delayed?", a: "We track it automatically and move the pick-up to match — no need to call us." },
    ],
  },
  {
    slug: "black-car-service", href: "/black-car-service/", title: "Black Car Service in Chicago",
    keyword: "black car service Chicago", eyebrow: "BLACK CAR SERVICE",
    lead: "A licensed, insured black car and a professional chauffeur for airport runs, business travel and everything in between — priced before you ride.",
    img: IMG.hero,
    included: ["Late-model Cadillac, Lincoln and Mercedes-Benz sedans and SUVs", "Vetted, professionally dressed chauffeurs", "One flat rate agreed before dispatch, not a metered fare", "24-hour dispatch, booked online, by text or by phone"],
    body: [
      "Royal Black Cars Chicago runs a licensed, insured black car fleet across the city and collar counties. Every ride pairs a late-model sedan or SUV with a chauffeur who knows the fastest route at that hour, not just the one a map app suggests — and every rate is agreed before the car leaves, so a slow Kennedy or an extra stop never becomes a surprise on the bill.",
      "Most bookings fall into three buckets: an airport run, a corporate account trip billed to a company, or an hourly booking where the car and chauffeur stay with you between stops. All three run on the same fleet and the same dispatch desk, so switching between them — say, an airport pickup that turns into a full evening — is one phone call, not a new booking.",
      "If you're not sure which service fits, dispatch will ask a few questions about your trip and quote the right vehicle rather than the most expensive one.",
    ],
    bestFor: ["Airport pickups and drop-offs", "Executives who need a dependable, discreet ride", "Anyone who wants a fixed price agreed before the ride, not a meter"],
    fleetLinks: [["See the full fleet", "/fleet/"], ["Luxury sedan", "/fleet/luxury-sedan/"]],
    faqs: [
      { q: "What's the difference between a black car and a rideshare?", a: "A dedicated, insured chauffeur and vehicle booked for you in advance, a flat rate agreed before you ride, and no surge pricing — rideshare fares and drivers both vary trip to trip." },
      { q: "Is the price really fixed?", a: "Yes. Tolls, standard wait time and gratuity are built into the quoted rate for point-to-point and airport trips." },
    ],
  },
  {
    slug: "corporate-car-service", href: "/corporate-car-service/", title: "Corporate Car Service",
    keyword: "corporate car service Chicago", eyebrow: "CORPORATE TRAVEL",
    lead: "Monthly invoicing, a named dispatcher and NDA-signed chauffeurs for executive travel, roadshows and client-facing trips.",
    img: IMG.corporate,
    included: ["One login for the whole company, with cost centres and trip codes", "Monthly invoicing instead of a card charge per ride", "A named dispatcher who knows your frequent travelers", "NDA-signed chauffeurs for confidential or client-facing trips"],
    body: [
      "Companies book us for the trips where showing up late, or in the wrong car, actually costs something: an executive between back-to-back meetings, a client being picked up from O'Hare for the first time, a roadshow where three cars need to arrive at the same building within minutes of each other.",
      "A corporate account gets a single dispatcher who learns your travelers, your usual pickup points and your billing structure, so booking a ride is a text or a two-line email rather than a new account setup every time. Invoices are monthly, itemized by rider, date and cost centre, so finance can allocate spend without chasing receipts.",
      "Accounts scale from a single frequent flyer to a full roadshow — see the corporate accounts page for setup details.",
    ],
    bestFor: ["Executives with recurring airport or downtown trips", "Roadshows and multi-car client visits", "Companies that need monthly billing instead of expensed rides"],
    fleetLinks: [["Executive sedan", "/fleet/mercedes-s-class/"], ["Sprinter van", "/fleet/sprinter-van/"]],
    faqs: [
      { q: "Can our company be invoiced monthly?", a: "Yes — corporate accounts are invoiced monthly with cost centres and trip codes, and we can bill by department." },
      { q: "Do chauffeurs sign NDAs?", a: "Yes, for corporate accounts that require it — ask your dispatcher when you set up the account." },
    ],
  },
  {
    slug: "hourly-chauffeur", href: "/hourly-chauffeur/", title: "Hourly Chauffeur Service",
    keyword: "hourly chauffeur Chicago", eyebrow: "HOURLY & AS-DIRECTED",
    lead: "Keep the car and chauffeur on hand for meetings, showings, client visits or a night out — billed by the hour, not the trip.",
    img: U("1449965408869-eaa3f722e40d"),
    included: ["A dedicated car and chauffeur for your full block of time", "Waiting at each stop, no re-booking between destinations", "A 2-hour minimum, then billed in clean hourly increments", "The same flat, agreed rate whether traffic is light or heavy"],
    body: [
      "As-directed booking makes sense the moment a trip has more than one stop, or an uncertain schedule. Instead of booking three separate point-to-point rides, one car and chauffeur stay with you: waiting at a meeting, running to a second location, then back to the hotel — all on one flat hourly rate.",
      "It's the most common booking for real estate agents doing back-to-back showings, out-of-town clients running a full day of meetings, and anyone hosting a night out across a few venues who doesn't want to think about parking or ride timing between each one.",
      "Bookings start at a 2-hour minimum; longer blocks and multi-day bookings get a reduced hourly rate — ask dispatch for a quote.",
    ],
    bestFor: ["Multi-stop meeting or showing days", "A night out across several venues", "Clients visiting Chicago for a full day"],
    fleetLinks: [["Luxury sedan", "/fleet/luxury-sedan/"], ["Luxury SUV", "/fleet/luxury-suv/"]],
    faqs: [
      { q: "Is there a minimum booking?", a: "Yes, two hours. After that, time is billed in clean hourly increments." },
      { q: "Does the chauffeur wait at each stop?", a: "Yes — that's the point of an as-directed booking. The car and chauffeur stay with you for the full block." },
    ],
  },
  {
    slug: "private-jet-transfers", href: "/private-jet-transfers/", title: "Private Jet & FBO Transfers",
    keyword: "FBO car service Chicago", eyebrow: "PRIVATE AVIATION",
    lead: "Planeside pickups at Signature, Atlantic Aviation, Chicago Executive (PWK) and DuPage (DPA), timed to your tail number.",
    img: U("1780296269675-169390638617"),
    included: ["Pickup tracked to your tail number, not a fixed time", "Planeside or ramp-side meet, not a curb pickup", "Coordination with the FBO on ground clearance", "Discreet, unbranded vehicles for principals who prefer it"],
    body: [
      "Private aviation runs on tighter, less predictable timing than a commercial flight, so we track your tail number rather than a booked time — if wheels-up or landing shifts, your car shifts with it. Chauffeurs coordinate directly with the FBO desk (Signature, Atlantic Aviation and others at PWK, DPA and O'Hare's general aviation ramps) so the car is cleared and waiting at the aircraft, not stuck at a gate.",
      "For principals who prefer not to be met with a name board, we run an unbranded vehicle and a chauffeur briefed on the specifics in advance.",
      "PWK is our busiest private aviation airport for Chicago-area business travel — see the Chicago Executive Airport page for ramp-specific details.",
    ],
    bestFor: ["Principals and executives flying private", "FBO-to-downtown or FBO-to-FBO transfers", "Groups landing on a charter who need more than one vehicle"],
    fleetLinks: [["Executive sedan", "/fleet/mercedes-s-class/"], ["Sprinter van", "/fleet/sprinter-van/"]],
    faqs: [
      { q: "Do you track tail numbers?", a: "Yes — for private and charter flights we track the tail number so pickup timing adjusts automatically." },
      { q: "Which FBOs do you serve at PWK?", a: "Signature and Atlantic Aviation are the most common; tell dispatch your FBO when you book and we'll confirm ramp access." },
    ],
  },
  {
    slug: "long-distance-car-service", href: "/long-distance-car-service/", title: "Long-Distance Car Service",
    keyword: "long distance car service Chicago", eyebrow: "CITY-TO-CITY",
    lead: "Door-to-door drives to Milwaukee, Madison, Indianapolis, South Bend and Detroit, in one car the whole way — no transfers.",
    img: IMG.areaMap,
    included: ["One chauffeur and vehicle for the entire drive", "A flat rate agreed before departure, tolls included", "Wi-Fi and bottled water on longer routes", "Round-trip and wait-and-return options"],
    body: [
      "Some trips are better driven than flown: a Milwaukee meeting that doesn't justify an airport, a family event in Indianapolis, a same-day round trip to Madison. Long-distance bookings put one chauffeur and one car on the route door to door, so there's no connection, no rental counter and no second car to arrange at the other end.",
      "Rates are flat and quoted for the full round trip or one-way, with the option to have the chauffeur wait at your destination and drive back the same day, or book a separate return.",
      "See the Chicago to Milwaukee page for the most requested route, or ask dispatch for a quote to Madison, Indianapolis, South Bend or Detroit.",
    ],
    bestFor: ["Chicago–Milwaukee and Chicago–Madison business trips", "Family events in Indianapolis, South Bend or Detroit", "Anyone who'd rather not drive themselves for 3+ hours"],
    fleetLinks: [["Executive sedan", "/fleet/mercedes-s-class/"], ["Luxury SUV", "/fleet/luxury-suv/"]],
    faqs: [
      { q: "Do you do same-day round trips?", a: "Yes — the chauffeur can wait at your destination and drive you back the same day, or you can book a separate return." },
      { q: "What cities do you cover?", a: "Milwaukee, Madison, Indianapolis, South Bend and Detroit are our regular routes; other Midwest cities are quoted on request." },
    ],
  },
  {
    slug: "point-to-point", href: "/point-to-point/", title: "Point-to-Point Car Service",
    keyword: "point to point car service Chicago", eyebrow: "POINT TO POINT",
    lead: "A single pickup and drop-off, quoted as a flat rate before you ride — the simplest way to book a black car.",
    img: U("1767285610734-f0858d5248fe"),
    included: ["One flat rate for pickup to drop-off, no meter", "Tolls and standard wait time included", "Real-time chauffeur tracking sent to your phone", "Booking in under a minute online, by text or by phone"],
    body: [
      "Point-to-point is the most straightforward booking: one address to another, one flat rate, no hourly minimum. It's the right choice for a dinner reservation, a downtown meeting or any trip where you know exactly where you're starting and ending.",
      "Pricing is quoted before you book based on distance and time of day, and the rate doesn't change once it's confirmed — a slower route through construction or an unexpected detour is on us, not added to your fare.",
      "Need more than one stop, or a car that waits while you're inside? The hourly, as-directed service is built for that instead.",
    ],
    bestFor: ["A single trip with a known start and end point", "Dinner, theater and event drop-offs", "Anyone who wants a fixed price without an hourly minimum"],
    fleetLinks: [["Luxury sedan", "/fleet/luxury-sedan/"], ["Luxury SUV", "/fleet/luxury-suv/"]],
    faqs: [
      { q: "How is point-to-point different from hourly?", a: "Point-to-point is one flat rate for a single pickup and drop-off. Hourly keeps the car and chauffeur with you across multiple stops." },
      { q: "Can I add a stop along the way?", a: "A quick stop can usually be accommodated — tell dispatch when you book so it's reflected in the rate." },
    ],
  },
  {
    slug: "roadshow-transportation", href: "/roadshow-transportation/", title: "Roadshow Transportation",
    keyword: "roadshow transportation Chicago", eyebrow: "CORPORATE ROADSHOWS",
    lead: "Multiple cars, one dispatcher and a schedule that holds — built for investor and sales roadshows across the city.",
    img: IMG.corporate,
    included: ["A single named dispatcher coordinating every vehicle", "Sedans and Sprinters mixed to match group size at each stop", "Live schedule updates as meetings run long or short", "One consolidated invoice for the full roadshow"],
    body: [
      "Roadshows fail when transportation is the weak link: a car that's late to the second meeting, a driver who doesn't know the building's back entrance, no one able to answer when a meeting runs 40 minutes over. We assign one dispatcher to the entire roadshow, coordinating every vehicle against the live schedule rather than a fixed pickup time.",
      "Group size can change stop to stop — an executive team of three at one meeting, a larger group joining for the next — so we mix sedans and Sprinters as needed rather than booking one vehicle type for the whole day.",
      "Multi-day and multi-city roadshows are billed on one consolidated invoice with a full trip log, matching the corporate account billing structure.",
    ],
    bestFor: ["Investor roadshows with a tight multi-stop schedule", "Sales teams visiting several client sites in a day", "Any trip where a dispatcher needs to react to a changing schedule"],
    fleetLinks: [["Executive sedan", "/fleet/mercedes-s-class/"], ["Sprinter van", "/fleet/sprinter-van/"]],
    faqs: [
      { q: "Can vehicle types change during the day?", a: "Yes — your dispatcher can add or swap vehicles between stops as group size changes." },
      { q: "How is a roadshow billed?", a: "One consolidated invoice for the full itinerary, itemized by vehicle and leg, under your corporate account." },
    ],
  },
  {
    slug: "convention-transportation", href: "/convention-transportation/", title: "Convention & McCormick Place Transportation",
    keyword: "McCormick Place transportation", eyebrow: "CONVENTIONS",
    lead: "Group transportation for McCormick Place, Rosemont and downtown conventions, sized to your delegation.",
    img: U("1767285610734-f0858d5248fe"),
    included: ["Sedans through minibuses, sized to your group", "Coordinated pickup at hotel lobbies and McCormick Place entrances", "Multi-day booking for the full length of the show", "One invoice covering every vehicle and day"],
    body: [
      "Convention transportation is a volume problem more than a routing one: a delegation split across two or three hotels, all needing to be at McCormick Place, Navy Pier or a Rosemont venue at the same time each morning and back again in the evening. We size the fleet to the group — a few sedans for a small executive team, a Sprinter or minibus for a full delegation — and coordinate pickup points across hotels.",
      "For McCormick Place specifically, chauffeurs know which entrance matches your hall and badge type, which saves real time over a general drop-off at the main entrance during a large show.",
      "Multi-day bookings for the length of the convention are billed on a single invoice, with the schedule adjustable day to day as sessions run long or short.",
    ],
    bestFor: ["Delegations attending McCormick Place, Rosemont or Navy Pier shows", "Groups split across multiple downtown hotels", "Multi-day convention bookings"],
    fleetLinks: [["Sprinter van", "/fleet/sprinter-van/"], ["Minibus / coach", "/fleet/minibus/"]],
    faqs: [
      { q: "Do you know the McCormick Place entrances?", a: "Yes — chauffeurs are briefed on which entrance and hall matches your show and badge type." },
      { q: "Can you handle a group split across hotels?", a: "Yes, that's the most common convention booking — one dispatcher coordinates every hotel pickup against the same schedule." },
    ],
  },
  {
    slug: "event-transportation", href: "/event-transportation/", title: "Event Transportation",
    keyword: "event car service Chicago", eyebrow: "EVENTS & VENUES",
    lead: "United Center, Soldier Field, Wrigley Field and every arena night — dropped at the gate, picked up after the final whistle.",
    img: IMG.hero,
    included: ["Drop-off at the closest open gate, not a general lot", "Post-event pickup coordinated to when the event actually ends", "Group vehicles for a full party or suite", "No parking, no rideshare surge pricing after the event"],
    body: [
      "Event nights are exactly where rideshare pricing gets worst and parking gets hardest — surge multipliers after a game, a 20-minute walk from the nearest open lot. We drop at the closest open gate for your venue and coordinate the return pickup to when the event actually ends, not a fixed time that assumes it runs on schedule.",
      "For a full suite or group outing, a Sprinter or full-size SUV keeps everyone together on the way in and, more importantly, on the way out when a stadium empties at once.",
      "See the venues page for gate and pickup-point details at United Center, Soldier Field, Wrigley Field, Guaranteed Rate Field, McCormick Place, Navy Pier and more.",
    ],
    bestFor: ["Game nights at United Center, Soldier Field or Wrigley Field", "Concerts and events at Allstate Arena or Rosemont Theatre", "Group outings that need one vehicle for everyone"],
    fleetLinks: [["Luxury SUV", "/fleet/luxury-suv/"], ["Sprinter van", "/fleet/sprinter-van/"]],
    faqs: [
      { q: "How do you handle pickup after the event?", a: "We track the event and stage your car near the gate as it ends, rather than pre-booking a fixed pickup time." },
      { q: "Which venues do you cover?", a: "All the major Chicago-area venues — see the full list on our venues page." },
    ],
  },
  {
    slug: "wedding-car-service", href: "/wedding-car-service/", title: "Wedding Car Service",
    keyword: "wedding car service Chicago", eyebrow: "WEDDINGS",
    lead: "A stretch limo or luxury sedan for the wedding party, timed to your ceremony and reception schedule — not a rideshare guess.",
    img: U("1773063449875-332dff62b6e3"),
    included: ["A chauffeur briefed on your full-day timeline in advance", "Stretch limo, sedan or SUV options for the couple and party", "On-site coordination with your planner or venue", "Champagne-ready interiors on request"],
    body: [
      "A wedding day runs on a schedule that doesn't forgive a late car — getting-ready photos, ceremony, portraits, reception entrance. We work from your full-day timeline rather than a single pickup time, so the chauffeur already knows about the detour for photos or the second stop for the wedding party.",
      "The stretch limo is the most requested vehicle for the couple; sedans and SUVs are common for parents, the wedding party or guest shuttling between a hotel block and the venue.",
      "Book early — wedding season weekends fill the stretch limo calendar first.",
    ],
    bestFor: ["The couple's ceremony-to-reception transportation", "Wedding party and family transport", "Guest shuttles between a hotel block and the venue"],
    fleetLinks: [["Stretch limo", "/fleet/stretch-limo/"], ["Luxury sedan", "/fleet/luxury-sedan/"]],
    faqs: [
      { q: "How far ahead should we book?", a: "As soon as your date is set — stretch limos book out fastest during peak wedding season." },
      { q: "Can the chauffeur follow our full-day timeline?", a: "Yes — send your timeline in advance and the chauffeur plans around it, including any photo stops." },
    ],
  },
  {
    slug: "prom-limo", href: "/prom-limo/", title: "Prom Limo Service",
    keyword: "prom limo Chicago", eyebrow: "PROMS", cta: true,
    lead: "A licensed, insured stretch limo for prom night, with a chauffeur and a schedule parents can see.",
    img: U("1773063449875-332dff62b6e3"),
    included: ["Licensed, insured chauffeur for the full night", "A confirmed pickup and return schedule shared with parents", "Stretch limo or SUV sized to the group", "No stops or changes without parent sign-off"],
    body: [
      "Prom night bookings run the same licensed, insured service as every other ride — a professional chauffeur, a confirmed schedule, and no surprise changes. We share the pickup and return schedule with a parent or guardian in advance, and the chauffeur sticks to it: no unapproved stops.",
      "Groups typically split a stretch limo or full-size SUV across dinner, photos and the dance itself, with the vehicle held for the full night rather than booked as separate trips.",
      "Book a few weeks ahead — prom weekends are the busiest nights of the spring for our stretch limo fleet.",
    ],
    bestFor: ["Prom groups needing dinner-to-dance transportation", "Parents who want a confirmed schedule and licensed chauffeur", "After-parties that need a safe ride home"],
    fleetLinks: [["Stretch limo", "/fleet/stretch-limo/"], ["Luxury SUV", "/fleet/luxury-suv/"]],
    faqs: [
      { q: "Can parents see the schedule?", a: "Yes — we confirm the full pickup and return schedule with a parent or guardian before the night." },
      { q: "Is the chauffeur the same person all night?", a: "Yes, one chauffeur and vehicle are held for your group for the full booking." },
    ],
  },
  {
    slug: "funeral-car-service", href: "/funeral-car-service/", title: "Funeral Car Service",
    keyword: "funeral car service Chicago", eyebrow: "FUNERALS",
    lead: "A quiet, dependable sedan or SUV for family and guests, coordinated with your funeral home's schedule.",
    img: IMG.hero,
    included: ["Coordination directly with your funeral home or planner", "A calm, unhurried chauffeur for the full service", "Sedans and SUVs for immediate family or extended guests", "Flat rate agreed in advance, no day-of surprises"],
    body: [
      "Funeral transportation is coordinated directly with your funeral home ahead of time, so the chauffeur already knows the service order, the route between the service and the cemetery, and where the family needs to be and when — nothing left to figure out on the day.",
      "We keep the vehicle and pace unhurried, and can hold the car for the full length of the service and any gathering afterward rather than booking separate one-way trips.",
      "Contact us in advance with your funeral home's details and we'll confirm timing directly with them.",
    ],
    bestFor: ["Immediate family transportation for the service", "Extended family and guest transport", "Coordination with a funeral home's set schedule"],
    fleetLinks: [["Luxury sedan", "/fleet/luxury-sedan/"], ["Luxury SUV", "/fleet/luxury-suv/"]],
    faqs: [
      { q: "Can you coordinate with our funeral home?", a: "Yes — give us your funeral home's contact and we'll confirm the schedule directly with them." },
      { q: "Can the car wait through the full service?", a: "Yes, the vehicle can be held for the full day rather than booked as separate one-way trips." },
    ],
  },
  {
    slug: "birthday-party-transportation", href: "/birthday-party-transportation/", title: "Birthday Party Transportation",
    keyword: "birthday party car service Chicago", eyebrow: "CELEBRATIONS",
    lead: "One car for the whole night out — dinner, the next venue, and home again, without re-booking between stops.",
    img: U("1449965408869-eaa3f722e40d"),
    included: ["One chauffeur held across every stop of the night", "Sedans and SUVs sized to your group", "No re-booking between dinner, venues and home", "A flat rate agreed before the night starts"],
    body: [
      "Birthday nights out usually move — dinner, then a second venue, then home — and booking three separate rideshares between them is the easiest way for a group to get split up or stuck waiting outside. An hourly booking keeps one chauffeur with you for the whole night instead.",
      "Group size drives the vehicle: a sedan for a small dinner, a full-size SUV or Sprinter for a bigger group heading out together.",
      "See the hourly chauffeur page for how as-directed bookings work, or book directly for your birthday night.",
    ],
    bestFor: ["Nights out with multiple stops", "Groups that want to stay together between venues", "Milestone birthdays that need one dependable ride for everyone"],
    fleetLinks: [["Luxury SUV", "/fleet/luxury-suv/"], ["Sprinter van", "/fleet/sprinter-van/"]],
    faqs: [
      { q: "Is this the same as hourly booking?", a: "Yes — birthday nights out are typically booked as an as-directed, hourly trip so the car stays with you between stops." },
      { q: "How many people fit?", a: "A sedan seats up to 3, a full-size SUV up to 6, and a Sprinter up to 14 — tell dispatch your group size for a recommendation." },
    ],
  },
  {
    slug: "medical-appointment-transportation", href: "/medical-appointment-transportation/", title: "Medical Appointment Transportation",
    keyword: "medical appointment car service Chicago", eyebrow: "DOOR-TO-DOOR CARE",
    lead: "A patient, door-to-door ride to and from appointments, with the chauffeur waiting if your appointment runs long.",
    img: U("1767285610734-f0858d5248fe"),
    included: ["Door-to-door pickup, not curb-only", "A chauffeur who waits through the appointment on request", "Wheelchair-accessible options on request", "The same chauffeur for the return trip when booked round-trip"],
    body: [
      "Medical appointment rides are booked round-trip more often than one-way, with the chauffeur waiting through the appointment rather than the patient re-booking a return afterward and hoping for a quick pickup. We build in extra time on both ends for anyone who needs help getting in or out of the building.",
      "This is a common booking for older parents, post-procedure patients who can't drive themselves, or anyone who'd rather not sit in a rideshare waiting for a driver to accept the trip after a long appointment.",
      "Let dispatch know if you need a wheelchair-accessible vehicle or extra assistance when you book.",
    ],
    bestFor: ["Round-trip appointment bookings with a waiting chauffeur", "Post-procedure patients who can't drive themselves", "Family arranging transportation for an aging parent"],
    fleetLinks: [["Luxury sedan", "/fleet/luxury-sedan/"], ["Luxury SUV", "/fleet/luxury-suv/"]],
    faqs: [
      { q: "Will the driver wait during my appointment?", a: "Yes, on request — let dispatch know when you book and we'll hold the same chauffeur for your return." },
      { q: "Can you accommodate a wheelchair?", a: "Yes — tell dispatch when booking so we can confirm the right vehicle." },
    ],
  },
];

// ---------- Airports (hub + 7 spokes) ----------
export const airportDetails = [
  {
    code: "ORD", name: "O'Hare International Airport", slug: "ohare", href: "/airports/ohare/",
    rate: "$95", rateNote: "flat from downtown", driveTime: "25–45 min from downtown",
    img: IMG.airport,
    body: [
      "O'Hare is our busiest airport by far, and the one we track most closely. Chauffeurs know every terminal's arrivals curb and which cell-phone-lot loop to use, so the meet-and-greet inside baggage claim is fast even during a bad weather delay.",
      "Departures get the same flight-tracking treatment in reverse: tell us your flight and we build in enough buffer for security given the time of day.",
    ],
    terminals: "All terminals (1, 2, 3 and 5/International) — tell us yours when you book.",
    waitPolicy: "60 minutes of free wait time from landing before additional wait charges apply.",
    faqs: [
      { q: "How early should my car collect me for a flight at O'Hare?", a: "Three hours before a domestic departure, three and a half for international. Add 20–40 minutes from the Northwest or West suburbs depending on the expressway." },
      { q: "Do you meet inside baggage claim?", a: "Yes — your chauffeur waits inside with a name board unless you request curbside." },
    ],
  },
  {
    code: "MDW", name: "Midway International Airport", slug: "midway", href: "/airports/midway/",
    rate: "$85", rateNote: "flat from downtown", driveTime: "20–35 min from downtown",
    img: IMG.airport,
    body: [
      "Midway's single terminal makes for a faster meet-and-greet than O'Hare, and its Southwest-heavy schedule means quicker turnarounds if your flight lands early.",
      "It's the closer airport for the South Side and Southwest suburbs, and often faster than O'Hare for a downtown pickup depending on time of day.",
    ],
    terminals: "Single terminal — meet at baggage claim.",
    waitPolicy: "60 minutes of free wait time from landing before additional wait charges apply.",
    faqs: [
      { q: "Is Midway faster than O'Hare for downtown trips?", a: "Often, yes — it's closer to the Loop and has one terminal, which usually means a quicker curb-to-car time." },
    ],
  },
  {
    code: "PWK", name: "Chicago Executive Airport", slug: "chicago-executive-pwk", href: "/airports/chicago-executive-pwk/",
    rate: "$135", rateNote: "flat from downtown", driveTime: "30–50 min from downtown",
    img: U("1780296269675-169390638617"),
    body: [
      "PWK is the region's primary private-aviation airport for Chicago business travel, and our busiest FBO destination. We coordinate directly with Signature and Atlantic Aviation ahead of your arrival so the car has ramp clearance and is waiting planeside, not at a general parking lot.",
      "Because private aviation timing is tighter than commercial, we track your tail number rather than a fixed time.",
    ],
    terminals: "Signature Flight Support and Atlantic Aviation FBOs.",
    waitPolicy: "Pickup is timed to your tail number, not a scheduled time — ground clearance is coordinated with your FBO in advance.",
    faqs: [
      { q: "Which FBOs do you serve at PWK?", a: "Signature Flight Support and Atlantic Aviation are the two main FBOs — tell dispatch which one when you book." },
    ],
  },
  {
    code: "DPA", name: "DuPage Airport", slug: "dupage", href: "/airports/dupage/",
    rate: "Custom quote", rateNote: "from the West suburbs", driveTime: "15–30 min from Naperville / Oak Brook",
    img: U("1780296269675-169390638617"),
    body: [
      "DuPage Airport (DPA) in West Chicago serves private and charter aviation for the western suburbs, and is often the closer option than PWK or O'Hare for clients based in Naperville, Oak Brook or Wheaton.",
      "Coordination works the same as PWK: tail-number tracking and direct FBO coordination for a planeside pickup.",
    ],
    terminals: "DuPage Flight Center and other on-field FBOs.",
    waitPolicy: "Pickup timed to your tail number and coordinated with the FBO in advance.",
    faqs: [
      { q: "Is DuPage Airport closer than PWK for West suburb clients?", a: "Often, yes — DPA sits closer to Naperville, Oak Brook and Wheaton. Ask dispatch to compare drive times for your address." },
    ],
  },
  {
    code: "MKE", name: "Milwaukee Mitchell International Airport", slug: "milwaukee-mitchell", href: "/airports/milwaukee-mitchell/",
    rate: "Custom quote", rateNote: "city-to-city rate", driveTime: "~90 min from downtown Chicago",
    img: IMG.areaMap,
    body: [
      "Some Chicago-area travelers connect through Milwaukee Mitchell (MKE) for fare or schedule reasons. We run this as a long-distance, city-to-city booking rather than a standard airport rate, given the roughly 90-minute drive up I-94.",
      "See the long-distance car service page for how round-trip and wait-and-return options work on this route.",
    ],
    terminals: "Single terminal.",
    waitPolicy: "Flight-tracked the same as our Chicago airports; wait time built into the long-distance quote.",
    faqs: [
      { q: "Do you charge a flat rate to Milwaukee?", a: "Yes, quoted as a long-distance city-to-city rate rather than a fixed airport rate — ask dispatch for a quote." },
    ],
  },
  {
    code: "GYY", name: "Gary/Chicago International Airport", slug: "gary", href: "/airports/gary/",
    rate: "Custom quote", rateNote: "from Chicago or the South suburbs", driveTime: "35–55 min from downtown",
    img: IMG.areaMap,
    body: [
      "Gary/Chicago International (GYY) serves cargo, charter and a small amount of commercial traffic on the south side of the metro area. We quote this route on request — it's a lower-volume airport for us than O'Hare, Midway or PWK, but fully covered.",
    ],
    terminals: "Single terminal / general aviation ramp.",
    waitPolicy: "Quoted individually based on flight type — contact dispatch for details.",
    faqs: [
      { q: "Do you regularly serve Gary/Chicago Airport?", a: "Yes, on request — it's a lower-volume route for us, so call or text ahead to confirm availability." },
    ],
  },
  {
    code: "RFD", name: "Chicago Rockford International Airport", slug: "rockford", href: "/airports/rockford/",
    rate: "Custom quote", rateNote: "long-distance rate", driveTime: "~75 min from downtown Chicago",
    img: IMG.areaMap,
    body: [
      "Rockford (RFD) is a longer-distance pickup, about 75 minutes from downtown, and mostly booked for cargo-adjacent charter and cost-conscious commercial connections. We run it as a long-distance quote rather than a standard flat rate — contact dispatch for pricing.",
    ],
    terminals: "Single passenger terminal.",
    waitPolicy: "Quoted individually — contact dispatch ahead of your flight.",
    faqs: [
      { q: "How far is Rockford Airport from Chicago?", a: "About 75 minutes from downtown depending on traffic on I-90." },
    ],
  },
];

// ---------- Fleet landing pages (hub + 6 spokes) ----------
export const fleetPages = [
  {
    slug: "luxury-sedan", href: "/fleet/luxury-sedan/", title: "Luxury Sedan",
    models: "Cadillac XTS · Lincoln MKZ", capacity: "1–3 passengers, 2 bags", img: U("1764090317825-9b76e437c8d8"),
    bestFor: ["Airport transfers and business travel", "Point-to-point trips downtown", "Anyone traveling solo or as a pair"],
    body: "Our most-booked vehicle — a Cadillac XTS or Lincoln MKZ, professionally driven, for airport runs, downtown meetings and point-to-point trips. Comfortable for up to three passengers with two standard bags.",
  },
  {
    slug: "luxury-suv", href: "/fleet/luxury-suv/", title: "Luxury SUV",
    models: "Cadillac XT5 · Lincoln Nautilus · Chevrolet Suburban · Lincoln Navigator", capacity: "Up to 6 passengers, 6 bags", img: U("1769787301187-0fab290ba2f2"),
    bestFor: ["Families with extra luggage", "Groups of up to six", "Winter weather and airport runs"],
    body: "Midsize through full-size SUVs for groups, families and extra luggage — from a Cadillac XT5 up to a Chevrolet Suburban or Lincoln Navigator. Higher ground clearance makes these the preferred choice for winter airport runs.",
  },
  {
    slug: "mercedes-s-class", href: "/fleet/mercedes-s-class/", title: "Mercedes S-Class",
    models: "Mercedes-Benz S-Class · E-Class", capacity: "1–3 passengers, 3 bags", img: U("1764089859662-7b4773dff85b"),
    bestFor: ["VIP and first-class clients", "Executive corporate travel", "Clients who want the top of the fleet"],
    body: "The top of our fleet for clients who want it: a Mercedes-Benz S-Class or E-Class, reserved for VIP airport transfers, executive corporate travel and first-class occasions.",
  },
  {
    slug: "sprinter-van", href: "/fleet/sprinter-van/", title: "Mercedes Sprinter Van",
    models: "Mercedes-Benz Sprinter — executive and passenger layouts", capacity: "Up to 14 passengers, 14 bags", img: U("1698840059740-ba83e510733b"),
    bestFor: ["Groups and roadshows", "Convention and event shuttles", "Airport runs for larger parties"],
    body: "A Mercedes Sprinter in executive or standard passenger layout, seating up to 14 with matching luggage capacity — our go-to for roadshows, convention shuttles and larger group airport runs.",
  },
  {
    slug: "stretch-limo", href: "/fleet/stretch-limo/", title: "Stretch Limo",
    models: "Stretch limousine", capacity: "Up to 10 passengers", img: U("1773063449875-332dff62b6e3"),
    bestFor: ["Weddings", "Proms", "Milestone celebrations"],
    body: "A classic stretch limousine for weddings, proms and milestone celebrations, seating up to 10. Book early for wedding season and prom weekends — these fill first.",
  },
  {
    slug: "minibus", href: "/fleet/minibus/", title: "Minibus / Coach",
    models: "Minibus and coach", capacity: "20–55 passengers", img: U("1698840074036-94aa3fce8750"),
    bestFor: ["Conventions and corporate groups", "Large wedding or event guest shuttles", "Multi-day group bookings"],
    body: "A minibus or coach for the largest groups — convention delegations, corporate outings and wedding guest shuttles from 20 up to 55 passengers, available for single trips or multi-day bookings.",
  },
];
