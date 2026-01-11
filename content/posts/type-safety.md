---
title: Type Safety as Documentation.
description: The best documentation is the kind that can't go out of date. Types are executable specifications—they describe what your code does, and the compiler ensures the description is accurate.
published_at: September 28, 2025
---

The best documentation is the kind that can't go out of date. Types are executable specifications—they describe what your code does, and the compiler ensures the description is accurate.

I've lost count of the number of times I've read a README that bore no resemblance to the actual API. Comments lie. Wikis grow stale. But types? Types are checked on every build.

## Types as Contracts

Consider this function signature:

```typescript
function processUser(
  user: User,
  options: ProcessOptions
): Promise<ProcessedUser | ProcessError>
```

Without reading a single line of implementation, I know:
- It takes a User and some options
- It's asynchronous
- It can fail, and failure has a specific shape

This is documentation that compiles.

## The Trade-off

Yes, types add ceremony. Yes, there's a learning curve to advanced type systems. But the alternative—runtime errors in production, incorrect assumptions, tribal knowledge—is worse.

## A Practical Example

```typescript
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
```

The extra lines aren't boilerplate. They're communication. They tell the next developer—often future you—exactly what to expect.
