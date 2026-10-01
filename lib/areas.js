// Service areas became a CMS page type, but the page template was written
// against the shape in lib/locations.js (drive times as a nested object). This
// normalizes both shapes into the one the template renders, so a CMS record
// and a shipped fallback are interchangeable.
export function toLocation(page) {
  if (!page) return null;
  const drive = page.drive && typeof page.drive === "object"
    ? page.drive
    : { ORD: page.driveORD || "", MDW: page.driveMDW || "", PWK: page.drivePWK || "" };

  return {
    ...page,
    name: page.title || page.name || "",
    slug: page.slug,
    href: page.href || `/service-areas/${page.slug}/`,
    cluster: page.cluster || "",
    landmarks: page.landmarks || [],
    highway: page.highway || "",
    // A long-distance route keeps its own single drive string instead.
    drive: page.isRoute ? (typeof page.drive === "string" ? page.drive : page.driveTime || "") : drive,
    isRoute: !!page.isRoute,
    miles: page.miles || "",
    img: page.img || "",
  };
}

export const toLocations = (pages) => (pages || []).map(toLocation).filter(Boolean);

// Groups areas under their cluster, preserving the order the pages come back
// in so the admin's ordering drives the site.
export function clustersFrom(pages) {
  const out = [];
  for (const loc of toLocations(pages)) {
    if (loc.isRoute || !loc.cluster) continue;
    let group = out.find((g) => g.name === loc.cluster);
    if (!group) {
      group = { name: loc.cluster, locations: [], img: loc.img };
      out.push(group);
    }
    group.locations.push(loc);
  }
  return out;
}

export const routesFrom = (pages) => toLocations(pages).filter((l) => l.isRoute);
