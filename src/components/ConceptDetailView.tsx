import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";

import { MarkdownContent, ConceptLinkButton } from "@/components/MarkdownContent";
import { ConceptStatusBadge } from "@/components/StatusBadge";
import { ReturnToCardChip } from "@/components/Breadcrumbs";
import { contentKeys, fetchConceptDetail } from "@/lib/api";
import { buildStudyNavigateTarget } from "@/lib/studyPath";
import { setConceptStatus } from "@/lib/db";
import { getConceptStatusFromStore, updateConceptProgress } from "@/store/progressStore";
import type { ConceptStatus } from "@/types/content";

export function ConceptDetailView({ conceptId }: { conceptId: string }) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data: manifest } = useQuery({
    queryKey: contentKeys.flashcards,
    queryFn: () => import("@/lib/api").then((m) => m.fetchFlashcardManifest()),
    staleTime: Infinity,
  });

  const { data: concept, isLoading, error } = useQuery({
    queryKey: contentKeys.concept(conceptId),
    queryFn: () => fetchConceptDetail(conceptId),
    staleTime: Infinity,
  });

  const status = getConceptStatusFromStore(conceptId);

  const markConcept = async (newStatus: ConceptStatus) => {
    await setConceptStatus(conceptId, newStatus);
    updateConceptProgress(conceptId, newStatus);
  };

  const prefetchConcept = (id: string) => {
    queryClient.prefetchQuery({
      queryKey: contentKeys.concept(id),
      queryFn: () => fetchConceptDetail(id),
      staleTime: Infinity,
    });
  };

  if (isLoading) {
    return <p className="text-muted">Loading concept…</p>;
  }

  if (error || !concept) {
    return (
      <div className="rounded-xl border border-border bg-surface p-6">
        <p className="text-foreground">Concept not found: {conceptId}</p>
        <button
          type="button"
          className="mt-4 text-sm text-accent hover:underline"
          onClick={() => navigate({ to: "/concepts" })}
        >
          Browse all concepts
        </button>
      </div>
    );
  }

  return (
    <article className="mx-auto max-w-3xl space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        <ReturnToCardChip />
        <ConceptStatusBadge status={status} />
        <span className="rounded-full bg-surface-elevated px-2 py-0.5 text-xs text-muted">
          {concept.depth}
        </span>
      </div>

      <header>
        <h1 className="text-2xl font-semibold tracking-tight">{concept.title}</h1>
        {concept.aliases.length > 0 && (
          <p className="mt-1 text-sm text-muted">
            Also: {concept.aliases.join(", ")}
          </p>
        )}
      </header>

      <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
        <MarkdownContent
          content={concept.bodyLinked}
          variant="concept"
          onConceptHover={prefetchConcept}
        />
      </div>

      {concept.related.length > 0 && (
        <section>
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted">
            Related
          </h2>
          <div className="flex flex-wrap gap-2">
            {concept.related.map((id) => (
              <ConceptLinkButton
                key={id}
                conceptId={id}
                label={id.replace(/-/g, " ")}
                onHover={() => prefetchConcept(id)}
              />
            ))}
          </div>
        </section>
      )}

      {concept.usedInFlashcards.length > 0 && (
        <section>
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted">
            Used in questions
          </h2>
          <div className="flex flex-wrap gap-2">
            {concept.usedInFlashcards.map((cardId) => (
              <button
                key={cardId}
                type="button"
                className="rounded-lg border border-border px-3 py-1 text-sm hover:bg-surface-elevated"
                onClick={() => {
                  const card = manifest?.cards.find((entry) => entry.id === cardId);
                  if (!card) return;
                  navigate(
                    buildStudyNavigateTarget({
                      part: card.part,
                      section: card.section,
                      cardId,
                    }),
                  );
                }}
              >
                Card #{cardId}
              </button>
            ))}
          </div>
        </section>
      )}

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          className="rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium hover:bg-surface-elevated"
          onClick={() => markConcept("understood")}
        >
          ✓ Understood
        </button>
        <button
          type="button"
          className="rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium text-warning hover:bg-surface-elevated"
          onClick={() => markConcept("learning")}
        >
          ↻ Still learning
        </button>
      </div>
    </article>
  );
}
