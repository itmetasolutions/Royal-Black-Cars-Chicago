import { prisma } from "./db.js";

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
  const rows = await prisma.templatePage.findMany({ where: { type }, orderBy: { createdAt: "asc" } });
  return rows.map(rowToPage);
}

export async function getTemplatePage(type, slug) {
  const row = await prisma.templatePage.findUnique({ where: { type_slug: { type, slug } } });
  return row ? rowToPage(row) : null;
}

export async function getCorePage(key) {
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
}
