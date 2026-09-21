# Style and naming conventions

The code is written to be read by someone learning the language. Matching that register matters
more here than in most repos: clever is wrong even when it is shorter.

## Comments

Full sentences, in prose, explaining **why** — not restating what the line does. Every file opens
with a block comment saying what the file is for and what it may assume has already loaded:

```js
// home.js — the home page: the desk, the list of projects, and the profile sections.
// site.js has already loaded, so t(), fill(), listItem and content.project exist.
```

Non-obvious values are annotated where they sit (`const SCROLL_TIME = 1200; // milliseconds`),
and a decision that cost thought gets a sentence or two of reasoning inline. Unresolved work is a
`TODO` comment in place, never a separate list — see `context/04_gotchas/known-issues.md` for the
current count per file.

## JavaScript

- Two-space indent, double-quoted strings, semicolons.
- `function name() {}` for anything with a body worth naming; `const x = (a) => …` for one-liners
  and template helpers (`listItem`, `chip`, `two`, `logo`).
- Markup is built with template literals and `.map(...).join("")`, then handed to
  `fill(id, items, template)`. Do not reach for `document.createElement` — nothing in the repo
  does.
- Globals are the interface between files. A page script's only required export is
  `renderPage()`; everything else it defines is private by convention, not by scope.
- Read text through `t()`, never `value.en`. `t()` is what makes a plain string language-neutral.
- Reach into content through `get("a.b.c")` / `data-text`, not by walking `content` by hand.

## HTML

- `data-text="a.b.c"` for a one-off string, `data-html` only for markup (today: just
  `desk.headline`), `data-alt` for image alt text.
- An element that JS fills gets an `id` and is left empty in the HTML. Ids are kebab-case; on the
  editorial pages they are prefixed (`fm-meta`, `fm-process`, `fm-chart-bars`).
- Every `<section>` carries `aria-labelledby` pointing at its own heading.
- A block comment above each section says what it is and where its words come from.

## CSS

- Tokens first, in a `:root` block at the top of the file. Change a colour there, not in a rule.
- **Phone first.** Plain rules are the small-screen layout; `@media (min-width: 720px)` and
  `@media (min-width: 900px)` blocks at the **end** of the file add the wider ones. A
  `max-width` query is used only when something must be removed on small screens.
- Section dividers are `/* ---------- Name ---------- */`, and the name may be a full phrase.
- Class prefixes mark ownership: unprefixed classes belong to `style.css` and the shared pages;
  `.fm-*` to the editorial layout; `.cs-<page>` is the body class that scopes a page's whole
  stylesheet. Anything new on an editorial page must stay inside that scope.
- Per-project colour arrives as `--accent` / `--accent-wash` set from JS. Write rules against the
  variable, never against a hex value that belongs to one project.
- `@media (prefers-reduced-motion: reduce)` at the end of every stylesheet that animates.

## What lives where

Text goes in `content.js`. Structure goes in the HTML. Repetition goes in a page script. Colour
and layout go in CSS tokens. If a change seems to need a hard-coded string in a `.js` or `.html`
file, it probably belongs in `content.js` instead — see `content-model.md`.
