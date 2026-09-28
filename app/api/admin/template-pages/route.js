import { NextResponse } from "next/server";
import { prisma } from "@/lib/db.js";

const TYPES = ["service", "airport", "fleet"];
const SLUG_RE = /^[a-z0-9]+(-[a-z0-9]+)*$/;

export async function GET(req) {
  const type = new URL(req.url).searchParams.get("type");
  if (!TYPES.includes(type)) return NextResponse.json({ ok: false, error: "Invalid type." }, { status: 400 });
  const pages = await prisma.templatePage.findMany({ where: { type }, orderBy: { createdAt: "asc" } });
  return NextResponse.json({ ok: true, pages });
}

export async function POST(req) {
  const body = await req.json().catch(() => null);
  const { type, slug, title, href, data, metaTitle, metaDescription, focusKeyword, secondaryKeywords } = body || {};

  if (!TYPES.includes(type)) return NextResponse.json({ ok: false, error: "Invalid type." }, { status: 400 });
  if (!slug || !SLUG_RE.test(slug)) return NextResponse.json({ ok: false, error: "Slug must be lowercase letters, numbers and hyphens only." }, { status: 400 });
  if (!title?.trim()) return NextResponse.json({ ok: false, error: "Title is required." }, { status: 400 });

  const existing = await prisma.templatePage.findUnique({ where: { type_slug: { type, slug } } });
  if (existing) return NextResponse.json({ ok: false, error: "A page with that slug already exists." }, { status: 409 });

  const basePath = type === "service" ? "" : `/${type === "airport" ? "airports" : "fleet"}`;
  const finalHref = href || `${basePath}/${slug}/`;

  const page = await prisma.templatePage.create({
    data: {
      type, slug, title,
      data: { ...(data || {}), href: finalHref },
      metaTitle: metaTitle || null, metaDescription: metaDescription || null,
      focusKeyword: focusKeyword || null, secondaryKeywords: secondaryKeywords || null,
    },
  });
  return NextResponse.json({ ok: true, page });
}
