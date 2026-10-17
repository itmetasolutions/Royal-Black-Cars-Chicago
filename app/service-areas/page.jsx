import PageHero from "@/components/PageHero.jsx";
import Reveal from "@/components/Reveal.jsx";
import Cta from "@/components/Cta.jsx";
import RichText from "@/components/RichText.jsx";
import { Pin } from "@/components/icons.jsx";
import { cityToCity as fallbackRoutes, venueDetails as fallbackVenues, venueImage } from "@/lib/locations.js";
import { northwest, west, airportDetails, IMG } from "@/lib/data.js";
import { pageMeta } from "@/lib/seo.js";
import { getAllTemplatePages, getCorePage } from "@/lib/cms.js";
import { fieldsFor } from "@/lib/pageDefaults.js";
import { routesFrom } from "@/lib/areas.js";

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

  // The four area clusters (Downtown, Northwest suburbs, West suburbs, North
  // Shore) are fully admin-editable fields on this page now, rather than
  // derived from the individual area pages.
  const clusters = [1, 2, 3, 4].map((n) => ({
    img: f(`cluster${n}Img`),
    eyebrow: f(`cluster${n}Eyebrow`),
    heading: f(`cluster${n}Heading`),
    text: f(`cluster${n}Text`),
    pills: f(`cluster${n}Pills`) || [],
    ctaLabel: f(`cluster${n}CtaLabel`),
    ctaHref: f(`cluster${n}CtaHref`),
  }));

  // Routes and venues still come from their own admin pages.
  const cmsRoutes = routesFrom(areaPages);
  const cityToCity = cmsRoutes.length ? cmsRoutes : fallbackRoutes;
  const airports = airportPages?.length ? airportPages : airportDetails;
  const venueDetails = venuePages?.length
    ? venuePages.map((v) => ({ ...v, name: v.cardTitle || v.title, href: v.href || `/venues/${v.slug}/` }))
    : fallbackVenues;
  const priorityNames = new Set(clusters.flatMap((c) => c.pills.map(([name]) => name)));
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
        <section key={c.heading} className="sec" style={{ background: i % 2 ? "var(--wash)" : "var(--paper)" }}>
          <div className={`wrap split${i % 2 ? " rev" : ""}`}>
            <Reveal className="media" slide>
              <img className="photo" src={c.img} alt={c.heading} loading="lazy" style={{ zIndex: 2 }} />
            </Reveal>
            <Reveal delay={1}>
              <p className="eyebrow">{c.eyebrow}</p>
              <h2>{c.heading}</h2>
              <RichText className="lead rich-text" style={{ fontSize: "1rem" }} value={c.text} />
              <div className="rl-grid">
                {c.pills.map(([name, href]) => <a key={name + href} className="rl-chip" href={href}>{name}</a>)}
              </div>
              {c.ctaLabel && c.ctaHref && (
                <a className="btn btn-gold" href={c.ctaHref} style={{ marginTop: 24 }}>{c.ctaLabel}</a>
              )}
            </Reveal>
          </div>
        </section>
      ))}

      <section className="sec">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="eyebrow">{f("airportsEyebrow")}</p>
            <h2>{f("airportsHeading")}</h2>
            <p className="lead">{f("airportsLead")}</p>
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
            <p className="lead">{f("venuesLead")}</p>
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

      <section className="sec" style={{ background: "var(--wash)" }}>
        <div className="wrap">
          <Reveal className="section-head">
            <p className="eyebrow">ALSO SERVING</p>
            <h2 style={{ fontSize: "1.4rem" }}>We also regularly serve</h2>
            <p className="lead" style={{ fontSize: "1rem" }}>Beyond the priority areas above, dispatch regularly covers the following suburbs. Call or text to confirm coverage and get a flat rate for your address.</p>
          </Reveal>
          <div className="also-serve-grid">
            <Reveal delay={0} className="also-serve-card">
              <h3><Pin />Northwest suburbs</h3>
              <div className="chips">{alsoNorthwest.map((n) => <span key={n} className="chip">{n}</span>)}</div>
            </Reveal>
            <Reveal delay={1} className="also-serve-card">
              <h3><Pin />West suburbs</h3>
              <div className="chips">{alsoWest.map((n) => <span key={n} className="chip">{n}</span>)}</div>
            </Reveal>
          </div>
        </div>
      </section>

      <Cta img={f("ctaImg")} heading={f("ctaHeading")} text={f("ctaText")} />
    </>
  );
}
