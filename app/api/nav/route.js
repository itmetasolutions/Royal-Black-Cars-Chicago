import { NextResponse } from "next/server";
import { getAllTemplatePages } from "@/lib/cms.js";

export const dynamic = "force-dynamic";

// Public, read-only — powers the header's nav menus so admin-added/removed
// pages show up without a redeploy. Cached briefly at the edge since it's
// the same for every visitor.
export async function GET() {
  const [services, airports, fleet] = await Promise.all([
    getAllTemplatePages("service"),
    getAllTemplatePages("airport"),
    getAllTemplatePages("fleet"),
  ]);
  const res = NextResponse.json({
    services: services.map((s) => [s.href, s.title]),
    airports: airports.map((a) => [a.href, a.title]),
    fleet: fleet.map((f) => [f.href, f.title]),
  });
  res.headers.set("Cache-Control", "public, s-maxage=60, stale-while-revalidate=300");
  return res;
}
