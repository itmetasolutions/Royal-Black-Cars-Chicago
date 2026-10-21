import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero.jsx";
import RelatedLinks from "@/components/RelatedLinks.jsx";
import Cta from "@/components/Cta.jsx";
import { getBlogPost, getPublishedBlogPosts } from "@/lib/cms.js";
import { pageMeta } from "@/lib/seo.js";
import { articleSchema } from "@/lib/schema.js";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return {};
  return pageMeta({
    title: post.metaTitle || `${post.title} | Royal Black Car Chicago`,
    description: post.metaDescription || post.excerpt,
    path: `/blog/${post.slug}/`,
  });
}

export default async function Page({ params }) {
  const { slug } = await params;
  const [post, allPosts] = await Promise.all([getBlogPost(slug), getPublishedBlogPosts()]);
  if (!post) notFound();
  const related = allPosts.filter((p) => p.slug !== post.slug).map((p) => [p.title, `/blog/${p.slug}/`, p.img]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema({
            title: post.title, description: post.excerpt, image: post.img,
            datePublished: post.publishedAt, dateModified: post.updatedAt,
            url: `https://www.royalblackcarschicago.com/blog/${post.slug}/`,
          })),
        }}
      />
      <PageHero
        eyebrow="GUIDE"
        title={post.title}
        lead={post.excerpt}
        img={post.img}
        crumbs={[{ name: "Blog", href: "/blog/" }, { name: post.title, href: `/blog/${post.slug}/` }]}
        cta={false}
      />
      <section className="sec">
        <div className="wrap">
          <p className="byline">
            <b>Royal Black Car Chicago</b> · {new Date(post.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>
          <div className="prose" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
        </div>
      </section>
      <RelatedLinks title="More guides" links={related} hub={["All guides", "/blog/"]} />
      <Cta img={post.img} />
    </>
  );
}
