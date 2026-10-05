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
          The logo, favicon, site name and tagline here are what visitors see. Changes can take up to five minutes to appear.
        </p>
        <SettingsForm initial={values} />
      </div>
    </>
  );
}
