import { breadcrumbSchema } from "../lib/schema.js";

export default function Breadcrumbs({ items }) {
  const all = [{ name: "Home", href: "/" }, ...items];
  return (
    <nav className="crumbs" aria-label="Breadcrumb">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(all)) }} />
      {all.map((it, i) => (
        <span key={it.href}>
          {i > 0 && <span aria-hidden="true"> / </span>}
          {i === all.length - 1 ? <span aria-current="page">{it.name}</span> : <a href={it.href}>{it.name}</a>}
        </span>
      ))}
    </nav>
  );
}
