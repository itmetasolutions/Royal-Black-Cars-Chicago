export default function RelatedLinks({ title = "Related pages", links, hub }) {
  const hasImages = links.some(([, , img]) => img);
  return (
    <section className="sec related-links">
      <div className="wrap">
        <div className="rl-head">
          <div>
            <p className="eyebrow">KEEP EXPLORING</p>
            <h3>{title}</h3>
          </div>
          {hub && <a className="btn btn-line" href={hub[1]}>{hub[0]}</a>}
        </div>

        {hasImages ? (
          <div className="rl-cards">
            {links.map(([label, href, img]) => (
              <a key={href} className="rl-card" href={href}>
                <img src={img} alt="" loading="lazy" />
                <span>{label}</span>
                <span className="rl-go" aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>
        ) : (
          <div className="rl-grid">
            {links.map(([label, href]) => <a key={href} className="rl-chip" href={href}>{label}</a>)}
          </div>
        )}
      </div>
    </section>
  );
}
