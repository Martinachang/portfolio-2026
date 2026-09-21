# Accessibility patterns used throughout

These are not aspirations; `test.html` enforces several of them and the styling depends on the
rest. Follow the existing pattern rather than inventing a new one.

## Images

Every image is either described or explicitly decorative — never a bare, undescribed `<img>`.

- Real content images take their alt text from `content.js`, through `data-alt` for a static
  image or through `t(…)` in the template for a rendered one.
- A decorative image gets `alt=""` **and** an alternative for its information elsewhere. The only
  decorative images on the site are the mascot sticker, the profile photo where the name is
  already in text, and the four exported chart SVGs.

## Charts: `.fm-sr` data tables

FeetMine has four Figma-exported charts whose labels are outlined paths, not text, so a screen
reader sees nothing in them. Each one is a `<figure class="fm-chart">` holding:

1. `<img class="fm-chart-img" alt="" loading="lazy">` — decorative
2. `<table class="fm-sr">` with a `<caption>` and the same data as rows — visually hidden

Two renderers build that pair, and their tables have different shapes:

- `renderChartSvg()` — the three background charts (`chart1.svg` to `chart3.svg`). Its table is
  label-and-percentage rows, built by `dataTable()`.
- `renderStages()` — the life-stage bar (`chart4.svg`). Its table is one column of stage names,
  with a note on the row marked `active`. There are no percentages, because that chart is an
  ordered sequence rather than a measurement.

`test.html` checks that every `.fm-chart` contains a `table.fm-sr`. Any new chart must do the
same, whether it is an export or a hand-drawn SVG. Match whichever table shape fits the data
instead of forcing percentages onto a sequence.

The same `.fm-sr` pattern carries meaning that is otherwise only visual anywhere else on the
page: in the comparison table every cell pairs its dot (`aria-hidden="true"`) with a hidden
phrase from `fm.compare.covered` / `notCovered`, so "a dot means yes" is never colour-or-shape
only. `test.html` checks every cell for it.

## Inline SVG diagrams

The service-flow SVG carries `role="img"` and an `aria-label` built from its title and caption,
and the same steps are repeated as a `<ul class="fm-loop-stack">` that the CSS shows on phones
instead of the diagram.

## Structure and keyboard

- Every `<section>` is labelled by its own heading with `aria-labelledby`.
- The skip link (`.skip`) is the one in-page link exempt from the JS glide, so it jumps
  instantly; it is positioned off-screen and comes back on `:focus`.
- The language switch is a `role="group"` of two buttons with `aria-pressed` kept in sync.
- `:focus-visible { outline: 3px solid var(--accent); outline-offset: 3px; }` is set globally —
  do not remove an outline without replacing it.
- The FeetMine lightbox is a real `<dialog>` opened with `showModal()`, so Esc closes it for
  free, and focus returns to the button that opened it.

## Motion

Reveal-on-scroll and the chart animations are keyed off an `.is-in` class. When
`prefers-reduced-motion: reduce` matches, `feetmine.js` adds `.is-in` to everything at once
instead of observing, and each stylesheet has a `@media (prefers-reduced-motion: reduce)` block
at the end. Any new animation needs both halves.

## Contrast

The editorial token blocks carry their measured ratios in comments (`--fm-muted: #7A7A7A;`
`/* 4.5:1 on the light background */`). Keep that habit when adding a tone. One caveat: the
`xizhou.css` contrast figures were worked out by hand, not run through a checker — its own
`TODO` says so.
