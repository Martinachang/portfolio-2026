# The shape of `content.js`

One object, `const content`, with these top-level keys:

`site` · `desk` · `work` · `projects` (array) · `feetmine` · `xizhou` · `about` · `logos` ·
`skills` · `contact`

`projects` is the only array; each case study with a bespoke page also gets its own top-level key
holding that page's words (`content.feetmine`, `content.xizhou`).

## Strings

```js
name: { en: "Chang Chu-Pei", zh: "張主佩" },   // switches with the language
badge: "COURSE",                              // language-neutral: t() hands it back unchanged
```

A plain string means "the same in both languages" — names, emails, tool names, status badges.
Use it deliberately rather than writing the same text twice.

Both halves must exist. A missing `zh` reaches the page as the literal word `undefined`, and
`test.html` fails on it for the FeetMine page.

## A project entry

```js
{
  id: "feetmine",          // must match data-project in the page's <body>
  page: "feetmine.html",
  accent: "#f7943e",       // the project's own colours, applied to the section and the desk folder
  accentWash: "#ffe9d6",
  banner: "#FF9F46",       // flat colour, used when a card has no image
  badge: "COURSE",         // the status pill: COURSE, LIVE, RESEARCH
  name: …,  nameZh: …,  summary: …,
  headline: …,  blurb: …,  // the Work panel on the home page
  stats: [{ label, value }, …],
  workImage: { src, alt, fit },   // the card image; falls back to `cover`
  visualBackground: …,            // behind the card image; may be a gradient
  visualNoise: true,  visualNoiseOpacity: 0.5,
  links: [{ label, href, external, primary }, …],
  cover: { src, alt },            // only for a project.js page
  phases: [ … ],                  // only for a project.js page
}
```

Rules that are easy to get wrong:

- **Order matters.** Newest first; `projects[0]` is what the desk folder shows, because the home
  page has no `data-project` and `site.js` falls back to the first entry.
- `id` must match `data-project` on that page's `<body>`, and must be unique even for a project
  with no page at all (`avatar-perception`), or it will be picked up as the desk's default.
- The card image links to the `primary: true` link; with no primary, `home.js` uses `links[0]`.
- `workImage.frame: "browser"` wraps the image in a mac-style browser mockup and needs a `url`.
- `fit: "contain"` for app screens on a coloured background, `"cover"` for artwork that should
  fill the frame.
- A project with no case-study page simply has no `page` and links out instead.

## Two-line headings on the editorial pages

Every `.fm-h2` heading is two spans: `line1` is the dark (or white) half, `line2` the grey half.
Keep that pairing when adding a section; the CSS expects both.

## `content.logos`

Maps a tool name to its SVG path. `home.js` shows a logo for any tool that has an entry and plain
text for any that does not — adding a logo means adding one line here plus the file in `img/`,
never touching `home.js`.

## Numbers and copy provenance

The numbers on the FeetMine page are the deck's own; check `img/feetmine-05…19.jpg` before
changing one. What is unreviewed or inferred is listed in
`context/04_gotchas/tricky-behaviour.md` — read it before treating any of that copy as final.
