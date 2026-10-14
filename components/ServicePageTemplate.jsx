import Reveal from "./Reveal.jsx";
import PageHero from "./PageHero.jsx";
import RelatedLinks from "./RelatedLinks.jsx";
import PageFaq from "./PageFaq.jsx";
import SplitSections from "./SplitSections.jsx";
import Cta from "./Cta.jsx";
import { Check, Tag, Shield, Clock } from "./icons.jsx";
import { serviceDetails, trustPoints } from "../lib/data.js";
import { serviceSchema } from "../lib/schema.js";

const quickFacts = [
  [Tag, "Flat rate", "Agreed before you ride"],
  [Shield, "Licensed & insured", "Every vehicle, every trip"],
  [Clock, "24/7 dispatch", "Book any hour, day or night"],
  [Check, "No surge, ever", "Same price no matter the hour"],
];

export default function ServicePageTemplate({ service, allServices = serviceDetails }) {
  const related = allServices.filter(s => s.slug !== service.slug).slice(0, 4).map(s => [s.title, s.href, s.img]);
  const gallery = service.gallery || [service.img, service.img, service.img, service.img];

  // The side-by-side sections are a backend-editable, add-as-many-as-you-want
  // list. A page that has never set any gets the same "what's included"
  // section it always showed, built from its existing fields, so nothing
  // already published changes until someone edits it in the admin.
  const splitSections = service.splitSections?.length
    ? service.splitSections
    : [{
        heading: `Every ${service.title.toLowerCase()} booking includes`,
        points: service.included || [],
        ctaLabel: "Get A Free Quote",
        ctaHref: "/get-a-quote/",
      }];

  // Same idea for "Why ride with us": per-service points, falling back to
  // the shared list until a page sets its own.
  const whyPoints = service.whyPoints?.length
    ? service.whyPoints.map(([title, text]) => ({ title, text }))
    : trustPoints;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: service.title, description: service.lead, url: `https://www.royalblackcarschicago.com${service.href}` })) }} />
      <PageHero
        eyebrow={service.eyebrow}
        title={service.title}
        lead={service.lead}
        img={service.img}
        crumbs={[{ name: "Services", href: "/services/" }, { name: service.title, href: service.href }]}
      />

      <div className="wrap" style={{ position: "relative", zIndex: 3, marginTop: -34 }}>
        <Reveal className="quickfacts">
          {quickFacts.map(([Icon, b, s]) => (
            <div key={b}><Icon /><div><b>{b}</b><small>{s}</small></div></div>
          ))}
        </Reveal>
      </div>

      <SplitSections sections={splitSections} fallbackImg={service.img} />

      <section className="sec" style={{ background: "var(--wash)" }}>
        <div className="wrap">
          <Reveal className="section-head"><p className="eyebrow">THE DETAILS</p><h2>Everything worth knowing</h2></Reveal>
          <div className="detail-grid">
            {service.body.map((section, i) => (
              <Reveal key={section.h} delay={i % 3} className="detail-card">
                <img src={gallery[i]} alt="" loading="lazy" />
                <div className="dc-body">
                  <h3>{section.h}</h3>
                  <p>{section.p[0]}</p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0} className="detail-card">
              <img src={gallery[3]} alt="" loading="lazy" />
              <div className="dc-body">
                <h3>Best for</h3>
                <ul className="tick" style={{ margin: 0 }}>{service.bestFor.slice(0, 3).map(b => <li key={b}><Check />{b}</li>)}</ul>
              </div>
            </Reveal>
          </div>
          {service.fleetLinks && (
            <div style={{ marginTop: 30 }}>
              <h3 style={{ marginBottom: 12, fontSize: "1.02rem" }}>Recommended vehicles</h3>
              <div className="rl-grid" style={{ margin: 0 }}>
                {service.fleetLinks.map(([label, href]) => <a key={href} className="rl-chip" href={href}>{label}</a>)}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <Reveal className="section-head"><p className="eyebrow">WHY RIDE WITH US</p><h2>The details most services skip</h2></Reveal>
          <div className="feature-grid" style={{ marginTop: 36 }}>
            {whyPoints.map((t, i) => (
              <Reveal key={t.title} delay={i % 3} className="feature-card">
                <Check />
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PageFaq faqs={service.faqs} title={`Questions about ${service.title.toLowerCase()}`} />
      <RelatedLinks title="Other services" links={related} hub={["All services", "/services/"]} />
      <Cta img={service.img} />
    </>
  );
}
