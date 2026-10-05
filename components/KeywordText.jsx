// Turns configured keyword phrases in a paragraph into internal links.
// Each rule is "phrase | /url" in the admin; the first occurrence of each
// phrase in a paragraph becomes a link, matched case-insensitively.

export function parseKeywordRules(lines) {
  return (lines || [])
    .map((line) => {
      const [phrase, href] = String(line).split("|").map((s) => s.trim());
      return phrase && href ? { phrase, href } : null;
    })
    .filter(Boolean)
    .sort((a, b) => b.phrase.length - a.phrase.length);
}

export default function KeywordText({ text, rules = [], className }) {
  if (!text) return null;
  const pieces = [];
  let rest = String(text);
  let key = 0;
  const used = new Set();

  while (rest.length) {
    let best = null;
    for (const rule of rules) {
      if (used.has(rule.phrase)) continue;
      const idx = rest.toLowerCase().indexOf(rule.phrase.toLowerCase());
      if (idx === -1) continue;
      if (!best || idx < best.idx || (idx === best.idx && rule.phrase.length > best.rule.phrase.length)) {
        best = { idx, rule };
      }
    }
    if (!best) {
      pieces.push(rest);
      break;
    }
    const { idx, rule } = best;
    const matched = rest.slice(idx, idx + rule.phrase.length);
    if (idx > 0) pieces.push(rest.slice(0, idx));
    pieces.push(<a key={key++} className="kw-link" href={rule.href}>{matched}</a>);
    used.add(rule.phrase);
    rest = rest.slice(idx + rule.phrase.length);
  }

  return <span className={className}>{pieces}</span>;
}
