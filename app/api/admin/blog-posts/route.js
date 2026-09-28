import { NextResponse } from "next/server";
import { prisma } from "@/lib/db.js";

const SLUG_RE = /^[a-z0-9]+(-[a-z0-9]+)*$/;

export async function GET() {
  const posts = await prisma.blogPost.findMany({ orderBy: { publishedAt: "desc" } });
  return NextResponse.json({ ok: true, posts });
}

export async function POST(req) {
  const body = await req.json().catch(() => null);
  const { slug, title, excerpt, contentHtml, img, status, metaTitle, metaDescription, focusKeyword, secondaryKeywords } = body || {};

  if (!slug || !SLUG_RE.test(slug)) return NextResponse.json({ ok: false, error: "Slug must be lowercase letters, numbers and hyphens only." }, { status: 400 });
  if (!title?.trim()) return NextResponse.json({ ok: false, error: "Title is required." }, { status: 400 });

  const existing = await prisma.blogPost.findUnique({ where: { slug } });
  if (existing) return NextResponse.json({ ok: false, error: "A post with that slug already exists." }, { status: 409 });

  const post = await prisma.blogPost.create({
    data: {
      slug, title, excerpt: excerpt || "", contentHtml: contentHtml || "", img: img || null,
      status: status === "draft" ? "draft" : "published",
      metaTitle: metaTitle || null, metaDescription: metaDescription || null,
      focusKeyword: focusKeyword || null, secondaryKeywords: secondaryKeywords || null,
    },
  });
  return NextResponse.json({ ok: true, post });
}
