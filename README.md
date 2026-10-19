# TheosWorld App Store

A fully static app store. No build step, no framework, no backend. Open `index.html` in a browser or drop the folder on any static host (GitHub Pages, Netlify, Cloudflare Pages, S3, a plain web server).

## Layout

```
index.html                 Directory: search, category filters, sort
assets/
  style.css                Shared styles (directory + app pages)
  apps.js                  App registry — the list the directory reads
  app.js                   Search / filter / sort logic
apps/
  theosworld-radio/
    index.html             App page: description + Download button
    TheosWorld-Radio-Setup.exe
  theosworld-notes/
  pixel-forge/
  clip-vault/
  dungeon-dash/
  code-snip/
  lumos-ai-coding-assistant/
  sky-watch/
  beat-lab/
```

Each app lives in its own folder under `apps/`, so `apps/theosworld-radio/index.html` is served at `/apps/theosworld-radio/`.

## Adding an app

1. Copy an existing app folder (for example `apps/code-snip/`) to `apps/<slug>/` (lowercase, hyphens).
2. Open the new `index.html` and update the name, description, version, size, tags and download filename.
3. Drop the installer `.exe` into the same folder. The Download button is a plain link with the `download` attribute, so the filename in the `href` must match the file.
4. Add an entry to `assets/apps.js`. The `slug` must match the folder name. That is what makes it appear in the directory.

## Filters and search

- **Search** matches name, tagline, description, category and tags. Multiple words must all match. Press `/` to focus, `Esc` to clear.
- **Category chips** are generated from the categories in `apps.js`, with counts. Add a new category by using it on any app.
- **Sort**: featured first, name, recently updated, smallest download.
- Filter state is written to the URL (`?q=radio&cat=Media`) so links are shareable. The header links use this, for example `index.html?cat=Games`.

## Customising

- Colours, radius and fonts are CSS variables at the top of `assets/style.css`.
- Icon gradients are the `ic-*` classes at the bottom of that file. Swap an emoji for an `<img>` inside `.app-icon` if you have real icons.

## Hosting notes

- Links in the directory point to `apps/<slug>/` with a trailing slash. Most hosts serve `index.html` for that and redirect `/apps/<slug>` to it automatically.
- `.nojekyll` is included so GitHub Pages serves the files as-is, without Jekyll processing.
- Some browsers warn when downloading `.exe` files from a site without HTTPS. Use an HTTPS host.
