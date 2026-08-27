"use client";

import { useEffect, useMemo, useState } from "react";
import { unlockBadge } from "../badges";

const FREE_SPACE = "FREE SPACE";

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function checkBingo(marked: boolean[]): boolean {
  const lines = [
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24],
    [0, 5, 10, 15, 20],
    [1, 6, 11, 16, 21],
    [2, 7, 12, 17, 22],
    [3, 8, 13, 18, 23],
    [4, 9, 14, 19, 24],
    [0, 6, 12, 18, 24],
    [4, 8, 12, 16, 20],
  ];
  return lines.some((line) => line.every((i) => marked[i]));
}

export default function BingoCard({ squares }: { squares: string[] }) {
  const card = useMemo(() => {
    const picked = shuffle(squares).slice(0, 24);
    picked.splice(12, 0, FREE_SPACE);
    return picked;
  }, [squares]);

  const [marked, setMarked] = useState<boolean[]>(() =>
    card.map((sq) => sq === FREE_SPACE)
  );
  const [won, setWon] = useState(false);

  function toggle(i: number) {
    if (card[i] === FREE_SPACE) return;
    setMarked((prev) => {
      const next = [...prev];
      next[i] = !next[i];
      return next;
    });
  }

  useEffect(() => {
    if (checkBingo(marked)) {
      setWon(true);
      unlockBadge("bella-bingo");
    }
  }, [marked]);

  function reset() {
    const picked = shuffle(squares).slice(0, 24);
    picked.splice(12, 0, FREE_SPACE);
    setMarked(picked.map((sq) => sq === FREE_SPACE));
    setWon(false);
  }

  return (
    <div className="flex flex-col items-center gap-6">
      {won && (
        <div className="card px-6 py-3 bg-pink-100 text-center">
          <p className="heading-font text-xl font-bold text-pink-600">
            🎉 Bingo! You got a Bella day!
          </p>
        </div>
      )}
      <div className="grid grid-cols-5 gap-2 max-w-xl w-full">
        {card.map((sq, i) => (
          <button
            key={i}
            onClick={() => toggle(i)}
            className={`heading-font aspect-square rounded-lg p-1.5 text-[10px] sm:text-xs font-bold text-center flex items-center justify-center shadow-md transition-transform hover:scale-105 ${
              marked[i]
                ? "bg-purple-500 text-white"
                : "bg-white/90 text-black"
            }`}
          >
            {sq === FREE_SPACE ? "⭐ FREE" : sq}
          </button>
        ))}
      </div>
      <button
        onClick={reset}
        className="heading-font px-8 py-3 rounded-full bg-purple-500 hover:bg-purple-600 text-white text-lg font-bold shadow-md hover:scale-105 transition-transform"
      >
        🔄 New Card
      </button>
    </div>
  );
}
