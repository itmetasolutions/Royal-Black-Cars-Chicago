import PageHero from "@/components/PageHero.jsx";
import Reveal from "@/components/Reveal.jsx";
import Cta from "@/components/Cta.jsx";
import { Plane, Check, Pin, Clock, Car, Route } from "@/components/icons.jsx";
import { PHOTOS } from "@/lib/data.js";
import { getAllTemplatePages, getCorePage } from "@/lib/cms.js";
import { fieldsFor } from "@/lib/pageDefaults.js";
import { pageMeta } from "@/lib/seo.js";

export const dynamic = "force-dynamic";

export const metadata = pageMeta({
  title: "Chicago Airport Transfer Services | Chicago Airport Cars",
  description: "Choose Chicago airport transfer services including transport to/from O'Hare and Midway Airports by premium black cars, luxury SUVs, and group cars.",
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

      <section className="sec">
        <div className="wrap">
          <Reveal className="section-head"><p className="eyebrow">{f("optionsEyebrow")}</p><h2>{f("optionsHeading")}</h2></Reveal>
          <div className="steps cols-3">
            <Reveal delay={0} className="step"><h3>{f("ohareHeading")}</h3><p>{f("ohareText")}</p></Reveal>
            <Reveal delay={1} className="step"><h3>{f("midwayHeading")}</h3><p>{f("midwayText")}</p></Reveal>
            <Reveal delay={2} className="step"><h3>{f("privateHeading")}</h3><p>{f("privateText")}</p></Reveal>
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: "var(--wash)" }}>
        <div className="wrap">
          <Reveal className="section-head"><p className="eyebrow">{f("experienceEyebrow")}</p><h2>{f("experienceHeading")}</h2></Reveal>
          <div className="timeline">
            {[
              [Pin, f("pickupHeading"), f("pickupText")],
              [Clock, f("dropoffHeading"), f("dropoffText")],
              [Car, f("vehicleHeading"), f("vehicleText")],
              [Route, f("regionalTransferHeading"), f("regionalTransferText")],
            ].map(([Icon, heading, text], i) => (
              <Reveal key={heading} delay={i % 3} className="timeline-item">
                <div className="timeline-marker"><Icon /></div>
                <div className="timeline-content">
                  <h3>{heading}</h3>
                  <p>{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Cta img={f("ctaImg")} heading={f("ctaHeading")} text={f("ctaText")} />
    </>
  );
}
