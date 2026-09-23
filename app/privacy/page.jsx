import PageHero from "@/components/PageHero.jsx";
import { EMAIL } from "@/lib/data.js";
import { pageMeta } from "@/lib/seo.js";

export const metadata = pageMeta({
  title: "Privacy Policy | Royal Black Cars Chicago",
  description: "How Royal Black Cars Chicago collects, uses and protects your information.",
  path: "/privacy/",
});

export default function Page() {
  return (
    <>
      <PageHero eyebrow="LEGAL" title="Privacy Policy" crumbs={[{ name: "Privacy", href: "/privacy/" }]} cta={false} />
      <section className="sec">
        <div className="wrap">
          <div className="prose">
            <p><em>Last updated: [DATE]. This page is a starting template, not a final legal document — have an attorney review it, in particular against Illinois's Biometric Information Privacy Act if any biometric data is ever collected, before publishing.</em></p>

            <h2>1. Information we collect</h2>
            <p>When you request a quote, book a ride, or contact us, we collect the information you provide: name, phone number, email address, pickup and drop-off locations, and payment details processed through our payment provider. Corporate account setup may include company name and billing contact details.</p>

            <h2>2. How we use it</h2>
            <p>We use this information to quote, confirm and provide your ride, to contact you about a booking, to send receipts and invoices, and — only with your consent — to send service updates. We do not sell your personal information.</p>

            <h2>3. Sharing</h2>
            <p>Information is shared with chauffeurs as needed to complete your trip, and with our payment processor to handle transactions. We do not share your information with third parties for their own marketing purposes.</p>

            <h2>4. Cookies and website data</h2>
            <p>Our website may use basic analytics cookies to understand site traffic. No personal booking information is stored in cookies.</p>

            <h2>5. Data retention</h2>
            <p>Booking and billing records are retained as required for tax and accounting purposes [CONFIRM RETENTION PERIOD]. You can request deletion of non-essential personal information by contacting us.</p>

            <h2>6. Your choices</h2>
            <p>You can ask us at any time what information we hold about you, request a correction, or opt out of non-essential communications, by emailing <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>

            <h2>7. Security</h2>
            <p>We use reasonable administrative and technical safeguards to protect your information, including processing payments through a PCI-compliant provider rather than storing full card numbers ourselves.</p>

            <h2>8. Changes to this policy</h2>
            <p>We may update this policy from time to time; the current version is always posted on this page.</p>

            <h2>9. Contact</h2>
            <p>Questions about this policy can be sent to <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>
          </div>
        </div>
      </section>
    </>
  );
}
