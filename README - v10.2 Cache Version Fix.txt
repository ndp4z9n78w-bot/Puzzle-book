PUZZLE STUDIO v10.2 — CACHE + VERSION FIX

WHY
The screenshot still showed "Offline Puzzle Studio 10 — Smarter Book Assembly"
and the old PDF error message. That means iPhone Safari was still running the old
cached v10.0 build rather than v10.1.

NEW
- Exact version is now shown prominently at the top:
  Offline Puzzle Studio v10.2
  Exact build: v10.2 • Cache + iPhone PDF Reliability
- A visible "Running v10.2" line is shown below the header.
- Service worker registration forces update checks.
- Page navigation uses network-first caching while online.
- Old caches are deleted automatically when v10.2 activates.
- v10.1 PDF reliability fixes are preserved.

GITHUB UPDATE
Replace at minimum:
- index.html
- sw.js

Then:
1. Wait for GitHub Pages to redeploy.
2. Open the site in Safari while online.
3. Confirm the header literally says "v10.2".
4. Only then test Create PDF again.

If the header still says 10 or 10.1, the old site is still cached.
