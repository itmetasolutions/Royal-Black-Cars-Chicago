"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import FaqEditor from "./fields/FaqEditor.jsx";
import SeoFields from "./fields/SeoFields.jsx";
import ImageField from "./fields/ImageField.jsx";
import LinesField from "./fields/LinesField.jsx";
import CardsField from "./fields/CardsField.jsx";

const SCHEMAS = {
  home: [
    ["__hero", "Hero", "group"],
    ["heroImg", "Hero background image (also the video poster)", "image"],
    ["heroVideo", "Hero background video URL", "text"],
    ["heroLine1", "Hero headline, line 1", "text"],
    ["heroLine2", "Hero headline, line 2", "text"],
    ["heroLine3", "Hero headline, line 3", "text"],
    ["heroLead", "Hero lead paragraph", "textarea"],
    ["marqueeItems", "Scrolling highlights strip", "lines"],

    ["__services", "Services grid", "group"],
    ["servicesEyebrow", "Eyebrow", "text"],
    ["servicesHeading", "Heading", "text"],
    ["serviceCardSlugs", "Featured services (one slug per line — card content comes from each service page)", "lines"],

    ["__airports", "Airports section", "group"],
    ["airportImg", "Photo", "image"],
    ["airportImgAlt", "Photo alt text", "text"],
    ["airportBadgeLabel", "Badge label", "text"],
    ["airportBadgeValue", "Badge value", "text"],
    ["airportEyebrow", "Eyebrow", "text"],
    ["airportHeading", "Heading", "text"],
    ["airportLead", "Lead paragraph", "textarea"],
    ["airportPoints", "Bullet points", "lines"],
    ["airportTileSlugs", "Featured airports (one slug per line — tile content comes from each airport page)", "lines"],
    ["airportMoreLabel", "Bottom link label", "text"],
    ["airportMoreHref", "Bottom link URL", "text"],

    ["__fleet", "Fleet slider", "group"],
    ["fleetEyebrow", "Eyebrow", "text"],
    ["fleetHeading", "Heading", "text"],

    ["__child", "Child seats", "group"],
    ["childImg", "Image", "image"],
    ["childEyebrow", "Eyebrow", "text"],
    ["childHeading", "Heading", "text"],
    ["childLead", "Lead paragraph", "textarea"],
    ["childSeats", "Seat types", "cards", {
      spec: [["name", "Name", "text"], ["detail", "Detail", "text"]],
    }],

    ["__corporate", "Corporate section", "group"],
    ["corporateImg", "Photo", "image"],
    ["corporateEyebrow", "Eyebrow", "text"],
    ["corporateHeading", "Heading", "text"],
    ["corporateLead", "Lead paragraph", "textarea"],
    ["corporatePoints", "Bullet points", "lines"],
    ["corporateCtaLabel", "Button label", "text"],
    ["corporateCtaHref", "Button URL", "text"],

    ["__areas", "Service area band", "group"],
    ["areasImg", "Map photo", "image"],
    ["areasEyebrow", "Eyebrow", "text"],
    ["areasHeading", "Heading", "text"],
    ["areasLead", "Lead paragraph", "textarea"],
    ["areasStatLabel", "Stat label", "text"],
    ["areasStatValue", "Stat value", "text"],

    ["__venues", "Venues strip", "group"],
    ["venuesEyebrow", "Eyebrow", "text"],
    ["venuesHeading", "Heading", "text"],
    ["venuesLinkLabel", "Button label", "text"],
    ["venuesFeatured", "Featured venues (one name or slug per line — card content comes from each venue page)", "lines"],

    ["__faq", "FAQ section", "group"],
    ["faqEyebrow", "Eyebrow", "text"],
    ["faqHeading", "Heading", "text"],
    ["faqAsideHeading", "Side card heading", "text"],
    ["faqAsideText", "Side card text", "textarea"],
    ["faqs", "Questions", "faqs"],

    ["__cta", "Closing CTA", "group"],
    ["ctaImg", "Background image", "image"],
    ["ctaHeading", "Heading", "text"],
    ["ctaText", "Text", "textarea"],
  ],
  services: [
    ["__hero", "Hero", "group"],
    ["heroEyebrow", "Eyebrow", "text"],
    ["heroTitle", "Title", "text"],
    ["heroLead", "Lead paragraph", "textarea"],
    ["heroImg", "Hero image (blank uses the featured service photo)", "image"],
    ["__facts", "Quick facts strip", "group"],
    ["fact1Title", "Fact 1 title", "text"], ["fact1Note", "Fact 1 note", "text"],
    ["fact2Title", "Fact 2 title", "text"], ["fact2Note", "Fact 2 note", "text"],
    ["fact3Title", "Fact 3 title", "text"], ["fact3Note", "Fact 3 note", "text"],
    ["fact4Title", "Fact 4 title", "text"], ["fact4Note", "Fact 4 note", "text"],
    ["__sections", "Section headings", "group"],
    ["featuredEyebrow", "Featured service eyebrow", "text"],
    ["featuredCtaLabel", "Featured service button label", "text"],
    ["cat1Heading", "Category 1 heading", "text"],
    ["cat2Heading", "Category 2 heading", "text"],
    ["cat3Heading", "Category 3 heading", "text"],
    ["cat4Heading", "Category 4 heading", "text"],
    ["moreEyebrow", "More services eyebrow", "text"],
    ["moreHeading", "More services heading", "text"],
    ["__cta", "Closing CTA", "group"],
    ["ctaImg", "Background image", "image"],
    ["ctaHeading", "Heading", "text"],
    ["ctaText", "Text", "textarea"],
  ],
  airports: [
    ["__hero", "Hero", "group"],
    ["heroEyebrow", "Eyebrow", "text"],
    ["heroTitle", "Title", "text"],
    ["heroLead", "Lead paragraph", "textarea"],
    ["heroImg", "Hero image", "image"],
    ["__sections", "Section headings", "group"],
    ["flatEyebrow", "Flat-rate section eyebrow", "text"],
    ["flatHeading", "Flat-rate section heading", "text"],
    ["regionalEyebrow", "Regional section eyebrow", "text"],
    ["regionalHeading", "Regional section heading", "text"],
    ["__cta", "Closing CTA", "group"],
    ["ctaImg", "Background image", "image"],
    ["ctaHeading", "Heading", "text"],
    ["ctaText", "Text", "textarea"],
  ],
  fleet: [
    ["__hero", "Hero", "group"],
    ["heroEyebrow", "Eyebrow", "text"],
    ["heroTitle", "Title", "text"],
    ["heroLead", "Lead paragraph", "textarea"],
    ["heroImg", "Hero image", "image"],
    ["__cta", "Closing CTA", "group"],
    ["ctaImg", "Background image", "image"],
    ["ctaHeading", "Heading", "text"],
    ["ctaText", "Text", "textarea"],
  ],
  "service-areas": [
    ["__hero", "Hero", "group"],
    ["heroEyebrow", "Eyebrow", "text"],
    ["heroTitle", "Title", "text"],
    ["heroLead", "Lead paragraph", "textarea"],
    ["heroImg", "Hero image", "image"],
    ["__sections", "Section headings", "group"],
    ["routesEyebrow", "Long-distance eyebrow", "text"],
    ["routesHeading", "Long-distance heading", "text"],
    ["venuesEyebrow", "Venues eyebrow", "text"],
    ["venuesHeading", "Venues heading", "text"],
    ["__cta", "Closing CTA", "group"],
    ["ctaImg", "Background image", "image"],
    ["ctaHeading", "Heading", "text"],
    ["ctaText", "Text", "textarea"],
  ],
  venues: [
    ["__hero", "Hero", "group"],
    ["heroEyebrow", "Eyebrow", "text"],
    ["heroTitle", "Title", "text"],
    ["heroLead", "Lead paragraph", "textarea"],
    ["heroImg", "Hero image (blank uses the first venue photo)", "image"],
    ["__cta", "Closing CTA", "group"],
    ["ctaImg", "Background image", "image"],
    ["ctaHeading", "Heading", "text"],
    ["ctaText", "Text", "textarea"],
  ],
  blog: [
    ["heroEyebrow", "Eyebrow", "text"],
    ["heroTitle", "Title", "text"],
    ["heroImg", "Hero image", "image"],
  ],
  "get-a-quote": [
    ["__hero", "Hero", "group"],
    ["heroEyebrow", "Eyebrow", "text"],
    ["heroTitle", "Title", "text"],
    ["heroLead", "Lead paragraph", "textarea"],
    ["heroImg", "Hero image", "image"],
    ["__form", "Form section", "group"],
    ["formHeading", "Heading", "text"],
    ["formText", "Intro paragraph", "textarea"],
  ],
  about: [
    ["heroImg", "Hero image", "image"],
    ["heroTitle", "Hero title", "text"],
    ["heroLead", "Hero lead paragraph", "textarea"],
    ["whatWeDoEyebrow", '"What we do" eyebrow', "text"],
    ["whatWeDoImg", '"What we do" image', "image"],
    ["whatWeDoHeading", '"What we do" heading', "text"],
    ["whatWeDoP1", '"What we do" paragraph 1', "textarea"],
    ["whatWeDoP2", '"What we do" paragraph 2', "textarea"],
    ["quoteText", "Pull-quote text", "textarea"],
    ["standardEyebrow", '"Our standard" eyebrow', "text"],
    ["standardHeading", '"Our standard" heading', "text"],
    ["moreEyebrow", '"More about us" eyebrow', "text"],
    ["moreHeading", '"More about us" heading', "text"],
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
    ["introEyebrow", "Intro eyebrow", "text"],
    ["introHeading", "Section heading", "text"],
    ["formHeading", "Form heading", "text"],
    ["whyEyebrow", '"Why clients call us" eyebrow', "text"],
    ["whyHeading", '"Why clients call us" heading', "text"],
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
    ["flatEyebrow", "Flat rates eyebrow", "text"],
    ["flatHeading", "Flat rates heading", "text"],
    ["includedEyebrow", "What's included eyebrow", "text"],
    ["includedHeading", "What's included heading", "text"],
    ["included", "What's included", "lines"],
    ["byClassHeading", '"By vehicle class" heading', "text"],
    ["otherEyebrow", "Other pricing eyebrow", "text"],
    ["otherHeading", "Other pricing heading", "text"],
    ["howEyebrow", "How rates are set eyebrow", "text"],
    ["howHeading", "How rates are set heading", "text"],
    ["faqs", "Pricing questions", "faqs"],
    ["ctaImg", "Bottom CTA image", "image"],
  ],
  "corporate-accounts": [
    ["heroImg", "Hero image", "image"],
    ["heroTitle", "Hero title", "text"],
    ["heroLead", "Hero lead paragraph", "textarea"],
    ["mediaImg", "\"What's included\" image", "image"],
    ["includedEyebrow", "What's included eyebrow", "text"],
    ["points", "What's included", "lines"],
    ["detailsEyebrow", "Details eyebrow", "text"],
    ["detailsHeading", "Details heading", "text"],
    ["detail1Img", "Detail card 1 image", "image"],
    ["detail1Heading", "Detail card 1 heading", "text"],
    ["detail1Text", "Detail card 1 text", "textarea"],
    ["detail2Img", "Detail card 2 image", "image"],
    ["detail2Heading", "Detail card 2 heading", "text"],
    ["detail2Text", "Detail card 2 text", "textarea"],
    ["detail3Img", "Detail card 3 image", "image"],
    ["detail3Heading", "Detail card 3 heading", "text"],
    ["detail3Text", "Detail card 3 text", "textarea"],
    ["startedEyebrow", "Getting started eyebrow", "text"],
    ["startedHeading", "Getting started heading", "text"],
    ["worthEyebrow", "Comparison eyebrow", "text"],
    ["worthHeading", "Comparison heading", "text"],
    ["withoutHeading", '"Without an account" heading', "text"],
    ["withHeading", '"With an account" heading', "text"],
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
        {schema.map(([name, label, kind, opts]) => {
          if (kind === "group") return (
            <h3 key={name} className="adm-group-head">{label}</h3>
          );
          if (kind === "cards") return (
            <CardsField key={name} label={label} value={fields[name]} onChange={setFieldValue(name)} spec={opts.spec} />
          );
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
