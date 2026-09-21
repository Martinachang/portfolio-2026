# CLAUDE.md

A portfolio site for Chang Chu-Pei (張主佩), a UI/UX designer and researcher. Bilingual, English
and Traditional Chinese. A home page with a draggable desk, one panel per project, and one
case-study page per project.

`context/gotchas.md` holds the things that bite and the commands to run. Read it when something
surprises you or before you run anything.

## Stack

Plain HTML, CSS and JavaScript. No npm, no bundler, no framework, no ES modules, no
`package.json`. Classic `<script src>` tags, so every page opens by double-click and in VS Code
Live Preview.

GitHub Pages serves the repository root, so a push to `main` is a deploy. There is no build step
and no continuous integration. Anything broken on `main` is live.

## The tree

```
portfolio-2026/
├── CLAUDE.md                   this file
├── context/gotchas.md          what bites, and how to run things
│
├── index.html            129   the home page: desk, work list, about, skills, contact
│
├── work/                       one folder per case study, each page named index.html
│   ├── feetmine/
│   │   ├── index.html    428   an editorial case study
│   │   └── feetmine.js   265   FeetMine's lists, charts, tables and diagrams
│   ├── xizhou/
│   │   ├── index.html    364   an editorial case study
│   │   └── xizhou.js      42   Walk Xizhou's lists
│   └── ilandgreen/
│       └── index.html     62   built entirely from content.js by js/project.js
│
├── js/                         scripts more than one page loads
│   ├── content.js      1,123   every word on the site, in both languages
│   ├── site.js           133   language, the chrome, data-* filling, the glide, item templates
│   ├── home.js           110   the desk, the work cards, the profile lists
│   └── project.js         39   fills any standard project page from content.js
│
├── css/
│   ├── style.css         406   tokens and the shared site layout
│   └── editorial.css     658   the two case-study pages: shared, then FeetMine, then Xizhou
│
├── img/                        by owner, not by kind
│   ├── site/                   2 files: the mascot and the profile photo
│   ├── logos/                  9 tool logos, one SVG each
│   ├── feetmine/              11 files
│   ├── xizhou/                 1 file
│   ├── ilandgreen/             5 files
│   ├── avatar/                 1 file
│   └── _unused/               23 files referenced by nothing; the owner prunes them
│
├── files/Resume-ENG.pdf
├── demo/ilandgreen/            a separate prototype app; ignore it
└── tools/
    ├── test.html         219   the only check; serve it over http://
    └── serve.ps1               a static server, for the owner's Windows machine
```

`demo/ilandgreen/` is 12 files and 1,452 lines with its own router, state and namespace. It shares
nothing with the site. It is served from here as the Demo link on the ILANDGREEN work card. Its
case-study page is the unrelated `work/ilandgreen/index.html`; the parent folder is what tells the
two apart, so always name it.

A script one page loads lives beside that page, which is why `feetmine.js` and `xizhou.js` sit in
their project folders. A script more than one page loads lives in `js/`, which is why `project.js`
does not — any standard project page can use it.

## How a page renders

Script order is the dependency graph. `content.js`, then `site.js`, then the page's own script.
`site.js` calls `renderPage()` without a guard, so every page must define it.

`render()` runs on load and on every language switch, and does four things in order:

1. `renderChrome()` draws the top bar and the footer. Each page carries an empty
   `<header class="topbar">` and an empty `<footer>` for it to fill. The nav is therefore not in
   the HTML file. The skip link is, because a keyboard user needs it before any script runs.
2. `[data-text="a.b.c"]` elements get `t(get("a.b.c"))`.
3. `[data-html]` gets `innerHTML`, `[data-alt]` gets `alt`.
4. `renderPage()` draws the lists only that page has.

`t(value)` returns `value[lang]` for an `{ en, zh }` pair, and returns a plain string unchanged.
That is how names, email addresses and tool names stay the same in both languages.

`fill(id, items, template)` replaces an element's `innerHTML`. That is why the whole page redraws
on a language switch, and why anything added to the DOM by hand is lost when it does.

One value differs per page: how far it sits below the repo root. A case study carries
`<body data-root="../../">`; the home page carries nothing, and `site.js` reads `""`. Everything
the chrome links to lives at the root, so `root` prefixes the resume link, and `inPagePrefix`
derives from it — an empty `root` means this is the home page, which links to its own sections
with `#work` so the glide can take over.

**A path stored in `content.js` is root-relative, and the renderer adds `root`.** `home.js` runs
only at the root and needs no prefix; `project.js` runs at depth two and prefixes every path it
reads. Store `img/feetmine/banner.jpg` in content, never `../../img/...` — the same value is read
from two depths.

## Conventions

- Two-space indent, double quotes, semicolons. Build markup with template literals and
  `.map(...).join("")`, then hand it to `fill()`. Nothing here calls `document.createElement`.
- Read text through `t()`, never `value.en`. Reach into content with `get("a.b.c")` or a
  `data-text` attribute.
- An element that JavaScript fills gets an `id` and stays empty in the HTML.
- Give every `<section>` an `aria-labelledby` pointing at its own heading.
- CSS is phone-first. Wider layouts sit in `@media (min-width: 720px)` and `900px` blocks. Some
  queries sit mid-file beside the rule they belong to, so search for `@media` before editing.
- Per-project colour arrives as a custom property set from JavaScript. Write rules against the
  property, never against a hex value that belongs to one project.
- `img/` is filed by owner, not by kind: a new project image goes in `img/<project>/`. Anything in
  `img/_unused/` is referenced by nothing and is the owner's to prune.
- Comments: see the section at the end of this file.

### `content.js`

One object. Top-level keys: `site`, `desk`, `work`, `projects`, `feetmine`, `xizhou`, `about`,
`logos`, `skills`, `contact`.

Projects are newest first, because `projects[0]` is what the desk folder shows — the home page has
no `data-project`, so `site.js` falls back to the first entry. A project's `id` must match
`data-project` on its page's `<body>`, and must be unique even for a project with no page.

Store a repeating list as an array, and use the same key name on both editorial pages: `steps`,
`items`, `cards`, `photos`. Never numbered siblings like `step1`, `step2`.

Both halves of a pair must exist. `tools/test.html` walks the whole object and fails on a missing
half.
The one exception is `line2`, the grey second half of a two-line heading: a heading that needs two
lines in English often fits on one in Chinese.

### `editorial.css`

Three parts in order: the shared layout, then FeetMine's rules, then Walk Xizhou's.

Shared rules are unscoped, because nothing else loads the file. Every rule in a page part carries
that page's body class, so the two pages cannot reach each other. Four selectors exist in both
parts with different values and would otherwise collide: `.fm-quote`, `.fm-table`,
`.fm-table tbody th` and `.fm-table thead th`.

A page supplies six brand tokens: `--fm-primary`, `--fm-primary-dark`, `--fm-primary-tint`,
`--fm-accent-heading`, `--fm-accent-body` and `--fm-hero-shadow`. A third editorial page costs a
token block, not a stylesheet.

The `fm-` prefix is historical. It means the editorial layout, not FeetMine.

## Already decided

Do not re-suggest these. Each was weighed and settled.

- **`content.js` stays one file.** Delete it and the complexity does not vanish, it reappears as
  hard-coded bilingual text in four HTML files. Splitting needs either ES modules, which break the
  double-click requirement, or more script tags in a fixed order. Revisit only for a concrete
  problem such as merge conflicts, never for file size.
- **The chrome stays in JavaScript.** Putting the nav back in the HTML means four copies, and the
  git history shows the same nav edit hitting three files twice in five commits.
- **`.fm-*` is not renamed.** 1,127 occurrences across HTML, JavaScript and CSS. Pure churn.
- **The demo app lives at `demo/ilandgreen/`.** It was moved out of the root to stop it reading
  as the sibling of the case-study page. The Demo href in `content.js` moved with it, so the old
  `/ilandgreen/` URL is dead. Do not move it again.

## Comments

Default to none. Good names and small functions carry it; comments rot.
Golden rule: explain **why**, not what.

- **Doc comments** on the public API surface, for callers. Go: a doc comment on
  every exported name, starting with the name, full sentence, present tense
  (`// ParseConfig reads ...`), no `@param` tags. TS: TSDoc on exported
  functions, hooks and shared types.
- **Inline comments** are rare and for maintainers: a hidden constraint, a
  subtle invariant, a workaround for a specific bug with an issue reference,
  deliberately unidiomatic code, or a copied snippet with its source linked.
- Never narrate the code, never excuse unclear code (rename instead), and never
  reference the current task or fix. "added for X flow" belongs in the PR and
  rots in the file.
