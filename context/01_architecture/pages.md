# The pages, and which pattern each one follows

Four pages at the repo root, plus one self-contained prototype in a subfolder. There are three
different case-study patterns in the repo, which is the single most confusing thing about it —
they exist for the reasons in `decisions.md`, and a new project should pick one deliberately.

| File | Scripts loaded | Styling | Pattern |
|---|---|---|---|
| `index.html` | content, site, home | `style.css` | the home page |
| `ilandgreen.html` | content, site, project | `style.css` | data-driven case study |
| `feetmine.html` | content, site, feetmine | `style.css` + `feetmine.css` | editorial, JS-rendered |
| `xizhou.html` | content, site | `style.css` + `xizhou.css` | editorial, static markup |
| `ilandgreen/index.html` | its own seven | its own four | separate prototype app |

## `index.html` — the home page

The desk (four draggable objects), the Work list (one full-width section per project), About,
How I work (`#skills`), Contact. `home.js` draws the project cards, the About timelines, the
skill chips and handles the desk drag.

The desk objects each lead to a section: folder → `#work`, badge → `#about`, note → `#skills`,
postcard → `#contact`. Dragging is gated on `getComputedStyle(object).position === "absolute"`,
which `style.css` only sets on wide screens — under 720px they become a grid and only respond
to clicks. A drag that moved more than 4px sets `movedDuringDrag`, and the click that ends the
drag is swallowed so the link is not followed.

## `ilandgreen.html` — the data-driven case study

The template to copy for a plain project. The page is a skeleton of empty elements with ids;
`project.js` fills the hero (`#case-badge`, `#case-headline`, `#case-blurb`, `#case-meta`), the
cover image, and then one `<section class="phase">` per entry in `project.phases`, plus the
`#phase-nav` links that glide to them. Nothing about the page's content lives in the HTML —
it all comes out of that project's entry in `content.js`.

## `feetmine.html` — the editorial case study

An editorial page in the style of Tammy Taabassum's Menti page: full-bleed hero, then
full-width sections alternating a light (`#F1EFEA`) and a dark (`#221F1C`) theme, with one
orange section for the design goals. Brand colour `#FF9F46`.

- The sections are written out in the HTML; one-off strings carry `data-text="feetmine.…"`.
- `feetmine.js` defines `renderPage()` and draws only the parts that repeat: the lists, the
  four charts, the comparison table, the service-flow SVG, the screen row, the photo panels.
- Layout pieces, each written once in `feetmine.css`: `.fm-split` (heading beside text, 1200px),
  `.fm-h2` (two lines, the second in grey), `.fm-numlist` / `.fm-statlist`, `.fm-panels` (a
  full-bleed row of two coloured panels, ratio set inline per feature), `.fm-card` (the dark
  rounded card), `.fm-grain`, `.fm-shot` (image crops).
- It also has two behaviours no other page has: reveal-on-scroll via `IntersectionObserver`
  adding `.is-in` to `.fm-reveal` sections, and one `<dialog id="fm-lightbox">` shared by every
  `.fm-zoom` button, which copies the thumbnail's crop class onto the frame so a click never
  opens a deck slide whole.
- Nothing on the page is a picture of a slide. Every table and diagram is HTML, CSS and inline
  SVG. Four charts are the exception: they are the exact SVGs exported from Figma. Three sit in
  the background section (`img/chart1.svg` to `chart3.svg`, drawn by `renderChartSvg`). The fourth
  is the life-stage bar in field research (`img/chart4.svg`, drawn by `renderStages`). See
  `context/02_conventions/accessibility.md` for why that matters and
  `context/04_gotchas/tricky-behaviour.md` for what it costs.

All of this replaced a set of generic `block-*` renderers in `project.js` and matching rules in
`style.css` that no other page used; they are gone.

## `xizhou.html` — the editorial case study with no page script

Walk Xizhou, the newest page. It copies FeetMine's look but not its machinery: **there is no
`xizhou.js`**. Every list, table and step is static markup with named `data-text` keys
(`xizhou.process.step1.title`, …) rather than a JS-rendered array. `xizhou.css` re-declares the
`--fm-*` tokens and ports only the `.fm-*` rules this page actually uses, all scoped under
`.cs-xizhou`; it does not link `feetmine.css`.

Brand tokens are `--xz-accent: #FFD226` and `--xz-accent-wash: #FDF3D7`, declared on `:root`,
then mapped onto `--fm-primary` / `--fm-primary-tint` inside `.cs-xizhou`. `--fm-primary-dark`
is `#6B4413` rather than FeetMine's `#E0761A`, because a darkened orange does not clear 4.5:1
against this page's brighter yellow.

The missing page script has two live consequences — see
`context/04_gotchas/known-issues.md` before touching this page.

## `ilandgreen/` — the interactive prototype

A separate system that happens to live in this repo. A phone-frame single-page app with its own
router, state, audio and screen modules under the `window.IG` namespace, its own four
stylesheets and its own token set, loaded by `ilandgreen/index.html`. It shares nothing with the
portfolio site — not `content.js`, not `style.css`, not the language switch — and the portfolio
only reaches it as an outbound "Demo" link in the ILANDGREEN project entry. Changes to the
portfolio's shared files cannot affect it, and vice versa.

Do not confuse `ilandgreen.html` (the case-study page) with `ilandgreen/index.html` (the app).
