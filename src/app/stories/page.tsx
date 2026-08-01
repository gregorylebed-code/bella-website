import Clouds from "../Clouds";
import NavBar from "../NavBar";
import EmptyState from "../EmptyState";
import { stories } from "../content";

export default function StoriesPage() {
  return (
    <main className="relative flex-1">
      <Clouds />
      <div className="relative z-10 pt-10">
        <NavBar />
      </div>

      <section className="relative z-10 max-w-3xl mx-auto px-4 py-10">
        <h2 className="heading-font text-3xl font-bold text-black drop-shadow mb-6 text-center">
          Stories
        </h2>
        {stories.length === 0 ? (
          <EmptyState text="No stories yet, check back soon!" />
        ) : (
          <div className="flex flex-col gap-6">
            {stories.map((s) => (
              <article key={s.title} className="card p-6">
                <h3 className="heading-font text-2xl font-bold mb-2">{s.title}</h3>
                <p className="whitespace-pre-line leading-relaxed">{s.text}</p>
              </article>
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
