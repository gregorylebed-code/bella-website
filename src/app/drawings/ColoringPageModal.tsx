"use client";

import { useEffect, useRef, useState } from "react";
import { toColoringPage } from "./coloringPage";

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
