import Clouds from "../Clouds";
import NavBar from "../NavBar";
import EmptyState from "../EmptyState";
import { showAndTell } from "../content";

export default function ShowAndTellPage() {
  return (
    <main className="relative flex-1">
      <Clouds />
      <div className="relative z-10 pt-10">
        <NavBar />
      </div>

      <section className="relative z-10 max-w-3xl mx-auto px-4 py-10">
        <h2 className="heading-font text-3xl font-bold text-black drop-shadow mb-6 text-center">
          Show and Tell
        </h2>
        <p className="text-center text-foreground/70 font-medium mb-8">
          What I'm currently into! Check back, this changes all the time. ✨
        </p>

        {showAndTell.length === 0 ? (
          <EmptyState text="Nothing to show yet, check back soon!" />
        ) : (
          <div className="flex flex-col gap-5">
            {showAndTell.map((item) => (
              <div key={item.category} className="card p-6 flex flex-col sm:flex-row items-center gap-5">
                {item.photo ? (
                  <img
                    src={item.photo}
                    alt={item.title}
                    className="w-28 h-28 rounded-2xl object-cover shadow-md shrink-0"
                  />
                ) : (
                  <div className="w-28 h-28 rounded-2xl bg-white/70 shadow-md flex items-center justify-center text-5xl shrink-0">
                    {item.emoji}
                  </div>
                )}
                <div className="text-center sm:text-left">
                  <p className="text-sm text-foreground/60 font-bold uppercase tracking-wide">
                    {item.category}
                  </p>
                  <h3 className="heading-font text-xl font-bold mt-1">
                    {item.emoji} {item.title}
                  </h3>
                  <p className="leading-relaxed mt-2">{item.blurb}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <footer className="relative z-10 text-center py-8 text-blue-600 font-medium">
        Made with love by Bella
      </footer>
    </main>
  );
}
