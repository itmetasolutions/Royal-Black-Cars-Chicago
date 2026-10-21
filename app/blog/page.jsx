import PageHero from "@/components/PageHero.jsx";
import Reveal from "@/components/Reveal.jsx";
import Cta from "@/components/Cta.jsx";
import { getPublishedBlogPosts, getCorePage } from "@/lib/cms.js";
import { fieldsFor } from "@/lib/pageDefaults.js";
import { PHOTOS } from "@/lib/data.js";
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
  const [featured, ...rest] = posts;

  return (
    <>
      <PageHero eyebrow={f("heroEyebrow")} title={f("heroTitle")} img={f("heroImg")} crumbs={[{ name: "Blog", href: "/blog/" }]} cta={false} />

      <section className="sec">
        <div className="wrap split">
          <Reveal className="media" slide>
            <a href={`/blog/${featured.slug}/`}><img className="photo" src={featured.img} alt="" loading="lazy" style={{ zIndex: 2 }} /></a>
          </Reveal>
          <Reveal delay={1}>
            <p className="eyebrow">LATEST GUIDE</p>
            <h2><a href={`/blog/${featured.slug}/`}>{featured.title}</a></h2>
            <p className="lead" style={{ fontSize: "1rem" }}>{featured.excerpt}</p>
            <p className="byline" style={{ marginTop: 18 }}><b>Royal Black Car Chicago</b> · {fmt(featured.publishedAt)}</p>
            <a className="btn btn-dark" href={`/blog/${featured.slug}/`}>Read the guide</a>
          </Reveal>
        </div>
      </section>

      {rest.length > 0 && (
        <section className="sec" style={{ background: "var(--wash)" }}>
          <div className="wrap">
            <p className="eyebrow">MORE GUIDES</p>
            <div style={{ marginTop: 20 }}>
              {rest.map((p) => (
                <a key={p.slug} href={`/blog/${p.slug}/`} className="post-row" style={{ color: "inherit" }}>
                  <img src={p.img} alt="" loading="lazy" />
                  <div>
                    <p className="date">{fmt(p.publishedAt)}</p>
                    <h3>{p.title}</h3>
                    <p>{p.excerpt}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <Cta img={PHOTOS.limo[2]} />
    </>
  );
}
