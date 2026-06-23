import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useCallback, useEffect, useMemo } from "react";
import { useStore } from "@tanstack/react-store";

import { FlashcardFlip } from "@/components/FlashcardFlip";
import { computeStats, StudySidebar } from "@/components/StudySidebar";
import { contentKeys } from "@/lib/api";
import { mergeStudySearch } from "@/lib/defaultStudySearch";
import { setFlashcardStatus } from "@/lib/db";
import { parseStudySearch } from "@/lib/studySearch";
import {
  navigationStore,
  resetNav,
  setFlipped,
  setReturnContext,
} from "@/store/navigationStore";
import { progressStore, updateFlashcardProgress } from "@/store/progressStore";
import type { Flashcard, FlashcardStatus, StudySearch } from "@/types/content";

export const Route = createFileRoute("/study")({
  validateSearch: (search) =>
    parseStudySearch(search as Record<string, unknown>),
  component: StudyPage,
});

function shuffleArray<T>(array: T[]): T[] {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function buildDeck(
  cards: Flashcard[],
  search: StudySearch,
  flashcardProgress: Record<string, FlashcardStatus>,
  conceptProgress: Record<string, string>,
): Flashcard[] {
  let deck = cards.filter((card) => {
    if (search.part && card.part !== search.part) return false;
    if (search.section && card.section !== search.section) return false;
    const status = flashcardProgress[String(card.id)] ?? "unseen";
    if (search.reviewOnly && status !== "review") return false;
    if (search.status !== "all" && status !== search.status) return false;
    if (search.unreadConcepts) {
      const hasUnread = card.conceptIds.some(
        (id) => (conceptProgress[id] ?? "unread") === "unread",
      );
      if (!hasUnread) return false;
    }
    return true;
  });

  if (search.shuffle) {
    deck = shuffleArray(deck);
  }

  return deck;
}

function StudyPage() {
  const search = Route.useSearch();
  const navigate = Route.useNavigate();
  const flashcardProgress = useStore(progressStore, (s) => s.flashcards);
  const conceptProgress = useStore(progressStore, (s) => s.concepts);
  const isFlipped = useStore(navigationStore, (s) => s.isFlipped);

  const { data } = useQuery({
    queryKey: contentKeys.flashcards,
    queryFn: () => import("@/lib/api").then((m) => m.fetchFlashcardManifest()),
    staleTime: Infinity,
  });

  const deck = useMemo(() => {
    if (!data) return [];
    return buildDeck(data.cards, search, flashcardProgress, conceptProgress);
  }, [data, search, flashcardProgress, conceptProgress]);

  const currentIndex = useMemo(() => {
    if (!search.cardId || deck.length === 0) return 0;
    const idx = deck.findIndex((c) => c.id === search.cardId);
    return idx >= 0 ? idx : 0;
  }, [deck, search.cardId]);

  const currentCard = deck[currentIndex] ?? null;

  useEffect(() => {
    resetNav([
      {
        type: "study",
        cardId: currentCard?.id ?? 0,
        label: currentCard ? `Card #${currentCard.id}` : "Study",
      },
    ]);
  }, [currentCard?.id]);

  useEffect(() => {
    if (currentCard) {
      setReturnContext({
        cardId: currentCard.id,
        isFlipped,
        search,
      });
    }
  }, [currentCard, isFlipped, search]);

  const goToIndex = useCallback(
    (index: number) => {
      const card = deck[index];
      if (!card) return;
      setFlipped(false);
      navigate({
        search: (prev) => mergeStudySearch(prev, { cardId: card.id }),
      });
    },
    [deck, navigate],
  );

  const move = useCallback(
    (delta: number) => {
      if (deck.length === 0) return;
      const next = (currentIndex + delta + deck.length) % deck.length;
      goToIndex(next);
    },
    [deck.length, currentIndex, goToIndex],
  );

  const markCurrent = useCallback(
    async (status: FlashcardStatus) => {
      if (!currentCard) return;
      await setFlashcardStatus(currentCard.id, status);
      updateFlashcardProgress(currentCard.id, status);
      move(1);
    },
    [currentCard, move],
  );

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (
        event.target instanceof HTMLSelectElement ||
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      switch (event.key) {
        case "ArrowLeft":
          event.preventDefault();
          move(-1);
          break;
        case "ArrowRight":
          event.preventDefault();
          move(1);
          break;
        case " ": {
          const selection = window.getSelection();
          if (selection && !selection.isCollapsed) return;
          event.preventDefault();
          setFlipped(!isFlipped);
          break;
        }
        case "k":
        case "K":
          markCurrent("known");
          break;
        case "r":
        case "R":
          markCurrent("review");
          break;
        case "l":
        case "L":
          markCurrent("learning");
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isFlipped, move, markCurrent]);

  const stats = data ? computeStats(data.cards, flashcardProgress) : null;

  const updateSearch = (patch: Partial<StudySearch>) => {
    navigate({
      search: (prev) => mergeStudySearch(prev, { ...patch, cardId: undefined }),
    });
  };

  return (
    <div className="flex min-h-0 flex-1">
      <StudySidebar />
      <div className="flex min-w-0 flex-1 flex-col space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <select
            className="rounded-lg border border-border bg-surface px-3 py-2 text-sm"
            value={search.part}
            onChange={(e) =>
              updateSearch({ part: e.target.value, section: "" })
            }
            aria-label="Filter by part"
          >
            <option value="">All parts</option>
            {(data?.parts ?? []).map((part) => (
              <option key={part} value={part}>
                {part}
              </option>
            ))}
          </select>
          <select
            className="rounded-lg border border-border bg-surface px-3 py-2 text-sm"
            value={search.section}
            onChange={(e) => updateSearch({ section: e.target.value })}
            aria-label="Filter by section"
          >
            <option value="">All sections</option>
            {(search.part
              ? (data?.sections[search.part] ?? [])
              : [...new Set((data?.cards ?? []).map((c) => c.section))].sort()
            ).map((section) => (
              <option key={section} value={section}>
                {section}
              </option>
            ))}
          </select>
          <select
            className="rounded-lg border border-border bg-surface px-3 py-2 text-sm"
            value={search.status}
            onChange={(e) =>
              updateSearch({
                status: e.target.value as StudySearch["status"],
              })
            }
            aria-label="Filter by status"
          >
            <option value="all">All statuses</option>
            <option value="unseen">Unseen</option>
            <option value="learning">Learning</option>
            <option value="known">Known</option>
            <option value="review">Review</option>
          </select>
          <label className="flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-sm">
            <input
              type="checkbox"
              checked={search.shuffle}
              onChange={(e) => updateSearch({ shuffle: e.target.checked })}
            />
            Shuffle
          </label>
          <label className="flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-sm">
            <input
              type="checkbox"
              checked={search.reviewOnly}
              onChange={(e) => updateSearch({ reviewOnly: e.target.checked })}
            />
            Review only
          </label>
          <label className="flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-sm">
            <input
              type="checkbox"
              checked={search.unreadConcepts}
              onChange={(e) =>
                updateSearch({ unreadConcepts: e.target.checked })
              }
            />
            Unread concepts
          </label>
        </div>

        {stats && (
          <p className="text-sm text-muted">
            {stats.known} known · {stats.learning} learning · {stats.review}{" "}
            review · {stats.total} total
            {deck.length > 0 &&
              ` · Showing ${currentIndex + 1} of ${deck.length}`}
          </p>
        )}

        {currentCard ? (
          <>
            <FlashcardFlip card={currentCard} onToggleFlip={() => undefined} />
            <div className="flex flex-wrap items-center justify-center gap-2">
              <button
                type="button"
                className="rounded-lg border border-border bg-surface px-4 py-2 text-sm hover:bg-surface-elevated"
                onClick={() => move(-1)}
              >
                ← Previous
              </button>
              <button
                type="button"
                className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white hover:opacity-90"
                onClick={() => setFlipped(!isFlipped)}
              >
                Flip
              </button>
              <button
                type="button"
                className="rounded-lg border border-border bg-surface px-4 py-2 text-sm hover:bg-surface-elevated"
                onClick={() => move(1)}
              >
                Next →
              </button>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2">
              <button
                type="button"
                className="rounded-lg border border-border bg-surface px-4 py-2 text-sm text-success hover:bg-surface-elevated"
                onClick={() => markCurrent("known")}
              >
                ✓ Known
              </button>
              <button
                type="button"
                className="rounded-lg border border-border bg-surface px-4 py-2 text-sm text-warning hover:bg-surface-elevated"
                onClick={() => markCurrent("learning")}
              >
                ◐ Learning
              </button>
              <button
                type="button"
                className="rounded-lg border border-border bg-surface px-4 py-2 text-sm text-warning hover:bg-surface-elevated"
                onClick={() => markCurrent("review")}
              >
                ↻ Review
              </button>
            </div>
          </>
        ) : (
          <div className="flex flex-1 items-center justify-center rounded-2xl border border-border bg-surface p-8 text-muted">
            No cards match your filters.
          </div>
        )}

        <p className="text-center text-xs text-muted">
          <span className="kbd">←</span> <span className="kbd">→</span> navigate
          ·<span className="kbd">Space</span> flip ·
          <span className="kbd">K</span> known ·<span className="kbd">L</span>{" "}
          learning ·<span className="kbd">R</span> review
        </p>
      </div>
    </div>
  );
}
