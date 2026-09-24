import PageHero from "@/components/PageHero.jsx";
import Reveal from "@/components/Reveal.jsx";
import Cta from "@/components/Cta.jsx";
import { posts } from "@/lib/blog.js";
import { PHOTOS } from "@/lib/data.js";
import { pageMeta } from "@/lib/seo.js";

export const metadata = pageMeta({
  title: "Blog | Royal Black Cars Chicago",
  description: "Practical guides on Chicago airport transportation, private aviation ground transfers and booking a black car.",
  path: "/blog/",
});

function fmt(d) {
  return new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default function Page() {
  const [featured, ...rest] = posts;
  return (
    <>
      <PageHero eyebrow="BLOG" title="Guides for getting around Chicago" img={PHOTOS.chauffeur[0]} crumbs={[{ name: "Blog", href: "/blog/" }]} cta={false} />

      <section className="sec">
        <div className="wrap split">
          <Reveal className="media" slide>
            <a href={`/blog/${featured.slug}/`}><img className="photo" src={featured.img} alt="" loading="lazy" style={{ zIndex: 2 }} /></a>
          </Reveal>
          <Reveal delay={1}>
            <p className="eyebrow">LATEST GUIDE</p>
            <h2><a href={`/blog/${featured.slug}/`}>{featured.title}</a></h2>
            <p className="lead" style={{ fontSize: "1rem" }}>{featured.description}</p>
            <p className="byline" style={{ marginTop: 18 }}><b>Royal Black Cars Chicago</b> · {fmt(featured.date)}</p>
            <a className="btn btn-dark" href={`/blog/${featured.slug}/`}>Read the guide</a>
          </Reveal>
        </div>
      </section>

      <section className="sec" style={{ background: "var(--wash)" }}>
        <div className="wrap">
          <p className="eyebrow">MORE GUIDES</p>
          <div style={{ marginTop: 20 }}>
            {rest.map((p) => (
              <a key={p.slug} href={`/blog/${p.slug}/`} className="post-row" style={{ color: "inherit" }}>
                <img src={p.img} alt="" loading="lazy" />
                <div>
                  <p className="date">{fmt(p.date)}</p>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Cta img={PHOTOS.limo[2]} />
    </>
  );
}
