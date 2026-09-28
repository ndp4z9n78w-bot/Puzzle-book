PUZZLE STUDIO v12.0 — MIXED BOOK & GENERATOR OVERHAUL

MIXED BOOK
- How-To page now appears at the beginning of each puzzle-type section.
- Maze has no How-To page.
- Added Set All Difficulty.
- Added Set All Puzzle Amount.
- Each mixed puzzle type now has its own Puzzles per Page setting.
- Each mixed puzzle type now has its own Solutions per Page setting.
- Safety limits automatically reduce solution density for large/detailed puzzle types to prevent overlap.

MAZE
- Replaced generator with a smaller, guaranteed-path randomized DFS maze generator.

SLITHERLINK
- Replaced generation with a guaranteed closed-loop construction.
- Clues are derived from the known loop and some clues are removed by difficulty.

IRREGULAR SUDOKU
- Added a fixed, validated irregular-region template.
- A fresh solved grid is generated against those irregular regions before clues are removed.
- This avoids the previous failed-generation fallback.

WORD SEARCH
- Every built-in Word Search now has a category.
- Categories include Animals, Birds, Nature, Space, Garden, Ocean, Weather, Food, and Adventure.
- Search-answer pages circle/enclose the whole word instead of underlining each letter.

NUMBER SEARCH
- Answer pages use the same whole-sequence enclosure.
- How-To explicitly explains that it is an exact visual digit search, not arithmetic.

CRYPTOGRAM
- Phrases are not reused until the available phrase bank has been exhausted.
- Starting hints remain included.

HIDATO
- Blank puzzle cells now display ? instead of 0.

MISSING NUMBER
- The number revealed in the solution is underlined in the same position that held the question mark.

HOW-TO
- Reworked toward diagrams, mini grids, and visual examples.
- No strategy sections.

SOLUTIONS
- Per-type density is supported in Mixed Books.
- Detailed puzzle types are clamped to safe page counts so solutions do not overlap.

OFFLINE
- Full offline app-shell caching is preserved.

GITHUB
Replace at minimum index.html and sw.js.
Confirm the exact header says v12.0.
