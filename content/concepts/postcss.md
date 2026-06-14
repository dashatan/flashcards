---
id: postcss
title: PostCSS
aliases: [PostCSS plugins, autoprefixer]
depth: intermediate
related: [css-in-react, browserslist, vite]
---

## Definition

**PostCSS** transforms CSS with JavaScript plugins — Autoprefixer, nesting, custom syntax — in the build pipeline.

## Why it exists

Future CSS features and vendor prefixes via [Browserslist](concept:browserslist) without manual `-webkit-` maintenance.

## How it works

CSS → PostCSS plugin chain → output CSS. Often integrated in Vite/Webpack alongside Tailwind (which uses PostCSS).

## Common confusion

Not a preprocessor like Sass — plugin ecosystem defines behavior. Tailwind is a PostCSS plugin.

## In practice

Autoprefixer + cssnano for production minification; `@tailwind` directives in global CSS.
