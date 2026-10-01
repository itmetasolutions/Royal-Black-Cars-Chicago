// The hub pages (services, airports, fleet, service areas, venues, blog,
// quote) had no CMS record at all — every heading and lead was hardcoded in
// the page. These are those strings, now the fallback behind a core page
// record of the same key, so each one is editable in the admin.
import { PHOTOS } from "./data.js";

export const pageDefaults = {
  services: {
    heroEyebrow: "SERVICES",
    heroTitle: "Every way to book a black car in Chicago",
    heroLead: "From a single airport run to a multi-day corporate roadshow, one flat rate agreed before you ride.",
    heroImg: "",
    fact1Title: "Flat rate", fact1Note: "Agreed before you ride",
    fact2Title: "Licensed & insured", fact2Note: "Every vehicle, every trip",
    fact3Title: "24/7 dispatch", fact3Note: "Book any hour, day or night",
    fact4Title: "No surge, ever", fact4Note: "Same price no matter the hour",
    featuredEyebrow: "MOST BOOKED",
    featuredCtaLabel: "See airport rates & details",
    cat1Heading: "Airport & ground transportation",
    cat2Heading: "Business & corporate",
    cat3Heading: "Private aviation",
    cat4Heading: "Occasions & events",
    moreEyebrow: "MORE SERVICES",
    moreHeading: "Newly added",
    ctaImg: PHOTOS.sedan[2],
    ctaHeading: "", ctaText: "",
  },

  airports: {
    heroEyebrow: "AIRPORTS",
    heroTitle: "Every Chicago-area airport, one dispatch desk",
    heroLead: "Commercial, private and regional — flights tracked, chauffeurs briefed on the right terminal or FBO.",
    heroImg: "",
    flatEyebrow: "FLAT-RATE AIRPORTS",
    flatHeading: "Published rates, no need to call",
    regionalEyebrow: "REGIONAL & PRIVATE AVIATION",
    regionalHeading: "Quoted by pickup point",
    ctaImg: PHOTOS.runway[2],
    ctaHeading: "", ctaText: "",
  },

  fleet: {
    heroEyebrow: "FLEET",
    heroTitle: "Pick your class",
    heroLead: "Late-model sedans, SUVs, Sprinters, a limousine and a mini coach — sized to your trip, not the other way around.",
    heroImg: "",
    noteText: "Not sure which class fits your trip? Dispatch will ask a few questions about group size, luggage and occasion, then recommend the right vehicle — you're never upsold into more than you need.",
    ctaImg: PHOTOS.suv[0],
    ctaHeading: "", ctaText: "",
  },

  "service-areas": {
    heroEyebrow: "SERVICE AREAS",
    heroTitle: "Chicago, the collar counties and beyond",
    heroLead: "Daily service across the city and suburbs, plus scheduled long-distance runs to Milwaukee, Madison, Indianapolis, South Bend and Detroit.",
    heroImg: "",
    routesEyebrow: "CITY TO CITY",
    routesHeading: "Long-distance routes, run regularly",
    venuesEyebrow: "VENUES",
    venuesHeading: "Arenas, stadiums and convention halls",
    ctaImg: PHOTOS.suburbGeneric[2],
    ctaHeading: "", ctaText: "",
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
    standardHeading: "What that promise looks like ride to ride",
    moreEyebrow: "MORE ABOUT US",
    moreHeading: "Approach, coverage and corporate accounts",
  },

  contact: {
    introEyebrow: "GET IN TOUCH",
    formHeading: "Send a message",
    whyEyebrow: "WHY CLIENTS CALL US",
    whyHeading: "Every trip, the same standard",
  },

  rates: {
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
