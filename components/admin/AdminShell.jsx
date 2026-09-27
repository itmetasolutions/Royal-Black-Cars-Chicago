"use client";

import { usePathname, useRouter } from "next/navigation";

const NAV = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/settings", label: "Settings" },
  { href: "/admin/pages", label: "Pages" },
  { href: "/admin/blog", label: "Blog" },
  { href: "/admin/users", label: "Users" },
];

export default function AdminShell({ session, children }) {
  const pathname = usePathname();
  const router = useRouter();

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
          <button className="adm-btn adm-btn-line" onClick={logout} type="button">Log out</button>
        </div>
      </header>
      <div className="adm-body-row">
        <nav className="adm-sidebar">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className={`adm-nav-link${pathname === n.href ? " active" : ""}`}>{n.label}</a>
          ))}
        </nav>
        <main className="adm-main">{children}</main>
      </div>
    </div>
  );
}
