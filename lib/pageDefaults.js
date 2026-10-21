// The hub pages (services, airports, fleet, service areas, venues, blog,
// quote) had no CMS record at all — every heading and lead was hardcoded in
// the page. These are those strings, now the fallback behind a core page
// record of the same key, so each one is editable in the admin.
import { PHOTOS } from "./data.js";

export const pageDefaults = {
  services: {
    heroEyebrow: "OUR SERVICES",
    heroTitle: "Premium Chicago Black Car & Limo Services",
    heroLead: "Royal Black Car Chicago offers the best limo service in Chicago, any time of day, for airport transfers, corporate travel and special occasions like weddings. We have a presence throughout the city and its suburbs, running not only in downtown Chicago but across Illinois and into neighboring states.",
    heroImg: "",
    fact1Title: "Flat rate", fact1Note: "Agreed before you ride",
    fact2Title: "Licensed & insured", fact2Note: "Every vehicle, every trip",
    fact3Title: "24/7 dispatch", fact3Note: "Book any hour, day or night",
    fact4Title: "No surge, ever", fact4Note: "Same price no matter the hour",
    featuredSlug: "airport-car-service",
    featuredEyebrow: "MOST BOOKED",
    featuredCtaLabel: "See airport rates & details",
    cat1Heading: "Airport & ground transportation",
    cat2Heading: "Business & corporate",
    cat3Heading: "Private aviation",
    cat4Heading: "Occasions & events",
    moreEyebrow: "MORE SERVICES",
    moreHeading: "Newly added",
    ctaImg: PHOTOS.sedan[2],
    ctaHeading: "Planning your next ride?",
    ctaText: "Call Royal Black Car Chicago or get a free quote in minutes. Our chauffeurs are available 24/7 to meet your traveling requirements and expectations.",
  },

  airports: {
    heroEyebrow: "AIRPORT TRANSPORTATION",
    heroTitle: "Premium Chicago Airport Transportation",
    heroLead: "Your journey is much more convenient when ground transportation is arranged before you land. Royal Black Car Chicago offers the best airport transportation for your arrival or departure from O'Hare, Midway, and every other airport in and around Chicago.",
    heroImg: "",
    flatEyebrow: "FLAT-RATE AIRPORTS",
    flatHeading: "Published rates, no need to call",
    regionalEyebrow: "REGIONAL & PRIVATE AVIATION",
    regionalHeading: "Quoted by pickup point",
    optionsEyebrow: "AIRPORT TRANSPORTATION OPTIONS",
    optionsHeading: "O'Hare, Midway and private aviation",
    ohareHeading: "O'Hare International Airport Transportation",
    ohareText: "Schedule your airport transfer from O'Hare to anywhere in the city, the suburbs, your office, hotel or residence, or a regional city or town. O'Hare transportation covers both arrivals and departures, booked in advance against your flight schedule.",
    midwayHeading: "Midway International Airport Transportation",
    midwayText: "We provide airport limo service from Midway International Airport. Whether you're headed downtown, to the suburbs, or anywhere else, an advance airport transportation booking gets you a more comfortable ride than a taxi or rideshare.",
    privateHeading: "Private Aviation & FBO Transfers",
    privateText: "Private aviation transfers offer comfortable ground transportation between FBOs, private terminals, your office, hotel, residence, or any other location of your choice — built to keep your ground itinerary easy and discreet.",
    experienceEyebrow: "HOW IT WORKS",
    experienceHeading: "Your airport pickup and drop-off",
    pickupHeading: "Airport Pickup Experience",
    pickupText: "Share your flight details, pickup location, group size, luggage count and destination at booking, and we'll match you with the right car and pickup arrangement. Add meet-and-greet service and your chauffeur will meet you at the chosen spot with a name board, taking your luggage from you at baggage claim.",
    dropoffHeading: "Airport Drop-Offs",
    dropoffText: "On departure, plan your pickup time around your flight and the estimated travel time. Reservations are built around your starting point, the airport, the terminal and your desired pickup time.",
    vehicleHeading: "Choose the Right Airport Vehicle",
    vehicleText: "Luxury Sedan: perfect for an individual, couple or small group with normal luggage. Executive Sedan: a classy choice for corporate travel and business trips. Luxury or Executive SUV: more space for families or small groups. Sprinter: a practical choice for large groups and more luggage.",
    regionalTransferHeading: "Airport-to-Airport & Regional Transfers",
    regionalTransferText: "Our limo services can also be arranged between different airports, and from Chicago-area airports to other cities.",
    ctaImg: PHOTOS.runway[2],
    ctaHeading: "Need a ride to the airport?",
    ctaText: "Looking for a ride to or from O'Hare, Midway, or a private aviation facility? Contact Royal Black Car Chicago with your flight and destination details.",
  },

  fleet: {
    heroEyebrow: "OUR FLEET",
    heroTitle: "A Chicago Black Car Fleet Built Around Your Travel Needs",
    heroLead: "An excellent choice of car ensures a smooth, comfortable ride. Royal Black Car Chicago offers a variety of luxury sedans, executive cars, black SUVs, Sprinter vans, a stretch limousine and a party bus for travel, fun or anything in between, sized to how many people are traveling and how much luggage they're bringing.",
    heroImg: "",
    noteText: "Not sure which class fits your trip? Dispatch will ask a few questions about group size, luggage and occasion, then recommend the right vehicle — you're never upsold into more than you need.",
    guideHeading: "Choose the Right Vehicle",
    guideItems: [
      "1–3 persons | Luxury Sedan or Executive Sedan",
      "Family or small groups | Luxury SUV or Executive SUV",
      "Large groups | Shuttle Sprinter or Executive Mercedes Sprinter",
      "Special events | Stretch Limousine",
      "Large events & groups | Mini Coach or Party Bus",
    ],
    ctaImg: PHOTOS.suv[0],
    ctaHeading: "Not sure which car to book?",
    ctaText: "Let us know how many passengers you have, how much luggage you're bringing, and where you're headed, and we'll recommend the best vehicle for you.",
  },

  "service-areas": {
    heroEyebrow: "SERVICE AREAS",
    heroTitle: "Chicago Black Car Service Areas",
    heroLead: "Royal Black Car Chicago offers a luxury transportation experience across the city, the suburbs and neighboring states. Whatever you need — an airport transfer, a city-to-city transfer, a wedding, an event, hourly chauffeur service, or group transportation — we cover it, to and from the area of your choice.",
    heroImg: "",
    cluster1Img: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1400&q=70",
    cluster1Eyebrow: "CLUSTER 1 OF 4",
    cluster1Heading: "Downtown",
    cluster1Text: "Premium black car service throughout Downtown Chicago for airport transfers, corporate travel, events, residential pickups and point-to-point transportation. Chicago limo service, private car service and professional chauffeurs for travelers, executives and groups throughout River North, the West Loop, Lincoln Park, the Gold Coast, the Magnificent Mile and Millennium Park.",
    cluster1Pills: [
      ["The Loop", "/service-areas/the-loop/"],
      ["River North", "/service-areas/river-north/"],
      ["Gold Coast", "/service-areas/gold-coast/"],
      ["Streeterville", "/service-areas/streeterville/"],
      ["West Loop / Fulton Market", "/service-areas/west-loop-/-fulton-market/"],
      ["Lincoln Park", "/service-areas/lincoln-park/"],
      ["Magnificent Mile", "/service-areas/magnificent-mile/"],
    ],
    cluster1CtaLabel: "View all Downtown areas",
    cluster1CtaHref: "/service-areas/downtown/",
    cluster2Img: "https://images.unsplash.com/photo-1553545894-cf4d7f2bf8ac?auto=format&fit=crop&w=1400&q=70",
    cluster2Eyebrow: "CLUSTER 2 OF 4",
    cluster2Heading: "Northwest suburbs",
    cluster2Text: "Luxury transportation and private car service throughout the Northwest Suburbs for airport transfers, corporate travel, events, residential pickups and point-to-point service. Executive transportation designed for clients who want comfortable, reliable, professional travel throughout the Chicago suburbs and surrounding Chicagoland communities.",
    cluster2Pills: [
      ["Rosemont", "/service-areas/rosemont/"],
      ["Schaumburg", "/service-areas/schaumburg/"],
      ["Arlington Heights", "/service-areas/arlington-heights/"],
      ["Palatine", "/service-areas/palatine/"],
      ["Hoffman Estates", "/service-areas/hoffman-estates/"],
      ["Des Plaines", "/service-areas/des-plaines/"],
    ],
    cluster2CtaLabel: "View all Northwest suburbs areas",
    cluster2CtaHref: "/service-areas/northwest-suburbs/",
    cluster3Img: "https://images.unsplash.com/photo-1581278478776-8fc201297029?auto=format&fit=crop&w=1400&q=70",
    cluster3Eyebrow: "CLUSTER 3 OF 4",
    cluster3Heading: "West suburbs",
    cluster3Text: "Black car service throughout the Western Suburbs for airport transfers, corporate travel, events, residential pickups and point-to-point transportation. From corporate transportation to private chauffeur and luxury car service, comfortable transportation for business travel, unique events and everyday travel needs.",
    cluster3Pills: [
      ["Naperville", "/service-areas/naperville/"],
      ["Oak Brook", "/service-areas/oak-brook/"],
      ["Hinsdale", "/service-areas/hinsdale/"],
      ["Downers Grove", "/service-areas/downers-grove/"],
      ["Wheaton", "/service-areas/wheaton/"],
      ["Aurora", "/service-areas/aurora/"],
      ["Lombard", "/service-areas/lombard/"],
    ],
    cluster3CtaLabel: "View all West suburbs areas",
    cluster3CtaHref: "/service-areas/west-suburbs/",
    cluster4Img: "https://images.unsplash.com/photo-1591628996689-a20ea1ae1ad3?auto=format&fit=crop&w=1400&q=70",
    cluster4Eyebrow: "CLUSTER 4 OF 4",
    cluster4Heading: "North Shore",
    cluster4Text: "Serving the North Shore for airport transfers, corporate travel, events, residential pickups and point-to-point service. Whether you need executive airport transfers, a private chauffeur for a full day, or group transportation, our professional chauffeurs provide a refined, comfortable travel experience.",
    cluster4Pills: [
      ["Evanston", "/service-areas/evanston/"],
      ["Lake Forest", "/service-areas/lake-forest/"],
      ["Highland Park", "/service-areas/highland-park/"],
      ["Wilmette", "/service-areas/wilmette/"],
      ["Winnetka", "/service-areas/winnetka/"],
      ["Glenview", "/service-areas/glenview/"],
      ["Northbrook", "/service-areas/northbrook/"],
    ],
    cluster4CtaLabel: "View all North Shore areas",
    cluster4CtaHref: "/service-areas/north-shore/",
    airportsEyebrow: "AIRPORTS WE SERVE",
    airportsHeading: "Chicago airport transportation",
    airportsLead: "Airport limo service for arrivals and departures to and from O'Hare, Midway, Chicago Executive, DuPage, Milwaukee Mitchell, Gary/Chicago and Rockford — built for business travelers, families and groups.",
    venuesEyebrow: "VENUES",
    venuesHeading: "Chicago Venues & Event Destinations",
    venuesLead: "Let us handle your game-day transportation. We offer limousine service for families, friends, groups and individuals, always on time and in style — book hourly chauffeur service, point-to-point, or group transportation.",
    routesEyebrow: "LONG-DISTANCE & REGIONAL",
    routesHeading: "City-to-city routes, run regularly",
    ctaImg: PHOTOS.suburbGeneric[2],
    ctaHeading: "Planning a long-distance trip?",
    ctaText: "Not sure about long-distance limo service? Call Royal Black Car Chicago with your pickup and drop-off locations, and we'll make sure you get where you need to be.",
  },

  venues: {
    heroEyebrow: "VENUES",
    heroTitle: "Arena nights, without the parking",
    heroLead: "Dropped at the closest open gate, picked up when the event actually ends — not a fixed time that assumes it runs on schedule.",
    heroImg: "",
    ctaImg: "", ctaHeading: "", ctaText: "",
  },

  blog: {
    heroEyebrow: "BLOG",
    heroTitle: "Guides for getting around Chicago",
    heroImg: PHOTOS.chauffeur[0],
  },


  // Pages that already had a record but still hardcoded their section
  // headings. Only the headings live here; their body content stays in the
  // existing per-page fields.
  about: {
    whatWeDoEyebrow: "WHAT WE DO",
    standardEyebrow: "OUR STANDARD",
    standardHeading: "Why Choose Royal Black Car Chicago?",
    standardLead: "High-quality black car service isn't only about the cars. It's about transportation that fits the client's lifestyle and expectations. We provide professional service and multiple types of transportation to satisfy clients' needs in both travel and leisure.",
    moreEyebrow: "MORE ABOUT US",
    moreHeading: "Approach, coverage and corporate accounts",
    ctaHeading: "Wondering about your upcoming trip?",
    ctaText: "Contact Royal Black Car Chicago to talk about your transportation requirements and get a quotation instantly.",
  },

  contact: {
    heroTitle: "Talk to dispatch",
    heroLead: "Phone, text or email — dispatch answers around the clock, or send a message below and a dispatcher replies within minutes during business hours.",
    introEyebrow: "GET IN TOUCH",
    introHeading: "Reach a real person, any hour",
    formHeading: "Send a message",
    officeNote: "Serving Chicago and the suburbs — no walk-in storefront; dispatch and bookings are handled by phone, text and online.",
    whyEyebrow: "WHY CLIENTS CALL US",
    whyHeading: "Every trip, the same standard",
  },

  faq: {
    heroTitle: "Questions riders ask",
    heroLead: "Pricing, booking, flight delays, child seats, corporate billing and service areas — the answers riders ask for most.",
  },

  rates: {
    heroTitle: "One flat rate, agreed before you ride",
    heroLead: "No meter, no surge, no hidden fees — your rate is confirmed before the chauffeur is dispatched, and it doesn't change once you're on the road.",
    flatEyebrow: "FLAT AIRPORT RATES",
    flatHeading: "From downtown, in a luxury sedan",
    includedEyebrow: "WHAT'S INCLUDED",
    includedHeading: "Every quoted rate already includes",
    byClassHeading: "By vehicle class",
    otherEyebrow: "OTHER PRICING",
    otherHeading: "Beyond a flat airport rate",
    howEyebrow: "HOW YOUR RATE IS SET",
    howHeading: "Four inputs, one number — before you book",
  },

  "corporate-accounts": {
    heroTitle: "An account your finance team will accept",
    heroLead: "Monthly invoicing, a named dispatcher and NDA-signed chauffeurs — built for companies with recurring travel, not a one-off ride.",
    includedEyebrow: "WHAT'S INCLUDED",
    detailsEyebrow: "THE DETAILS",
    detailsHeading: "How a corporate account works",
    startedEyebrow: "GETTING STARTED",
    startedHeading: "Set up in four steps",
    worthEyebrow: "WHY IT'S WORTH SETTING UP",
    worthHeading: "Expensing rides vs. a corporate account",
    withoutHeading: "Without an account",
    withHeading: "With a corporate account",
  },

  "get-a-quote": {
    heroEyebrow: "GET A QUOTE",
    heroTitle: "Get your free, flat-rate quote",
    heroLead: "Tell us about your trip and a dispatcher confirms your rate — no obligation, no surprise charges later.",
    heroImg: "",
    formHeading: "One form, a rate within minutes",
    formText: "Give dispatch the details of your trip — pickup, drop-off, date and vehicle — and you'll hear back with a confirmed flat rate, usually within a few minutes during business hours. There's no charge and no obligation to book.",
  },
};

// Same contract as homeField: an unset or emptied CMS value falls back to the
// shipped copy, so clearing a field in the admin never blanks a section.
export function pageField(key, page, name) {
  const v = page?.[name];
  if (v === undefined || v === null || v === "") return pageDefaults[key]?.[name];
  if (Array.isArray(v) && v.length === 0) return pageDefaults[key]?.[name];
  return v;
}

// Convenience for a page that only reads its own key.
export const fieldsFor = (key, page) => (name) => pageField(key, page, name);
