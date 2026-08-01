"use client";

import { useEffect, useState } from "react";

const REACTIONS = ["❤️", "😂", "🌈"] as const;
const STORAGE_KEY = "bella-post-reactions";

type ReactionState = Record<string, string[]>;

export default function PostReactions({ postId }: { postId: string }) {
  const [mine, setMine] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const all: ReactionState = JSON.parse(stored);
      setMine(all[postId] ?? []);
    }
  }, [postId]);

  function toggle(reaction: string) {
    setMine((prev) => {
      const next = prev.includes(reaction)
        ? prev.filter((r) => r !== reaction)
        : [...prev, reaction];

      const stored = localStorage.getItem(STORAGE_KEY);
      const all: ReactionState = stored ? JSON.parse(stored) : {};
      all[postId] = next;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(all));

      return next;
    });
  }

  return (
    <div className="flex gap-2 mt-4 pt-4 border-t border-black/10">
      {REACTIONS.map((reaction) => {
        const active = mine.includes(reaction);
        return (
          <button
            key={reaction}
            onClick={() => toggle(reaction)}
            aria-label={`React with ${reaction}`}
            className={`px-3 py-1.5 rounded-full text-lg shadow-sm transition-transform hover:scale-110 ${
              active ? "bg-purple-200" : "bg-white/90"
            }`}
          >
            {reaction}
          </button>
        );
      })}
    </div>
  );
}
