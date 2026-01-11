import fs from "node:fs";
import path from "node:path";
import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import matter from "gray-matter";
import { posts } from "./schema";

const sqlite = new Database("./db/blog.db");
const db = drizzle(sqlite);

const POSTS_DIR = path.join(process.cwd(), "content/posts");

interface PostFrontmatter {
  title: string;
  description: string;
  published_at: string;
}

function getPostsFromMarkdown() {
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md"));

  return files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const filePath = path.join(POSTS_DIR, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");

    const { data, content } = matter(fileContent);
    const frontmatter = data as PostFrontmatter;

    return {
      slug,
      title: frontmatter.title,
      description: frontmatter.description,
      content: content.trim(),
      published_at: frontmatter.published_at,
    };
  });
}

function seed() {
  console.log("Creating posts table...");

  sqlite.exec(`
    CREATE TABLE IF NOT EXISTS posts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      slug TEXT NOT NULL UNIQUE,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      content TEXT NOT NULL,
      published_at TEXT NOT NULL
    )
  `);

  console.log("Clearing existing posts...");
  db.delete(posts).run();

  console.log("Reading markdown files from content/posts...");
  const seedPosts = getPostsFromMarkdown();

  console.log(`Found ${seedPosts.length} posts. Seeding...`);
  for (const post of seedPosts) {
    db.insert(posts).values(post).run();
    console.log(`  - Created: ${post.title}`);
  }

  console.log("Seeding complete!");
  sqlite.close();
}

seed();
