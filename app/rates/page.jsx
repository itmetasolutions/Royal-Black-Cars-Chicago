import PageHero from "@/components/PageHero.jsx";
import Reveal from "@/components/Reveal.jsx";
import PageFaq from "@/components/PageFaq.jsx";
import Cta from "@/components/Cta.jsx";
import { Check, Clock, Route, Shield, Plane } from "@/components/icons.jsx";
import { PHOTOS } from "@/lib/data.js";
import { getAllTemplatePages, getCorePage } from "@/lib/cms.js";
import { pageMeta } from "@/lib/seo.js";
import { fieldsFor } from "@/lib/pageDefaults.js";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  const page = await getCorePage("rates");
  return pageMeta({
    title: page?.seo.metaTitle || "Rates & Instant Quote | Royal Black Cars Chicago",
    description: page?.seo.metaDescription || "Flat airport rates from downtown Chicago, what's included in every fare, and how hourly, long-distance and fleet pricing works.",
    path: "/rates/",
  });
}

const defaultIncluded = [
  "Tolls, parking and gratuity",
  "60 minutes of free wait time at O'Hare and Midway",
  "Live flight tracking and automatic pick-up adjustment",
  "The first child seat, free",
];

const otherPricing = [
  [Clock, "Hourly & as-directed", "A 2-hour minimum, then billed in clean hourly increments. Rate depends on vehicle class.", "/hourly-chauffeur/"],
  [Route, "Long-distance & city-to-city", "Milwaukee, Madison, Indianapolis, South Bend and Detroit, quoted flat, round-trip or one-way.", "/long-distance-car-service/"],
  [Shield, "Corporate accounts", "Monthly invoicing with cost centres and trip codes, billed once a month, not per ride.", "/corporate-accounts/"],
];

const pricingSteps = [
  ["Distance & vehicle class", "Your pickup, drop-off and chosen vehicle set the baseline rate."],
  ["Time of day", "Rush-hour routing and airport wait windows are factored in up front, not added after."],
  ["Quote confirmed", "Dispatch or the online form shows the exact rate before anything is booked."],
  ["Rate locked", "That number doesn't change — a slow route or extra traffic is on us, not your bill."],
];

const defaultRateFaqs = [
  { q: "Why does the rate stay the same even in bad traffic?", a: "Because it's quoted flat for the route and vehicle class, not metered by time — a slower drive doesn't change what you agreed to." },
  { q: "Are there hidden fees on top of the quoted rate?", a: "No — tolls, standard wait time and gratuity are already included for point-to-point and airport trips." },
  { q: "Why do some airports show \"Custom quote\" instead of a rate?", a: "Lower-volume or longer-distance airports (DuPage, Milwaukee, Gary, Rockford) are priced based on your exact pickup point rather than a single downtown rate." },
  { q: "Does the rate change for late-night or early-morning pickups?", a: "No surge pricing at any hour — the flat-rate promise holds around the clock." },
  { q: "How do I get a quote for a suburb not listed here?", a: "Call, text or use the online quote form with your address — dispatch will confirm a flat rate for any of our service areas." },
];

export default async function Page() {
  const [airportDetails, fleetPages, corePage] = await Promise.all([
    getAllTemplatePages("airport"),
    getAllTemplatePages("fleet"),
    getCorePage("rates"),
  ]);
  const f = fieldsFor("rates", corePage);
  const priority = airportDetails.filter((a) => a.rate !== "Custom quote");
  const included = corePage?.included?.length ? corePage.included : defaultIncluded;
  const rateFaqs = corePage?.faqs?.length ? corePage.faqs : defaultRateFaqs;

  return (
    <>
      <PageHero
        eyebrow="RATES"
        title={corePage?.heroTitle || "One flat rate, agreed before you ride"}
        lead={corePage?.heroLead}
        img={corePage?.heroImg || PHOTOS.corporateOffice[2]}
        crumbs={[{ name: "Rates", href: "/rates/" }]}
      />

      <section className="sec">
        <div className="wrap">
          <Reveal className="section-head"><p className="eyebrow">{f("flatEyebrow")}</p><h2>{f("flatHeading")}</h2></Reveal>
          <div className="airport-cards" style={{ marginTop: 32 }}>
            {priority.map((a, i) => (
              <Reveal key={a.code} delay={i} className="airport-card">
                <div className="ac-head"><b>{a.code}</b><Plane /></div>
                <div className="ac-body">
                  <div><span>Rate</span><strong>{a.rate}</strong></div>
                  <div><span>Drive time</span><strong>{a.driveTime}</strong></div>
                </div>
                <a className="btn btn-gold" href={a.href}>Details</a>
              </Reveal>
            ))}
          </div>
          <p style={{ color: "var(--muted)", fontSize: ".9rem", marginTop: 20 }}>SUVs, Sprinters and rides from the suburbs are quoted at booking. DuPage, Milwaukee, Gary and Rockford vary by pickup point — see the <a href="/airports/">full airport list</a> or ask dispatch for an exact figure.</p>
        </div>
      </section>

      <section className="sec" style={{ background: "var(--wash)" }}>
        <div className="wrap split">
          <Reveal>
            <p className="eyebrow">{f("includedEyebrow")}</p>
            <h2>{f("includedHeading")}</h2>
            <ul className="tick">{included.map((i) => <li key={i}><Check />{i}</li>)}</ul>
          </Reveal>
          <Reveal delay={1} className="faq-aside">
            <h3 style={{ marginBottom: 14 }}>{f("byClassHeading")}</h3>
            <div style={{ display: "grid", gap: 10 }}>
              {fleetPages.map((f) => (
                <a key={f.slug} href={f.href} style={{ display: "flex", justifyContent: "space-between", gap: 10, fontSize: ".92rem", padding: "8px 0", borderBottom: "1px solid var(--line)" }}>
                  <span>{f.title}</span>
                  <strong style={{ color: "var(--brass)" }}>{f.rate}</strong>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <Reveal className="section-head"><p className="eyebrow">{f("otherEyebrow")}</p><h2>{f("otherHeading")}</h2></Reveal>
          <div className="feature-grid cols-3" style={{ marginTop: 32 }}>
            {otherPricing.map(([Icon, title, text, href], i) => (
              <Reveal key={title} delay={i} as="a" href={href} className="feature-card">
                <Icon />
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: "var(--wash)" }}>
        <div className="wrap">
          <Reveal className="section-head"><p className="eyebrow">{f("howEyebrow")}</p><h2>{f("howHeading")}</h2></Reveal>
          <div className="steps">
            {pricingSteps.map(([title, text], i) => (
              <Reveal key={title} delay={i % 3} className="step">
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PageFaq faqs={rateFaqs} eyebrow="PRICING QUESTIONS" title="About our rates" />
      <Cta img={corePage?.ctaImg || PHOTOS.corporateOffice[1]} />
    </>
  );
}
