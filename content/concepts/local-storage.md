---
id: local-storage
title: localStorage
aliases: [localStorage, local storage]
depth: foundation
related: [session-storage, cookies, xss]
---

## Definition

**localStorage** stores string key-value pairs (~5MB) per origin, persisting until explicitly cleared.

## Why it exists

Simple client persistence for preferences, drafts, non-sensitive UI state.

## How it works

```js
localStorage.setItem("theme", "dark");
```

Synchronous — can block main thread on large reads. Same-origin only. Accessible to any script on page — [XSS](concept:xss) can exfiltrate.

## In practice

Prefer IndexedDB for large data; never store tokens if XSS risk; use httpOnly cookies for sensitive session.
