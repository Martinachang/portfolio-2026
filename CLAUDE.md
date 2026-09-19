# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Portfolio site for Chang Chu-Pei (張主佩), UI/UX designer and researcher. Built for someone learning HTML, CSS and JavaScript, so the code stays plain: no npm, no bundler, no framework, no ES modules. Classic `<script src>` tags, so `index.html` works by double-click and in VS Code Live Preview. Hosted on GitHub Pages from the repo root. Keep it that way unless the owner asks otherwise.

## Files

- `index.html`: the home page. The desk, one Work panel per project, then About, How I work (three steps, `#skills`), Contact.
- `ilandgreen.html`: the standard case-study page. `<body data-project="ilandgreen">` names its entry in `content.js`, and `project.js` fills the hero, the cover and the phases from it. To add a project: copy this file, change `data-project`, add an entry to `content.projects` (newest first; the first one is featured on the desk) and its images.
- `feetmine.html` + `feetmine.css` + `feetmine.js`: FeetMine's case study, a page of its own — see the section below. It does not use `project.js`.
- `content.js`: every word on the site, in both languages side by side: `{ en: "...", zh: "..." }`. Plain strings are language-neutral. Each project carries its own `accent` and `accentWash` colours, plus `headline`, `blurb` and `stats` for its panel on the home page. `content.feetmine` holds that one page's words. Only `desk.headline` may contain HTML (`<em>`); it is filled through `data-html` instead of `data-text`. `content.logos` maps a tool name to its SVG; any tool with an entry shows the logo.
- `site.js` (shared: language, `t()`, `fill()`, `render()`, the one-second glide to `#section` links), `home.js` (project cards, profile lists, desk drag), `project.js` (phase sections), `feetmine.js`. Each page script defines `renderPage()`, which `site.js` calls on load and on every language switch.
- `style.css`: tokens at the top, phone-first rules, then two `@media (min-width: …)` blocks at the end for wider screens. Site accent is blue; `.project`, the folder and the work cards get a project's colours from JS.
- `test.html`: the runnable check. Open it through a local server; every line must say PASS.
- `img/`: tool logos (`*.svg`, from simple-icons and Wikimedia Commons), `profile.jpg`, `mascot.png`, and the deck's slides as `<project>-NN.jpg`, 2000px wide, exported from `portfolio-example/` (the source deck, 19 slides at 7680×4320, git-ignored) with `sips -Z 2000 -s format jpeg -s formatOptions 80 in.jpg --out out.jpg`. ILANDGREEN shows its slides whole; FeetMine never does — it crops them (see below).
- `menti/`: the reference screenshots the FeetMine page's layout was built from. Git-ignored, reference only — none of that page's words, images or logo are copied.

## The FeetMine page

An editorial case study in the style of Tammy Taabassum's Menti page: full-bleed hero, then
full-width sections that alternate between a light (`#F1EFEA`) and a dark (`#221F1C`) theme, with
one orange section for the design goals. Its brand colour is `#FF9F46`.

- **Structure.** The sections are written out in `feetmine.html`; one-off strings carry
  `data-text="feetmine.…"` and `site.js` fills them. `feetmine.js` defines `renderPage()` and draws
  the parts that repeat — the lists, the three charts, the comparison table, the service flow, the
  screen row — with the shared `fill()` helper, the way `home.js` does.
- **Layout pieces**, each written once in `feetmine.css`: `.fm-split` (heading beside text, 1200px),
  `.fm-h2` (two lines, the second in grey), `.fm-numlist` / `.fm-statlist`, `.fm-panels` (a
  full-bleed row of two coloured panels, ratio set inline per feature), `.fm-card` (the dark rounded
  card), `.fm-grain`, `.fm-shot` (image crops).
- **Nothing on this page is a picture of a slide.** Every chart, table and diagram is HTML, CSS and
  inline SVG, and each chart also carries its numbers in a visually hidden table. Images are only
  app screens and photos.
- **Image crops.** The final exports (`img/feetmine-hero.png`, `feetmine-screen-*.png`,
  `feetmine-yodex-*.jpg`, …) do not exist yet, so each `<img>` still points at a deck slide and an
  `.fm-shot--*` class in `feetmine.css` crops it down to the one screen or photo that belongs there.
  Every one is marked with a `TODO` comment. When an export arrives, point the `<img>` at it and
  drop the `.fm-shot--*` class.
- **Styling is scoped.** Everything is under `.cs-feetmine`, the class on that page's `<body>`, so
  `style.css` and the other pages are untouched.
- All of this replaced a set of generic `block-*` renderers in `project.js` and matching rules in
  `style.css` that no other page used; they are gone.

## Checking work

```
python3 -m http.server 8123          # then open http://127.0.0.1:8123/test.html
```

Headless Chrome with `--virtual-time-budget` fails the glide check (no real animation frames); the rest passes. Headless Chrome enforces a 500px minimum window width. To screenshot a phone layout, load the page inside a 375px-wide `<iframe>` in a scratch page and screenshot that; give the iframe the page's full `scrollHeight` and offset it with a negative `top` to reach a section further down.

## Content facts to know

- Chinese copy was drafted from the English deck and is unreviewed by the owner. The deck's two "Worked" date ranges were reversed in the source and were normalised to start–end order.
- FeetMine's five process phases (Research, Define, Design, Test & iterate, Launch) were inferred from the deck, which never states them; the owner still has to confirm them. Its Reflection section is a placeholder.
- The desk objects map to sections: folder → Work, badge → About, note → Skills, postcard → Contact. On screens under 720px they become a grid with no drag.
