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
  { src: "/photos/bella-rainbow-shirt.jpg", caption: "Me in my rainbow shirt!" },
];

// -----------------------------
// DRAWINGS
// Put drawing images in: public/drawings/
// -----------------------------
export const drawings: { src: string; caption: string }[] = [
  { src: "/drawings/bella-drawing-01.png", caption: "Mickey Mouse" },
  { src: "/drawings/bella-drawing-02.png", caption: "My Rabbit" },
  { src: "/drawings/bella-drawing-03.png", caption: "Minion" },
  { src: "/drawings/bella-drawing-04.png", caption: "Stewie" },
  { src: "/drawings/bella-drawing-05.png", caption: "Delighted Taco" },
  { src: "/drawings/bella-drawing-06.png", caption: "Anxious Apple" },
  { src: "/drawings/bella-drawing-07.png", caption: "Monkey" },
  { src: "/drawings/bella-drawing-08.png", caption: "Gus" },
  { src: "/drawings/bella-drawing-09.png", caption: "Hamburger & Hot Dog Monster" },
  { src: "/drawings/bella-drawing-10.png", caption: "Police Dog" },
  { src: "/drawings/bella-drawing-11.png", caption: "Scooby & Shaggy" },
  { src: "/drawings/bella-drawing-12.png", caption: "Cartman" },
  { src: "/drawings/bella-drawing-13.png", caption: "BBQ Braces Dinosaur" },
  { src: "/drawings/bella-drawing-14.png", caption: "Rapper Squirrel" },
  { src: "/drawings/bella-drawing-15.png", caption: "Hula Hoop Bear" },
  { src: "/drawings/bella-drawing-16.png", caption: "Spaghetti & Meatballs Monsters" },
  { src: "/drawings/bella-drawing-17.png", caption: "Mr. Garrison & Mr. Hat" },
  { src: "/drawings/bella-drawing-18.png", caption: "Rainy Day Bear" },
  { src: "/drawings/bella-drawing-19.png", caption: "Uncle Gary" },
  { src: "/drawings/bella-drawing-20.png", caption: "Peter Griffin" },
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
