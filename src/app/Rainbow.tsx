const STRIPES = ["#ff5c5c", "#ff9f43", "#ffd93d", "#6bcB77", "#4d96ff", "#9b5de5"];

export default function Rainbow({ width = 320 }: { width?: number }) {
  const height = width / 2;
  return (
    <div style={{ width, height }} className="relative mx-auto">
      {STRIPES.map((color, i) => {
        const inset = i * (width / (STRIPES.length * 2.2));
        return (
          <div
            key={color}
            className="absolute rainbow-arc"
            style={{
              left: inset,
              right: inset,
              bottom: 0,
              top: inset,
              borderWidth: width / 24,
              borderColor: color,
            }}
          />
        );
      })}
    </div>
  );
}
