# Gotchas and commands

## Running things

Every page opens by double-click. **`tools/test.html` does not.** A `file://` page may not read its
sibling files, so it needs `http://`.

```
python3 -m http.server 8123 --bind 127.0.0.1
# then open http://127.0.0.1:8123/tools/test.html
```

On the owner's Windows machine, `python` and `python3` are Microsoft Store stubs that print
nothing and exit with code 49. Use `powershell -ExecutionPolicy Bypass -File tools/serve.ps1`
instead. It serves the same address. Any other static server on port 8123 works too.

**Run the checks.** Every line must say PASS.

```
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless=new --disable-gpu --no-sandbox --virtual-time-budget=30000 \
  --dump-dom http://127.0.0.1:8123/tools/test.html 2>/dev/null \
  | sed -n '/<pre id="results">/,/<\/pre>/p' | sed 's/<[^>]*>//g'
```

**One check always fails headless**, and only headless: the glide. `--virtual-time-budget`
produces no animation frames. **33 checks, 1 failed** is the expected result. Check the glide by
clicking a nav link in a real browser.

Read the count before the failures. The four pages load in a chain, each starting the next, so a
page that 404s stops the chain and the later checks never run — the run then reports a *smaller*
total with no failures and looks green. Anything other than 33 is a failure.

**Read a page console.** Every page must log nothing.

```
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless=new --disable-gpu --no-sandbox --virtual-time-budget=8000 \
  --enable-logging=stderr --v=1 --dump-dom http://127.0.0.1:8123/work/xizhou/index.html \
  2>&1 >/dev/null | grep "INFO:CONSOLE"
```

**Prove a CSS change is safe.** This is the only thing that catches a silent style regression, and
it has caught two real ones.

Write a scratch page that loads a target page in an iframe, walks every element, and records
`getComputedStyle` for about 40 properties. Dump it before the change and after, then diff. Take
both dumps in the same session: a transient scrollbar shifts every width by 15px and will look
like a regression. Delete the scratch page afterwards, never commit it.

**Screenshot a phone layout.** Headless Chrome enforces a 500px minimum window width, so
`--window-size=375,…` will not work. Load the page inside a 375px `<iframe>` on a scratch page and
screenshot that, giving the iframe the page's full `scrollHeight`.

**Deploy.** Push to `main`.

## Things that look like bugs

**The top bar is not in the HTML.** `renderChrome()` in `site.js` draws it. Searching a page file
for a nav link finds nothing. The skip link is the exception and stays in the HTML.

**A language switch redraws everything.** `fill()` and `renderChrome()` replace `innerHTML`, so
anything added to the DOM by hand is destroyed. Whatever must survive belongs in `site-text.js`, or
must be re-applied at the end of `renderPage()`. That is why `feetmine.js` calls `reveal()` there.

**Six FeetMine pictures stay English in Chinese.** `work/feetmine/img/chart1.svg` to `chart4.svg`,
plus `competitive-analysis.svg` and `foottype.svg`, are Figma exports whose labels are outlined
paths, not text. Nothing can translate a shape. Each carries its data in a hidden table beside it,
so the meaning survives; only the words in the picture are stuck.

**A missing translation reaches the page as the word "undefined".** `t()` returns `value[lang]`
and logs a warning. `tools/test.html` walks `site-text.js` and fails on a missing half.

**The same image is written two ways, and both are right.** A path in a page file is relative to
that page (`img/banner.jpg`); a path in `site-text.js` starts from the repo root
(`work/feetmine/img/banner.jpg`), because `page-home.js` reads it at depth 0 and
`page-project.js` reads it at depth 2 with `root` prefixed. Neither spelling works in the other
file.

**`js/page-home.js` redeclares `timelineItem`.** `js/site.js:41` defines one shape
(`{title, text}`) and `js/page-home.js:4` defines another (`{when, what, detail}`). The home page
gets the second only because its script loads last. Any new page that loads `page-home.js` before
its own script would inherit the wrong template. Left alone deliberately: renaming it touches both
files and three call sites for no visible gain.

**The language is remembered between sessions.** `localStorage.lang`. A page can load in Chinese
for no visible reason. Clear it before deciding something is broken.

**`site.js` reads `document.body` when parsed.** `content.project`, `root` and `inPagePrefix` are
assigned at load, not inside a function. That is why script tags sit at the end of `<body>`.
Moving them to `<head>` breaks every page.

**The desk objects only drag above 720px.** `js/page-home.js` stops unless
`getComputedStyle(object).position === "absolute"`, which `css/style.css` sets only on wide screens.
Below that they are a grid and respond to clicks alone. Drag positions are not saved, so a reload
resets the desk. The click that ends a drag is swallowed on purpose.

**The hash appears 1200ms after the click.** The glide calls `history.replaceState` only when the
animation ends. `css/style.css` also sets `scroll-behavior: smooth`, which covers jumps the
JavaScript does not intercept. Both are live at once.

**Scoping in `css/editorial.css` raises specificity.** A rule in a page part is `.cs-feetmine .fm-x`,
not `.fm-x`. Adding a page rule that duplicates a shared selector will now win where the bare
version used to lose. The computed-style diff above is how you catch that.

## Unfinished

**Most of FeetMine's final image exports still don't exist.** Each remaining `.fm-shot--*` `<img>`
points at a deck slide, and the class crops it to the one screen or photo that belongs there.
Seven crops are still TODO. Six are done: Feature #1's AR-screen and home-screen crops, Feature
#2's measurement-result and mascot-set crops, and Feature #3's shoe-recommendation and ID-card
crops, became `img/feetmineprototype.svg`, `img/feature1-1.svg`, `img/feature2-1.svg`,
`img/feature2-2.svg`, `img/feature3-1.svg` and `img/feature3-2.svg` — plain `<img>`s wrapped in
`.fm-full-shot` instead of `.fm-shot`, since a real export shows its own image whole, with no
`--cx`/`--cy` crop to apply. When the next export arrives, point the `<img>` at it and make the
same swap: drop `.fm-shot`/`.fm-shot--*`, add `.fm-full-shot`. The lightbox copies whichever class
is on the thumbnail onto its frame, so check both the thumbnail and the lightbox.

**Walk Xizhou has four `.fm-shot-placeholder` slots left**: Feature #3's character-sheet and
applied-materials panels, and Feature #4's funnel-overview and LINE-chatbot panels. Everything
else on the page now has a real export — see the note under "Copy that is not final" below for
what changed and where.

**Open `TODO` counts:** `work/feetmine/index.html` 5, `work/xizhou/index.html` 11,
`site-text.js` 9, `work/feetmine/feetmine.js` 2, `css/editorial.css` 1.

**The twenty-three unreferenced images were deleted.** They were the chart PNG files the SVG
exports replaced, deck slides `feetmine-05` to `12` plus `17` and `18`, three app screens,
`Competitive Analysis.png`, `feetmineinterface.jpg`, and five SVG files (`bigger`, `corrective`,
`look`, `sandel`, `soft`). They live in history and any one can be recovered:

```
git show 6559df9:img/_unused/feetmine-05.jpg > feetmine-05.jpg
```

Every image still in the tree is referenced by something, and `tools/test.html` now fails if one
stops resolving.

**The contrast figures in `css/editorial.css` are hand arithmetic.** Its `TODO` says so. Confirm with
a real tool before treating them as final.

**Xizhou's Feature #1 and #2 panels, Feature #4's funnel diagram, and the closing three photos all
have real exports now.** `design1-1.svg`/`design1-2.svg` (Feature #1) and `design2-1.jpg`/
`design2-2.jpg` (Feature #2) replaced their `.fm-shot-placeholder` boxes, wrapped in `.fm-full-shot`
— same swap as FeetMine's (`.fm-shot`/`.fm-shot--*` → `.fm-full-shot`), but Xizhou needs its own
`.cs-xizhou .fm-full-shot` rules in `css/editorial.css` since FeetMine's stay scoped to
`.cs-feetmine`. `design2-1.jpg`/`design2-2.jpg` had been committed under `work/feetmine/img/` by
mistake (unreferenced there); moved to `work/xizhou/img/` to match the "a project's images live
with its page" rule. `design-4.svg` (Figma export, no real `<text>` nodes) replaced Feature #4's
dark funnel card and visible step list entirely, capped at 720px and centred (`#f4-funnel-shot`);
the six steps' real bilingual text now lives in the hidden `<ol class="fm-sr" id="fm-funnel">`
beside it, same "picture whose data must survive translation and screen readers" pattern as
FeetMine's charts. `result-1.jpg`–`result-3.jpg` fill the closing photo row via `object-fit: cover`.
Feature #3 and Feature #4's own panelA/panelB are still placeholders — see above.

## Copy that is not final

The **Chinese was drafted from the English deck and the owner has never reviewed it.** Treat it as
a draft everywhere.

FeetMine's five process phases — Research, Define, Design, Test and iterate, Launch — were
inferred from the deck, which never states them. The owner still has to confirm them. Its
Reflection section is a placeholder. Its numbers are the deck's own. The slides
they came from were deleted — recover `feetmine-05.jpg` to `feetmine-12.jpg` with the `git show`
command above, and see `work/feetmine/img/feetmine-13.jpg` onward — before changing one.

The deck reversed its two "Worked" date ranges. They were corrected here to start-to-end order.
