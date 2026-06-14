---
id: typescript-react-components
title: Typing React components
aliases: [type React components, React.FC, FC, function components TypeScript]
depth: intermediate
related: [typescript-generics, props-vs-state, controlled-component]
---

## Definition

Typing React components means annotating props (and optional `children`) — prefer explicit prop interfaces over `React.FC` in modern code.

## Why it exists

Catch missing/extra props at compile time; document component contracts.

## How it works

```tsx
type ButtonProps = { label: string; onClick: () => void };
function Button({ label, onClick }: ButtonProps) { ... }
```

`React.FC` adds implicit `children` — often unwanted.

## Common confusion

`FC` vs plain functions: community prefers plain functions + explicit props for clarity and generic support.

## In practice

Export prop types; use `ComponentProps<"button">` to extend native elements; generics for reusable UI.
