// home.js — the home page: the desk, the list of projects, and the profile sections.
// site.js has already loaded, so t(), fill(), listItem and content.project exist.

function timelineItem(item) {
  const detail = item.detail ? `<span class="detail">${t(item.detail)}</span>` : "";
  return `<li><span class="when">${t(item.when)}</span><span>${t(item.what)}${detail}</span></li>`;
}

// One section in the Work list: the project's image (or a flat colour, for a project with none)
// beside its title, status badge, blurb and links.
function workCard(project) {
  const image = project.workImage || project.cover;
  let visual;
  if (image && image.frame === "browser") {
    visual = `<div class="browser-mock">
         <div class="browser-mock-bar">
           <span class="browser-mock-dot" style="background: #ff5f57"></span>
           <span class="browser-mock-dot" style="background: #febc2e"></span>
           <span class="browser-mock-dot" style="background: #28c840"></span>
           <span class="browser-mock-url">${image.url}</span>
         </div>
         <img src="${image.src}" alt="${t(image.alt)}">
       </div>`;
  } else if (image) {
    visual = `<img src="${image.src}" alt="${t(image.alt)}" style="object-fit: ${image.fit || "cover"}">`;
  } else {
    visual = `<div class="work-visual-fallback" style="background: ${project.banner}">${t(project.name)}</div>`;
  }
  const visualClass = "work-visual" + (project.visualNoise ? " has-noise" : "");
  const noiseOpacity = project.visualNoiseOpacity !== undefined ? `; --noise-opacity: ${project.visualNoiseOpacity}` : "";
  const primaryLink = project.links.find((link) => link.primary) || project.links[0];
  return `<article class="work-item">
       <a class="${visualClass}" href="${primaryLink.href}"${primaryLink.external ? ' target="_blank" rel="noopener"' : ""} style="background: ${project.visualBackground || project.accentWash || "var(--paper)"}${noiseOpacity}">${visual}</a>
       <div class="work-body">
         <h3>${t(project.name)} <span class="badge-pill">${project.badge}</span></h3>
         <p>${t(project.blurb)}</p>
         <div class="work-links">${project.links.map((link) =>
           `<a class="pill-link" href="${link.href}"${link.external ? ' target="_blank" rel="noopener"' : ""}>${t(link.label)} ↗</a>`).join("")}</div>
       </div>
     </article>`;
}

// One chip in a step's list. A tool named in content.logos gets its logo in front of its name.
const logo = (tool) => typeof tool === "string" && content.logos[tool];
const chip = (tool) => (logo(tool) ? `<li><img src="${logo(tool)}" alt="">${tool}</li>` : listItem(tool));

function renderPage() {
  // The desk folder wears the newest project's colours.
  const folder = document.querySelector(".folder");
  folder.style.setProperty("--accent", content.project.accent);
  folder.style.setProperty("--accent-wash", content.project.accentWash);

  fill("desk-intro", content.desk.intro, (paragraph) => `<p>${t(paragraph)}</p>`);
  fill("note-logos", content.desk.note.tools, (tool) => `<li><img src="${logo(tool)}" alt="${tool}" title="${tool}"></li>`);
  fill("work-grid", content.projects, workCard);
  fill("bio", content.about.bio, (paragraph) => `<p>${t(paragraph)}</p>`);
  fill("experience", content.about.experience, timelineItem);
  fill("education", content.about.education, timelineItem);
  fill("work-history", content.about.work, timelineItem);
  fill("languages", content.about.languages, listItem);
  fill("steps", content.skills.steps, (step) =>
    `<li><h3>${t(step.name)}</h3><p>${t(step.text)}</p><ul class="tags">${step.tools.map(chip).join("")}</ul></li>`);
  document.getElementById("mail-link").href = "mailto:" + content.site.email;
}

// ---------- Desk drag ----------

// Objects can be dragged only while style.css scatters them on the desk (position: absolute),
// which it does on wide screens. On phones they sit in a grid and only respond to clicks.
const desk = document.querySelector(".desk-objects");
let drag = null;             // the drag in progress: which object, where the pointer started, where the object was
let movedDuringDrag = false; // a drag ends with a click event, which must not follow the link
let topLayer = 1;

desk.addEventListener("pointerdown", (event) => {
  const object = event.target.closest(".object");
  if (!object || event.button !== 0 || getComputedStyle(object).position !== "absolute") return;
  drag = {
    object,
    startX: event.clientX, startY: event.clientY,
    x: Number(object.dataset.x || 0), y: Number(object.dataset.y || 0), // where the last drag left it
  };
  object.setPointerCapture(event.pointerId);
  object.classList.add("lifted");
  object.style.zIndex = ++topLayer; // the object you hold comes to the front
});

desk.addEventListener("pointermove", (event) => {
  if (!drag) return;
  const x = drag.x + event.clientX - drag.startX;
  const y = drag.y + event.clientY - drag.startY;
  if (Math.hypot(x - drag.x, y - drag.y) > 4) movedDuringDrag = true;
  drag.object.style.translate = `${x}px ${y}px`; // show it here
  drag.object.dataset.x = x;                      // and remember it for the next drag
  drag.object.dataset.y = y;
});

function endDrag() {
  if (!drag) return;
  drag.object.classList.remove("lifted");
  drag = null;
}
desk.addEventListener("pointerup", endDrag);
desk.addEventListener("pointercancel", endDrag);

// The click that ends a drag is swallowed so the link is not followed.
desk.addEventListener("click", (event) => {
  if (movedDuringDrag) event.preventDefault();
  movedDuringDrag = false;
});
