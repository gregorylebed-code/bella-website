import Clouds from "../Clouds";
import NavBar from "../NavBar";
import EmptyState from "../EmptyState";
import PostReactions from "../PostReactions";
import { blogPosts } from "../content";

export default function BlogPage() {
  return (
    <main className="relative flex-1">
      <Clouds />
      <div className="relative z-10 pt-10">
        <NavBar />
      </div>

      <section className="relative z-10 max-w-3xl mx-auto px-4 py-10">
        <h2 className="heading-font text-3xl font-bold text-black drop-shadow mb-6 text-center">
          Blog
        </h2>
        {blogPosts.length === 0 ? (
          <EmptyState text="No blog posts yet, check back soon!" />
        ) : (
          <div className="flex flex-col gap-6">
            {blogPosts.map((post) => (
              <article key={post.title} className="card p-6">
                <h3 className="heading-font text-2xl font-bold mb-1">{post.title}</h3>
                <p className="text-sm text-foreground/60 font-medium mb-3">{post.date}</p>
                <p className="whitespace-pre-line leading-relaxed">{post.text}</p>
                <PostReactions postId={post.title} />
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
