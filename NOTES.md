# Notes

Running list of ideas and small decisions for Bella's site. Not tracked anywhere else (no Brain/handoff system for this project, it's just for fun).

## Status
- Live on Vercel, deploys automatically on push to `main`.
- Sections live: Drawings (20), YouTube channel button (Bella's Bistro), Pictures (1 photo), Blog (1 post: "Welcome to Bella's World!").
- Not yet filled in: Stories section (empty, placeholder removed 2026-07-18), Videos section (empty).
- Favicon: rainbow gradient "B" (`src/app/icon.svg`), added 2026-07-11.
- Content (photos, blog posts, stories, drawings) all lives in `src/app/content.ts`, not a separate posts folder.

## Ideas / to-do
- Add more photos to `public/photos/` + `content.ts` — pet photos are ready pending Bella's review ("Rigatonian CD" process), plus ideas for her + a pet, something she made, a favorite place.
- Write a real story for the Stories section (currently empty).
- Add videos once there are more on the YouTube channel.
- Maybe Bella's next blog post whenever she's ready.

## Decisions
- Rainbow palette used site-wide (Rainbow.tsx stripes, now also the favicon): `#ff5c5c #ff9f43 #ffd93d #6bcB77 #4d96ff #9b5de5`.
- "NEW" badges on nav buttons (added 2026-08-08): driven by `sectionUpdates` in `content.ts` (a date per section) plus the newest blog post's date. Any section updated within the last 14 days shows a badge. When adding content to a section, bump its date in `sectionUpdates` to today so the badge shows.
- "Ask Bella" Q&A (added 2026-08-08): new `/ask` page, visitors submit a question via `questions` table in Supabase, Bella answers from the admin page. Only answered questions show publicly. Needs the `questions` table created in Supabase (see `supabase/schema.sql`) before it works live — run the new block in the SQL Editor.
- Coloring page picker (added 2026-08-08): each drawing card on `/drawings` has a "🖍️ Coloring Page" button. Runs the drawing photo through a client-side canvas edge-detect filter (`coloringPage.ts`, used by `ColoringPageModal.tsx`) to make a printable black-and-white line-art version, with a Print button that opens a print-ready popup. No new assets needed, works off the existing drawing photos. Edge detection runs per color channel (not flattened luminance) so pale colors like yellow/tan against white still produce clean outlines.
- Coloring book batch print (added 2026-08-08): "📖 Print All as Coloring Book" button on `/drawings` (`ColoringBookButton.tsx`) converts every currently filtered/searched drawing to a coloring page and opens one print window with a page break per drawing, so it prints as a physical booklet in one go.
