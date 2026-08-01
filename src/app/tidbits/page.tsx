import Clouds from "../Clouds";
import NavBar from "../NavBar";
import EmptyState from "../EmptyState";
import { tidbits, tidbitsFaq } from "../content";

export default function TidbitsPage() {
  return (
    <main className="relative flex-1">
      <Clouds />
      <div className="relative z-10 pt-10">
        <NavBar />
      </div>

      <section className="relative z-10 max-w-3xl mx-auto px-4 py-10">
        <h2 className="heading-font text-3xl font-bold text-black drop-shadow mb-6 text-center">
          Tidbits: Autism and More
        </h2>
        {tidbits.length === 0 ? (
          <EmptyState text="No tidbits yet, check back soon!" />
        ) : (
          <div className="flex flex-col gap-6">
            {tidbits.map((t) => (
              <article key={t.title} className="card p-6">
                <h3 className="heading-font text-2xl font-bold mb-1">{t.title}</h3>
                <p className="text-sm text-foreground/60 font-medium mb-3">{t.date}</p>
                <p className="whitespace-pre-line leading-relaxed">{t.text}</p>
              </article>
            ))}
          </div>
        )}

        {tidbitsFaq.length > 0 && (
          <div className="mt-10">
            <h3 className="heading-font text-2xl font-bold text-black drop-shadow mb-6 text-center">
              FAQ
            </h3>
            <div className="flex flex-col gap-4">
              {tidbitsFaq.map((item) => (
                <div key={item.q} className="card p-5">
                  <p className="heading-font font-bold mb-2">{item.q}</p>
                  <p className="leading-relaxed">{item.a}</p>
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
