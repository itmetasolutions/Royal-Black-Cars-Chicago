import { getAdminSession } from "@/lib/adminAuth.js";
import { prisma } from "@/lib/db.js";

export default async function AdminDashboard() {
  const session = await getAdminSession();
  const [adminCount, services, airports, fleet, core] = await Promise.all([
    prisma.adminUser.count(),
    prisma.templatePage.count({ where: { type: "service" } }),
    prisma.templatePage.count({ where: { type: "airport" } }),
    prisma.templatePage.count({ where: { type: "fleet" } }),
    prisma.corePage.count(),
  ]);

  return (
    <>
      <h1>Dashboard</h1>
      <p className="adm-sub">Signed in as {session?.email}.</p>

      <div className="adm-card">
        <h2>Overview</h2>
        <p className="adm-card-sub">
          {adminCount} admin {adminCount === 1 ? "user" : "users"} can sign in.
          {" "}{services} service, {airports} airport, {fleet} fleet and {core} core pages are live from the database.
        </p>
      </div>

      <div className="adm-card">
        <h2>Build roadmap</h2>
        <p className="adm-card-sub">This CMS is being built in phases so each part can be reviewed before the next starts.</p>
        <ul style={{ margin: 0, paddingLeft: 20, color: "var(--muted)", fontSize: ".92rem", lineHeight: 1.9 }}>
          <li><strong style={{ color: "var(--text)" }}>Phase 1 — done:</strong> secure email + OTP login, admin users, site settings.</li>
          <li><strong style={{ color: "var(--text)" }}>Phase 2 — done:</strong> Services, Airports, Fleet and Core pages are all read from the database and editable here, with add/delete for the templated types and SEO fields everywhere.</li>
          <li><strong style={{ color: "var(--text)" }}>Phase 3 — next:</strong> Blog CMS with a rich text editor, schema and SEO fields.</li>
        </ul>
      </div>
    </>
  );
}
