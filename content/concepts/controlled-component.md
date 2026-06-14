---
id: controlled-component
title: Controlled Component
aliases: [controlled components, controlled input]
depth: intermediate
related: [use-state, props-vs-state]
---

## Definition

A **controlled component** is an input whose value is driven by React [state](concept:props-vs-state) — `value` + `onChange` from parent or self.

## Why it exists

Single source of truth for form data, validation, and submission.

## How it works

```jsx
<input value={name} onChange={e => setName(e.target.value)} />
```

Uncontrolled: DOM holds value (`ref` or `defaultValue`).

## Common confusion

Controlled inputs need string state for text fields (`""` not `undefined`). File inputs are typically uncontrolled.

## In practice

Default pattern in React forms; React Hook Form can bridge controlled/uncontrolled.
