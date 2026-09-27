PUZZLE STUDIO v10.3 — VECTOR PDF + BETTER HOW-TO

EXACT VERSION
The app header now visibly says v10.3.

PDF FIX
- Removed the Safari-blocked SVG foreignObject -> canvas rasterization pipeline.
- Create PDF now writes vector text, borders, grids, frames, and SVG puzzle geometry directly into a PDF.
- No page screenshots are created.
- No canvas image export is required.
- Designed to avoid Safari's "The operation is insecure" error.
- Large books use far less memory because pages are not stored as JPEG screenshots.

HOW-TO UPGRADE
- Each puzzle type gets its own How-To page in mixed books.
- Sudoku now has three worked examples:
  1. Row elimination
  2. Column elimination
  3. 3x3 box elimination
- Sudoku also includes a beginner starting strategy.
- Other puzzle types now include multiple examples where useful.
- Expected page-count/preflight math was updated for the extra instruction pages.

GITHUB
Replace at minimum:
- index.html
- sw.js
Wait for GitHub Pages to redeploy, then verify the header says v10.3 before testing.
