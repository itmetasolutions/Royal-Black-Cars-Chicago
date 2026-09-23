import PageHero from "@/components/PageHero.jsx";
import Cta from "@/components/Cta.jsx";
import { clusters, cityToCity, venueDetails } from "@/lib/locations.js";
import { northwest, west } from "@/lib/data.js";
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
        crumbs={[{ name: "Service Areas", href: "/service-areas/" }]}
      />

      {clusters.map((c) => (
        <section key={c.name} className="sec" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <h2 style={{ fontSize: "1.6rem", marginBottom: 4 }}>{c.name}</h2>
            <div className="rl-grid">
              {c.locations.map((l) => <a key={l.slug} className="rl-chip" href={l.href}>{l.name}</a>)}
            </div>
          </div>
        </section>
      ))}

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <h2 style={{ fontSize: "1.6rem", marginBottom: 4 }}>City-to-city</h2>
          <div className="rl-grid">
            {cityToCity.map((r) => <a key={r.slug} className="rl-chip" href={r.href}>{r.name}</a>)}
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <h2 style={{ fontSize: "1.6rem", marginBottom: 4 }}>Venues</h2>
          <div className="rl-grid">
            {venueDetails.map((v) => <a key={v.slug} className="rl-chip" href={v.href}>{v.name}</a>)}
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: "var(--wash)" }}>
        <div className="wrap">
          <h2 style={{ fontSize: "1.4rem" }}>We also regularly serve</h2>
          <div className="prose">
            <p>Beyond the areas above, dispatch regularly covers the following suburbs. Call or text to confirm coverage and get a flat rate for your address.</p>
            <p><strong>Northwest suburbs:</strong> {alsoNorthwest.join(", ")}.</p>
            <p><strong>West suburbs:</strong> {alsoWest.join(", ")}.</p>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
