// ============================================================
// BELLA'S WEBSITE CONTENT
// Edit this file to add Bella's pictures, stories, drawings,
// and YouTube videos. Save and the site updates automatically
// (or redeploy on Vercel if it's already live).
// ============================================================

export const siteName = "Bella's World";
export const tagline = "Welcome to my corner of the internet!";

// -----------------------------
// PICTURES
// Put image files in: public/photos/
// Then reference them here as "/photos/filename.jpg"
// -----------------------------
export const photos: { src: string; caption: string }[] = [
  // Example (uncomment and edit once a real photo is added):
  // { src: "/photos/my-drawing.jpg", caption: "A dragon I drew!" },
];

// -----------------------------
// DRAWINGS
// Put drawing images in: public/drawings/
// -----------------------------
export const drawings: { src: string; caption: string }[] = [
  // { src: "/drawings/castle.jpg", caption: "My castle in the clouds" },
];

// -----------------------------
// STORIES
// Just write the title and the story text right here.
// -----------------------------
export const stories: { title: string; text: string }[] = [
  {
    title: "The Rainbow Cloud Kingdom",
    text: "Once upon a time, there was a kingdom in the clouds where every rainbow led to a new adventure. This is just a starter story, replace it with one of your own!",
  },
];

// -----------------------------
// YOUTUBE VIDEOS
// Paste the video ID from the URL.
// Example: https://www.youtube.com/watch?v=dQw4w9WgXcQ -> ID is "dQw4w9WgXcQ"
// -----------------------------
export const videos: { id: string; title: string }[] = [
  // { id: "dQw4w9WgXcQ", title: "My latest video!" },
];
