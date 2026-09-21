# Behaviour that surprises people

All of this is intentional. It is here because it looks like a bug the first time you meet it.

## A language switch re-renders everything

`setLanguage()` → `render()` → `fill()`, and `fill()` replaces `innerHTML` wholesale. So any DOM
state you added by hand to a rendered list is destroyed on every language switch. Anything that
must survive belongs in `content.js`, or must be re-applied at the end of `renderPage()` — which
is exactly why `feetmine.js` calls `reveal()` there rather than once at load.

## The four FeetMine charts stay English in Chinese

`img/chart1.svg` to `chart4.svg` are Figma exports whose labels and numbers are outlined paths, not
`<text>`. Nothing can translate a shape, so those four charts remain English when the rest of the
page switches — unlike every other chart, table and diagram on the site. An accepted limitation of
using the design file as-is; the reasoning is in `context/01_architecture/decisions.md`.

Three are the background-section charts and the fourth is the life-stage bar in field research.
Every one of them carries its data in a visually hidden table beside it, so the meaning is still
available — only the words inside the picture are stuck in English.

## A missing translation reaches the page as the word "undefined"

`t()` returns `value[lang]`, warns to the console, and hands `undefined` to `textContent`.
`test.html` checks the FeetMine page's body text for that literal string in both languages. Other
pages have no such check.

## The language is remembered across pages and sessions

`localStorage.lang`. A page can load in Chinese for no visible reason because you switched it
last week. Clear it, or switch back, before concluding something is broken.

## `site.js` reads `document.body` at parse time

`content.project` is assigned as the file loads, not inside a function. That is why every page's
`<script>` tags sit at the end of `<body>`, and why moving them to `<head>` breaks every page.

It is also assigned **once**, not per render — so `content.project` is fixed for the life of the
page, and the `|| content.projects[0]` fallback is what makes the desk folder show the newest
project on the home page.

## The desk objects only drag on wide screens

`home.js` bails out unless `getComputedStyle(object).position === "absolute"`, which `style.css`
only sets above 720px. Below that they are a grid and only respond to clicks — not a broken drag
handler.

Drag positions live in `dataset.x` / `dataset.y` and are not persisted, so a reload resets the
desk. The click that ends a drag is deliberately swallowed (`movedDuringDrag`) so dragging the
folder does not navigate to `#work`.

## The hash appears 1200ms after the click

The glide calls `history.replaceState` only when the animation finishes. Anything checking
`location.hash` after clicking a nav link has to wait out `SCROLL_TIME` — `test.html` uses nested
`setTimeout`s of 400ms then 1200ms for exactly this reason.

`style.css` also sets `scroll-behavior: smooth`, which covers jumps the JS does not intercept
(the skip link, a hash typed into the address bar). Both mechanisms are live at once.

## `ilandgreen.html` and `ilandgreen/` are different things

`ilandgreen.html` is the case-study page, part of the portfolio. `ilandgreen/index.html` is a
standalone interactive prototype with its own router, state, CSS tokens and `window.IG` namespace,
sharing nothing with the site. Editing the wrong one is the easiest mistake in this repo.

## Copy that is not final

- The **Chinese copy was drafted from the English deck and has never been reviewed by the owner.**
  Treat it as a draft everywhere.
- The deck's two "Worked" date ranges were reversed in the source; they were normalised here to
  start–end order.
- FeetMine's five process phases (Research, Define, Design, Test & iterate, Launch) were **inferred
  from the deck, which never states them.** The owner still has to confirm them.
- FeetMine's Reflection section is a placeholder.
- The numbers on the FeetMine page are the deck's own — check `img/feetmine-05…19.jpg` before
  changing one.
