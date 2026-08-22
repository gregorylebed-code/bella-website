import Clouds from "../Clouds";
import NavBar from "../NavBar";
import EmptyState from "../EmptyState";
import { bellasRulebook } from "../content";

export default function BellasRulebookPage() {
  return (
    <main className="relative flex-1">
      <Clouds />
      <div className="relative z-10 pt-10">
        <NavBar />
      </div>

      <section className="relative z-10 max-w-3xl mx-auto px-4 py-10">
        <h2 className="heading-font text-3xl font-bold text-black drop-shadow mb-6 text-center">
          Bella's Rulebook
        </h2>
        <p className="text-center text-foreground/70 font-medium mb-8">
          The rules I live by. 📖
        </p>

        {bellasRulebook.length === 0 ? (
          <EmptyState text="No rules yet, check back soon!" />
        ) : (
          <div className="flex flex-col gap-4">
            {bellasRulebook.map((rule, i) => (
              <div key={rule} className="card p-5 flex items-center gap-4">
                <span className="heading-font text-2xl font-bold text-purple-500 shrink-0">
                  {i + 1}
                </span>
                <p className="leading-relaxed font-medium">{rule}</p>
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
