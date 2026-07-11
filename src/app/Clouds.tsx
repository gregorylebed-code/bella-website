// Decorative floating clouds. Purely visual, no content here.
const CLOUD_CONFIGS = [
  { top: "6%", size: 70, duration: "60s", delay: "0s" },
  { top: "16%", size: 46, duration: "45s", delay: "-10s" },
  { top: "3%", size: 55, duration: "75s", delay: "-30s" },
  { top: "24%", size: 36, duration: "50s", delay: "-5s" },
  { top: "11%", size: 30, duration: "55s", delay: "-20s" },
];

function Cloud({
  top,
  size,
  duration,
  delay,
}: {
  top: string;
  size: number;
  duration: string;
  delay: string;
}) {
  return (
    <div
      className="cloud-drift absolute"
      style={{ top, animationDuration: duration, animationDelay: delay }}
    >
      <div
        className="rounded-full bg-white shadow-[0_6px_16px_rgba(120,150,180,0.18)] relative"
        style={{ width: size * 2.4, height: size }}
      >
        <div
          className="absolute rounded-full bg-white"
          style={{ width: size * 1.1, height: size * 1.1, top: -size * 0.5, left: size * 0.2 }}
        />
        <div
          className="absolute rounded-full bg-white"
          style={{ width: size * 0.9, height: size * 0.9, top: -size * 0.35, left: size * 1.1 }}
        />
      </div>
    </div>
  );
}

export default function Clouds() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {CLOUD_CONFIGS.map((c, i) => (
        <Cloud key={i} {...c} />
      ))}
    </div>
  );
}
