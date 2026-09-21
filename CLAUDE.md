# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this
repository. It is an entry point only — the detail lives in `context/`, indexed below. Read a
context file when its trigger matches; don't load them all.

## What this is

Portfolio site for Chang Chu-Pei (張主佩), UI/UX designer and researcher. A bilingual
(English / Traditional Chinese) static site: a home page with a draggable "desk", one Work panel
per project, and a case-study page per project.

Built for someone learning HTML, CSS and JavaScript, so the code stays plain. **Keep it that
way unless the owner asks otherwise.**

## Tech stack

- **Plain HTML, CSS and JavaScript.** No npm, no bundler, no framework, no ES modules, no
  `package.json`. Classic `<script src>` tags, so `index.html` works by double-click and in VS
  Code Live Preview.
- **Every word is in `content.js`**, both languages side by side as `{ en: "…", zh: "…" }`.
  `site.js` fills the page from `data-text` attributes; each page's own script defines
  `renderPage()` for the lists only it has.
- **Hosted on GitHub Pages from the repo root** — pushing to `main` is the deploy.
- **Checks are `test.html`**, one runnable page. Serve it over `http://`; every line must say PASS.

Root files: `index.html`, `ilandgreen.html`, `feetmine.html` (+`.css`/`.js`), `xizhou.html`
(+`.css`), `content.js`, `site.js`, `home.js`, `project.js`, `style.css`, `test.html`, `img/`,
`tools/serve.ps1`. Plus `ilandgreen/`, a standalone prototype app that shares nothing with the
site.

## Context index

**`context/01_architecture/`**
- `data-flow.md` — how a page renders: script order, the one render pass, `t()`/`fill()`/`get()`,
  how colour flows from data into CSS. *Read before changing any `.js` file or adding a page.*
- `pages.md` — what each page is and which of the three case-study patterns it follows. *Read
  before editing a page you haven't opened yet, or when deciding where something belongs.*
- `decisions.md` — the deliberate constraints and why. *Read before proposing a tool, dependency,
  or restructure — most obvious improvements are already ruled out here.*

**`context/02_conventions/`**
- `code-style.md` — comment register, JS/HTML/CSS idioms, class prefixes, phone-first CSS. *Read
  before writing more than a couple of lines.*
- `content-model.md` — the shape of `content.js` and a project entry, with the ordering and `id`
  rules that are easy to get wrong. *Read before editing copy or adding a project.*
- `accessibility.md` — the `.fm-sr` hidden-table pattern, alt-text rules, focus, reduced motion.
  *Read before adding an image, chart, table or animation. Several of these are test-enforced.*

**`context/03_commands/`**
- `serve-and-test.md` — serve the site, run the checks (browser and headless), read a page's
  console, screenshot a phone layout, deploy. *Read when you need to run or verify anything.*
- `add-a-project.md` — adding a project, adding a tool logo, exporting deck slides. *Read when
  doing one of those three things.*

**`context/04_gotchas/`**
- `known-issues.md` — what is currently broken or unfinished: `xizhou.html` throws, test coverage
  gaps, pending image exports, unreferenced assets. *Read before touching `xizhou.html`, before
  trusting a green test run, and when something behaves oddly.*
- `tricky-behaviour.md` — intentional behaviour that looks like a bug: re-render on language
  switch, charts that stay English, drag only on wide screens, unreviewed copy. *Read when
  something surprises you, or before treating any copy as final.*
