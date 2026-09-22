# Royal Black Cars Chicago — homepage

Two builds of the same homepage, sharing identical components, CSS and content.

```
royal-black-cars/
├── nextjs/   Next.js 15 (App Router) — recommended for the live site
└── vite/     Vite 6 + React 19 — fast local prototyping / static hosting
```

## Which one to ship

Use **nextjs** for the client. It renders the HTML, `<title>`, meta description and
JSON-LD schema on the server, which is what Google needs for a local SEO site.
The Vite build is client-rendered: fine for demos and internal review, weaker for SEO.

## Run it

```bash
cd nextjs && npm install && npm run dev     # http://localhost:3000
cd vite   && npm install && npm run dev     # http://localhost:5173
```

Build for production:

```bash
cd nextjs && npm run build && npm start
cd vite   && npm run build                  # static output in dist/
```

## Where things live

| What | Next.js | Vite |
|---|---|---|
| Content & images | `lib/data.js` | `src/lib/data.js` |
| Schema (LocalBusiness, FAQ) | `lib/schema.js` | `src/lib/schema.js` |
| Components | `components/` | `src/components/` |
| Styles | `app/globals.css` | `src/globals.css` |
| Page assembly | `app/page.jsx` | `src/App.jsx` |
| Head / metadata | `app/layout.jsx` | `index.html` |

All copy, suburb lists, venues, fleet and FAQ text sit in **one file** (`data.js`).
Edit that and both builds update.

## Images

Photos load from the Unsplash CDN (free for commercial use, no attribution required).
URLs are built in `data.js`:

```js
const U = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1400&q=70`;
```

To swap in the client's own photography, drop files into `public/images/` and change
the paths in `data.js` — nothing else needs touching.

In Next.js you can upgrade to `next/image` for automatic resizing and lazy loading;
`next.config.mjs` already whitelists the Unsplash hostnames.

## Before launch — replace these placeholders

1. Phone, email and street address (`data.js` and `schema.js`).
2. Flat rates: $95 ORD / $85 MDW / $135 PWK.
3. `aggregateRating` in `schema.js` — **remove it until the reviews are real.**
   Publishing invented review counts risks a Google penalty.
4. The three review quotes in `data.js`.
5. Wire the quote form in `Hero.jsx` to the real booking system (marked `// TODO`).
6. Update the domain in `layout.jsx`, `sitemap.js`, `robots.js` and `schema.js`.

## Accessibility & performance notes

- Scroll animations respect `prefers-reduced-motion`.
- Dark mode follows the system setting.
- Fleet slider works with touch, arrow keys and the dot pagination.
- No UI framework and no JS libraries — first paint stays fast.
