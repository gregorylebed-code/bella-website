import Clouds from "../Clouds";
import NavBar from "../NavBar";
import EmptyState from "../EmptyState";
import { supabase } from "@/lib/supabase";
import { submitQuestion } from "../actions";

export const dynamic = "force-dynamic";

export default async function AskPage() {
  const { data: questions } = await supabase
    .from("questions")
    .select("id, name, question, answer, answered_at")
    .not("answer", "is", null)
    .order("answered_at", { ascending: false });

  return (
    <main className="relative flex-1">
      <Clouds />
      <div className="relative z-10 pt-10">
        <NavBar />
      </div>

      <section className="relative z-10 max-w-3xl mx-auto px-4 py-10">
        <h2 className="heading-font text-3xl font-bold text-black drop-shadow mb-6 text-center">
          Ask Bella
        </h2>
        <p className="text-center text-foreground/70 mb-6">
          Got a question for me? Send it in, I&apos;ll answer some of my favorites here!
        </p>

        <div className="card p-6 mb-8">
          <h3 className="heading-font text-xl font-bold mb-3">Ask a question 💭</h3>
          <form action={submitQuestion} className="flex flex-col gap-3">
            <input
              type="text"
              name="name"
              placeholder="Your name (optional)"
              className="w-full px-5 py-2 rounded-full bg-white/90 shadow-sm font-medium focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <textarea
              name="question"
              placeholder="What do you want to know?"
              required
              rows={3}
              className="w-full px-5 py-3 rounded-2xl bg-white/90 shadow-sm font-medium focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <button
              type="submit"
              className="heading-font self-start px-6 py-2 rounded-full bg-purple-500 hover:bg-purple-600 text-white font-bold shadow-md hover:scale-105 transition-transform"
            >
              Send Question
            </button>
          </form>
        </div>

        {!questions || questions.length === 0 ? (
          <EmptyState text="No answered questions yet, check back soon!" />
        ) : (
          <div className="flex flex-col gap-4">
            {questions.map((q) => (
              <div key={q.id} className="card p-5">
                <p className="heading-font font-bold mb-2">
                  {q.question}
                  {q.name && <span className="text-foreground/50 font-medium"> — {q.name}</span>}
                </p>
                <p className="leading-relaxed">{q.answer}</p>
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
