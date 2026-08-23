import { subscriberCount, subscriberGoal } from "../content";

export default function SubGoalProgress() {
  const percent = Math.min(100, Math.round((subscriberCount / subscriberGoal) * 100));

  return (
    <div className="card p-5 mb-6 text-center">
      <p className="text-sm text-foreground/60 font-bold uppercase tracking-wide mb-2">
        Bucket List Goal: Hit 1k Subs on Bella&apos;s Bistro! 🎯
      </p>
      <div className="w-full h-5 rounded-full bg-white/70 shadow-inner overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{
            width: `${percent}%`,
            background: "linear-gradient(90deg, #ff5c5c, #ff9f43, #ffd93d, #6bcB77, #4d96ff, #9b5de5)",
          }}
        />
      </div>
      <p className="heading-font font-bold mt-2">
        {subscriberCount.toLocaleString()} / {subscriberGoal.toLocaleString()} subscribers ({percent}%)
      </p>
    </div>
  );
}
