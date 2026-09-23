import PageHero from "@/components/PageHero.jsx";
import Cta from "@/components/Cta.jsx";
import { venueDetails, venueImage } from "@/lib/locations.js";
import { pageMeta } from "@/lib/seo.js";

export const metadata = pageMeta({
  title: "Venue Transportation | Royal Black Cars Chicago",
  description: "Drop-off and pickup at United Center, Soldier Field, Wrigley Field, McCormick Place and every major Chicago venue.",
  path: "/venues/",
});

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="VENUES"
        title="Arena nights, without the parking"
        lead="Dropped at the closest open gate, picked up when the event actually ends — not a fixed time that assumes it runs on schedule."
        img={venueImage(venueDetails[0])}
        crumbs={[{ name: "Venues", href: "/venues/" }]}
      />
      <section className="sec">
        <div className="wrap">
          <div className="svc">
            {venueDetails.map((v) => (
              <a key={v.slug} href={v.href}>
                <img className="photo" src={venueImage(v)} alt="" loading="lazy" />
                <div><h3>{v.name}</h3><p>{v.area}</p></div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}
