import PageHero from "@/components/PageHero.jsx";
import Reveal from "@/components/Reveal.jsx";
import Cta from "@/components/Cta.jsx";
import { Car as CarIcon, Seat } from "@/components/icons.jsx";
import { fleetPages } from "@/lib/data.js";
import { pageMeta } from "@/lib/seo.js";

export const metadata = pageMeta({
  title: "Our Fleet | Royal Black Cars Chicago",
  description: "Luxury sedans, SUVs, the Mercedes S-Class, Sprinter vans, stretch limos and minibuses — every vehicle class we run, with capacity and best-use guidance.",
  path: "/fleet/",
});

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="FLEET"
        title="Pick your class"
        lead="Late-model sedans, SUVs, Sprinters, stretch limos and coaches — sized to your trip, not the other way around."
        img={fleetPages[0].img}
        crumbs={[{ name: "Fleet", href: "/fleet/" }]}
      />

      <section className="sec">
        <div className="wrap">
          <div className="fleet-cards">
            {fleetPages.map((f, i) => (
              <Reveal key={f.slug} delay={i % 2} className="fleet-card">
                <a href={f.href} className="fc-photo"><img src={f.img} alt={f.title} loading="lazy" /></a>
                <div className="fc-info">
                  <h3><a href={f.href}>{f.title}</a></h3>
                  <p className="fc-models">{f.models}</p>
                  <div className="fc-specs">
                    <div><CarIcon />{f.bestFor[0]}</div>
                    <div><Seat />{f.capacity}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Cta img={fleetPages[0].img} />
    </>
  );
}
