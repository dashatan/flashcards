import { Store } from "@tanstack/store";

import type { NavEntry, StudyReturnContext } from "@/types/content";

interface NavigationState {
  stack: NavEntry[];
  returnContext: StudyReturnContext | null;
  isFlipped: boolean;
}

export const navigationStore = new Store<NavigationState>({
  stack: [],
  returnContext: null,
  isFlipped: false,
});

export function pushNav(entry: NavEntry): void {
  navigationStore.setState((state) => ({
    ...state,
    stack: [...state.stack, entry],
  }));
}

export function popNavTo(index: number): void {
  navigationStore.setState((state) => ({
    ...state,
    stack: state.stack.slice(0, index + 1),
  }));
}

export function resetNav(stack: NavEntry[]): void {
  navigationStore.setState((state) => ({
    ...state,
    stack,
  }));
}

export function setReturnContext(context: StudyReturnContext | null): void {
  navigationStore.setState((state) => ({
    ...state,
    returnContext: context,
  }));
}

export function setFlipped(flipped: boolean): void {
  navigationStore.setState((state) => ({
    ...state,
    isFlipped: flipped,
  }));
}

export function clearNav(): void {
  navigationStore.setState({
    stack: [],
    returnContext: null,
    isFlipped: false,
  });
}
