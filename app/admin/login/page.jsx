"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [step, setStep] = useState("email"); // "email" | "code"
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState(null); // { type: "ok"|"err", text }

  const requestOtp = async (e) => {
    e.preventDefault();
    setBusy(true);
    setMsg(null);
    try {
      const res = await fetch("/api/admin/auth/request-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStep("code");
      setMsg({ type: "ok", text: "If that email is registered, a 6-digit code is on its way." });
    } catch (err) {
      setMsg({ type: "err", text: err.message });
    } finally {
      setBusy(false);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    setBusy(true);
    setMsg(null);
    try {
      const res = await fetch("/api/admin/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, code }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || "Invalid or expired code.");
      router.push("/admin");
      router.refresh();
    } catch (err) {
      setMsg({ type: "err", text: err.message });
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="adm-login-card">
      <h1>Admin sign in</h1>
      <p>{step === "email" ? "Enter your admin email to receive a one-time code." : `Enter the code sent to ${email}.`}</p>

      {step === "email" ? (
        <form onSubmit={requestOtp}>
          <div className="adm-field">
            <label htmlFor="adm-email">Email</label>
            <input id="adm-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@royalblackcarchicago.com" />
          </div>
          <button className="adm-btn adm-btn-gold" type="submit" disabled={busy} style={{ width: "100%" }}>
            {busy ? "Sending…" : "Send code"}
          </button>
        </form>
      ) : (
        <form onSubmit={verifyOtp}>
          <div className="adm-field">
            <label htmlFor="adm-code">6-digit code</label>
            <input id="adm-code" inputMode="numeric" pattern="\d{6}" maxLength={6} required value={code} onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))} placeholder="000000" style={{ letterSpacing: "6px", fontSize: "1.2rem", textAlign: "center" }} />
            <small>Code expires in 10 minutes.</small>
          </div>
          <button className="adm-btn adm-btn-gold" type="submit" disabled={busy || code.length !== 6} style={{ width: "100%" }}>
            {busy ? "Verifying…" : "Verify & sign in"}
          </button>
          <button type="button" onClick={() => { setStep("email"); setCode(""); setMsg(null); }} className="adm-btn" style={{ width: "100%", marginTop: 10, background: "transparent", color: "var(--muted)", border: "1px solid var(--line)" }}>
            Use a different email
          </button>
        </form>
      )}

      {msg && <p className={`adm-msg ${msg.type}`}>{msg.text}</p>}
    </div>
  );
}
