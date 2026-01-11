---
title: My Terminal-First Workflow.
description: I spend most of my day in a terminal. Not out of nostalgia, but because it remains the most efficient interface for the work I do.
published_at: October 10, 2025
---

I spend most of my day in a terminal. Not out of nostalgia, but because it remains the most efficient interface for the work I do.

The graphical user interface is a wonderful invention for discovery. But once you know what you want to do, typing a command will always be faster than navigating menus. The terminal respects your expertise.

## The Setup

My current setup is simple:

- **Shell:** Zsh with minimal plugins
- **Multiplexer:** tmux for session management
- **Editor:** Neovim with a handful of carefully chosen plugins

Each tool was selected not for its features, but for its composability. They work together because they follow Unix philosophy: do one thing well, and communicate through text.

## Why It Works

```bash
# Find all TypeScript files modified in the last day
find . -name "*.ts" -mtime -1

# Pipe to xargs for batch operations
find . -name "*.ts" -mtime -1 | xargs wc -l

# Chain with grep for filtering
git log --oneline | grep "fix" | head -20
```

The power isn't in any single command. It's in the pipes. Each program is a building block, and the shell is the mortar.

## The Cost

There is a learning curve. The terminal doesn't hold your hand. But that cost is paid once, and the dividend is paid every day thereafter. Speed compounds.
