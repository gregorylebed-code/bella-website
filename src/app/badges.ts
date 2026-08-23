export type Badge = {
  id: string;
  name: string;
  emoji: string;
  description: string;
};

export const BADGES: Badge[] = [
  {
    id: "visitor",
    name: "Welcome to Bella's World!",
    emoji: "🌈",
    description: "Visited Bella's website. Thanks for stopping by!",
  },
  {
    id: "word-search",
    name: "Word Search Whiz",
    emoji: "🔍",
    description: "Found every word in a Bella's Word Search puzzle.",
  },
  {
    id: "maze",
    name: "Maze Master",
    emoji: "🐕",
    description: "Helped Rigatoni find his food bowl in the maze.",
  },
  {
    id: "match-the-pet",
    name: "Pet Matchmaker",
    emoji: "🧠",
    description: "Matched every pet with their quote in Match the Pet.",
  },
];

const STORAGE_KEY = "bella-unlocked-badges";

export function unlockBadge(id: string) {
  if (typeof window === "undefined") return;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const unlocked: string[] = raw ? JSON.parse(raw) : [];
    if (!unlocked.includes(id)) {
      unlocked.push(id);
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(unlocked));
    }
  } catch {
    // ignore storage errors (private browsing, etc.)
  }
}

export function getUnlockedBadges(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}
