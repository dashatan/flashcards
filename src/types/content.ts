export type ConceptDepth = "foundation" | "intermediate" | "advanced";

export type FlashcardStatus = "unseen" | "learning" | "known" | "review";
export type ConceptStatus = "unread" | "learning" | "understood";

export interface Flashcard {
  id: number;
  part: string;
  section: string;
  question: string;
  answer: string;
  questionLinked: string;
  answerLinked: string;
  conceptIds: string[];
}

export interface FlashcardManifest {
  generatedAt: string;
  total: number;
  parts: string[];
  sections: Record<string, string[]>;
  cards: Flashcard[];
}

export interface ConceptIndexEntry {
  id: string;
  title: string;
  aliases: string[];
  depth: ConceptDepth;
  related: string[];
  usedInFlashcards: number[];
}

export interface ConceptManifest {
  generatedAt: string;
  concepts: ConceptIndexEntry[];
  aliasMap: Record<string, string>;
}

export interface ConceptDetail {
  id: string;
  title: string;
  aliases: string[];
  depth: ConceptDepth;
  related: string[];
  usedInFlashcards: number[];
  body: string;
  bodyLinked: string;
  conceptIds: string[];
}

export type NavEntry =
  | { type: "study"; cardId: number; label: string }
  | { type: "concept"; conceptId: string; label: string }
  | { type: "browse"; label: string }
  | { type: "concepts-index"; label: string };

export interface StudySearch {
  part: string;
  section: string;
  shuffle: boolean;
  reviewOnly: boolean;
  status: "all" | FlashcardStatus;
  unreadConcepts: boolean;
  cardId: number | undefined;
}

export interface StudyReturnContext {
  cardId: number;
  isFlipped: boolean;
  search: StudySearch;
}
