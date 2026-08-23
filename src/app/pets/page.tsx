import Clouds from "../Clouds";
import NavBar from "../NavBar";
import EmptyState from "../EmptyState";
import { pets, relativesPets } from "../content";
import PetCard from "./PetCard";
import MatchThePet from "./MatchThePet";

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
              <PetCard key={pet.name} pet={pet} />
            ))}
          </div>
        )}

        {pets.length > 0 && <MatchThePet pets={pets} />}

        {relativesPets.length > 0 && (
          <div className="mt-10">
            <h3 className="heading-font text-2xl font-bold text-black drop-shadow mb-6 text-center">
              Family's Pets
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relativesPets.map((pet) => (
                <PetCard key={pet.name} pet={pet} />
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
