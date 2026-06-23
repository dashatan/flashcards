import { useEffect, useRef, type MouseEvent, type KeyboardEvent } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useStore } from "@tanstack/react-store";

import { MarkdownContent } from "@/components/MarkdownContent";
import { FlashcardStatusBadge } from "@/components/StatusBadge";
import { contentKeys } from "@/lib/api";
import { shortPartLabel } from "@/lib/studySearch";
import { navigationStore, setFlipped } from "@/store/navigationStore";
import { getFlashcardStatusFromStore } from "@/store/progressStore";
import type { Flashcard } from "@/types/content";

interface FlashcardFlipProps {
  card: Flashcard;
  onToggleFlip: () => void;
}

export function FlashcardFlip({ card, onToggleFlip }: FlashcardFlipProps) {
  const isFlipped = useStore(navigationStore, (s) => s.isFlipped);
  const cardInnerRef = useRef<HTMLDivElement>(null);
  const queryClient = useQueryClient();
  const status = getFlashcardStatusFromStore(card.id);
  const meta = `${shortPartLabel(card.part)} · ${card.section}`;

  useEffect(() => {
    if (cardInnerRef.current) {
      cardInnerRef.current.classList.toggle("is-flipped", isFlipped);
    }
  }, [isFlipped]);

  const prefetchConcept = (conceptId: string) => {
    queryClient.prefetchQuery({
      queryKey: contentKeys.concept(conceptId),
      queryFn: () =>
        import("@/lib/api").then((m) => m.fetchConceptDetail(conceptId)),
      staleTime: Infinity,
    });
  };

  const handleFlip = () => {
    setFlipped(!isFlipped);
    onToggleFlip();
  };

  const handleCardPointer = (event: MouseEvent | KeyboardEvent) => {
    const target = event.target as Element;
    if (
      target.closest(
        "a.concept-link, a.external-link, button, input, select, textarea",
      )
    ) {
      return;
    }
    handleFlip();
  };

  return (
    <div className="card-scene mx-auto w-full max-w-2xl">
      <div
        role="button"
        tabIndex={0}
        className="relative w-full text-left"
        // onClick={handleCardPointer}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            handleCardPointer(event);
          }
        }}
        aria-label="Flip card"
      >
        <div ref={cardInnerRef} className="card-inner w-full">
          <div className="card-face flex flex-col rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-8">
            <div className="mb-3 flex items-start justify-between gap-2">
              <p className="text-xs font-medium uppercase tracking-wide text-accent">
                {meta}
              </p>
              <FlashcardStatusBadge status={status} />
            </div>
            <p className="mb-2 text-xs font-medium text-muted">Question</p>
            <div className="max-h-[min(60vh,28rem)] overflow-y-auto">
              <MarkdownContent
                content={card.questionLinked}
                variant="question"
                onConceptHover={prefetchConcept}
              />
            </div>
            <p className="mt-4 text-center text-xs text-muted">
              Tap or press <span className="kbd">Space</span> to flip
            </p>
          </div>

          <div className="card-face card-back flex flex-col rounded-2xl border border-accent/30 bg-slate-900 p-6 text-slate-100 shadow-sm sm:p-8">
            <div className="mb-3 flex items-start justify-between gap-2">
              <p className="text-xs font-medium uppercase tracking-wide text-indigo-300">
                {meta}
              </p>
              <FlashcardStatusBadge status={status} />
            </div>
            <p className="mb-2 text-xs font-medium text-slate-400">Answer</p>
            <div className="max-h-[min(60vh,28rem)] overflow-y-auto">
              <MarkdownContent
                content={card.answerLinked}
                variant="answer"
                onConceptHover={prefetchConcept}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
