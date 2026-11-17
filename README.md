# 3000 most common words

A simple, continuous English word checklist. Tick the words you know and keep going down the list — no flashcards or forced lessons.

- Double-click a word to open the selected dictionary: Ordbogen.com, Oxford Learner’s Dictionaries, Merriam-Webster, or Thesaurus.com. Enter on a focused word or the ↗ link also works. Ordbogen may require a school/subscription login.
- Use **+** to save your own sentence or meaning. Checks and notes are stored locally, including progress from the original checklist.
- The timer starts on your first check or with **Start timer**. ETA starts at 30 seconds per unchecked word, then uses your active time after three distinct checks in this visit. Pause during breaks; hidden tabs and device sleep are excluded. The finish estimate assumes continuous study, not guaranteed mastery.
- Optional camera timelapse: enable the preview, start capturing, then **Stop & create video**. Snapshots are replayed at 12 fps into a downloadable WebM (or MP4 where supported). No audio or uploads. Capture pauses in hidden tabs. Export needs the tab visible; download before closing. Limit: 1,800 frames (2½ hours at the default 5-second interval).

## Run locally

Serve this folder with `python3 -m http.server 5173` and open http://localhost:5173. There is no build step. Camera access needs localhost or HTTPS and browser permission. Chrome/Edge recommended for recording.

## Vocabulary source

Compared against all 11 pages of the supplied `The_Oxford_3000.pdf` (Oxford University Press). Every one of its 3,000 entries is included, in PDF order, preserving numbered and parenthetical meanings. The combined “a, an” entry becomes two rows, giving **3,001 checkboxes**. Existing generic labels migrate to the first matching sense; the additional sense starts unchecked.

PDF SHA-256: `ddaf936ef29f5e67c2df0ab3b547fd5bf9d9631f900c3cf55c195cb9c5ad0b40`.

The browser test checks the complete ordered headword list against a checksum derived independently from the PDF extraction.

## Tests

Run `npm ci`, `npx playwright install chromium`, then `npm test`. To use an existing Chrome installation instead, run `CHROME_PATH=/usr/bin/google-chrome npm test`. Tests use a synthetic camera, not your webcam.
