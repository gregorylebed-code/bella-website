"use client";

import { useEffect, useState } from "react";

function getNextSunday(): Date {
  const now = new Date();
  const next = new Date(now);
  next.setHours(0, 0, 0, 0);
  const daysUntilSunday = (7 - next.getDay()) % 7;
  next.setDate(next.getDate() + (daysUntilSunday === 0 ? 7 : daysUntilSunday));
  return next;
}

function formatCountdown(target: Date): string {
  const diffMs = target.getTime() - new Date().getTime();
  if (diffMs <= 0) return "New video today!";
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
  if (days > 0) return `${days}d ${hours}h`;
  const minutes = Math.floor((diffMs / (1000 * 60)) % 60);
  return `${hours}h ${minutes}m`;
}

export default function NextVideoCountdown() {
  const [countdown, setCountdown] = useState<string | null>(null);

  useEffect(() => {
    const update = () => setCountdown(formatCountdown(getNextSunday()));
    update();
    const interval = setInterval(update, 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="card p-5 mb-8 text-center">
      <p className="text-sm text-foreground/60 font-bold uppercase tracking-wide mb-1">
        Next Bella&apos;s Bistro Video
      </p>
      <p className="heading-font text-2xl font-bold">
        {countdown ?? "..."}
      </p>
      <p className="text-sm text-foreground/60 mt-1">New videos every Sunday! 🎬</p>
    </div>
  );
}
