import { NextResponse } from "next/server";
import { prisma } from "@/lib/db.js";

const SLUG_RE = /^[a-z0-9]+(-[a-z0-9]+)*$/;

export async function GET(req, { params }) {
  const { id } = await params;
  const post = await prisma.blogPost.findUnique({ where: { id } });
  if (!post) return NextResponse.json({ ok: false, error: "Not found." }, { status: 404 });
  return NextResponse.json({ ok: true, post });
}

export async function PUT(req, { params }) {
  const { id } = await params;
  const body = await req.json().catch(() => null);
  const { slug, title, excerpt, contentHtml, img, status, metaTitle, metaDescription, focusKeyword, secondaryKeywords } = body || {};

  if (!slug || !SLUG_RE.test(slug)) return NextResponse.json({ ok: false, error: "Slug must be lowercase letters, numbers and hyphens only." }, { status: 400 });
  if (!title?.trim()) return NextResponse.json({ ok: false, error: "Title is required." }, { status: 400 });

  const clashing = await prisma.blogPost.findUnique({ where: { slug } });
  if (clashing && clashing.id !== id) return NextResponse.json({ ok: false, error: "Another post already uses that slug." }, { status: 409 });

  const post = await prisma.blogPost.update({
    where: { id },
    data: {
      slug, title, excerpt: excerpt || "", contentHtml: contentHtml || "", img: img || null,
      status: status === "draft" ? "draft" : "published",
      metaTitle: metaTitle || null, metaDescription: metaDescription || null,
      focusKeyword: focusKeyword || null, secondaryKeywords: secondaryKeywords || null,
    },
  }).catch(() => null);

  if (!post) return NextResponse.json({ ok: false, error: "Not found." }, { status: 404 });
  return NextResponse.json({ ok: true, post });
}

export async function DELETE(req, { params }) {
  const { id } = await params;
  await prisma.blogPost.delete({ where: { id } }).catch(() => null);
  return NextResponse.json({ ok: true });
}
