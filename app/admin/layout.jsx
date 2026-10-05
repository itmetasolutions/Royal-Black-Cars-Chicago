import { getAdminSession } from "@/lib/adminAuth.js";
import AdminShell from "@/components/admin/AdminShell.jsx";
import { getSiteSettings } from "@/lib/settings.js";

export const metadata = { title: "Admin | Royal Black Cars Chicago", robots: { index: false, follow: false } };

export default async function AdminLayout({ children }) {
  const session = await getAdminSession();
  const settings = await getSiteSettings();
  return <AdminShell session={session} logoUrl={settings.logo_url}>{children}</AdminShell>;
}
