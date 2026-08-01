import Clouds from "./Clouds";
import Rainbow from "./Rainbow";
import YouTubeFacade from "./YouTubeFacade";
import {
  siteName,
  tagline,
  photos,
  drawings,
  stories,
  blogPosts,
  tidbits,
  tidbitsFaq,
  videos,
  youtubeChannelUrl,
  youtubeChannelName,
} from "./content";

export default function Home() {
  return (
    <main className="relative flex-1">
      <Clouds />

      <section className="relative z-10 flex flex-col items-center text-center pt-16 pb-10 px-4">
        <Rainbow width={280} />
        <h1 className="heading-font text-5xl sm:text-6xl font-extrabold text-white drop-shadow-[0_3px_0_rgba(0,0,0,0.1)] mt-4">
          {siteName}
        </h1>
        <p className="mt-3 text-lg sm:text-xl text-black font-semibold drop-shadow">
          {tagline}
        </p>
        {youtubeChannelUrl && (
          <a
            href={youtubeChannelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="heading-font mt-5 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-500 hover:bg-red-600 text-white text-lg font-bold shadow-md hover:scale-105 transition-transform"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white" aria-hidden="true">
              <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.5V8.5L15.8 12l-6.2 3.5Z" />
            </svg>
            Watch {youtubeChannelName} on YouTube
          </a>
        )}
      </section>

      <nav className="relative z-10 flex flex-wrap justify-center gap-3 px-4 pb-10">
        {[
          ["Pictures", "#pictures"],
          ["Drawings", "#drawings"],
          ["Stories", "#stories"],
          ["Blog", "#blog"],
          ["Tidbits: Autism and More", "#tidbits"],
          ["Videos", "#videos"],
        ].map(([label, href]) => (
          <a
            key={href}
            href={href}
            className="heading-font px-5 py-2 rounded-full bg-white/90 hover:bg-white text-lg font-bold shadow-md hover:scale-105 transition-transform"
          >
            {label}
          </a>
        ))}
      </nav>

      <section id="pictures" className="relative z-10 max-w-5xl mx-auto px-4 py-10">
        <h2 className="heading-font text-3xl font-bold text-black drop-shadow mb-6 text-center">
          Pictures
        </h2>
        {photos.length === 0 ? (
          <EmptyState text="No pictures yet, check back soon!" />
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {photos.map((p) => (
              <figure key={p.src} className="card overflow-hidden">
                <img src={p.src} alt={p.caption} className="w-full aspect-square object-cover" />
                <figcaption className="p-2 text-sm text-center font-medium">{p.caption}</figcaption>
              </figure>
            ))}
          </div>
        )}
      </section>

      <section id="drawings" className="relative z-10 max-w-5xl mx-auto px-4 py-10">
        <h2 className="heading-font text-3xl font-bold text-black drop-shadow mb-6 text-center">
          Drawings
        </h2>
        {drawings.length === 0 ? (
          <EmptyState text="No drawings yet, check back soon!" />
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {drawings.map((d) => (
              <figure key={d.src} className="card overflow-hidden">
                <img src={d.src} alt={d.caption} className="w-full aspect-square object-cover" />
                <figcaption className="p-2 text-sm text-center font-medium">{d.caption}</figcaption>
              </figure>
            ))}
          </div>
        )}
      </section>

      <section id="stories" className="relative z-10 max-w-3xl mx-auto px-4 py-10">
        <h2 className="heading-font text-3xl font-bold text-black drop-shadow mb-6 text-center">
          Stories
        </h2>
        {stories.length === 0 ? (
          <EmptyState text="No stories yet, check back soon!" />
        ) : (
          <div className="flex flex-col gap-6">
            {stories.map((s) => (
              <article key={s.title} className="card p-6">
                <h3 className="heading-font text-2xl font-bold mb-2">{s.title}</h3>
                <p className="whitespace-pre-line leading-relaxed">{s.text}</p>
              </article>
            ))}
          </div>
        )}
      </section>

      <section id="blog" className="relative z-10 max-w-3xl mx-auto px-4 py-10">
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
              </article>
            ))}
          </div>
        )}
      </section>

      <section id="tidbits" className="relative z-10 max-w-3xl mx-auto px-4 py-10">
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

      <section id="videos" className="relative z-10 max-w-5xl mx-auto px-4 py-10">
        <h2 className="heading-font text-3xl font-bold text-black drop-shadow mb-6 text-center">
          Videos
        </h2>
        {videos.length === 0 ? (
          <EmptyState text="No videos yet, check back soon!" />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {videos.map((v) => (
              <YouTubeFacade key={v.id} id={v.id} title={v.title} />
            ))}
          </div>
        )}
      </section>

      <footer className="relative z-10 text-center py-8 text-white/90 font-medium">
        Made with love by Bella
      </footer>
    </main>
  );
}

function EmptyState({ text }: { text: string }) {
  return (
    <div className="card p-8 text-center text-foreground/60 font-medium">
      {text}
    </div>
  );
}
