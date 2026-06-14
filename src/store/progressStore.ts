import { Store } from "@tanstack/store";

import type { ConceptStatus, FlashcardStatus } from "@/types/content";

interface ProgressState {
  flashcards: Record<string, FlashcardStatus>;
  concepts: Record<string, ConceptStatus>;
  loaded: boolean;
}

export const progressStore = new Store<ProgressState>({
  flashcards: {},
  concepts: {},
  loaded: false,
});

export function setProgressLoaded(
  flashcards: Record<string, FlashcardStatus>,
  concepts: Record<string, ConceptStatus>,
): void {
  progressStore.setState({
    flashcards,
    concepts,
    loaded: true,
  });
}

export function updateFlashcardProgress(cardId: number, status: FlashcardStatus): void {
  progressStore.setState((state) => ({
    ...state,
    flashcards: { ...state.flashcards, [String(cardId)]: status },
  }));
}

export function updateConceptProgress(conceptId: string, status: ConceptStatus): void {
  progressStore.setState((state) => ({
    ...state,
    concepts: { ...state.concepts, [conceptId]: status },
  }));
}

export function clearProgressState(): void {
  progressStore.setState((state) => ({
    ...state,
    flashcards: {},
    concepts: {},
  }));
}

export function getFlashcardStatusFromStore(cardId: number): FlashcardStatus {
  return progressStore.state.flashcards[String(cardId)] ?? "unseen";
}

export function getConceptStatusFromStore(conceptId: string): ConceptStatus {
  return progressStore.state.concepts[conceptId] ?? "unread";
}
