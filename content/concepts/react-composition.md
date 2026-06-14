---
id: react-composition
title: React Composition
aliases: [composition, component composition, children prop]
depth: intermediate
related: [prop-drilling, custom-hooks]
---

## Definition

**Composition** builds UI by nesting components and slots (`children`, render props, compound components) instead of giant prop lists or inheritance.

## Why it exists

Flexible layouts without prop drilling every variant through wrappers.

## How it works

```jsx
<Card>
  <Card.Header title="Stats" />
  <Card.Body>{content}</Card.Body>
</Card>
```

Share behavior via [custom hooks](concept:custom-hooks), share structure via composition.

## Common confusion

“Composition over inheritance” — React rarely uses class inheritance for UI variants.

## In practice

Design systems, layout shells, flexible modals and menus.
