# Known issues and unfinished work

Verified against the working tree on 2026-09-21. Check before assuming any of it is fixed.

## `xizhou.html` has no page script, and it throws

`site.js`'s `render()` calls `renderPage()` unconditionally. `xizhou.html` loads only
`content.js` and `site.js`, so:

```
Uncaught ReferenceError: renderPage is not defined    site.js:48
```

on load and again on every language switch. Two consequences:

- The page's **words still fill**, because the `data-text` / `data-html` / `data-alt` passes all run
  before `renderPage()` and the throw happens last. This is why the breakage is easy to miss.
- Everything that needed the page script never happens. Today that is exactly one thing: the
  contact button stays `href="#"` instead of `mailto:`. A `TODO` in the HTML says so.

The fix is a three-line `xizhou.js` defining `renderPage()` that sets `#fm-mail-link`, plus a
`<script src="xizhou.js">` after `site.js`. Alternatively guard the call in `site.js` — but that
would silently permit the same mistake on the next page.

## `test.html` does not cover `xizhou.html`

It drives `index.html`, `ilandgreen.html` and `feetmine.html` only. The error above therefore
passes the suite. A new bespoke page is not covered until you add an iframe and a block for it.

## `test.html` asserts exact counts

By design — the checks are specific rather than loose. Adding content makes them fail, and the
failure is the reminder to update the number. The ones that bite: 4 work cards, 6 note logos,
10 skill-tag logos, 1 ILANDGREEN phase, 2 `#case-meta` items, 3 ILANDGREEN figures, ≥18
`.fm-sec`, 4 `#fm-meta` items, FeetMine list lengths 5/5/3/3/3, 4 comparison rows, 6 header cells,
3 flow stages, 5 screens, 3 photos.

## The glide check fails headless, always

`--virtual-time-budget` produces no real animation frames. 21 PASS / 1 FAIL on
"clicking a nav link glides to the section" is the expected headless result, not a regression.
Verify the glide in a real browser.

## `tools/serve.ps1` is for the owner's Windows machine

It was written because `python` and `python3` there are Microsoft Store stubs that print nothing
and exit with code 49. This machine is macOS with a working `python3`, so
`python3 -m http.server 8123` is the local equivalent. Keep the script — it is the owner's only
way to run the checks.

## FeetMine's final image exports do not exist yet

`img/feetmine-hero.png`, `feetmine-screen-*.png`, `feetmine-yodex-*.jpg` and the rest are still
pending. Until each arrives, the `<img>` points at a deck slide and an `.fm-shot--*` class in
`feetmine.css` crops it down to the one screen or photo that belongs there. Thirteen crops exist:
`after`, `ar`, `before`, `growth`, `home`, `idcard`, `mascots`, `record`, `result`, `shoe`,
`yodex1`, `yodex2`, `yodex3`.

Every one carries a `TODO`. When an export arrives: point the `<img>` at it and drop the
`.fm-shot--*` class. The lightbox copies the thumbnail's crop class onto its frame, so a
half-finished change shows a cropped full-size image — check both.

Open `TODO` counts: `xizhou.html` 13, `feetmine.html` 11, `content.js` 9, `feetmine.js` 2,
`xizhou.css` 1.

## Unreferenced images are tracked in git

23 tracked files are referenced by no HTML, JS or CSS: 22 under `img/`, plus
`feetmineinterface.jpg` at the repo root.

- the pre-SVG chart PNGs, `chart1.png` to `chart3.png`
- deck slides `feetmine-05` to `feetmine-12`, plus `17` and `18`
- three app screens, `feetminehomepage.png`, `feetmineidcard.png`, `feetmineresults.png`
- `Competitive Analysis.png`
- five new SVGs, `bigger.svg`, `corrective.svg`, `look.svg`, `sandel.svg`, `soft.svg`

The last five arrived with the `change feetmine's charts` commit and nothing points at them yet.
They look like replacements for the six `foot-*.png` condition illustrations, which the same batch
of work deleted. That wiring is still to do.

Some of the rest are probably wanted for sections not yet built, so nothing else has been deleted.
Do not assume a file in `img/` is live — grep for it. Do not delete any of them without asking;
the owner prunes this list themselves.

## `xizhou.css` contrast figures are hand-arithmetic

Its own `TODO` says so: `--fm-primary-dark: #6B4413` was checked against the yellow accent
(5.9:1), the wash (7.7:1) and the light background (7.4:1) by hand, not through a checker. Worth
confirming with a real tool before treating it as final.

## One stale comment

The `xizhou` entry in `content.projects` still opens with "No case-study page yet — see the TODO
on the Case study link below." `xizhou.html` now exists and that link points at it.
