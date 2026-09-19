// project.js — a case-study page: the hero, the cover and the phases.
// site.js has already put this page's project (from <body data-project="…">) in content.project.

const project = content.project;

// The whole section wears the project's colours.
const section = document.querySelector(".project");
section.style.setProperty("--accent", project.accent);
section.style.setProperty("--accent-wash", project.accentWash);

// A banner in the project's own colour, showing its own screens — the same treatment as the home page's Work card.
function renderBanner(banner) {
  const image = project.workImage || project.cover;
  banner.className = "case-banner" + (project.visualNoise ? " has-noise" : "");
  banner.style.background = project.visualBackground || project.accentWash || "var(--paper)";
  if (project.visualNoiseOpacity !== undefined) banner.style.setProperty("--noise-opacity", project.visualNoiseOpacity);
  banner.innerHTML = image ? `<img src="${image.src}" alt="${t(image.alt)}" style="object-fit: ${image.fit || "cover"}">` : "";
}

// Some pages (feetmine.html) use the newer hero/banner/overview layout; others (ilandgreen.html) still use
// the plain blurb-and-cover layout. Each element is filled only if the page actually has it.
function renderPage() {
  document.getElementById("case-badge").textContent = project.heroLabel || project.badge;
  document.getElementById("case-headline").textContent = t(project.headline);
  fill("case-meta", project.stats, (stat) => `<dt>${t(stat.label)}</dt><dd>${t(stat.value)}</dd>`);

  const blurb = document.getElementById("case-blurb");
  if (blurb) blurb.textContent = t(project.blurb);
  const overviewText = document.getElementById("case-overview-text");
  if (overviewText) overviewText.textContent = t(project.blurb);

  const cover = document.getElementById("cover");
  if (cover) { cover.src = project.cover.src; cover.alt = t(project.cover.alt); }
  const banner = document.getElementById("case-banner");
  if (banner) renderBanner(banner);

  const prototypeLink = document.getElementById("case-prototype-link");
  if (prototypeLink && project.prototypeUrl) prototypeLink.href = project.prototypeUrl;

  renderPhases();
}

// A small set of line icons for the "features" and "callout" blocks. 24x24, stroke-based, currentColor.
const icons = {
  scan: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 8V5a1 1 0 0 1 1-1h3"/><path d="M20 8V5a1 1 0 0 0-1-1h-3"/>
    <path d="M4 16v3a1 1 0 0 0 1 1h3"/><path d="M20 16v3a1 1 0 0 1-1 1h-3"/><circle cx="12" cy="12" r="3"/>
  </svg>`,
  target: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="11" cy="13" r="8"/><circle cx="11" cy="13" r="4"/><circle cx="11" cy="13" r="0.6" fill="currentColor"/><path d="M16.5 7.5 20 4M20 4h-3.2V7.2"/>
  </svg>`,
  growth: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 20 10 13l4 4 6-8"/><path d="M16 9h4v4"/>
  </svg>`,
  people: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17" cy="9" r="2.4"/><path d="M15.5 20c.2-2.6 1.6-4.6 3.5-5.4"/>
  </svg>`,
  business: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 9.5 4.5 4h15L21 9.5"/><path d="M3 9.5a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 3-.2"/>
    <path d="M4.5 10v9.5A.5.5 0 0 0 5 20h14a.5.5 0 0 0 .5-.5V10"/><path d="M10 20v-5.5h4V20"/>
  </svg>`,
  bulb: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9 18h6"/><path d="M10 21h4"/><path d="M12 3a6 6 0 0 0-3.6 10.8c.6.5.9 1 .9 1.7V16h5.4v-.5c0-.7.4-1.2.9-1.7A6 6 0 0 0 12 3Z"/>
  </svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.3 2.3L16 10"/>
  </svg>`,
  foot: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9 21c-2 0-3.5-1.4-3.5-4 0-2 .8-3 .8-5 0-2.5-1-3.5-1-5.5A3.5 3.5 0 0 1 8.8 3c2.8 0 3.7 2 4.4 4.3.8 2.6 1.8 3.8 2.6 5.6.8 1.8.7 4-.3 5.6-1 1.6-2.8 2.5-4.5 2.5Z"/>
  </svg>`,
  shoe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 17c0-1.4.9-2 1.9-2.4 1.4-.6 2.4-1.9 3.3-3.3.5-.8 1.2-1 2-.7l3.3 1.3c1 .4 1.7 1.3 1.8 2.4l.1 1.2H21a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z"/>
    <path d="M7.5 12.3c.9.6 2 1 3.2 1"/>
  </svg>`,
  card: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="8" cy="10.3" r="1.6"/>
    <path d="M5.3 15.8c.4-1.5 1.5-2.3 2.7-2.3s2.3.8 2.7 2.3"/><path d="M14 9h4M14 12h4M14 15h2.3"/>
  </svg>`,
};

// A definition-style pair of columns, e.g. a misconception and the issue it causes, or a pain point and the need it reveals.
function renderPairs(block) {
  return `<div class="block-pairs">${block.items.map((item) => `
       <div class="pair">
         <p class="pair-a">${t(item.a)}</p>
         ${item.quote ? `<p class="pair-quote">"${t(item.quote)}"${item.citeQuote ? `<span>${t(item.citeQuote)}</span>` : ""}</p>` : ""}
         <p class="pair-b">${t(item.b)}</p>
       </div>`).join("")}</div>`;
}

// The competitive analysis: journey steps across the top, one row per competitor, a mark per step it covers.
function renderJourneyTable(block) {
  return `<table class="journey-table">
       <thead><tr><th></th>${block.steps.map((step) => `<th>${t(step)}</th>`).join("")}</tr></thead>
       <tbody>${block.rows.map((row) => `
         <tr><th>${t(row.name)}</th>${row.covers.map((yes) => `<td class="${yes ? "yes" : "no"}">${yes ? "●" : "–"}</td>`).join("")}</tr>`).join("")}
       </tbody>
     </table>`;
}

// A donut chart drawn as inline SVG stroke segments, with a centred stat and a legend.
function renderDonut(block) {
  const size = 160, stroke = 22, r = (size - stroke) / 2, c = 2 * Math.PI * r;
  let offset = 0;
  const rings = block.segments.map((seg) => {
    const dash = (seg.value / 100) * c;
    const ring = `<circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="${seg.color}"
        stroke-width="${stroke}" stroke-dasharray="${dash} ${c - dash}" stroke-dashoffset="${-offset}"
        transform="rotate(-90 ${size / 2} ${size / 2})" />`;
    offset += dash;
    return ring;
  }).join("");
  return `<div class="block-donut">
       <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" role="img" aria-label="${t(block.center.label)}: ${block.center.value}">
         ${rings}
         <text x="50%" y="46%" text-anchor="middle" font-family="var(--font-display)" font-size="22" fill="var(--ink)">${block.center.value}</text>
         <text x="50%" y="61%" text-anchor="middle" font-family="var(--font-body)" font-size="10.5" fill="var(--ink-soft)">${t(block.center.label)}</text>
       </svg>
       <ul class="donut-legend">${block.segments.map((seg) =>
         `<li><span class="swatch" style="background: ${seg.color}"></span>${t(seg.label)} — ${seg.value}%</li>`).join("")}</ul>
     </div>`;
}

// One block of a phase's editorial content. Diagrams and charts are text, CSS and inline SVG;
// a "figure" is only used for a real photo or an actual designed screen, which can't be rebuilt as text.
function renderBlock(block) {
  switch (block.type) {
    case "heading":
      return `<div class="block-heading">${block.eyebrow ? `<p class="block-eyebrow">${t(block.eyebrow)}</p>` : ""}${block.title ? `<h4>${t(block.title)}</h4>` : ""}${block.intro ? `<p class="block-intro">${t(block.intro)}</p>` : ""}</div>`;
    case "text":
      return `<div class="block-text">${block.paragraphs.map((p) => `<p>${t(p)}</p>`).join("")}</div>`;
    case "quote":
      return `<blockquote class="block-quote"><p>${t(block.text)}</p>${block.cite ? `<cite>${t(block.cite)}</cite>` : ""}</blockquote>`;
    case "stats":
      return `<div class="block-stats">${block.items.map((item) =>
        `<div><strong>${item.value}</strong><span>${t(item.label)}</span></div>`).join("")}</div>`;
    case "bars":
      return `<div class="block-bars">${block.title ? `<h4>${t(block.title)}</h4>` : ""}${block.bars.map((bar) => `
           <div class="bar-row">
             <span class="bar-label">${t(bar.label)}</span>
             <span class="bar-value">${bar.value}%</span>
             <div class="bar-track"><div class="bar-fill" style="width: ${bar.value}%"></div></div>
           </div>`).join("")}</div>`;
    case "donut":
      return renderDonut(block);
    case "steps":
      return `<ol class="block-steps">${block.steps.map((step) =>
        `<li${step.active ? ' class="active"' : ""}>${t(step)}</li>`).join("")}</ol>`;
    case "pairs":
      return renderPairs(block);
    case "features":
      // An accordion: the first item stands open, the rest collapse behind a "+" (uxfol.io/Nook style).
      return `<div class="block-accordion">${block.items.map((item, i) => `
           <details${i === 0 ? " open" : ""}>
             <summary>${t(item.title)}</summary>
             <p>${t(item.text)}</p>
           </details>`).join("")}</div>`;
    case "callout":
      return `<div class="block-callout"><div class="feature-icon">${icons[block.icon] || ""}</div><p>${t(block.text)}</p></div>`;
    case "journey-table":
      return renderJourneyTable(block);
    case "stage-columns":
      // A coloured header bar per stage, then an icon card per item underneath (the deck's own Service Flow style).
      return `<div class="stage-columns">${block.stages.map((stage) => `
           <div class="stage-group">
             <div class="stage-bar">${t(stage.name)}</div>
             <div class="stage-items">${stage.items.map((item) => `
               <div class="stage-item">
                 ${item.icon ? `<div class="feature-icon">${icons[item.icon] || ""}</div>` : ""}
                 <h5>${t(item.title)}</h5>
                 ${item.text ? `<p>${t(item.text)}</p>` : ""}
               </div>`).join("")}</div>
           </div>`).join("")}</div>`;
    case "image":
      return `<div class="figures"><a href="${block.src}" target="_blank"><img src="${block.src}" alt="${t(block.alt)}" loading="lazy"></a></div>`;
    default:
      return "";
  }
}

// Every phase is on the page, one after another: its name, its text if it has any, then its content.
// A phase with `blocks` is rebuilt as editorial text, CSS and SVG; one with `figures` shows the deck slide(s) whole.
// The links at the top glide to each phase (site.js handles any link to #something).
function renderPhases() {
  document.getElementById("phase-nav").setAttribute("aria-label", t(project.phasesLabel));
  fill("phase-nav", project.phases, (phase, i) => `<a href="#phase-${i}">${t(phase.name)}</a>`);
  fill("phases", project.phases, (phase, i) =>
    `<section class="phase" id="phase-${i}" aria-labelledby="phase-${i}-title">
       <h3 id="phase-${i}-title"><span class="phase-mark">${t(phase.name)}</span>${phase.headline ? t(phase.headline) : ""}</h3>
       ${phase.points ? `<ul class="points">${phase.points.map(listItem).join("")}</ul>` : ""}
       ${phase.blocks ? phase.blocks.map(renderBlock).join("") : `<div class="figures">${phase.figures.map((figure) =>
         `<a href="${figure.src}" target="_blank"><img src="${figure.src}" alt="${t(figure.alt)}" loading="lazy"></a>`).join("")}</div>`}
     </section>`);
}
