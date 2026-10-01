"use client";

import MediaManager from "./MediaManager.jsx";

export default function MediaLibraryModal({ onSelect, onClose }) {
  return (
    <div className="adm-modal-overlay" onClick={onClose}>
      <div className="adm-modal" onClick={(e) => e.stopPropagation()}>
        <div className="adm-modal-head">
          <h2>Media library</h2>
          <button type="button" className="adm-modal-close" onClick={onClose}>&times;</button>
        </div>

        <MediaManager mode="picker" onSelect={onSelect} />
      </div>
    </div>
  );
}
