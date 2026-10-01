import { NextResponse } from "next/server";
import { put, list, del } from "@vercel/blob";
import { prisma } from "@/lib/db.js";

// Alt text and dimensions live in our own table, keyed by blob URL — the blob
// store holds the file only. A failure here must not take the library down,
// so the listing still returns the files with empty metadata.
async function metaByUrl(urls) {
  try {
    const rows = await prisma.mediaAsset.findMany({ where: { url: { in: urls } } });
    return Object.fromEntries(rows.map((r) => [r.url, r]));
  } catch (err) {
    console.error("[media] metadata read failed:", err);
    return {};
  }
}

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
  const meta = await metaByUrl(blobs.map((b) => b.url));
  return NextResponse.json({
    ok: true,
    blobs: blobs.map((b) => ({
      ...b,
      filename: b.pathname.split("/").pop(),
      alt: meta[b.url]?.alt || "",
      width: meta[b.url]?.width ?? null,
      height: meta[b.url]?.height ?? null,
    })),
  });
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

  // The browser measures the image before sending it, so dimensions are stored
  // without decoding the file again on the server.
  const width = Number(form.get("width")) || null;
  const height = Number(form.get("height")) || null;
  const alt = (form.get("alt") || "").toString().slice(0, 300);
  try {
    await prisma.mediaAsset.upsert({
      where: { url: blob.url },
      create: { url: blob.url, alt, width, height },
      update: { alt, width, height },
    });
  } catch (err) {
    console.error("[media] metadata write failed:", err);
  }

  return NextResponse.json({
    ok: true,
    blob: { ...blob, filename: blob.pathname.split("/").pop(), size: file.size, alt, width, height, uploadedAt: new Date().toISOString() },
  });
}

export async function DELETE(req) {
  if (!blobConfigured()) {
    return NextResponse.json({ ok: false, error: "Media library isn't configured yet." }, { status: 500 });
  }
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");
  if (!url) return NextResponse.json({ ok: false, error: "Missing url." }, { status: 400 });
  await del(url);
  try {
    await prisma.mediaAsset.deleteMany({ where: { url } });
  } catch (err) {
    console.error("[media] metadata delete failed:", err);
  }
  return NextResponse.json({ ok: true });
}
