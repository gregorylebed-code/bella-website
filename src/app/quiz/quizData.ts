export type Vibe = "goofy" | "chill" | "spicy" | "cozy" | "hungry";

export const questions: {
  q: string;
  options: { label: string; vibe: Vibe }[];
}[] = [
  {
    q: "It's Saturday morning, what are you doing?",
    options: [
      { label: "Making a big breakfast", vibe: "hungry" },
      { label: "Watching cartoons in bed", vibe: "cozy" },
      { label: "Doing voice impressions for no reason", vibe: "goofy" },
      { label: "Chilling outside with music on", vibe: "chill" },
      { label: "Already planning something bold", vibe: "spicy" },
    ],
  },
  {
    q: "Pick a snack.",
    options: [
      { label: "Tacos, obviously", vibe: "spicy" },
      { label: "Milk and cookies", vibe: "cozy" },
      { label: "Pirate's Booty", vibe: "chill" },
      { label: "A giant cheeseburger", vibe: "hungry" },
      { label: "Whatever makes people laugh to say out loud", vibe: "goofy" },
    ],
  },
  {
    q: "How do you handle a busy, loud place?",
    options: [
      { label: "Navigate through it like a champ", vibe: "spicy" },
      { label: "Find a quiet corner and reset", vibe: "cozy" },
      { label: "Crack a joke to lighten the mood", vibe: "goofy" },
      { label: "Just go with the flow", vibe: "chill" },
      { label: "Get distracted thinking about food", vibe: "hungry" },
    ],
  },
  {
    q: "Pick a rainy day activity.",
    options: [
      { label: "Draw something silly", vibe: "goofy" },
      { label: "Nap under a blanket", vibe: "cozy" },
      { label: "Cook something new", vibe: "hungry" },
      { label: "People-watch by the window", vibe: "chill" },
      { label: "Turn it into an adventure anyway", vibe: "spicy" },
    ],
  },
  {
    q: "Your friends would describe you as...",
    options: [
      { label: "The funny one", vibe: "goofy" },
      { label: "The chill one", vibe: "chill" },
      { label: "The one who's always hungry", vibe: "hungry" },
      { label: "The one who keeps it real", vibe: "spicy" },
      { label: "The one who makes everything cozy", vibe: "cozy" },
    ],
  },
];

export const results: Record<
  Vibe,
  { caption: string; title: string; description: string }
> = {
  goofy: {
    caption: "Rapper Squirrel",
    title: "You're a Rapper Squirrel!",
    description:
      "Full of jokes, voice impressions, and random energy. You keep everyone laughing.",
  },
  chill: {
    caption: "Happy Cat at Dinner",
    title: "You're a Happy Cat at Dinner!",
    description:
      "Easygoing, warm, and content just being around good food and good people.",
  },
  spicy: {
    caption: "Grumpy Pickle",
    title: "You're a Grumpy Pickle!",
    description:
      "You've got a strong personality and you're not afraid to show it. Tangy and unforgettable.",
  },
  cozy: {
    caption: "Rainy Day Bear",
    title: "You're a Rainy Day Bear!",
    description:
      "Soft, comforting, and at your best wrapped in a blanket with your favorite people nearby.",
  },
  hungry: {
    caption: "Hamburger & Hot Dog Monster",
    title: "You're the Hamburger & Hot Dog Monster!",
    description:
      "Food is basically your love language. You never say no to a good meal.",
  },
};
