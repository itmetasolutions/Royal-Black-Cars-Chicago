"use client";

import { useState } from "react";

export default function UsersManager({ initialUsers, currentUserId }) {
  const [users, setUsers] = useState(initialUsers);
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("admin");
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState(null);

  const addUser = async (e) => {
    e.preventDefault();
    setBusy(true);
    setMsg(null);
    try {
      const res = await fetch("/api/admin/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, role }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Could not add user.");
      setUsers([...users, data.user]);
      setEmail("");
      setMsg({ type: "ok", text: `${data.user.email} can now sign in.` });
    } catch (err) {
      setMsg({ type: "err", text: err.message });
    } finally {
      setBusy(false);
    }
  };

  const removeUser = async (id) => {
    setMsg(null);
    const res = await fetch(`/api/admin/users/${id}`, { method: "DELETE" });
    const data = await res.json();
    if (!res.ok) return setMsg({ type: "err", text: data.error || "Could not remove user." });
    setUsers(users.filter((u) => u.id !== id));
  };

  return (
    <>
      <table className="adm-table">
        <thead>
          <tr><th>Email</th><th>Role</th><th>Last login</th><th></th></tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.email}{u.id === currentUserId && <span className="adm-tag brass" style={{ marginLeft: 8 }}>You</span>}</td>
              <td><span className="adm-tag">{u.role}</span></td>
              <td>{u.lastLogin ? new Date(u.lastLogin).toLocaleString() : "Never"}</td>
              <td style={{ textAlign: "right" }}>
                <button className="adm-btn adm-btn-danger" style={{ padding: "6px 14px", fontSize: ".8rem" }} onClick={() => removeUser(u.id)} disabled={u.id === currentUserId}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <form onSubmit={addUser} style={{ marginTop: 24, display: "flex", gap: 10, alignItems: "flex-end", flexWrap: "wrap" }}>
        <div className="adm-field" style={{ margin: 0, flex: "1 1 240px" }}>
          <label htmlFor="new-email">Add admin by email</label>
          <input id="new-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="teammate@royalblackcarchicago.com" />
        </div>
        <div className="adm-field" style={{ margin: 0 }}>
          <label htmlFor="new-role">Role</label>
          <select id="new-role" value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="admin">Admin</option>
            <option value="editor">Editor</option>
          </select>
        </div>
        <button className="adm-btn adm-btn-gold" type="submit" disabled={busy}>{busy ? "Adding…" : "Add user"}</button>
      </form>
      {msg && <p className={`adm-msg ${msg.type}`}>{msg.text}</p>}
    </>
  );
}
