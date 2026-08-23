"use client";

import { useEffect, useState } from "react";
import { BADGE_UNLOCKED_EVENT, type Badge } from "./badges";

const COLORS = ["#ff5c5c", "#ff9f43", "#ffd93d", "#6bcB77", "#4d96ff", "#9b5de5"];

type Particle = {
  id: number;
  left: number;
  color: string;
  delay: number;
  duration: number;
  drift: number;
};

function makeParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    delay: Math.random() * 0.3,
    duration: 1.2 + Math.random() * 0.8,
    drift: (Math.random() - 0.5) * 200,
  }));
}

export default function BadgeCelebration() {
  const [badge, setBadge] = useState<Badge | null>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleUnlock(e: Event) {
      const detail = (e as CustomEvent).detail as { badge?: Badge };
      if (!detail?.badge) return;
      setBadge(detail.badge);
      setParticles(makeParticles(40));
      setVisible(true);
      const timer = setTimeout(() => setVisible(false), 3200);
      return () => clearTimeout(timer);
    }
    window.addEventListener(BADGE_UNLOCKED_EVENT, handleUnlock);
    return () => window.removeEventListener(BADGE_UNLOCKED_EVENT, handleUnlock);
  }, []);

  if (!visible || !badge) return null;

  return (
    <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute top-[-10px] rounded-sm"
          style={{
            left: `${p.left}%`,
            width: 8,
            height: 8,
            background: p.color,
            animation: `bella-confetti-fall ${p.duration}s ease-in ${p.delay}s forwards`,
            // @ts-expect-error custom property used by keyframes
            "--drift": `${p.drift}px`,
          }}
        />
      ))}

      <div
        className="absolute top-10 left-1/2 -translate-x-1/2 card px-6 py-4 text-center shadow-lg"
        style={{ animation: "bella-toast-pop 0.4s ease-out" }}
      >
        <p className="heading-font text-xl font-bold">🎉 Great work!</p>
        <p className="text-sm font-bold mt-1">
          {badge.emoji} You unlocked &ldquo;{badge.name}&rdquo;!
        </p>
      </div>

      <style jsx>{`
        @keyframes bella-confetti-fall {
          0% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translate(var(--drift), 100vh) rotate(360deg);
            opacity: 0.9;
          }
        }
        @keyframes bella-toast-pop {
          0% {
            transform: translate(-50%, -20px) scale(0.8);
            opacity: 0;
          }
          100% {
            transform: translate(-50%, 0) scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
