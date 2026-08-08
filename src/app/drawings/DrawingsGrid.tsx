"use client";

import { useEffect, useState } from "react";
import EmptyState from "../EmptyState";
import ColoringPageModal from "./ColoringPageModal";

const FAVORITES_KEY = "bella-favorite-drawings";

export default function DrawingsGrid({
  drawings,
}: {
  drawings: { src: string; caption: string }[];
}) {
  const [query, setQuery] = useState("");
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [coloringPick, setColoringPick] = useState<{ src: string; caption: string } | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(FAVORITES_KEY);
    if (stored) setFavorites(JSON.parse(stored));
  }, []);

  function toggleFavorite(src: string) {
    setFavorites((prev) => {
      const next = prev.includes(src) ? prev.filter((s) => s !== src) : [...prev, src];
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(next));
      return next;
    });
  }

  const filtered = drawings
    .filter((d) => d.caption.toLowerCase().includes(query.toLowerCase()))
    .filter((d) => !showFavoritesOnly || favorites.includes(d.src));

  return (
    <>
      <div className="flex flex-wrap justify-center items-center gap-3 mb-6">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search drawings..."
          className="w-full max-w-sm px-5 py-2 rounded-full bg-white/90 shadow-md font-medium focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <button
          onClick={() => setShowFavoritesOnly((v) => !v)}
          className={`heading-font px-5 py-2 rounded-full shadow-md font-bold transition-transform hover:scale-105 ${
            showFavoritesOnly ? "bg-pink-500 text-white" : "bg-white/90 hover:bg-white"
          }`}
        >
          ❤️ Favorites Only
        </button>
      </div>

      {filtered.length === 0 ? (
        <EmptyState
          text={
            showFavoritesOnly
              ? "No favorites yet, tap the heart on a drawing you love!"
              : "No drawings match your search."
          }
        />
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {filtered.map((d) => {
            const isFavorite = favorites.includes(d.src);
            return (
              <figure key={d.src} className="card overflow-hidden relative">
                <button
                  onClick={() => toggleFavorite(d.src)}
                  aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
                  className="absolute top-2 right-2 z-10 w-9 h-9 rounded-full bg-white/90 shadow-md flex items-center justify-center text-lg hover:scale-110 transition-transform"
                >
                  {isFavorite ? "❤️" : "🤍"}
                </button>
                <img src={d.src} alt={d.caption} className="w-full aspect-square object-cover" />
                <button
                  onClick={() => setColoringPick(d)}
                  className="heading-font w-full py-1.5 text-xs font-bold bg-white/90 hover:bg-white border-t"
                >
                  🖍️ Coloring Page
                </button>
                <figcaption className="p-2 text-sm text-center font-medium">{d.caption}</figcaption>
              </figure>
            );
          })}
        </div>
      )}

      {coloringPick && (
        <ColoringPageModal drawing={coloringPick} onClose={() => setColoringPick(null)} />
      )}
    </>
  );
}
