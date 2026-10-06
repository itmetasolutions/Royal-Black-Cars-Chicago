// One shape for every card on the site.
//
// A service, airport, fleet vehicle, venue or area is shown as a card in a lot
// of places (home sections, hub grids, related links). Those cards used to
// carry their own copies of the copy, so editing a page left its cards stale.
// Now each page owns its card: the admin's "Card details" section writes the
// card* fields, and every card anywhere renders from this normalizer.
//
// Each card* field falls back to the page's own content, so a page that has
// never had its card edited still shows something sensible.

const PREFIX = {
  service: "",
  airport: "airports",
  fleet: "fleet",
  venue: "venues",
  area: "service-areas",
};

export const hrefFor = (type, page) =>
  page?.href || `/${PREFIX[type] ? `${PREFIX[type]}/` : ""}${page?.slug || ""}/`;

// The small print under a card's title, which differs per type.
function metaFor(type, page) {
  if (type === "airport") return [page.code, page.driveTime].filter(Boolean).join(" · ");
  if (type === "fleet") return page.capacity || page.models || "";
  if (type === "venue") return page.area || "";
  if (type === "area") return page.cluster || "";
  return "";
}

// The short blurb a card shows, per type, when no card text has been set.
function fallbackText(type, page) {
  if (type === "service") return page.lead || "";
  if (type === "airport") return page.rateNote || page.driveTime || "";
  if (type === "fleet") return page.models || "";
  if (type === "venue") return page.note || "";
  if (type === "area") return page.intro || (page.landmarks?.length ? `Near ${page.landmarks.slice(0, 2).join(" and ")}.` : "");
  return "";
}

export function toCard(type, page) {
  if (!page) return null;
  const title = page.cardTitle || page.title || page.name || "";
  return {
    type,
    slug: page.slug,
    href: hrefFor(type, page),
    title,
    // Kept separate from `title` so a card can be shortened ("O'Hare") without
    // touching the page's own heading ("O'Hare International Airport").
    pageTitle: page.title || page.name || title,
    text: page.cardText || fallbackText(type, page),
    cta: page.cardCta || "",
    img: page.cardImg || page.img || "",
    badge: page.cardBadge || (type === "airport" ? page.code : ""),
    price: page.cardPrice || page.rate || "",
    meta: page.cardMeta || metaFor(type, page),
  };
}

export const toCards = (type, pages) => (pages || []).map((p) => toCard(type, p)).filter(Boolean);

// Picks named pages, in the order named, for sections that feature a subset
// (the home venues strip, the home services grid). Unknown names are dropped
// rather than rendering an empty card.
export function pickCards(type, pages, names) {
  if (!names?.length) return toCards(type, pages);
  return names
    .map((name) => (pages || []).find((p) => p.slug === name || p.title === name || p.name === name))
    .filter(Boolean)
    .map((p) => toCard(type, p));
}
