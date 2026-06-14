---
id: use-context
title: useContext
aliases: [useContext hook, React Context]
depth: intermediate
related: [react-context-api, prop-drilling, react-re-render]
---

## Definition

**useContext** reads the current value from a React Context provided by an ancestor `Provider`.

## Why it exists

Share data across deep trees without [prop drilling](concept:prop-drilling).

## How it works

```js
const theme = useContext(ThemeContext);
```

When Provider value changes, all consuming components [re-render](concept:react-re-render) — even if they only use part of the value.

## Common confusion

Not a performance-free global store — frequent updates hurt. Split contexts or use external stores (Zustand) for hot state.

## In practice

Theme, locale, auth snapshot, DI for services. See [React Context API](concept:react-context-api).
