import { prisma } from "./db.js";

// Alt text and dimensions for images in the blob library.
//
// This lives in the existing SiteSetting key/value table rather than a table
// of its own, so it works against the database as it is today — no migration
// to run before an editor can save alt text. The whole map is one JSON row,
// which is fine at this scale (a few hundred images, read once per library
// load).
const KEY = "media_meta";

export async function readMediaMeta() {
  try {
    const row = await prisma.siteSetting.findUnique({ where: { key: KEY } });
    if (!row?.value) return {};
    const parsed = JSON.parse(row.value);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch (err) {
    console.error("[media] metadata read failed:", err);
    return {};
  }
}

// Merges one image's metadata into the map. Read-modify-write, so a save
// never drops what another image holds.
export async function writeMediaMeta(url, patch) {
  const all = await readMediaMeta();
  const next = { ...all, [url]: { ...(all[url] || {}), ...patch } };
  const value = JSON.stringify(next);
  await prisma.siteSetting.upsert({
    where: { key: KEY },
    create: { key: KEY, value },
    update: { value },
  });
  return next[url];
}

export async function removeMediaMeta(url) {
  try {
    const all = await readMediaMeta();
    if (!(url in all)) return;
    delete all[url];
    await prisma.siteSetting.upsert({
      where: { key: KEY },
      create: { key: KEY, value: JSON.stringify(all) },
      update: { value: JSON.stringify(all) },
    });
  } catch (err) {
    console.error("[media] metadata delete failed:", err);
  }
}
