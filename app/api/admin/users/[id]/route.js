import { NextResponse } from "next/server";
import { prisma } from "@/lib/db.js";
import { getAdminSession } from "@/lib/adminAuth.js";

export async function DELETE(req, { params }) {
  const { id } = await params;
  const session = await getAdminSession();

  if (session?.userId === id) {
    return NextResponse.json({ ok: false, error: "You can't remove your own access." }, { status: 400 });
  }

  const total = await prisma.adminUser.count();
  if (total <= 1) {
    return NextResponse.json({ ok: false, error: "At least one admin user must remain." }, { status: 400 });
  }

  await prisma.adminUser.delete({ where: { id } }).catch(() => null);
  return NextResponse.json({ ok: true });
}
