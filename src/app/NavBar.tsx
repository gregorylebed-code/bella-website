import { sectionUpdates, blogPosts } from "./content";

const links: [string, string][] = [
  ["Home", "/"],
  ["About", "/about"],
  ["Pictures", "/pictures"],
  ["Drawings", "/drawings"],
  ["Blog", "/blog"],
  ["Recipes", "/recipes"],
  ["Tidbits", "/tidbits"],
  ["Videos", "/videos"],
  ["Affirmations", "/affirmations"],
  ["Quiz", "/quiz"],
  ["Ask Bella", "/ask"],
];

const NEW_WINDOW_DAYS = 14;

function isRecent(dateStr: string | undefined): boolean {
  if (!dateStr) return false;
  const updated = new Date(dateStr);
  if (Number.isNaN(updated.getTime())) return false;
  const daysAgo = (Date.now() - updated.getTime()) / (1000 * 60 * 60 * 24);
  return daysAgo >= 0 && daysAgo <= NEW_WINDOW_DAYS;
}

function isNew(label: string): boolean {
  if (label === "Blog") return isRecent(blogPosts[0]?.date);
  return isRecent(sectionUpdates[label]);
}

export default function NavBar() {
  return (
    <nav className="relative z-10 grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-3 px-4 pb-10 max-w-md sm:max-w-none mx-auto">
      {links.map(([label, href]) => (
        <a
          key={href}
          href={href}
          className="heading-font relative px-5 py-2 rounded-full bg-white/90 hover:bg-white text-lg font-bold shadow-md hover:scale-105 transition-transform text-center"
        >
          {label}
          {isNew(label) && (
            <span className="absolute -top-2 -right-2 heading-font text-[10px] px-2 py-0.5 rounded-full bg-pink-500 text-white shadow-sm">
              NEW
            </span>
          )}
        </a>
      ))}
    </nav>
  );
}
