import { prisma } from "./db.js";
import { serviceDetails, airportDetails, fleetPages } from "./data.js";
import { venueDetails, allLocations } from "./locations.js";

// Static copies of the pages the CMS manages. They ship with the app and are
// what the site rendered before the CMS existed, so they double as the safety
// net whenever the database has nothing to say.
const staticPages = {
  service: serviceDetails,
  airport: airportDetails,
  fleet: fleetPages,
  venue: venueDetails,
  area: allLocations,
};

const withSeo = (page) => ({ seo: {}, title: page.title || page.name, ...page });
const staticFallback = (type) => (staticPages[type] || []).map(withSeo);

// The public site is designed to render from its static fallbacks when the CMS
// has nothing for a page, so a database that is unreachable (no DATABASE_URL on
// the deployment, a connection cap, a cold Postgres) should degrade the same
// way rather than 500 the whole render. Every read goes through this.
async function safe(run, fallback) {
  try {
    return await run();
  } catch (err) {
    console.error("[cms] read failed, falling back to static content:", err);
    return fallback;
  }
}

function rowToPage(row) {
  return {
    slug: row.slug,
    title: row.title,
    ...row.data,
    seo: {
      metaTitle: row.metaTitle,
      metaDescription: row.metaDescription,
      focusKeyword: row.focusKeyword,
      secondaryKeywords: row.secondaryKeywords,
    },
  };
}

export async function getAllTemplatePages(type) {
  const fallback = staticFallback(type);
  const rows = await safe(
    () => prisma.templatePage.findMany({ where: { type }, orderBy: { createdAt: "asc" } }),
    null,
  );
  return rows?.length ? rows.map(rowToPage) : fallback;
}

export async function getTemplatePage(type, slug) {
  const row = await safe(
    () => prisma.templatePage.findUnique({ where: { type_slug: { type, slug } } }),
    null,
  );
  if (row) return rowToPage(row);
  return staticFallback(type).find((p) => p.slug === slug) || null;
}

export async function getPublishedBlogPosts() {
  return safe(
    () => prisma.blogPost.findMany({ where: { status: "published" }, orderBy: { publishedAt: "desc" } }),
    [],
  );
}

export async function getBlogPost(slug) {
  return safe(async () => {
    const row = await prisma.blogPost.findUnique({ where: { slug } });
    return row && row.status === "published" ? row : null;
  }, null);
}

export async function getCorePage(key) {
  return safe(async () => {
    const row = await prisma.corePage.findUnique({ where: { key } });
    if (!row) return null;
    return {
      key: row.key,
      title: row.title,
      ...row.fields,
      seo: {
        metaTitle: row.metaTitle,
        metaDescription: row.metaDescription,
        focusKeyword: row.focusKeyword,
        secondaryKeywords: row.secondaryKeywords,
      },
    };
  }, null);
}
