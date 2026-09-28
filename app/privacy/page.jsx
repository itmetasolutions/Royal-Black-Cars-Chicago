import PageHero from "@/components/PageHero.jsx";
import { EMAIL, PHOTOS } from "@/lib/data.js";
import { getCorePage } from "@/lib/cms.js";
import { pageMeta } from "@/lib/seo.js";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  const page = await getCorePage("privacy");
  return pageMeta({
    title: page?.seo.metaTitle || "Privacy Policy | Royal Black Cars Chicago",
    description: page?.seo.metaDescription || "How Royal Black Cars Chicago collects, uses and protects your information.",
    path: "/privacy/",
  });
}

export default async function Page() {
  const page = await getCorePage("privacy");
  const sections = (page?.bodyText || "").split("\n\n").map((block) => {
    const [heading, ...rest] = block.split("\n");
    return { heading, body: rest.join(" ") };
  });

  return (
    <>
      <PageHero eyebrow="LEGAL" title="Privacy Policy" img={page?.heroImg || PHOTOS.skyline[2]} crumbs={[{ name: "Privacy", href: "/privacy/" }]} cta={false} />
      <section className="sec">
        <div className="wrap">
          <div className="prose">
            <p><em>Last updated: [DATE]. This page is a starting template, not a final legal document — have an attorney review it, in particular against Illinois's Biometric Information Privacy Act if any biometric data is ever collected, before publishing.</em></p>
            {sections.map((s) => (
              <div key={s.heading}>
                <h2>{s.heading}</h2>
                <p>{s.body}</p>
              </div>
            ))}
            <h2>Contact</h2>
            <p>Questions about this policy can be sent to <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>
          </div>
        </div>
      </section>
    </>
  );
}
