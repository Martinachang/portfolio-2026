# How a page renders

No build step, no framework, no modules. Every page is HTML that loads three or four plain
`<script src>` tags in order, and each script leaves globals behind for the next one.

```
content.js   →  const content = { … }          every word, both languages
site.js      →  t(), get(), fill(), render()    language, data-* filling, glide scroll
<page>.js    →  renderPage()                    the lists only this page has
```

Script order is the only module system there is: `content.js` first, `site.js` second, the
page's own script last. `site.js` calls `renderPage()` unconditionally, so a page that loads
`site.js` must define it — see `context/04_gotchas/known-issues.md`.

## The one render pass

`site.js` calls `setLanguage()` on `DOMContentLoaded` and again on every click of a
`[data-lang]` button. `setLanguage()` → `render()`, and `render()` does four things in order:

1. `[data-text="a.b.c"]` → `el.textContent = t(get("a.b.c"))`
2. `[data-html="…"]` → `el.innerHTML` — only `desk.headline`, the one string with `<em>` in it
3. `[data-alt="…"]` → `el.alt`
4. `renderPage()` — this page's own lists

So a one-off string needs no JavaScript at all: write the element in the HTML with a
`data-text` key and it fills itself. Only repeating structures (project cards, phases, tables,
charts) need `renderPage()` and the `fill(id, items, template)` helper:

```js
fill("work-grid", content.projects, workCard);   // innerHTML = items.map(template).join("")
```

`fill()` replaces `innerHTML` wholesale, which is why the whole page re-renders on a language
switch rather than being patched.

## Language

`lang` is a module-level `let` in `site.js`, `"en"` or `"zh"`, remembered in
`localStorage.lang`. `t(value)` returns `value[lang]` for an `{ en, zh }` pair and returns a
plain string unchanged — that is how names, emails and tool names stay language-neutral with
no special casing. A missing translation logs a `console.warn` and lands on the page as the
literal word `undefined`; `test.html` checks the FeetMine page for exactly that.

`setLanguage()` also sets `document.documentElement.lang` to `zh-Hant` or `en`, and
`aria-pressed` on the two buttons.

## Which project a page is about

At the top of `site.js`, before any function runs:

```js
content.project = content.projects.find(p => p.id === document.body.dataset.project)
                  || content.projects[0];
```

`<body data-project="feetmine">` names the entry in `content.projects`. The home page has no
`data-project`, so it falls through to `projects[0]` — that fallback is the whole mechanism
behind "the first project in `content.js` is the one featured on the desk folder".

## Colours flow from data into CSS

Every project entry carries its own `accent` and `accentWash`. JS writes them as CSS custom
properties onto one element and every rule underneath inherits them:

- `home.js` → `.folder` — the desk folder wears the featured project's colours
- `project.js` → `.project` — the whole case-study section
- `home.js`, inline per card — `background` (from `visualBackground` / `accentWash`) and
  `--noise-opacity` on `.work-visual`

`style.css` sets `--accent: var(--blue)` as the site default, so anything not overridden stays
blue. The two editorial pages do not use this at all; they define their own token block
(see `pages.md`).

## Gliding to a section

`site.js` catches every `a[href^="#"]` that is not `.skip`, cancels the jump and animates
`window.scrollY` over `SCROLL_TIME` (1200 ms) in a `requestAnimationFrame` loop, offset by
`.topbar` height, then calls `history.replaceState` so the address bar still ends up showing
`#work` as a normal jump would. The skip link is excluded on purpose: keyboard users should
land on the section at once.
