import PageHero from "@/components/PageHero.jsx";
import Cta from "@/components/Cta.jsx";
import { getAllTemplatePages, getCorePage } from "@/lib/cms.js";
import { fieldsFor } from "@/lib/pageDefaults.js";
import { toCard } from "@/lib/cards.js";
import { IMG } from "@/lib/data.js";
import { pageMeta } from "@/lib/seo.js";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  const page = await getCorePage("venues");
  return pageMeta({
    title: page?.seo?.metaTitle || "Venue Transportation | Royal Black Cars Chicago",
    description: page?.seo?.metaDescription || "Drop-off and pickup at United Center, Soldier Field, Wrigley Field, McCormick Place and every major Chicago venue.",
    path: "/venues/",
  });
}

export default async function Page() {
  const [venues, corePage] = await Promise.all([getAllTemplatePages("venue"), getCorePage("venues")]);
  const f = fieldsFor("venues", corePage);
  return (
    <>
      <PageHero
        eyebrow={f("heroEyebrow")}
        title={f("heroTitle")}
        lead={f("heroLead")}
        img={f("heroImg") || venues[0]?.img || IMG.hero}
        crumbs={[{ name: "Venues", href: "/venues/" }]}
      />
      <section className="sec">
        <div className="wrap">
          <div className="svc">
            {venues.map((v) => toCard("venue", v)).map((c) => (
              <a key={c.href} href={c.href}>
                <img className="photo" src={c.img || IMG.hero} alt="" loading="lazy" />
                <div><h3>{c.title}</h3><p>{c.meta}</p></div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <Cta img={f("ctaImg")} heading={f("ctaHeading")} text={f("ctaText")} />
    </>
  );
}
