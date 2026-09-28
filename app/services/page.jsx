import PageHero from "@/components/PageHero.jsx";
import Reveal from "@/components/Reveal.jsx";
import Cta from "@/components/Cta.jsx";
import { Plane, Car as CarIcon, Shield, Clock, Tag, Check } from "@/components/icons.jsx";
import { PHOTOS } from "@/lib/data.js";
import { getAllTemplatePages } from "@/lib/cms.js";
import { pageMeta } from "@/lib/seo.js";

export const dynamic = "force-dynamic";

export const metadata = pageMeta({
  title: "Chicago Black Car Services | Royal Black Cars",
  description: "Airport transfers, corporate travel, hourly chauffeur, private aviation, weddings and more — every Royal Black Cars Chicago service in one place.",
  path: "/services/",
});

const airportSlugs = ["black-car-service", "point-to-point", "long-distance-car-service"];
const businessSlugs = ["corporate-car-service", "hourly-chauffeur", "roadshow-transportation", "convention-transportation"];
const occasionSlugs = ["event-transportation", "wedding-car-service", "prom-limo", "birthday-party-transportation", "funeral-car-service", "medical-appointment-transportation"];

export default async function Page() {
  const serviceDetails = await getAllTemplatePages("service");
  const find = (slug) => serviceDetails.find((s) => s.slug === slug);
  const featured = find("airport-car-service") || serviceDetails[0];
  const jet = find("private-jet-transfers") || serviceDetails[1];
  const categorized = new Set([featured.slug, jet.slug, ...airportSlugs, ...businessSlugs, ...occasionSlugs]);
  const more = serviceDetails.filter((s) => !categorized.has(s.slug));

  return (
    <>
      <PageHero
        eyebrow="SERVICES"
        title="Every way to book a black car in Chicago"
        lead="From a single airport run to a multi-day corporate roadshow, one flat rate agreed before you ride."
        img={featured.img}
        crumbs={[{ name: "Services", href: "/services/" }]}
      />

      <div className="wrap" style={{ position: "relative", zIndex: 3, marginTop: -34 }}>
        <Reveal className="quickfacts">
          <div><Tag /><div><b>Flat rate</b><small>Agreed before you ride</small></div></div>
          <div><Shield /><div><b>Licensed &amp; insured</b><small>Every vehicle, every trip</small></div></div>
          <div><Clock /><div><b>24/7 dispatch</b><small>Book any hour, day or night</small></div></div>
          <div><Check /><div><b>No surge, ever</b><small>Same price no matter the hour</small></div></div>
        </Reveal>
      </div>

      <section className="sec">
        <div className="wrap split">
          <Reveal className="media" slide>
            <img className="photo" src={featured.img} alt={featured.title} loading="lazy" style={{ zIndex: 2 }} />
          </Reveal>
          <Reveal delay={1}>
            <p className="eyebrow">MOST BOOKED</p>
            <h2><a href={featured.href}>{featured.title}</a></h2>
            <p className="lead" style={{ fontSize: "1rem" }}>{featured.lead}</p>
            <a className="btn btn-gold" href={featured.href}>See airport rates &amp; details</a>
          </Reveal>
        </div>
      </section>

      {/* Airport & ground: horizontal photo-card strip */}
      <section className="sec" style={{ background: "var(--wash)" }}>
        <div className="wrap">
          <Reveal className="section-head" style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <Plane style={{ width: 22, height: 22, fill: "var(--brass)" }} />
            <h2 style={{ fontSize: "1.4rem" }}>Airport &amp; ground transportation</h2>
          </Reveal>
          <div className="strip" style={{ marginTop: 24 }}>
            {airportSlugs.map((slug) => find(slug)).filter(Boolean).map((s) => {
              return (
                <a key={s.slug} href={s.href} className="strip-card">
                  <img src={s.img} alt="" loading="lazy" />
                  <span>{s.title}</span>
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
            <h2 style={{ fontSize: "1.4rem" }}>Business &amp; corporate</h2>
          </Reveal>
          <div className="detail-grid" style={{ marginTop: 24 }}>
            {businessSlugs.map((slug) => find(slug)).filter(Boolean).map((s, i) => {
              return (
                <Reveal key={s.slug} delay={i} as="a" href={s.href} className="detail-card" style={{ display: "block" }}>
                  <img src={s.img} alt="" loading="lazy" />
                  <div className="dc-body">
                    <h3>{s.title}</h3>
                    <p>{s.lead}</p>
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
            <h2 style={{ fontSize: "1.4rem" }}>Private aviation</h2>
          </Reveal>
          <Reveal delay={1} as="a" href={jet.href} className="feature-banner" style={{ marginTop: 24, display: "flex" }}>
            <img src={jet.img} alt="" loading="lazy" />
            <div className="fb-body">
              <h3>{jet.title}</h3>
              <p>{jet.lead}</p>
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
            <h2 style={{ fontSize: "1.4rem" }}>Occasions &amp; events</h2>
          </Reveal>
          <div className="svc" style={{ marginTop: 24 }}>
            {occasionSlugs.map((slug) => find(slug)).filter(Boolean).map((s) => {
              return (
                <a key={s.slug} href={s.href}>
                  <img className="photo" src={s.img} alt="" loading="lazy" />
                  <div><h3>{s.title}</h3><p>{s.lead}</p></div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {more.length > 0 && (
        <section className="sec" style={{ background: "var(--wash)" }}>
          <div className="wrap">
            <Reveal className="section-head"><p className="eyebrow">MORE SERVICES</p><h2 style={{ fontSize: "1.4rem" }}>Newly added</h2></Reveal>
            <div className="svc" style={{ marginTop: 24 }}>
              {more.map((s) => (
                <a key={s.slug} href={s.href}>
                  <img className="photo" src={s.img} alt="" loading="lazy" />
                  <div><h3>{s.title}</h3><p>{s.lead}</p></div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <Cta img={PHOTOS.sedan[2]} />
    </>
  );
}
