import { NextResponse } from "next/server";
import { prisma } from "@/lib/db.js";
import { generateOtp, hashOtp, otpExpiry, MAX_OTP_REQUESTS_PER_HOUR } from "@/lib/adminAuth.js";
import { sendOtpEmail } from "@/lib/mailer.js";

// Fixed-shape response regardless of whether the email is a real admin —
// never reveal which addresses are authorized.
const GENERIC_OK = NextResponse.json({ ok: true, message: "If that email is registered, a code has been sent." });

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Simple per-IP throttle. Best-effort only (resets when the serverless
// instance recycles) — the per-email DB-backed limit below is the real gate.
const ipHits = new Map();
function ipRateLimited(ip) {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000;
  const hits = (ipHits.get(ip) || []).filter((t) => now - t < windowMs);
  hits.push(now);
  ipHits.set(ip, hits);
  return hits.length > 20;
}

export async function POST(req) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (ipRateLimited(ip)) return GENERIC_OK;

  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const email = String(body.email || "").trim().toLowerCase();
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "Enter a valid email address." }, { status: 400 });
  }

  let user = await prisma.adminUser.findUnique({ where: { email } });

  if (!user) {
    const allowlist = (process.env.ADMIN_EMAILS || "").split(",").map((e) => e.trim().toLowerCase()).filter(Boolean);
    if (allowlist.includes(email)) {
      user = await prisma.adminUser.create({ data: { email, role: "admin" } });
    }
  }

  if (!user) return GENERIC_OK; // unknown email — pretend it worked

  const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
  const recentCount = await prisma.otpCode.count({ where: { userId: user.id, createdAt: { gte: oneHourAgo } } });
  if (recentCount >= MAX_OTP_REQUESTS_PER_HOUR) return GENERIC_OK;

  const code = generateOtp();
  await prisma.otpCode.create({
    data: { userId: user.id, codeHash: hashOtp(code), expiresAt: otpExpiry() },
  });

  try {
    await sendOtpEmail(email, code);
  } catch (err) {
    console.error("Failed to send OTP email:", err);
    return NextResponse.json({ ok: false, error: "Could not send the code. Try again shortly." }, { status: 502 });
  }

  return GENERIC_OK;
}
