---
id: use-effect
title: useEffect
aliases: [useEffect hook, React useEffect]
depth: intermediate
related: [dependency-array, use-layout-effect, memory-leak]
---

## Definition

**useEffect** runs side effects after React commits DOM updates and the browser paints — data fetching, subscriptions, timers.

## Why it exists

Components need to sync with external systems without blocking paint.

## How it works

```js
useEffect(() => {
  const sub = subscribe(cb);
  return () => sub.unsubscribe(); // cleanup
}, [userId]);
```

[Dependency array](concept:dependency-array) controls when effect re-runs. Omit deps → every render; `[]` → mount/unmount only.

## Common confusion

Not for synchronous DOM reads before paint — use [useLayoutEffect](concept:use-layout-effect). Fetch in effect, not during render body.

## In practice

Default effect hook; always return cleanup for listeners and abort controllers to prevent [memory leaks](concept:memory-leak).
