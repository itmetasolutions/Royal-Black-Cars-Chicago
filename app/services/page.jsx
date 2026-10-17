import PageHero from "@/components/PageHero.jsx";
import Reveal from "@/components/Reveal.jsx";
import Cta from "@/components/Cta.jsx";
import { Plane, Car as CarIcon, Shield, Clock, Tag, Check } from "@/components/icons.jsx";
import { PHOTOS } from "@/lib/data.js";
import { getAllTemplatePages, getCorePage } from "@/lib/cms.js";
import { fieldsFor } from "@/lib/pageDefaults.js";
import { toCard } from "@/lib/cards.js";
import { pageMeta } from "@/lib/seo.js";

export const dynamic = "force-dynamic";

export const metadata = pageMeta({
  title: "Chicago Black Car & Limo Services | Royal Black Cars Chicago",
  description: "Book premium Chicago black car service for airport, corporate travel, hourly chauffeur service, weddings, events, point-to-point rides and more.",
  path: "/services/",
});

const airportSlugs = ["black-car-service", "point-to-point", "long-distance-car-service"];
const businessSlugs = ["corporate-car-service", "hourly-chauffeur", "roadshow-transportation", "convention-transportation"];
const occasionSlugs = ["event-transportation", "wedding-car-service", "prom-limo", "birthday-party-transportation", "funeral-car-service", "medical-appointment-transportation"];

export default async function Page() {
  const [serviceDetails, corePage] = await Promise.all([getAllTemplatePages("service"), getCorePage("services")]);
  const f = fieldsFor("services", corePage);
  const find = (slug) => serviceDetails.find((s) => s.slug === slug);
  const featured = find("airport-car-service") || serviceDetails[0];
  const jet = find("private-jet-transfers") || serviceDetails[1];
  const categorized = new Set([featured.slug, jet.slug, ...airportSlugs, ...businessSlugs, ...occasionSlugs]);
  const more = serviceDetails.filter((s) => !categorized.has(s.slug));

  return (
    <>
      <PageHero
        eyebrow={f("heroEyebrow")}
        title={f("heroTitle")}
        lead={f("heroLead")}
        img={f("heroImg") || featured.img}
        crumbs={[{ name: "Services", href: "/services/" }]}
      />

      <div className="wrap" style={{ position: "relative", zIndex: 3, marginTop: -34 }}>
        <Reveal className="quickfacts">
          <div><Tag /><div><b>{f("fact1Title")}</b><small>{f("fact1Note")}</small></div></div>
          <div><Shield /><div><b>{f("fact2Title")}</b><small>{f("fact2Note")}</small></div></div>
          <div><Clock /><div><b>{f("fact3Title")}</b><small>{f("fact3Note")}</small></div></div>
          <div><Check /><div><b>{f("fact4Title")}</b><small>{f("fact4Note")}</small></div></div>
        </Reveal>
      </div>

      <section className="sec">
        <div className="wrap split">
          <Reveal className="media" slide>
            <img className="photo" src={featured.img} alt={featured.title} loading="lazy" style={{ zIndex: 2 }} />
          </Reveal>
          <Reveal delay={1}>
            <p className="eyebrow">{f("featuredEyebrow")}</p>
            <h2><a href={featured.href}>{featured.title}</a></h2>
            <p className="lead" style={{ fontSize: "1rem" }}>{toCard("service", featured).text}</p>
            <a className="btn btn-gold" href={featured.href}>{f("featuredCtaLabel")}</a>
          </Reveal>
        </div>
      </section>

      {/* Airport & ground: horizontal photo-card strip */}
      <section className="sec" style={{ background: "var(--wash)" }}>
        <div className="wrap">
          <Reveal className="section-head" style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <Plane style={{ width: 22, height: 22, fill: "var(--brass)" }} />
            <h2 style={{ fontSize: "1.4rem" }}>{f("cat1Heading")}</h2>
          </Reveal>
          <div className="strip" style={{ marginTop: 24 }}>
            {airportSlugs.map((slug) => find(slug)).filter(Boolean).map((s) => {
              const c = toCard("service", s);
              return (
                <a key={c.href} href={c.href} className="strip-card">
                  <img src={c.img} alt="" loading="lazy" />
                  <span>{c.title}</span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Business & corporate: image + text card grid */}
      <section className="sec">
        <div className="wrap">
          <Reveal className="section-head" style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <Shield style={{ width: 22, height: 22, fill: "var(--brass)" }} />
            <h2 style={{ fontSize: "1.4rem" }}>{f("cat2Heading")}</h2>
          </Reveal>
          <div className="detail-grid" style={{ marginTop: 24 }}>
            {businessSlugs.map((slug) => find(slug)).filter(Boolean).map((s, i) => {
              const c = toCard("service", s);
              return (
                <Reveal key={c.href} delay={i} as="a" href={c.href} className="detail-card" style={{ display: "block" }}>
                  <img src={c.img} alt="" loading="lazy" />
                  <div className="dc-body">
                    <h3>{c.title}</h3>
                    <p>{c.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Private aviation: single feature banner */}
      <section className="sec" style={{ background: "var(--wash)" }}>
        <div className="wrap">
          <Reveal className="section-head" style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <Tag style={{ width: 22, height: 22, fill: "var(--brass)" }} />
            <h2 style={{ fontSize: "1.4rem" }}>{f("cat3Heading")}</h2>
          </Reveal>
          <Reveal delay={1} as="a" href={jet.href} className="feature-banner" style={{ marginTop: 24, display: "flex" }}>
            <img src={jet.img} alt="" loading="lazy" />
            <div className="fb-body">
              <h3>{jet.title}</h3>
              <p>{toCard("service", jet).text}</p>
              <span className="btn btn-gold">See FBO details</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Occasions & events: full photo grid */}
      <section className="sec">
        <div className="wrap">
          <Reveal className="section-head" style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <CarIcon style={{ width: 22, height: 22, fill: "var(--brass)" }} />
            <h2 style={{ fontSize: "1.4rem" }}>{f("cat4Heading")}</h2>
          </Reveal>
          <div className="svc" style={{ marginTop: 24 }}>
            {occasionSlugs.map((slug) => find(slug)).filter(Boolean).map((s) => {
              const c = toCard("service", s);
              return (
                <a key={c.href} href={c.href}>
                  <img className="photo" src={c.img} alt="" loading="lazy" />
                  <div><h3>{c.title}</h3><p>{c.text}</p></div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {more.length > 0 && (
        <section className="sec" style={{ background: "var(--wash)" }}>
          <div className="wrap">
            <Reveal className="section-head"><p className="eyebrow">{f("moreEyebrow")}</p><h2 style={{ fontSize: "1.4rem" }}>{f("moreHeading")}</h2></Reveal>
            <div className="svc" style={{ marginTop: 24 }}>
              {more.map((s) => toCard("service", s)).map((c) => (
                <a key={c.href} href={c.href}>
                  <img className="photo" src={c.img} alt="" loading="lazy" />
                  <div><h3>{c.title}</h3><p>{c.text}</p></div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <Cta img={f("ctaImg")} heading={f("ctaHeading")} text={f("ctaText")} />
    </>
  );
}
