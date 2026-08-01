import Clouds from "../Clouds";
import NavBar from "../NavBar";
import EmptyState from "../EmptyState";
import RandomDrawingButton from "./RandomDrawingButton";
import { drawings } from "../content";

export default function DrawingsPage() {
  return (
    <main className="relative flex-1">
      <Clouds />
      <div className="relative z-10 pt-10">
        <NavBar />
      </div>

      <section className="relative z-10 max-w-5xl mx-auto px-4 py-10">
        <h2 className="heading-font text-3xl font-bold text-black drop-shadow mb-6 text-center">
          Drawings
        </h2>
        {drawings.length === 0 ? (
          <EmptyState text="No drawings yet, check back soon!" />
        ) : (
          <>
          <RandomDrawingButton drawings={drawings} />
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {drawings.map((d) => (
              <figure key={d.src} className="card overflow-hidden">
                <img src={d.src} alt={d.caption} className="w-full aspect-square object-cover" />
                <figcaption className="p-2 text-sm text-center font-medium">{d.caption}</figcaption>
              </figure>
            ))}
          </div>
          </>
        )}
      </section>

      <footer className="relative z-10 text-center py-8 text-white/90 font-medium">
        Made with love by Bella
      </footer>
    </main>
  );
}
