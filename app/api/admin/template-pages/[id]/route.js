import { NextResponse } from "next/server";
import { prisma } from "@/lib/db.js";

export async function GET(req, { params }) {
  const { id } = await params;
  const page = await prisma.templatePage.findUnique({ where: { id } });
  if (!page) return NextResponse.json({ ok: false, error: "Not found." }, { status: 404 });
  return NextResponse.json({ ok: true, page });
}

export async function PUT(req, { params }) {
  const { id } = await params;
  const body = await req.json().catch(() => null);
  const { title, data, metaTitle, metaDescription, focusKeyword, secondaryKeywords } = body || {};

  if (!title?.trim()) return NextResponse.json({ ok: false, error: "Title is required." }, { status: 400 });

  const page = await prisma.templatePage.update({
    where: { id },
    data: {
      title, data: data || {},
      metaTitle: metaTitle || null, metaDescription: metaDescription || null,
      focusKeyword: focusKeyword || null, secondaryKeywords: secondaryKeywords || null,
    },
  }).catch(() => null);

  if (!page) return NextResponse.json({ ok: false, error: "Not found." }, { status: 404 });
  return NextResponse.json({ ok: true, page });
}

export async function DELETE(req, { params }) {
  const { id } = await params;
  await prisma.templatePage.delete({ where: { id } }).catch(() => null);
  return NextResponse.json({ ok: true });
}
