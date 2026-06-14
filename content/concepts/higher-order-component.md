---
id: higher-order-component
title: Higher-Order Component (HOC)
aliases: [HOC, Higher-Order Components, withRouter]
depth: intermediate
related: [higher-order-function, custom-hooks, react-composition]
---

## Definition

A **Higher-Order Component** is a function that takes a component and returns a new component with extra props or behavior — `const Enhanced = withAuth(Component)`.

## Why it exists

Reuse cross-cutting logic (auth, logging, data fetching) before hooks became standard.

## How it works

```tsx
function withLoading<P>(Component: React.ComponentType<P>) {
  return function Wrapped(props: P & { loading: boolean }) {
    if (props.loading) return <Spinner />;
    return <Component {...props} />;
  };
}
```

HOCs wrap render, not replace element trees.

## Common confusion

Hooks + custom hooks often replace HOCs today. HOCs can cause prop name collisions and DevTools nesting noise.

## In practice

Legacy React Router `withRouter`, Redux `connect` — modern code prefers [custom hooks](concept:custom-hooks).
