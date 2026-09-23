import PageHero from "@/components/PageHero.jsx";
import Cta from "@/components/Cta.jsx";
import { airportDetails } from "@/lib/data.js";
import { pageMeta } from "@/lib/seo.js";

export const metadata = pageMeta({
  title: "Chicago Airport Car Service | O'Hare, Midway & More",
  description: "Flat-rate car service to O'Hare, Midway, Chicago Executive (PWK), DuPage, Milwaukee Mitchell, Gary/Chicago and Rockford.",
  path: "/airports/",
});

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="AIRPORTS"
        title="Every Chicago-area airport, one dispatch desk"
        lead="Commercial, private and regional — flights tracked, chauffeurs briefed on the right terminal or FBO."
        crumbs={[{ name: "Airports", href: "/airports/" }]}
      />
      <section className="sec">
        <div className="wrap">
          <div className="svc">
            {airportDetails.map((a) => (
              <a key={a.slug} href={a.href}>
                <img className="photo" src={a.img} alt="" loading="lazy" />
                <div><h3>{a.name}</h3><p>{a.rate}{a.rateNote ? ` — ${a.rateNote}` : ""} · {a.driveTime}</p></div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}
