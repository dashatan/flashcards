---
id: css-in-react
title: CSS in React
aliases: [CSS modules, CSS-in-JS, Tailwind, styled components]
depth: intermediate
related: [vite, webpack, postcss]
---

## Definition

**CSS in React** covers styling approaches: global CSS, **CSS Modules** (scoped class names), utility-first (Tailwind), and CSS-in-JS libraries.

## Why it exists

Component colocation, scope isolation, and design tokens without global cascade collisions.

## How it works

CSS Modules: `import styles from "./Button.module.css"`. Tailwind: utility classes in JSX. Build tools hash/scoped classes via [PostCSS](concept:postcss).

## Common confusion

CSS-in-JS runtime cost vs zero-runtime (Linaria, vanilla extract). Tailwind is build-time, not inline styles.

## In practice

Tailwind + CSS modules common in 2020s stacks; avoid inline styles except dynamic values.
