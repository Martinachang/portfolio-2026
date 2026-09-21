# Portfolio site — Chang Chu-Pei 張主佩

A portfolio site in English and Traditional Chinese: a home page with a draggable desk, and a
case-study page for each project.

There is no build step and nothing to install. **Double-click `index.html`** and it opens.

Live at <https://martinachang.github.io/portfolio-2026/>.

## Where things are

| You want to… | Open |
|---|---|
| Change any wording, in either language | `site-text.js` |
| Change a case study's layout or sections | `work/<project>/index.html` |
| Add or replace a project's image | `work/<project>/img/` |
| Change colours, spacing, fonts | `css/style.css`, or `css/editorial.css` for case studies |
| Swap the resume PDF | `resume/` |
| Publish your changes | commit and push to `main` — that *is* the deploy |

Everything about one project lives in that project's folder:

```
work/feetmine/
├── index.html     the page
├── feetmine.js    the lists, charts and diagrams it draws
└── img/           its images
```

The three folders you should rarely need: `js/` is the machinery that builds every page, `tools/`
is the test page, `demo/` is the ILANDGREEN prototype app (a separate thing from the ILANDGREEN
case study in `work/`).

## Three things that will surprise you

**1. The top bar and footer are not in the page files.** `js/site.js` draws them. If you search
`index.html` for a menu link you will find nothing — edit `site.headerNav` in `site-text.js`
instead. One change updates all four pages.

**2. The same image is written two different ways.** Inside a page file, paths are relative to
that page. Inside `site-text.js`, they start from the top of the site:

```
work/feetmine/index.html    src="img/banner.jpg"
site-text.js                src: "work/feetmine/img/banner.jpg"
```

Both point at the same file. `site-text.js` is read from two different places, which is why its
paths have to start from the top.

**3. Switching language redraws the whole page.** Anything you add to the page by hand in the
browser is wiped. All text must come from `site-text.js` — that is what makes both languages work.

## Adding a new project

1. Copy `work/ilandgreen/` to `work/<yourproject>/`.
2. In the new `index.html`, change three things: the `<title>`, the `<meta name="description">`,
   and `data-project="<yourproject>"` on the `<body>` tag.
3. Put its images in `work/<yourproject>/img/`.
4. Add an entry to `projects` in `site-text.js`, copying the shape of the ILANDGREEN one. Its `id`
   must match the `data-project` you set. Newest goes first — the desk folder on the home page
   shows whichever project is at the top.

The home page picks up the new card by itself. No CSS needed.

## Checking your work

Most of the time, opening the page and looking at it is enough.

There is also a test page that checks all four pages at once — every word filled in both languages,
every image actually loading, every list rendered. It needs a local server; the commands are in
[`docs/gotchas.md`](docs/gotchas.md), which also lists every known trap in more detail.

## The rest

- `CLAUDE.md` is written for coding assistants, not for you. It tells them the conventions to
  follow so they don't undo things on purpose.
