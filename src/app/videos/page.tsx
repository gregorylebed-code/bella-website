import Clouds from "../Clouds";
import NavBar from "../NavBar";
import EmptyState from "../EmptyState";
import YouTubeFacade from "../YouTubeFacade";
import { videos } from "../content";

export default function VideosPage() {
  return (
    <main className="relative flex-1">
      <Clouds />
      <div className="relative z-10 pt-10">
        <NavBar />
      </div>

      <section className="relative z-10 max-w-5xl mx-auto px-4 py-10">
        <h2 className="heading-font text-3xl font-bold text-black drop-shadow mb-6 text-center">
          Videos
        </h2>
        {videos.length === 0 ? (
          <EmptyState text="No videos yet, check back soon!" />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {videos.map((v) => (
              <YouTubeFacade key={v.id} id={v.id} title={v.title} />
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
