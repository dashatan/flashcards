---
id: react-compiler
title: React Compiler
aliases: [React Compiler, React Forget, auto-memoization]
depth: advanced
related: [use-memo, use-callback, react-memo]
---

## Definition

The **React Compiler** automatically inserts memoization equivalent to [useMemo](concept:use-memo), [useCallback](concept:use-callback), and [React.memo](concept:react-memo) at build time.

## Why it exists

Reduce manual optimization bugs and unnecessary [re-renders](concept:react-re-render) without developer overhead.

## How it works

Static analysis of component purity and dependencies; emits optimized code. “React Forget” was the research name.

## Common confusion

Does not remove need to understand render behavior — edge cases and rules still matter.

## In practice

Emerging in React 19 ecosystem; watch adoption in Next.js builds.
