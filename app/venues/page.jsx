import PageHero from "@/components/PageHero.jsx";
import Cta from "@/components/Cta.jsx";
import { venueDetails } from "@/lib/locations.js";
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
        crumbs={[{ name: "Venues", href: "/venues/" }]}
      />
      <section className="sec">
        <div className="wrap">
          <div className="rl-grid">
            {venueDetails.map((v) => (
              <a key={v.slug} className="rl-chip" href={v.href}>{v.name}</a>
            ))}
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}
