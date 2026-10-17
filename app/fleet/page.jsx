import PageHero from "@/components/PageHero.jsx";
import Reveal from "@/components/Reveal.jsx";
import Cta from "@/components/Cta.jsx";
import BookNowButton from "@/components/BookNowButton.jsx";
import { Car as CarIcon, Seat, Bag, Clock } from "@/components/icons.jsx";
import { PHOTOS } from "@/lib/data.js";
import { getAllTemplatePages, getCorePage } from "@/lib/cms.js";
import { fieldsFor } from "@/lib/pageDefaults.js";
import { toCard } from "@/lib/cards.js";
import { pageMeta } from "@/lib/seo.js";
import { splitPairs } from "@/components/HomeExtras.jsx";
import RichText from "@/components/RichText.jsx";

export const dynamic = "force-dynamic";

export const metadata = pageMeta({
  title: "Chicago Luxury Black Car Fleet – Luxury Sedan, SUV, Van Rentals",
  description: "Check out our black car rental fleet, which includes luxury cars, executive sedans, SUVs, Sprinter vans, limousine services, party bus and more.",
  path: "/fleet/",
});

export default async function Page() {
  const [fleetPages, corePage] = await Promise.all([getAllTemplatePages("fleet"), getCorePage("fleet")]);
  const f = fieldsFor("fleet", corePage);

  return (
    <>
      <PageHero
        eyebrow={f("heroEyebrow")}
        title={f("heroTitle")}
        lead={f("heroLead")}
        img={f("heroImg") || fleetPages[0]?.img}
        crumbs={[{ name: "Fleet", href: "/fleet/" }]}
      />

      <section className="sec">
        <div className="wrap">
          <div className="fleet-cards">
            {fleetPages.map((f, i) => {
              const card = toCard("fleet", f);
              const [passengers, bagsPart] = (f.capacity || "").split(",").map((s) => s.trim());
              return (
                <Reveal key={f.slug} delay={i % 3} className="fleet-card">
                  <a href={f.href} className="fc-photo">
                    <img src={card.img} alt={card.title} loading="lazy" />
                    <span className="fc-price">{card.price}</span>
                  </a>
                  <div className="fc-info">
                    <h3><a href={f.href}>{f.title}</a></h3>
                    <p className="fc-pax"><Seat />{passengers}</p>
                    <RichText className="fc-desc rich-text" value={f.body} />
                    <div className="fc-specs">
                      <div><Bag />{bagsPart || "Chauffeur included"}</div>
                      <div><CarIcon />{f.models}</div>
                      <div><Clock /><b>Hourly</b> {f.hourlyRate}</div>
                    </div>
                    <BookNowButton className="btn btn-gold" style={{ marginTop: "auto", width: "100%" }} />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: "var(--wash)" }}>
        <div className="wrap">
          <Reveal className="section-head"><h2 style={{ fontSize: "1.4rem" }}>{f("guideHeading")}</h2></Reveal>
          <div className="svc-list" style={{ marginTop: 24 }}>
            {splitPairs(f("guideItems")).map(([label, val]) => (
              <div key={label} className="svc-row">
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3>{label}</h3>
                  <p>{val}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="prose rich-text" style={{ marginTop: 28 }}>
            <RichText value={f("noteText")} />
            <p>See <a href="/rates/">how rates are calculated</a> or <a href="/services/">browse services</a> to find the one built for your trip.</p>
          </div>
        </div>
      </section>

      <Cta img={f("ctaImg")} heading={f("ctaHeading")} text={f("ctaText")} />
    </>
  );
}
