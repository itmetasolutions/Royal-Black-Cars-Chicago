import Link from "next/link";
import { prisma } from "@/lib/db.js";

export default async function PagesHub() {
  const [services, airports, fleet, venues, core] = await Promise.all([
    prisma.templatePage.count({ where: { type: "service" } }),
    prisma.templatePage.count({ where: { type: "airport" } }),
    prisma.templatePage.count({ where: { type: "fleet" } }),
    prisma.templatePage.count({ where: { type: "venue" } }),
    prisma.corePage.count(),
  ]);

  const tabs = [
    ["service", "Service pages", services, "Edit any, or add a new one with its own slug, content and SEO fields."],
    ["airport", "Airport pages", airports, "Edit any, or add a new one with its own slug, content and SEO fields."],
    ["fleet", "Fleet pages", fleet, "Edit any, or add a new one with its own slug, content and SEO fields."],
    ["venue", "Venue pages", venues, "Edit any, or add a new one with its own slug, content and SEO fields."],
    ["core", "Core pages", core, "Edit content and SEO — these can't be added or removed."],
  ];

  return (
    <>
      <h1>Pages</h1>
      <p className="adm-sub">Content editors, grouped by template.</p>
      <div style={{ display: "grid", gap: 14, gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))" }}>
        {tabs.map(([type, title, count, desc]) => (
          <Link key={type} href={`/admin/pages/${type}`} className="adm-card" style={{ display: "block", color: "inherit" }}>
            <h2>{title} <span className="adm-tag brass">{count}</span></h2>
            <p className="adm-card-sub" style={{ marginBottom: 0 }}>{desc}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
