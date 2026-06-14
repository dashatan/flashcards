---
id: dom
title: DOM (Document Object Model)
aliases: [DOM, Document Object Model]
depth: foundation
related: [virtual-dom, reflow-repaint]
---

## Definition

The **DOM** is the browser’s tree representation of HTML — nodes for elements, text, attributes — that JavaScript can read and modify.

## Why it exists

Programs need a live API to update pages; bridges markup and scripts.

## How it works

`document.querySelector`, `createElement`, `appendChild`. Changes can trigger [reflow/repaint](concept:reflow-repaint). React’s [virtual DOM](concept:virtual-dom) batches updates to the real DOM.

## Common confusion

DOM is not the same as HTML source string — it’s the in-memory live tree after parse.

## In practice

Event listeners, `innerHTML` XSS risks, integration with React refs.
