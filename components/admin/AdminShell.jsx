"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import ThemeToggle from "../ThemeToggle.jsx";

const PAGE_TYPES = [
  { href: "/admin/pages/service", label: "Services" },
  { href: "/admin/pages/airport", label: "Airports" },
  { href: "/admin/pages/fleet", label: "Fleet" },
  { href: "/admin/pages/venue", label: "Venues" },
  { href: "/admin/pages/area", label: "Service areas" },
  { href: "/admin/pages/core", label: "Core pages" },
];

const NAV = [
  { href: "/admin", label: "Dashboard", icon: "grid" },
  { href: "/admin/blog", label: "Blog", icon: "doc" },
  { href: "/admin/pricing", label: "Pricing", icon: "tag" },
  { href: "/admin/media", label: "Media Library", icon: "image" },
  { href: "/admin/users", label: "Users", icon: "user" },
  { href: "/admin/settings", label: "Settings", icon: "gear" },
];

const ICONS = {
  grid: <path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" />,
  pages: <path d="M6 3h9l4 4v14H6zM15 3v4h4M9 12h6M9 16h6" />,
  doc: <path d="M6 3h8l4 4v14H6zM14 3v4h4M9 12h6M9 16h6M9 8h2" />,
  image: <path d="M4 5h16v14H4zM4 16l4.5-5 3.5 4 2.5-3L20 16" />,
  tag: <path d="M3 3h8l10 10-8 8L3 11zM7.5 7.5h.01" />,
  user: <path d="M12 12a4 4 0 100-8 4 4 0 000 8zM4 21c1.5-4.2 5-6 8-6s6.5 1.8 8 6" />,
  gear: <path d="M12 15a3 3 0 100-6 3 3 0 000 6zM19 12a7 7 0 00-.1-1.2l2-1.6-2-3.4-2.4 1a7 7 0 00-2-1.2L14 2h-4l-.5 2.6a7 7 0 00-2 1.2l-2.4-1-2 3.4 2 1.6A7 7 0 005 12c0 .4 0 .8.1 1.2l-2 1.6 2 3.4 2.4-1a7 7 0 002 1.2L10 22h4l.5-2.6a7 7 0 002-1.2l2.4 1 2-3.4-2-1.6c.1-.4.1-.8.1-1.2z" />,
};

function Icon({ name }) {
  return (
    <svg className="adm-nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {ICONS[name]}
    </svg>
  );
}

export default function AdminShell({ session, children }) {
  const pathname = usePathname();
  const router = useRouter();
  const onPagesSection = pathname.startsWith("/admin/pages");
  const [pagesOpen, setPagesOpen] = useState(onPagesSection);

  if (pathname === "/admin/login") return <div className="adm-bare">{children}</div>;

  const logout = async () => {
    await fetch("/api/admin/auth/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  };

  return (
    <div className="adm-shell">
      <header className="adm-topbar">
        <span className="adm-brand">Royal Black Cars <b>Admin</b></span>
        <div className="adm-topbar-right">
          {session?.email && <span className="adm-user">{session.email}</span>}
          <ThemeToggle className="theme-toggle adm-theme-toggle" />
          <button className="adm-btn adm-btn-line" onClick={logout} type="button">Log out</button>
        </div>
      </header>
      <div className="adm-body-row">
        <nav className="adm-sidebar">
          <a href="/admin" className={`adm-nav-link${pathname === "/admin" ? " active" : ""}`}>
            <Icon name="grid" />Dashboard
          </a>

          <button
            type="button"
            className={`adm-nav-link adm-nav-toggle${onPagesSection ? " active" : ""}`}
            onClick={() => setPagesOpen((v) => !v)}
            aria-expanded={pagesOpen}
          >
            <Icon name="pages" />Pages
            <i className={`adm-nav-chev${pagesOpen ? " open" : ""}`} aria-hidden="true" />
          </button>
          <div className={`adm-nav-sub${pagesOpen ? " open" : ""}`}>
            {PAGE_TYPES.map((p) => (
              <a key={p.href} href={p.href} className={`adm-nav-sublink${pathname.startsWith(p.href) ? " active" : ""}`}>
                {p.label}
              </a>
            ))}
          </div>

          {NAV.slice(1).map((n) => (
            <a key={n.href} href={n.href} className={`adm-nav-link${pathname.startsWith(n.href) ? " active" : ""}`}>
              <Icon name={n.icon} />{n.label}
            </a>
          ))}
        </nav>
        <main className="adm-main">{children}</main>
      </div>
    </div>
  );
}
