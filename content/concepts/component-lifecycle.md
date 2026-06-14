---
id: component-lifecycle
title: React class lifecycle
aliases: [componentDidMount, componentWillUnmount, componentDidUpdate, lifecycle methods]
depth: intermediate
related: [use-effect, react-re-render]
---

## Definition

**Class lifecycle methods** are hooks on React class components that run at mount, update, and unmount — e.g. `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`.

## Why it exists

Synchronize components with external systems before hooks (`useEffect`) were the standard pattern.

## How it works

```js
class Panel extends React.Component {
  componentDidMount() { this.loadData(); }
  componentDidUpdate(prev) { if (prev.id !== this.props.id) this.loadData(); }
  componentWillUnmount() { this.cleanup(); }
}
```

Modern equivalent: [useEffect](concept:use-effect) with mount/update/unmount semantics.

## Common confusion

`componentWillMount` is legacy/deprecated paths — know mount/update/unmount trio. Hooks replace most lifecycle usage.

## In practice

Still appears in legacy codebases; interview answers should map each method to hook equivalents.
