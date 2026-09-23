// feetmine.js — the FeetMine case study (work/feetmine/index.html).
// site.js has loaded, so t(), fill() and the shared item templates exist.
//
// The page's sections are written out in work/feetmine/index.html; this file draws the parts that repeat:
// the lists, the charts, the service flow and the image rows. The charts, the goal icons, the app
// screens and the photos are this page's only <img> tags — everything else is text, CSS or inline SVG.

const fm = content.feetmine;

// ---------- Lists ----------

// Design Goals and Misconceptions both swap the shared numberedItem's "01" for an icon naming
// the item, since a small, varied set reads better as distinct pictures than as a count.
function iconItem(item) {
  return `<li><img class="fm-item-icon" src="img/${item.icon}" alt="${t(item.iconAlt)}" loading="lazy"><h3>${t(item.title)}</h3><p>${t(item.text)}</p></li>`;
}

function statItem(item) {
  // Neither language shows the stat number any more: both sets of titles stand on their own as
  // statements. fm-no-stat collapses the column the number used to occupy. The figures stay in
  // site-text.js's `value` as a record of the deck's own numbers.
  return `<li class="fm-no-stat"><h3>${t(item.title)}</h3><p>${t(item.text)}</p></li>`;
}

function painItem(item) {
  return `<div class="fm-pain">
       <p class="fm-pain-head">${t(fm.pains.painLabel)}</p>
       <h3 class="fm-label">${t(item.pain)}</h3>
       <blockquote><p>“${t(item.quote)}”</p><cite>— ${t(item.cite)}</cite></blockquote>
       <span class="fm-pain-line" aria-hidden="true"></span>
       <div class="fm-need">
         <span class="fm-need-label">${t(fm.pains.needLabel)}</span>
         <h3>${t(item.need)}</h3>
         <p>${t(item.needText)}</p>
       </div>
     </div>`;
}

// ---------- Charts ----------
// Each one is a <figure>: a caption, the drawing, and the same numbers again as a table for
// screen readers (.fm-sr), so the chart never carries meaning that only sighted users can get.

function dataTable(caption, rows) {
  return `<table class="fm-sr"><caption>${caption}</caption>
       <tbody>${rows.map(([label, value]) => `<tr><th scope="row">${label}</th><td>${value}%</td></tr>`).join("")}</tbody>
     </table>`;
}

// Each of these four charts is now the exact SVG exported from Figma (img/chart1–4.svg) rather
// than a CSS/JS drawing — the source file is the design, so this stays a picture of it, not a
// rebuild. Every label and number inside those files is a Figma "outline text" path, not a real
// <text> node, so none of it exists for a screen reader; the img is decorative (alt="") and the
// same numbers go into a table.fm-sr next to it, exactly like every other chart on this page.
// One limitation worth knowing: because the words are baked into the SVG as shapes, these four
// charts stay in English even when the page is switched to Chinese — unlike the rest of the page.
function renderChartSvg(figure, src, caption, rows) {
  figure.innerHTML = `<img class="fm-chart-img" src="img/${src}" alt="" loading="lazy">
     ${dataTable(caption, rows)}`;
}

// The life-stage bar (img/chart4.svg) has no percentages, just an ordered sequence of stages
// with one marked as this project's focus — so its accessible table is one column of names
// plus a note on the active row, not the label/value shape dataTable() expects.
function renderStages(figure, src, caption, stages) {
  figure.innerHTML = `<img class="fm-chart-img" src="img/${src}" alt="" loading="lazy">
     <table class="fm-sr"><caption>${caption}</caption>
       <tbody>${stages.map((stage) => `
         <tr><th scope="row">${t(stage.name)}</th><td>${stage.active ? t(fm.field.currentFocusNote) : ""}</td></tr>`).join("")}</tbody>
     </table>`;
}

// The foot-type legend (img/foottype.svg) is the same Figma-export-plus-hidden-table pattern:
// each row's lettered options go into one cell as plain text, since the picture's own dots and
// letters carry no meaning a screen reader can read.
function renderLegend(figure, src, caption, rows) {
  figure.innerHTML = `<img class="fm-chart-img" src="img/${src}" alt="" loading="lazy">
     <table class="fm-sr"><caption>${caption}</caption>
       <tbody>${rows.map((row) => `
         <tr><th scope="row">${t(row.label)}</th><td>${row.options.map((option) => `${option.key} — ${t(option.value)}`).join("; ")}</td></tr>`).join("")}</tbody>
     </table>`;
}

// ---------- Comparison table ----------

// Now a picture too (img/competitive-analysis.svg), the same Figma-export-plus-hidden-table
// pattern as renderChartSvg above: the image is decorative (alt=""), and fm.compare's own data
// rebuilds here as a real table.fm-sr, so the comparison still reads in Chinese and to a screen
// reader even though the picture itself is stuck in English.
function renderCompare(figure) {
  const c = fm.compare;
  figure.innerHTML = `<img class="fm-chart-img fm-compare-img" src="img/competitive-analysis.svg" alt="" loading="lazy">
     <table class="fm-sr">
       <caption>${t(c.caption)}</caption>
       <thead>
         <tr>
           <th scope="col">${t(c.productLabel)}</th>
           ${c.columns.map((column) => `<th scope="col">${t(column.name)} — ${t(column.note)}</th>`).join("")}
         </tr>
       </thead>
       <tbody>${c.rows.map((row) => `
         <tr>
           <th scope="row">${row.name}</th>
           ${row.cells.map((cell) => `<td>${cell ? t(c.covered) : t(c.notCovered)}${cell && cell.note ? " — " + t(cell.note) : ""}</td>`).join("")}
         </tr>`).join("")}
       </tbody>
     </table>`;
}

// ---------- Service flow ----------

// The loop from the deck: the user measures a foot, the foot's metrics decide the shoes, the store
// supplies the specs, and the user's feedback goes back to the store. serviceflow-1.svg (like the
// page's other Figma exports) has no real text, so .fm-loop-stack carries the bilingual steps —
// visible on phones where the image is too wide to read, screen-reader-only at 720px+ where the
// image takes over (see the media queries in css/editorial.css), instead of a separate hidden
// table.fm-sr duplicating content this list already has.
function renderLoop(host) {
  const loop = fm.business.loop;
  host.innerHTML = `<img class="fm-chart-img" src="img/serviceflow-1.svg" alt="" loading="lazy">
     <ul class="fm-loop-stack">
       <li><strong>${t(loop.user)} → ${t(loop.foot)}</strong><span>${t(loop.measure)}</span></li>
       ${loop.maps.map((map) => `<li><strong>${t(map.from)} → ${t(map.to)}</strong></li>`).join("")}
       <li><strong>${t(loop.store)} → ${t(loop.shoes)}</strong><span>${t(loop.specs)}</span></li>
       <li><strong>${t(loop.user)} → ${t(loop.store)}</strong><span>${t(loop.feedback)}</span></li>
     </ul>`;
}

// serviceflow-2.svg has no real text either, so the cards below stay in the DOM as the bilingual,
// accessible version — screen-reader-only at 720px+ where the image takes over, same as fm-loop.
function renderFlow(host) {
  host.innerHTML = `<img class="fm-chart-img" src="img/serviceflow-2.svg" alt="" loading="lazy">
     ${fm.business.stages.map((stage) => `
     <div class="fm-flow-stage">
       <p class="fm-flow-bar">${t(stage.name)}</p>
       <ul class="fm-flow-items">${stage.items.map((item) => `<li>${t(item.title)}</li>`).join("")}</ul>
     </div>`).join("")}`;
}

// ---------- Image rows ----------
function photoPanel(photo, i) {
  return `<div class="fm-panel fm-grain">
       <!-- TODO: replace with img/feetmine-yodex-${i + 1}.jpg -->
       <button type="button" class="fm-zoom fm-shot fm-shot--yodex${i + 1}">
         <img src="img/feetmine-19.jpg" alt="${t(photo.alt)}" loading="lazy">
       </button>
     </div>`;
}

// ---------- The page ----------

function renderPage() {
  fill("fm-meta", fm.intro.meta, (item) => `<dt>${t(item.label)}</dt><dd>${t(item.value)}</dd>`);
  fill("fm-process", fm.process.steps, timelineItem);
  fill("fm-misconceptions", fm.misconceptions.items, iconItem);
  fill("fm-parent-stats", fm.parents.items, statItem);
  fill("fm-goals", fm.goals.items, iconItem);
  fill("fm-testing", fm.testing.items, numberedItem);
  fill("fm-results", fm.results.items, numberedItem);
  fill("fm-field-points", fm.field.points, numberedItem);
  fill("fm-pains", fm.pains.items, painItem);
  fill("fm-photos", fm.results.photos, photoPanel);

  renderStages(document.getElementById("fm-stages"), "chart4.svg", t(fm.field.stagesLabel), fm.field.stages);

  renderLegend(document.getElementById("fm-legend"), "foottype.svg", t(fm.features.two.legendTitle), fm.features.two.legend);

  fill("fm-business-cards", fm.business.cards, cardItem);

  renderChartSvg(document.getElementById("fm-chart-bars"), "chart1.svg", t(fm.background.bars.title),
    fm.background.bars.items.map((item) => [t(item.label), item.value]));
  renderChartSvg(document.getElementById("fm-chart-ages"), "chart2.svg", t(fm.background.ages.title) + " — " + t(fm.background.ages.caption),
    fm.background.ages.items.map((item) => [t(item.label), item.value]));
  renderChartSvg(document.getElementById("fm-chart-gait"), "chart3.svg", t(fm.background.gait.title),
    fm.background.gait.segments.map((seg) => [t(seg.label), seg.value]));
  renderCompare(document.getElementById("fm-compare"));
  renderLoop(document.getElementById("fm-loop"));
  renderFlow(document.getElementById("fm-flow"));

  // The contact button, from the shared content.
  document.getElementById("fm-mail-link").href = "mailto:" + content.site.email;

  reveal();
}

// ---------- Reveal on scroll ----------

// Sections fade up once, and the charts inside them grow at the same moment (css/editorial.css keys the
// bars and the donut off .is-in). With reduced motion asked for, everything is simply shown.
const still = window.matchMedia("(prefers-reduced-motion: reduce)");
let watcher = null;

function reveal() {
  const sections = document.querySelectorAll(".fm-reveal");
  if (still.matches || !("IntersectionObserver" in window)) {
    sections.forEach((section) => section.classList.add("is-in"));
    return;
  }
  if (!watcher) {
    watcher = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        watcher.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -12% 0px" });
  }
  sections.forEach((section) => { if (!section.classList.contains("is-in")) watcher.observe(section); });
}

// ---------- Lightbox ----------

// One dialog for the whole page. It shows the same crop as the thumbnail, so a deck slide is never
// opened whole. Esc closes it (the browser does that for a modal dialog) and focus goes back to the
// image that was clicked.
const lightbox = document.getElementById("fm-lightbox");
const lightboxFrame = document.getElementById("fm-lightbox-frame");
let lastZoom = null;

document.addEventListener("click", (event) => {
  const zoom = event.target.closest(".fm-zoom");
  if (!zoom) return;
  const image = zoom.querySelector("img");
  lastZoom = zoom;
  lightboxFrame.className = zoom.className.replace("fm-zoom", "").trim();
  lightboxFrame.innerHTML = `<img src="${image.src}" alt="${image.alt}">`;
  lightbox.showModal();
});

lightbox.addEventListener("close", () => {
  lightboxFrame.innerHTML = "";
  if (lastZoom) lastZoom.focus();
});
