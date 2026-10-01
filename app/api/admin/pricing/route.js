import { NextResponse } from "next/server";
import { prisma } from "@/lib/db.js";

// Prices live inside each page's `data` JSON (airport flat rates, fleet rates)
// rather than in a table of their own. This route gathers them into one list
// so the admin has a single pricing screen, and writes each change back into
// the page it came from — merging into `data` so nothing else is clobbered.
const PRICE_FIELDS = {
  airport: [
    ["rate", "Flat rate"],
    ["rateNote", "Rate note"],
  ],
  fleet: [
    ["rate", "From rate"],
    ["hourlyRate", "Hourly rate"],
  ],
};

export async function GET() {
  const rows = await prisma.templatePage.findMany({
    where: { type: { in: Object.keys(PRICE_FIELDS) } },
    orderBy: [{ type: "asc" }, { createdAt: "asc" }],
  });

  return NextResponse.json({
    ok: true,
    fields: PRICE_FIELDS,
    items: rows.map((r) => ({
      id: r.id,
      type: r.type,
      slug: r.slug,
      title: r.title,
      prices: Object.fromEntries(PRICE_FIELDS[r.type].map(([key]) => [key, r.data?.[key] ?? ""])),
    })),
  });
}

export async function PUT(req) {
  const body = await req.json().catch(() => null);
  const updates = body?.updates;
  if (!Array.isArray(updates)) {
    return NextResponse.json({ ok: false, error: "Expected a list of updates." }, { status: 400 });
  }

  const ids = updates.map((u) => u.id).filter(Boolean);
  const existing = await prisma.templatePage.findMany({ where: { id: { in: ids } } });
  const byId = Object.fromEntries(existing.map((p) => [p.id, p]));

  let saved = 0;
  for (const { id, prices } of updates) {
    const page = byId[id];
    if (!page || !prices) continue;
    const allowed = PRICE_FIELDS[page.type] || [];
    const patch = {};
    for (const [key] of allowed) {
      if (key in prices) patch[key] = (prices[key] ?? "").toString().trim();
    }
    if (Object.keys(patch).length === 0) continue;
    await prisma.templatePage.update({
      where: { id },
      data: { data: { ...page.data, ...patch } },
    });
    saved += 1;
  }

  return NextResponse.json({ ok: true, saved });
}
