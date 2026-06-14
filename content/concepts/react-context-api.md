---
id: react-context-api
title: React Context API
aliases: [React Context, Context API, createContext]
depth: intermediate
related: [use-context, prop-drilling]
---

## Definition

The **Context API** (`createContext`, `Provider`, `Consumer`/`useContext`) broadcasts a value to all descendants without manual prop passing.

## Why it exists

Theme, locale, auth, and DI containers for widely needed, relatively stable values.

## How it works

```js
const ThemeContext = createContext("light");
<ThemeContext.Provider value={theme}>
  <App />
</ThemeContext.Provider>
```

Value change re-renders all consumers.

## Common confusion

Poor fit for high-frequency updates (cursor position, animation). Split contexts by update frequency.

## In practice

Pair with `useMemo` on provider value object to reduce unnecessary renders.
