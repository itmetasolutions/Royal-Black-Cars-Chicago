import Reveal from "./Reveal.jsx";
import PageHero from "./PageHero.jsx";
import RelatedLinks from "./RelatedLinks.jsx";
import PageFaq from "./PageFaq.jsx";
import SplitSections from "./SplitSections.jsx";
import Cta from "./Cta.jsx";
import { Check, Tag, Shield, Clock } from "./icons.jsx";
import { serviceDetails, trustPoints, fleetPages } from "../lib/data.js";
import { serviceSchema } from "../lib/schema.js";
import { stripHtml } from "../lib/richtext.js";

const quickFacts = [
  [Tag, "Flat rate", "Agreed before you ride"],
  [Shield, "Licensed & insured", "Every vehicle, every trip"],
  [Clock, "24/7 dispatch", "Book any hour, day or night"],
  [Check, "No surge, ever", "Same price no matter the hour"],
];

export default function ServicePageTemplate({ service, allServices = serviceDetails, allFleet = fleetPages }) {
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
  // the shared list until a page sets its own. Each of the four cards is its
  // own heading/description pair, so a card left blank just doesn't count —
  // the description is rich text, so "blank" means stripped of markup.
  const whyPointsSet = (service.whyPoints || []).filter(([t, x]) => t || stripHtml(x));
  const whyPoints = whyPointsSet.length ? whyPointsSet.map(([title, text]) => ({ title, text })) : trustPoints;

  // Recommended vehicles are picked from the real fleet pages; an entry is
  // either one of those pages' slugs (the new way) or a legacy [label, href]
  // pair typed by hand (kept so nothing already published breaks).
  const fleetLinksResolved = (service.fleetLinks || [])
    .map((entry) => {
      if (Array.isArray(entry)) return entry;
      const f = allFleet.find((x) => x.slug === entry);
      return f ? [f.cardTitle || f.title, f.href || `/fleet/${f.slug}/`] : null;
    })
    .filter(Boolean);
  const hasFleetLinks = fleetLinksResolved.length > 0;

  // Each of the three detail cards, and the "Best for" card, only shows up
  // when it has something to say; the whole section (Recommended vehicles
  // included) disappears if none of them do. The paragraph and the best-for
  // points are rich text, so "blank" means stripped of markup, not just an
  // empty string — an untouched editor still outputs "<p></p>".
  const detailSections = (service.body || [])
    .map((section, i) => ({ ...section, img: gallery[i], pHtml: Array.isArray(section.p) ? section.p[0] : section.p }))
    .filter((section) => section.h || stripHtml(section.pHtml));
  const bestForPoints = (service.bestFor || []).filter((b) => stripHtml(b));
  const hasBestFor = bestForPoints.length > 0;
  const hasDetails = detailSections.length > 0 || hasBestFor;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: service.title, description: stripHtml(service.lead), url: `https://www.royalblackcarschicago.com${service.href}` })) }} />
      <PageHero
        eyebrow={service.eyebrow}
        title={service.heroHeading || service.title}
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

      <SplitSections sections={splitSections} fallbackImg={service.img} topGap={100} />

      {hasDetails && (
        <section className="sec" style={{ background: "var(--wash)" }}>
          <div className="wrap">
            <Reveal className="section-head">
              <p className="eyebrow">{service.detailsEyebrow || "THE DETAILS"}</p>
              <h2>{service.detailsHeading || "Everything worth knowing"}</h2>
            </Reveal>
            <div className="detail-grid">
              {detailSections.map((section, i) => (
                <Reveal key={section.h || i} delay={i % 3} className="detail-card">
                  <img src={section.img} alt="" loading="lazy" />
                  <div className="dc-body">
                    <h3>{section.h}</h3>
                    <div className="rich-text" dangerouslySetInnerHTML={{ __html: section.pHtml }} />
                  </div>
                </Reveal>
              ))}
              {hasBestFor && (
                <Reveal delay={0} className="detail-card">
                  <img src={gallery[3]} alt="" loading="lazy" />
                  <div className="dc-body">
                    <h3>Best for</h3>
                    <ul className="tick" style={{ margin: 0 }}>
                      {bestForPoints.slice(0, 3).map((b, i) => (
                        <li key={i}><Check /><span className="rich-text" dangerouslySetInnerHTML={{ __html: b }} /></li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              )}
            </div>
            {hasFleetLinks && (
              <div style={{ marginTop: 30 }}>
                <h3 style={{ marginBottom: 12, fontSize: "1.02rem" }}>Recommended vehicles</h3>
                <div className="rl-grid" style={{ margin: 0 }}>
                  {fleetLinksResolved.map(([label, href]) => <a key={href} className="rl-chip" href={href}>{label}</a>)}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      <section className="sec">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="eyebrow">{service.whyEyebrow || "WHY RIDE WITH US"}</p>
            <h2>{service.whyHeading || "The details most services skip"}</h2>
          </Reveal>
          <div className="feature-grid" style={{ marginTop: 36 }}>
            {whyPoints.map((t, i) => (
              <Reveal key={t.title} delay={i % 3} className="feature-card">
                <Check />
                <h3>{t.title}</h3>
                <div className="rich-text" dangerouslySetInnerHTML={{ __html: t.text }} />
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
