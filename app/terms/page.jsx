import PageHero from "@/components/PageHero.jsx";
import { PHONE, EMAIL, PHOTOS } from "@/lib/data.js";
import { pageMeta } from "@/lib/seo.js";

export const metadata = pageMeta({
  title: "Terms & Conditions | Royal Black Cars Chicago",
  description: "Terms and conditions for booking and riding with Royal Black Cars Chicago.",
  path: "/terms/",
});

export default function Page() {
  return (
    <>
      <PageHero eyebrow="LEGAL" title="Terms & Conditions" img={PHOTOS.loop[2]} crumbs={[{ name: "Terms", href: "/terms/" }]} cta={false} />
      <section className="sec">
        <div className="wrap">
          <div className="prose">
            <p><em>Last updated: [DATE]. This page is a starting template, not a final legal document — have an attorney review it against your actual business entity, insurance policy and local regulations before publishing.</em></p>

            <h2>1. About these terms</h2>
            <p>These Terms &amp; Conditions govern bookings made with Royal Black Cars Chicago (&quot;we&quot;, &quot;us&quot;), a chauffeured transportation service operating in Chicago, Illinois [LEGAL ENTITY NAME AND STATE OF FORMATION TO BE CONFIRMED]. By booking a ride, you agree to these terms.</p>

            <h2>2. Bookings and quotes</h2>
            <p>Rates quoted online, by phone or by text are estimates until confirmed by dispatch. Flat rates for standard airport and point-to-point trips are fixed once confirmed and include tolls, standard wait time and gratuity unless stated otherwise. Hourly and as-directed bookings are billed on actual time used, subject to any stated minimum.</p>

            <h2>3. Cancellations</h2>
            <p>Cancellations made at least 2 hours before the scheduled pick-up are free of charge. Cancellations made inside that window, or no-shows, may be charged a fee. Contact dispatch as early as possible if your plans change.</p>

            <h2>4. Wait time</h2>
            <p>Airport pickups include 60 minutes of free wait time measured from landing. Point-to-point and hourly pickups include a shorter grace period stated at booking. Additional wait time may be billed at the applicable hourly rate.</p>

            <h2>5. Passenger conduct and safety</h2>
            <p>Chauffeurs may decline or end a trip if a passenger's conduct threatens safety, damages the vehicle, or violates the law, including transport of illegal substances or open alcohol containers where prohibited. Seatbelt use is required. Child seats must be requested in advance.</p>

            <h2>6. Liability</h2>
            <p>Royal Black Cars Chicago carries commercial auto insurance covering its vehicles and chauffeurs as required by Illinois law [CONFIRM CURRENT POLICY DETAILS]. We are not liable for delays caused by traffic, weather, mechanical failure beyond reasonable control, or acts of third parties, though we will make reasonable efforts to notify you of any delay.</p>

            <h2>7. Payment</h2>
            <p>Individual bookings are charged to the card on file after the ride. Corporate accounts are invoiced monthly per the terms agreed at account setup.</p>

            <h2>8. Changes to these terms</h2>
            <p>We may update these terms from time to time; the current version is always posted on this page.</p>

            <h2>9. Contact</h2>
            <p>Questions about these terms can be sent to <a href={`mailto:${EMAIL}`}>{EMAIL}</a> or {PHONE}.</p>
          </div>
        </div>
      </section>
    </>
  );
}
