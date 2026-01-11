import { notFound } from "next/navigation";
import { db } from "@/db";
import { posts } from "@/db/schema";
import { eq } from "drizzle-orm";
import ReactMarkdown from "react-markdown";

interface PageProps {
  params: Promise<{ slug: string }>;
}

async function getPost(slug: string) {
  const results = db.select().from(posts).where(eq(posts.slug, slug)).all();
  return results[0] || null;
}

async function getAllSlugs() {
  return db.select({ slug: posts.slug }).from(posts).all();
}

export async function generateStaticParams() {
  const allPosts = await getAllSlugs();
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Aryeh`,
    description: post.description,
  };
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <article>
      <header>
        <h1 className="font-heading text-title-massive font-bold mb-6 max-md:text-[2.5rem]">
          {post.title}
        </h1>
        <span className="font-body text-[0.85rem] text-muted border-t border-border-dark pt-4 mb-12 block">
          {post.published_at}
        </span>
      </header>

      <div className="markdown-body font-body text-base text-foreground leading-relaxed">
        <ReactMarkdown
          components={{
            h2: ({ children }) => (
              <h2 className="font-heading text-heading-2 font-bold mt-12 mb-6">
                {children}
              </h2>
            ),
            p: ({ children }) => <p className="mb-6">{children}</p>,
            ul: ({ children }) => (
              <ul className="list-square pl-6 mb-6">{children}</ul>
            ),
            ol: ({ children }) => (
              <ol className="list-decimal pl-6 mb-6">{children}</ol>
            ),
            li: ({ children }) => <li className="mb-2">{children}</li>,
            strong: ({ children }) => (
              <strong className="font-semibold">{children}</strong>
            ),
            em: ({ children }) => <em className="italic">{children}</em>,
            code: ({ className, children }) => {
              const isInline = !className;
              if (isInline) {
                return (
                  <code className="font-body bg-[#f5f5f5] px-1.5 py-0.5 text-[0.9em]">
                    {children}
                  </code>
                );
              }
              return (
                <code
                  className="font-body"
                  style={{ fontVariantLigatures: "none" }}
                >
                  {children}
                </code>
              );
            },
            pre: ({ children }) => (
              <pre className="bg-code-bg text-code-text p-6 border-l-code border-code-border rounded-none overflow-x-auto my-8">
                {children}
              </pre>
            ),
            a: ({ href, children }) => (
              <a href={href} className="prose-link">
                {children}
              </a>
            ),
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>
    </article>
  );
}
