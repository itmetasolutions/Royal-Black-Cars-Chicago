import { Resend } from "resend";

let client = null;
function resend() {
  if (!process.env.RESEND_API_KEY) throw new Error("RESEND_API_KEY env var is not set.");
  if (!client) client = new Resend(process.env.RESEND_API_KEY);
  return client;
}

export async function sendOtpEmail(email, code) {
  const from = process.env.RESEND_FROM_EMAIL;
  if (!from) throw new Error("RESEND_FROM_EMAIL env var is not set.");
  await resend().emails.send({
    from,
    to: email,
    subject: `${code} is your Royal Black Car admin code`,
    text: `Your admin sign-in code is ${code}. It expires in 10 minutes. If you didn't request this, ignore this email.`,
    html: `<p>Your admin sign-in code is:</p><p style="font-size:28px;font-weight:700;letter-spacing:4px">${code}</p><p>It expires in 10 minutes. If you didn't request this, ignore this email.</p>`,
  });
}
