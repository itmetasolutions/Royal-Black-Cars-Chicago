import PageHero from "@/components/PageHero.jsx";
import Cta from "@/components/Cta.jsx";
import { serviceDetails } from "@/lib/data.js";
import { pageMeta } from "@/lib/seo.js";

export const metadata = pageMeta({
  title: "Chicago Black Car Services | Royal Black Cars",
  description: "Airport transfers, corporate travel, hourly chauffeur, private aviation, weddings and more — every Royal Black Cars Chicago service in one place.",
  path: "/services/",
});

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="SERVICES"
        title="Every way to book a black car in Chicago"
        lead="From a single airport run to a multi-day corporate roadshow, one flat rate agreed before you ride."
        crumbs={[{ name: "Services", href: "/services/" }]}
      />
      <section className="sec">
        <div className="wrap">
          <div className="svc">
            {serviceDetails.map((s) => (
              <a key={s.slug} href={s.href}>
                <img className="photo" src={s.img} alt="" loading="lazy" />
                <div><h3>{s.title}</h3><p>{s.lead}</p></div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}
