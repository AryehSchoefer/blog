import type { Metadata } from "next";
import { Libre_Baskerville, IBM_Plex_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre-baskerville",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Typographic Titan",
  description: "A minimalist developer blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${libreBaskerville.variable} ${ibmPlexMono.variable}`}>
      <body className="font-body">
        <div className="max-w-container mx-auto px-container-x py-container-y">
          <header className="flex justify-between items-end mb-header-mb border-b-header border-border-dark pb-4">
            <Link
              href="/"
              className="font-heading text-title-site font-bold tracking-title text-foreground no-underline"
            >
              TYPOGRAPHIC TITAN
            </Link>
            <nav className="flex gap-6 flex-wrap">
              <Link
                href="/"
                className="font-body text-base font-semibold no-underline border-b-2 border-transparent text-foreground hover:border-foreground transition-colors"
              >
                Writing
              </Link>
              <Link
                href="/about"
                className="font-body text-base font-semibold no-underline border-b-2 border-transparent text-foreground hover:border-foreground transition-colors"
              >
                About
              </Link>
            </nav>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
