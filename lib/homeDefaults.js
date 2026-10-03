// Every piece of copy the home page sections used to hardcode, in one place.
// The components fall back to these when the CMS has no value, and the seed
// writes them into the `home` core page so the admin starts fully populated
// with exactly what is live today.
import { IMG, PHOTOS, faqs } from "./data.js";

export const homeDefaults = {
  // Hero
  heroImg: IMG.hero,
  heroVideo: "/video/hero-motion.mp4",
  heroLine1: "Chicago's black car",
  heroLine2: "service, priced",
  heroLine3: "before you ride.",
  heroLead:
    "Vetted chauffeurs, late-model sedans and SUVs, flights tracked in real time. One flat rate agreed up front — no surge, no surprises.",

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
    "Choose Royal Black Cars Chicago for airport transfers, corporate travel, meetings, special events, sporting events, weddings, night outs and point-to-point trips throughout Chicago and the surrounding suburbs.",
    "From your first pickup to your final drop off, every detail is handled with care.",
  ],

  // Services grid
  servicesEyebrow: "WHAT WE DRIVE YOU TO",
  // Which pages the grid features. The card content itself comes from each
  // service page, so editing a service updates its card everywhere.
  serviceCardSlugs: [
    "airport-car-service", "corporate-car-service", "hourly-chauffeur",
    "private-jet-transfers", "event-transportation", "wedding-car-service",
  ],
  servicesHeading: "Six ways riders use us",
  servicesDescription:
    "Every way we drive Chicago — airport runs, corporate travel, events and hourly work, all at a flat rate agreed before you ride.",

  // Airport split
  airportImg: IMG.airport,
  airportImgAlt: "Chauffeur meeting a client at O'Hare International Airport",
  airportBadgeLabel: "O'Hare from downtown",
  airportBadgeValue: "$95 flat",
  airportTileSlugs: ["ohare", "midway", "chicago-executive-pwk"],
  airportEyebrow: "AIRPORTS",
  airportHeading: "Land, walk out, drive off",
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
  fleetEyebrow: "THE FLEET",
  fleetHeading: "Pick your class",
  // The vehicles themselves come from the Fleet pages in the admin, so only
  // the section's own copy lives here.

  // Child seats
  childImg: "/images/car-seats.png",
  childEyebrow: "FAMILY TRAVEL",
  childHeading: "Child seats, fitted and checked",
  childLead:
    "Add a seat when you book and it is installed before the car reaches you. First seat is free on every ride.",
  childSeats: [
    { name: "Infant seat", detail: "rear-facing, up to 35 lb" },
    { name: "Toddler seat", detail: "forward-facing, 20 to 65 lb" },
    { name: "Booster seat", detail: "40 to 100 lb" },
  ],

  // Corporate
  corporateImg: IMG.corporate,
  corporateEyebrow: "FOR BUSINESS",
  corporateHeading: "An account your finance team will accept",
  corporateLead:
    "One login for the whole company, invoices with cost centres, and a dispatcher who knows your executives by name.",
  corporateCtaLabel: "Open an account",
  corporateCtaHref: "/corporate-accounts/",
  corporatePoints: [
    "Monthly invoicing with cost centres and trip codes",
    "Multi-car roadshows handled by one named dispatcher",
    "NDA-signed chauffeurs for client-facing travel",
  ],

  // Service areas band
  areasImg: IMG.areaMap,
  areasEyebrow: "SERVICE AREA",
  areasHeading: "Downtown, the suburbs and every major venue",
  areasLead:
    "We run Chicago and the collar counties daily, plus long-distance runs to Milwaukee, Madison, South Bend and Indianapolis.",
  areasStatLabel: "Average pick-up window",
  areasStatValue: "12 minutes",

  // Venues strip
  venuesEyebrow: "GAME DAYS & EVENT NIGHTS",
  venuesHeading: "Dropped at the gate, picked up after the final horn",
  venuesDescription:
    "Tell dispatch your event and seating section when you book. We stage your car at the closest legal drop-off, then pick you up as the event actually ends.",
  venuesLinkLabel: "All venues",
  venuesFeatured: ["Wrigley Field", "Soldier Field", "United Center", "Guaranteed Rate Field", "McCormick Place"],

  // FAQ
  faqEyebrow: "GOOD TO KNOW",
  faqHeading: "Questions riders ask",
  faqAsideHeading: "Still unsure?",
  faqAsideText: "Dispatch answers in under a minute, day or night, and can quote a trip on the phone.",
  faqs: faqs.map((f) => ({ q: f.q, a: f.a })),

  // Closing CTA
  ctaImg: PHOTOS.chauffeur[0],
  ctaHeading: "Your car is one minute away",
  ctaText: "Get a flat rate online, or speak to a dispatcher at any hour.",
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
