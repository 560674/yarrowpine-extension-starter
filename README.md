# Browser Extension Starter (MV3 + TypeScript) — Free

*for Chromium™-based browsers*

A minimal Manifest V3 extension in TypeScript, built with esbuild: background service worker, popup and content script.

## Quick start
```bash
npm install
npm run build        # outputs dist/
npm run watch        # rebuild on change
npm run typecheck
```
Open `chrome://extensions` (or your Chromium-based browser's extensions page), turn on **Developer mode**,
click **Load unpacked** and pick `dist/`.

## Layout
```
src/manifest.json     MV3 manifest
src/background.ts     service worker (click counter in storage)
src/content.ts        content script (highlights headings on request)
src/popup/            popup UI
scripts/build.mjs     esbuild build
```

## Content script scope
By default the content script only runs on `https://example.com/*` so the extension asks for as little access as possible.
To use it on your own sites, edit `content_scripts[0].matches` in `src/manifest.json`, e.g.
`["https://yourbrand.com/*", "https://*.yourbrand.com/*"]`. Avoid `<all_urls>` or `https://*/*` unless your
extension really needs every site: broad host access triggers a stronger install warning and stricter store review.

## Pro edition
Adds an options page, typed storage and messaging wrappers, a context menu, i18n, hot reload, vitest tests,
ESLint, a store-ready zip script, a store submission checklist and Firefox notes. Available on our Gumroad store.

---
Independent project. Not affiliated with, endorsed by, or sponsored by Google LLC or Mozilla. Chrome™ is a trademark of Google LLC. Chromium is a trademark of Google LLC. Firefox is a trademark of the Mozilla Foundation in the US and other countries. No third-party logos are included.
Built with AI assistance and reviewed by hand. MIT © 2026 Yarrowpine Studio.
