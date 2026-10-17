"use client";

import { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import ImageExt from "@tiptap/extension-image";
import MediaLibraryModal from "./MediaLibraryModal.jsx";

function Toolbar({ editor, onOpenLibrary, withImage }) {
  if (!editor) return null;

  const btn = (active, onClick, label, title) => (
    <button
      type="button"
      onClick={onClick}
      title={title || label}
      className="adm-rte-btn"
      data-active={active ? "true" : "false"}
    >
      {label}
    </button>
  );

  const setLink = () => {
    const url = window.prompt("Link URL (leave blank to remove)");
    if (url === null) return;
    if (!url) return editor.chain().focus().unsetLink().run();
    editor.chain().focus().setLink({ href: url }).run();
  };

  return (
    <div className="adm-rte-toolbar">
      {btn(editor.isActive("paragraph"), () => editor.chain().focus().setParagraph().run(), "P", "Paragraph")}
      {btn(editor.isActive("heading", { level: 1 }), () => editor.chain().focus().toggleHeading({ level: 1 }).run(), "H1")}
      {btn(editor.isActive("heading", { level: 2 }), () => editor.chain().focus().toggleHeading({ level: 2 }).run(), "H2")}
      {btn(editor.isActive("heading", { level: 3 }), () => editor.chain().focus().toggleHeading({ level: 3 }).run(), "H3")}
      {btn(editor.isActive("heading", { level: 4 }), () => editor.chain().focus().toggleHeading({ level: 4 }).run(), "H4")}
      {btn(editor.isActive("bold"), () => editor.chain().focus().toggleBold().run(), "B")}
      {btn(editor.isActive("italic"), () => editor.chain().focus().toggleItalic().run(), "I")}
      {btn(editor.isActive("bulletList"), () => editor.chain().focus().toggleBulletList().run(), "• List")}
      {btn(editor.isActive("orderedList"), () => editor.chain().focus().toggleOrderedList().run(), "1. List")}
      {btn(editor.isActive("blockquote"), () => editor.chain().focus().toggleBlockquote().run(), "❝")}
      {btn(editor.isActive("link"), setLink, "Link")}
      {withImage && btn(false, onOpenLibrary, "Image")}
      {btn(false, () => editor.chain().focus().undo().run(), "↺", "Undo")}
      {btn(false, () => editor.chain().focus().redo().run(), "↻", "Redo")}
    </div>
  );
}

// label: set to null/false to hide the field label (for a compact editor
// nested in a repeater). minHeight: shrinks the editing area for a short
// field like a single point, instead of the default paragraph-length size.
export default function RichTextEditor({ value, onChange, label = "Content", minHeight, withImage = true }) {
  const [libraryOpen, setLibraryOpen] = useState(false);
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit,
      // Every link made here points at another page on this site, so it
      // should pass normal SEO link equity and navigate in the same tab —
      // not Tiptap's external-link defaults (nofollow + a new tab).
      Link.configure({ openOnClick: false, HTMLAttributes: { rel: null, target: null } }),
      ImageExt,
    ],
    content: value || "",
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
  });

  return (
    <div className="adm-field" style={{ maxWidth: 800 }}>
      {label && <label>{label}</label>}
      <div className="adm-rte">
        <Toolbar editor={editor} onOpenLibrary={() => setLibraryOpen(true)} withImage={withImage} />
        <EditorContent editor={editor} className="adm-rte-content" style={minHeight ? { "--rte-min-h": `${minHeight}px` } : undefined} />
      </div>
      {libraryOpen && (
        <MediaLibraryModal
          onClose={() => setLibraryOpen(false)}
          onSelect={(url) => {
            editor.chain().focus().setImage({ src: url }).run();
            setLibraryOpen(false);
          }}
        />
      )}
    </div>
  );
}
