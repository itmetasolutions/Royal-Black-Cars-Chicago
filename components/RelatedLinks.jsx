export default function RelatedLinks({ title = "Related pages", links, hub }) {
  return (
    <section className="sec related-links">
      <div className="wrap">
        <p className="eyebrow">KEEP EXPLORING</p>
        <h3>{title}</h3>
        <div className="rl-grid">
          {links.map(([label, href]) => <a key={href} className="rl-chip" href={href}>{label}</a>)}
        </div>
        {hub && <a className="more-link" href={hub[1]}>{hub[0]}</a>}
      </div>
    </section>
  );
}
