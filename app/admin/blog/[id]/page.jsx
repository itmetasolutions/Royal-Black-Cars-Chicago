import { notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/db.js";
import BlogPostEditor from "@/components/admin/BlogPostEditor.jsx";

export default async function EditBlogPost({ params }) {
  const { id } = await params;
  const isNew = id === "new";
  const post = isNew ? null : await prisma.blogPost.findUnique({ where: { id } });
  if (!isNew && !post) notFound();

  return (
    <>
      <Link href="/admin/blog" style={{ fontSize: ".84rem", color: "var(--muted)" }}>&larr; Blog</Link>
      <h1 style={{ marginTop: 10 }}>{isNew ? "New post" : post.title}</h1>
      <p className="adm-sub">{isNew ? "Write and publish a new blog post." : "Edit content and SEO for this post."}</p>
      <BlogPostEditor post={post} />
    </>
  );
}
