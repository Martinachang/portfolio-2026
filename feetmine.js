// feetmine.js — the FeetMine case study (feetmine.html).
// site.js has already loaded, so t(), fill() and content exist, and it calls renderPage() below
// on load and again on every language switch.
//
// The page's sections are written out in feetmine.html; this file draws the parts that repeat:
// the lists, the three charts, the comparison table, the service flow and the image rows.
// Everything here is text, CSS and inline SVG — the only <img> tags are app screens and photos.

const fm = content.feetmine;

const two = (i) => String(i + 1).padStart(2, "0"); // 0 → "01"

// ---------- Lists ----------

function numberedItem(item, i) {
  return `<li><span class="fm-n">${two(i)}</span><h3>${t(item.title)}</h3><p>${t(item.text)}</p></li>`;
}

function statItem(item, i) {
  // The English version leads with the stat's own number; the Chinese titles now stand on
  // their own as full statements, so the number is dropped from that language's display only
  // (the field itself stays shared — see fm-no-stat below, which fills the column it frees up).
  if (lang === "zh") return `<li class="fm-no-stat"><h3>${t(item.title)}</h3><p>${t(item.text)}</p></li>`;
  return `<li><span class="fm-n">${item.value}</span><h3>${t(item.title)}</h3><p>${t(item.text)}</p></li>`;
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

function renderBars(figure, chart) {
  const max = 40; // the tallest bar is 32.9%, so the scale tops out a little above it
  // The tracks and the labels are two rows of one grid, so the bars all stand on the same line
  // however many lines a label takes.
  figure.innerHTML = `<figcaption>${t(chart.title)}</figcaption>
     <div class="fm-bars" aria-hidden="true">
       ${chart.items.map((bar) => `
         <div class="fm-bar-track"><div class="fm-bar-fill" style="--fm-h: ${(bar.value / max) * 100}%"><span class="fm-bar-value">${bar.value}%</span></div></div>`).join("")}
       ${chart.items.map((bar) => `<p class="fm-bar-label">${t(bar.label)}</p>`).join("")}
     </div>
     ${dataTable(t(chart.title), chart.items.map((bar) => [t(bar.label), bar.value]))}`;
}

function renderAges(figure, chart) {
  // One bar, split in proportion to the three shares: a column per share, sized by its own value.
  const columns = chart.items.map((item) => `${item.value}fr`).join(" ");
  const tones = ["#FFD9B4", "#FFBE80", "#FF9F46"]; // lighter to darker, youngest to oldest
  figure.innerHTML = `<figcaption>${t(chart.title)}</figcaption>
     <div class="fm-ages" aria-hidden="true" style="--fm-cols: ${columns}">
       <div class="fm-ages-labels">${chart.items.map((item) => `<span>${t(item.label)}</span>`).join("")}</div>
       <div class="fm-ages-bar">${chart.items.map((item, i) => `
         <div class="fm-ages-seg" style="background: ${tones[i]}">${item.value}%</div>`).join("")}</div>
     </div>
     <p class="fm-ages-caption" aria-hidden="true">${t(chart.caption)}</p>
     ${dataTable(t(chart.title) + " — " + t(chart.caption), chart.items.map((item) => [t(item.label), item.value]))}`;
}

function renderDonut(figure, chart) {
  const size = 160, stroke = 24, r = (size - stroke) / 2, c = 2 * Math.PI * r;
  const tones = ["#FF9F46", "#FFC999", "#FFE0C2", "#E3DFD9"]; // the last one is the normal-gait rest
  let offset = 0;
  const rings = chart.segments.map((seg, i) => {
    const dash = (seg.value / 100) * c;
    const ring = `<circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="${tones[i]}"
        stroke-width="${stroke}" stroke-dashoffset="${-offset}"
        style="--fm-dash: ${dash}; --fm-rest: ${c - dash}; --fm-c: ${c}"
        transform="rotate(-90 ${size / 2} ${size / 2})"></circle>`;
    offset += dash;
    return ring;
  }).join("");
  figure.innerHTML = `<figcaption>${t(chart.title)}</figcaption>
     <div class="fm-donut">
       <svg viewBox="0 0 ${size} ${size}" aria-hidden="true">
         ${rings}
         <text class="fm-donut-value" x="50%" y="48%" text-anchor="middle">${chart.centerValue}</text>
         <text class="fm-donut-label" x="50%" y="62%" text-anchor="middle">${t(chart.centerLabel)}</text>
       </svg>
       <ul class="fm-legend-list" aria-hidden="true">${chart.segments.map((seg, i) => `
         <li><span class="fm-swatch" style="--fm-c: ${tones[i]}"></span>${t(seg.label)}<span class="fm-legend-value">${seg.value}%</span></li>`).join("")}</ul>
     </div>
     ${dataTable(t(chart.title), chart.segments.map((seg) => [t(seg.label), seg.value]))}`;
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
  fill("fm-process", fm.process.steps, numberedItem);
  fill("fm-misconceptions", fm.misconceptions.items, numberedItem);
  fill("fm-parent-stats", fm.parents.items, statItem);
  fill("fm-goals", fm.goals.items, numberedItem);
  fill("fm-testing", fm.testing.items, numberedItem);
  fill("fm-results", fm.results.items, numberedItem);
  fill("fm-field-points", fm.field.points, numberedItem);
  fill("fm-pains", fm.pains.items, painItem);
  fill("fm-screens", fm.finals.screens, screenItem);
  fill("fm-photos", fm.results.photos, photoPanel);

  const stages = document.getElementById("fm-stages");
  stages.setAttribute("aria-label", t(fm.field.stagesLabel));
  fill("fm-stages", fm.field.stages, (stage) =>
    `<li${stage.active ? ' class="is-active"' : ""}>${t(stage.name)}</li>`);

  fill("fm-legend", fm.features.two.legend, (row) =>
    `<dt>${t(row.label)}</dt><dd>${row.options.map((option) =>
      `<span><b class="fm-key">${option.key}</b>${t(option.value)}</span>`).join("")}</dd>`);

  fill("fm-business-cards", fm.business.cards, (card) =>
    `<div><h3 class="fm-label">${t(card.title)}</h3><p class="fm-note">${t(card.text)}</p></div>`);

  renderBars(document.getElementById("fm-chart-bars"), fm.background.bars);
  renderAges(document.getElementById("fm-chart-ages"), fm.background.ages);
  renderDonut(document.getElementById("fm-chart-gait"), fm.background.gait);
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
