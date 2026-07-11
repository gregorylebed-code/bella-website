# Bella's Website

A fun, clouds-and-rainbows website for Bella to share pictures, drawings, stories, and YouTube videos.

## How to add content

Everything Bella wants on the site is edited in one file: `src/app/content.ts`

- **Pictures**: drop image files into `public/photos/`, then add an entry to the `photos` list in `content.ts`.
- **Drawings**: drop image files into `public/drawings/`, then add an entry to the `drawings` list.
- **Stories**: just add a title and the story text directly in the `stories` list, no image needed.
- **Videos**: find the YouTube video ID from the URL (the part after `v=`) and add it to the `videos` list.

After editing, save the file. If running locally you'll see it update immediately. If it's live on Vercel, commit and push to redeploy.

## Run it locally

```
npm install
npm run dev
```

Then open http://localhost:3000

## Deploy

Push this folder to a GitHub repo and import it into a new Vercel project (no custom domain needed, the free `*.vercel.app` URL is fine).
