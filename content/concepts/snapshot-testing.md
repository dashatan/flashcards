---
id: snapshot-testing
title: Snapshot testing
aliases: [snapshot tests, toMatchSnapshot]
depth: intermediate
related: [react-testing-library, testing-pyramid]
---

## Definition

**Snapshot testing** serializes UI output (often HTML/JSON) and compares to a stored snapshot on each test run.

## Why it exists

Quick regression detection for stable output — useful sparingly for complex static markup.

## How it works

```js
const { container } = render(<Card />);
expect(container).toMatchSnapshot();
```

Update snapshots intentionally when UI changes (`-u` flag).

## Common confusion

Brittle for volatile UI — prefer RTL queries and user-visible assertions for behavior.

## In practice

Use for design-system primitives or serialized data; avoid large page snapshots that churn constantly.
