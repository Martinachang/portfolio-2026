# Key decisions, and why

The constraints below are deliberate. Read this before proposing a tool, a dependency or a
restructure — most of the obvious "improvements" have already been ruled out for a stated reason.

## No npm, no bundler, no framework, no ES modules

The site belongs to someone learning HTML, CSS and JavaScript. Classic `<script src>` tags mean
`index.html` works by double-click and in VS Code Live Preview, with nothing to install and
nothing to run first. ES modules would break the double-click case (`file://` blocks module
loading), which is exactly why they are not used even though they would be tidier.

**Consequence:** globals and script order *are* the dependency graph. Adding a page script means
adding a `<script>` tag in the right position.

**Keep it this way unless the owner asks otherwise.**

## Hosted on GitHub Pages from the repo root

No deploy step, no CI. Pushing to `main` is the deploy. This is also why the built site has to
work as plain files: there is nothing between the repo and the browser.

## Every word lives in one file

`content.js` holds all the site's copy, both languages side by side. The owner edits text
without touching markup, and a translation can never drift out of sync with its original because
the two sit on adjacent lines. The cost is one 83KB, ~1100-line file that everything imports;
that tradeoff was accepted on purpose.

## Bilingual by data attribute, not by duplicate pages

One page, two languages, switched at runtime by re-running `render()`. A plain string in
`content.js` means "the same in both languages", so names, emails and tool names need no
special handling. There is no `index.zh.html`, and there should not be.

## A case study can be data-driven or hand-written

`ilandgreen.html` + `project.js` renders any project from its `phases` array — cheap to add,
identical in shape to every other project. That stopped being enough for FeetMine, which needed
a bespoke editorial layout, so FeetMine got a page and a stylesheet of its own instead of
`project.js` growing generic `block-*` renderers that only one page would ever use. Those
renderers were written, then deleted.

`xizhou.html` went one step further and skipped the page script too, writing every list as
static markup with named `data-text` keys. That is cheaper to write once and more work to
change; it is also why that page is missing `renderPage()`.

**Choosing for a new project:** a standard project → copy `ilandgreen.html`. A bespoke layout
with repeating structures → copy `feetmine.html` and give it a page script. A bespoke layout
with no repetition → `xizhou.html`, and read the gotchas first.

## Page CSS is scoped by a body class

`feetmine.css` lives entirely under `.cs-feetmine` and `xizhou.css` entirely under `.cs-xizhou`,
the classes on those pages' `<body>` elements. Nothing a bespoke page does can leak into
`style.css` or any other page, so a page can be reworked without a site-wide regression risk.

## The four FeetMine charts are the Figma exports, not a rebuild

`img/chart1.svg` to `chart4.svg` are dropped in exactly as Figma produced them, because the source
file *is* the design. The cost is that their labels are outlined paths rather than real `<text>`,
so they are invisible to a screen reader and cannot be translated. The accessibility answer is a
visually hidden data table beside each one; the translation gap is an accepted limitation. See
`context/04_gotchas/tricky-behaviour.md`.

`chart4.svg`, the life-stage bar, replaced a hand-built bar of `.fm-stages` elements. That is the
direction this decision has been trending: when a chart's design changes often and its data does
not need to be live, the export wins over the rebuild.

## Checks are one runnable HTML page, not a test framework

`test.html` loads the real pages in iframes and drives them. No framework to install, no
`package.json`, and it runs in the same browser the site does. It has to be served over
`http://` because a `file://` page may not read sibling files.

## Scrolling is animated in JS, not CSS

`style.css` sets `scroll-behavior: smooth`, but the 1200 ms glide with its custom easing and
topbar offset is a `requestAnimationFrame` loop in `site.js`. CSS smooth scrolling gave neither
the duration nor the header offset.
