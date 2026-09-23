import PageHero from "@/components/PageHero.jsx";
import Cta from "@/components/Cta.jsx";
import { posts } from "@/lib/blog.js";
import { pageMeta } from "@/lib/seo.js";

export const metadata = pageMeta({
  title: "Blog | Royal Black Cars Chicago",
  description: "Practical guides on Chicago airport transportation, private aviation ground transfers and booking a black car.",
  path: "/blog/",
});

export default function Page() {
  return (
    <>
      <PageHero eyebrow="BLOG" title="Guides for getting around Chicago" crumbs={[{ name: "Blog", href: "/blog/" }]} cta={false} />
      <section className="sec">
        <div className="wrap">
          <div className="svc">
            {posts.map((p) => (
              <a key={p.slug} href={`/blog/${p.slug}/`}>
                <img className="photo" src={p.img} alt="" loading="lazy" />
                <div><h3>{p.title}</h3><p>{p.description}</p></div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}
