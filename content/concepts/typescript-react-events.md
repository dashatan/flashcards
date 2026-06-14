---
id: typescript-react-events
title: Typing React event handlers
aliases: [event handlers, React.ChangeEvent, React.MouseEvent]
depth: intermediate
related: [typescript-generics, controlled-component, es6-class]
---

## Definition

React + TypeScript event handlers use typed synthetic events — `React.ChangeEvent<HTMLInputElement>`, `React.MouseEvent<HTMLButtonElement>`, etc.

## Why it exists

Correct `event.target` typing and autocomplete for DOM properties without `any`.

## How it works

```tsx
const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setValue(e.target.value);
};
```

Use element-specific types; `React.FormEvent` for forms.

## Common confusion

`e.target` in union events may need narrowing. Avoid `(e: any)` — use `unknown` + guards if needed.

## In practice

Pair with [controlled components](concept:controlled-component); use `ComponentProps<"input">` for native prop spreading.
