---
id: accessibility-a11y
title: Accessibility (a11y)
aliases: [accessibility, a11y, accessible, WCAG]
depth: intermediate
related: [react-testing-library, dom, inp]
---

## Definition

**Accessibility** ensures UIs work for keyboard, screen reader, and assistive-tech users — semantics, focus, contrast, and ARIA when needed.

## Why it exists

Legal/compliance (WCAG), better UX for everyone, and SEO; impacts [INP](concept:inp) when focus management is wrong.

## How it works

Use native elements (`button`, `label`), visible focus, `alt` text, heading order, and test with keyboard + axe.

## Common confusion

ARIA is not a substitute for semantic HTML. `div onClick` is not a button.

## In practice

Test with [React Testing Library](concept:react-testing-library) + jest-axe; manual keyboard walks for critical flows.
