import { NextResponse } from "next/server";
import { writeMediaMeta } from "@/lib/mediaMeta.js";

// Alt text (and the dimensions measured in the browser) for an image that is
// already in the blob store. Keyed by URL, so it also covers files uploaded
// before this table existed.
export async function PUT(req) {
  const body = await req.json().catch(() => null);
  const { url, alt, width, height } = body || {};

  if (!url) return NextResponse.json({ ok: false, error: "Missing url." }, { status: 400 });

  const data = {
    alt: (alt ?? "").toString().slice(0, 300),
    width: Number.isFinite(Number(width)) && Number(width) > 0 ? Number(width) : null,
    height: Number.isFinite(Number(height)) && Number(height) > 0 ? Number(height) : null,
  };

  const asset = await writeMediaMeta(url, data).catch((err) => {
    console.error("[media] metadata save failed:", err);
    return null;
  });

  if (!asset) return NextResponse.json({ ok: false, error: "Could not save." }, { status: 500 });
  return NextResponse.json({ ok: true, asset });
}
