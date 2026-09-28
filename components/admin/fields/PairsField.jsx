"use client";

export default function PairsField({ label, value, onChange, hint }) {
  const text = (value || []).map(([l, h]) => `${l} | ${h}`).join("\n");
  const parse = (raw) =>
    raw.split("\n").map((line) => line.split("|").map((p) => p.trim())).filter(([l, h]) => l && h);

  return (
    <div className="adm-field">
      <label>{label}</label>
      <textarea value={text} onChange={(e) => onChange(parse(e.target.value))} rows={Math.max(3, (value || []).length + 1)} />
      <small>{hint || 'One per line, formatted as "Label | /link/"'}</small>
    </div>
  );
}
