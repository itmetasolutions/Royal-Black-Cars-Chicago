import PageHero from "@/components/PageHero.jsx";
import Reveal from "@/components/Reveal.jsx";
import PageFaq from "@/components/PageFaq.jsx";
import Cta from "@/components/Cta.jsx";
import { Check, Clock, Route, Shield } from "@/components/icons.jsx";
import { PHOTOS } from "@/lib/data.js";
import { getAllTemplatePages, getCorePage } from "@/lib/cms.js";
import { pageMeta } from "@/lib/seo.js";
import { fieldsFor } from "@/lib/pageDefaults.js";
import { toCard } from "@/lib/cards.js";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  const page = await getCorePage("rates");
  return pageMeta({
    title: page?.seo.metaTitle || "Rates & Instant Quote | Royal Black Car Chicago",
    description: page?.seo.metaDescription || "Flat airport rates from downtown Chicago, what's included in every fare, and how hourly, long-distance and fleet pricing works.",
    path: "/rates/",
  });
}

const defaultIncluded = [
  "Tolls, parking and gratuity",
  "60 minutes of free wait time at O'Hare and Midway",
  "Live flight tracking and automatic pick-up adjustment",
  "The first child seat, free",
  "A licensed, insured and background-checked chauffeur",
  "No surge pricing, any time of day or night",
];

const OTHER_PRICING_ICONS = [Clock, Route, Shield];
const defaultOtherPricing = [
  { title: "Hourly & as-directed", text: "A 2-hour minimum, then billed in clean hourly increments. Rate depends on vehicle class.", href: "/hourly-chauffeur/" },
  { title: "Long-distance & city-to-city", text: "Milwaukee, Madison, Indianapolis, South Bend and Detroit, quoted flat, round-trip or one-way.", href: "/long-distance-car-service/" },
  { title: "Corporate accounts", text: "Monthly invoicing with cost centres and trip codes, billed once a month, not per ride.", href: "/corporate-accounts/" },
];

const defaultPricingSteps = [
  { title: "Distance & vehicle class", text: "Your pickup, drop-off and chosen vehicle set the baseline rate." },
  { title: "Time of day", text: "Rush-hour routing and airport wait windows are factored in up front, not added after." },
  { title: "Quote confirmed", text: "Dispatch or the online form shows the exact rate before anything is booked." },
  { title: "Rate locked", text: "That number doesn't change — a slow route or extra traffic is on us, not your bill." },
];

const defaultRateFaqs = [
  { q: "Why does the rate stay the same even in bad traffic?", a: "Because it's quoted flat for the route and vehicle class, not metered by time — a slower drive doesn't change what you agreed to." },
  { q: "Are there hidden fees on top of the quoted rate?", a: "No — tolls, standard wait time and gratuity are already included for point-to-point and airport trips." },
  { q: "Why doesn't the site list a dollar figure for every airport?", a: "Every airport transfer is priced to your exact pickup point and vehicle class, so dispatch confirms the flat number with you before anything is booked — it's never estimated or metered afterward." },
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
  const included = corePage?.included?.length ? corePage.included : defaultIncluded;
  const rateFaqs = corePage?.faqs?.length ? corePage.faqs : defaultRateFaqs;
  const otherPricing = corePage?.otherPricing?.length ? corePage.otherPricing : defaultOtherPricing;
  const pricingSteps = corePage?.pricingSteps?.length ? corePage.pricingSteps : defaultPricingSteps;

  return (
    <>
      <PageHero
        eyebrow="RATES"
        title={f("heroTitle")}
        lead={f("heroLead")}
        img={corePage?.heroImg || PHOTOS.corporateOffice[2]}
        crumbs={[{ name: "Rates", href: "/rates/" }]}
      />

      <section className="sec" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <div className="prose rich-text">
            <p>{f("introText")}</p>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <Reveal className="section-head"><p className="eyebrow">{f("flatEyebrow")}</p><h2>{f("flatHeading")}</h2></Reveal>
          <div className="rate-list" style={{ marginTop: 32 }}>
            {airportDetails.map((a, i) => {
              const card = toCard("airport", a);
              return (
                <Reveal key={a.code} delay={i % 4} as="a" href={a.href} className="rate-row">
                  <div className="rate-row-main">
                    <span className="rate-row-badge">{a.code}</span>
                    <b>{card.pageTitle}</b>
                  </div>
                  <div className="rate-row-col">
                    <span className="rate-row-label">Drive time</span>
                    {a.driveTime}
                  </div>
                  <div className="rate-row-col rate-row-price">
                    <span className="rate-row-label">Rate</span>
                    {a.rate}
                  </div>
                  <span className="rate-row-go" aria-hidden="true">&rarr;</span>
                </Reveal>
              );
            })}
          </div>
          <p style={{ color: "var(--muted)", fontSize: ".9rem", marginTop: 20 }}>Every airport transfer is priced to your exact pickup point and vehicle class — tell us where you're starting from and dispatch confirms a flat number before you book. See the <a href="/airports/">full airport list</a> for terminal pickup details at each one.</p>
        </div>
      </section>

      <section className="sec" style={{ background: "var(--wash)" }}>
        <div className="wrap split">
          <Reveal>
            <p className="eyebrow">{f("includedEyebrow")}</p>
            <h2>{f("includedHeading")}</h2>
            <ul className="tick">{included.map((i) => <li key={i}><Check />{i}</li>)}</ul>
          </Reveal>
          <Reveal delay={1} className="media" slide>
            <img className="photo" src={f("includedImg")} alt="" loading="lazy" style={{ zIndex: 2 }} />
          </Reveal>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <Reveal className="section-head"><p className="eyebrow">{f("byClassEyebrow")}</p><h2>{f("byClassHeading")}</h2><p className="lead" style={{ maxWidth: 640 }}>The hourly rate includes a professional chauffeur and covers as-directed and point-to-point trips. Airport and long-distance routes are quoted flat for your exact pickup and drop-off instead.</p></Reveal>
          <div className="rate-list" style={{ marginTop: 32 }}>
            {fleetPages.map((v, i) => {
              const card = toCard("fleet", v);
              return (
                <Reveal key={v.slug} delay={i % 4} as="a" href={v.href} className="rate-row rate-row-fleet">
                  <img className="rate-row-img" src={card.img} alt={card.title} loading="lazy" />
                  <div className="rate-row-main">
                    <b>{v.title}</b>
                    <span className="rate-row-sub">{v.capacity || v.models}</span>
                  </div>
                  <div className="rate-row-col rate-row-price">
                    <span className="rate-row-label">Hourly</span>
                    {v.hourlyRate || "Quoted at booking"}
                  </div>
                  <span className="rate-row-go" aria-hidden="true">&rarr;</span>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: "var(--wash)" }}>
        <div className="wrap">
          <Reveal className="section-head"><p className="eyebrow">{f("otherEyebrow")}</p><h2>{f("otherHeading")}</h2></Reveal>
          <div className="feature-grid cols-3" style={{ marginTop: 32 }}>
            {otherPricing.map((item, i) => {
              const Icon = OTHER_PRICING_ICONS[i] || Shield;
              return (
                <Reveal key={item.title} delay={i} as="a" href={item.href} className="feature-card">
                  <Icon />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: "var(--wash)" }}>
        <div className="wrap">
          <Reveal className="section-head"><p className="eyebrow">{f("howEyebrow")}</p><h2>{f("howHeading")}</h2></Reveal>
          <div className="steps">
            {pricingSteps.map((item, i) => (
              <Reveal key={item.title} delay={i % 3} className="step">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PageFaq faqs={rateFaqs} eyebrow="PRICING QUESTIONS" title="About our rates" />
      <Cta img={corePage?.ctaImg || PHOTOS.corporateOffice[1]} heading={f("ctaHeading")} text={f("ctaText")} />
    </>
  );
}
