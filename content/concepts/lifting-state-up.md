---
id: lifting-state-up
title: Lifting State Up
aliases: [lift state up, lifted state, lifted up, lifting state up, state be lifted up]
depth: intermediate
related: [props-vs-state, one-way-data-flow]
---

## Definition

**Lifting state up** moves shared state to the closest common ancestor so siblings receive values via props and send updates via callbacks.

## Why it exists

Two components need the same data — storing it in only one child makes the other unable to access it.

## How it works

Parent holds `useState`; children get `value` + `onChange`. Single source of truth.

## Common confusion

If many levels need the data, consider [React Context](concept:react-context-api) or a store — not infinite callback chains without structure.

## In practice

Sibling forms, filters + list, master-detail UIs before reaching for global state.
