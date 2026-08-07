import Clouds from "../Clouds";
import NavBar from "../NavBar";
import EmptyState from "../EmptyState";
import { recipes } from "../content";

export default function RecipesPage() {
  return (
    <main className="relative flex-1">
      <Clouds />
      <div className="relative z-10 pt-10">
        <NavBar />
      </div>

      <section className="relative z-10 max-w-3xl mx-auto px-4 py-10">
        <h2 className="heading-font text-3xl font-bold text-black drop-shadow mb-6 text-center">
          Recipes
        </h2>
        {recipes.length === 0 ? (
          <EmptyState text="No recipes yet, check back soon!" />
        ) : (
          <div className="flex flex-col gap-6">
            {recipes.map((r) => (
              <article key={r.title} className="card p-6">
                {r.photo && (
                  <img
                    src={r.photo}
                    alt={r.title}
                    className="w-full aspect-video object-cover rounded-2xl mb-4"
                  />
                )}
                <h3 className="heading-font text-2xl font-bold mb-1">{r.title}</h3>
                {r.description && (
                  <p className="text-foreground/70 mb-4">{r.description}</p>
                )}

                <h4 className="heading-font font-bold mb-2">Ingredients</h4>
                <ul className="list-disc list-inside mb-4 space-y-1">
                  {r.ingredients.map((ing) => (
                    <li key={ing}>{ing}</li>
                  ))}
                </ul>

                <h4 className="heading-font font-bold mb-2">Steps</h4>
                <ol className="list-decimal list-inside space-y-1">
                  {r.steps.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
              </article>
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
