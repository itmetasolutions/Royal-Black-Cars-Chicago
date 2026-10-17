import PageHero from "@/components/PageHero.jsx";
import Reveal from "@/components/Reveal.jsx";
import Cta from "@/components/Cta.jsx";
import { clusters as fallbackClusters, cityToCity as fallbackRoutes, venueDetails as fallbackVenues, clusterCopy, locationImage, venueImage } from "@/lib/locations.js";
import { northwest, west, airportDetails, IMG, PHOTOS } from "@/lib/data.js";
import { pageMeta } from "@/lib/seo.js";
import { getAllTemplatePages, getCorePage } from "@/lib/cms.js";
import { fieldsFor } from "@/lib/pageDefaults.js";
import { clustersFrom, routesFrom } from "@/lib/areas.js";

// Served per request so areas added or edited in the admin appear here.
export const dynamic = "force-dynamic";

export const metadata = pageMeta({
  title: "Chicago Areas of Service | Car and Limousine Service in Chicago | Royal Black Cars",
  description: "Royal Black Cars Chicago provides chauffeur services in Downtown Chicago, O'Hare, Midway, North Shore, west and northwest suburbs, south suburbs, popular landmarks, all executive and long distant airports.",
  path: "/service-areas/",
});

export default async function Page() {
  const [corePage, areaPages, venuePages, airportPages] = await Promise.all([
    getCorePage("service-areas"),
    getAllTemplatePages("area"),
    getAllTemplatePages("venue"),
    getAllTemplatePages("airport"),
  ]);
  const f = fieldsFor("service-areas", corePage);

  // Clusters, routes and venues all come from their own admin pages now. A
  // cluster built from those live pages has no field of its own to carry its
  // intro copy, so it's filled in here by cluster name.
  const cmsClusters = clustersFrom(areaPages);
  const clusters = (cmsClusters.length ? cmsClusters : fallbackClusters)
    .map((c) => ({ ...c, blurb: c.blurb || clusterCopy[c.name]?.blurb, detail: c.detail || clusterCopy[c.name]?.detail }));
  const cmsRoutes = routesFrom(areaPages);
  const cityToCity = cmsRoutes.length ? cmsRoutes : fallbackRoutes;
  const airports = airportPages?.length ? airportPages : airportDetails;
  const venueDetails = venuePages?.length
    ? venuePages.map((v) => ({ ...v, name: v.cardTitle || v.title, href: v.href || `/venues/${v.slug}/` }))
    : fallbackVenues;
  const priorityNames = new Set(clusters.flatMap((c) => c.locations.map((l) => l.name)));
  const alsoNorthwest = northwest.filter((n) => !priorityNames.has(n));
  const alsoWest = west.filter((n) => !priorityNames.has(n));

  return (
    <>
      <PageHero
        eyebrow={f("heroEyebrow")}
        title={f("heroTitle")}
        lead={f("heroLead")}
        img={f("heroImg") || IMG.areaMap}
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
          <Reveal className="section-head">
            <p className="eyebrow">{f("airportsEyebrow")}</p>
            <h2>{f("airportsHeading")}</h2>
            <p className="lead" style={{ marginTop: 16 }}>{f("airportsLead")}</p>
          </Reveal>
          <div className="stat-grid" style={{ marginTop: 32 }}>
            {airports.map((a) => (
              <a key={a.slug} href={a.href || `/airports/${a.slug}/`} className="stat-card" style={{ textAlign: "left" }}>
                <span>{a.name || a.title}</span>
                <b style={{ fontSize: "1.15rem" }}>{a.code}</b>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: "var(--wash)" }}>
        <div className="wrap">
          <Reveal className="section-head">
            <p className="eyebrow">{f("venuesEyebrow")}</p>
            <h2>{f("venuesHeading")}</h2>
            <p className="lead" style={{ marginTop: 16 }}>{f("venuesLead")}</p>
          </Reveal>
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
          <Reveal className="section-head"><p className="eyebrow">{f("routesEyebrow")}</p><h2>{f("routesHeading")}</h2></Reveal>
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

      <Cta img={f("ctaImg")} heading={f("ctaHeading")} text={f("ctaText")} />
    </>
  );
}
