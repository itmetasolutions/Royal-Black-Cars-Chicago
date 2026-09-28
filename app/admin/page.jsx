import Link from "next/link";
import { getAdminSession } from "@/lib/adminAuth.js";
import { prisma } from "@/lib/db.js";

export default async function AdminDashboard() {
  const session = await getAdminSession();
  const [adminCount, services, airports, fleet, venues, core, posts, published] = await Promise.all([
    prisma.adminUser.count(),
    prisma.templatePage.count({ where: { type: "service" } }),
    prisma.templatePage.count({ where: { type: "airport" } }),
    prisma.templatePage.count({ where: { type: "fleet" } }),
    prisma.templatePage.count({ where: { type: "venue" } }),
    prisma.corePage.count(),
    prisma.blogPost.count(),
    prisma.blogPost.count({ where: { status: "published" } }),
  ]);

  const stats = [
    [services + airports + fleet + venues + core, "Pages live"],
    [posts, `Blog posts (${published} published)`],
    [adminCount, `Admin ${adminCount === 1 ? "user" : "users"}`],
  ];

  const quickLinks = [
    ["pages", "Pages", "Services, airports, fleet, venues & core", "/admin/pages"],
    ["doc", "Blog", "Write and publish articles", "/admin/blog"],
    ["image", "Media Library", "Upload and manage images", "/admin/media"],
    ["user", "Users", "Manage admin access", "/admin/users"],
    ["gear", "Settings", "Site-wide settings", "/admin/settings"],
  ];

  const QL_ICONS = {
    pages: <path d="M6 3h9l4 4v14H6zM15 3v4h4M9 12h6M9 16h6" />,
    doc: <path d="M6 3h8l4 4v14H6zM14 3v4h4M9 12h6M9 16h6M9 8h2" />,
    image: <path d="M4 5h16v14H4zM4 16l4.5-5 3.5 4 2.5-3L20 16" />,
    user: <path d="M12 12a4 4 0 100-8 4 4 0 000 8zM4 21c1.5-4.2 5-6 8-6s6.5 1.8 8 6" />,
    gear: <path d="M12 15a3 3 0 100-6 3 3 0 000 6zM19 12a7 7 0 00-.1-1.2l2-1.6-2-3.4-2.4 1a7 7 0 00-2-1.2L14 2h-4l-.5 2.6a7 7 0 00-2 1.2l-2.4-1-2 3.4 2 1.6A7 7 0 005 12c0 .4 0 .8.1 1.2l-2 1.6 2 3.4 2.4-1a7 7 0 002 1.2L10 22h4l.5-2.6a7 7 0 002-1.2l2.4 1 2-3.4-2-1.6c.1-.4.1-.8.1-1.2z" />,
  };

  return (
    <>
      <h1>Dashboard</h1>
      <p className="adm-sub">Signed in as {session?.email}.</p>

      <div className="adm-stats">
        {stats.map(([n, label]) => (
          <div key={label} className="adm-stat"><b>{n}</b><span>{label}</span></div>
        ))}
      </div>

      <h2 style={{ fontSize: "1.05rem", margin: "0 0 14px" }}>Quick links</h2>
      <div className="adm-quicklinks">
        {quickLinks.map(([icon, title, desc, href]) => (
          <Link key={href} href={href} className="adm-quicklink">
            <span className="adm-ql-icon">
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                {QL_ICONS[icon]}
              </svg>
            </span>
            <span><b>{title}</b><span>{desc}</span></span>
          </Link>
        ))}
      </div>
    </>
  );
}
