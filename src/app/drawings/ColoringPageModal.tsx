"use client";

import { useEffect, useRef, useState } from "react";

// Turns a photo of a drawing into a black-and-white line-art style
// printable by darkening edges (Sobel-ish contrast) and flattening
// everything else to white. Not perfect line art, but good enough for
// a fun printable coloring page from a real drawing photo.
function toColoringPage(canvas: HTMLCanvasElement, img: HTMLImageElement) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const w = img.naturalWidth;
  const h = img.naturalHeight;
  canvas.width = w;
  canvas.height = h;
  ctx.drawImage(img, 0, 0, w, h);

  const src = ctx.getImageData(0, 0, w, h);
  const gray = new Float32Array(w * h);
  for (let i = 0; i < w * h; i++) {
    const r = src.data[i * 4];
    const g = src.data[i * 4 + 1];
    const b = src.data[i * 4 + 2];
    gray[i] = 0.299 * r + 0.587 * g + 0.114 * b;
  }

  const out = ctx.createImageData(w, h);
  const gx = [-1, 0, 1, -2, 0, 2, -1, 0, 1];
  const gy = [-1, -2, -1, 0, 0, 0, 1, 2, 1];

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      let sx = 0;
      let sy = 0;
      if (x > 0 && x < w - 1 && y > 0 && y < h - 1) {
        let k = 0;
        for (let ky = -1; ky <= 1; ky++) {
          for (let kx = -1; kx <= 1; kx++) {
            const val = gray[(y + ky) * w + (x + kx)];
            sx += val * gx[k];
            sy += val * gy[k];
            k++;
          }
        }
      }
      const edge = Math.sqrt(sx * sx + sy * sy);
      const isLine = edge > 90;
      const idx = (y * w + x) * 4;
      const shade = isLine ? 0 : 255;
      out.data[idx] = shade;
      out.data[idx + 1] = shade;
      out.data[idx + 2] = shade;
      out.data[idx + 3] = 255;
    }
  }

  ctx.putImageData(out, 0, 0);
}

export default function ColoringPageModal({
  drawing,
  onClose,
}: {
  drawing: { src: string; caption: string };
  onClose: () => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      if (canvasRef.current) {
        toColoringPage(canvasRef.current, img);
        setReady(true);
      }
    };
    img.src = drawing.src;
  }, [drawing.src]);

  function handlePrint() {
    const dataUrl = canvasRef.current?.toDataURL("image/png");
    if (!dataUrl) return;
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;
    printWindow.document.write(`
      <html>
        <head><title>${drawing.caption} - Coloring Page</title></head>
        <body style="margin:0;display:flex;align-items:center;justify-content:center;">
          <img src="${dataUrl}" style="max-width:100%;" onload="window.print()" />
        </body>
      </html>
    `);
    printWindow.document.close();
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
      onClick={onClose}
    >
      <div
        className="card overflow-hidden max-w-sm w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative bg-white">
          {!ready && (
            <div className="aspect-square flex items-center justify-center text-foreground/50 font-medium">
              Making your coloring page...
            </div>
          )}
          <canvas
            ref={canvasRef}
            className={`w-full h-auto ${ready ? "" : "hidden"}`}
          />
        </div>
        <figcaption className="p-3 text-center font-medium">
          {drawing.caption} — Coloring Page
        </figcaption>
        <div className="flex border-t">
          <button
            onClick={handlePrint}
            disabled={!ready}
            className="heading-font flex-1 py-2 bg-purple-500 hover:bg-purple-600 text-white font-bold disabled:opacity-50"
          >
            🖨️ Print
          </button>
          <button
            onClick={onClose}
            className="heading-font flex-1 py-2 bg-white/90 hover:bg-white font-bold border-l"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
