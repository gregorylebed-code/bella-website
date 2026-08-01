"use client";

import { useState } from "react";
import EmptyState from "../EmptyState";

export default function DrawingsGrid({
  drawings,
}: {
  drawings: { src: string; caption: string }[];
}) {
  const [query, setQuery] = useState("");

  const filtered = drawings.filter((d) =>
    d.caption.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <div className="flex justify-center mb-6">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search drawings..."
          className="w-full max-w-sm px-5 py-2 rounded-full bg-white/90 shadow-md font-medium focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
      </div>

      {filtered.length === 0 ? (
        <EmptyState text="No drawings match your search." />
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {filtered.map((d) => (
            <figure key={d.src} className="card overflow-hidden">
              <img src={d.src} alt={d.caption} className="w-full aspect-square object-cover" />
              <figcaption className="p-2 text-sm text-center font-medium">{d.caption}</figcaption>
            </figure>
          ))}
        </div>
      )}
    </>
  );
}
