// Every piece of copy the home page sections use, in one place.
// The components fall back to these when the CMS has no value, and the
// database `home` page is written from here so the admin is pre-filled.
import { IMG, PHOTOS } from "./data.js";

export const homeDefaults = {
  // Hero
  heroImg: IMG.hero,
  heroVideo: "/video/hero-motion.mp4",
  heroLine1: "Experience luxury Transportation",
  heroLine2: "with Royal Black Cars Chicago",
  heroLine3: "for Every Chicago Journey.",
  heroLead:
    "Travel in a luxury vehicle with a professional chauffeur who puts your comfort and schedule first. From O'Hare Airport and Midway Airport to Downtown Chicago, the Loop, Gold Coast, Magnificent Mile, and Chicago suburbs, our Professional Black Car Service delivers a polished transportation experience from pickup to drop-off.",
  heroTagline: "Luxury vehicles. Experienced chauffeurs. Personalized service.",

  // Marquee strip under the hero
  marqueeItems: [
    "Flat rate agreed before you ride",
    "Licensed & insured in Illinois",
    "Every flight tracked",
    "Dispatch answers 24/7",
    "NLA member operator",
    "No surge pricing, ever",
  ],

  // Brand statement under the hero
  introEyebrow: "PREMIUM BLACK LIMO TRANSPORTATION",
  introHeading: "A More Refined Way to Get Around Chicago",
  introLead: "Transportation should be more than simply getting from one address to another.",
  introBody: [
    "Our Chicago Black Car Service is designed for passengers who value a clean, comfortable vehicle, professional service, privacy, and a smooth travel experience.",
    "Choose Royal black Cars Chicago for airport transfers, corporate travel, meetings, special events, sporting events, weddings, night outs and point-to-point trips throughout Chicago and the surrounding suburbs.",
    "From your first pickup to your final drop off, every detail is handled with care.",
  ],

  // Services grid
  servicesEyebrow: "OUR SERVICES",
  // Which pages the grid features. The card text comes from each service page
  // (its card text field), so editing a service updates its card everywhere.
  serviceCardSlugs: [
    "airport-car-service", "corporate-car-service", "black-car-service",
    "point-to-point", "hourly-chauffeur", "wedding-car-service",
  ],
  servicesHeading: "Chicago Limo Services for Business Travel & Special Occasions",
  servicesDescription:
    "Every way we drive Chicago — airport runs, corporate travel, events and hourly work, all at a flat rate agreed before you ride.",

  // Airport split
  airportImg: IMG.airport,
  airportImgAlt: "Chauffeur meeting a client at O'Hare International Airport",
  airportBadgeLabel: "O'Hare from downtown",
  airportBadgeValue: "$95 flat",
  airportTabs: [
    {
      label: "O'HARE AIRPORT TRANSPORTATION",
      heading: "Reliable O'Hare Car Service from Pickup to Destination",
      text:
        "Flying into Chicago?\nOur O'Hare car service provides Luxury Ground Transportation between O'Hare International Airport and destinations throughout Chicago and the suburbs.\nWe can coordinate airport pickups using your flight information so your chauffeur can account for schedule changes and delays, so you walk out and your chauffeur is already waiting to welcome you.",
      ctaLabel: "O'Hare details & rates",
      ctaHref: "/airports/ohare/",
      image: PHOTOS.airportTerminal[0],
    },
    {
      label: "MIDWAY AIRPORT TRANSPORTATION",
      heading: "Midway Airport Car Service with a Private Chauffeur",
      text:
        "Our Midway Black Car Service provides comfortable private transportation between Midway International Airport and Chicago neighborhoods, Downtown Chicago, hotels, offices, and suburban destinations.\nWhether you are traveling to the Loop for business, heading to a hotel near the Magnificent Mile, or continuing to Naperville, Oak Brook, Schaumburg, or another suburb, your ride is prearranged around your itinerary.\nThe Stevenson Expressway (I-55) is commonly used for trips between Midway and central Chicago, although the actual route depends on traffic and destination.",
      ctaLabel: "Book Midway Airport Transportation",
      ctaHref: "/airports/midway/",
      image: PHOTOS.airportPickup[1],
    },
    {
      label: "CHICAGO EXECUTIVE AIRPORT",
      heading: "Private Aviation Transportation",
      text:
        "Flying privately through Chicago Executive Airport?\nOur Chicago Executive Airport car service connects PWK with Downtown Chicago and communities throughout the North Shore and surrounding suburbs.\nPrivate aviation passengers can arrange our Royal Black Cars to and from FBO facilities with a luxury vehicle selected according to passenger count and luggage requirements.\nPopular destinations include: Downtown Chicago, The Loop, Gold Coast, River North, Northbrook, Glenview, Deerfield, Schaumburg, Naperville, Oak Brook.",
      ctaLabel: "Chicago Executive details",
      ctaHref: "/airports/chicago-executive-pwk/",
      image: PHOTOS.airportPickup[2],
    },
  ],
  airportEyebrow: "AIRPORTS",
  airportHeading: "Land, walk out, drive off",
  airportSubheading: "",
  airportLead:
    "Your chauffeur watches the flight, parks, and meets you inside baggage claim with a name board. If the flight lands early, so does the car.",
  airportPoints: [
    "60 minutes of free wait time at ORD and MDW",
    "Tolls, parking, meet & greet and gratuity included",
    "Child seats fitted before pick-up, first seat free",
  ],
  airportMoreLabel: "All airports, including DuPage, Milwaukee and Gary",
  airportMoreHref: "/airports/",

  // Fleet slider
  fleetEyebrow: "OUR LUXURY FLEET",
  fleetHeading: "Choose the Vehicle That Fits Your Journey",
  fleetLead:
    "The right vehicle makes a difference. Whether you're traveling alone, bringing your family, meeting a client, or coordinating transportation for an entire group, our fleet offers different levels of space, comfort, and luxury.",
  // The vehicles themselves come from the Fleet pages in the admin.

  // Child seats (family transportation)
  childImg: "/images/car-seats.png",
  childEyebrow: "FAMILY TRANSPORTATION",
  childHeading: "Comfortable Travel for the Whole Family",
  childLead:
    "Travel with your little ones with confidence. Our infant, toddler, and booster car seats come pre-installed before pickup, so your family can enjoy a smooth, hassle-free airport transfer without the inconvenience of carrying or installing car seats at the terminal. Car seats can be requested when booking, and vehicle requirements according to passenger count.",
  childSeats: [
    { name: "Infant seat", detail: "rear-facing, up to 35 lb" },
    { name: "Toddler seat", detail: "forward-facing, 20 to 65 lb" },
    { name: "Booster seat", detail: "40 to 100 lb" },
  ],

  // Corporate
  corporateImg: IMG.corporate,
  corporateEyebrow: "CORPORATE TRAVEL",
  corporateHeading: "Transportation That Fits Your Business Schedule",
  corporateLead:
    "Business travelers need more than a vehicle. When you need sharp scheduling, professional chauffeurs, comfortable vehicles, and transportation that fits around meetings and changing destinations.",
  corporateCtaLabel: "Open an account",
  corporateCtaHref: "/corporate-accounts/",
  corporatePoints: [
    "Executive Travel — Private transportation for executives, managers, and visiting clients.",
    "Airport Transfers — Between O'Hare, Midway, Chicago Executive Airport, hotels, offices, and residences.",
    "Corporate Events — Group transportation for conferences, meetings, dinners, conventions, and company events.",
    "Roadshows — Efficient limo service between multiple meetings and locations throughout Chicago and the suburbs.",
    "Hourly Service — Keep a professional chauffeur and vehicle available throughout your business day.",
  ],

  // Service areas band
  areasImg: IMG.areaMap,
  areasEyebrow: "CHICAGO SERVICE AREAS",
  areasHeading: "Chicago & Surrounding Suburbs",
  areasLead:
    "Our luxury limo services connect major Chicago neighborhoods, business districts, airports, hotels, venues, and suburban communities.",
  areasStatLabel: "Average pick-up window",
  areasStatValue: "12 minutes",

  // Venues strip (sports & events)
  venuesEyebrow: "SPORTS & EVENTS",
  venuesHeading: "Your Event Starts Before You Reach the Venue",
  venuesDescription:
    "Chicago's sports and entertainment calendar brings thousands of visitors and local fans to venues throughout the city. Our Chicago Black Car Services provides the best best transportation experience to venues including:",
  venuesLinkLabel: "All venues",
  venuesFeatured: ["Wrigley Field", "Soldier Field", "United Center", "Guaranteed Rate Field", "McCormick Place"],

  // FAQ
  faqEyebrow: "FAQ",
  faqHeading: "Frequently Asked Questions",
  faqAsideHeading: "Still unsure?",
  faqAsideText: "Dispatch answers in under a minute, day or night, and can quote a trip on the phone.",
  faqs: [
    {
      q: "What areas do you serve?",
      a: "We provide black car service throughout Chicago and surrounding Chicagoland communities, including Downtown Chicago, the Loop, Gold Coast, Magnificent Mile, River North, Northbrook, Schaumburg, Naperville, Oak Brook, and many other areas.",
    },
    {
      q: "Do you offer Chicago black car service to O'Hare?",
      a: "Yes. Our Chicago black car service provides private transportation to and from O'Hare International Airport, including airport transfers to Downtown Chicago and surrounding suburbs.",
    },
    {
      q: "Do you provide Midway Airport transportation?",
      a: "Yes. Our Midway airport car service connects Midway with Downtown Chicago, Chicago neighborhoods, hotels, offices, residences, and suburban destinations.",
    },
    {
      q: "Do you offer Downtown Chicago car service?",
      a: "Yes. Our Downtown Chicago limo service serves the Loop, River North, Gold Coast, Magnificent Mile, Streeterville, West Loop, Lincoln Park, and surrounding areas.",
    },
    {
      q: "Can I book a luxury vehicle for a business meeting?",
      a: "Absolutely. Our executive car service is designed for business meetings, corporate travel, airport transfers, client transportation, and other professional trips.",
    },
    {
      q: "Do you offer hourly chauffeur service?",
      a: "Yes. Hourly chauffeur service is available for clients who need a vehicle for multiple stops, meetings, shopping, events, or extended travel.",
    },
    {
      q: "Do you provide group transportation?",
      a: "Yes. We offer group transportation with SUVs, Sprinter vans, stretch limousines, party buses, and other vehicles based on passenger count and trip requirements.",
    },
    {
      q: "Do you provide transportation for sporting events?",
      a: "Yes. Our sports transportation service can take passengers and groups to Wrigley Field, United Center, Soldier Field, Guaranteed Rate Field, and other Chicago-area venues.",
    },
    {
      q: "What is the standard gratuity?",
      a: "A 20% gratuity is added to the flat rate at the time of booking. You can adjust it based on your satisfaction with the service.",
    },
    {
      q: "Can you track my flight?",
      a: "Flight tracking can be used for airport reservations to help coordinate pickup timing when flights are delayed or arrive earlier than scheduled.",
    },
    {
      q: "Can I request a specific vehicle?",
      a: "Yes, your vehicle is selected on your preference, passenger count, luggage requirements, and reservation. You can request your preferred vehicle class when booking.",
    },
    {
      q: "Can I book transportation for someone else?",
      a: "Yes. You can arrange a private ride for a client, colleague, family member, guest, or another traveller.",
    },
  ],

  // Keyword phrases in the copy that link to their pages ("phrase | /url")
  keywordLinks: [
    "airport car service | /airport-car-service/",
    "O'Hare | /airports/ohare/",
    "Midway | /airports/midway/",
    "Chicago Executive | /airports/chicago-executive-pwk/",
    "corporate car service | /corporate-car-service/",
    "point-to-point | /point-to-point/",
    "hourly chauffeur | /hourly-chauffeur/",
    "wedding | /wedding-car-service/",
    "Downtown Chicago | /service-areas/",
    "Wrigley Field | /venues/wrigley-field/",
    "United Center | /venues/united-center/",
    "Soldier Field | /venues/soldier-field/",
  ],

  // Closing CTA
  ctaImg: PHOTOS.chauffeur[0],
  ctaHeading: "Your Destination Is Important. So Is the Journey.",
  ctaText:
    "Whether you're landing at O'Hare, leaving Midway, heading to a meeting in the Loop, visiting a client in Northbrook, traveling home to Naperville, attending a game at United Center, or celebrating a special occasion, make the journey part of the experience.\nChoose Royal black cars Chicago designed around comfort, style, and professional chauffeur service.\nTravel Privately. Arrive Comfortably. Ride in Style.",
};

// Returns the CMS value when the editor has set one, else the shipped default.
// Empty strings and empty arrays count as "not set" so clearing a field in the
// admin restores the default rather than blanking the section.
export function homeField(page, key) {
  const v = page?.[key];
  if (v === undefined || v === null || v === "") return homeDefaults[key];
  if (Array.isArray(v) && v.length === 0) return homeDefaults[key];
  return v;
}
