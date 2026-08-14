import Clouds from "../Clouds";
import NavBar from "../NavBar";
import EmptyState from "../EmptyState";
import { pets } from "../content";

export default function PetsPage() {
  return (
    <main className="relative flex-1">
      <Clouds />
      <div className="relative z-10 pt-10">
        <NavBar />
      </div>

      <section className="relative z-10 max-w-3xl mx-auto px-4 py-10">
        <h2 className="heading-font text-3xl font-bold text-black drop-shadow mb-6 text-center">
          Pet Corner
        </h2>

        {pets.length === 0 ? (
          <EmptyState text="No pets added yet, check back soon!" />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {pets.map((pet) => (
              <div key={pet.name} className="card p-6 flex flex-col items-center text-center gap-3">
                {pet.photo ? (
                  <img
                    src={pet.photo}
                    alt={pet.name}
                    className="w-32 h-32 rounded-full object-cover shadow-md"
                  />
                ) : (
                  <div className="w-32 h-32 rounded-full bg-white/70 shadow-md flex items-center justify-center text-5xl">
                    🐾
                  </div>
                )}
                <h3 className="heading-font text-xl font-bold">{pet.name}</h3>
                <p className="text-sm text-foreground/60 font-medium">{pet.type}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {pet.traits.map((trait) => (
                    <span
                      key={trait}
                      className="text-xs font-bold px-3 py-1 rounded-full bg-purple-100 text-purple-700"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
                <div className="w-full text-left text-sm mt-2">
                  <p className="font-bold text-green-700">
                    Likes: <span className="font-medium text-foreground">{pet.likes.join(", ")}</span>
                  </p>
                  <p className="font-bold text-red-500 mt-1">
                    Dislikes: <span className="font-medium text-foreground">{pet.dislikes.join(", ")}</span>
                  </p>
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
