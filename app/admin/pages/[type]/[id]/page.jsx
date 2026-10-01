import { notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/db.js";
import TemplatePageEditor from "@/components/admin/TemplatePageEditor.jsx";
import CorePageForm from "@/components/admin/CorePageForm.jsx";

const TYPES = ["service", "airport", "fleet", "venue", "area", "core"];

export default async function EditPage({ params }) {
  const { type, id } = await params;
  if (!TYPES.includes(type)) notFound();

  if (type === "core") {
    const page = await prisma.corePage.findUnique({ where: { key: id } });
    if (!page) notFound();
    return (
      <>
        <Link href="/admin/pages/core" style={{ fontSize: ".84rem", color: "var(--muted)" }}>&larr; Core pages</Link>
        <h1 style={{ marginTop: 10 }}>{page.title}</h1>
        <p className="adm-sub">Edit content and SEO for this page.</p>
        <CorePageForm page={page} />
      </>
    );
  }

  const isNew = id === "new";
  const page = isNew ? null : await prisma.templatePage.findUnique({ where: { id } });
  if (!isNew && !page) notFound();

  return (
    <>
      <Link href={`/admin/pages/${type}`} style={{ fontSize: ".84rem", color: "var(--muted)" }}>&larr; {type} pages</Link>
      <h1 style={{ marginTop: 10 }}>{isNew ? `New ${type} page` : page.title}</h1>
      <p className="adm-sub">{isNew ? "Fill in the fields below to publish a new page." : "Edit content and SEO for this page."}</p>
      <TemplatePageEditor type={type} page={page} />
    </>
  );
}
