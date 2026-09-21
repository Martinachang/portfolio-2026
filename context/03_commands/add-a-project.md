# Recurring workflows

## Add a project

1. Add an entry to `content.projects` in `content.js` — **newest first**, since `projects[0]` is
   the project featured on the desk folder. Shape and pitfalls:
   `context/02_conventions/content-model.md`.
2. Add its images to `img/` (see the export recipe below).
3. Pick a page pattern — the choice is explained in `context/01_architecture/decisions.md`:
   - **standard case study:** copy `ilandgreen.html`, change `data-project` to the new `id`, and
     write the project's `phases` in `content.js`. Nothing else to write; `project.js` does the
     rest.
   - **bespoke editorial page:** copy `feetmine.html` + `feetmine.css` + `feetmine.js`, rename the
     body class to `.cs-<id>`, and rescope the stylesheet to it. The page script must define
     `renderPage()`.
4. Update the counts in `test.html` — it asserts the number of work cards (currently 4) and will
   fail on a new project until you do.
5. Run the checks (`context/03_commands/serve-and-test.md`).

A project with no case-study page at all is fine: give it a unique `id`, no `page`, and links that
point outward (`avatar-perception` is the example).

## Add a tool logo

Drop the SVG in `img/` and add one line to `content.logos` mapping the tool's name to the path.
`home.js` shows a logo for any tool that has an entry and plain text for any that does not — no
code change.

## Export deck slides

The source deck lives in `portfolio-example/` (19 slides at 7680×4320, git-ignored). Slides are
exported to `img/<project>-NN.jpg` at 2000px wide:

```
sips -Z 2000 -s format jpeg -s formatOptions 80 in.jpg --out out.jpg
```

ILANDGREEN shows its slides whole. **FeetMine never does** — every one of its images is either a
finished export or a deck slide cropped down by an `.fm-shot--*` class. See
`context/04_gotchas/known-issues.md` for the pending-export list and how to retire a crop.

Other assets in `img/`: tool logos (`*.svg`, from simple-icons and Wikimedia Commons),
`profile.jpg`, `mascot.png`, `banner.jpg`, `xizhoubanner.png`, and the app-screen and photo PNGs.
`menti/` holds the reference screenshots the FeetMine layout was built from — git-ignored,
reference only; none of that page's words, images or logo are copied.
