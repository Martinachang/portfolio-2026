# Serving, checking, deploying

There is nothing to build and nothing to install. The only command you ever need is a static
server, and only because of one file.

## Serve

The pages open by double-click. **`test.html` does not** — a `file://` page is not allowed to read
the other files it checks, so it needs `http://`.

On this machine (macOS, `python3` at `/opt/homebrew/bin/python3`):

```
python3 -m http.server 8123 --bind 127.0.0.1
# then open http://127.0.0.1:8123/test.html
```

On the owner's Windows machine, where `python` and `python3` are Microsoft Store stubs that print
nothing and exit with code 49:

```
powershell -ExecutionPolicy Bypass -File tools/serve.ps1
# same URL; Ctrl+C in that window to stop
```

`tools/serve.ps1` is a ~90-line static server that listens on 127.0.0.1 only, maps the handful of
extensions the site uses to content types, and refuses paths that escape the repo root. It exists
solely because of the Python situation above; any other static server on port 8123 does as well.
VS Code Live Preview also works (`.vscode/settings.json` points it at `/index.html`).

## Run the checks

Open `http://127.0.0.1:8123/test.html`. **Every line must say PASS.** The page loads
`index.html`, `ilandgreen.html` and `feetmine.html` in 1200px-wide iframes and drives them: the
language switch, the work list, the desk drag, the glide, the phases, then every FeetMine list,
chart, table, image and both languages. It looks clipped on a phone — that is the harness, not a
bug.

From the terminal, headless (verified working, 21 PASS / 1 expected FAIL):

```
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless=new --disable-gpu --no-sandbox --virtual-time-budget=15000 \
  --dump-dom http://127.0.0.1:8123/test.html 2>/dev/null \
  | sed -n '/<pre id="results">/,/<\/pre>/p'
```

`--virtual-time-budget` produces no real animation frames, so **"clicking a nav link glides to the
section" always fails headless and only there.** Everything else passing is the real signal. To
check the glide, click a nav link in a normal browser.

`test.html` covers `index.html`, `ilandgreen.html` and `feetmine.html`. It does **not** cover
`xizhou.html` — see `context/04_gotchas/known-issues.md`.

## Read a page's console

```
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless=new --disable-gpu --no-sandbox --virtual-time-budget=6000 \
  --enable-logging=stderr --v=1 --dump-dom http://127.0.0.1:8123/xizhou.html \
  2>&1 >/dev/null | grep "INFO:CONSOLE"
```

## Screenshot a phone layout

Headless Chrome enforces a 500px minimum window width, so `--window-size=375,…` will not give a
phone layout. Instead load the page inside a 375px-wide `<iframe>` on a scratch page and
screenshot that; give the iframe the page's full `scrollHeight` and offset it with a negative
`top` to reach a section further down.

## Deploy

Push to `main`. GitHub Pages serves the repo root, so the commit is the deploy — there is no
build, no CI and no artifact. Which means: **anything broken on `main` is live.** Run the checks
before pushing.
