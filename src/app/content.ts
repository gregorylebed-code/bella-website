// ============================================================
// BELLA'S WEBSITE CONTENT
// Edit this file to add Bella's pictures, stories, drawings,
// and YouTube videos. Save and the site updates automatically
// (or redeploy on Vercel if it's already live).
// ============================================================

export const siteName = "Bella's World";
export const tagline = "Welcome to my corner of the internet!";

// -----------------------------
// YOUTUBE CHANNEL
// Link to Bella's YouTube channel (shows as a button near the top).
// Leave as an empty string "" to hide the button.
// -----------------------------
export const youtubeChannelUrl = "https://www.youtube.com/@BellasBistro";
export const youtubeChannelName = "Bella's Bistro";

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
  { src: "/drawings/bella-drawing-01.png", caption: "Drawing 1" },
  { src: "/drawings/bella-drawing-02.png", caption: "Drawing 2" },
  { src: "/drawings/bella-drawing-03.png", caption: "Drawing 3" },
  { src: "/drawings/bella-drawing-04.png", caption: "Drawing 4" },
  { src: "/drawings/bella-drawing-05.png", caption: "Drawing 5" },
  { src: "/drawings/bella-drawing-06.png", caption: "Drawing 6" },
  { src: "/drawings/bella-drawing-07.png", caption: "Drawing 7" },
  { src: "/drawings/bella-drawing-08.png", caption: "Drawing 8" },
  { src: "/drawings/bella-drawing-09.png", caption: "Drawing 9" },
  { src: "/drawings/bella-drawing-10.png", caption: "Drawing 10" },
  { src: "/drawings/bella-drawing-11.png", caption: "Drawing 11" },
  { src: "/drawings/bella-drawing-12.png", caption: "Drawing 12" },
  { src: "/drawings/bella-drawing-13.png", caption: "Drawing 13" },
  { src: "/drawings/bella-drawing-14.png", caption: "Drawing 14" },
  { src: "/drawings/bella-drawing-15.png", caption: "Drawing 15" },
  { src: "/drawings/bella-drawing-16.png", caption: "Drawing 16" },
  { src: "/drawings/bella-drawing-17.png", caption: "Drawing 17" },
  { src: "/drawings/bella-drawing-18.png", caption: "Drawing 18" },
  { src: "/drawings/bella-drawing-19.png", caption: "Drawing 19" },
  { src: "/drawings/bella-drawing-20.png", caption: "Drawing 20" },
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
