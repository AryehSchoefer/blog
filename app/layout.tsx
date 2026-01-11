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
  title: "Aryeh's Blog",
  description: "A minimalist developer blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${libreBaskerville.variable} ${ibmPlexMono.variable}`}>
      <body className="font-body antialiased">
        <div className="max-w-container mx-auto px-container-x py-container-y max-md:px-4 max-md:py-8">
          <header className="flex justify-between items-end mb-header-mb border-b-header border-border-dark pb-4 max-md:flex-col max-md:items-start max-md:gap-4">
            <div className="font-heading text-title-site font-bold tracking-title">
              <Link href="/" className="no-underline text-foreground">
                Aryeh's Blog
              </Link>
            </div>
            <nav className="flex gap-6 flex-wrap">
              <Link
                href="/about"
                className="font-body text-base font-semibold no-underline border-b-2 border-transparent text-foreground hover:border-foreground"
              >
                About Me
              </Link>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-base font-semibold no-underline border-b-2 border-transparent text-foreground hover:border-foreground"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-base font-semibold no-underline border-b-2 border-transparent text-foreground hover:border-foreground"
              >
                LinkedIn
              </a>
              <a
                href="mailto:hello@example.com"
                className="font-body text-base font-semibold no-underline border-b-2 border-transparent text-foreground hover:border-foreground"
              >
                Email
              </a>
            </nav>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
