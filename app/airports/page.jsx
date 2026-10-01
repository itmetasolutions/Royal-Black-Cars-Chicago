import PageHero from "@/components/PageHero.jsx";
import Reveal from "@/components/Reveal.jsx";
import Cta from "@/components/Cta.jsx";
import { Plane, Check } from "@/components/icons.jsx";
import { PHOTOS } from "@/lib/data.js";
import { getAllTemplatePages, getCorePage } from "@/lib/cms.js";
import { fieldsFor } from "@/lib/pageDefaults.js";
import { pageMeta } from "@/lib/seo.js";

export const dynamic = "force-dynamic";

export const metadata = pageMeta({
  title: "Chicago Airport Car Service | O'Hare, Midway & More",
  description: "Flat-rate car service to O'Hare, Midway, Chicago Executive (PWK), DuPage, Milwaukee Mitchell, Gary/Chicago and Rockford.",
  path: "/airports/",
});

export default async function Page() {
  const [rows, corePage] = await Promise.all([getAllTemplatePages("airport"), getCorePage("airports")]);
  const f = fieldsFor("airports", corePage);
  const airportDetails = rows.map((r) => ({ ...r, name: r.title }));
  const priority = airportDetails.filter((a) => a.rate !== "Custom quote");
  const secondary = airportDetails.filter((a) => a.rate === "Custom quote");

  return (
    <>
      <PageHero
        eyebrow={f("heroEyebrow")}
        title={f("heroTitle")}
        lead={f("heroLead")}
        img={f("heroImg") || PHOTOS.airportTerminal[1]}
        crumbs={[{ name: "Airports", href: "/airports/" }]}
      />

      <section className="sec">
        <div className="wrap">
          <Reveal className="section-head"><p className="eyebrow">{f("flatEyebrow")}</p><h2>{f("flatHeading")}</h2></Reveal>
          <div className="airport-cards" style={{ marginTop: 32 }}>
            {priority.map((a, i) => (
              <Reveal key={a.code} delay={i} className="airport-card">
                <div className="ac-head">
                  <b>{a.code}</b>
                  <Plane />
                </div>
                <div className="ac-body">
                  <div><span>Rate</span><strong>{a.rate}</strong></div>
                  <div><span>Drive time</span><strong>{a.driveTime}</strong></div>
                </div>
                <a className="btn btn-gold" href={a.href}>View details</a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: "var(--wash)" }}>
        <div className="wrap">
          <Reveal className="section-head"><p className="eyebrow">{f("regionalEyebrow")}</p><h2>{f("regionalHeading")}</h2></Reveal>
          <div className="svc-list" style={{ marginTop: 24 }}>
            {secondary.map((a) => (
              <a key={a.code} href={a.href} className="svc-row">
                <span className="ic"><Check /></span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3>{a.name}</h3>
                  <p>{a.rateNote} · {a.driveTime}</p>
                </div>
                <span className="go">&rarr;</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Cta img={f("ctaImg")} heading={f("ctaHeading")} text={f("ctaText")} />
    </>
  );
}
