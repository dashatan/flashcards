---
id: inner-html
title: innerHTML
aliases: [innerHTML property]
depth: foundation
related: [dom, text-content, xss]
---

## Definition

**`innerHTML`** is a [DOM](concept:dom) property that serializes or parses HTML markup for an element's contents.

## Why it exists

Insert structured HTML from templates or server responses — powerful but security-sensitive.

## How it works

```js
container.innerHTML = "<p>Hello</p>";
const html = container.innerHTML; // string of markup
```

Parsing creates real DOM nodes; scripts in inserted HTML do not execute in modern browsers when inserted via `innerHTML`.

## Common confusion

Major [XSS](concept:xss) vector when combined with untrusted strings. Prefer [textContent](concept:text-content) or framework rendering for user data.

## In practice

Legacy widgets and templating; sanitize untrusted HTML or use framework escaping.
