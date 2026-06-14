---
id: virtual-dom
title: Virtual DOM
aliases: [virtual DOM, VDOM]
depth: intermediate
related: [reconciliation, dom, react-re-render]
---

## Definition

The **virtual DOM** is a lightweight JavaScript tree describing UI structure that React compares on each update before touching the real [DOM](concept:dom).

## Why it exists

Enables declarative UI, batched updates, and [reconciliation](concept:reconciliation) without manual DOM diffing.

## How it works

Render produces a tree of React elements (descriptions, not live DOM nodes). On state change, React builds a new tree and diffs against the previous one to compute minimal real DOM operations.

## Common confusion

Virtual DOM is not always faster than careful manual DOM — it trades developer ergonomics and predictable batching for some overhead.

## In practice

Foundation for understanding React updates, React Native, and why keys matter in lists.
