import { cookies } from "next/headers";
import Clouds from "../Clouds";
import NavBar from "../NavBar";
import EmptyState from "../EmptyState";
import { supabase } from "@/lib/supabase";
import { login, logout, answerQuestion } from "./actions";
import DeleteMessageButton from "./DeleteMessageButton";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
export const revalidate = 0;

export default async function AdminPage() {
  const cookieStore = await cookies();
  const isLoggedIn =
    cookieStore.get("bella-admin")?.value === process.env.ADMIN_PASSWORD;

  return (
    <main className="relative flex-1">
      <Clouds />
      <div className="relative z-10 pt-10">
        <NavBar />
      </div>

      <section className="relative z-10 max-w-3xl mx-auto px-4 py-10">
        <h2 className="heading-font text-3xl font-bold text-black drop-shadow mb-6 text-center">
          Admin
        </h2>

        {!isLoggedIn ? (
          <div className="card p-6 max-w-sm mx-auto">
            <form action={login} className="flex flex-col gap-3">
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                className="w-full px-5 py-2 rounded-full bg-white/90 shadow-sm font-medium focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <button
                type="submit"
                className="heading-font px-6 py-2 rounded-full bg-purple-500 hover:bg-purple-600 text-white font-bold shadow-md hover:scale-105 transition-transform"
              >
                Log In
              </button>
            </form>
          </div>
        ) : (
          <AdminData />
        )}
      </section>

      <footer className="relative z-10 text-center py-8 text-blue-600 font-medium">
        Made with love by Bella
      </footer>
    </main>
  );
}

async function AdminData() {
  const [{ data: emails }, { data: messages }, { data: questions }] = await Promise.all([
    supabase
      .from("email_signups")
      .select("email, created_at")
      .order("created_at", { ascending: false }),
    supabase
      .from("messages")
      .select("id, name, message, created_at")
      .order("created_at", { ascending: false }),
    supabase
      .from("questions")
      .select("id, name, question, answer, created_at")
      .order("created_at", { ascending: false }),
  ]);

  const pendingQuestions = questions?.filter((q) => !q.answer) ?? [];
  const answeredQuestions = questions?.filter((q) => q.answer) ?? [];

  return (
    <div className="flex flex-col gap-8">
      <form action={logout} className="flex justify-end">
        <button
          type="submit"
          className="heading-font px-5 py-1.5 rounded-full bg-white/90 hover:bg-white text-sm font-bold shadow-md"
        >
          Log Out
        </button>
      </form>

      <div>
        <h3 className="heading-font text-2xl font-bold mb-4">
          Email Signups ({emails?.length ?? 0})
        </h3>
        {!emails || emails.length === 0 ? (
          <EmptyState text="No email signups yet." />
        ) : (
          <div className="card p-4">
            <ul className="flex flex-col gap-2">
              {emails.map((e) => (
                <li
                  key={e.email}
                  className="flex justify-between text-sm border-b border-black/10 pb-2 last:border-0 last:pb-0"
                >
                  <span className="font-medium">{e.email}</span>
                  <span className="text-foreground/60">
                    {new Date(e.created_at).toLocaleDateString()}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div>
        <h3 className="heading-font text-2xl font-bold mb-4">
          Guestbook Messages ({messages?.length ?? 0})
        </h3>
        {!messages || messages.length === 0 ? (
          <EmptyState text="No messages yet." />
        ) : (
          <div className="flex flex-col gap-3">
            {messages.map((m) => (
              <div key={m.id} className="card p-4 flex justify-between items-start gap-4">
                <div>
                  <p className="leading-relaxed">{m.message}</p>
                  <p className="text-sm text-foreground/60 font-medium mt-2">
                    — {m.name} · {new Date(m.created_at).toLocaleDateString()}
                  </p>
                </div>
                <DeleteMessageButton id={m.id} />
              </div>
            ))}
          </div>
        )}
      </div>

      <div>
        <h3 className="heading-font text-2xl font-bold mb-4">
          Questions to Answer ({pendingQuestions.length})
        </h3>
        {pendingQuestions.length === 0 ? (
          <EmptyState text="No pending questions." />
        ) : (
          <div className="flex flex-col gap-3">
            {pendingQuestions.map((q) => (
              <div key={q.id} className="card p-4">
                <p className="leading-relaxed font-medium">{q.question}</p>
                <p className="text-sm text-foreground/60 mt-1 mb-3">
                  {q.name ? `— ${q.name} · ` : ""}
                  {new Date(q.created_at).toLocaleDateString()}
                </p>
                <form action={answerQuestion} className="flex flex-col gap-2">
                  <input type="hidden" name="id" value={q.id} />
                  <textarea
                    name="answer"
                    placeholder="Write your answer..."
                    required
                    rows={2}
                    className="w-full px-4 py-2 rounded-2xl bg-white/90 shadow-sm font-medium focus:outline-none focus:ring-2 focus:ring-purple-400"
                  />
                  <button
                    type="submit"
                    className="heading-font self-start px-5 py-1.5 rounded-full bg-purple-500 hover:bg-purple-600 text-white text-sm font-bold shadow-md hover:scale-105 transition-transform"
                  >
                    Post Answer
                  </button>
                </form>
              </div>
            ))}
          </div>
        )}
      </div>

      <div>
        <h3 className="heading-font text-2xl font-bold mb-4">
          Answered Questions ({answeredQuestions.length})
        </h3>
        {answeredQuestions.length === 0 ? (
          <EmptyState text="No answered questions yet." />
        ) : (
          <div className="flex flex-col gap-3">
            {answeredQuestions.map((q) => (
              <div key={q.id} className="card p-4">
                <p className="leading-relaxed font-medium">{q.question}</p>
                <p className="leading-relaxed text-foreground/80 mt-2">{q.answer}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
