import Clouds from "../Clouds";
import NavBar from "../NavBar";
import EmptyState from "../EmptyState";
import YouTubeFacade from "../YouTubeFacade";
import { bistroMenu, youtubeChannelUrl, youtubeChannelName } from "../content";

export default function BellasBistroPage() {
  const categories = new Map<string, typeof bistroMenu>();
  for (const item of bistroMenu) {
    const existing = categories.get(item.category);
    if (existing) {
      existing.push(item);
    } else {
      categories.set(item.category, [item]);
    }
  }
  const categoryNames = Array.from(categories.keys());

  return (
    <main className="relative flex-1">
      <Clouds />
      <div className="relative z-10 pt-10">
        <NavBar />
      </div>

      <section className="relative z-10 max-w-3xl mx-auto px-4 py-10">
        <h2 className="heading-font text-3xl font-bold text-black drop-shadow mb-1 text-center">
          Bella&apos;s Bistro Menu
        </h2>
        <p className="text-center text-foreground/60 font-medium mb-8">
          Dishes from the channel, made by chef Bella herself
        </p>

        {categoryNames.length === 0 ? (
          <EmptyState text="Menu's still cooking, check back soon!" />
        ) : (
          <div className="flex flex-col gap-10">
            {categoryNames.map((category) => (
              <div key={category}>
                <h3 className="heading-font text-2xl font-bold mb-4 text-center">
                  {category}
                </h3>
                <div className="flex flex-col gap-4">
                  {categories.get(category)!.map((item) => (
                    <div key={item.name} className="card p-5">
                      <div className="flex items-baseline justify-between gap-4 border-b border-dashed border-black/15 pb-2 mb-2">
                        <h4 className="heading-font text-lg font-bold">{item.name}</h4>
                      </div>
                      <p className="leading-relaxed text-foreground/80">{item.blurb}</p>
                      {item.videoId && (
                        <div className="mt-4 max-w-xs">
                          <YouTubeFacade id={item.videoId} title={item.name} />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {youtubeChannelUrl && (
          <div className="text-center mt-10">
            <a
              href={youtubeChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="heading-font inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-500 hover:bg-red-600 text-white text-lg font-bold shadow-md hover:scale-105 transition-transform"
            >
              Watch {youtubeChannelName} on YouTube
            </a>
          </div>
        )}
      </section>

      <footer className="relative z-10 text-center py-8 text-blue-600 font-medium">
        Made with love by Bella
      </footer>
    </main>
  );
}
