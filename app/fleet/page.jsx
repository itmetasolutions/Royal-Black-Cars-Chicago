import PageHero from "@/components/PageHero.jsx";
import Cta from "@/components/Cta.jsx";
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
          <div className="svc">
            {fleetPages.map((f) => (
              <a key={f.slug} href={f.href}>
                <img className="photo" src={f.img} alt="" loading="lazy" />
                <div><h3>{f.title}</h3><p>{f.capacity}</p></div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}
