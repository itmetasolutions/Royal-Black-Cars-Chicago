import { NextResponse } from "next/server";
import { prisma } from "@/lib/db.js";

const ALLOWED_KEYS = ["site_name", "tagline", "contact_phone", "contact_email", "logo_url", "favicon_url", "logo_width", "logo_width_mobile"];

export async function GET() {
  const rows = await prisma.siteSetting.findMany();
  const values = Object.fromEntries(rows.map((r) => [r.key, r.value]));
  return NextResponse.json({ ok: true, values });
}

export async function POST(req) {
  const body = await req.json().catch(() => null);
  if (!body || typeof body !== "object") return NextResponse.json({ ok: false, error: "Invalid body." }, { status: 400 });

  const entries = Object.entries(body).filter(([k]) => ALLOWED_KEYS.includes(k));
  await prisma.$transaction(
    entries.map(([key, value]) =>
      prisma.siteSetting.upsert({
        where: { key },
        create: { key, value: String(value ?? "") },
        update: { value: String(value ?? "") },
      })
    )
  );
  return NextResponse.json({ ok: true });
}
