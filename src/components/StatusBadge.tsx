import type { ConceptStatus, FlashcardStatus } from "@/types/content";

const FLASHCARD_LABELS: Record<FlashcardStatus, string> = {
  unseen: "Unseen",
  learning: "Learning",
  known: "Known",
  review: "Review",
};

const CONCEPT_LABELS: Record<ConceptStatus, string> = {
  unread: "Unread",
  learning: "Learning",
  understood: "Understood",
};

const FLASHCARD_COLORS: Record<FlashcardStatus, string> = {
  unseen: "bg-surface-elevated text-muted",
  learning: "bg-amber-500/15 text-warning",
  known: "bg-emerald-500/15 text-success",
  review: "bg-amber-500/15 text-warning",
};

const CONCEPT_COLORS: Record<ConceptStatus, string> = {
  unread: "bg-surface-elevated text-muted",
  learning: "bg-amber-500/15 text-warning",
  understood: "bg-emerald-500/15 text-success",
};

export function FlashcardStatusBadge({ status }: { status: FlashcardStatus }) {
  return (
    <span
      className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${FLASHCARD_COLORS[status]}`}
    >
      {FLASHCARD_LABELS[status]}
    </span>
  );
}

export function ConceptStatusBadge({ status }: { status: ConceptStatus }) {
  return (
    <span
      className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${CONCEPT_COLORS[status]}`}
    >
      {CONCEPT_LABELS[status]}
    </span>
  );
}
