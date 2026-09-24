// site.js — shared by every page. Holds the language, fills every data-text element from
// site-text.js, draws the chrome, and glides to in-page links.
//
// Load order is the dependency graph: site-text.js, then this file, then the page's own script.
// That script must define a global renderPage(); render() calls it unguarded.

// The home page has no data-project, and falls through to the newest project for the desk folder.
content.project = content.projects.find((project) => project.id === document.body.dataset.project) || content.projects[0];

let lang = "en";

// t() turns a { en, zh } pair into the text for the current language. A plain string comes back
// unchanged, which is how names, emails and tool names stay the same in both languages.
function t(value) {
  if (typeof value === "string") return value;
  if (value[lang] === undefined) console.warn("Missing " + lang + " text:", value);
  return value[lang];
}

// get("site.nav.contact") walks down the content object one key at a time.
function get(path) {
  return path.split(".").reduce((object, key) => object[key], content);
}

// fill() replaces the contents of the element with this id: one piece of HTML per item.
function fill(id, items, template) {
  document.getElementById(id).innerHTML = items.map(template).join("");
}

const listItem = (item) => `<li>${t(item)}</li>`;

// ---------- Item templates for the editorial case-study pages ----------

const two = (i) => String(i + 1).padStart(2, "0"); // 0 → "01"

function numberedItem(item, i) {
  return `<li><span class="fm-n">${two(i)}</span><h3>${t(item.title)}</h3><p>${t(item.text)}</p></li>`;
}

// .fm-numlist--timeline draws a line joining the circles, so the steps read as one process.
function timelineItem(item, i) {
  return `<li><span class="fm-n"><span class="fm-n-circle">${two(i)}</span></span><h3>${t(item.title)}</h3><p>${t(item.text)}</p></li>`;
}

// A step in a row, with no explanation under its title.
function stepItem(item, i) {
  return `<li><span class="fm-n">${two(i)}</span><h3>${t(item)}</h3></li>`;
}

function cardItem(card) {
  return `<div class="fm-card"><h3 class="fm-label">${t(card.title)}</h3><p class="fm-note">${t(card.text)}</p></div>`;
}

function setLanguage(next) {
  lang = next;
  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang === "zh" ? "zh-Hant" : "en";
  render();
}

// Delegated, because renderChrome() replaces these buttons on every render.
document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-lang]");
  if (button) setLanguage(button.dataset.lang);
});

// ---------- The chrome ----------

// Each page carries an empty <header class="topbar"> and an empty <footer> for renderChrome() to
// fill. Everything the chrome links to lives at the repo root, so a page below the root has to
// climb back first: <body data-root="../../"> in work/<id>/, and nothing on the home page.
const root = document.body.dataset.root || "";

// The home page links to its own sections so the glide below can take over. Every other page has
// to travel to index.html first. An empty root means this is the home page.
const inPagePrefix = root && root + "index.html";

function renderChrome() {
  const topbar = document.querySelector(".topbar");
  if (topbar) {
    topbar.innerHTML = `
      <a class="brand" href="${inPagePrefix || "#top"}"><img class="brand-icon" src="${root}img/site/favicon.png" width="49" height="49" alt=""><span data-text="site.brandName"></span> <small data-text="site.brandNameOther"></small></a>
      <nav>
        <a href="${inPagePrefix}#work" data-text="site.headerNav.work"></a>
        <a href="${inPagePrefix}#about" data-text="site.headerNav.about"></a>
        <a href="${root}resume/Resume-ENG.pdf" target="_blank" rel="noopener" data-text="site.headerNav.resume"></a>
        <a href="${inPagePrefix}#contact" data-text="site.headerNav.contact"></a>
      </nav>
      <div class="lang" role="group" aria-label="Language / 語言">
        <button type="button" data-lang="en" lang="en">EN</button>
        <button type="button" data-lang="zh" lang="zh-Hant">中文</button>
      </div>`;
  }
  const footer = document.querySelector("footer");
  if (footer) footer.innerHTML = `<p data-text="site.footer"></p>`;
}

// render() runs on load and again on every language switch. The chrome is drawn first, because the
// elements it creates carry data-text and data-lang attributes the passes below depend on.
function render() {
  renderChrome();
  document.querySelectorAll("[data-text]").forEach((el) => { el.textContent = t(get(el.dataset.text)); });
  document.querySelectorAll("[data-html]").forEach((el) => { el.innerHTML = t(get(el.dataset.html)); });
  document.querySelectorAll("[data-alt]").forEach((el) => { el.alt = t(get(el.dataset.alt)); });
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.setAttribute("aria-pressed", button.dataset.lang === lang);
  });
  renderPage();
}

// ---------- Gliding to a section ----------

// The skip link is excluded so that keyboard users land on the section at once.
const SCROLL_TIME = 1200; // milliseconds
document.addEventListener("click", (event) => {
  const link = event.target.closest('a[href^="#"]:not(.skip)');
  const target = link && link.hash.length > 1 && document.querySelector(link.hash);
  if (!target || event.defaultPrevented) return;
  event.preventDefault();
  const from = window.scrollY;
  const to = target.getBoundingClientRect().top + from - document.querySelector(".topbar").offsetHeight;
  const started = performance.now();
  function step(now) {
    const p = Math.min((now - started) / SCROLL_TIME, 1);
    const eased = p < 0.5 ? 2 * p * p : 1 - (2 - 2 * p) ** 2 / 2; // slow start, slow finish
    window.scrollTo({ top: from + (to - from) * eased, behavior: "instant" });
    if (p < 1) requestAnimationFrame(step);
    else history.replaceState(null, "", link.hash); // so the address bar matches a normal jump
  }
  requestAnimationFrame(step);
});

document.addEventListener("DOMContentLoaded", () => setLanguage(localStorage.getItem("lang") || "en"));
