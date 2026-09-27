import { NextResponse } from "next/server";
import { prisma } from "@/lib/db.js";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function GET() {
  const users = await prisma.adminUser.findMany({
    orderBy: { createdAt: "asc" },
    select: { id: true, email: true, role: true, createdAt: true, lastLogin: true },
  });
  return NextResponse.json({ ok: true, users });
}

export async function POST(req) {
  const body = await req.json().catch(() => null);
  const email = String(body?.email || "").trim().toLowerCase();
  const role = body?.role === "editor" ? "editor" : "admin";

  if (!EMAIL_RE.test(email)) return NextResponse.json({ ok: false, error: "Enter a valid email address." }, { status: 400 });

  const existing = await prisma.adminUser.findUnique({ where: { email } });
  if (existing) return NextResponse.json({ ok: false, error: "That email already has access." }, { status: 409 });

  const user = await prisma.adminUser.create({ data: { email, role } });
  return NextResponse.json({ ok: true, user });
}
