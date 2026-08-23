"use client";

import { useMemo, useState } from "react";

const THEMES: { name: string; emoji: string; words: string[] }[] = [
  {
    name: "Pets",
    emoji: "🐾",
    words: ["RIGATONI", "SADIE", "LAVENDER", "ELLIE", "PENNY", "JANINE", "ZOOMIES", "PUPPY"],
  },
  {
    name: "Hobbies",
    emoji: "🎨",
    words: ["DRAWING", "COOKING", "GAMING", "SOCKS", "YOUTUBE", "PUZZLE", "STORIES", "BISTRO"],
  },
  {
    name: "Food",
    emoji: "🍕",
    words: ["PIZZA", "NUGGETS", "QUESO", "PICKLES", "MUSTARD", "GUACAMOLE", "TACOS", "MANOMANO"],
  },
  {
    name: "Family",
    emoji: "💛",
    words: ["MOM", "DAD", "AUNTJILL", "UNCLEGARY", "POPPOP", "GRANDMA", "KINDNESS", "RAINBOW"],
  },
  {
    name: "Bella Describer",
    emoji: "✨",
    words: ["BIRDCALL", "PETLOVER", "INJURYPRONE", "HUNGRY", "LITERAL", "ARTSY", "FUNNY", "LOYAL"],
  },
];

const GRID_SIZE = 12;
const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

type Direction = { dr: number; dc: number };

const DIRECTIONS: Direction[] = [
  { dr: 0, dc: 1 },
  { dr: 1, dc: 0 },
  { dr: 1, dc: 1 },
  { dr: -1, dc: 1 },
];

type PlacedWord = {
  word: string;
  cells: [number, number][];
};

function buildGrid(words: string[]): { grid: string[][]; placed: PlacedWord[] } {
  const grid: string[][] = Array.from({ length: GRID_SIZE }, () =>
    Array.from({ length: GRID_SIZE }, () => "")
  );
  const placed: PlacedWord[] = [];

  for (const word of words) {
    let attempts = 0;
    let ok = false;
    while (attempts < 200 && !ok) {
      attempts++;
      const dir = DIRECTIONS[Math.floor(Math.random() * DIRECTIONS.length)];
      const row = Math.floor(Math.random() * GRID_SIZE);
      const col = Math.floor(Math.random() * GRID_SIZE);
      const endRow = row + dir.dr * (word.length - 1);
      const endCol = col + dir.dc * (word.length - 1);
      if (endRow < 0 || endRow >= GRID_SIZE || endCol < 0 || endCol >= GRID_SIZE) continue;

      const cells: [number, number][] = [];
      let fits = true;
      for (let i = 0; i < word.length; i++) {
        const r = row + dir.dr * i;
        const c = col + dir.dc * i;
        const existing = grid[r][c];
        if (existing && existing !== word[i]) {
          fits = false;
          break;
        }
        cells.push([r, c]);
      }
      if (!fits) continue;

      for (let i = 0; i < word.length; i++) {
        const [r, c] = cells[i];
        grid[r][c] = word[i];
      }
      placed.push({ word, cells });
      ok = true;
    }
  }

  for (let r = 0; r < GRID_SIZE; r++) {
    for (let c = 0; c < GRID_SIZE; c++) {
      if (!grid[r][c]) {
        grid[r][c] = LETTERS[Math.floor(Math.random() * LETTERS.length)];
      }
    }
  }

  return { grid, placed };
}

function cellKey(r: number, c: number) {
  return `${r}-${c}`;
}

export default function WordSearch() {
  const [themeIndex, setThemeIndex] = useState(0);
  const theme = THEMES[themeIndex];
  const { grid, placed } = useMemo(() => buildGrid(theme.words), [theme]);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [foundWords, setFoundWords] = useState<Set<string>>(new Set());
  const [dragging, setDragging] = useState(false);
  const [startCell, setStartCell] = useState<[number, number] | null>(null);

  function selectTheme(index: number) {
    setThemeIndex(index);
    setSelected(new Set());
    setFoundWords(new Set());
    setDragging(false);
    setStartCell(null);
  }

  function cellsBetween(a: [number, number], b: [number, number]): [number, number][] {
    const [r1, c1] = a;
    const [r2, c2] = b;
    const dr = Math.sign(r2 - r1);
    const dc = Math.sign(c2 - c1);
    if (r1 !== r2 && c1 !== c2 && Math.abs(r2 - r1) !== Math.abs(c2 - c1)) return [a];
    const cells: [number, number][] = [];
    let r = r1;
    let c = c1;
    cells.push([r, c]);
    while (r !== r2 || c !== c2) {
      r += dr;
      c += dc;
      cells.push([r, c]);
    }
    return cells;
  }

  function handleStart(r: number, c: number) {
    setDragging(true);
    setStartCell([r, c]);
    setSelected(new Set([cellKey(r, c)]));
  }

  function handleEnter(r: number, c: number) {
    if (!dragging || !startCell) return;
    const line = cellsBetween(startCell, [r, c]);
    setSelected(new Set(line.map(([rr, cc]) => cellKey(rr, cc))));
  }

  function handleEnd() {
    if (!dragging) return;
    setDragging(false);
    const selectedKeys = selected;
    for (const pw of placed) {
      if (foundWords.has(pw.word)) continue;
      const pwKeys = new Set(pw.cells.map(([r, c]) => cellKey(r, c)));
      if (
        pwKeys.size === selectedKeys.size &&
        [...pwKeys].every((k) => selectedKeys.has(k))
      ) {
        setFoundWords((prev) => new Set(prev).add(pw.word));
        break;
      }
    }
    setSelected(new Set());
    setStartCell(null);
  }

  const allFound = foundWords.size === placed.length;

  return (
    <div className="card p-6 mb-8">
      <h3 className="heading-font text-xl font-bold mb-2 text-center">
        🔍 Bella&apos;s Word Search
      </h3>
      <p className="text-center text-foreground/70 text-sm mb-4">
        Click and drag to find all the words!
      </p>

      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {THEMES.map((t, i) => (
          <button
            key={t.name}
            onClick={() => selectTheme(i)}
            className={`text-sm font-bold px-4 py-1.5 rounded-full shadow-sm transition-colors ${
              i === themeIndex
                ? "bg-purple-500 text-white"
                : "bg-white/80 hover:bg-white text-foreground"
            }`}
          >
            {t.emoji} {t.name}
          </button>
        ))}
      </div>

      {allFound && (
        <p className="text-center heading-font font-bold text-green-600 mb-3">
          You found them all! 🎉
        </p>
      )}

      <div
        className="mx-auto select-none grid gap-0.5 mb-4"
        style={{ gridTemplateColumns: `repeat(${GRID_SIZE}, minmax(0, 1fr))`, maxWidth: 420 }}
        onMouseUp={handleEnd}
        onMouseLeave={() => dragging && handleEnd()}
      >
        {grid.map((row, r) =>
          row.map((letter, c) => {
            const key = cellKey(r, c);
            const isSelected = selected.has(key);
            const isFound = placed.some(
              (pw) => foundWords.has(pw.word) && pw.cells.some(([pr, pc]) => pr === r && pc === c)
            );
            return (
              <div
                key={key}
                onMouseDown={() => handleStart(r, c)}
                onMouseEnter={() => handleEnter(r, c)}
                className={`aspect-square flex items-center justify-center text-xs sm:text-sm font-bold rounded cursor-pointer ${
                  isFound
                    ? "bg-green-300 text-green-900"
                    : isSelected
                      ? "bg-yellow-300"
                      : "bg-white/80 hover:bg-white"
                }`}
              >
                {letter}
              </div>
            );
          })
        )}
      </div>

      <div className="flex flex-wrap justify-center gap-2">
        {theme.words.map((word) => (
          <span
            key={word}
            className={`text-xs font-bold px-3 py-1 rounded-full ${
              foundWords.has(word)
                ? "bg-green-200 text-green-800 line-through"
                : "bg-purple-100 text-purple-700"
            }`}
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}
