import { NextResponse } from "next/server";
import { prisma } from "@/lib/db.js";

export async function GET(req, { params }) {
  const { key } = await params;
  const page = await prisma.corePage.findUnique({ where: { key } });
  if (!page) return NextResponse.json({ ok: false, error: "Not found." }, { status: 404 });
  return NextResponse.json({ ok: true, page });
}

export async function PUT(req, { params }) {
  const { key } = await params;
  const body = await req.json().catch(() => null);
  const { fields, metaTitle, metaDescription, focusKeyword, secondaryKeywords } = body || {};

  const page = await prisma.corePage.update({
    where: { key },
    data: {
      fields: fields || {},
      metaTitle: metaTitle || null, metaDescription: metaDescription || null,
      focusKeyword: focusKeyword || null, secondaryKeywords: secondaryKeywords || null,
    },
  }).catch(() => null);

  if (!page) return NextResponse.json({ ok: false, error: "Not found." }, { status: 404 });
  return NextResponse.json({ ok: true, page });
}
