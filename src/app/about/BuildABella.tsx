"use client";

import { useState } from "react";

const HAIR_COLORS = ["#5c3a21", "#2b2b2b", "#a85c32", "#f2c14e", "#c94f7c"];
const OUTFIT_COLORS = ["#ff5c5c", "#ff9f43", "#ffd93d", "#6bcB77", "#4d96ff", "#9b5de5"];
const SOCK_PATTERNS = [
  { name: "Rainbow Stripes", colors: ["#ff5c5c", "#ff9f43", "#ffd93d", "#6bcB77", "#4d96ff"] },
  { name: "Polka Dots", colors: ["#ff5c5c", "#ffd93d"] },
  { name: "Solid Purple", colors: ["#9b5de5"] },
  { name: "Food Print", colors: ["#ff9f43", "#ffd93d", "#ff5c5c"] },
];
const BACKGROUNDS = [
  { name: "Sky", value: "linear-gradient(to bottom, #a8d8ff, #ffffff)" },
  { name: "Sunset", value: "linear-gradient(to bottom, #ff9f43, #ff5c5c)" },
  { name: "Rainbow", value: "linear-gradient(90deg, #ff5c5c, #ff9f43, #ffd93d, #6bcB77, #4d96ff, #9b5de5)" },
  { name: "Beach", value: "linear-gradient(to bottom, #4d96ff 0%, #4d96ff 55%, #ffd93d 55%, #ffd93d 100%)" },
];

function OptionRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-4">
      <p className="text-sm font-bold text-foreground/70 mb-2">{label}</p>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

export default function BuildABella() {
  const [hair, setHair] = useState(HAIR_COLORS[0]);
  const [outfit, setOutfit] = useState(OUTFIT_COLORS[0]);
  const [sockIdx, setSockIdx] = useState(0);
  const [bgIdx, setBgIdx] = useState(0);
  const socks = SOCK_PATTERNS[sockIdx];
  const bg = BACKGROUNDS[bgIdx];

  return (
    <div className="card p-6 mt-8">
      <h3 className="heading-font text-2xl font-bold text-black drop-shadow mb-2 text-center">
        🎨 Build-a-Bella
      </h3>
      <p className="text-center text-foreground/70 text-sm mb-6">
        Mix and match to make your own version of me!
      </p>

      <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
        <div
          className="w-56 h-64 rounded-2xl shadow-md flex items-end justify-center overflow-hidden shrink-0"
          style={{ background: bg.value }}
        >
          <svg viewBox="0 0 100 120" className="w-full h-full">
            {/* back hair, behind the head/shoulders */}
            <path
              d="M28 38 Q26 68 32 92 Q34 78 36 60 L36 38 Z"
              fill={hair}
            />
            <path
              d="M72 38 Q74 68 68 92 Q66 78 64 60 L64 38 Z"
              fill={hair}
            />

            {/* shoulders / body */}
            <path
              d="M22 112 Q22 82 50 80 Q78 82 78 112 Z"
              fill={outfit}
            />
            <path
              d="M40 82 Q50 90 60 82 L58 78 Q50 84 42 78 Z"
              fill="#ffffff"
              opacity="0.35"
            />

            {/* socks peeking at the bottom */}
            <rect x="34" y="108" width="11" height="12" rx="2" fill={socks.colors[0]} />
            <rect x="55" y="108" width="11" height="12" rx="2" fill={socks.colors[socks.colors.length > 1 ? 1 : 0]} />

            {/* neck */}
            <rect x="44" y="58" width="12" height="14" rx="4" fill="#f2c9a0" />

            {/* head */}
            <ellipse cx="50" cy="42" rx="20" ry="22" fill="#f2c9a0" />

            {/* ears */}
            <circle cx="30" cy="43" r="4" fill="#f2c9a0" />
            <circle cx="70" cy="43" r="4" fill="#f2c9a0" />

            {/* front hair with side part and soft strands */}
            <path
              d="M28 40 Q26 18 50 14 Q74 18 72 40 Q68 26 50 24 Q32 26 28 40 Z"
              fill={hair}
            />
            <path
              d="M30 32 Q34 22 44 18 Q36 24 34 34 Z"
              fill={hair}
              opacity="0.85"
            />
            <path
              d="M70 32 Q66 22 56 18 Q64 24 66 34 Z"
              fill={hair}
              opacity="0.85"
            />

            {/* rosy cheeks */}
            <ellipse cx="37" cy="48" rx="4" ry="2.5" fill="#ffb3ab" opacity="0.5" />
            <ellipse cx="63" cy="48" rx="4" ry="2.5" fill="#ffb3ab" opacity="0.5" />

            {/* eyes */}
            <ellipse cx="42" cy="42" rx="2.2" ry="2.8" fill="#3a2a20" />
            <ellipse cx="58" cy="42" rx="2.2" ry="2.8" fill="#3a2a20" />
            <circle cx="42.8" cy="41" r="0.6" fill="#fff" />
            <circle cx="58.8" cy="41" r="0.6" fill="#fff" />

            {/* eyebrows */}
            <path d="M38 37 Q42 35 46 37" stroke="#3a2a20" strokeWidth="1.3" fill="none" strokeLinecap="round" />
            <path d="M54 37 Q58 35 62 37" stroke="#3a2a20" strokeWidth="1.3" fill="none" strokeLinecap="round" />

            {/* nose */}
            <path d="M49 45 Q48 48 50 49" stroke="#d99a76" strokeWidth="1" fill="none" strokeLinecap="round" />

            {/* smile */}
            <path d="M43 52 Q50 58 57 52" stroke="#c9605a" strokeWidth="1.8" fill="none" strokeLinecap="round" />
          </svg>
        </div>

        <div className="flex-1 w-full">
          <OptionRow label="Hair Color">
            {HAIR_COLORS.map((c) => (
              <button
                key={c}
                onClick={() => setHair(c)}
                className={`w-8 h-8 rounded-full shadow-md ${hair === c ? "ring-4 ring-purple-400" : ""}`}
                style={{ background: c }}
                aria-label={`hair color ${c}`}
              />
            ))}
          </OptionRow>

          <OptionRow label="Outfit Color">
            {OUTFIT_COLORS.map((c) => (
              <button
                key={c}
                onClick={() => setOutfit(c)}
                className={`w-8 h-8 rounded-full shadow-md ${outfit === c ? "ring-4 ring-purple-400" : ""}`}
                style={{ background: c }}
                aria-label={`outfit color ${c}`}
              />
            ))}
          </OptionRow>

          <OptionRow label="Sock Pattern">
            {SOCK_PATTERNS.map((s, i) => (
              <button
                key={s.name}
                onClick={() => setSockIdx(i)}
                className={`text-xs font-bold px-3 py-1.5 rounded-full shadow-sm ${
                  sockIdx === i ? "bg-purple-500 text-white" : "bg-white/80 hover:bg-white"
                }`}
              >
                {s.name}
              </button>
            ))}
          </OptionRow>

          <OptionRow label="Background">
            {BACKGROUNDS.map((b, i) => (
              <button
                key={b.name}
                onClick={() => setBgIdx(i)}
                className={`text-xs font-bold px-3 py-1.5 rounded-full shadow-sm ${
                  bgIdx === i ? "bg-purple-500 text-white" : "bg-white/80 hover:bg-white"
                }`}
              >
                {b.name}
              </button>
            ))}
          </OptionRow>
        </div>
      </div>
    </div>
  );
}
