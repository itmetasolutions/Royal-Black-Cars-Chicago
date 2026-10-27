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
  const pickup = String(body.pickup || "").trim();

  if (!name || !EMAIL_RE.test(email) || !phone || !pickup) {
    return NextResponse.json({ ok: false, error: "Name, email, phone and pickup are required." }, { status: 400 });
  }

  const rows = [
    ["Name", name],
    ["Email", email],
    ["Phone", phone],
    ["Passengers", String(body.passengers || "").trim() || "—"],
    ["Pickup date", String(body.date || "").trim() || "—"],
    ["Pickup time", String(body.time || "").trim() || "—"],
    ["Pickup from", pickup],
    ["Drop off", String(body.drop || "").trim() || "—"],
    ["Additional stop", String(body.stop || "").trim() || "—"],
    ["Vehicle", String(body.vehicle || "").trim() || "No preference"],
    ["Service", String(body.service || "").trim() || "Not sure yet"],
    ["Notes", String(body.notes || "").trim() || "—"],
  ];

  const settings = await getSiteSettings();

  try {
    await sendLeadEmail({
      to: settings.contact_email,
      subject: `New quote request from ${name}`,
      replyTo: email,
      text: rows.map(([k, v]) => `${k}: ${v}`).join("\n"),
      html: `<h2>New quote request</h2><table cellpadding="6">${rows
        .map(([k, v]) => `<tr><td><b>${escapeHtml(k)}</b></td><td>${escapeHtml(v).replace(/\n/g, "<br>")}</td></tr>`)
        .join("")}</table>`,
    });
  } catch (err) {
    console.error("Failed to send quote lead email:", err);
    return NextResponse.json({ ok: false, error: "Could not send your request. Please call or text us instead." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
