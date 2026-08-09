// Turns a photo of a drawing into a black-and-white line-art style
// printable by darkening edges (Sobel-ish contrast) and flattening
// everything else to white. Not perfect line art, but good enough for
// a fun printable coloring page from a real drawing photo.
export function toColoringPage(canvas: HTMLCanvasElement, img: HTMLImageElement) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const w = img.naturalWidth;
  const h = img.naturalHeight;
  canvas.width = w;
  canvas.height = h;
  ctx.drawImage(img, 0, 0, w, h);

  const src = ctx.getImageData(0, 0, w, h);
  // Run edge detection per color channel instead of flattening to
  // luminance first. Pale, low-luminance-contrast colors like yellow
  // and tan barely move the luminance value against a white background,
  // so a luminance-only edge detector misses or mangles those outlines.
  // The blue channel especially still drops off hard for yellow/tan
  // against white, so taking the strongest edge across R, G, B catches
  // those cases while leaving darker colors (already strong in luminance)
  // unaffected.
  const channels = [0, 1, 2].map((c) => {
    const chan = new Float32Array(w * h);
    for (let i = 0; i < w * h; i++) chan[i] = src.data[i * 4 + c];
    return chan;
  });

  const out = ctx.createImageData(w, h);
  const gx = [-1, 0, 1, -2, 0, 2, -1, 0, 1];
  const gy = [-1, -2, -1, 0, 0, 0, 1, 2, 1];

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      let maxEdge = 0;
      if (x > 0 && x < w - 1 && y > 0 && y < h - 1) {
        for (const chan of channels) {
          let sx = 0;
          let sy = 0;
          let k = 0;
          for (let ky = -1; ky <= 1; ky++) {
            for (let kx = -1; kx <= 1; kx++) {
              const val = chan[(y + ky) * w + (x + kx)];
              sx += val * gx[k];
              sy += val * gy[k];
              k++;
            }
          }
          const edge = Math.sqrt(sx * sx + sy * sy);
          if (edge > maxEdge) maxEdge = edge;
        }
      }
      const isLine = maxEdge > 70;
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

// Loads an image and converts it to a coloring-page data URL using an
// off-screen canvas (no DOM element needed, safe to call in a loop).
export function drawingToColoringPageDataUrl(src: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const canvas = document.createElement("canvas");
      toColoringPage(canvas, img);
      resolve(canvas.toDataURL("image/png"));
    };
    img.onerror = reject;
    img.src = src;
  });
}
