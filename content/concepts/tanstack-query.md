---
id: tanstack-query
title: TanStack Query
aliases: [TanStack Query, React Query, useQuery]
depth: intermediate
related: [server-state-vs-client-state, promise]
---

## Definition

**TanStack Query** is a library for fetching, caching, synchronizing, and updating **server state** in React (and other frameworks).

## Why it exists

Replaces manual `useEffect` fetch + global Redux for API data with stale-while-revalidate, retries, and deduping.

## How it works

```js
const { data, isLoading, error } = useQuery({
  queryKey: ["user", id],
  queryFn: () => fetchUser(id),
});
```

Mutations via `useMutation`; cache invalidation via `queryClient.invalidateQueries`.

## Common confusion

Not for all client UI state — pair with Zustand/local state. Devtools show cache timeline.

## In practice

Standard in modern React apps; integrates with Suspense in v5+.
