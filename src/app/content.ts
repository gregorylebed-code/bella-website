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
// BLOG
// Write about anything: your day, something you're excited about,
// whatever you want. Newest posts should go at the TOP of the list.
// Date format: "Month Day, Year" (e.g. "July 18, 2026")
// -----------------------------
export const blogPosts: { title: string; date: string; text: string }[] = [
  {
    title: "Welcome to Bella's World!",
    date: "July 18, 2026",
    text: `Hi, welcome to Bella's world! I'm 16 years of age! It's so nice to meet you all! Thank you for stopping by on my website. This is where I'll showcase my art, recipes, my cooking channel!

A couple fun facts about me: I am on the autism spectrum, I have two dogs and a rabbit. Some ways I describe myself: hard working, empathetic, artsy, funny, always hungry. I love spending time with my family, friends, and pets! In my spare time I cook, play video games, watch YouTube. I also speak German and plan to speak other languages too!

I hope to become a chef or a psychologist one day for kids and adolescents on the autism spectrum. I'm here to spread love and joy with passion and rainbows and kindness.

Just know, please don't ever ask me to decide what to eat, or whatever you can't decide, because spoiler alert: I can never decide, so if I decide for you, it won't be decided lol. But that's the woman in me hahahaha.

Some of my skills include: cooking, writing stories, food blogging, some might call me the dog whisperer. I have a strong sense for details, and a photographic memory. Could I tell you 9x7? I'm afraid not. But I can tell you every Pokemon by silhouettes, therefore I'm a woman with useless info. But aren't we all (no offense).

I also have a massive fun sock collection! So many cool designs, foods, animals. I can do voice impressions of Marge, Stewie, Homer, Stitch. And make useless bird call noises.`,
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
