---
id: text-content
title: textContent
aliases: [textContent property, innerText]
depth: foundation
related: [dom, inner-html, xss]
---

## Definition

**`textContent`** is a [DOM](concept:dom) property returning the raw text content of a node and its descendants — including text in `<script>` and `<style>`.

## Why it exists

Safe way to read and set text without parsing HTML — avoids HTML injection unlike `innerHTML`.

## How it works

```js
element.textContent = "Hello";
console.log(div.textContent); // all descendant text, concatenated
```

Setting `textContent` replaces all children with a single text node.

## Common confusion

`innerText` is layout-aware and can trigger reflow; `textContent` is faster and more predictable. Neither interprets HTML entities when setting plain strings.

## In practice

Prefer `textContent` over `innerHTML` for user-visible text updates to reduce [XSS](concept:xss) risk.
