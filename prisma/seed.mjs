// One-time migration: copies the site's existing hardcoded content into the
// database so the admin CMS starts populated with everything that's live
// today. Safe to re-run — every write is an upsert keyed by slug/key.
import { PrismaClient } from "@prisma/client";
import {
  serviceDetails, airportDetails, fleetPages, faqsFull, PHOTOS, IMG,
  services as homeServiceCards, airports as homeAirportTiles,
} from "../lib/data.js";
import { venueDetails, allLocations } from "../lib/locations.js";
import { homeDefaults } from "../lib/homeDefaults.js";
import { pageDefaults } from "../lib/pageDefaults.js";
import { posts } from "../lib/blog.js";

const prisma = new PrismaClient();

async function upsertTemplatePage(type, slug, title, data, seo = {}) {
  await prisma.templatePage.upsert({
    where: { type_slug: { type, slug } },
    create: { type, slug, title, data, ...seo },
    update: { title, data, ...seo },
  });
}

async function upsertCorePage(key, title, fields, seo = {}) {
  await prisma.corePage.upsert({
    where: { key },
    create: { key, title, fields, ...seo },
    update: { title, fields, ...seo },
  });
}

async function upsertBlogPost(slug, fields, seo = {}) {
  await prisma.blogPost.upsert({
    where: { slug },
    create: { slug, ...fields, ...seo },
    update: { ...fields, ...seo },
  });
}

async function main() {
  console.log(`Seeding ${serviceDetails.length} services...`);
  for (const s of serviceDetails) {
    await upsertTemplatePage("service", s.slug, s.title, {
      href: s.href, keyword: s.keyword, eyebrow: s.eyebrow, lead: s.lead,
      img: s.img, gallery: s.gallery || [], included: s.included || [],
      body: s.body || [], bestFor: s.bestFor || [], fleetLinks: s.fleetLinks || [],
      faqs: s.faqs || [],
      // The home grid used to carry its own short labels for these; they move
      // onto the page as card fields so the grid looks the same but is now
      // edited in one place.
      ...(homeServiceCards.find((c) => c.href === s.href)
        ? {
            cardTitle: homeServiceCards.find((c) => c.href === s.href).title,
            cardText: homeServiceCards.find((c) => c.href === s.href).text,
            cardImg: homeServiceCards.find((c) => c.href === s.href).img,
          }
        : {}),
    }, {
      metaTitle: `${s.title} | Royal Black Car Chicago`,
      metaDescription: s.lead,
      focusKeyword: s.keyword || "",
    });
  }

  console.log(`Seeding ${airportDetails.length} airports...`);
  for (const a of airportDetails) {
    await upsertTemplatePage("airport", a.slug, a.name, {
      href: a.href, code: a.code, rate: a.rate, rateNote: a.rateNote || "",
      driveTime: a.driveTime, img: a.img, img2: a.img2 || "",
      body: a.body || [], terminals: a.terminals, waitPolicy: a.waitPolicy,
      faqs: a.faqs || [],
      ...(homeAirportTiles.find((t) => t.href === a.href)
        ? {
            cardTitle: homeAirportTiles.find((t) => t.href === a.href).name,
            cardText: homeAirportTiles.find((t) => t.href === a.href).note,
            cardPrice: homeAirportTiles.find((t) => t.href === a.href).rate,
          }
        : {}),
    }, {
      metaTitle: `${a.name} Car Service | Royal Black Car Chicago`,
      metaDescription: `Flat-rate pickups and drop-offs, ${a.driveTime}.`,
      focusKeyword: `${a.name} car service`,
    });
  }

  console.log(`Seeding ${fleetPages.length} fleet pages...`);
  for (const f of fleetPages) {
    await upsertTemplatePage("fleet", f.slug, f.title, {
      href: f.href, models: f.models, capacity: f.capacity, img: f.img,
      rate: f.rate, hourlyRate: f.hourlyRate, bestFor: f.bestFor || [],
      body: f.body || "", services: f.services || [], faqs: f.faqs || [],
    }, {
      metaTitle: `${f.title} | Royal Black Car Chicago Fleet`,
      metaDescription: f.body || "",
      focusKeyword: f.title,
    });
  }

  console.log(`Seeding ${venueDetails.length} venue pages...`);
  for (const v of venueDetails) {
    await upsertTemplatePage("venue", v.slug, v.name, {
      href: v.href, area: v.area, note: v.note, img: v.img, faqs: v.faqs || [],
    }, {
      metaTitle: `${v.name} Car Service | Royal Black Car Chicago`,
      metaDescription: `Drop-off and pickup transportation for ${v.name}, ${v.area}.`,
      focusKeyword: `${v.name} car service`,
    });
  }

  console.log(`Seeding ${allLocations.length} service area pages...`);
  for (const l of allLocations) {
    await upsertTemplatePage("area", l.slug, l.name, {
      href: l.href,
      cluster: l.cluster || "",
      landmarks: l.landmarks || [],
      highway: l.highway || "",
      // Drive times are flattened so each one is its own field in the admin.
      driveORD: typeof l.drive === "object" ? l.drive.ORD || "" : "",
      driveMDW: typeof l.drive === "object" ? l.drive.MDW || "" : "",
      drivePWK: typeof l.drive === "object" ? l.drive.PWK || "" : "",
      isRoute: !!l.isRoute,
      miles: l.miles || "",
      drive: l.isRoute && typeof l.drive === "string" ? l.drive : "",
      img: l.img || "",
      body: l.body || [],
      faqs: l.faqs || [],
    }, {
      metaTitle: l.isRoute
        ? `${l.name} Car Service | Royal Black Car Chicago`
        : `${l.name} Black Car Service | Royal Black Car Chicago`,
      metaDescription: l.isRoute
        ? `Door-to-door ${l.name.toLowerCase()} car service.`
        : `Black car and airport transportation in ${l.name}, IL — flat rates to O'Hare, Midway and Chicago Executive.`,
      focusKeyword: `${l.name} car service`,
    });
  }

  console.log("Seeding core pages...");

  // Every home section's copy, not just the hero, so each one is editable in
  // the admin from the first load.
  await upsertCorePage("home", "Home", { ...homeDefaults }, {
    metaTitle: "Chicago Black Car Service | O'Hare & Midway Chauffeur | Royal Black Car",
    metaDescription: "Flat-rate Chicago black car service. Sedans, SUVs and Sprinters for O'Hare, Midway, corporate travel and events. Flights tracked, chauffeurs vetted, price fixed before you ride.",
  });


  // Hub pages: these had no CMS record at all, so their headings and leads
  // could only be changed in code. Seeded from the same defaults the pages
  // fall back to.
  const hubTitles = {"services": "Services", "airports": "Airports", "fleet": "Fleet", "service-areas": "Service Areas", "venues": "Venues", "blog": "Blog", "get-a-quote": "Get A Quote"};
  for (const [key, title] of Object.entries(hubTitles)) {
    console.log(`Seeding core page "${key}"...`);
    await upsertCorePage(key, title, { ...pageDefaults[key] });
  }

  await upsertCorePage("about", "About Us", {
    ...pageDefaults["about"],
    heroImg: PHOTOS.chauffeur[2],
    heroTitle: "A dependable alternative to rideshare, built for Chicago",
    heroLead: "Royal Black Car Chicago runs a licensed, insured black car fleet across the city and suburbs — flat pricing, vetted chauffeurs, and a dispatch desk that picks up.",
    whatWeDoImg: PHOTOS.corporateOffice[0],
    whatWeDoHeading: "Airport, corporate and private aviation transportation",
    whatWeDoP1: "We built Royal Black Car Chicago around three jobs people consistently need done well: a dependable airport transfer that adjusts to a delayed flight, a corporate account a finance team will actually accept, and a chauffeur who shows up in the right car, on time, for private aviation and everyday point-to-point trips.",
    whatWeDoP2: "Every trip runs on the same principle — the rate is agreed before the car is dispatched, not estimated on a meter or subject to surge pricing. Tolls, standard wait time and gratuity are built into the price you're quoted.",
    quoteText: "The dependable premium alternative to rideshare: licensed, insured and winter-ready, with live pricing and specialist coverage for airports, corporate travel and private aviation.",
    closingCard1Img: PHOTOS.chauffeur[1],
    closingCard1Heading: "Our approach",
    closingCard1Text: "Most operators compete on the same generic claims — 24/7 service, flight tracking, meet and greet. We treat those as the baseline, not the pitch, and compete instead on published pricing, a dispatcher who picks up, and knowing our corridors — O'Hare, the I-88 belt, PWK's FBOs — well enough to know their quirks.",
    closingCard2Img: PHOTOS.skyline[1],
    closingCard2Heading: "Coverage",
    closingCard2Text: "Daily service across downtown Chicago, the Northwest and West suburbs and the North Shore, plus O'Hare, Midway, Chicago Executive (PWK), DuPage and the region's other airports — plus long-distance runs to Milwaukee, Madison, Indianapolis, South Bend and Detroit.",
    closingCard3Img: PHOTOS.handshake[2],
    closingCard3Heading: "Corporate accounts",
    closingCard3Text: "Businesses that book with us regularly move to a corporate account: monthly invoicing, a named dispatcher and NDA-signed chauffeurs for client-facing travel.",
    ctaImg: PHOTOS.chauffeur[0],
  }, {
    metaTitle: "About Us | Royal Black Car Chicago",
    metaDescription: "A licensed, insured Chicago black car service built on flat pricing agreed before you ride, vetted chauffeurs and a dispatch desk that answers.",
  });

  await upsertCorePage("contact", "Contact", {
    ...pageDefaults["contact"],
    heroImg: PHOTOS.chauffeur[1],
    heroTitle: "Talk to dispatch",
    heroLead: "Call, text or email any time — dispatch answers day and night and can quote a trip on the spot.",
    introHeading: "Dispatch, 24 hours a day",
    officeNote: `Chicago, IL 60601 (street address to be confirmed — call or text for meet-up details)`,
  }, {
    metaTitle: "Contact Us | Royal Black Car Chicago",
    metaDescription: "Reach Royal Black Car Chicago dispatch by phone, text or email, 24 hours a day — or send a message and we'll reply within minutes.",
  });

  await upsertCorePage("faq", "FAQ", {
    heroImg: PHOTOS.sedan[0],
    heroTitle: "Questions riders ask",
    heroLead: "Answers to what people ask most before booking.",
    faqs: faqsFull,
    ctaImg: PHOTOS.sedan[2],
  }, {
    metaTitle: "Frequently Asked Questions | Royal Black Car Chicago",
    metaDescription: "Answers about booking, pricing, cancellations, service areas and more for Royal Black Car Chicago.",
  });

  await upsertCorePage("rates", "Rates", {
    ...pageDefaults["rates"],
    heroImg: PHOTOS.corporateOffice[2],
    heroTitle: "One flat rate, agreed before you ride",
    heroLead: "Published flat rates for the busiest airports, plus how hourly, long-distance and corporate pricing works.",
    included: [
      "Tolls, parking and gratuity",
      "60 minutes of free wait time at O'Hare and Midway",
      "Live flight tracking and automatic pick-up adjustment",
      "The first child seat, free",
    ],
    faqs: [
      { q: "Why does the rate stay the same even in bad traffic?", a: "Because it's quoted flat for the route and vehicle class, not metered by time — a slower drive doesn't change what you agreed to." },
      { q: "Are there hidden fees on top of the quoted rate?", a: "No — tolls, standard wait time and gratuity are already included for point-to-point and airport trips." },
      { q: "Why do some airports show \"Custom quote\" instead of a rate?", a: "Lower-volume or longer-distance airports (DuPage, Milwaukee, Gary, Rockford) are priced based on your exact pickup point rather than a single downtown rate." },
      { q: "Does the rate change for late-night or early-morning pickups?", a: "No surge pricing at any hour — the flat-rate promise holds around the clock." },
      { q: "How do I get a quote for a suburb not listed here?", a: "Call, text or use the online quote form with your address — dispatch will confirm a flat rate for any of our service areas." },
    ],
    ctaImg: PHOTOS.corporateOffice[1],
  }, {
    metaTitle: "Rates | Royal Black Car Chicago",
    metaDescription: "Flat airport rates and how hourly, long-distance and corporate pricing works with Royal Black Car Chicago.",
  });

  await upsertCorePage("corporate-accounts", "Corporate Accounts", {
    ...pageDefaults["corporate-accounts"],
    heroImg: PHOTOS.corporateOffice[0],
    heroTitle: "An account your finance team will accept",
    heroLead: "Set up once, then booking a ride is a text — not a new account, and not an expensed receipt to track down.",
    mediaImg: PHOTOS.handshake[0],
    points: [
      "One login for the whole company, with cost centres and trip codes",
      "Monthly invoicing instead of a card charge per ride",
      "A named dispatcher who learns your frequent travelers",
      "NDA-signed chauffeurs available for client-facing or confidential trips",
      "Multi-car roadshows and conventions coordinated by one dispatcher",
    ],
    detail1Img: PHOTOS.corporateOffice[1],
    detail1Heading: "Who this is for",
    detail1Text: "Companies with recurring travel — airport pickups for visiting clients, executives with regular downtown or suburb trips, sales teams running roadshows, or any team that would rather see one monthly invoice than a stack of expensed receipts.",
    detail2Img: PHOTOS.meeting[0],
    detail2Heading: "How billing works",
    detail2Text: "Every ride under the account is logged by rider, date, route and cost centre. Invoices go out monthly, itemized so finance can allocate spend by department without chasing individual receipts.",
    detail3Img: PHOTOS.handshake[1],
    detail3Heading: "Setting up an account",
    detail3Text: "Call, text or email dispatch with your company details and typical travel needs, and we'll confirm billing terms and add your frequent travelers.",
    faqs: [
      { q: "Is there a minimum number of riders to open an account?", a: "No — accounts scale from a single frequent traveler to a full company directory." },
      { q: "Can we set spending limits per traveler?", a: "Yes — cost centres and trip codes can be structured however your finance team needs to track spend." },
      { q: "How is a corporate account different from just expensing rides?", a: "One monthly invoice instead of a stack of individual receipts, a named dispatcher who knows your travelers, and NDA-signed chauffeurs available on request." },
      { q: "Can personal and business trips be on the same account?", a: "We recommend keeping them separate — personal bookings are charged to the card on file, business trips go on the account invoice." },
      { q: "What happens if a traveler leaves the company?", a: "Tell your dispatcher and they're removed from the account immediately — no lingering access." },
    ],
    ctaImg: PHOTOS.corporateOffice[2],
  }, {
    metaTitle: "Corporate Accounts | Royal Black Car Chicago",
    metaDescription: "Monthly invoicing, a named dispatcher and NDA-signed chauffeurs for executive travel and roadshows across Chicago.",
  });

  await upsertCorePage("terms", "Terms & Conditions", {
    heroImg: PHOTOS.loop[2],
    bodyText: `1. About these terms\nThese Terms & Conditions govern bookings made with Royal Black Car Chicago ("we", "us"), a chauffeured transportation service operating in Chicago, Illinois [LEGAL ENTITY NAME AND STATE OF FORMATION TO BE CONFIRMED]. By booking a ride, you agree to these terms.\n\n2. Bookings and quotes\nRates quoted online, by phone or by text are estimates until confirmed by dispatch. Flat rates for standard airport and point-to-point trips are fixed once confirmed and include tolls, standard wait time and gratuity unless stated otherwise. Hourly and as-directed bookings are billed on actual time used, subject to any stated minimum.\n\n3. Cancellations\nCancellations made at least 2 hours before the scheduled pick-up are free of charge. Cancellations made inside that window, or no-shows, may be charged a fee. Contact dispatch as early as possible if your plans change.\n\n4. Wait time\nAirport pickups include 60 minutes of free wait time measured from landing. Point-to-point and hourly pickups include a shorter grace period stated at booking. Additional wait time may be billed at the applicable hourly rate.\n\n5. Passenger conduct and safety\nChauffeurs may decline or end a trip if a passenger's conduct threatens safety, damages the vehicle, or violates the law, including transport of illegal substances or open alcohol containers where prohibited. Seatbelt use is required. Child seats must be requested in advance.\n\n6. Liability\nRoyal Black Car Chicago carries commercial auto insurance covering its vehicles and chauffeurs as required by Illinois law [CONFIRM CURRENT POLICY DETAILS]. We are not liable for delays caused by traffic, weather, mechanical failure beyond reasonable control, or acts of third parties, though we will make reasonable efforts to notify you of any delay.\n\n7. Payment\nIndividual bookings are charged to the card on file after the ride. Corporate accounts are invoiced monthly per the terms agreed at account setup.\n\n8. Changes to these terms\nWe may update these terms from time to time; the current version is always posted on this page.`,
  }, {
    metaTitle: "Terms & Conditions | Royal Black Car Chicago",
    metaDescription: "Terms and conditions for booking and riding with Royal Black Car Chicago.",
  });

  await upsertCorePage("privacy", "Privacy Policy", {
    heroImg: PHOTOS.skyline[2],
    bodyText: `1. Information we collect\nWhen you request a quote, book a ride, or contact us, we collect the information you provide: name, phone number, email address, pickup and drop-off locations, and payment details processed through our payment provider. Corporate account setup may include company name and billing contact details.\n\n2. How we use it\nWe use this information to quote, confirm and provide your ride, to contact you about a booking, to send receipts and invoices, and — only with your consent — to send service updates. We do not sell your personal information.\n\n3. Sharing\nInformation is shared with chauffeurs as needed to complete your trip, and with our payment processor to handle transactions. We do not share your information with third parties for their own marketing purposes.\n\n4. Cookies and website data\nOur website may use basic analytics cookies to understand site traffic. No personal booking information is stored in cookies.\n\n5. Data retention\nBooking and billing records are retained as required for tax and accounting purposes [CONFIRM RETENTION PERIOD]. You can request deletion of non-essential personal information by contacting us.\n\n6. Your choices\nYou can ask us at any time what information we hold about you, request a correction, or opt out of non-essential communications, by emailing us.\n\n7. Security\nWe use reasonable administrative and technical safeguards to protect your information, including processing payments through a PCI-compliant provider rather than storing full card numbers ourselves.\n\n8. Changes to this policy\nWe may update this policy from time to time; the current version is always posted on this page.`,
  }, {
    metaTitle: "Privacy Policy | Royal Black Car Chicago",
    metaDescription: "How Royal Black Car Chicago collects, uses and protects your information.",
  });

  console.log(`Seeding ${posts.length} blog posts...`);
  for (const p of posts) {
    await upsertBlogPost(p.slug, {
      title: p.title,
      excerpt: p.description,
      contentHtml: p.body.map((para) => `<p>${para}</p>`).join(""),
      img: p.img,
      status: "published",
      publishedAt: new Date(p.date),
    }, {
      metaTitle: `${p.title} | Royal Black Car Chicago`,
      metaDescription: p.description,
    });
  }

  console.log("Seed complete.");
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
