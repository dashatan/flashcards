---
id: progressive-enhancement
title: Progressive Enhancement
aliases: [progressive enhancement, graceful degradation]
depth: foundation
related: [pwa, dom]
---

## Definition

**Progressive enhancement** builds core functionality with HTML/CSS first, then enhances with JavaScript for richer UX.

## Why it exists

Works without JS (where possible), better accessibility, resilient on slow devices.

## How it works

Semantic HTML forms submit without JS; JS layer adds validation and SPA nav. Feature detect (`'IntersectionObserver' in window`) before using APIs.

## In practice

Public sector sites, content sites; React apps often JS-required but APIs should degrade thoughtfully.
