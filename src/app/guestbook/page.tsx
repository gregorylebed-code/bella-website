import Clouds from "../Clouds";
import NavBar from "../NavBar";
import EmptyState from "../EmptyState";
import { supabase } from "@/lib/supabase";
import { postMessage, signUpEmail, suggestDrawing } from "./actions";

export const dynamic = "force-dynamic";

export default async function GuestbookPage() {
  const { data: messages } = await supabase
    .from("messages")
    .select("id, name, message, created_at")
    .order("created_at", { ascending: false });

  return (
    <main className="relative flex-1">
      <Clouds />
      <div className="relative z-10 pt-10">
        <NavBar />
      </div>

      <section className="relative z-10 max-w-3xl mx-auto px-4 py-10">
        <h2 className="heading-font text-3xl font-bold text-black drop-shadow mb-6 text-center">
          Guestbook
        </h2>

        <div className="card p-6 mb-6">
          <h3 className="heading-font text-xl font-bold mb-3">Leave me a message! 💌</h3>
          <form action={postMessage} className="flex flex-col gap-3">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="w-full px-5 py-2 rounded-full bg-white/90 shadow-sm font-medium focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <textarea
              name="message"
              placeholder="Say hi!"
              required
              rows={3}
              className="w-full px-5 py-3 rounded-2xl bg-white/90 shadow-sm font-medium focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <button
              type="submit"
              className="heading-font self-start px-6 py-2 rounded-full bg-purple-500 hover:bg-purple-600 text-white font-bold shadow-md hover:scale-105 transition-transform"
            >
              Post Message
            </button>
          </form>
        </div>

        <div className="card p-6 mb-8">
          <h3 className="heading-font text-xl font-bold mb-3">Stay in touch! 📬</h3>
          <p className="text-sm text-foreground/70 mb-3">
            Want updates from me? Drop your email below.
          </p>
          <form action={signUpEmail} className="flex flex-wrap gap-3">
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              required
              className="flex-1 min-w-[200px] px-5 py-2 rounded-full bg-white/90 shadow-sm font-medium focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <button
              type="submit"
              className="heading-font px-6 py-2 rounded-full bg-pink-500 hover:bg-pink-600 text-white font-bold shadow-md hover:scale-105 transition-transform"
            >
              Sign Up
            </button>
          </form>
        </div>

        <div className="card p-6 mb-8">
          <h3 className="heading-font text-xl font-bold mb-3">Suggest a Drawing! 🎨</h3>
          <p className="text-sm text-foreground/70 mb-3">
            Got an idea for what I should draw next? Tell me!
          </p>
          <form action={suggestDrawing} className="flex flex-col gap-3">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="w-full px-5 py-2 rounded-full bg-white/90 shadow-sm font-medium focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <textarea
              name="suggestion"
              placeholder="What should I draw?"
              required
              rows={2}
              className="w-full px-5 py-3 rounded-2xl bg-white/90 shadow-sm font-medium focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <button
              type="submit"
              className="heading-font self-start px-6 py-2 rounded-full bg-orange-400 hover:bg-orange-500 text-white font-bold shadow-md hover:scale-105 transition-transform"
            >
              Send Idea
            </button>
          </form>
        </div>

        {!messages || messages.length === 0 ? (
          <EmptyState text="No messages yet, be the first to say hi!" />
        ) : (
          <div className="flex flex-col gap-4">
            {messages.map((m) => (
              <div key={m.id} className="card p-4">
                <p className="leading-relaxed">{m.message}</p>
                <p className="text-sm text-foreground/60 font-medium mt-2">
                  — {m.name}
                </p>
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
