"use client";

import { useEffect, useRef, useState } from "react";

// 0 = open path, 1 = wall
const MAZE: number[][] = [
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [1, 1, 0, 1, 1, 1, 1, 0, 1, 0],
  [0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 1, 1, 1, 1, 0],
  [0, 1, 1, 1, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 1, 0, 1, 1, 0, 0, 0],
];

const START = { r: 0, c: 0 };
const END = { r: 9, c: 9 };

export default function Maze() {
  const [pos, setPos] = useState(START);
  const [won, setWon] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  function move(dr: number, dc: number) {
    setPos((prev) => {
      const r = prev.r + dr;
      const c = prev.c + dc;
      if (r < 0 || r >= MAZE.length || c < 0 || c >= MAZE[0].length) return prev;
      if (MAZE[r][c] === 1) return prev;
      const next = { r, c };
      if (r === END.r && c === END.c) setWon(true);
      return next;
    });
  }

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (won) return;
      if (e.key === "ArrowUp") move(-1, 0);
      else if (e.key === "ArrowDown") move(1, 0);
      else if (e.key === "ArrowLeft") move(0, -1);
      else if (e.key === "ArrowRight") move(0, 1);
      else return;
      e.preventDefault();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [won]);

  function reset() {
    setPos(START);
    setWon(false);
  }

  return (
    <div className="card p-6 mb-8">
      <h3 className="heading-font text-xl font-bold mb-2 text-center">
        🐕 Help Rigatoni Find His Food Bowl!
      </h3>
      <p className="text-center text-foreground/70 text-sm mb-4">
        Use the arrow keys or buttons below to move through the maze.
      </p>

      {won && (
        <p className="text-center heading-font font-bold text-green-600 mb-3">
          Rigatoni found his food bowl! 🎉🍖
        </p>
      )}

      <div
        ref={containerRef}
        tabIndex={0}
        className="mx-auto grid gap-0.5 mb-4 outline-none"
        style={{
          gridTemplateColumns: `repeat(${MAZE[0].length}, minmax(0, 1fr))`,
          maxWidth: 360,
        }}
      >
        {MAZE.map((row, r) =>
          row.map((cell, c) => {
            const isPlayer = pos.r === r && pos.c === c;
            const isEnd = r === END.r && c === END.c;
            const isStart = r === START.r && c === START.c;
            return (
              <div
                key={`${r}-${c}`}
                className={`aspect-square flex items-center justify-center text-sm rounded-sm ${
                  cell === 1 ? "bg-purple-800" : "bg-white/80"
                }`}
              >
                {isPlayer ? "🐶" : isEnd ? "🍖" : isStart ? "" : ""}
              </div>
            );
          })
        )}
      </div>

      <div className="flex flex-col items-center gap-2">
        <button
          onClick={() => move(-1, 0)}
          className="heading-font w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-md text-lg"
        >
          ⬆️
        </button>
        <div className="flex gap-2">
          <button
            onClick={() => move(0, -1)}
            className="heading-font w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-md text-lg"
          >
            ⬅️
          </button>
          <button
            onClick={() => move(1, 0)}
            className="heading-font w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-md text-lg"
          >
            ⬇️
          </button>
          <button
            onClick={() => move(0, 1)}
            className="heading-font w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-md text-lg"
          >
            ➡️
          </button>
        </div>
        {won && (
          <button
            onClick={reset}
            className="heading-font text-sm font-bold px-4 py-2 mt-2 rounded-full bg-pink-500 text-white shadow-md hover:scale-105 transition-transform"
          >
            🔄 Play Again
          </button>
        )}
      </div>
    </div>
  );
}
