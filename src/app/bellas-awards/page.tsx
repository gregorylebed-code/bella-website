import Clouds from "../Clouds";
import NavBar from "../NavBar";
import EmptyState from "../EmptyState";
import { bellasAwards } from "../content";

export default function BellasAwardsPage() {
  return (
    <main className="relative flex-1">
      <Clouds />
      <div className="relative z-10 pt-10">
        <NavBar />
      </div>

      <section className="relative z-10 max-w-3xl mx-auto px-4 py-10">
        <h2 className="heading-font text-3xl font-bold text-black drop-shadow mb-6 text-center">
          Bella's Awards
        </h2>
        <p className="text-center text-foreground/70 font-medium mb-8">
          The most official, totally real awards show for the people, pets, and snacks in my life. 🏆
        </p>

        {bellasAwards.length === 0 ? (
          <EmptyState text="No awards yet, check back soon!" />
        ) : (
          <div className="flex flex-col gap-4">
            {bellasAwards.map((award) => (
              <div key={award.category} className="card p-6 text-center">
                <p className="text-sm text-foreground/60 font-bold uppercase tracking-wide">
                  {award.category}
                </p>
                <h3 className="heading-font text-2xl font-bold mt-2">
                  {award.emoji} {award.winner}
                </h3>
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
