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
          className="w-56 h-56 rounded-2xl shadow-md flex items-end justify-center overflow-hidden shrink-0"
          style={{ background: bg.value }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="35" r="18" fill="#f2c9a0" />
            <path
              d={`M32 30 Q50 8 68 30 Q68 20 50 18 Q32 20 32 30 Z`}
              fill={hair}
            />
            <rect x="32" y="50" width="36" height="30" rx="8" fill={outfit} />
            <rect x="36" y="80" width="10" height="16" fill={socks.colors[0]} />
            <rect x="54" y="80" width="10" height="16" fill={socks.colors[socks.colors.length > 1 ? 1 : 0]} />
            <circle cx="43" cy="34" r="2" fill="#333" />
            <circle cx="57" cy="34" r="2" fill="#333" />
            <path d="M43 42 Q50 47 57 42" stroke="#333" strokeWidth="2" fill="none" strokeLinecap="round" />
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
