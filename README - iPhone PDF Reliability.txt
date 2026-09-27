PUZZLE STUDIO 10.1 — IPHONE PDF RELIABILITY

WHY THIS UPDATE
The screenshot showed PDF export failing on page 1 of a 98-page book.
That indicates WebKit/Safari's first-page rasterization was failing, not simply
memory accumulating after dozens of pages.

CHANGES
- Much smaller per-page CSS payload during PDF rendering.
- Every page automatically retries at lower resolution if Safari rejects it.
- JPEG encoding has two fallback methods.
- Very large books use ultra-low-memory mode automatically.
- More frequent pauses give iOS Safari time to reclaim temporary memory.
- PDF errors now show the actual renderer error message.

PAGE MODES
- Up to 25 pages: high
- 26–50 pages: balanced
- 51–80 pages: low-memory
- 81+ pages: ultra-low-memory

PRESERVED
- Smart book assembly
- Smart solution density
- Mixed-book planner
- KDP preflight
- How-to examples
- Build progress
- Book overview and presets

GITHUB
Replace index.html and sw.js with this version and let GitHub Pages redeploy.
