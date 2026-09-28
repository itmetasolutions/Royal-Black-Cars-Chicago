import { NextResponse } from "next/server";
import { put, list, del } from "@vercel/blob";

export async function GET() {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return NextResponse.json({ ok: true, blobs: [], notConfigured: true });
  }
  const { blobs } = await list({ limit: 200 });
  blobs.sort((a, b) => new Date(b.uploadedAt) - new Date(a.uploadedAt));
  return NextResponse.json({ ok: true, blobs });
}

export async function POST(req) {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return NextResponse.json({ ok: false, error: "Media library isn't configured yet — add BLOB_READ_WRITE_TOKEN." }, { status: 500 });
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
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return NextResponse.json({ ok: false, error: "Media library isn't configured yet." }, { status: 500 });
  }
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");
  if (!url) return NextResponse.json({ ok: false, error: "Missing url." }, { status: 400 });
  await del(url);
  return NextResponse.json({ ok: true });
}
