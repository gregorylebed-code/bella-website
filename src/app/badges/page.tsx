"use client";

import { useEffect, useState } from "react";
import Clouds from "../Clouds";
import NavBar from "../NavBar";
import { BADGES, getUnlockedBadges } from "../badges";

export default function BadgesPage() {
  const [unlocked, setUnlocked] = useState<string[]>([]);

  useEffect(() => {
    setUnlocked(getUnlockedBadges());
  }, []);

  return (
    <main className="relative flex-1">
      <Clouds />
      <div className="relative z-10 pt-10">
        <NavBar />
      </div>

      <section className="relative z-10 max-w-3xl mx-auto px-4 py-10">
        <h2 className="heading-font text-3xl font-bold text-black drop-shadow mb-2 text-center">
          🏆 Your Achievements
        </h2>
        <p className="text-center text-foreground/70 font-medium mb-8">
          Play the games around the site to unlock badges! You&apos;ve earned {unlocked.length} of{" "}
          {BADGES.length}.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {BADGES.map((badge) => {
            const isUnlocked = unlocked.includes(badge.id);
            return (
              <div
                key={badge.id}
                className={`card p-6 flex flex-col items-center text-center gap-2 ${
                  isUnlocked ? "" : "opacity-50"
                }`}
              >
                <div
                  className={`w-20 h-20 rounded-full flex items-center justify-center text-4xl shadow-md ${
                    isUnlocked ? "bg-yellow-200" : "bg-white/70 grayscale"
                  }`}
                >
                  {isUnlocked ? badge.emoji : "🔒"}
                </div>
                <h3 className="heading-font text-lg font-bold mt-2">{badge.name}</h3>
                <p className="text-sm text-foreground/70">{badge.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <footer className="relative z-10 text-center py-8 text-blue-600 font-medium">
        Made with love by Bella
      </footer>
    </main>
  );
}
