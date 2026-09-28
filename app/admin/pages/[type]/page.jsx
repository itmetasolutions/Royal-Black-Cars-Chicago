import { notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/db.js";
import DeleteRowButton from "@/components/admin/DeleteRowButton.jsx";

const TYPES = ["service", "airport", "fleet", "core"];
const TITLES = { service: "Service pages", airport: "Airport pages", fleet: "Fleet pages", core: "Core pages" };

export default async function TemplatePageList({ params }) {
  const { type } = await params;
  if (!TYPES.includes(type)) notFound();

  const rows = type === "core"
    ? await prisma.corePage.findMany({ orderBy: { key: "asc" } })
    : await prisma.templatePage.findMany({ where: { type }, orderBy: { createdAt: "asc" } });

  return (
    <>
      <h1>{TITLES[type]}</h1>
      <p className="adm-sub">
        {type === "core"
          ? "Fixed set of pages — edit content and SEO, no add or delete."
          : "Add, edit or remove pages that share this template."}
      </p>

      <div className="adm-card">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
          <h2 style={{ margin: 0 }}>{rows.length} {rows.length === 1 ? "page" : "pages"}</h2>
          {type !== "core" && <Link className="adm-btn adm-btn-gold" href={`/admin/pages/${type}/new`}>+ Add new</Link>}
        </div>
        <table className="adm-table">
          <thead><tr><th>Title</th><th>Slug</th><th>Updated</th><th></th></tr></thead>
          <tbody>
            {rows.map((r) => {
              const id = type === "core" ? r.key : r.id;
              const slug = type === "core" ? r.key : r.slug;
              return (
                <tr key={id}>
                  <td>{r.title}</td>
                  <td><code style={{ fontSize: ".82rem" }}>{slug}</code></td>
                  <td>{new Date(r.updatedAt).toLocaleDateString()}</td>
                  <td style={{ textAlign: "right", display: "flex", gap: 8, justifyContent: "flex-end" }}>
                    <Link className="adm-btn" style={{ padding: "6px 14px", fontSize: ".8rem" }} href={`/admin/pages/${type}/${id}`}>Edit</Link>
                    {type !== "core" && <DeleteRowButton id={id} title={r.title} />}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
