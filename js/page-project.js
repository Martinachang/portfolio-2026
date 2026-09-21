// js/page-project.js — a case-study page built from site-text.js: the hero, the cover and the phases.
// site.js has already put this page's project (from <body data-project="…">) in content.project.
//
// work/ilandgreen/index.html uses this. Copy that page to add a standard project. A project that needs a
// bespoke layout gets a page of its own instead, as work/feetmine/index.html and work/xizhou/index.html do.

const project = content.project;

function renderPage() {
  // The whole section wears the project's colours, the way js/page-home.js colours the desk folder.
  const section = document.querySelector(".project");
  section.style.setProperty("--accent", project.accent);
  section.style.setProperty("--accent-wash", project.accentWash);

  document.getElementById("case-badge").textContent = project.badge;
  document.getElementById("case-headline").textContent = t(project.headline);
  document.getElementById("case-blurb").textContent = t(project.blurb);
  fill("case-meta", project.stats, (stat) => `<dt>${t(stat.label)}</dt><dd>${t(stat.value)}</dd>`);

  const cover = document.getElementById("cover");
  cover.src = root + project.cover.src;
  cover.alt = t(project.cover.alt);

  renderPhases();
}

// Every phase is on the page, one after another: its name, its headline, its bullet points and its
// figures. The links at the top glide to each phase (site.js handles any link to #something).
function renderPhases() {
  document.getElementById("phase-nav").setAttribute("aria-label", t(project.phasesLabel));
  fill("phase-nav", project.phases, (phase, i) => `<a href="#phase-${i}">${t(phase.name)}</a>`);
  fill("phases", project.phases, (phase, i) =>
    `<section class="phase" id="phase-${i}" aria-labelledby="phase-${i}-title">
       <h3 id="phase-${i}-title"><span class="phase-mark">${t(phase.name)}</span>${phase.headline ? t(phase.headline) : ""}</h3>
       ${phase.points ? `<ul class="points">${phase.points.map(listItem).join("")}</ul>` : ""}
       <div class="figures">${phase.figures.map((figure) =>
         `<a href="${root + figure.src}" target="_blank"><img src="${root + figure.src}" alt="${t(figure.alt)}" loading="lazy"></a>`).join("")}</div>
     </section>`);
}
