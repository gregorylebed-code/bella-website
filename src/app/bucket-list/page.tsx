import Clouds from "../Clouds";
import NavBar from "../NavBar";
import EmptyState from "../EmptyState";
import { bucketList } from "../content";

const sections: { key: keyof typeof bucketList; label: string; emoji: string }[] = [
  { key: "food", label: "Food", emoji: "🍽️" },
  { key: "life", label: "Life", emoji: "🌈" },
  { key: "travel", label: "Travel", emoji: "✈️" },
];

export default function BucketListPage() {
  return (
    <main className="relative flex-1">
      <Clouds />
      <div className="relative z-10 pt-10">
        <NavBar />
      </div>

      <section className="relative z-10 max-w-3xl mx-auto px-4 py-10">
        <h2 className="heading-font text-3xl font-bold text-black drop-shadow mb-6 text-center">
          Bucket List
        </h2>

        <div className="flex flex-col gap-8">
          {sections.map(({ key, label, emoji }) => {
            const items = bucketList[key];
            return (
              <div key={key}>
                <h3 className="heading-font text-2xl font-bold mb-4">
                  {emoji} {label}
                </h3>
                {items.length === 0 ? (
                  <EmptyState text={`No ${label.toLowerCase()} goals added yet, check back soon!`} />
                ) : (
                  <div className="card p-4">
                    <ul className="flex flex-col gap-2">
                      {items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm border-b border-black/10 pb-2 last:border-0 last:pb-0"
                        >
                          <span>{emoji}</span>
                          <span className="font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <footer className="relative z-10 text-center py-8 text-blue-600 font-medium">
        Made with love by Bella
      </footer>
    </main>
  );
}
