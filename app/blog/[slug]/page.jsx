import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero.jsx";
import RelatedLinks from "@/components/RelatedLinks.jsx";
import Cta from "@/components/Cta.jsx";
import { posts, findPost } from "@/lib/blog.js";
import { pageMeta } from "@/lib/seo.js";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const post = findPost(params.slug);
  if (!post) return {};
  return pageMeta({ title: `${post.title} | Royal Black Cars Chicago`, description: post.description, path: `/blog/${post.slug}/` });
}

export default function Page({ params }) {
  const post = findPost(params.slug);
  if (!post) notFound();
  const related = posts.filter((p) => p.slug !== post.slug).map((p) => [p.title, `/blog/${p.slug}/`]);

  return (
    <>
      <PageHero
        eyebrow="GUIDE"
        title={post.title}
        lead={post.description}
        img={post.img}
        crumbs={[{ name: "Blog", href: "/blog/" }, { name: post.title, href: `/blog/${post.slug}/` }]}
        cta={false}
      />
      <section className="sec">
        <div className="wrap">
          <p className="byline">
            <b>Royal Black Cars Chicago</b> · {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>
          <div className="prose">{post.body.map((p, i) => <p key={i}>{p}</p>)}</div>
        </div>
      </section>
      <RelatedLinks title="More guides" links={related} hub={["All guides", "/blog/"]} />
      <Cta img={post.img} />
    </>
  );
}
