import { unstable_cache } from "next/cache";
import { prisma } from "./db.js";

// Shipped values. The admin's Settings page overrides any of these; a missing
// or unreachable database falls back to them so the site still renders.
export const siteDefaults = {
  site_name: "Royal Black Cars Chicago",
  tagline: "Chicago's black car service, priced before you ride.",
  contact_phone: "+1 872 484 8060",
  contact_email: "info@royalblackcarchicago.com",
  logo_url: "/brand/logo.png",
  favicon_url: "/brand/favicon.svg",
};

async function readSettings() {
  try {
    const rows = await prisma.siteSetting.findMany();
    const saved = Object.fromEntries(rows.map((r) => [r.key, r.value]));
    const merged = { ...siteDefaults };
    for (const key of Object.keys(siteDefaults)) {
      if (saved[key]) merged[key] = saved[key];
    }
    return merged;
  } catch (err) {
    console.error("[settings] read failed, using defaults:", err);
    return { ...siteDefaults };
  }
}

// Cached so the root layout can read settings without making every page dynamic.
export const getSiteSettings = unstable_cache(readSettings, ["site-settings"], { revalidate: 300 });
