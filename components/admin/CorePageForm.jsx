"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import FaqEditor from "./fields/FaqEditor.jsx";
import SeoFields from "./fields/SeoFields.jsx";
import ImageField from "./fields/ImageField.jsx";
import LinesField from "./fields/LinesField.jsx";

const SCHEMAS = {
  home: [
    ["heroImg", "Hero background image", "image"],
    ["heroLine1", "Hero headline, line 1", "text"],
    ["heroLine2", "Hero headline, line 2", "text"],
    ["heroLine3", "Hero headline, line 3", "text"],
    ["heroLead", "Hero lead paragraph", "textarea"],
  ],
  about: [
    ["heroImg", "Hero image", "image"],
    ["heroTitle", "Hero title", "text"],
    ["heroLead", "Hero lead paragraph", "textarea"],
    ["whatWeDoImg", '"What we do" image', "image"],
    ["whatWeDoHeading", '"What we do" heading', "text"],
    ["whatWeDoP1", '"What we do" paragraph 1', "textarea"],
    ["whatWeDoP2", '"What we do" paragraph 2', "textarea"],
    ["quoteText", "Pull-quote text", "textarea"],
    ["closingCard1Img", "Closing card 1 image", "image"],
    ["closingCard1Heading", "Closing card 1 heading", "text"],
    ["closingCard1Text", "Closing card 1 text", "textarea"],
    ["closingCard2Img", "Closing card 2 image", "image"],
    ["closingCard2Heading", "Closing card 2 heading", "text"],
    ["closingCard2Text", "Closing card 2 text", "textarea"],
    ["closingCard3Img", "Closing card 3 image", "image"],
    ["closingCard3Heading", "Closing card 3 heading", "text"],
    ["closingCard3Text", "Closing card 3 text", "textarea"],
    ["ctaImg", "Bottom CTA image", "image"],
  ],
  contact: [
    ["heroImg", "Hero image", "image"],
    ["heroTitle", "Hero title", "text"],
    ["heroLead", "Hero lead paragraph", "textarea"],
    ["introHeading", "Section heading", "text"],
    ["officeNote", "Office note", "textarea"],
  ],
  faq: [
    ["heroImg", "Hero image", "image"],
    ["heroTitle", "Hero title", "text"],
    ["heroLead", "Hero lead paragraph", "textarea"],
    ["faqs", "Questions", "faqs"],
    ["ctaImg", "Bottom CTA image", "image"],
  ],
  rates: [
    ["heroImg", "Hero image", "image"],
    ["heroTitle", "Hero title", "text"],
    ["heroLead", "Hero lead paragraph", "textarea"],
    ["included", "What's included", "lines"],
    ["faqs", "Pricing questions", "faqs"],
    ["ctaImg", "Bottom CTA image", "image"],
  ],
  "corporate-accounts": [
    ["heroImg", "Hero image", "image"],
    ["heroTitle", "Hero title", "text"],
    ["heroLead", "Hero lead paragraph", "textarea"],
    ["mediaImg", "\"What's included\" image", "image"],
    ["points", "What's included", "lines"],
    ["detail1Img", "Detail card 1 image", "image"],
    ["detail1Heading", "Detail card 1 heading", "text"],
    ["detail1Text", "Detail card 1 text", "textarea"],
    ["detail2Img", "Detail card 2 image", "image"],
    ["detail2Heading", "Detail card 2 heading", "text"],
    ["detail2Text", "Detail card 2 text", "textarea"],
    ["detail3Img", "Detail card 3 image", "image"],
    ["detail3Heading", "Detail card 3 heading", "text"],
    ["detail3Text", "Detail card 3 text", "textarea"],
    ["faqs", "Corporate account questions", "faqs"],
    ["ctaImg", "Bottom CTA image", "image"],
  ],
  terms: [
    ["heroImg", "Hero image", "image"],
    ["bodyText", "Full document text (blank line between sections)", "textarea-lg"],
  ],
  privacy: [
    ["heroImg", "Hero image", "image"],
    ["bodyText", "Full document text (blank line between sections)", "textarea-lg"],
  ],
};

export default function CorePageForm({ page }) {
  const router = useRouter();
  const schema = SCHEMAS[page.key] || [];
  const [fields, setFields] = useState(page.fields || {});
  const [seo, setSeo] = useState({
    metaTitle: page.metaTitle || "", metaDescription: page.metaDescription || "",
    focusKeyword: page.focusKeyword || "", secondaryKeywords: page.secondaryKeywords || "",
  });
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState(null);

  const setField = (name) => (e) => setFields({ ...fields, [name]: e.target.value });
  const setFieldValue = (name) => (val) => setFields({ ...fields, [name]: val });

  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    setMsg(null);
    try {
      const res = await fetch(`/api/admin/core-pages/${page.key}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fields, ...seo }),
      });
      const result = await res.json();
      if (!res.ok || !result.ok) throw new Error(result.error || "Save failed.");
      setMsg({ type: "ok", text: "Saved." });
    } catch (err) {
      setMsg({ type: "err", text: err.message });
    } finally {
      setBusy(false);
    }
  };

  return (
    <form onSubmit={submit}>
      <div className="adm-card">
        <h2>{page.title}</h2>
        {schema.map(([name, label, kind]) => {
          if (kind === "faqs") return <FaqEditor key={name} label={label} value={fields[name]} onChange={setFieldValue(name)} />;
          if (kind === "image") return <ImageField key={name} label={label} value={fields[name]} onChange={setFieldValue(name)} />;
          if (kind === "lines") return <LinesField key={name} label={label} value={fields[name]} onChange={setFieldValue(name)} />;
          if (kind === "textarea") return (
            <div className="adm-field" key={name} style={{ maxWidth: 700 }}>
              <label>{label}</label>
              <textarea value={fields[name] || ""} onChange={setField(name)} rows={3} />
            </div>
          );
          if (kind === "textarea-lg") return (
            <div className="adm-field" key={name} style={{ maxWidth: 700 }}>
              <label>{label}</label>
              <textarea value={fields[name] || ""} onChange={setField(name)} rows={16} />
            </div>
          );
          return (
            <div className="adm-field" key={name} style={{ maxWidth: 700 }}>
              <label>{label}</label>
              <input value={fields[name] || ""} onChange={setField(name)} />
            </div>
          );
        })}
      </div>

      <SeoFields seo={seo} onChange={setSeo} />

      <button className="adm-btn adm-btn-gold" type="submit" disabled={busy}>{busy ? "Saving…" : "Save changes"}</button>
      {msg && <p className={`adm-msg ${msg.type}`}>{msg.text}</p>}
    </form>
  );
}
