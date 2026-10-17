import Reveal from "./Reveal.jsx";
import PageHero from "./PageHero.jsx";
import PageFaq from "./PageFaq.jsx";
import Cta from "./Cta.jsx";
import { stripHtml } from "../lib/richtext.js";

// A cluster overview page (Downtown, Northwest suburbs, West suburbs, North
// Shore): its own intro content, then one side-by-side section per sub-area
// in that cluster, each linking to that area's own detail page.
export default function ClusterPageTemplate({ cluster, areas }) {
  const img = cluster.img;
  const faqs = cluster.faqs?.length ? cluster.faqs : [];
  const detailSections = (cluster.body || [])
    .map((s) => ({ ...s, pHtml: Array.isArray(s.p) ? s.p[0] : s.p }))
    .filter((s) => s.h || stripHtml(s.pHtml));

  return (
    <>
      <PageHero
        eyebrow="SERVICE AREA"
        title={cluster.name}
        lead={stripHtml(cluster.intro) || `Chauffeured black car service throughout ${cluster.name}.`}
        img={img}
        crumbs={[{ name: "Service Areas", href: "/service-areas/" }, { name: cluster.name, href: cluster.href }]}
      />

      {detailSections.length > 0 && (
        <section className="sec">
          <div className="wrap">
            <Reveal className="section-head"><p className="eyebrow">{`ABOUT ${cluster.name.toUpperCase()}`}</p><h2>{`Black car service across ${cluster.name}`}</h2></Reveal>
            <div className="area-detail-sections">
              {detailSections.map((s, i) => (
                <Reveal key={s.h || i} delay={i % 3} className="area-detail-section">
                  {s.h && <h3>{s.h}</h3>}
                  <div className="rich-text" dangerouslySetInnerHTML={{ __html: s.pHtml }} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {areas.map((a, i) => (
        <section key={a.slug} className="sec" style={{ background: i % 2 ? "var(--wash)" : "var(--paper)" }}>
          <div className={`wrap split${i % 2 ? " rev" : ""}`}>
            <Reveal className="media" slide>
              <img className="photo" src={a.img} alt={a.name} loading="lazy" style={{ zIndex: 2 }} />
            </Reveal>
            <Reveal delay={1}>
              <p className="eyebrow">{cluster.name.toUpperCase()}</p>
              <h2>{a.name}</h2>
              <p className="lead" style={{ fontSize: "1rem" }}>{a.cardText}</p>
              <a className="btn btn-gold" href={a.href}>{`View ${a.name} area`}</a>
            </Reveal>
          </div>
        </section>
      ))}

      <PageFaq faqs={faqs} title={`Questions about ${cluster.name}`} />
      <Cta img={img} />
    </>
  );
}
