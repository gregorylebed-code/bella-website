"use client";

import { useState } from "react";

export default function RandomDrawingButton({
  drawings,
}: {
  drawings: { src: string; caption: string }[];
}) {
  const [picked, setPicked] = useState<{ src: string; caption: string } | null>(null);

  function pickRandom() {
    const index = Math.floor(Math.random() * drawings.length);
    setPicked(drawings[index]);
  }

  return (
    <>
      <div className="flex justify-center mb-6">
        <button
          onClick={pickRandom}
          className="heading-font px-6 py-3 rounded-full bg-purple-500 hover:bg-purple-600 text-white text-lg font-bold shadow-md hover:scale-105 transition-transform"
        >
          🎲 Surprise Me!
        </button>
      </div>

      {picked && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
          onClick={() => setPicked(null)}
        >
          <div
            className="card overflow-hidden max-w-sm w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={picked.src} alt={picked.caption} className="w-full aspect-square object-cover" />
            <figcaption className="p-3 text-center font-medium">{picked.caption}</figcaption>
            <button
              onClick={() => setPicked(null)}
              className="heading-font w-full py-2 bg-white/90 hover:bg-white font-bold border-t"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
