import { NextResponse } from "next/server";
import { prisma } from "@/lib/db.js";
import { hashOtp, createSessionToken, sessionCookieOptions, SESSION_COOKIE, MAX_OTP_ATTEMPTS } from "@/lib/adminAuth.js";

const INVALID = NextResponse.json({ ok: false, error: "Invalid or expired code." }, { status: 400 });

export async function POST(req) {
  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const email = String(body.email || "").trim().toLowerCase();
  const code = String(body.code || "").trim();
  if (!email || !/^\d{6}$/.test(code)) return INVALID;

  const user = await prisma.adminUser.findUnique({ where: { email } });
  if (!user) return INVALID;

  const otp = await prisma.otpCode.findFirst({
    where: { userId: user.id, consumedAt: null, expiresAt: { gt: new Date() } },
    orderBy: { createdAt: "desc" },
  });
  if (!otp) return INVALID;

  if (otp.attempts >= MAX_OTP_ATTEMPTS) {
    await prisma.otpCode.update({ where: { id: otp.id }, data: { consumedAt: new Date() } });
    return INVALID;
  }

  if (otp.codeHash !== hashOtp(code)) {
    await prisma.otpCode.update({ where: { id: otp.id }, data: { attempts: { increment: 1 } } });
    return INVALID;
  }

  await prisma.$transaction([
    prisma.otpCode.update({ where: { id: otp.id }, data: { consumedAt: new Date() } }),
    prisma.adminUser.update({ where: { id: user.id }, data: { lastLogin: new Date() } }),
  ]);

  const token = await createSessionToken(user);
  const res = NextResponse.json({ ok: true });
  res.cookies.set(SESSION_COOKIE, token, sessionCookieOptions());
  return res;
}
