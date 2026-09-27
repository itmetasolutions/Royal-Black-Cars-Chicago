import { getAdminSession } from "@/lib/adminAuth.js";
import { prisma } from "@/lib/db.js";

export default async function AdminDashboard() {
  const session = await getAdminSession();
  const adminCount = await prisma.adminUser.count();

  return (
    <>
      <h1>Dashboard</h1>
      <p className="adm-sub">Signed in as {session?.email}.</p>

      <div className="adm-card">
        <h2>Overview</h2>
        <p className="adm-card-sub">{adminCount} admin {adminCount === 1 ? "user" : "users"} can sign in to this panel.</p>
      </div>

      <div className="adm-card">
        <h2>Build roadmap</h2>
        <p className="adm-card-sub">This CMS is being built in phases so each part can be reviewed before the next starts.</p>
        <ul style={{ margin: 0, paddingLeft: 20, color: "var(--muted)", fontSize: ".92rem", lineHeight: 1.9 }}>
          <li><strong style={{ color: "var(--text)" }}>Phase 1 — done:</strong> secure email + OTP login, admin users, site settings.</li>
          <li><strong style={{ color: "var(--text)" }}>Phase 2 — next:</strong> per-page-type editors (Core, Services, Airports, Fleet, Areas) with SEO fields, add/edit for template pages.</li>
          <li><strong style={{ color: "var(--text)" }}>Phase 3:</strong> Blog CMS with a rich text editor, schema and SEO fields.</li>
        </ul>
      </div>
    </>
  );
}
