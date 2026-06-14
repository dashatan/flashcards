---
id: react-server-actions
title: React Server Actions
aliases: [Server Actions, use server]
depth: advanced
related: [react-server-components, use-optimistic]
---

## Definition

**Server Actions** are async functions marked `"use server"` that run on the server but can be invoked from Client Components — typically for form mutations.

## Why it exists

Colocate mutation logic with UI without hand-written API routes for every form.

## How it works

```js
async function createPost(formData) {
  "use server";
  await db.post.create(...);
}
```

Called from `<form action={createPost}>` or `startTransition`. Progressive enhancement possible.

## Common confusion

Still need validation, auth, and error handling on server — not a security bypass.

## In practice

Next.js App Router forms; pair with [useOptimistic](concept:use-optimistic) for UX.
