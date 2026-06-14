---
id: prevent-default
title: preventDefault vs stopPropagation
aliases: [preventDefault, stopPropagation]
depth: foundation
related: [event-bubbling-capturing]
---

## Definition

**preventDefault()** cancels the browser’s default action for an event. **stopPropagation()** stops the event from reaching other elements in the propagation chain.

## Why it exists

Forms, links, and drag operations have defaults you may want to override or isolate.

## How it works

```js
form.addEventListener("submit", e => {
  e.preventDefault(); // don't navigate
  submitViaAjax();
});
```

Click link: `preventDefault` stops navigation; `stopPropagation` stops parent handlers but link may still navigate if default not prevented.

## In practice

React: `e.preventDefault()` in onSubmit; know both for interview DOM questions.
