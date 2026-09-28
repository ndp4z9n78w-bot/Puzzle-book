PUZZLE STUDIO v11.0 — QA & LAYOUT OVERHAUL

PRINT / LAYOUT
- Removed the dedicated title page from generated books.
- Removed the book title from every puzzle page.
- Removed Easy / Medium / Hard from every printed puzzle and every solution.
- Solution pages no longer use negative-margin scaling that caused overlapping.
- Smart solution layout now uses at most 2 answers per page.
- Two-answer pages are separated vertically/opposite across the page.
- PDF and page numbering remain intact.
- Individual page removal remains available.

GENERATION LIMITS
- Normal and mixed-book quantities increased from 100 to 500 per selection.

MAZE
- Rebuilt with a more defensive guaranteed-path generator.
- Maze How-To page removed.

KAKURO
- Clue cells no longer use a diagonal line through the numbers.
- Clues are labeled A (Across) and D (Down) in readable positions.
- Known solutions render with corrected coordinates.
- Uses reliable structural verification instead of false uniqueness failures.

SLITHERLINK
- Reworked to always produce a known valid loop.
- Uses structural verification so generation does not fail QC.

WORD SEARCH
- Greatly expanded built-in word bank.
- Clearer visual How-To.

NUMBER SEARCH
- Rewritten How-To clarifies that this is exact digit-sequence searching, not arithmetic.

CRYPTOGRAM
- Every puzzle now supplies 2–4 starting letter hints based on difficulty.
- Solution shows the decoded quotation cleanly instead of a large key that could overlap.

NONOGRAM
- Solution pages now name the generated pattern (Diamond, Rings, Letter H, etc.).

KILLER SUDOKU
- Cage boundaries are now bold solid lines.
- Internal cage cell edges remain light/dotted.

DIAGONAL SUDOKU
- Removed decorative diagonal lines from puzzle and solution grids.
- Diagonal rule remains part of the puzzle.

MINI SUDOKU
- Solution overlap addressed by the new solution layout.

KENKEN
- How-To rewritten with clear row/column rules and operation examples.

HIDATO
- How-To rewritten.
- Added rotations/reflections/reversed paths for much more Easy-puzzle variety.

TAKUZU
- Fixed rendering so 0 values actually appear in puzzles and solutions.

MISSING NUMBER
- Sequences now display commas.
- Missing question mark is underlined.
- How-To includes clear addition, multiplication, and square-number examples.

HOW-TO
- No strategy/tips sections.
- Maze How-To removed.
- Instructions are concise rules + useful visual examples.

GITHUB
Replace at minimum:
- index.html
- sw.js

Then confirm the header says v11.0 before testing.
