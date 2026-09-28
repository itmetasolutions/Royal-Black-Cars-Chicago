"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import ImageExt from "@tiptap/extension-image";

function Toolbar({ editor }) {
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

  const setImage = () => {
    const url = window.prompt("Image URL");
    if (url) editor.chain().focus().setImage({ src: url }).run();
  };

  return (
    <div className="adm-rte-toolbar">
      {btn(editor.isActive("bold"), () => editor.chain().focus().toggleBold().run(), "B")}
      {btn(editor.isActive("italic"), () => editor.chain().focus().toggleItalic().run(), "I")}
      {btn(editor.isActive("heading", { level: 2 }), () => editor.chain().focus().toggleHeading({ level: 2 }).run(), "H2")}
      {btn(editor.isActive("heading", { level: 3 }), () => editor.chain().focus().toggleHeading({ level: 3 }).run(), "H3")}
      {btn(editor.isActive("bulletList"), () => editor.chain().focus().toggleBulletList().run(), "• List")}
      {btn(editor.isActive("orderedList"), () => editor.chain().focus().toggleOrderedList().run(), "1. List")}
      {btn(editor.isActive("blockquote"), () => editor.chain().focus().toggleBlockquote().run(), "❝")}
      {btn(editor.isActive("link"), setLink, "Link")}
      {btn(false, setImage, "Image")}
      {btn(false, () => editor.chain().focus().undo().run(), "↺", "Undo")}
      {btn(false, () => editor.chain().focus().redo().run(), "↻", "Redo")}
    </div>
  );
}

export default function RichTextEditor({ value, onChange }) {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit,
      Link.configure({ openOnClick: false }),
      ImageExt,
    ],
    content: value || "",
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
  });

  return (
    <div className="adm-field" style={{ maxWidth: 800 }}>
      <label>Content</label>
      <div className="adm-rte">
        <Toolbar editor={editor} />
        <EditorContent editor={editor} className="adm-rte-content" />
      </div>
    </div>
  );
}
