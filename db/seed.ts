// NOTE: The seed post content below is AI-generated placeholder content.

import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import { posts } from "./schema";

const sqlite = new Database("./db/blog.db");
const db = drizzle(sqlite);

const seedPosts = [
  {
    slug: "minimalism",
    title: "The Art of Minimalism in Systems.",
    description:
      "There is a strange gravity to complexity. We start with a simple function, a clear purpose, and slowly, feature by feature, we lose the plot.",
    content: `There is a strange gravity to complexity. We start with a simple function, a clear purpose, and slowly, feature by feature, we lose the plot.

The best systems I've worked on were the ones where I could hold the entire architecture in my head. Not because they were small, but because they were *coherent*. Every piece served a purpose, and that purpose was immediately obvious.

## The Monospace Contrast

Why use a monospace font for body text? It's a deliberate choice that forces a certain pace. Each character occupies the same space, creating a rhythm that slows down the reader—and the writer. It demands precision.

In a world of variable-width fonts optimized for speed, monospace is a quiet act of rebellion. It says: "This content is worth the extra second per line."

## A Simple Example

Consider this React hook. It does almost nothing. That's the point.

\`\`\`javascript
const useMinimalState = (initial) => {
  const [state, setState] = useState(initial);
  // No reducers. No actions. No middleware.
  // Just state.
  return [state, setState];
};
\`\`\`

The instinct is to add: memoization, persistence, validation. But every addition is a tax on understanding. The question isn't "what can we add?" but "what can we remove while still solving the problem?"

## The Takeaway

Minimalism isn't about having less. It's about making room for what matters. In code, as in design, the goal is clarity. And clarity is achieved not when there is nothing left to add, but when there is nothing left to take away.`,
    published_at: "October 24, 2025",
  },
  {
    slug: "terminal-workflow",
    title: "My Terminal-First Workflow.",
    description:
      "I spend most of my day in a terminal. Not out of nostalgia, but because it remains the most efficient interface for the work I do.",
    content: `I spend most of my day in a terminal. Not out of nostalgia, but because it remains the most efficient interface for the work I do.

The graphical user interface is a wonderful invention for discovery. But once you know what you want to do, typing a command will always be faster than navigating menus. The terminal respects your expertise.

## The Setup

My current setup is simple:

- **Shell:** Zsh with minimal plugins
- **Multiplexer:** tmux for session management
- **Editor:** Neovim with a handful of carefully chosen plugins

Each tool was selected not for its features, but for its composability. They work together because they follow Unix philosophy: do one thing well, and communicate through text.

## Why It Works

\`\`\`bash
# Find all TypeScript files modified in the last day
find . -name "*.ts" -mtime -1

# Pipe to xargs for batch operations
find . -name "*.ts" -mtime -1 | xargs wc -l

# Chain with grep for filtering
git log --oneline | grep "fix" | head -20
\`\`\`

The power isn't in any single command. It's in the pipes. Each program is a building block, and the shell is the mortar.

## The Cost

There is a learning curve. The terminal doesn't hold your hand. But that cost is paid once, and the dividend is paid every day thereafter. Speed compounds.`,
    published_at: "October 10, 2025",
  },
  {
    slug: "type-safety",
    title: "Type Safety as Documentation.",
    description:
      "The best documentation is the kind that can't go out of date. Types are executable specifications—they describe what your code does, and the compiler ensures the description is accurate.",
    content: `The best documentation is the kind that can't go out of date. Types are executable specifications—they describe what your code does, and the compiler ensures the description is accurate.

I've lost count of the number of times I've read a README that bore no resemblance to the actual API. Comments lie. Wikis grow stale. But types? Types are checked on every build.

## Types as Contracts

Consider this function signature:

\`\`\`typescript
function processUser(
  user: User,
  options: ProcessOptions
): Promise<ProcessedUser | ProcessError>
\`\`\`

Without reading a single line of implementation, I know:
- It takes a User and some options
- It's asynchronous
- It can fail, and failure has a specific shape

This is documentation that compiles.

## The Trade-off

Yes, types add ceremony. Yes, there's a learning curve to advanced type systems. But the alternative—runtime errors in production, incorrect assumptions, tribal knowledge—is worse.

## A Practical Example

\`\`\`typescript
// Instead of this:
function fetchData(url, options) {
  // Who knows what options are valid?
}

// Write this:
interface FetchOptions {
  timeout: number;
  retries: number;
  headers?: Record<string, string>;
}

function fetchData(
  url: URL,
  options: FetchOptions
): Promise<Response> {
  // Now it's clear
}
\`\`\`

The extra lines aren't boilerplate. They're communication. They tell the next developer—often future you—exactly what to expect.`,
    published_at: "September 28, 2025",
  },
];

async function seed() {
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

  console.log("Seeding posts...");
  for (const post of seedPosts) {
    db.insert(posts).values(post).run();
    console.log(`  - Created: ${post.title}`);
  }

  console.log("Seeding complete!");
  sqlite.close();
}

seed().catch(console.error);
