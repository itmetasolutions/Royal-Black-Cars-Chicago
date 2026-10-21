"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import FaqEditor from "./fields/FaqEditor.jsx";
import SeoFields from "./fields/SeoFields.jsx";
import ImageField from "./fields/ImageField.jsx";
import LinesField from "./fields/LinesField.jsx";
import CardsField from "./fields/CardsField.jsx";
import PairsField from "./fields/PairsField.jsx";
import RichTextEditor from "./RichTextEditor.jsx";

const SCHEMAS = {
  home: [
    ["__hero", "Hero", "group"],
    ["heroImg", "Hero background image (shown only to reduced-motion visitors)", "image"],
    ["heroVideo", "Hero background video URL", "text"],
    ["heroLine1", "Hero headline, line 1", "text"],
    ["heroLine2", "Hero headline, line 2", "text"],
    ["heroLine3", "Hero headline, line 3", "text"],
    ["heroLead", "Hero lead paragraph", "textarea"],
    ["heroTagline", "Highlighted tagline under the hero text", "text"],
    ["marqueeItems", "Scrolling highlights strip", "lines"],

    ["__intro", "Intro statement", "group"],
    ["introEyebrow", "Eyebrow", "text"],
    ["introHeading", "Heading", "text"],
    ["introLead", "Opening line", "textarea"],
    ["introBody", "Paragraphs (one per line)", "lines"],
    ["introCtaLabel", "Link label", "text"],
    ["introCtaHref", "Link URL", "text"],

    ["__services", "Services grid", "group"],
    ["servicesEyebrow", "Eyebrow", "text"],
    ["servicesHeading", "Heading", "text"],
    ["servicesDescription", "Description (under the heading)", "textarea"],
    ["serviceCardSlugs", "Featured services (one slug per line — card content comes from each service page)", "lines"],

    ["__airports", "Airports section", "group"],
    ["airportImg", "Photo", "image"],
    ["airportImgAlt", "Photo alt text", "text"],
    ["airportBadgeLabel", "Badge label", "text"],
    ["airportBadgeValue", "Badge value", "text"],
    ["airportEyebrow", "Eyebrow", "text"],
    ["airportHeading", "Heading", "text"],
    ["airportSubheading", "Highlighted subheading (optional, shows under the heading)", "text"],
    ["airportLead", "Lead paragraph", "textarea"],
    ["airportPoints", "Bullet points", "lines"],
    ["airportTabs", "Tabs below the section (name, heading, description, button)", "cards", {
      spec: [["label", "Tab name", "text"], ["heading", "Heading", "text"], ["text", "Description", "textarea"], ["ctaLabel", "Button label", "text"], ["ctaHref", "Button link", "text"], ["image", "Image (right side of the tab)", "image"]],
      max: 3,
    }],
    ["airportMoreLabel", "Bottom link label", "text"],
    ["airportMoreHref", "Bottom link URL", "text"],

    ["__fleet", "Fleet slider", "group"],
    ["fleetEyebrow", "Eyebrow", "text"],
    ["fleetHeading", "Heading", "text"],
    ["fleetLead", "Lead paragraph", "textarea"],

    ["__child", "Child seats", "group"],
    ["childImg", "Image", "image"],
    ["childEyebrow", "Eyebrow", "text"],
    ["childHeading", "Heading", "text"],
    ["childLead", "Lead paragraph", "textarea"],
    ["childCtaLabel", "Link label", "text"],
    ["childCtaHref", "Link URL", "text"],
    ["childSeats", "Seat types", "cards", {
      spec: [["name", "Name", "text"], ["detail", "Detail", "text"], ["price", "Price", "text"]],
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
    ["venuesDescription", "Description (under the heading)", "textarea"],
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
    ["__why", "Why choose us", "group"],
    ["whyEyebrow", "Eyebrow", "text"],
    ["whyHeading", "Heading", "text"],
    ["whyLead", "Lead paragraph", "textarea"],
    ["whyBody", "Paragraphs (one per line)", "lines"],
    ["whyPoints", "Highlights (one per line: title | text)", "lines"],
    ["whyImg", "Photo", "image"],
    ["whyImgAlt", "Photo alt text", "text"],

    ["__ohare", "O'Hare pickup and routes", "group"],
    ["ohareEyebrow", "Eyebrow", "text"],
    ["ohareHeading", "Heading", "text"],
    ["ohareLead", "Lead paragraph", "textarea"],
    ["ohareOptions", "Pickup options (one per line: title | text)", "lines"],
    ["ohareOptionImgs", "Option photos (one image URL per line, in the same order)", "lines"],
    ["ohareRouteHeading", "Route heading", "text"],
    ["ohareRouteText", "Route text", "textarea"],

    ["__diff", "What makes the experience different", "group"],
    ["diffEyebrow", "Eyebrow", "text"],
    ["diffHeading", "Heading", "text"],
    ["diffLead", "Lead line", "textarea"],
    ["diffBody", "Paragraphs (one per line)", "lines"],
    ["diffPoints", "Points (one per line: title | text)", "lines"],
    ["diffImg", "Banner photo", "image"],
    ["diffImgAlt", "Banner photo alt text", "text"],

    ["__group", "Group transportation", "group"],
    ["groupEyebrow", "Eyebrow", "text"],
    ["groupHeading", "Heading", "text"],
    ["groupLead", "Lead paragraph", "textarea"],
    ["groupBody", "Paragraphs (one per line)", "lines"],
    ["groupUses", "Who we move (one per line)", "lines"],
    ["groupQuestions", "Event questions (one per line)", "lines"],
    ["groupClosing", "Closing line", "textarea"],
    ["groupImgs", "Photos (three image URLs, one per line)", "lines"],

    ["__guide", "Extra copy", "group"],
    ["childUses", "Family use cases (one per line)", "lines"],
    ["corporateTravel", "Corporate travel paragraph", "textarea"],
    ["corporateUses", "Corporate use cases (one per line)", "lines"],
    ["areasLists", "Service area lists (one per line: area name | towns)", "lines"],
    ["venuesGuide", "Venue guide (one per line: venue | what we do there)", "lines"],

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
    ["featuredSlug", "Featured service (slug — content, image and link come from that service page)", "text"],
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
    ["regionalEyebrow", "Airport list eyebrow", "text"],
    ["regionalHeading", "Airport list heading", "text"],
    ["__rates", "Rates section (links to the rates page)", "group"],
    ["ratesEyebrow", "Eyebrow", "text"],
    ["ratesHeading", "Heading", "text"],
    ["ratesLead", "Lead line", "textarea"],
    ["ratesPoints", "Points (one per line)", "lines"],
    ["ratesCtaLabel", "Button label", "text"],
    ["ratesImg", "Photo (right side)", "image"],
    ["__options", "O'Hare, Midway & private aviation", "group"],
    ["optionsEyebrow", "Eyebrow", "text"],
    ["optionsHeading", "Heading", "text"],
    ["ohareHeading", "O'Hare heading", "text"],
    ["ohareText", "O'Hare text", "textarea"],
    ["midwayHeading", "Midway heading", "text"],
    ["midwayText", "Midway text", "textarea"],
    ["privateHeading", "Private aviation heading", "text"],
    ["privateText", "Private aviation text", "textarea"],
    ["__experience", "Pickup, drop-off & vehicle guide", "group"],
    ["experienceEyebrow", "Eyebrow", "text"],
    ["experienceHeading", "Heading", "text"],
    ["pickupHeading", "Pickup heading", "text"],
    ["pickupText", "Pickup text", "textarea"],
    ["dropoffHeading", "Drop-off heading", "text"],
    ["dropoffText", "Drop-off text", "textarea"],
    ["vehicleHeading", "Vehicle guide heading", "text"],
    ["vehicleText", "Vehicle guide text", "textarea"],
    ["regionalTransferHeading", "Regional transfers heading", "text"],
    ["regionalTransferText", "Regional transfers text", "textarea"],
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
    ["__rates", "Rates section (links to the rates page)", "group"],
    ["ratesEyebrow", "Eyebrow", "text"],
    ["ratesHeading", "Heading", "text"],
    ["ratesLead", "Lead line", "textarea"],
    ["ratesPoints", "Points (one per line)", "lines"],
    ["ratesCtaLabel", "Button label", "text"],
    ["ratesImg", "Photo (right side)", "image"],
    ["__guide", "Choose the right vehicle", "group"],
    ["guideHeading", "Heading", "text"],
    ["guideItems", "Guide rows (one per line: trip type | recommended vehicle)", "lines"],
    ["noteText", "Closing note", "textarea"],
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
    ["__cluster1", "Area cluster 1 — Downtown", "group"],
    ["cluster1Img", "Image", "image"],
    ["cluster1Eyebrow", "Eyebrow", "text"],
    ["cluster1Heading", "Heading", "text"],
    ["cluster1Text", "Paragraph", "textarea"],
    ["cluster1Pills", "Sub-area pills (one per line: Name | /service-areas/slug/)", "pairs"],
    ["cluster1CtaLabel", "Button label", "text"],
    ["cluster1CtaHref", "Button URL", "text"],
    ["__cluster2", "Area cluster 2 — Northwest suburbs", "group"],
    ["cluster2Img", "Image", "image"],
    ["cluster2Eyebrow", "Eyebrow", "text"],
    ["cluster2Heading", "Heading", "text"],
    ["cluster2Text", "Paragraph", "textarea"],
    ["cluster2Pills", "Sub-area pills (one per line: Name | /service-areas/slug/)", "pairs"],
    ["cluster2CtaLabel", "Button label", "text"],
    ["cluster2CtaHref", "Button URL", "text"],
    ["__cluster3", "Area cluster 3 — West suburbs", "group"],
    ["cluster3Img", "Image", "image"],
    ["cluster3Eyebrow", "Eyebrow", "text"],
    ["cluster3Heading", "Heading", "text"],
    ["cluster3Text", "Paragraph", "textarea"],
    ["cluster3Pills", "Sub-area pills (one per line: Name | /service-areas/slug/)", "pairs"],
    ["cluster3CtaLabel", "Button label", "text"],
    ["cluster3CtaHref", "Button URL", "text"],
    ["__cluster4", "Area cluster 4 — North Shore", "group"],
    ["cluster4Img", "Image", "image"],
    ["cluster4Eyebrow", "Eyebrow", "text"],
    ["cluster4Heading", "Heading", "text"],
    ["cluster4Text", "Paragraph", "textarea"],
    ["cluster4Pills", "Sub-area pills (one per line: Name | /service-areas/slug/)", "pairs"],
    ["cluster4CtaLabel", "Button label", "text"],
    ["cluster4CtaHref", "Button URL", "text"],
    ["__sections", "Section headings", "group"],
    ["airportsEyebrow", "Airports eyebrow", "text"],
    ["airportsHeading", "Airports heading", "text"],
    ["airportsLead", "Airports lead paragraph", "textarea"],
    ["venuesEyebrow", "Venues eyebrow", "text"],
    ["venuesHeading", "Venues heading", "text"],
    ["venuesLead", "Venues lead paragraph", "textarea"],
    ["routesEyebrow", "Long-distance eyebrow", "text"],
    ["routesHeading", "Long-distance heading", "text"],
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
    ["__cta", "Closing CTA", "group"],
    ["ctaImg", "Background image", "image"],
    ["ctaHeading", "Heading", "text"],
    ["ctaText", "Text", "textarea"],
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
    ["standardLead", '"Our standard" lead paragraph', "textarea"],
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
    ["ctaHeading", "Bottom CTA heading", "text"],
    ["ctaText", "Bottom CTA text", "textarea"],
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
    ["__hero", "Hero", "group"],
    ["heroImg", "Hero image", "image"],
    ["heroTitle", "Hero title", "text"],
    ["heroLead", "Hero lead paragraph", "textarea"],
    ["introText", "Intro paragraph (under the hero)", "textarea"],
    ["__flat", "Airport rates section", "group"],
    ["flatEyebrow", "Eyebrow", "text"],
    ["flatHeading", "Heading", "text"],
    ["__included", "What's included section", "group"],
    ["includedEyebrow", "Eyebrow", "text"],
    ["includedHeading", "Heading", "text"],
    ["included", "Points", "lines"],
    ["includedImg", "Photo (right side)", "image"],
    ["__byClass", "By vehicle class section", "group"],
    ["byClassEyebrow", "Eyebrow", "text"],
    ["byClassHeading", "Heading", "text"],
    ["__other", "Other pricing section", "group"],
    ["otherEyebrow", "Eyebrow", "text"],
    ["otherHeading", "Heading", "text"],
    ["otherPricing", "Pricing cards", "cards", {
      spec: [["title", "Title", "text"], ["text", "Description", "textarea-plain"], ["href", "Link URL", "text"]],
      max: 3,
    }],
    ["__how", "How your rate is set section", "group"],
    ["howEyebrow", "Eyebrow", "text"],
    ["howHeading", "Heading", "text"],
    ["pricingSteps", "Steps", "cards", {
      spec: [["title", "Title", "text"], ["text", "Description", "textarea-plain"]],
      max: 6,
    }],
    ["__faq", "FAQ", "group"],
    ["faqs", "Pricing questions", "faqs"],
    ["__cta", "Closing CTA", "group"],
    ["ctaImg", "Background image", "image"],
    ["ctaHeading", "Heading", "text"],
    ["ctaText", "Text", "textarea"],
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
    ["bodyText", "Full document text — use the editor's H2 button for each section's heading", "textarea-lg"],
  ],
  privacy: [
    ["heroImg", "Hero image", "image"],
    ["bodyText", "Full document text — use the editor's H2 button for each section's heading", "textarea-lg"],
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
            <CardsField key={name} label={label} value={fields[name]} onChange={setFieldValue(name)} spec={opts.spec} max={opts.max} />
          );
          if (kind === "faqs") return <FaqEditor key={name} label={label} value={fields[name]} onChange={setFieldValue(name)} />;
          if (kind === "image") return <ImageField key={name} label={label} value={fields[name]} onChange={setFieldValue(name)} />;
          if (kind === "lines") return <LinesField key={name} label={label} value={fields[name]} onChange={setFieldValue(name)} />;
          if (kind === "pairs") return <PairsField key={name} label={label} value={fields[name]} onChange={setFieldValue(name)} hint={opts?.hint} />;
          if (kind === "textarea") return (
            <RichTextEditor key={name} label={label} value={fields[name]} onChange={setFieldValue(name)} minHeight={100} />
          );
          if (kind === "textarea-lg") return (
            <RichTextEditor key={name} label={label} value={fields[name]} onChange={setFieldValue(name)} minHeight={420} />
          );
          // Plain text, not rich text: this field's words are matched against
          // the keyword links below and turned into gold in-text links, which
          // depends on it staying plain text rather than HTML.
          if (kind === "textarea-plain") return (
            <div className="adm-field" key={name} style={{ maxWidth: 700 }}>
              <label>{label}</label>
              <textarea value={fields[name] || ""} onChange={setField(name)} rows={3} />
              <small>Plain text — matched against the keyword links below, so it stays a simple paragraph rather than rich text.</small>
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
