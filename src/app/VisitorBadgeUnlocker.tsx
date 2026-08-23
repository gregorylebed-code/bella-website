"use client";

import { useEffect } from "react";
import { unlockBadge } from "./badges";

export default function VisitorBadgeUnlocker() {
  useEffect(() => {
    unlockBadge("visitor");
  }, []);

  return null;
}
