"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import LinesField from "./fields/LinesField.jsx";
import PairsField from "./fields/PairsField.jsx";
import FaqEditor from "./fields/FaqEditor.jsx";
import SectionsField from "./fields/SectionsField.jsx";
import SplitSectionsField from "./fields/SplitSectionsField.jsx";
import WhyPointsField from "./fields/WhyPointsField.jsx";
import SeoFields from "./fields/SeoFields.jsx";
import ImageField from "./fields/ImageField.jsx";
import { toCard } from "@/lib/cards.js";

const TYPE_LABEL = { service: "Service", airport: "Airport", fleet: "Fleet vehicle", venue: "Venue", area: "Service area" };
const LIST_HREF = {
  service: "/admin/pages/service", airport: "/admin/pages/airport", fleet: "/admin/pages/fleet",
  venue: "/admin/pages/venue", area: "/admin/pages/area",
};
const URL_PREFIX = { service: "", airport: "airports", fleet: "fleet", venue: "venues", area: "service-areas" };

// Where each type's card shows up, so the editor can say what the first
// section actually controls.
const CARD_APPEARS = {
  service: "the home page services grid, the services hub and related links",
  airport: "the home page airport tiles, the airports hub and related links",
  fleet: "the home page fleet slider, the fleet hub and vehicle suggestions",
  venue: "the home page venues strip and the venues hub",
  area: "the service area band on the home page and the service areas hub",
};

// Extra card fields beyond title/text/image, per type.
const CARD_EXTRAS = {
  airport: [["cardBadge", "Badge (defaults to the airport code)"], ["cardPrice", "Price shown on the card (defaults to the rate)"]],
  fleet: [["cardMeta", "Small print (defaults to the capacity)"]],
  venue: [["cardMeta", "Small print (defaults to the area)"]],
  area: [["cardMeta", "Small print (defaults to the cluster)"]],
  service: [["cardCta", "Card button (shows on hover, e.g. Book Airport Transportation)"]],
};

export default function TemplatePageEditor({ type, page }) {
  const router = useRouter();
  const isNew = !page;
  const [slug, setSlug] = useState(page?.slug || "");
  const [title, setTitle] = useState(page?.title || "");
  const [data, setData] = useState(page?.data || {});
  const [seo, setSeo] = useState({
    metaTitle: page?.metaTitle || "", metaDescription: page?.metaDescription || "",
    focusKeyword: page?.focusKeyword || "", secondaryKeywords: page?.secondaryKeywords || "",
  });
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState(null);

  const setField = (key) => (e) => setData({ ...data, [key]: e.target.value });
  const setFieldValue = (key) => (val) => setData({ ...data, [key]: val });

  // Live preview of exactly what every card of this page will render.
  const preview = toCard(type, { ...data, slug, title });

  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    setMsg(null);
    try {
      const payload = { type, slug, title, data, ...seo };
      const res = await fetch(isNew ? "/api/admin/template-pages" : `/api/admin/template-pages/${page.id}`, {
        method: isNew ? "POST" : "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json();
      if (!res.ok || !result.ok) throw new Error(result.error || "Save failed.");
      router.push(LIST_HREF[type]);
      router.refresh();
    } catch (err) {
      setMsg({ type: "err", text: err.message });
      setBusy(false);
    }
  };

  const remove = async () => {
    if (!confirm(`Delete "${title}"? This can't be undone.`)) return;
    setBusy(true);
    const res = await fetch(`/api/admin/template-pages/${page.id}`, { method: "DELETE" });
    if (res.ok) { router.push(LIST_HREF[type]); router.refresh(); }
    else setBusy(false);
  };

  return (
    <form onSubmit={submit}>
      {/* ---------- 1. the card ---------- */}
      <div className="adm-card">
        <h2>Card details</h2>
        <p className="adm-sub">
          How this page appears wherever it is shown as a card — {CARD_APPEARS[type]}. Leave a field blank to use the
          page content below instead.
        </p>

        <div className="adm-card-editor">
          <div className="adm-card-fields">
            <div className="adm-field">
              <label>Card title</label>
              <input value={data.cardTitle || ""} onChange={setField("cardTitle")} placeholder={title || "Page title"} />
              <small>Defaults to the page title. Use this for a shorter name on cards.</small>
            </div>
            <div className="adm-field">
              <label>Card text</label>
              <textarea value={data.cardText || ""} onChange={setField("cardText")} rows={3} />
            </div>
            {(CARD_EXTRAS[type] || []).map(([key, label]) => (
              <div className="adm-field" key={key}>
                <label>{label}</label>
                <input value={data[key] || ""} onChange={setField(key)} />
              </div>
            ))}
            <ImageField label="Card image (defaults to the hero image)" value={data.cardImg} onChange={setFieldValue("cardImg")} />
          </div>

          <div className="adm-card-preview">
            <span className="adm-card-preview-label">Card preview</span>
            <div className="adm-card-preview-box">
              {preview?.img
                ? <img src={preview.img} alt="" />
                : <div className="adm-card-preview-noimg">No image</div>}
              <div className="adm-card-preview-body">
                {preview?.badge && <span className="adm-card-preview-badge">{preview.badge}</span>}
                <b>{preview?.title || "Untitled"}</b>
                {preview?.meta && <small>{preview.meta}</small>}
                {preview?.text && <p>{preview.text}</p>}
                {preview?.price && <span className="adm-card-preview-price">{preview.price}</span>}
              </div>
            </div>
            <small className="adm-card-preview-href">{preview?.href}</small>
          </div>
        </div>
      </div>

      {/* ---------- 2. the page ---------- */}
      <div className="adm-card">
        <h2>Page details</h2>
        <p className="adm-sub">The content of the page itself at {preview?.href}.</p>

        <div className="row2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, maxWidth: 700 }}>
          <div className="adm-field">
            <label>Title</label>
            <input value={title} onChange={(e) => setTitle(e.target.value)} required />
          </div>
          <div className="adm-field">
            <label>Slug {!isNew && "(fixed after creation)"}</label>
            <input value={slug} onChange={(e) => setSlug(e.target.value)} disabled={!isNew} required pattern="[a-z0-9-]+" />
            <small>URL: /{URL_PREFIX[type] ? `${URL_PREFIX[type]}/` : ""}{slug || "slug"}/</small>
          </div>
        </div>

        <ImageField label="Hero image" value={data.img} onChange={setFieldValue("img")} />

        {type === "service" && (
          <>
            <div className="adm-field" style={{ maxWidth: 700 }}>
              <label>Eyebrow</label>
              <input value={data.eyebrow || ""} onChange={setField("eyebrow")} />
            </div>
            <div className="adm-field" style={{ maxWidth: 700 }}>
              <label>Lead paragraph</label>
              <textarea value={data.lead || ""} onChange={setField("lead")} rows={2} />
            </div>
            <SplitSectionsField value={data.splitSections} onChange={setFieldValue("splitSections")} />
            <LinesField label="Best for" value={data.bestFor} onChange={setFieldValue("bestFor")} />
            <SectionsField value={data.body} onChange={setFieldValue("body")} />
            <PairsField label="Recommended vehicles" value={data.fleetLinks} onChange={setFieldValue("fleetLinks")} />
            <WhyPointsField value={data.whyPoints} onChange={setFieldValue("whyPoints")} />
          </>
        )}

        {type === "airport" && (
          <>
            <div className="row2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, maxWidth: 700 }}>
              <div className="adm-field"><label>Airport code</label><input value={data.code || ""} onChange={setField("code")} /></div>
              <div className="adm-field"><label>Rate</label><input value={data.rate || ""} onChange={setField("rate")} placeholder='e.g. "$95" or "Custom quote"' /></div>
              <div className="adm-field"><label>Rate note</label><input value={data.rateNote || ""} onChange={setField("rateNote")} /></div>
            </div>
            <div className="adm-field" style={{ maxWidth: 700 }}>
              <label>Drive time</label>
              <input value={data.driveTime || ""} onChange={setField("driveTime")} />
            </div>
            <ImageField label="Second image" value={data.img2} onChange={setFieldValue("img2")} />
            <LinesField label="About this airport (body paragraphs)" value={data.body} onChange={setFieldValue("body")} />
            <div className="adm-field" style={{ maxWidth: 700 }}>
              <label>Terminals</label>
              <textarea value={data.terminals || ""} onChange={setField("terminals")} rows={2} />
            </div>
            <div className="adm-field" style={{ maxWidth: 700 }}>
              <label>Wait-time policy</label>
              <textarea value={data.waitPolicy || ""} onChange={setField("waitPolicy")} rows={2} />
            </div>
          </>
        )}

        {type === "fleet" && (
          <>
            <div className="row2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, maxWidth: 700 }}>
              <div className="adm-field"><label>Models</label><input value={data.models || ""} onChange={setField("models")} /></div>
              <div className="adm-field"><label>Capacity</label><input value={data.capacity || ""} onChange={setField("capacity")} placeholder='e.g. "1–3 passengers, 2 bags"' /></div>
            </div>
            <div className="row2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, maxWidth: 700 }}>
              <div className="adm-field"><label>Flat rate</label><input value={data.rate || ""} onChange={setField("rate")} placeholder='e.g. "Airport from $85" or "Quoted at booking"' /></div>
              <div className="adm-field"><label>Hourly rate</label><input value={data.hourlyRate || ""} onChange={setField("hourlyRate")} /></div>
            </div>
            <div className="adm-field" style={{ maxWidth: 700 }}>
              <label>Description</label>
              <textarea value={data.body || ""} onChange={setField("body")} rows={3} />
            </div>
            <LinesField label="Best for" value={data.bestFor} onChange={setFieldValue("bestFor")} />
            <PairsField label="Popular services" value={data.services} onChange={setFieldValue("services")} />
          </>
        )}

        {type === "venue" && (
          <>
            <div className="adm-field" style={{ maxWidth: 700 }}>
              <label>Area</label>
              <input value={data.area || ""} onChange={setField("area")} placeholder='e.g. "Near West Side"' />
            </div>
            <div className="adm-field" style={{ maxWidth: 700 }}>
              <label>Event-night note</label>
              <textarea value={data.note || ""} onChange={setField("note")} rows={3} placeholder="Drop-off/pickup guidance for this venue" />
            </div>
          </>
        )}

        {type === "area" && (
          <>
            <div className="row2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, maxWidth: 700 }}>
              <div className="adm-field">
                <label>Cluster</label>
                <input value={data.cluster || ""} onChange={setField("cluster")} placeholder='e.g. "Downtown", "Northwest suburbs"' />
                <small>Groups this area on the home page and the service areas page.</small>
              </div>
              <div className="adm-field">
                <label>Nearest highway</label>
                <input value={data.highway || ""} onChange={setField("highway")} placeholder='e.g. "I-90/94"' />
              </div>
            </div>
            <div className="adm-field" style={{ maxWidth: 700 }}>
              <label>Intro paragraph</label>
              <textarea value={data.intro || ""} onChange={setField("intro")} rows={3} />
            </div>
            <LinesField label="Landmarks" value={data.landmarks} onChange={setFieldValue("landmarks")} />
            <div className="row2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, maxWidth: 700 }}>
              <div className="adm-field"><label>Drive time to O&apos;Hare</label><input value={data.driveORD || ""} onChange={setField("driveORD")} placeholder="30–40 min" /></div>
              <div className="adm-field"><label>Drive time to Midway</label><input value={data.driveMDW || ""} onChange={setField("driveMDW")} placeholder="20–30 min" /></div>
              <div className="adm-field"><label>Drive time to PWK</label><input value={data.drivePWK || ""} onChange={setField("drivePWK")} placeholder="35–50 min" /></div>
            </div>
            <LinesField label="Body paragraphs" value={data.body} onChange={setFieldValue("body")} />
            <div className="adm-field" style={{ maxWidth: 700 }}>
              <label>
                <input
                  type="checkbox"
                  checked={!!data.isRoute}
                  onChange={(e) => setData({ ...data, isRoute: e.target.checked })}
                  style={{ width: "auto", marginRight: 8 }}
                />
                This is a long-distance route rather than a neighborhood
              </label>
            </div>
            {data.isRoute && (
              <div className="row2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, maxWidth: 700 }}>
                <div className="adm-field"><label>Distance</label><input value={data.miles || ""} onChange={setField("miles")} placeholder="92 miles" /></div>
                <div className="adm-field"><label>Drive time</label><input value={data.drive || ""} onChange={setField("drive")} placeholder="1 hr 45 min" /></div>
              </div>
            )}
          </>
        )}

        <FaqEditor value={data.faqs} onChange={setFieldValue("faqs")} />
      </div>

      <SeoFields seo={seo} onChange={setSeo} />

      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <button className="adm-btn adm-btn-gold" type="submit" disabled={busy}>{busy ? "Saving…" : isNew ? "Create page" : "Save changes"}</button>
        {!isNew && <button type="button" className="adm-btn adm-btn-danger" onClick={remove} disabled={busy}>Delete</button>}
      </div>
      {msg && <p className={`adm-msg ${msg.type}`}>{msg.text}</p>}
    </form>
  );
}
