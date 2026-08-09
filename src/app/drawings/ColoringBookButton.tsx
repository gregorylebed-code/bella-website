"use client";

import { useState } from "react";
import { drawingToColoringPageDataUrl } from "./coloringPage";

export default function ColoringBookButton({
  drawings,
}: {
  drawings: { src: string; caption: string }[];
}) {
  const [building, setBuilding] = useState(false);
  const [progress, setProgress] = useState(0);

  async function handleBuildBook() {
    setBuilding(true);
    setProgress(0);

    const pages: { dataUrl: string; caption: string }[] = [];
    for (const d of drawings) {
      const dataUrl = await drawingToColoringPageDataUrl(d.src);
      pages.push({ dataUrl, caption: d.caption });
      setProgress(pages.length);
    }

    const printWindow = window.open("", "_blank");
    if (printWindow) {
      const pageHtml = pages
        .map(
          (p) => `
        <section class="page">
          <img src="${p.dataUrl}" alt="${p.caption}" />
          <p class="caption">${p.caption}</p>
        </section>`
        )
        .join("");

      printWindow.document.write(`
        <html>
          <head>
            <title>Bella's Coloring Book</title>
            <style>
              @page { margin: 0.5in; }
              body { margin: 0; font-family: sans-serif; }
              .page {
                page-break-after: always;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                min-height: 90vh;
              }
              .page:last-child { page-break-after: auto; }
              .page img { max-width: 100%; max-height: 80vh; }
              .caption { text-align: center; font-size: 1.2rem; margin-top: 0.5rem; }
            </style>
          </head>
          <body>${pageHtml}</body>
        </html>
      `);
      printWindow.document.close();
      printWindow.onload = () => printWindow.print();
    }

    setBuilding(false);
  }

  return (
    <button
      onClick={handleBuildBook}
      disabled={building || drawings.length === 0}
      className="heading-font px-6 py-3 rounded-full bg-pink-500 hover:bg-pink-600 text-white text-lg font-bold shadow-md hover:scale-105 transition-transform disabled:opacity-50 disabled:hover:scale-100"
    >
      {building
        ? `📖 Building book... (${progress}/${drawings.length})`
        : `📖 Print All as Coloring Book (${drawings.length})`}
    </button>
  );
}
