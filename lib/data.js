export const PHONE = "+1 872 484 8060";
export const PHONE_HREF = "tel:+18724848060";
export const EMAIL = "info@royalblackcarchicago.com";

const U = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1400&q=70`;

export const IMG = {
  hero: U("1767285610734-f0858d5248fe"),
  airport: U("1558222209-134191edfe0d"),
  corporate: U("1769787301187-0fab290ba2f2"),
  areaMap: U("1758384076382-21f6587e1048"),
};

// Expanded, categorized stock photo library — real Unsplash photos, chosen
// per topic so pages stop repeating the same handful of images. Spot-checked
// for actual relevance (a few search matches that didn't fit were swapped).
export const PHOTOS = {
  chauffeur: [U("1473655587843-eda8944061e8"), U("1514041181368-bca62cceffcd"), U("1518783211485-10fd3bfb2ce2")],
  sedan: [U("1637479457230-7e09c10e37a6"), U("1646283181928-59e4244eb1e8"), U("1675923759360-348b03df0d3e")],
  limo: [U("1542114123-e4041abffdfa"), U("1583171233867-f2d302eb8960"), U("1583668925503-7fcc6606934c"), U("1570019112093-f46196e5e474"), U("1644607317737-43846c6024c9")],
  suv: [U("1599758918450-c0d699978e59"), U("1615051050993-9502ba54aeff"), U("1627140290942-7c8f9f56e870"), U("1581163980256-d9581d08d401"), U("1589148820843-5fc6217d9d93"), U("1592186383436-5eaa625b59d9")],
  mercedes: [U("1546518071-fddcdda7580a"), U("1553440569-bcc63803a83d"), U("1563694983011-6f4d90358083")],
  sprinter: [U("1569520884908-682f382556e1"), U("1576882981805-0629e8d5061f"), U("1609364111454-5f6cd52170a3")],
  minibus: [U("1574720187210-421b34c9cf01"), U("1596496181947-ded2d2ff0e66"), U("1602248406547-bda7af9fb7e9")],
  airportTerminal: [U("1553619948-505cc1cdc320"), U("1573076978602-a16914734d61"), U("1596723806060-dc72ec1ca0d7")],
  airportPickup: [U("1532968899863-5b52ef155913"), U("1544032659-b51fdffab4c6"), U("1549894595-4698795b38ee")],
  runway: [U("1572198404182-2c115d89fb26"), U("1592805145089-6066b407e342"), U("1608601006827-c052e2358d6d")],
  privateJet: [U("1474302770737-173ee21bab63"), U("1540962351504-03099e0a754b"), U("1566212775038-532d06eda485")],
  wedding: [U("1481530890859-b32ae6d6018a"), U("1516536900061-d881b27e8ff8"), U("1523371696700-91e21249c0ed")],
  corporateOffice: [U("1549637642-90187f64f420"), U("1551649081-39f820bb2d3e"), U("1552337223-9710a0e01fbc")],
  handshake: [U("1518135714426-c18f5ffb6f4d"), U("1521790797524-b2497295b8a0"), U("1521791136064-7986c2920216")],
  meeting: [U("1540575467063-178a50c2df87"), U("1542744173-8e7e53415bb0"), U("1549045345-058277380fc3")],
  convention: [U("1553545894-cf4d7f2bf8ac"), U("1626499664764-f682569fdb68"), U("1689150571822-1b573b695391")],
  birthday: [U("1544155892-b2b6c64204fc"), U("1545696563-af8f6ec2295a")],
  funeral: [U("1522752622479-65eefd320386"), U("1544813545-4827b64fcacb"), U("1563705330026-7b2d352069c3")],
  care: [U("1454875392665-2ac2c85e8d3e"), U("1513159446162-54eb8bdaa79b")],
  prom: [U("1526353191785-926dfb82058d"), U("1530024950720-39f28d59aed6"), U("1551915320-f59076ad1aa6")],
  skyline: [U("1477959858617-67f85cf4f1df"), U("1479520997871-76c75ea2b67a"), U("1493134799591-2c9eed26201a"), U("1490376653299-e25ec8c1d02c")],
  loop: [U("1523911355839-ae7508262a3d"), U("1540870952311-c842be20d534"), U("1564759779242-92b7be9849e5")],
  highway: [U("1519994007676-baabab4bf574"), U("1520594923568-1b5d82587f86"), U("1521706887145-1c0edacadb25")],
  stadiumGeneric: [U("1430232324554-8f4aebd06683"), U("1434648957308-5e6a859697e8"), U("1471295253337-3ceaaedca402")],
  suburbGeneric: [U("1541737949652-27149c8e786d"), U("1597959377489-5c8a0c327dca"), U("1698203808498-1f6a941dad4f")],
  evanston: [U("1591628996689-a20ea1ae1ad3"), U("1601765365111-90c84bd77975"), U("1615763537071-54d135b07917")],
  naperville: [U("1581278478776-8fc201297029"), U("1581279413612-a5e680ca21be"), U("1586475915213-69971ee3c21a")],
  lakeMichigan: [U("1530827707515-4ea5ca563344"), U("1563333576-c5c1ccec85fd"), U("1563597187-4691653d13a6")],
  unitedCenter: [U("1514625895778-692f4e00ec41"), U("1620588212046-66bc57e70eeb")],
  soldierField: [U("1588449579316-e72097090ab0"), U("1600132733681-cc8e0b5bdaf5")],
  wrigley: [U("1437269282288-3e5c7d977352"), U("1502671757500-da44a6626c7e")],
  navyPier: [U("1484108149850-e72c6f7b9f8f"), U("1576468700719-4cb4f2c9de8e")],
};

// Shared trust points — reused as feature cards across service, airport,
// fleet, location and venue pages so every page carries real substance
// without repeating hand-authored copy.
export const trustPoints = [
  { title: "Licensed & insured", text: "Operating legally in Illinois, with commercial insurance on every vehicle in the fleet." },
  { title: "Flat pricing, agreed first", text: "Your rate is confirmed before the chauffeur is dispatched — not estimated, not metered." },
  { title: "Vetted chauffeurs", text: "Every chauffeur is background-checked and trained on the fleet before driving a client." },
  { title: "Dispatch that answers", text: "Day or night, dispatch can quote, book or change a trip on the spot — not a call centre queue." },
];

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

// hourlyRate: $95/hr flat, all vehicle classes.
export const fleet = [
  { title: "Luxury sedan", models: "Cadillac XTS · Lincoln MKZ", seats: "3 seats", bags: "2 bags", tag: "1–3 guests", hourlyRate: "$95/hr", img: U("1764090317825-9b76e437c8d8") },
  { title: "Executive sedan", models: "Mercedes-Benz E & S-Class · BMW 5 & 7 Series", seats: "3 seats", bags: "3 bags", tag: "1–3 guests", hourlyRate: "$95/hr", img: U("1764089859662-7b4773dff85b") },
  { title: "Midsize SUV", models: "Cadillac XT5 · Lincoln Nautilus", seats: "4 seats", bags: "3 bags", tag: "Up to 4", hourlyRate: "$95/hr", img: U("1617209680907-4f9b76218a4b") },
  { title: "Full-size SUV", models: "Chevrolet Suburban · GMC Yukon XL", seats: "6 seats", bags: "6 bags", tag: "Up to 6", hourlyRate: "$95/hr", img: U("1769787301187-0fab290ba2f2") },
  { title: "Premium luxury SUV", models: "Lincoln Navigator", seats: "6 seats", bags: "6 bags", tag: "Up to 6", hourlyRate: "$95/hr", img: U("1764090317565-46fe49fe2a31") },
  { title: "Executive SUV", models: "Cadillac Escalade", seats: "6 seats", bags: "6 bags", tag: "Up to 6", hourlyRate: "$95/hr", img: U("1698840074036-94aa3fce8750") },
  { title: "Mercedes Sprinter", models: "Executive and passenger layouts", seats: "14 seats", bags: "14 bags", tag: "Up to 14", hourlyRate: "$95/hr", img: U("1698840059740-ba83e510733b") },
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
// body: structured as headed sections (h + p[]), rendered by ServicePageTemplate
// with real <h3> subheadings — not a flat wall of prose.
export const serviceDetails = [
  {
    slug: "airport-car-service", href: "/airport-car-service/", title: "Airport Car Service",
    keyword: "Chicago airport car service", eyebrow: "AIRPORT TRANSFERS",
    lead: "Flat-rate pickups and drop-offs at O'Hare, Midway and the private terminals, with your flight tracked from departure.",
    img: PHOTOS.airportPickup[0],
    gallery: [PHOTOS.airportPickup[0], PHOTOS.airportPickup[1 % PHOTOS.airportPickup.length], PHOTOS.airportPickup[2 % PHOTOS.airportPickup.length], PHOTOS.airportPickup[0]],
    included: ["Live flight tracking, so the car adjusts to an early or delayed landing", "60 minutes of free wait time at O'Hare and Midway", "Meet & greet inside baggage claim with a name board", "Tolls, parking and gratuity built into the flat rate"],
    body: [
      { h: "How airport transfers work", p: [
        "Airport runs are the most common reason people book us, and the ones where a late car costs the most. We track every flight from the moment it departs, so your chauffeur is already circling or parked by the time you land — not starting the drive when your wheels touch down.",
        "Drop-offs work the same way in reverse — tell us your terminal and departure time and we build in enough buffer for security and TSA PreCheck lines given the time of day and airline.",
      ]},
      { h: "Who books this service", p: [
        "Solo business travelers who want a fixed rate instead of a metered fare, families juggling car seats and extra bags, and groups arriving on the same flight who'd rather not split into two rideshares in the cell-phone lot.",
        "For groups or extra luggage, a full-size SUV or Sprinter keeps everyone together instead of two separate cars leaving from two different pickup points.",
      ]},
      { h: "Pricing and what's included", p: [
        "Pickups from downtown, the Northwest suburbs or the West suburbs are quoted as a flat rate before you ride: no meter, no surge for a delayed flight, no surprise toll charges added afterward.",
        "Tolls, parking at the airport, the meet-and-greet, and gratuity are all built into the number you're quoted — the rate you see when you book is the rate you pay.",
      ]},
    ],
    bestFor: ["Solo business travel to O'Hare or Midway", "Families with car seats and extra luggage", "Groups arriving on the same flight"],
    fleetLinks: [["Luxury sedan", "/fleet/luxury-sedan/"], ["Luxury SUV", "/fleet/luxury-suv/"]],
    faqs: [
      { q: "How much is a black car to O'Hare?", a: "A luxury sedan is $95 flat from the Loop, River North and Streeterville, including tolls, parking, meet and greet and gratuity. SUVs and Sprinters are quoted when you book." },
      { q: "What if my flight is delayed?", a: "We track it automatically and move the pick-up to match — no need to call us." },
      { q: "Do you meet me inside baggage claim?", a: "Yes, with a name board, unless you'd rather be met curbside — just tell dispatch your preference when you book." },
      { q: "What if I land early?", a: "The car adjusts the same way it would for a delay — flight tracking works both directions, so an early landing just means an earlier pickup." },
      { q: "Can I book a round trip?", a: "Yes — book both legs together and we'll confirm your return pickup once you have a flight time, or as a standing pickup if it's still unconfirmed." },
    ],
  },
  {
    slug: "black-car-service", href: "/black-car-service/", title: "Black Car Service in Chicago",
    keyword: "black car service Chicago", eyebrow: "BLACK CAR SERVICE",
    lead: "A licensed, insured black car and a professional chauffeur for airport runs, business travel and everything in between — priced before you ride.",
    img: PHOTOS.limo[0],
    gallery: [PHOTOS.limo[0], PHOTOS.limo[1 % PHOTOS.limo.length], PHOTOS.limo[2 % PHOTOS.limo.length], PHOTOS.limo[0]],
    included: ["Late-model Cadillac, Lincoln and Mercedes-Benz sedans and SUVs", "Vetted, professionally dressed chauffeurs", "One flat rate agreed before dispatch, not a metered fare", "24-hour dispatch, booked online, by text or by phone"],
    body: [
      { h: "What black car service means here", p: [
        "Royal Black Cars Chicago runs a licensed, insured black car fleet across the city and collar counties. Every ride pairs a late-model sedan or SUV with a chauffeur who knows the fastest route at that hour, not just the one a map app suggests.",
        "Every rate is agreed before the car leaves, so a slow Kennedy or an extra stop never becomes a surprise on the bill.",
      ]},
      { h: "How bookings are organized", p: [
        "Most bookings fall into three buckets: an airport run, a corporate account trip billed to a company, or an hourly booking where the car and chauffeur stay with you between stops.",
        "All three run on the same fleet and the same dispatch desk, so switching between them — say, an airport pickup that turns into a full evening — is one phone call, not a new booking.",
      ]},
      { h: "Choosing the right service", p: [
        "If you're not sure which service fits, dispatch will ask a few questions about your trip and quote the right vehicle rather than the most expensive one.",
        "Browse the full list of services if you already know the shape of your trip, or call dispatch and describe it — either way, the flat-rate promise is the same.",
      ]},
    ],
    bestFor: ["Airport pickups and drop-offs", "Executives who need a dependable, discreet ride", "Anyone who wants a fixed price agreed before the ride, not a meter"],
    fleetLinks: [["See the full fleet", "/fleet/"], ["Luxury sedan", "/fleet/luxury-sedan/"]],
    faqs: [
      { q: "What's the difference between a black car and a rideshare?", a: "A dedicated, insured chauffeur and vehicle booked for you in advance, a flat rate agreed before you ride, and no surge pricing — rideshare fares and drivers both vary trip to trip." },
      { q: "Is the price really fixed?", a: "Yes. Tolls, standard wait time and gratuity are built into the quoted rate for point-to-point and airport trips." },
      { q: "How far in advance should I book?", a: "Same-day booking is usually fine; for weddings, proms or peak weekend evenings, a few days ahead guarantees your preferred vehicle." },
      { q: "Do you operate outside Chicago proper?", a: "Yes — daily service covers downtown, the Northwest and West suburbs and the North Shore, plus long-distance routes to Milwaukee, Madison, Indianapolis, South Bend and Detroit." },
      { q: "Is gratuity included?", a: "Yes, for point-to-point and airport trips gratuity is built into the flat rate — no additional tip expected, though always welcome for exceptional service." },
    ],
  },
  {
    slug: "corporate-car-service", href: "/corporate-car-service/", title: "Corporate Car Service",
    keyword: "corporate car service Chicago", eyebrow: "CORPORATE TRAVEL",
    lead: "Monthly invoicing, a named dispatcher and NDA-signed chauffeurs for executive travel, roadshows and client-facing trips.",
    img: PHOTOS.corporateOffice[0],
    gallery: [PHOTOS.corporateOffice[0], PHOTOS.corporateOffice[1 % PHOTOS.corporateOffice.length], PHOTOS.corporateOffice[2 % PHOTOS.corporateOffice.length], PHOTOS.corporateOffice[0]],
    included: ["One login for the whole company, with cost centres and trip codes", "Monthly invoicing instead of a card charge per ride", "A named dispatcher who knows your frequent travelers", "NDA-signed chauffeurs for confidential or client-facing trips"],
    body: [
      { h: "Why companies book corporate car service", p: [
        "Companies book us for the trips where showing up late, or in the wrong car, actually costs something: an executive between back-to-back meetings, a client being picked up from O'Hare for the first time, a roadshow where three cars need to arrive at the same building within minutes of each other.",
      ]},
      { h: "How the account works day to day", p: [
        "A corporate account gets a single dispatcher who learns your travelers, your usual pickup points and your billing structure, so booking a ride is a text or a two-line email rather than a new account setup every time.",
        "Invoices are monthly, itemized by rider, date and cost centre, so finance can allocate spend without chasing receipts.",
      ]},
      { h: "Scaling from one traveler to a full roadshow", p: [
        "Accounts scale from a single frequent flyer to a full multi-car roadshow without changing how booking works — the same dispatcher, the same invoice, just more vehicles on a given day.",
        "See the corporate accounts page for setup details and billing terms.",
      ]},
    ],
    bestFor: ["Executives with recurring airport or downtown trips", "Roadshows and multi-car client visits", "Companies that need monthly billing instead of expensed rides"],
    fleetLinks: [["Executive sedan", "/fleet/mercedes-s-class/"], ["Sprinter van", "/fleet/sprinter-van/"]],
    faqs: [
      { q: "Can our company be invoiced monthly?", a: "Yes — corporate accounts are invoiced monthly with cost centres and trip codes, and we can bill by department." },
      { q: "Do chauffeurs sign NDAs?", a: "Yes, for corporate accounts that require it — ask your dispatcher when you set up the account." },
      { q: "How many travelers can be on one account?", a: "As many as you need — accounts scale from a single executive to a full company directory of frequent travelers." },
      { q: "Can different departments be billed separately?", a: "Yes — cost centres and trip codes let finance split spend by department on the same monthly invoice." },
      { q: "How quickly can we set up an account?", a: "Usually the same day — call, text or email with your company details and typical routes, and dispatch confirms billing terms right away." },
    ],
  },
  {
    slug: "hourly-chauffeur", href: "/hourly-chauffeur/", title: "Hourly Chauffeur Service",
    keyword: "hourly chauffeur Chicago", eyebrow: "HOURLY & AS-DIRECTED",
    lead: "Keep the car and chauffeur on hand for meetings, showings, client visits or a night out — billed by the hour, not the trip.",
    img: PHOTOS.chauffeur[0],
    gallery: [PHOTOS.chauffeur[0], PHOTOS.chauffeur[1 % PHOTOS.chauffeur.length], PHOTOS.chauffeur[2 % PHOTOS.chauffeur.length], PHOTOS.chauffeur[0]],
    included: ["A dedicated car and chauffeur for your full block of time", "Waiting at each stop, no re-booking between destinations", "A 2-hour minimum, then billed in clean hourly increments", "The same flat, agreed rate whether traffic is light or heavy"],
    body: [
      { h: "When as-directed booking makes sense", p: [
        "As-directed booking makes sense the moment a trip has more than one stop, or an uncertain schedule. Instead of booking three separate point-to-point rides, one car and chauffeur stay with you: waiting at a meeting, running to a second location, then back to the hotel — all on one flat hourly rate.",
      ]},
      { h: "Who uses hourly service", p: [
        "It's the most common booking for real estate agents doing back-to-back showings, out-of-town clients running a full day of meetings, and anyone hosting a night out across a few venues who doesn't want to think about parking or ride timing between each one.",
      ]},
      { h: "How billing works", p: [
        "Bookings start at a 2-hour minimum, then billed in clean hourly increments after that — no rounding tricks, no surprise fees for running ten minutes over.",
        "Longer blocks and multi-day bookings get a reduced hourly rate — ask dispatch for a quote before you book.",
      ]},
    ],
    bestFor: ["Multi-stop meeting or showing days", "A night out across several venues", "Clients visiting Chicago for a full day"],
    fleetLinks: [["Luxury sedan", "/fleet/luxury-sedan/"], ["Luxury SUV", "/fleet/luxury-suv/"]],
    faqs: [
      { q: "Is there a minimum booking?", a: "Yes, two hours. After that, time is billed in clean hourly increments." },
      { q: "Does the chauffeur wait at each stop?", a: "Yes — that's the point of an as-directed booking. The car and chauffeur stay with you for the full block." },
      { q: "Can I extend the booking on the day?", a: "Usually, yes, subject to the chauffeur's next booking — ask as early as possible so dispatch can confirm." },
      { q: "Is there a discount for longer bookings?", a: "Yes — multi-hour and multi-day bookings get a reduced hourly rate. Ask dispatch for a quote based on your schedule." },
      { q: "Can I change the route during the booking?", a: "Yes — that's what as-directed means. Tell the chauffeur directly or coordinate through dispatch as your plans change." },
    ],
  },
  {
    slug: "private-jet-transfers", href: "/private-jet-transfers/", title: "Private Jet & FBO Transfers",
    keyword: "FBO car service Chicago", eyebrow: "PRIVATE AVIATION",
    lead: "Planeside pickups at Signature, Atlantic Aviation, Chicago Executive (PWK) and DuPage (DPA), timed to your tail number.",
    img: PHOTOS.privateJet[0],
    gallery: [PHOTOS.privateJet[0], PHOTOS.privateJet[1 % PHOTOS.privateJet.length], PHOTOS.privateJet[2 % PHOTOS.privateJet.length], PHOTOS.privateJet[0]],
    included: ["Pickup tracked to your tail number, not a fixed time", "Planeside or ramp-side meet, not a curb pickup", "Coordination with the FBO on ground clearance", "Discreet, unbranded vehicles for principals who prefer it"],
    body: [
      { h: "Why tail-number tracking matters", p: [
        "Private aviation runs on tighter, less predictable timing than a commercial flight, so we track your tail number rather than a booked time — if wheels-up or landing shifts, your car shifts with it.",
        "Chauffeurs coordinate directly with the FBO desk — Signature, Atlantic Aviation and others at PWK, DPA and O'Hare's general aviation ramps — so the car is cleared and waiting at the aircraft, not stuck at a gate.",
      ]},
      { h: "Discretion for principals", p: [
        "For principals who prefer not to be met with a name board, we run an unbranded vehicle and a chauffeur briefed on the specifics in advance.",
      ]},
      { h: "Which airports we cover", p: [
        "PWK is our busiest private aviation airport for Chicago-area business travel — see the Chicago Executive Airport page for ramp-specific details.",
        "DuPage (DPA) is the closer option for clients based in the western suburbs; both run on the same tail-number-tracked process.",
      ]},
    ],
    bestFor: ["Principals and executives flying private", "FBO-to-downtown or FBO-to-FBO transfers", "Groups landing on a charter who need more than one vehicle"],
    fleetLinks: [["Executive sedan", "/fleet/mercedes-s-class/"], ["Sprinter van", "/fleet/sprinter-van/"]],
    faqs: [
      { q: "Do you track tail numbers?", a: "Yes — for private and charter flights we track the tail number so pickup timing adjusts automatically." },
      { q: "Which FBOs do you serve at PWK?", a: "Signature and Atlantic Aviation are the most common; tell dispatch your FBO when you book and we'll confirm ramp access." },
      { q: "Can you arrange an unbranded vehicle?", a: "Yes — tell dispatch in advance and we'll assign a discreet vehicle and briefed chauffeur." },
      { q: "Do you cover DuPage Airport too?", a: "Yes — DPA runs on the same tail-number-tracked, FBO-coordinated process as PWK." },
      { q: "What if my charter time changes last minute?", a: "That's the normal case for private aviation — tell dispatch as soon as you know and the pickup adjusts with it." },
    ],
  },
  {
    slug: "long-distance-car-service", href: "/long-distance-car-service/", title: "Long-Distance Car Service",
    keyword: "long distance car service Chicago", eyebrow: "CITY-TO-CITY",
    lead: "Door-to-door drives to Milwaukee, Madison, Indianapolis, South Bend and Detroit, in one car the whole way — no transfers.",
    img: PHOTOS.highway[0],
    gallery: [PHOTOS.highway[0], PHOTOS.highway[1 % PHOTOS.highway.length], PHOTOS.highway[2 % PHOTOS.highway.length], PHOTOS.highway[0]],
    included: ["One chauffeur and vehicle for the entire drive", "A flat rate agreed before departure, tolls included", "Wi-Fi and bottled water on longer routes", "Round-trip and wait-and-return options"],
    body: [
      { h: "When driving beats flying", p: [
        "Some trips are better driven than flown: a Milwaukee meeting that doesn't justify an airport, a family event in Indianapolis, a same-day round trip to Madison.",
        "Long-distance bookings put one chauffeur and one car on the route door to door, so there's no connection, no rental counter and no second car to arrange at the other end.",
      ]},
      { h: "How pricing and scheduling work", p: [
        "Rates are flat and quoted for the full round trip or one-way, with the option to have the chauffeur wait at your destination and drive back the same day, or book a separate return.",
      ]},
      { h: "Routes we run regularly", p: [
        "See the Chicago to Milwaukee page for the most requested route, or ask dispatch for a quote to Madison, Indianapolis, South Bend or Detroit.",
        "Other Midwest cities are quoted on request even when they're not on our standard route list.",
      ]},
    ],
    bestFor: ["Chicago–Milwaukee and Chicago–Madison business trips", "Family events in Indianapolis, South Bend or Detroit", "Anyone who'd rather not drive themselves for 3+ hours"],
    fleetLinks: [["Executive sedan", "/fleet/mercedes-s-class/"], ["Luxury SUV", "/fleet/luxury-suv/"]],
    faqs: [
      { q: "Do you do same-day round trips?", a: "Yes — the chauffeur can wait at your destination and drive you back the same day, or you can book a separate return." },
      { q: "What cities do you cover?", a: "Milwaukee, Madison, Indianapolis, South Bend and Detroit are our regular routes; other Midwest cities are quoted on request." },
      { q: "Is Wi-Fi available?", a: "Yes, on longer routes, along with bottled water — ask dispatch to confirm for your specific vehicle." },
      { q: "How is long-distance pricing different from local rides?", a: "It's quoted flat for the full route based on distance and vehicle class, rather than the local flat-rate table used for in-city and suburb trips." },
      { q: "Can multiple people split a long-distance trip?", a: "Yes — a Sprinter or SUV works well for groups traveling the same route together, at one shared flat rate." },
    ],
  },
  {
    slug: "point-to-point", href: "/point-to-point/", title: "Point-to-Point Car Service",
    keyword: "point to point car service Chicago", eyebrow: "POINT TO POINT",
    lead: "A single pickup and drop-off, quoted as a flat rate before you ride — the simplest way to book a black car.",
    img: PHOTOS.sedan[0],
    gallery: [PHOTOS.sedan[0], PHOTOS.sedan[1 % PHOTOS.sedan.length], PHOTOS.sedan[2 % PHOTOS.sedan.length], PHOTOS.sedan[0]],
    included: ["One flat rate for pickup to drop-off, no meter", "Tolls and standard wait time included", "Real-time chauffeur tracking sent to your phone", "Booking in under a minute online, by text or by phone"],
    body: [
      { h: "The simplest way to book", p: [
        "Point-to-point is the most straightforward booking: one address to another, one flat rate, no hourly minimum. It's the right choice for a dinner reservation, a downtown meeting or any trip where you know exactly where you're starting and ending.",
      ]},
      { h: "How the rate is protected", p: [
        "Pricing is quoted before you book based on distance and time of day, and the rate doesn't change once it's confirmed — a slower route through construction or an unexpected detour is on us, not added to your fare.",
      ]},
      { h: "When to choose hourly instead", p: [
        "Need more than one stop, or a car that waits while you're inside? The hourly, as-directed service is built for that instead — point-to-point is best kept to a single leg.",
      ]},
    ],
    bestFor: ["A single trip with a known start and end point", "Dinner, theater and event drop-offs", "Anyone who wants a fixed price without an hourly minimum"],
    fleetLinks: [["Luxury sedan", "/fleet/luxury-sedan/"], ["Luxury SUV", "/fleet/luxury-suv/"]],
    faqs: [
      { q: "How is point-to-point different from hourly?", a: "Point-to-point is one flat rate for a single pickup and drop-off. Hourly keeps the car and chauffeur with you across multiple stops." },
      { q: "Can I add a stop along the way?", a: "A quick stop can usually be accommodated — tell dispatch when you book so it's reflected in the rate." },
      { q: "How far ahead do I need to book?", a: "Same-day and even short-notice bookings are usually fine — booking takes under a minute online, by text or by phone." },
      { q: "Do you track the chauffeur in real time?", a: "Yes — you'll get real-time tracking sent to your phone once the chauffeur is en route." },
      { q: "What if my destination changes mid-ride?", a: "Tell the chauffeur directly — a change nearby usually doesn't affect the rate; a longer detour will be confirmed with you first." },
    ],
  },
  {
    slug: "roadshow-transportation", href: "/roadshow-transportation/", title: "Roadshow Transportation",
    keyword: "roadshow transportation Chicago", eyebrow: "CORPORATE ROADSHOWS",
    lead: "Multiple cars, one dispatcher and a schedule that holds — built for investor and sales roadshows across the city.",
    img: PHOTOS.meeting[0],
    gallery: [PHOTOS.meeting[0], PHOTOS.meeting[1 % PHOTOS.meeting.length], PHOTOS.meeting[2 % PHOTOS.meeting.length], PHOTOS.meeting[0]],
    included: ["A single named dispatcher coordinating every vehicle", "Sedans and Sprinters mixed to match group size at each stop", "Live schedule updates as meetings run long or short", "One consolidated invoice for the full roadshow"],
    body: [
      { h: "Where roadshows typically go wrong", p: [
        "Roadshows fail when transportation is the weak link: a car that's late to the second meeting, a driver who doesn't know the building's back entrance, no one able to answer when a meeting runs 40 minutes over.",
      ]},
      { h: "How we coordinate the day", p: [
        "We assign one dispatcher to the entire roadshow, coordinating every vehicle against the live schedule rather than a fixed pickup time.",
        "Group size can change stop to stop — an executive team of three at one meeting, a larger group joining for the next — so we mix sedans and Sprinters as needed rather than booking one vehicle type for the whole day.",
      ]},
      { h: "Billing across multiple days", p: [
        "Multi-day and multi-city roadshows are billed on one consolidated invoice with a full trip log, matching the corporate account billing structure.",
      ]},
    ],
    bestFor: ["Investor roadshows with a tight multi-stop schedule", "Sales teams visiting several client sites in a day", "Any trip where a dispatcher needs to react to a changing schedule"],
    fleetLinks: [["Executive sedan", "/fleet/mercedes-s-class/"], ["Sprinter van", "/fleet/sprinter-van/"]],
    faqs: [
      { q: "Can vehicle types change during the day?", a: "Yes — your dispatcher can add or swap vehicles between stops as group size changes." },
      { q: "How is a roadshow billed?", a: "One consolidated invoice for the full itinerary, itemized by vehicle and leg, under your corporate account." },
      { q: "Do we need a corporate account first?", a: "It helps for billing, but we can run a one-off roadshow without one — ask dispatch about setup either way." },
      { q: "How far in advance should we book a roadshow?", a: "A few days' notice lets us confirm the right mix of vehicles; last-minute roadshows can often still be accommodated." },
      { q: "Can the schedule change on the day?", a: "Yes — that's the point of having one dispatcher tracking the live schedule rather than fixed pickup times." },
    ],
  },
  {
    slug: "convention-transportation", href: "/convention-transportation/", title: "Convention & McCormick Place Transportation",
    keyword: "McCormick Place transportation", eyebrow: "CONVENTIONS",
    lead: "Group transportation for McCormick Place, Rosemont and downtown conventions, sized to your delegation.",
    img: PHOTOS.convention[0],
    gallery: [PHOTOS.convention[0], PHOTOS.convention[1 % PHOTOS.convention.length], PHOTOS.convention[2 % PHOTOS.convention.length], PHOTOS.convention[0]],
    included: ["Sedans through minibuses, sized to your group", "Coordinated pickup at hotel lobbies and McCormick Place entrances", "Multi-day booking for the full length of the show", "One invoice covering every vehicle and day"],
    body: [
      { h: "A volume problem, not just a routing one", p: [
        "Convention transportation is a volume problem more than a routing one: a delegation split across two or three hotels, all needing to be at McCormick Place, Navy Pier or a Rosemont venue at the same time each morning and back again in the evening.",
        "We size the fleet to the group — a few sedans for a small executive team, a Sprinter or minibus for a full delegation — and coordinate pickup points across hotels.",
      ]},
      { h: "Knowing the venue", p: [
        "For McCormick Place specifically, chauffeurs know which entrance matches your hall and badge type, which saves real time over a general drop-off at the main entrance during a large show.",
      ]},
      { h: "Multi-day billing", p: [
        "Multi-day bookings for the length of the convention are billed on a single invoice, with the schedule adjustable day to day as sessions run long or short.",
      ]},
    ],
    bestFor: ["Delegations attending McCormick Place, Rosemont or Navy Pier shows", "Groups split across multiple downtown hotels", "Multi-day convention bookings"],
    fleetLinks: [["Sprinter van", "/fleet/sprinter-van/"], ["Minibus / coach", "/fleet/minibus/"]],
    faqs: [
      { q: "Do you know the McCormick Place entrances?", a: "Yes — chauffeurs are briefed on which entrance and hall matches your show and badge type." },
      { q: "Can you handle a group split across hotels?", a: "Yes, that's the most common convention booking — one dispatcher coordinates every hotel pickup against the same schedule." },
      { q: "What vehicle sizes are available?", a: "Everything from a 3-passenger sedan up to a 55-passenger coach — tell dispatch your delegation size for a recommendation." },
      { q: "Can we book for the full length of a multi-day show?", a: "Yes — multi-day convention bookings are standard and billed on one invoice." },
      { q: "Do you serve Navy Pier and Rosemont venues too?", a: "Yes — the same coordinated approach covers Navy Pier, Rosemont conventions and other downtown venues." },
    ],
  },
  {
    slug: "event-transportation", href: "/event-transportation/", title: "Event Transportation",
    keyword: "event car service Chicago", eyebrow: "EVENTS & VENUES",
    lead: "United Center, Soldier Field, Wrigley Field and every arena night — dropped at the gate, picked up after the final whistle.",
    img: PHOTOS.stadiumGeneric[0],
    gallery: [PHOTOS.stadiumGeneric[0], PHOTOS.stadiumGeneric[1 % PHOTOS.stadiumGeneric.length], PHOTOS.stadiumGeneric[2 % PHOTOS.stadiumGeneric.length], PHOTOS.stadiumGeneric[0]],
    included: ["Drop-off at the closest open gate, not a general lot", "Post-event pickup coordinated to when the event actually ends", "Group vehicles for a full party or suite", "No parking, no rideshare surge pricing after the event"],
    body: [
      { h: "Why event nights are different", p: [
        "Event nights are exactly where rideshare pricing gets worst and parking gets hardest — surge multipliers after a game, a 20-minute walk from the nearest open lot.",
        "We drop at the closest open gate for your venue and coordinate the return pickup to when the event actually ends, not a fixed time that assumes it runs on schedule.",
      ]},
      { h: "Group and suite outings", p: [
        "For a full suite or group outing, a Sprinter or full-size SUV keeps everyone together on the way in and, more importantly, on the way out when a stadium empties at once.",
      ]},
      { h: "Venues we cover", p: [
        "See the venues page for gate and pickup-point details at United Center, Soldier Field, Wrigley Field, Guaranteed Rate Field, McCormick Place, Navy Pier and more.",
      ]},
    ],
    bestFor: ["Game nights at United Center, Soldier Field or Wrigley Field", "Concerts and events at Allstate Arena or Rosemont Theatre", "Group outings that need one vehicle for everyone"],
    fleetLinks: [["Luxury SUV", "/fleet/luxury-suv/"], ["Sprinter van", "/fleet/sprinter-van/"]],
    faqs: [
      { q: "How do you handle pickup after the event?", a: "We track the event and stage your car near the gate as it ends, rather than pre-booking a fixed pickup time." },
      { q: "Which venues do you cover?", a: "All the major Chicago-area venues — see the full list on our venues page." },
      { q: "Can I book for a suite or large group?", a: "Yes — a Sprinter or full-size SUV is the usual choice for suites and larger group outings." },
      { q: "Do you charge more for event nights?", a: "No surge pricing — your rate is the same flat quote regardless of how busy the venue is that night." },
      { q: "What if the event runs into overtime or an encore?", a: "We track the event, so a pickup staged for the scheduled end time simply adjusts if it runs long." },
    ],
  },
  {
    slug: "wedding-car-service", href: "/wedding-car-service/", title: "Wedding Car Service",
    keyword: "wedding car service Chicago", eyebrow: "WEDDINGS",
    lead: "A stretch limo or luxury sedan for the wedding party, timed to your ceremony and reception schedule — not a rideshare guess.",
    img: PHOTOS.wedding[0],
    gallery: [PHOTOS.wedding[0], PHOTOS.wedding[1 % PHOTOS.wedding.length], PHOTOS.wedding[2 % PHOTOS.wedding.length], PHOTOS.wedding[0]],
    included: ["A chauffeur briefed on your full-day timeline in advance", "Stretch limo, sedan or SUV options for the couple and party", "On-site coordination with your planner or venue", "Champagne-ready interiors on request"],
    body: [
      { h: "Built around your timeline, not ours", p: [
        "A wedding day runs on a schedule that doesn't forgive a late car — getting-ready photos, ceremony, portraits, reception entrance. We work from your full-day timeline rather than a single pickup time, so the chauffeur already knows about the detour for photos or the second stop for the wedding party.",
      ]},
      { h: "Vehicles for the day", p: [
        "The stretch limo is the most requested vehicle for the couple; sedans and SUVs are common for parents, the wedding party or guest shuttling between a hotel block and the venue.",
      ]},
      { h: "Booking timeline", p: [
        "Book early — wedding season weekends fill the stretch limo calendar first, often months in advance for Saturdays between May and October.",
      ]},
    ],
    bestFor: ["The couple's ceremony-to-reception transportation", "Wedding party and family transport", "Guest shuttles between a hotel block and the venue"],
    fleetLinks: [["Stretch limo", "/fleet/stretch-limo/"], ["Luxury sedan", "/fleet/luxury-sedan/"]],
    faqs: [
      { q: "How far ahead should we book?", a: "As soon as your date is set — stretch limos book out fastest during peak wedding season." },
      { q: "Can the chauffeur follow our full-day timeline?", a: "Yes — send your timeline in advance and the chauffeur plans around it, including any photo stops." },
      { q: "Can you coordinate directly with our planner or venue?", a: "Yes — share their contact and we'll confirm logistics with them directly." },
      { q: "Do you offer guest shuttles too?", a: "Yes — sedans, SUVs or a Sprinter can shuttle guests between a hotel block and the venue on the same day." },
      { q: "Are champagne-ready interiors available?", a: "Yes, on request — mention it when you book so the vehicle is prepared." },
    ],
  },
  {
    slug: "prom-limo", href: "/prom-limo/", title: "Prom Limo Service",
    keyword: "prom limo Chicago", eyebrow: "PROMS", cta: true,
    lead: "A licensed, insured stretch limo for prom night, with a chauffeur and a schedule parents can see.",
    img: PHOTOS.prom[0],
    gallery: [PHOTOS.prom[0], PHOTOS.prom[1 % PHOTOS.prom.length], PHOTOS.prom[2 % PHOTOS.prom.length], PHOTOS.prom[0]],
    included: ["Licensed, insured chauffeur for the full night", "A confirmed pickup and return schedule shared with parents", "Stretch limo or SUV sized to the group", "No stops or changes without parent sign-off"],
    body: [
      { h: "Built for parents' peace of mind", p: [
        "Prom night bookings run the same licensed, insured service as every other ride — a professional chauffeur, a confirmed schedule, and no surprise changes. We share the pickup and return schedule with a parent or guardian in advance, and the chauffeur sticks to it: no unapproved stops.",
      ]},
      { h: "How the night is structured", p: [
        "Groups typically split a stretch limo or full-size SUV across dinner, photos and the dance itself, with the vehicle held for the full night rather than booked as separate trips.",
      ]},
      { h: "When to book", p: [
        "Book a few weeks ahead — prom weekends are the busiest nights of the spring for our stretch limo fleet, and popular dates sell out.",
      ]},
    ],
    bestFor: ["Prom groups needing dinner-to-dance transportation", "Parents who want a confirmed schedule and licensed chauffeur", "After-parties that need a safe ride home"],
    fleetLinks: [["Stretch limo", "/fleet/stretch-limo/"], ["Luxury SUV", "/fleet/luxury-suv/"]],
    faqs: [
      { q: "Can parents see the schedule?", a: "Yes — we confirm the full pickup and return schedule with a parent or guardian before the night." },
      { q: "Is the chauffeur the same person all night?", a: "Yes, one chauffeur and vehicle are held for your group for the full booking." },
      { q: "Can the group make unplanned stops?", a: "No — stops outside the agreed schedule need parent sign-off first, which is exactly the point of the confirmed schedule." },
      { q: "How many students fit in a stretch limo?", a: "Typically up to 10 — a full-size SUV is an alternative for slightly smaller groups who prefer it." },
      { q: "Do you provide safe rides home from after-parties?", a: "Yes — that can be built into the same night's booking as a final stop." },
    ],
  },
  {
    slug: "funeral-car-service", href: "/funeral-car-service/", title: "Funeral Car Service",
    keyword: "funeral car service Chicago", eyebrow: "FUNERALS",
    lead: "A quiet, dependable sedan or SUV for family and guests, coordinated with your funeral home's schedule.",
    img: PHOTOS.funeral[0],
    gallery: [PHOTOS.funeral[0], PHOTOS.funeral[1 % PHOTOS.funeral.length], PHOTOS.funeral[2 % PHOTOS.funeral.length], PHOTOS.funeral[0]],
    included: ["Coordination directly with your funeral home or planner", "A calm, unhurried chauffeur for the full service", "Sedans and SUVs for immediate family or extended guests", "Flat rate agreed in advance, no day-of surprises"],
    body: [
      { h: "Coordinated with your funeral home", p: [
        "Funeral transportation is coordinated directly with your funeral home ahead of time, so the chauffeur already knows the service order, the route between the service and the cemetery, and where the family needs to be and when — nothing left to figure out on the day.",
      ]},
      { h: "A calm, unhurried pace", p: [
        "We keep the vehicle and pace unhurried, and can hold the car for the full length of the service and any gathering afterward rather than booking separate one-way trips.",
      ]},
      { h: "Booking ahead", p: [
        "Contact us in advance with your funeral home's details and we'll confirm timing directly with them, so your family doesn't have to relay logistics back and forth.",
      ]},
    ],
    bestFor: ["Immediate family transportation for the service", "Extended family and guest transport", "Coordination with a funeral home's set schedule"],
    fleetLinks: [["Luxury sedan", "/fleet/luxury-sedan/"], ["Luxury SUV", "/fleet/luxury-suv/"]],
    faqs: [
      { q: "Can you coordinate with our funeral home?", a: "Yes — give us your funeral home's contact and we'll confirm the schedule directly with them." },
      { q: "Can the car wait through the full service?", a: "Yes, the vehicle can be held for the full day rather than booked as separate one-way trips." },
      { q: "How many vehicles can you provide?", a: "As many as your family needs — from a single sedan to several vehicles for extended family and guests." },
      { q: "Is pricing flat for funeral bookings?", a: "Yes — the rate is agreed in advance so there are no day-of surprises for the family." },
      { q: "Can we book with short notice?", a: "Yes, where possible — call as soon as you have service details and we'll do our best to accommodate the timeline." },
    ],
  },
  {
    slug: "birthday-party-transportation", href: "/birthday-party-transportation/", title: "Birthday Party Transportation",
    keyword: "birthday party car service Chicago", eyebrow: "CELEBRATIONS",
    lead: "One car for the whole night out — dinner, the next venue, and home again, without re-booking between stops.",
    img: PHOTOS.birthday[0],
    gallery: [PHOTOS.birthday[0], PHOTOS.birthday[1 % PHOTOS.birthday.length], PHOTOS.birthday[2 % PHOTOS.birthday.length], PHOTOS.birthday[0]],
    included: ["One chauffeur held across every stop of the night", "Sedans and SUVs sized to your group", "No re-booking between dinner, venues and home", "A flat rate agreed before the night starts"],
    body: [
      { h: "Why one car beats three rideshares", p: [
        "Birthday nights out usually move — dinner, then a second venue, then home — and booking three separate rideshares between them is the easiest way for a group to get split up or stuck waiting outside. An hourly booking keeps one chauffeur with you for the whole night instead.",
      ]},
      { h: "Sizing the vehicle to the group", p: [
        "Group size drives the vehicle: a sedan for a small dinner, a full-size SUV or Sprinter for a bigger group heading out together.",
      ]},
      { h: "How to book", p: [
        "See the hourly chauffeur page for how as-directed bookings work, or book directly for your birthday night with your rough schedule and group size.",
      ]},
    ],
    bestFor: ["Nights out with multiple stops", "Groups that want to stay together between venues", "Milestone birthdays that need one dependable ride for everyone"],
    fleetLinks: [["Luxury SUV", "/fleet/luxury-suv/"], ["Sprinter van", "/fleet/sprinter-van/"]],
    faqs: [
      { q: "Is this the same as hourly booking?", a: "Yes — birthday nights out are typically booked as an as-directed, hourly trip so the car stays with you between stops." },
      { q: "How many people fit?", a: "A sedan seats up to 3, a full-size SUV up to 6, and a Sprinter up to 14 — tell dispatch your group size for a recommendation." },
      { q: "Can we decide stops as the night goes?", a: "Yes — that's the benefit of an hourly booking, the chauffeur adjusts as you go." },
      { q: "Is there a minimum booking length?", a: "Yes, a 2-hour minimum applies, the same as our standard hourly service." },
      { q: "Can you pick up multiple people from different addresses?", a: "Yes — tell dispatch the pickup points when you book and we'll plan the route." },
    ],
  },
  {
    slug: "medical-appointment-transportation", href: "/medical-appointment-transportation/", title: "Medical Appointment Transportation",
    keyword: "medical appointment car service Chicago", eyebrow: "DOOR-TO-DOOR CARE",
    lead: "A patient, door-to-door ride to and from appointments, with the chauffeur waiting if your appointment runs long.",
    img: PHOTOS.care[0],
    gallery: [PHOTOS.care[0], PHOTOS.care[1 % PHOTOS.care.length], PHOTOS.care[2 % PHOTOS.care.length], PHOTOS.care[0]],
    included: ["Door-to-door pickup, not curb-only", "A chauffeur who waits through the appointment on request", "Wheelchair-accessible options on request", "The same chauffeur for the return trip when booked round-trip"],
    body: [
      { h: "Round-trip, with a waiting chauffeur", p: [
        "Medical appointment rides are booked round-trip more often than one-way, with the chauffeur waiting through the appointment rather than the patient re-booking a return afterward and hoping for a quick pickup.",
        "We build in extra time on both ends for anyone who needs help getting in or out of the building.",
      ]},
      { h: "Who this is for", p: [
        "This is a common booking for older parents, post-procedure patients who can't drive themselves, or anyone who'd rather not sit in a rideshare waiting for a driver to accept the trip after a long appointment.",
      ]},
      { h: "Accessibility", p: [
        "Let dispatch know if you need a wheelchair-accessible vehicle or extra assistance when you book, so the right vehicle and enough time are confirmed in advance.",
      ]},
    ],
    bestFor: ["Round-trip appointment bookings with a waiting chauffeur", "Post-procedure patients who can't drive themselves", "Family arranging transportation for an aging parent"],
    fleetLinks: [["Luxury sedan", "/fleet/luxury-sedan/"], ["Luxury SUV", "/fleet/luxury-suv/"]],
    faqs: [
      { q: "Will the driver wait during my appointment?", a: "Yes, on request — let dispatch know when you book and we'll hold the same chauffeur for your return." },
      { q: "Can you accommodate a wheelchair?", a: "Yes — tell dispatch when booking so we can confirm the right vehicle." },
      { q: "Can a family member book on behalf of a patient?", a: "Yes — this is common for arranging transportation for an aging parent or family member." },
      { q: "What if the appointment runs much longer than expected?", a: "The chauffeur waits — let dispatch know if it's running significantly over so timing can be confirmed." },
      { q: "Is door-to-door assistance included?", a: "Yes — pickup and drop-off are door-to-door, not curb-only, with extra time built in for anyone who needs help." },
    ],
  },
];

// ---------- Airports (hub + 7 spokes) ----------
export const airportDetails = [
  {
    code: "ORD", name: "O'Hare International Airport", slug: "ohare", href: "/airports/ohare/",
    rate: "$95", rateNote: "flat from downtown", driveTime: "25–45 min from downtown",
    img: PHOTOS.airportTerminal[0],
    img2: PHOTOS.airportTerminal[2],
    body: [
      "O'Hare is our busiest airport by far, and the one we track most closely. Chauffeurs know every terminal's arrivals curb and which cell-phone-lot loop to use, so the meet-and-greet inside baggage claim is fast even during a bad weather delay.",
      "Departures get the same flight-tracking treatment in reverse: tell us your flight and we build in enough buffer for security given the time of day.",
    ],
    terminals: "All terminals (1, 2, 3 and 5/International) — tell us yours when you book.",
    waitPolicy: "60 minutes of free wait time from landing before additional wait charges apply.",
    faqs: [
      { q: "How early should my car collect me for a flight at O'Hare?", a: "Three hours before a domestic departure, three and a half for international. Add 20–40 minutes from the Northwest or West suburbs depending on the expressway." },
      { q: "Do you meet inside baggage claim?", a: "Yes — your chauffeur waits inside with a name board unless you request curbside." },
      { q: "Which terminal do you meet at?", a: "Whichever one your flight uses — tell us when you book and we'll confirm the exact curb or claim area." },
      { q: "What happens if my flight is delayed?", a: "We track it from departure and your pickup moves automatically — no need to call and rebook." },
      { q: "Is winter weather a problem for O'Hare pickups?", a: "We build in extra buffer during winter weather and keep an eye on ground stops, adjusting timing as needed." },
    ],
  },
  {
    code: "MDW", name: "Midway International Airport", slug: "midway", href: "/airports/midway/",
    rate: "$85", rateNote: "flat from downtown", driveTime: "20–35 min from downtown",
    img: PHOTOS.airportTerminal[1],
    img2: PHOTOS.airportPickup[0],
    body: [
      "Midway's single terminal makes for a faster meet-and-greet than O'Hare, and its Southwest-heavy schedule means quicker turnarounds if your flight lands early.",
      "It's the closer airport for the South Side and Southwest suburbs, and often faster than O'Hare for a downtown pickup depending on time of day.",
    ],
    terminals: "Single terminal — meet at baggage claim.",
    waitPolicy: "60 minutes of free wait time from landing before additional wait charges apply.",
    faqs: [
      { q: "Is Midway faster than O'Hare for downtown trips?", a: "Often, yes — it's closer to the Loop and has one terminal, which usually means a quicker curb-to-car time." },
      { q: "How much is a black car to Midway?", a: "A luxury sedan is $85 flat from downtown, tolls, parking, meet and greet and gratuity included." },
      { q: "Do you track Southwest Airlines flights?", a: "Yes — we track every airline's flight status, and Midway's schedule is mostly Southwest." },
      { q: "How early should I book for a Midway pickup?", a: "Same-day booking is usually fine; book ahead only if you want a specific vehicle class guaranteed." },
      { q: "Is there a wait-time allowance?", a: "Yes — 60 minutes of free wait time from landing, the same policy as O'Hare." },
    ],
  },
  {
    code: "PWK", name: "Chicago Executive Airport", slug: "chicago-executive-pwk", href: "/airports/chicago-executive-pwk/",
    rate: "$135", rateNote: "flat from downtown", driveTime: "30–50 min from downtown",
    img: PHOTOS.privateJet[1],
    img2: PHOTOS.privateJet[0],
    body: [
      "PWK is the region's primary private-aviation airport for Chicago business travel, and our busiest FBO destination. We coordinate directly with Signature and Atlantic Aviation ahead of your arrival so the car has ramp clearance and is waiting planeside, not at a general parking lot.",
      "Because private aviation timing is tighter than commercial, we track your tail number rather than a fixed time.",
    ],
    terminals: "Signature Flight Support and Atlantic Aviation FBOs.",
    waitPolicy: "Pickup is timed to your tail number, not a scheduled time — ground clearance is coordinated with your FBO in advance.",
    faqs: [
      { q: "Which FBOs do you serve at PWK?", a: "Signature Flight Support and Atlantic Aviation are the two main FBOs — tell dispatch which one when you book." },
      { q: "Do you track tail numbers at PWK?", a: "Yes — private and charter pickups are tracked by tail number so timing adjusts automatically." },
      { q: "Can the car meet planeside?", a: "Yes — with FBO ground clearance coordinated in advance, the chauffeur waits at the ramp rather than a general lot." },
      { q: "How much is a ride to PWK?", a: "$135 flat from downtown, including tolls, parking and gratuity." },
      { q: "Can you arrange a discreet, unbranded vehicle?", a: "Yes, on request — mention it when you book for a principal who prefers not to be met with a visible name board." },
    ],
  },
  {
    code: "DPA", name: "DuPage Airport", slug: "dupage", href: "/airports/dupage/",
    rate: "Custom quote", rateNote: "from the West suburbs", driveTime: "15–30 min from Naperville / Oak Brook",
    img: PHOTOS.privateJet[2],
    img2: PHOTOS.runway[0],
    body: [
      "DuPage Airport (DPA) in West Chicago serves private and charter aviation for the western suburbs, and is often the closer option than PWK or O'Hare for clients based in Naperville, Oak Brook or Wheaton.",
      "Coordination works the same as PWK: tail-number tracking and direct FBO coordination for a planeside pickup.",
    ],
    terminals: "DuPage Flight Center and other on-field FBOs.",
    waitPolicy: "Pickup timed to your tail number and coordinated with the FBO in advance.",
    faqs: [
      { q: "Is DuPage Airport closer than PWK for West suburb clients?", a: "Often, yes — DPA sits closer to Naperville, Oak Brook and Wheaton. Ask dispatch to compare drive times for your address." },
      { q: "How much does a DuPage Airport transfer cost?", a: "It's quoted based on your pickup point — call or text dispatch for a current rate." },
      { q: "Do you coordinate with the FBO in advance?", a: "Yes — the same tail-number and FBO-coordination process used at PWK applies at DPA." },
      { q: "What kind of flights use DPA?", a: "Mostly private and charter aviation for the western suburbs." },
      { q: "Can you provide ground transportation for a group?", a: "Yes — a Sprinter or SUV can meet a group landing together at DPA." },
    ],
  },
  {
    code: "MKE", name: "Milwaukee Mitchell International Airport", slug: "milwaukee-mitchell", href: "/airports/milwaukee-mitchell/",
    rate: "Custom quote", rateNote: "city-to-city rate", driveTime: "~90 min from downtown Chicago",
    img: PHOTOS.highway[1],
    img2: PHOTOS.highway[0],
    body: [
      "Some Chicago-area travelers connect through Milwaukee Mitchell (MKE) for fare or schedule reasons. We run this as a long-distance, city-to-city booking rather than a standard airport rate, given the roughly 90-minute drive up I-94.",
      "See the long-distance car service page for how round-trip and wait-and-return options work on this route.",
    ],
    terminals: "Single terminal.",
    waitPolicy: "Flight-tracked the same as our Chicago airports; wait time built into the long-distance quote.",
    faqs: [
      { q: "Do you charge a flat rate to Milwaukee?", a: "Yes, quoted as a long-distance city-to-city rate rather than a fixed airport rate — ask dispatch for a quote." },
      { q: "How long does the drive to MKE take?", a: "About 90 minutes from downtown Chicago via I-94, traffic dependent." },
      { q: "Do you track flights at Milwaukee Mitchell?", a: "Yes — the same flight-tracking process applies as our Chicago airports." },
      { q: "Can I book a same-day round trip to MKE?", a: "Yes — the chauffeur can wait and drive you back the same day, or you can book a separate return." },
      { q: "Why isn't there a flat rate listed for MKE?", a: "Because it's priced as a long-distance route rather than a local airport transfer — dispatch will confirm an exact quote for your pickup point." },
    ],
  },
  {
    code: "GYY", name: "Gary/Chicago International Airport", slug: "gary", href: "/airports/gary/",
    rate: "Custom quote", rateNote: "from Chicago or the South suburbs", driveTime: "35–55 min from downtown",
    img: PHOTOS.runway[0],
    img2: PHOTOS.airportPickup[1],
    body: [
      "Gary/Chicago International (GYY) serves cargo, charter and a small amount of commercial traffic on the south side of the metro area. We quote this route on request — it's a lower-volume airport for us than O'Hare, Midway or PWK, but fully covered.",
    ],
    terminals: "Single terminal / general aviation ramp.",
    waitPolicy: "Quoted individually based on flight type — contact dispatch for details.",
    faqs: [
      { q: "Do you regularly serve Gary/Chicago Airport?", a: "Yes, on request — it's a lower-volume route for us, so call or text ahead to confirm availability." },
      { q: "How far is GYY from downtown Chicago?", a: "About 35–55 minutes depending on traffic and your exact pickup point." },
      { q: "Do you serve charter flights at GYY?", a: "Yes — charter and general aviation traffic is covered on request." },
      { q: "Is pricing flat for Gary Airport?", a: "It's quoted individually based on flight type and pickup point rather than a fixed flat rate." },
      { q: "How far ahead should I book for GYY?", a: "A day or two of notice helps us confirm availability, since it's a lower-volume route for us." },
    ],
  },
  {
    code: "RFD", name: "Chicago Rockford International Airport", slug: "rockford", href: "/airports/rockford/",
    rate: "Custom quote", rateNote: "long-distance rate", driveTime: "~75 min from downtown Chicago",
    img: PHOTOS.runway[1],
    img2: PHOTOS.airportPickup[2],
    body: [
      "Rockford (RFD) is a longer-distance pickup, about 75 minutes from downtown, and mostly booked for cargo-adjacent charter and cost-conscious commercial connections. We run it as a long-distance quote rather than a standard flat rate — contact dispatch for pricing.",
    ],
    terminals: "Single passenger terminal.",
    waitPolicy: "Quoted individually — contact dispatch ahead of your flight.",
    faqs: [
      { q: "How far is Rockford Airport from Chicago?", a: "About 75 minutes from downtown depending on traffic on I-90." },
      { q: "Is there a flat rate to Rockford?", a: "It's priced as a long-distance route rather than a fixed flat rate — contact dispatch for a current quote." },
      { q: "Do you track flights at RFD?", a: "Yes — the same flight-tracking process applies as our other airports." },
      { q: "Can I book a round trip to Rockford?", a: "Yes — wait-and-return or a separately booked return are both available." },
      { q: "Why do people fly out of Rockford instead of O'Hare?", a: "Often for cost-conscious commercial connections or cargo-adjacent charter — we cover the ground transportation either way." },
    ],
  },
];

// ---------- Fleet landing pages (hub + 6 spokes) ----------
export const fleetPages = [
  {
    slug: "luxury-sedan", href: "/fleet/luxury-sedan/", title: "Luxury Sedan",
    models: "Cadillac XTS · Lincoln MKZ", capacity: "1–3 passengers, 2 bags", img: PHOTOS.sedan[1], rate: "Airport from $85", hourlyRate: "$95/hr",
    bestFor: ["Airport transfers and business travel", "Point-to-point trips downtown", "Anyone traveling solo or as a pair"],
    body: "Our most-booked vehicle — a Cadillac XTS or Lincoln MKZ, professionally driven, for airport runs, downtown meetings and point-to-point trips. Comfortable for up to three passengers with two standard bags.",
    services: [["Airport transfers", "/airport-car-service/"], ["Point to point", "/point-to-point/"]],
    faqs: [
      { q: "How many bags fit in a luxury sedan?", a: "Two standard checked bags plus carry-ons comfortably — let dispatch know if you have more, and we'll suggest an SUV instead." },
      { q: "Is the luxury sedan the cheapest option?", a: "It's our standard-rate vehicle, yes — SUVs, Sprinters and stretch limos are priced above it based on size and use case." },
      { q: "Can I request a specific model?", a: "We'll do our best based on availability, but any luxury sedan booking guarantees the class, not a specific model." },
    ],
  },
  {
    slug: "luxury-suv", href: "/fleet/luxury-suv/", title: "Luxury SUV",
    models: "Cadillac XT5 · Lincoln Nautilus · Chevrolet Suburban · Lincoln Navigator", capacity: "Up to 6 passengers, 6 bags", img: PHOTOS.suv[0], rate: "Quoted at booking", hourlyRate: "$95/hr",
    bestFor: ["Families with extra luggage", "Groups of up to six", "Winter weather and airport runs"],
    body: "Midsize through full-size SUVs for groups, families and extra luggage — from a Cadillac XT5 up to a Chevrolet Suburban or Lincoln Navigator. Higher ground clearance makes these the preferred choice for winter airport runs.",
    services: [["Airport transfers", "/airport-car-service/"], ["Event transportation", "/event-transportation/"]],
    faqs: [
      { q: "What's the difference between the SUV sizes?", a: "Midsize SUVs seat up to 4, full-size and premium models up to 6 — tell dispatch your group size and we'll match the right one." },
      { q: "Are these good for winter driving?", a: "Yes — higher ground clearance and available all-wheel drive make SUVs the preferred choice for winter airport runs." },
      { q: "Can a luxury SUV fit a car seat and luggage?", a: "Yes — there's enough room for a fitted car seat plus standard luggage for the rest of the group." },
    ],
  },
  {
    slug: "mercedes-s-class", href: "/fleet/mercedes-s-class/", title: "Mercedes S-Class",
    models: "Mercedes-Benz S-Class · E-Class", capacity: "1–3 passengers, 3 bags", img: PHOTOS.mercedes[0], rate: "Quoted at booking", hourlyRate: "$95/hr",
    bestFor: ["VIP and first-class clients", "Executive corporate travel", "Clients who want the top of the fleet"],
    body: "The top of our fleet for clients who want it: a Mercedes-Benz S-Class or E-Class, reserved for VIP airport transfers, executive corporate travel and first-class occasions.",
    services: [["Corporate travel", "/corporate-car-service/"], ["Private jet transfers", "/private-jet-transfers/"]],
    faqs: [
      { q: "Is the S-Class available for airport transfers?", a: "Yes — it's a popular choice for VIP and executive airport pickups, priced above our standard sedan." },
      { q: "What comes with an S-Class booking?", a: "The same vetted chauffeur, flat-rate pricing and dispatch support as every other booking, in our top-tier vehicle." },
      { q: "Can I book the S-Class for a corporate account?", a: "Yes — it's a common request for VIP client visits and executive travel under corporate accounts." },
    ],
  },
  {
    slug: "sprinter-van", href: "/fleet/sprinter-van/", title: "Mercedes Sprinter Van",
    models: "Mercedes-Benz Sprinter — executive and passenger layouts", capacity: "Up to 14 passengers, 14 bags", img: PHOTOS.sprinter[0], rate: "Quoted at booking", hourlyRate: "$95/hr",
    bestFor: ["Groups and roadshows", "Convention and event shuttles", "Airport runs for larger parties"],
    body: "A Mercedes Sprinter in executive or standard passenger layout, seating up to 14 with matching luggage capacity — our go-to for roadshows, convention shuttles and larger group airport runs.",
    services: [["Roadshow transportation", "/roadshow-transportation/"], ["Convention transportation", "/convention-transportation/"]],
    faqs: [
      { q: "What's the difference between executive and passenger layout?", a: "Executive layout has fewer, more spacious captain's seats for corporate groups; passenger layout maximizes seating up to 14." },
      { q: "Can a Sprinter handle an airport run for a large group?", a: "Yes — it's a common choice when a group lands together and needs to travel as one." },
      { q: "Is the Sprinter good for multi-day bookings?", a: "Yes — it's frequently booked for the full length of a roadshow or convention." },
    ],
  },
  {
    slug: "stretch-limo", href: "/fleet/stretch-limo/", title: "Stretch Limo",
    models: "Stretch limousine", capacity: "Up to 10 passengers", img: PHOTOS.limo[1], rate: "Quoted at booking", hourlyRate: "$95/hr",
    bestFor: ["Weddings", "Proms", "Milestone celebrations"],
    body: "A classic stretch limousine for weddings, proms and milestone celebrations, seating up to 10. Book early for wedding season and prom weekends — these fill first.",
    services: [["Wedding car service", "/wedding-car-service/"], ["Prom limo", "/prom-limo/"]],
    faqs: [
      { q: "How far ahead should I book a stretch limo?", a: "As early as possible — wedding season and prom weekends book out fastest, sometimes months in advance." },
      { q: "How many people fit in the stretch limo?", a: "Up to 10 passengers comfortably." },
      { q: "Is the stretch limo available for occasions besides weddings and proms?", a: "Yes — milestone birthdays and other celebrations book it too, subject to availability." },
    ],
  },
  {
    slug: "minibus", href: "/fleet/minibus/", title: "Minibus / Coach",
    models: "Minibus and coach", capacity: "20–55 passengers", img: PHOTOS.minibus[0], rate: "Quoted at booking", hourlyRate: "$95/hr",
    bestFor: ["Conventions and corporate groups", "Large wedding or event guest shuttles", "Multi-day group bookings"],
    body: "A minibus or coach for the largest groups — convention delegations, corporate outings and wedding guest shuttles from 20 up to 55 passengers, available for single trips or multi-day bookings.",
    services: [["Convention transportation", "/convention-transportation/"], ["Roadshow transportation", "/roadshow-transportation/"]],
    faqs: [
      { q: "What's the largest group you can move at once?", a: "Up to 55 passengers in our largest coach." },
      { q: "Can I book a minibus for a single day only?", a: "Yes — single-day and multi-day bookings are both available." },
      { q: "Is a minibus good for wedding guest shuttles?", a: "Yes — it's a common choice for shuttling a large guest list between a hotel block and the venue." },
    ],
  },
];
