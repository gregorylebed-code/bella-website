import Clouds from "../Clouds";
import NavBar from "../NavBar";
import EmptyState from "../EmptyState";
import { bellaScale, cookingFails } from "../content";

function RainbowScore({ rainbows }: { rainbows: number }) {
  return (
    <p className="text-lg" aria-label={`${rainbows} out of 10 rainbows`}>
      {"🌈".repeat(rainbows)}
      <span className="opacity-20">{"🌈".repeat(10 - rainbows)}</span>
    </p>
  );
}

export default function BellaScalePage() {
  return (
    <main className="relative flex-1">
      <Clouds />
      <div className="relative z-10 pt-10">
        <NavBar />
      </div>

      <section className="relative z-10 max-w-3xl mx-auto px-4 py-10">
        <h2 className="heading-font text-3xl font-bold text-black drop-shadow mb-6 text-center">
          The Bella Scale
        </h2>
        <p className="text-center text-foreground/70 font-medium mb-8">
          My official rating system, out of 10 rainbows. 🌈
        </p>

        {bellaScale.length === 0 ? (
          <EmptyState text="No ratings yet, check back soon!" />
        ) : (
          <div className="flex flex-col gap-4">
            {bellaScale.map((entry) => (
              <div key={entry.item} className="card p-5">
                <h3 className="heading-font text-lg font-bold">{entry.item}</h3>
                <RainbowScore rainbows={entry.rainbows} />
                <p className="leading-relaxed text-foreground/80 mt-1">{entry.note}</p>
              </div>
            ))}
          </div>
        )}

        {cookingFails.length > 0 && (
          <div className="mt-10">
            <h3 className="heading-font text-2xl font-bold text-black drop-shadow mb-2 text-center">
              My Cooking Fails (and What I Learned)
            </h3>
            <p className="text-center text-foreground/70 font-medium mb-6">
              Not every dish is a 10 rainbow dish. Here's the honest side of my kitchen. 🍳
            </p>
            <div className="flex flex-col gap-4">
              {cookingFails.map((fail) => (
                <div key={fail.title} className="card p-5">
                  <h4 className="heading-font text-lg font-bold">{fail.title}</h4>
                  <p className="leading-relaxed text-foreground/80 mt-1">
                    <span className="font-bold">What happened: </span>
                    {fail.whatHappened}
                  </p>
                  <p className="leading-relaxed text-foreground/80 mt-1">
                    <span className="font-bold">What I learned: </span>
                    {fail.whatILearned}
                  </p>
                </div>
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
