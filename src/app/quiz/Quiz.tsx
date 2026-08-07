"use client";

import { useState } from "react";
import { questions, results, type Vibe } from "./quizData";

export default function Quiz({
  drawings,
}: {
  drawings: { src: string; caption: string }[];
}) {
  const [step, setStep] = useState(0);
  const [tally, setTally] = useState<Record<Vibe, number>>({
    goofy: 0,
    chill: 0,
    spicy: 0,
    cozy: 0,
    hungry: 0,
  });

  function choose(vibe: Vibe) {
    const next = { ...tally, [vibe]: tally[vibe] + 1 };
    setTally(next);
    setStep((s) => s + 1);
  }

  function restart() {
    setStep(0);
    setTally({ goofy: 0, chill: 0, spicy: 0, cozy: 0, hungry: 0 });
  }

  if (step >= questions.length) {
    const winner = (Object.keys(tally) as Vibe[]).reduce((a, b) =>
      tally[b] > tally[a] ? b : a
    );
    const result = results[winner];
    const drawing = drawings.find((d) => d.caption === result.caption);

    return (
      <div className="card p-8 max-w-lg mx-auto text-center flex flex-col items-center gap-4">
        {drawing && (
          <img
            src={drawing.src}
            alt={drawing.caption}
            className="w-40 h-40 rounded-2xl object-cover shadow-md"
          />
        )}
        <h3 className="heading-font text-2xl font-bold">{result.title}</h3>
        <p className="leading-relaxed">{result.description}</p>
        <button
          onClick={restart}
          className="heading-font mt-2 px-6 py-2 rounded-full bg-purple-500 hover:bg-purple-600 text-white font-bold shadow-md hover:scale-105 transition-transform"
        >
          Take It Again
        </button>
      </div>
    );
  }

  const question = questions[step];

  return (
    <div className="card p-8 max-w-lg mx-auto">
      <p className="text-sm text-foreground/60 font-medium mb-2 text-center">
        Question {step + 1} of {questions.length}
      </p>
      <h3 className="heading-font text-xl font-bold mb-6 text-center">
        {question.q}
      </h3>
      <div className="flex flex-col gap-3">
        {question.options.map((opt) => (
          <button
            key={opt.label}
            onClick={() => choose(opt.vibe)}
            className="px-5 py-3 rounded-2xl bg-white/90 hover:bg-white shadow-sm font-medium text-left hover:scale-[1.02] transition-transform"
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
