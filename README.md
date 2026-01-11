# Aryeh's Blog

A minimal dev blog. Posts are markdown files.

## Setup

```bash
pnpm install
pnpm dev        # localhost:3333
pnpm build      # seeds db from markdown + builds
```

## Structure

```
content/posts/   # markdown files with frontmatter
app/             # next.js pages
db/              # sqlite schema + seed script
```

## Stack

Next.js 16, SQLite, Drizzle, Tailwind
