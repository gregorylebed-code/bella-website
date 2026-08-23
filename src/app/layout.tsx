import type { Metadata } from "next";
import { Baloo_2, Quicksand } from "next/font/google";
import "./globals.css";
import { siteName, tagline } from "./content";
import VisitorBadgeUnlocker from "./VisitorBadgeUnlocker";

const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: siteName,
  description: tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${baloo.variable} ${quicksand.variable} antialiased`}
    >
      <body className="flex flex-col">
        <VisitorBadgeUnlocker />
        {children}
      </body>
    </html>
  );
}
