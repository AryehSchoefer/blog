import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Aryeh",
  description: "About Aryeh.",
};

export default function AboutPage() {
  return (
    <main>
      <article>
        <h1 className="font-heading text-title-massive font-bold mb-8">
          About Me.
        </h1>

        <div className="font-body text-base text-foreground leading-relaxed mb-12">
          <p className="mb-6">
            Hello. I am Aryeh. I am a software engineer who cares deeply about
            simplicity, performance, and the craft of building things that last.
          </p>
          <p className="mb-6">
            I have spent years working on distributed systems, developer tools,
            and the occasional side project that nobody asked for but I couldn't
            stop thinking about.
          </p>
        </div>

        <h2 className="font-heading text-heading-2 font-bold mt-12 mb-6">
          The Philosophy
        </h2>
        <div className="font-body text-base text-foreground leading-relaxed">
          <p className="mb-6">
            I believe the modern web has become bloated. Every click loads
            megabytes of JavaScript. Every page requires a dozen API calls.
            Every "simple" feature needs a constellation of microservices.
          </p>
          <p className="mb-6">
            This blog is my small protest. It's built with Next.js, SQLite, and
            a bit of hardcoded HTML because sometimes the best architecture is
            the simplest one. No external databases to manage. No complex
            deployment pipelines. Just code and content.
          </p>
        </div>

        <h2 className="font-heading text-heading-2 font-bold mt-12 mb-6">
          Current Stack
        </h2>
        <div className="font-body text-base text-foreground leading-relaxed">
          <ul className="list-square pl-6 mb-6">
            <li className="mb-2">
              <strong className="font-semibold">Languages:</strong> TypeScript,
              Go, Python, C
            </li>
            <li className="mb-2">
              <strong className="font-semibold">Editor:</strong> Neovim
            </li>
            <li className="mb-2">
              <strong className="font-semibold">Terminal:</strong> Ghostty +
              tmux
            </li>
            <li className="mb-2">
              <strong className="font-semibold">OS:</strong> macOS
            </li>
          </ul>
        </div>

        <h2 className="font-heading text-heading-2 font-bold mt-12 mb-6">
          Contact
        </h2>
        <div className="font-body text-base text-foreground leading-relaxed">
          <p className="mb-6">
            The best way to reach me is through{" "}
            <a href="mailto:aryeh.shmuel@googlemail.com" className="prose-link">
              Email
            </a>{" "}
            or{" "}
            <a href="https://www.linkedin.com/in/aryeh-schoefer/" className="prose-link">
              LinkedIn
            </a>
            . I read every message, though I can't promise a timely response.
          </p>
        </div>
      </article>
    </main>
  );
}
