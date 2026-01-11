import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <article>
        <h1 className="font-heading text-title-massive font-bold mb-8">
          404.
        </h1>
        <div className="font-body text-base text-foreground leading-relaxed">
          <p className="mb-6">
            This page doesn't exist. Maybe it never did, or maybe I deleted it
            because it wasn't good enough.
          </p>
          <p className="mb-6">
            <Link
              href="/"
              className="prose-link"
            >
              Go back home
            </Link>
          </p>
        </div>
      </article>
    </main>
  );
}
