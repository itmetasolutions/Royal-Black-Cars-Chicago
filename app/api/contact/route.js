import { NextResponse } from "next/server";
import { sendLeadEmail } from "@/lib/mailer.js";
import { getSiteSettings } from "@/lib/settings.js";
import { escapeHtml } from "@/lib/richtext.js";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Best-effort per-IP throttle against form spam (resets when the serverless
// instance recycles) — not a hard security boundary, just noise reduction.
const ipHits = new Map();
function ipRateLimited(ip) {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000;
  const hits = (ipHits.get(ip) || []).filter((t) => now - t < windowMs);
  hits.push(now);
  ipHits.set(ip, hits);
  return hits.length > 10;
}

export async function POST(req) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (ipRateLimited(ip)) {
    return NextResponse.json({ ok: false, error: "Too many requests. Try again shortly." }, { status: 429 });
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const phone = String(body.phone || "").trim();
  const message = String(body.message || "").trim();

  if (!name || !EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "Name and a valid email are required." }, { status: 400 });
  }

  const settings = await getSiteSettings();
  const rows = [
    ["Name", name],
    ["Email", email],
    ["Phone", phone || "—"],
    ["Message", message || "—"],
  ];

  try {
    await sendLeadEmail({
      to: settings.contact_email,
      subject: `New contact form message from ${name}`,
      replyTo: email,
      text: rows.map(([k, v]) => `${k}: ${v}`).join("\n"),
      html: `<h2>New contact form message</h2><table cellpadding="6">${rows
        .map(([k, v]) => `<tr><td><b>${escapeHtml(k)}</b></td><td>${escapeHtml(v).replace(/\n/g, "<br>")}</td></tr>`)
        .join("")}</table>`,
    });
  } catch (err) {
    console.error("Failed to send contact lead email:", err);
    return NextResponse.json({ ok: false, error: "Could not send your message. Please call or text us instead." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
