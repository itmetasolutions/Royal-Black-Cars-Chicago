"use client";

import MediaManager from "@/components/admin/MediaManager.jsx";

export default function MediaLibraryPage() {
  return (
    <>
      <h1>Media Library</h1>
      <p className="adm-sub">
        Every image lives here — upload once, then pick it from any page or blog post&apos;s image field. Set alt text
        on each image so pages stay accessible and searchable.
      </p>

      <div className="adm-card">
        <MediaManager mode="page" />
      </div>
    </>
  );
}
