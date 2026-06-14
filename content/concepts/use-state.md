---
id: use-state
title: useState
aliases: [useState hook, React useState]
depth: intermediate
related: [react-re-render, react-batching]
---

## Definition

**useState** is a React hook returning a state value and an updater function that triggers a [re-render](concept:react-re-render) when called.

## Why it exists

Local component state in function components without classes.

## How it works

```js
const [count, setCount] = useState(0);
setCount(1);
setCount(c => c + 1); // updater form
```

State updates are scheduled and [batched](concept:react-batching). Initializer can be `useState(() => expensive())`.

## Common confusion

State updates are async relative to the next render — reading `count` right after `setCount` shows old value. Same reference mutation does not trigger update.

## In practice

Colocate state; lift when siblings need to share; pair with [useReducer](concept:use-reducer) for complex logic.
