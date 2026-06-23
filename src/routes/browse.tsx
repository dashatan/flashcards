import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useStore } from "@tanstack/react-store";

import { FlashcardStatusBadge } from "@/components/StatusBadge";
import { contentKeys } from "@/lib/api";
import { buildStudyNavigateTarget } from "@/lib/studyPath";
import { resetNav } from "@/store/navigationStore";
import { progressStore } from "@/store/progressStore";
import type { FlashcardStatus } from "@/types/content";

export const Route = createFileRoute("/browse")({
  component: BrowsePage,
});

function BrowsePage() {
  const flashcardProgress = useStore(progressStore, (s) => s.flashcards);

  const { data } = useQuery({
    queryKey: contentKeys.flashcards,
    queryFn: () => import("@/lib/api").then((m) => m.fetchFlashcardManifest()),
    staleTime: Infinity,
  });

  useEffect(() => {
    resetNav([{ type: "browse", label: "Browse" }]);
  }, []);

  return (
    <div className="w-full space-y-6">
      <header>
        <h1 className="text-xl font-semibold">Browse all cards</h1>
        <p className="text-sm text-muted">Jump to any flashcard by part and section.</p>
      </header>
      {!data ? (
        <div className="space-y-4 animate-pulse" aria-hidden>
          {Array.from({ length: 3 }, (_, index) => (
            <div key={index} className="space-y-2">
              <div className="h-4 w-24 rounded bg-surface-elevated" />
              <div className="h-8 rounded-lg bg-surface-elevated" />
              <div className="h-8 rounded-lg bg-surface-elevated" />
            </div>
          ))}
        </div>
      ) : (
        data.parts.map((part) => (
          <section key={part}>
            <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted">
              {part}
            </h2>
            {(data.sections[part] ?? []).map((section) => {
              const cards = data.cards.filter(
                (c) => c.part === part && c.section === section,
              );
              return (
                <div key={section} className="mb-4">
                  <h3 className="mb-2 font-medium text-foreground">{section}</h3>
                  <ul className="space-y-1">
                    {cards.map((card) => {
                      const status: FlashcardStatus =
                        flashcardProgress[String(card.id)] ?? "unseen";
                      return (
                        <li key={card.id}>
                          <Link
                            {...buildStudyNavigateTarget({
                              part,
                              section,
                              cardId: card.id,
                            })}
                            className="flex items-start justify-between gap-2 rounded-lg px-2 py-2 hover:bg-surface-elevated"
                          >
                            <span className="text-sm line-clamp-2">
                              <span className="text-muted">#{card.id}</span>{" "}
                              {card.question.replace(/`/g, "")}
                            </span>
                            <FlashcardStatusBadge status={status} />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </section>
        ))
      )}
    </div>
  );
}
