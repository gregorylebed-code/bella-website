import Clouds from "../Clouds";
import NavBar from "../NavBar";
import EmptyState from "../EmptyState";
import { bellaTranslator, wordsSayTooMuch } from "../content";

export default function BellaTranslatorPage() {
  return (
    <main className="relative flex-1">
      <Clouds />
      <div className="relative z-10 pt-10">
        <NavBar />
      </div>

      <section className="relative z-10 max-w-3xl mx-auto px-4 py-10">
        <h2 className="heading-font text-3xl font-bold text-black drop-shadow mb-6 text-center">
          The Bella Translator
        </h2>
        <p className="text-center text-foreground/70 font-medium mb-8">
          My own personal dictionary. Now you'll understand me a little better. 📖
        </p>

        {bellaTranslator.length === 0 ? (
          <EmptyState text="No words yet, check back soon!" />
        ) : (
          <div className="flex flex-col gap-4">
            {bellaTranslator.map((entry) => (
              <div key={entry.word} className="card p-5">
                <h3 className="heading-font text-xl font-bold text-purple-600">
                  "{entry.word}"
                </h3>
                <p className="leading-relaxed mt-1">{entry.meaning}</p>
              </div>
            ))}
          </div>
        )}

        {wordsSayTooMuch.length > 0 && (
          <div className="mt-10">
            <h3 className="heading-font text-2xl font-bold text-black drop-shadow mb-2 text-center">
              Words I Say Too Much
            </h3>
            <p className="text-center text-foreground/70 font-medium mb-4">
              Self-aware and proud of it. 😅
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {wordsSayTooMuch.map((word) => (
                <span
                  key={word}
                  className="heading-font text-lg font-bold px-5 py-2 rounded-full bg-white/90 shadow-md text-purple-600"
                >
                  {word}
                </span>
              ))}
            </div>
          </div>
        )}
      </section>

      <footer className="relative z-10 text-center py-8 text-blue-600 font-medium">
        Made with love by Bella
      </footer>
    </main>
  );
}
