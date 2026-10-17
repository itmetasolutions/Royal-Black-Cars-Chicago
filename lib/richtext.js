// A rich-text field stores HTML, but an empty editor still outputs "<p></p>"
// — which looks non-blank as a raw string. Anything that needs to know
// whether a rich-text field actually has content (for "hide this card if
// it's blank", or for a place that wants plain text, like JSON-LD) should
// check the stripped text, not the HTML string itself.
export function stripHtml(html) {
  return (html || "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

// A tiny HTML-escaper for turning plain text into safe HTML.
function escapeHtml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// Terms/privacy's "full document text" field used to be plain text, read as
// "Heading\nParagraph text\n\nHeading\nParagraph text" — one heading line
// per blank-line-separated block. Now that the field is a rich text editor,
// new content is already HTML and renders as-is; this only reconstructs
// that structure for content saved under the old convention, so nothing
// already published turns into one run-on paragraph.
export function legacyBodyToHtml(text) {
  const value = text || "";
  if (/<[a-z][\s\S]*>/i.test(value)) return value; // already HTML
  return value
    .split("\n\n")
    .filter((block) => block.trim())
    .map((block) => {
      const [heading, ...rest] = block.split("\n");
      return `<h2>${escapeHtml(heading)}</h2><p>${escapeHtml(rest.join(" "))}</p>`;
    })
    .join("");
}
