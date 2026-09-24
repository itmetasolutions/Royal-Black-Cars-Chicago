import PageHero from "@/components/PageHero.jsx";
import Reveal from "@/components/Reveal.jsx";
import Cta from "@/components/Cta.jsx";
import { clusters, cityToCity, venueDetails, locationImage, venueImage } from "@/lib/locations.js";
import { northwest, west, IMG, PHOTOS } from "@/lib/data.js";
import { pageMeta } from "@/lib/seo.js";

export const metadata = pageMeta({
  title: "Chicago Service Areas | Royal Black Cars",
  description: "Downtown Chicago, the Northwest and West suburbs, the North Shore, and city-to-city routes to Milwaukee, Madison, Indianapolis and more.",
  path: "/service-areas/",
});

export default function Page() {
  const priorityNames = new Set(clusters.flatMap((c) => c.locations.map((l) => l.name)));
  const alsoNorthwest = northwest.filter((n) => !priorityNames.has(n));
  const alsoWest = west.filter((n) => !priorityNames.has(n));

  return (
    <>
      <PageHero
        eyebrow="SERVICE AREAS"
        title="Chicago, the collar counties and beyond"
        lead="Daily service across the city and suburbs, plus scheduled long-distance runs to Milwaukee, Madison, Indianapolis, South Bend and Detroit."
        img={IMG.areaMap}
        crumbs={[{ name: "Service Areas", href: "/service-areas/" }]}
      />

      {clusters.map((c, i) => (
        <section key={c.name} className="sec" style={{ background: i % 2 ? "var(--wash)" : "var(--paper)" }}>
          <div className={`wrap split${i % 2 ? " rev" : ""}`}>
            <Reveal className="media" slide>
              <img className="photo" src={locationImage(c.locations[0])} alt={c.name} loading="lazy" style={{ zIndex: 2 }} />
            </Reveal>
            <Reveal delay={1}>
              <p className="eyebrow">{`CLUSTER ${i + 1} OF ${clusters.length}`}</p>
              <h2>{c.name}</h2>
              <p className="lead" style={{ fontSize: "1rem" }}>{c.blurb}</p>
              <div className="prose" style={{ marginTop: 4 }}><p>{c.detail}</p></div>
              <div className="rl-grid">
                {c.locations.map((l) => <a key={l.slug} className="rl-chip" href={l.href}>{l.name}</a>)}
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      <section className="sec">
        <div className="wrap">
          <Reveal className="section-head"><p className="eyebrow">CITY TO CITY</p><h2>Long-distance routes, run regularly</h2></Reveal>
          <div className="stat-grid" style={{ marginTop: 32 }}>
            {cityToCity.map((r) => (
              <a key={r.slug} href={r.href} className="stat-card" style={{ textAlign: "left" }}>
                <span>{r.name}</span>
                <b style={{ fontSize: "1.15rem" }}>{r.drive}</b>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: "var(--wash)" }}>
        <div className="wrap">
          <Reveal className="section-head"><p className="eyebrow">VENUES</p><h2>Arenas, stadiums and convention halls</h2></Reveal>
          <div className="svc" style={{ marginTop: 32 }}>
            {venueDetails.map((v) => (
              <a key={v.slug} href={v.href}>
                <img className="photo" src={venueImage(v)} alt="" loading="lazy" />
                <div><h3>{v.name}</h3><p>{v.area}</p></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <h2 style={{ fontSize: "1.4rem" }}>We also regularly serve</h2>
          <div className="prose">
            <p>Beyond the areas above, dispatch regularly covers the following suburbs. Call or text to confirm coverage and get a flat rate for your address.</p>
            <p><strong>Northwest suburbs:</strong> {alsoNorthwest.join(", ")}.</p>
            <p><strong>West suburbs:</strong> {alsoWest.join(", ")}.</p>
          </div>
        </div>
      </section>

      <Cta img={PHOTOS.suburbGeneric[2]} />
    </>
  );
}
