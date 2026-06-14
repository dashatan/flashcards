---
id: async-await
title: async/await
aliases: [async, await, async await]
depth: intermediate
related: [promise, microtask]
---

## Definition

**async/await** is syntactic sugar over [Promises](concept:promise) — `async` functions always return a Promise; `await` pauses within the async function until a Promise settles.

## Why it exists

Linear readable async code with `try/catch` instead of `.then` chains.

## How it works

`await` does not block the main thread — it suspends the async function and resumes via [microtasks](concept:microtask) when the Promise resolves. Non-Promise values are wrapped with `Promise.resolve`.

## Example

```js
async function loadUser(id) {
  try {
    const res = await fetch(`/api/users/${id}`);
    return await res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
```

## Common confusion

Forgotten `await` returns a pending Promise. Parallel work needs `Promise.all`, not sequential awaits.

## In practice

Default for async in TS/React. Top-level await in ES modules.
