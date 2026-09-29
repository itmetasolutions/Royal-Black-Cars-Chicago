import PageHero from "@/components/PageHero.jsx";
import Reveal from "@/components/Reveal.jsx";
import Cta from "@/components/Cta.jsx";
import BookNowButton from "@/components/BookNowButton.jsx";
import { Car as CarIcon, Seat, Bag, Clock } from "@/components/icons.jsx";
import { PHOTOS } from "@/lib/data.js";
import { getAllTemplatePages } from "@/lib/cms.js";
import { pageMeta } from "@/lib/seo.js";

export const dynamic = "force-dynamic";

export const metadata = pageMeta({
  title: "Our Fleet | Royal Black Cars Chicago",
  description: "Luxury and executive sedans, luxury and executive SUVs, shuttle and executive Sprinters, a limousine, and a mini coach — every vehicle class we run, with capacity and rate guidance.",
  path: "/fleet/",
});

export default async function Page() {
  const fleetPages = await getAllTemplatePages("fleet");

  return (
    <>
      <PageHero
        eyebrow="FLEET"
        title="Pick your class"
        lead="Late-model sedans, SUVs, Sprinters, a limousine and a mini coach — sized to your trip, not the other way around."
        img={fleetPages[0]?.img}
        crumbs={[{ name: "Fleet", href: "/fleet/" }]}
      />

      <section className="sec">
        <div className="wrap">
          <div className="fleet-cards">
            {fleetPages.map((f, i) => {
              const [passengers, bagsPart] = f.capacity.split(",").map((s) => s.trim());
              return (
                <Reveal key={f.slug} delay={i % 3} className="fleet-card">
                  <a href={f.href} className="fc-photo">
                    <img src={f.img} alt={f.title} loading="lazy" />
                    <span className="fc-price">{f.rate}</span>
                  </a>
                  <div className="fc-info">
                    <h3><a href={f.href}>{f.title}</a></h3>
                    <p className="fc-pax"><Seat />{passengers}</p>
                    <p className="fc-desc">{f.body}</p>
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
          <div className="prose">
            <p>Not sure which class fits your trip? Dispatch will ask a few questions about group size, luggage and occasion, then recommend the right vehicle — you're never upsold into more than you need. See <a href="/rates/">how rates are calculated</a> or <a href="/services/">browse services</a> to find the one built for your trip.</p>
          </div>
        </div>
      </section>

      <Cta img={PHOTOS.suv[0]} />
    </>
  );
}
