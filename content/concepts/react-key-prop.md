---
id: react-key-prop
title: React key Prop
aliases: [key prop, React keys, list keys]
depth: intermediate
related: [reconciliation, react-re-render]
---

## Definition

The **key** prop helps React identify list items across [reconciliation](concept:reconciliation) so it can match identity when order changes.

## Why it exists

Without stable keys, React may reuse wrong component state when lists reorder, filter, or insert items.

## How it works

Keys should be stable, unique among siblings, and **not** random per render. Prefer database ids over array index (except static lists).

## Example

```jsx
{users.map(u => <Row key={u.id} user={u} />)}
```

## Common confusion

`key` is not passed as a prop to the component — React consumes it. Changing key **remounts** component (resets state).

## In practice

Fix duplicated state bugs in dynamic lists; use key to force remount when switching major modes.
