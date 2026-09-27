import { prisma } from "@/lib/db.js";
import SettingsForm from "@/components/admin/SettingsForm.jsx";

export default async function AdminSettingsPage() {
  const rows = await prisma.siteSetting.findMany();
  const values = Object.fromEntries(rows.map((r) => [r.key, r.value]));

  return (
    <>
      <h1>Settings</h1>
      <p className="adm-sub">General site information, stored in the database.</p>
      <div className="adm-card">
        <h2>Site details</h2>
        <p className="adm-card-sub">
          Saved here now — wiring these into the live pages (so editing them here changes what visitors see) is part of Phase 2, since the site currently renders these pages statically at build time.
        </p>
        <SettingsForm initial={values} />
      </div>
    </>
  );
}
