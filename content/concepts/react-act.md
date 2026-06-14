---
id: react-act
title: React act()
aliases: [act(), act utility]
depth: intermediate
related: [react-testing-library, use-effect, react-batching]
---

## Definition

**`act()`** from `react-dom/test-utils` (or testing-library re-exports) wraps updates and flushes [React batching](concept:react-batching) so tests see the final UI state after state updates and effects.

## Why it exists

Tests must await asynchronous [re-renders](concept:react-re-render) and [useEffect](concept:use-effect) runs before asserting DOM output.

## How it works

```js
await act(async () => {
  fireEvent.click(button);
});
expect(screen.getByText("Done")).toBeInTheDocument();
```

React Testing Library often wraps `act` automatically; manual `act` needed for some edge cases.

## Common confusion

Warnings “not wrapped in act” mean state updated outside a test flush boundary — not always a test failure but signals async updates.

## In practice

Use [React Testing Library](concept:react-testing-library) patterns; call `act` when driving raw `ReactDOM` test renders.
