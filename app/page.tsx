import Link from "next/link";
import { db } from "@/db";
import { posts } from "@/db/schema";
import { desc } from "drizzle-orm";

async function getPosts() {
  return db.select().from(posts).orderBy(desc(posts.id)).all();
}

export default async function HomePage() {
  const allPosts = await getPosts();

  return (
    <main>
      {allPosts.map((post, index) => (
        <article
          key={post.id}
          className={`mb-14 pb-14 ${
            index < allPosts.length - 1 ? "border-b border-dashed border-border" : ""
          }`}
        >
          <header>
            <h1 className="font-heading text-title-list font-bold leading-tight mb-2">
              <Link
                href={`/posts/${post.slug}`}
                className="no-underline text-foreground hover:opacity-80 transition-opacity"
              >
                {post.title}
              </Link>
            </h1>
            <span className="font-body text-[0.85rem] text-muted border-t border-border-dark pt-2 mb-6 inline-block">
              {post.published_at}
            </span>
          </header>

          <div className="description">
            <p className="font-body text-base text-muted-foreground mb-0">
              {post.description}
            </p>
          </div>
        </article>
      ))}
    </main>
  );
}
