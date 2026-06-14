---
id: service-worker
title: Service Worker
aliases: [service workers, Service Worker API]
depth: intermediate
related: [pwa, lazy-loading]
---

## Definition

A **service worker** is a script the browser runs between your app and the network — enabling offline caches, push notifications, and background sync.

## Why it exists

[PWA](concept:pwa) offline shells and advanced caching strategies beyond HTTP cache alone.

## How it works

`navigator.serviceWorker.register("/sw.js")` — separate thread; intercepts fetch events. Strategies: cache-first, network-first, stale-while-revalidate.

## In practice

This app uses Serwist for precaching; MSW uses SW in tests.
