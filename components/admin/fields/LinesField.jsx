"use client";

export default function LinesField({ label, value, onChange, hint }) {
  return (
    <div className="adm-field">
      <label>{label}</label>
      <textarea
        value={(value || []).join("\n")}
        onChange={(e) => onChange(e.target.value.split("\n").map((l) => l.trim()).filter(Boolean))}
        rows={Math.max(3, (value || []).length + 1)}
      />
      <small>{hint || "One per line."}</small>
    </div>
  );
}
