---
id: server-side-rendering
title: Server-Side Rendering (SSR)
aliases: [SSR, server-side rendering]
depth: intermediate
related: [hydration, streaming-ssr, react-server-components]
---

## Definition

**SSR** renders React to HTML on the server per request (or at build for SSG), sending markup before client JS runs.

## Why it exists

Faster first paint, SEO for dynamic pages, works on low-powered clients.

## How it works

Server runs `renderToString` / streaming APIs → HTML response → client loads JS → [hydration](concept:hydration) attaches listeners.

Unlike [RSC](concept:react-server-components), client component code still downloads for interactive parts.

## Common confusion

SSR improves first load; interactivity still needs hydration cost. SSG is pre-render at build time.

## In practice

Next.js `getServerSideProps` (legacy), App Router server rendering, Remix loaders.
