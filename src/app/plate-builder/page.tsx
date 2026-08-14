import Clouds from "../Clouds";
import NavBar from "../NavBar";
import EmptyState from "../EmptyState";
import { plateBuilder } from "../content";
import PlateGenerator from "./PlateGenerator";

export default function PlateBuilderPage() {
  const { mains, sides, desserts } = plateBuilder;
  const isEmpty = mains.length === 0 || sides.length === 0 || desserts.length === 0;

  return (
    <main className="relative flex-1">
      <Clouds />
      <div className="relative z-10 pt-10">
        <NavBar />
      </div>

      <section className="relative z-10 max-w-3xl mx-auto px-4 py-10">
        <h2 className="heading-font text-3xl font-bold text-black drop-shadow mb-6 text-center">
          Build Bella's Plate
        </h2>
        <p className="text-center text-foreground/70 font-medium mb-8">
          A silly random meal, just for fun! Click for a new plate. 🍽️
        </p>

        {isEmpty ? (
          <EmptyState text="No plate options yet, check back soon!" />
        ) : (
          <PlateGenerator mains={mains} sides={sides} desserts={desserts} />
        )}
      </section>

      <footer className="relative z-10 text-center py-8 text-blue-600 font-medium">
        Made with love by Bella
      </footer>
    </main>
  );
}
