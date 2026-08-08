import Clouds from "./Clouds";
import Rainbow from "./Rainbow";
import NavBar from "./NavBar";
import Guestbook from "./Guestbook";
import { siteName, tagline, youtubeChannelUrl, youtubeChannelName } from "./content";

export const dynamic = "force-dynamic";

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

      <Guestbook />

      <NavBar />

      <footer className="relative z-10 text-center py-8 text-blue-600 font-medium">
        Made with love by Bella
      </footer>
    </main>
  );
}
