import Clouds from "../Clouds";
import NavBar from "../NavBar";
import EmptyState from "../EmptyState";
import { kindnessChallenges } from "../content";
import ChallengeGenerator from "./ChallengeGenerator";

export default function KindnessChallengePage() {
  return (
    <main className="relative flex-1">
      <Clouds />
      <div className="relative z-10 pt-10">
        <NavBar />
      </div>

      <section className="relative z-10 max-w-3xl mx-auto px-4 py-10">
        <h2 className="heading-font text-3xl font-bold text-black drop-shadow mb-6 text-center">
          Kindness Challenge
        </h2>
        <p className="text-center text-foreground/70 font-medium mb-8">
          Small acts of kindness to spread love and joy. Click for a challenge and go do it! 💛
        </p>

        {kindnessChallenges.length === 0 ? (
          <EmptyState text="No challenges yet, check back soon!" />
        ) : (
          <ChallengeGenerator challenges={kindnessChallenges} />
        )}
      </section>

      <footer className="relative z-10 text-center py-8 text-blue-600 font-medium">
        Made with love by Bella
      </footer>
    </main>
  );
}
