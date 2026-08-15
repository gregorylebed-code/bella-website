import { sectionUpdates, blogPosts } from "./content";

const links: [string, string][] = [
  ["Home", "/"],
  ["About", "/about"],
  ["Pictures", "/pictures"],
  ["Drawings", "/drawings"],
  ["Pets", "/pets"],
  ["Bucket List", "/bucket-list"],
  ["Blog", "/blog"],
  ["Ausome Autism", "/tidbits"],
  ["Videos", "/videos"],
  ["Affirmations", "/affirmations"],
  ["Build Bella's Plate", "/plate-builder"],
  ["Kindness Challenge", "/kindness-challenge"],
  ["Guess That Fact", "/guess-that-fact"],
  ["Quiz", "/quiz"],
  ["Ask Bella", "/ask"],
];

function isRecent(dateStr: string | undefined): boolean {
  if (!dateStr) return false;
  const updated = new Date(dateStr);
  if (Number.isNaN(updated.getTime())) return false;
  const today = new Date();
  return (
    updated.getFullYear() === today.getFullYear() &&
    updated.getMonth() === today.getMonth() &&
    updated.getDate() === today.getDate()
  );
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
