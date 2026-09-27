import { prisma } from "@/lib/db.js";
import UsersManager from "@/components/admin/UsersManager.jsx";
import { getAdminSession } from "@/lib/adminAuth.js";

export default async function AdminUsersPage() {
  const session = await getAdminSession();
  const users = await prisma.adminUser.findMany({
    orderBy: { createdAt: "asc" },
    select: { id: true, email: true, role: true, createdAt: true, lastLogin: true },
  });

  return (
    <>
      <h1>Users</h1>
      <p className="adm-sub">People who can sign in to this admin panel with an emailed code.</p>
      <div className="adm-card">
        <UsersManager initialUsers={JSON.parse(JSON.stringify(users))} currentUserId={session?.userId} />
      </div>
    </>
  );
}
