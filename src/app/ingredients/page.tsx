import Clouds from "../Clouds";
import NavBar from "../NavBar";
import EmptyState from "../EmptyState";
import { ingredients } from "../content";

export default function IngredientsPage() {
  return (
    <main className="relative flex-1">
      <Clouds />
      <div className="relative z-10 pt-10">
        <NavBar />
      </div>

      <section className="relative z-10 max-w-3xl mx-auto px-4 py-10">
        <h2 className="heading-font text-3xl font-bold text-black drop-shadow mb-6 text-center">
          Ingredients I Can&apos;t Live Without
        </h2>
        <p className="text-center text-foreground/70 font-medium mb-8">
          My pantry MVPs, the stuff I always have on hand. 🧑‍🍳
        </p>

        {ingredients.length === 0 ? (
          <EmptyState text="Nothing here yet, check back soon!" />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {ingredients.map((item) => (
              <div key={item.name} className="card p-6 flex items-center gap-5">
                {item.photo ? (
                  <img
                    src={item.photo}
                    alt={item.name}
                    className="w-20 h-20 rounded-2xl object-cover shadow-md shrink-0"
                  />
                ) : (
                  <div className="w-20 h-20 rounded-2xl bg-white/70 shadow-md flex items-center justify-center text-4xl shrink-0">
                    {item.emoji}
                  </div>
                )}
                <div>
                  <h3 className="heading-font text-xl font-bold">
                    {item.emoji} {item.name}
                  </h3>
                  <p className="leading-relaxed mt-2">{item.note}</p>
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
