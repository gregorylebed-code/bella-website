import { tripLocations } from "../content";
import { tripSlug } from "../tripSlug";

const home = { place: "Home, New Jersey", emoji: "🏠", x: 80, y: 14 };

export default function TripsMap() {
  return (
    <div className="card p-6 mb-10">
      <svg
        viewBox="0 0 100 60"
        className="w-full h-auto"
        role="img"
        aria-label="A fun, not-to-scale map of the places Bella has traveled"
      >
        <path
          d="M10,25 C8,15 20,8 35,10 C45,5 60,3 70,8 C85,10 95,15 96,25 C98,35 92,42 85,45 C80,52 65,55 55,52 C45,58 30,55 22,48 C10,45 5,35 10,25 Z"
          fill="#bbf7d0"
          stroke="#4d96ff"
          strokeWidth="1"
        />
        <circle cx={home.x} cy={home.y} r="2" fill="#9b5de5" stroke="white" strokeWidth="0.6" />
        {tripLocations.map((loc) => (
          <circle
            key={loc.trip}
            cx={loc.x}
            cy={loc.y}
            r="2"
            fill="#ff5c5c"
            stroke="white"
            strokeWidth="0.6"
          />
        ))}
      </svg>

      <p className="text-center text-xs text-foreground/50 font-medium mt-1">
        (not to scale, just for fun!)
      </p>

      <div className="flex flex-wrap justify-center gap-3 mt-4">
        <span className="heading-font px-4 py-1.5 rounded-full bg-white/70 text-sm font-bold">
          {home.emoji} {home.place}
        </span>
        {tripLocations.map((loc) => (
          <a
            key={loc.trip}
            href={`#${tripSlug(loc.trip)}`}
            className="heading-font px-4 py-1.5 rounded-full bg-white/90 hover:bg-white text-sm font-bold shadow-sm hover:scale-105 transition-transform"
          >
            {loc.emoji} {loc.place}
          </a>
        ))}
      </div>
    </div>
  );
}
