import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useRef } from "react";
import { useStore } from "@tanstack/react-store";

import { ConceptStatusBadge } from "@/components/StatusBadge";
import { contentKeys } from "@/lib/api";
import { pushNav } from "@/store/navigationStore";
import { progressStore } from "@/store/progressStore";
import type { ConceptStatus } from "@/types/content";

export function ConceptIndexList({ filter }: { filter: string }) {
  const navigate = useNavigate();
  const parentRef = useRef<HTMLDivElement>(null);
  const conceptProgress = useStore(progressStore, (s) => s.concepts);

  const { data, isLoading } = useQuery({
    queryKey: contentKeys.conceptsIndex,
    queryFn: () => import("@/lib/api").then((m) => m.fetchConceptManifest()),
    staleTime: Infinity,
  });

  const filtered = (data?.concepts ?? []).filter((c) => {
    if (!filter.trim()) return true;
    const q = filter.toLowerCase();
    return (
      c.title.toLowerCase().includes(q) ||
      c.id.includes(q) ||
      c.aliases.some((a) => a.toLowerCase().includes(q))
    );
  });

  const virtualizer = useVirtualizer({
    count: filtered.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 56,
    overscan: 8,
  });

  if (isLoading) {
    return (
      <div
        className="h-[calc(100vh-12rem)] animate-pulse rounded-xl border border-border bg-surface"
        aria-hidden
      />
    );
  }

  return (
    <div ref={parentRef} className="h-[calc(100vh-12rem)] overflow-auto rounded-xl border border-border">
      <div
        style={{
          height: `${virtualizer.getTotalSize()}px`,
          width: "100%",
          position: "relative",
        }}
      >
        {virtualizer.getVirtualItems().map((virtualRow) => {
          const concept = filtered[virtualRow.index];
          const status: ConceptStatus = conceptProgress[concept.id] ?? "unread";

          return (
            <button
              key={concept.id}
              type="button"
              className="absolute left-0 top-0 flex w-full items-center justify-between gap-2 border-b border-border px-4 py-3 text-left hover:bg-surface-elevated"
              style={{
                height: `${virtualRow.size}px`,
                transform: `translateY(${virtualRow.start}px)`,
              }}
              onClick={() => {
                pushNav({
                  type: "concept",
                  conceptId: concept.id,
                  label: concept.title,
                });
                navigate({
                  to: "/concepts/$conceptId",
                  params: { conceptId: concept.id },
                });
              }}
            >
              <div>
                <p className="font-medium text-foreground">{concept.title}</p>
                <p className="text-xs text-muted">{concept.depth}</p>
              </div>
              <ConceptStatusBadge status={status} />
            </button>
          );
        })}
      </div>
    </div>
  );
}
