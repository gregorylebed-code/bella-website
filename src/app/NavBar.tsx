const links: [string, string][] = [
  ["Home", "/"],
  ["About", "/about"],
  ["Pictures", "/pictures"],
  ["Drawings", "/drawings"],
  ["Blog", "/blog"],
  ["Tidbits: Autism and More", "/tidbits"],
  ["Videos", "/videos"],
  ["Guestbook", "/guestbook"],
];

export default function NavBar() {
  return (
    <nav className="relative z-10 flex flex-wrap justify-center gap-3 px-4 pb-10">
      {links.map(([label, href]) => (
        <a
          key={href}
          href={href}
          className="heading-font px-5 py-2 rounded-full bg-white/90 hover:bg-white text-lg font-bold shadow-md hover:scale-105 transition-transform"
        >
          {label}
        </a>
      ))}
    </nav>
  );
}
