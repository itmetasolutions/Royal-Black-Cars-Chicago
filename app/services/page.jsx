import PageHero from "@/components/PageHero.jsx";
import Reveal from "@/components/Reveal.jsx";
import Cta from "@/components/Cta.jsx";
import { Plane, Car as CarIcon, Shield, Clock, Tag, Check } from "@/components/icons.jsx";
import { serviceDetails, IMG } from "@/lib/data.js";
import { pageMeta } from "@/lib/seo.js";

export const metadata = pageMeta({
  title: "Chicago Black Car Services | Royal Black Cars",
  description: "Airport transfers, corporate travel, hourly chauffeur, private aviation, weddings and more — every Royal Black Cars Chicago service in one place.",
  path: "/services/",
});

const find = (slug) => serviceDetails.find((s) => s.slug === slug);

const categories = [
  { name: "Airport & ground transportation", icon: Plane, slugs: ["black-car-service", "point-to-point", "long-distance-car-service"] },
  { name: "Business & corporate", icon: Shield, slugs: ["corporate-car-service", "hourly-chauffeur", "roadshow-transportation", "convention-transportation"] },
  { name: "Private aviation", icon: Tag, slugs: ["private-jet-transfers"] },
  { name: "Occasions & events", icon: CarIcon, slugs: ["event-transportation", "wedding-car-service", "prom-limo", "birthday-party-transportation", "funeral-car-service", "medical-appointment-transportation"] },
];

export default function Page() {
  const featured = find("airport-car-service");

  return (
    <>
      <PageHero
        eyebrow="SERVICES"
        title="Every way to book a black car in Chicago"
        lead="From a single airport run to a multi-day corporate roadshow, one flat rate agreed before you ride."
        img={IMG.hero}
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

      {categories.map((cat, ci) => (
        <section key={cat.name} className="sec" style={{ paddingTop: ci === 0 ? 0 : undefined, background: ci % 2 ? "var(--wash)" : "var(--paper)" }}>
          <div className="wrap">
            <Reveal className="section-head" style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 4 }}>
              <cat.icon style={{ width: 22, height: 22, fill: "var(--brass)" }} />
              <h2 style={{ fontSize: "1.4rem" }}>{cat.name}</h2>
            </Reveal>
            <div className="svc-list" style={{ marginTop: 20 }}>
              {cat.slugs.map((slug) => {
                const s = find(slug);
                return (
                  <a key={slug} href={s.href} className="svc-row">
                    <span className="ic"><Check /></span>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <h3>{s.title}</h3>
                      <p>{s.lead}</p>
                    </div>
                    <span className="go">&rarr;</span>
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      <Cta img={IMG.hero} />
    </>
  );
}
