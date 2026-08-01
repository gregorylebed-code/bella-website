import Clouds from "../Clouds";
import NavBar from "../NavBar";
import EmptyState from "../EmptyState";
import { photos } from "../content";

export default function PicturesPage() {
  return (
    <main className="relative flex-1">
      <Clouds />
      <div className="relative z-10 pt-10">
        <NavBar />
      </div>

      <section className="relative z-10 max-w-5xl mx-auto px-4 py-10">
        <h2 className="heading-font text-3xl font-bold text-black drop-shadow mb-6 text-center">
          Pictures
        </h2>
        {photos.length === 0 ? (
          <EmptyState text="No pictures yet, check back soon!" />
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {photos.map((p) => (
              <figure key={p.src} className="card overflow-hidden">
                <img src={p.src} alt={p.caption} className="w-full aspect-square object-cover" />
                <figcaption className="p-2 text-sm text-center font-medium">{p.caption}</figcaption>
              </figure>
            ))}
          </div>
        )}
      </section>

      <footer className="relative z-10 text-center py-8 text-white/90 font-medium">
        Made with love by Bella
      </footer>
    </main>
  );
}
