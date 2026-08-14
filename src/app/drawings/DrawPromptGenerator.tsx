"use client";

import { useState } from "react";

export default function DrawPromptGenerator({ prompts }: { prompts: string[] }) {
  const [current, setCurrent] = useState(prompts[0]);

  function generate() {
    let next = current;
    while (next === current && prompts.length > 1) {
      next = prompts[Math.floor(Math.random() * prompts.length)];
    }
    setCurrent(next);
  }

  return (
    <div className="flex flex-col items-center gap-6 mb-10">
      <div className="card p-8 max-w-lg text-center">
        <p className="heading-font text-2xl font-bold leading-relaxed">
          ✏️ {current}
        </p>
      </div>
      <button
        onClick={generate}
        className="heading-font px-8 py-3 rounded-full bg-purple-500 hover:bg-purple-600 text-white text-lg font-bold shadow-md hover:scale-105 transition-transform"
      >
        🎨 Give Me a Prompt
      </button>
    </div>
  );
}
