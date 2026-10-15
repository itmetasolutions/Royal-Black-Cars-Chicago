// A rich-text field stores HTML, but an empty editor still outputs "<p></p>"
// — which looks non-blank as a raw string. Anything that needs to know
// whether a rich-text field actually has content (for "hide this card if
// it's blank", or for a place that wants plain text, like JSON-LD) should
// check the stripped text, not the HTML string itself.
export function stripHtml(html) {
  return (html || "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}
