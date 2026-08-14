"use client";

import { useState } from "react";

function pickRandom(list: string[]): string {
  return list[Math.floor(Math.random() * list.length)];
}

export default function PlateGenerator({
  mains,
  sides,
  desserts,
}: {
  mains: string[];
  sides: string[];
  desserts: string[];
}) {
  const [plate, setPlate] = useState({
    main: mains[0],
    side: sides[0],
    dessert: desserts[0],
  });

  function generate() {
    setPlate({
      main: pickRandom(mains),
      side: pickRandom(sides),
      dessert: pickRandom(desserts),
    });
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="card p-8 max-w-lg w-full text-center flex flex-col gap-4">
        <p className="heading-font text-xl font-bold">🍽️ {plate.main}</p>
        <p className="heading-font text-xl font-bold">🍟 {plate.side}</p>
        <p className="heading-font text-xl font-bold">🍰 {plate.dessert}</p>
      </div>
      <button
        onClick={generate}
        className="heading-font px-8 py-3 rounded-full bg-purple-500 hover:bg-purple-600 text-white text-lg font-bold shadow-md hover:scale-105 transition-transform"
      >
        🎲 Build Me a Plate
      </button>
    </div>
  );
}
