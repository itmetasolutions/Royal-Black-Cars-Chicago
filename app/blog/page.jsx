import PageHero from "@/components/PageHero.jsx";
import Reveal from "@/components/Reveal.jsx";
import Cta from "@/components/Cta.jsx";
import { getPublishedBlogPosts, getCorePage } from "@/lib/cms.js";
import { fieldsFor } from "@/lib/pageDefaults.js";
import { pageMeta } from "@/lib/seo.js";

export const dynamic = "force-dynamic";

export const metadata = pageMeta({
  title: "Blog | Royal Black Car Chicago",
  description: "Practical guides on Chicago airport transportation, private aviation ground transfers and booking a black car.",
  path: "/blog/",
});

function fmt(d) {
  return new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default async function Page() {
  const [posts, corePage] = await Promise.all([getPublishedBlogPosts(), getCorePage("blog")]);
  const f = fieldsFor("blog", corePage);
  if (!posts.length) {
    return <PageHero eyebrow={f("heroEyebrow")} title={f("heroTitle")} img={f("heroImg")} crumbs={[{ name: "Blog", href: "/blog/" }]} cta={false} />;
  }

  return (
    <>
      <PageHero eyebrow={f("heroEyebrow")} title={f("heroTitle")} img={f("heroImg")} crumbs={[{ name: "Blog", href: "/blog/" }]} cta={false} />

      <section className="sec">
        <div className="wrap">
          <div className="occ-grid">
            {posts.map((p, i) => (
              <Reveal key={p.slug} delay={i % 3} as="a" href={`/blog/${p.slug}/`} className="occ-card">
                <div className="occ-media">
                  <img src={p.img} alt="" loading="lazy" />
                </div>
                <div className="occ-body">
                  <p className="date">{fmt(p.publishedAt)}</p>
                  <h3>{p.title}</h3>
                  <p>{p.excerpt}</p>
                  <span className="occ-more">Read the guide <span className="arrow">&rarr;</span></span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Cta img={f("ctaImg")} heading={f("ctaHeading")} text={f("ctaText")} />
    </>
  );
}
