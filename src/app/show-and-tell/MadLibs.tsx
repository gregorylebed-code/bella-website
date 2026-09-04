"use client";

import { useState } from "react";
import { unlockBadge } from "../badges";

type BlankType =
  | "adjective"
  | "noun"
  | "food"
  | "animal"
  | "place"
  | "sound"
  | "number"
  | "verbing"
  | "name";

const BLANK_LABELS: Record<BlankType, string> = {
  adjective: "an adjective",
  noun: "a noun",
  food: "a food",
  animal: "an animal",
  place: "a place",
  sound: "a silly sound",
  number: "a number",
  verbing: "a verb ending in -ing",
  name: "a name",
};

type Blank = { id: string; type: BlankType };
type Part = string | Blank;

type Template = {
  title: string;
  emoji: string;
  parts: Part[];
};

const TEMPLATES: Template[] = [
  {
    title: "A Day at Bella's Bistro",
    emoji: "🍳",
    parts: [
      "Chef Bella walked into Bella's Bistro feeling ",
      { id: "b1", type: "adjective" },
      ". Today's special was ",
      { id: "b2", type: "food" },
      " smothered in Mano Mano sauce. Halfway through service, a ",
      { id: "b3", type: "adjective" },
      " ",
      { id: "b4", type: "animal" },
      ' wandered into the kitchen making a "',
      { id: "b5", type: "sound" },
      '" noise. Bella grabbed a spatula, yelled "',
      { id: "b6", type: "name" },
      ', get back here!", and chased it around for ',
      { id: "b7", type: "number" },
      " minutes. By the time she caught it, the whole kitchen smelled like ",
      { id: "b8", type: "food" },
      ", and the customers gave the chaos a solid 9/10.",
    ],
  },
  {
    title: "Rigatoni's Boom Booms Night",
    emoji: "⛈️",
    parts: [
      "It was a stormy night full of Boom Booms. Rigatoni's moosh face peeked out from under the ",
      { id: "r1", type: "place" },
      ", looking very ",
      { id: "r2", type: "adjective" },
      ". Lavender, aka Spotty Chubs, tried to help by ",
      { id: "r3", type: "verbing" },
      " in circles, which only made things more ",
      { id: "r4", type: "adjective" },
      ". Bella wrapped them both in a ",
      { id: "r5", type: "noun" },
      ' blanket and whispered "be serious about the chuckles" until the thunder stopped. ',
      { id: "r6", type: "number" },
      " minutes later, they were both fast asleep, dreaming about ",
      { id: "r7", type: "food" },
      ".",
    ],
  },
  {
    title: "Junior Year Chaos",
    emoji: "🎒",
    parts: [
      "First week of junior year and the hallways were ",
      { id: "j1", type: "adjective" },
      ". Bella walked into German 5 feeling ",
      { id: "j2", type: "adjective" },
      ', accidentally said "',
      { id: "j3", type: "sound" },
      '" instead of hello, and sat down next to a ',
      { id: "j4", type: "noun" },
      " she'd never met before. At lunch she ate ",
      { id: "j5", type: "food" },
      " with her friend and talked about ",
      { id: "j6", type: "place" },
      " for ",
      { id: "j7", type: "number" },
      " minutes straight. By the end of the day she was so tired she could've slept for ",
      { id: "j8", type: "number" },
      " hours, but hey, at least she didn't miss the crowded halls.",
    ],
  },
];

export default function MadLibs() {
  const [templateIndex, setTemplateIndex] = useState(0);
  const template = TEMPLATES[templateIndex];
  const blanks = template.parts.filter((p): p is Blank => typeof p !== "string");
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [story, setStory] = useState<string[] | null>(null);

  function selectTemplate(index: number) {
    setTemplateIndex(index);
    setAnswers({});
    setStory(null);
  }

  function handleChange(id: string, value: string) {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  }

  const allFilled = blanks.every((b) => answers[b.id]?.trim());

  function generate() {
    if (!allFilled) return;
    setStory(template.parts.map((p) => (typeof p === "string" ? p : answers[p.id])));
    unlockBadge("mad-libs");
  }

  function reset() {
    setAnswers({});
    setStory(null);
  }

  return (
    <div className="card p-6 mb-8">
      <h3 className="heading-font text-xl font-bold mb-2 text-center">
        📝 Bella Mad Libs
      </h3>
      <p className="text-center text-foreground/70 text-sm mb-4">
        Fill in the blanks, then generate a silly Bella story!
      </p>

      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {TEMPLATES.map((t, i) => (
          <button
            key={t.title}
            onClick={() => selectTemplate(i)}
            className={`text-sm font-bold px-4 py-1.5 rounded-full shadow-sm transition-colors ${
              i === templateIndex
                ? "bg-purple-500 text-white"
                : "bg-white/80 hover:bg-white text-foreground"
            }`}
          >
            {t.emoji} {t.title}
          </button>
        ))}
      </div>

      {!story ? (
        <div className="flex flex-col gap-3 max-w-sm mx-auto">
          {blanks.map((b, i) => (
            <input
              key={b.id}
              type="text"
              value={answers[b.id] ?? ""}
              onChange={(e) => handleChange(b.id, e.target.value)}
              placeholder={`${i + 1}. ${BLANK_LABELS[b.type]}`}
              className="w-full px-4 py-2 rounded-full bg-white/90 shadow-sm font-medium focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          ))}
          <button
            onClick={generate}
            disabled={!allFilled}
            className="heading-font mt-2 px-6 py-2 rounded-full bg-purple-500 hover:bg-purple-600 text-white font-bold shadow-md hover:scale-105 transition-transform disabled:opacity-50 disabled:hover:scale-100"
          >
            ✨ Generate My Story
          </button>
        </div>
      ) : (
        <div className="max-w-xl mx-auto">
          <p className="leading-relaxed text-lg bg-white/70 rounded-2xl p-5">
            {story.map((part, i) =>
              typeof template.parts[i] !== "string" ? (
                <span key={i} className="font-bold text-purple-600">
                  {part}
                </span>
              ) : (
                <span key={i}>{part}</span>
              )
            )}
          </p>
          <div className="flex justify-center mt-4">
            <button
              onClick={reset}
              className="heading-font text-sm font-bold px-4 py-2 rounded-full bg-pink-500 text-white shadow-md hover:scale-105 transition-transform"
            >
              🔄 Play Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
