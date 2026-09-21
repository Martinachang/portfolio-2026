// feetmine.js — the FeetMine case study (feetmine.html).
// site.js has loaded, so t(), fill() and the shared item templates exist.
//
// The page's sections are written out in feetmine.html; this file draws the parts that repeat:
// the lists, the three charts, the comparison table, the service flow and the image rows.
// Everything here is text, CSS and inline SVG — the only <img> tags are app screens and photos.

const fm = content.feetmine;

// ---------- Lists ----------

function statItem(item) {
  // Neither language shows the stat number any more: both sets of titles stand on their own as
  // statements. fm-no-stat collapses the column the number used to occupy. The figures stay in
  // content.js's `value` as a record of the deck's own numbers.
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

// ---------- Comparison table ----------

function compareCell(cell) {
  if (!cell) return `<td><span class="fm-cell-empty" aria-hidden="true">—</span><span class="fm-sr">${t(fm.compare.notCovered)}</span></td>`;
  return `<td>
       <span class="fm-dot" aria-hidden="true"></span><span class="fm-sr">${t(fm.compare.covered)}</span>
       ${cell.note ? `<span class="fm-cell-note">${t(cell.note)}</span>` : ""}
     </td>`;
}

function renderCompare(host) {
  host.innerHTML = `<table class="fm-table">
       <caption class="fm-sr">${t(fm.compare.caption)}</caption>
       <thead>
         <tr>
           <th scope="col"><span class="fm-col-name">${t(fm.compare.productLabel)}</span></th>
           ${fm.compare.columns.map((column) => `
             <th scope="col"><span class="fm-col-name">${t(column.name)}</span><span class="fm-col-note">${t(column.note)}</span></th>`).join("")}
         </tr>
       </thead>
       <tbody>${fm.compare.rows.map((row) => `
         <tr${row.highlight ? ' class="fm-row-mine"' : ""}>
           <th scope="row">${row.name}</th>${row.cells.map(compareCell).join("")}
         </tr>`).join("")}
       </tbody>
     </table>`;
}

// ---------- Service flow ----------

// The loop from the deck: the user measures a foot, the foot's metrics decide the shoes, the store
// supplies the specs, and the user's feedback goes back to the store. Wide screens get the diagram;
// phones get the same steps as a list (see the media queries in feetmine.css).
function renderLoop(host) {
  const loop = fm.business.loop;
  // Three metric pairs sit above the line from the foot to the shoes: what each pair decides.
  const chipX = [400, 545, 690];
  const chips = loop.maps.map((map, i) => `
     <rect class="fm-chip" x="${chipX[i] - 66}" y="50" width="132" height="30" rx="15"></rect>
     <text class="fm-loop-edge" x="${chipX[i]}" y="70" text-anchor="middle">${t(map.from)}</text>
     <path d="M${chipX[i]} 80 V98" marker-end="url(#fm-arrow)"></path>
     <rect class="fm-chip" x="${chipX[i] - 66}" y="104" width="132" height="30" rx="15"></rect>
     <text class="fm-loop-edge" x="${chipX[i]}" y="124" text-anchor="middle">${t(map.to)}</text>
     <path d="M${chipX[i]} 134 V175"></path>`).join("");
  // A dot on the line for each of the four players, with its name underneath.
  const nodes = [[60, loop.user], [250, loop.foot], [790, loop.shoes], [935, loop.store]].map(([x, label]) => `
     <circle class="fm-node-dot" cx="${x}" cy="175" r="7"></circle>
     <text class="fm-loop-node" x="${x}" y="205" text-anchor="middle">${t(label)}</text>`).join("");

  host.innerHTML = `<svg viewBox="0 0 1000 330" role="img" aria-label="${t(fm.business.flowTitle)}: ${t(fm.business.flowCaption)}">
       <defs>
         <marker id="fm-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
           <path d="M0 0 L10 5 L0 10 z" fill="#FF9F46" stroke="none"></path>
         </marker>
       </defs>

       ${nodes}

       <path d="M72 148 H238" marker-end="url(#fm-arrow)"></path>
       <text class="fm-loop-edge" x="155" y="140" text-anchor="middle">${t(loop.measure)}</text>
       <path d="M238 232 H72" marker-end="url(#fm-arrow)"></path>
       <text class="fm-loop-edge" x="155" y="252" text-anchor="middle">${t(loop.comfort)}</text>

       ${chips}
       <path d="M262 175 H778" marker-end="url(#fm-arrow)"></path>
       <path d="M923 148 H802" marker-end="url(#fm-arrow)"></path>
       <text class="fm-loop-edge" x="862" y="140" text-anchor="middle">${t(loop.specs)}</text>

       <path d="M60 218 V290 H935 V218" marker-end="url(#fm-arrow)"></path>
       <rect class="fm-plate" x="452" y="277" width="96" height="26" rx="13"></rect>
       <text class="fm-loop-edge" x="500" y="295" text-anchor="middle">${t(loop.feedback)}</text>
     </svg>
     <ul class="fm-loop-stack">
       <li><strong>${t(loop.user)} → ${t(loop.foot)}</strong><span>${t(loop.measure)}</span></li>
       ${loop.maps.map((map) => `<li><strong>${t(map.from)} → ${t(map.to)}</strong></li>`).join("")}
       <li><strong>${t(loop.store)} → ${t(loop.shoes)}</strong><span>${t(loop.specs)}</span></li>
       <li><strong>${t(loop.user)} → ${t(loop.store)}</strong><span>${t(loop.feedback)}</span></li>
     </ul>`;
}

function renderFlow(host) {
  host.innerHTML = fm.business.stages.map((stage) => `
     <div class="fm-flow-stage">
       <p class="fm-flow-bar">${t(stage.name)}</p>
       <ul class="fm-flow-items">${stage.items.map((item) => `<li>${t(item.title)}</li>`).join("")}</ul>
     </div>`).join("");
}

// ---------- Image rows ----------
// Until the final exports exist these are crops of the deck slides; the fm-shot--* class holds the
// crop and feetmine.css explains it. A click opens the same crop, larger, in the lightbox.

const screenCrops = ["home", "ar", "result", "idcard", "growth"];

function screenItem(screen, i) {
  return `<li>
       <!-- TODO: replace with img/feetmine-screen-${screenCrops[i]}.png -->
       <button type="button" class="fm-zoom fm-shot fm-shot--${screenCrops[i]}">
         <img src="img/feetmine-13.jpg" alt="${t(screen.name)}" loading="lazy">
       </button>
       <p class="fm-screen-label"><b>${two(i)}</b>${t(screen.name)}</p>
     </li>`;
}

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
  fill("fm-misconceptions", fm.misconceptions.items, numberedItem);
  fill("fm-parent-stats", fm.parents.items, statItem);
  fill("fm-goals", fm.goals.items, numberedItem);
  fill("fm-testing", fm.testing.items, numberedItem);
  fill("fm-results", fm.results.items, numberedItem);
  fill("fm-field-points", fm.field.points, numberedItem);
  fill("fm-pains", fm.pains.items, painItem);
  fill("fm-screens", fm.finals.screens, screenItem);
  fill("fm-photos", fm.results.photos, photoPanel);

  renderStages(document.getElementById("fm-stages"), "chart4.svg", t(fm.field.stagesLabel), fm.field.stages);

  fill("fm-legend", fm.features.two.legend, (row) =>
    `<dt>${t(row.label)}</dt><dd>${row.options.map((option) =>
      `<span><b class="fm-key">${option.key}</b>${t(option.value)}</span>`).join("")}</dd>`);

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

// Sections fade up once, and the charts inside them grow at the same moment (feetmine.css keys the
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
