---
id: custom-hooks
title: Custom Hooks
aliases: [custom hooks, custom React hooks]
depth: intermediate
related: [rules-of-hooks, use-effect, use-state]
---

## Definition

A **custom hook** is a function that calls other hooks to encapsulate reusable stateful logic — named `useSomething`.

## Why it exists

Share logic across components without HOCs or render props; colocate related effects and state.

## How it works

```js
function useDebouncedValue(value, ms) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => { ... }, [value, ms]);
  return debounced;
}
```

Must follow [rules of hooks](concept:rules-of-hooks).

## Common confusion

Custom hooks do not share state between components — each call gets isolated state. For shared state use Context/store.

## In practice

`useFetch`, `useMediaQuery`, `useLocalStorage`, domain hooks (`useCart`).
