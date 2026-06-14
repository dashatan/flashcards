---
id: react-testing-library
title: React Testing Library
aliases: ["RTL", "Testing Library", "testing-library/react"]
depth: intermediate
related: [testing-pyramid, msw]
---

## Definition

**React Testing Library** tests components by querying the DOM like users do — roles, labels, text — not internal implementation.

## Why it exists

Confidence that UI works for users; resists brittle tests on state/private methods (unlike Enzyme).

## How it works

```js
render(<Login />);
await userEvent.click(screen.getByRole("button", { name: /sign in/i }));
expect(screen.getByText("Welcome")).toBeInTheDocument();
```

Use `waitFor`, `findBy*` for async; `act()` for state updates.

## In practice

Default React unit/integration test stack with Vitest or Jest.
