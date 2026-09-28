"use client";

import { useRouter } from "next/navigation";

export default function DeleteRowButton({ id, title }) {
  const router = useRouter();

  const remove = async () => {
    if (!confirm(`Delete "${title}"? This can't be undone.`)) return;
    const res = await fetch(`/api/admin/template-pages/${id}`, { method: "DELETE" });
    if (res.ok) router.refresh();
  };

  return (
    <button className="adm-btn adm-btn-danger" style={{ padding: "6px 14px", fontSize: ".8rem" }} onClick={remove} type="button">
      Delete
    </button>
  );
}
