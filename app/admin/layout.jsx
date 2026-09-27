import { getAdminSession } from "@/lib/adminAuth.js";
import AdminShell from "@/components/admin/AdminShell.jsx";

export const metadata = { title: "Admin | Royal Black Cars Chicago", robots: { index: false, follow: false } };

export default async function AdminLayout({ children }) {
  const session = await getAdminSession();
  return <AdminShell session={session}>{children}</AdminShell>;
}
