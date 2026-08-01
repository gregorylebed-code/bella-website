import Clouds from "../Clouds";
import NavBar from "../NavBar";
import { aboutPhoto, aboutIntro, quickFacts } from "../content";

export default function AboutPage() {
  return (
    <main className="relative flex-1">
      <Clouds />
      <div className="relative z-10 pt-10">
        <NavBar />
      </div>

      <section className="relative z-10 max-w-3xl mx-auto px-4 py-10">
        <h2 className="heading-font text-3xl font-bold text-black drop-shadow mb-6 text-center">
          About Bella
        </h2>

        <div className="card p-6 flex flex-col items-center text-center gap-4">
          {aboutPhoto && (
            <img
              src={aboutPhoto}
              alt="Bella"
              className="w-40 h-40 rounded-full object-cover shadow-md"
            />
          )}
          <p className="leading-relaxed">{aboutIntro}</p>
        </div>

        {quickFacts.length > 0 && (
          <div className="mt-8">
            <h3 className="heading-font text-2xl font-bold text-black drop-shadow mb-4 text-center">
              Quick Facts
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {quickFacts.map((fact) => (
                <div key={fact} className="card p-4 font-medium">
                  🌈 {fact}
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      <footer className="relative z-10 text-center py-8 text-white/90 font-medium">
        Made with love by Bella
      </footer>
    </main>
  );
}
