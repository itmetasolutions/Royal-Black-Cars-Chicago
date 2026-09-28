import PageHero from "@/components/PageHero.jsx";
import { PHONE, EMAIL, PHOTOS } from "@/lib/data.js";
import { getCorePage } from "@/lib/cms.js";
import { pageMeta } from "@/lib/seo.js";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  const page = await getCorePage("terms");
  return pageMeta({
    title: page?.seo.metaTitle || "Terms & Conditions | Royal Black Cars Chicago",
    description: page?.seo.metaDescription || "Terms and conditions for booking and riding with Royal Black Cars Chicago.",
    path: "/terms/",
  });
}

export default async function Page() {
  const page = await getCorePage("terms");
  const sections = (page?.bodyText || "").split("\n\n").map((block) => {
    const [heading, ...rest] = block.split("\n");
    return { heading, body: rest.join(" ") };
  });

  return (
    <>
      <PageHero eyebrow="LEGAL" title="Terms & Conditions" img={page?.heroImg || PHOTOS.loop[2]} crumbs={[{ name: "Terms", href: "/terms/" }]} cta={false} />
      <section className="sec">
        <div className="wrap">
          <div className="prose">
            <p><em>Last updated: [DATE]. This page is a starting template, not a final legal document — have an attorney review it against your actual business entity, insurance policy and local regulations before publishing.</em></p>
            {sections.map((s) => (
              <div key={s.heading}>
                <h2>{s.heading}</h2>
                <p>{s.body}</p>
              </div>
            ))}
            <h2>Contact</h2>
            <p>Questions about these terms can be sent to <a href={`mailto:${EMAIL}`}>{EMAIL}</a> or {PHONE}.</p>
          </div>
        </div>
      </section>
    </>
  );
}
