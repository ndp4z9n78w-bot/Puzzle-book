PUZZLE STUDIO v10.5 — OFFLINE RELIABILITY

WHAT WAS WRONG
Recent versions used network-first loading for index.html so updates would appear quickly.
That could make offline startup unreliable, especially on iPhone Safari/PWA.

FIXED
- The complete app shell is cached during service-worker install:
  - /
  - index.html
  - manifest.webmanifest
  - icon-192.png
  - icon-512.png
  - 404.html
- Navigation is cache-first for reliability.
- When online, the service worker still refreshes index.html in the background.
- Old caches are deleted when v10.5 activates.
- The app now shows an "Offline ready" status when index.html is confirmed cached.

HOW TO TEST
1. Replace index.html and sw.js on GitHub.
2. Wait for GitHub Pages to redeploy.
3. Open the site in Safari while online.
4. Confirm the header says v10.5.
5. Wait until the page says:
   "Offline ready — this version is cached on this device."
6. Close Safari, turn on Airplane Mode, and reopen the site/Home Screen app.
