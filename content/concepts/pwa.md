---
id: pwa
title: Progressive Web App (PWA)
aliases: [PWA, progressive web app]
depth: intermediate
related: [service-worker, lazy-loading]
---

## Definition

A **PWA** is a web app with installability, offline support, and app-like UX via manifest + [service worker](concept:service-worker).

## Why it exists

Reach users without app store; reuse web stack; offline study apps like this flashcard project.

## How it works

`manifest.webmanifest` defines icons, theme, `display: standalone`. Service worker caches shell and assets. `beforeinstallprompt` for install UI.

## In practice

Serwist, Workbox; test offline in DevTools Application tab.
