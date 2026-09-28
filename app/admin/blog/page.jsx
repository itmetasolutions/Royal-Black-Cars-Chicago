import Link from "next/link";
import { prisma } from "@/lib/db.js";
import DeleteBlogPostButton from "@/components/admin/DeleteBlogPostButton.jsx";

export default async function AdminBlogList() {
  const posts = await prisma.blogPost.findMany({ orderBy: { publishedAt: "desc" } });

  return (
    <>
      <h1>Blog</h1>
      <p className="adm-sub">Write, edit and publish blog posts with a rich text editor and full SEO fields.</p>

      <div className="adm-card">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
          <h2 style={{ margin: 0 }}>{posts.length} {posts.length === 1 ? "post" : "posts"}</h2>
          <Link className="adm-btn adm-btn-gold" href="/admin/blog/new">+ Add new</Link>
        </div>
        <table className="adm-table">
          <thead><tr><th>Title</th><th>Slug</th><th>Status</th><th>Published</th><th></th></tr></thead>
          <tbody>
            {posts.map((p) => (
              <tr key={p.id}>
                <td>{p.title}</td>
                <td><code style={{ fontSize: ".82rem" }}>{p.slug}</code></td>
                <td><span className={`adm-tag${p.status === "published" ? " brass" : ""}`}>{p.status}</span></td>
                <td>{new Date(p.publishedAt).toLocaleDateString()}</td>
                <td style={{ textAlign: "right", display: "flex", gap: 8, justifyContent: "flex-end" }}>
                  <Link className="adm-btn" style={{ padding: "6px 14px", fontSize: ".8rem" }} href={`/admin/blog/${p.id}`}>Edit</Link>
                  <DeleteBlogPostButton id={p.id} title={p.title} />
                </td>
              </tr>
            ))}
            {posts.length === 0 && (
              <tr><td colSpan={5} style={{ color: "var(--muted)" }}>No posts yet.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
