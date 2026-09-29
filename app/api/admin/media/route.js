import { NextResponse } from "next/server";
import { put, list, del } from "@vercel/blob";

// This project's Blob store is connected via Vercel's OIDC-based auth
// (BLOB_STORE_ID + the platform-injected VERCEL_OIDC_TOKEN), not the
// classic BLOB_READ_WRITE_TOKEN — @vercel/blob resolves that pair
// automatically from env, so no token needs to be passed here. OIDC
// tokens are only minted on Vercel's own infrastructure, so this stays
// unconfigured in plain local dev unless BLOB_READ_WRITE_TOKEN is also
// set as a fallback.
const blobConfigured = () => !!(process.env.BLOB_STORE_ID || process.env.BLOB_READ_WRITE_TOKEN);

export async function GET() {
  if (!blobConfigured()) {
    return NextResponse.json({ ok: true, blobs: [], notConfigured: true });
  }
  const { blobs } = await list({ limit: 200 });
  blobs.sort((a, b) => new Date(b.uploadedAt) - new Date(a.uploadedAt));
  return NextResponse.json({ ok: true, blobs });
}

export async function POST(req) {
  if (!blobConfigured()) {
    return NextResponse.json({ ok: false, error: "Media library isn't configured yet — connect a Blob store to this project in Vercel." }, { status: 500 });
  }
  const form = await req.formData();
  const file = form.get("file");
  if (!file || typeof file === "string") {
    return NextResponse.json({ ok: false, error: "No file provided." }, { status: 400 });
  }
  if (!file.type?.startsWith("image/")) {
    return NextResponse.json({ ok: false, error: "Only image files can be uploaded." }, { status: 400 });
  }
  const safeName = file.name.replace(/[^a-zA-Z0-9.\-_]/g, "-");
  const blob = await put(`media/${Date.now()}-${safeName}`, file, { access: "public" });
  return NextResponse.json({ ok: true, blob });
}

export async function DELETE(req) {
  if (!blobConfigured()) {
    return NextResponse.json({ ok: false, error: "Media library isn't configured yet." }, { status: 500 });
  }
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");
  if (!url) return NextResponse.json({ ok: false, error: "Missing url." }, { status: 400 });
  await del(url);
  return NextResponse.json({ ok: true });
}
