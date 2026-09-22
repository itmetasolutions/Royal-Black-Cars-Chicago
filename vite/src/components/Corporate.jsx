import Reveal from "./Reveal.jsx";
import { Check } from "./icons.jsx";
import { IMG } from "../lib/data.js";

const points = [
  "Monthly invoicing with cost centres and trip codes",
  "Multi-car roadshows handled by one named dispatcher",
  "NDA-signed chauffeurs for client-facing travel",
];

export default function Corporate() {
  return (
    <section className="sec">
      <div className="wrap split">
        <Reveal className="media" slide>
          <img className="photo" src={IMG.corporate} alt="Executive sedan outside a Chicago office tower" loading="lazy" style={{ zIndex: 2 }} />
        </Reveal>
        <Reveal delay={1}>
          <p className="eyebrow">FOR BUSINESS</p>
          <h2>An account your finance team will accept</h2>
          <p className="lead">One login for the whole company, invoices with cost centres, and a dispatcher who knows your executives by name.</p>
          <ul className="tick">{points.map(p => <li key={p}><Check />{p}</li>)}</ul>
          <a className="btn btn-dark" href="/corporate-accounts/">Open an account</a>
        </Reveal>
      </div>
    </section>
  );
}
