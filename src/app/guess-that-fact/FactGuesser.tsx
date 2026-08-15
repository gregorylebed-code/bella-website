"use client";

import { useState } from "react";

type Fact = { fact: string; answer: boolean; explanation: string };

export default function FactGuesser({ facts }: { facts: Fact[] }) {
  const [index, setIndex] = useState(0);
  const [guess, setGuess] = useState<boolean | null>(null);

  const current = facts[index];
  const isCorrect = guess !== null && guess === current.answer;

  function next() {
    setGuess(null);
    setIndex((i) => (i + 1) % facts.length);
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="card p-8 max-w-lg text-center flex flex-col gap-4">
        <p className="heading-font text-xl font-bold leading-relaxed">
          🤔 {current.fact}
        </p>

        {guess === null ? (
          <div className="flex justify-center gap-4 mt-2">
            <button
              onClick={() => setGuess(true)}
              className="heading-font px-6 py-2 rounded-full bg-green-500 hover:bg-green-600 text-white font-bold shadow-md hover:scale-105 transition-transform"
            >
              True
            </button>
            <button
              onClick={() => setGuess(false)}
              className="heading-font px-6 py-2 rounded-full bg-red-500 hover:bg-red-600 text-white font-bold shadow-md hover:scale-105 transition-transform"
            >
              False
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-3 mt-2">
            <p className="heading-font font-bold">
              {isCorrect ? "✅ You got it!" : "❌ Not quite!"}
            </p>
            <p className="leading-relaxed">{current.explanation}</p>
          </div>
        )}
      </div>

      {guess !== null && (
        <button
          onClick={next}
          className="heading-font px-8 py-3 rounded-full bg-purple-500 hover:bg-purple-600 text-white text-lg font-bold shadow-md hover:scale-105 transition-transform"
        >
          🎲 Next Fact
        </button>
      )}
    </div>
  );
}
