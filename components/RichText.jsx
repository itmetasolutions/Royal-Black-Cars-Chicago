import { stripHtml } from "../lib/richtext.js";

// Safely renders a field that may be plain text (most existing content) or
// rich-text HTML (anything edited since the admin's text fields became rich
// text editors) — a plain string has no tags to interpret, so it renders
// exactly as before either way. Returns null when there's nothing to show,
// so callers can use it directly in a condition without a separate check.
export default function RichText({ value, as: Tag = "div", className, style }) {
  if (!stripHtml(value)) return null;
  return <Tag className={className} style={style} dangerouslySetInnerHTML={{ __html: value }} />;
}
