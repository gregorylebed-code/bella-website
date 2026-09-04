"use client";

import { useState } from "react";
import { affirmations } from "../content";

function randomAffirmation(): string {
  return affirmations[Math.floor(Math.random() * affirmations.length)];
}

export default function BookmarkModal({
  drawing,
  onClose,
}: {
  drawing: { src: string; caption: string };
  onClose: () => void;
}) {
  const [quote, setQuote] = useState(randomAffirmation);

  function handlePrint() {
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;

    const bookmark = `
      <div class="bookmark">
        <img src="${drawing.src}" alt="${drawing.caption}" />
        <p class="quote">${quote}</p>
        <p class="site">Bella's World</p>
      </div>`;

    printWindow.document.write(`
      <html>
        <head>
          <title>${drawing.caption} - Bookmark</title>
          <style>
            @page { margin: 0.4in; }
            body { margin: 0; font-family: sans-serif; display: flex; gap: 0.3in; justify-content: center; }
            .bookmark {
              width: 2in;
              height: 7in;
              border: 2px dashed #999;
              border-radius: 0.25in;
              display: flex;
              flex-direction: column;
              align-items: center;
              padding: 0.2in;
              box-sizing: border-box;
              text-align: center;
            }
            .bookmark img {
              width: 100%;
              height: 2.8in;
              object-fit: cover;
              border-radius: 0.15in;
            }
            .bookmark .quote {
              font-size: 0.85rem;
              font-weight: 600;
              margin-top: 0.2in;
            }
            .bookmark .site {
              font-size: 0.7rem;
              color: #888;
              margin-top: auto;
            }
          </style>
        </head>
        <body>${bookmark}${bookmark}${bookmark}</body>
      </html>
    `);
    printWindow.document.close();
    printWindow.onload = () => printWindow.print();
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
      onClick={onClose}
    >
      <div
        className="card overflow-hidden max-w-xs w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-white p-5 flex justify-center">
          <div className="w-36 aspect-[2/7] border-2 border-dashed border-black/20 rounded-2xl overflow-hidden flex flex-col items-center p-2 text-center">
            <img
              src={drawing.src}
              alt={drawing.caption}
              className="w-full h-28 object-cover rounded-lg"
            />
            <p className="text-[11px] font-semibold mt-2 leading-tight">{quote}</p>
            <p className="text-[9px] text-foreground/50 mt-auto">Bella&apos;s World</p>
          </div>
        </div>

        <div className="px-4">
          <button
            onClick={() => setQuote(randomAffirmation())}
            className="heading-font w-full py-1.5 text-xs font-bold bg-white/90 hover:bg-white border rounded-full"
          >
            🔀 Shuffle Quote
          </button>
        </div>

        <figcaption className="p-3 text-center font-medium">
          {drawing.caption} — Bookmark
        </figcaption>
        <div className="flex border-t">
          <button
            onClick={handlePrint}
            className="heading-font flex-1 py-2 bg-purple-500 hover:bg-purple-600 text-white font-bold"
          >
            🖨️ Print (x3)
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
