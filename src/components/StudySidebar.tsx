import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { useStore } from "@tanstack/react-store";

import { contentKeys } from "@/lib/api";
import { buildStudyNavigateTarget } from "@/lib/studyPath";
import { shortPartLabel } from "@/lib/studySearch";
import { progressStore } from "@/store/progressStore";
import type { FlashcardStatus, StudyLocation } from "@/types/content";

interface StudySidebarProps {
  location: StudyLocation;
}

export function StudySidebar({ location }: StudySidebarProps) {
  const asideRef = useRef<HTMLElement>(null);
  const flashcardProgress = useStore(progressStore, (s) => s.flashcards);

  const { data } = useQuery({
    queryKey: contentKeys.flashcards,
    queryFn: () => import("@/lib/api").then((m) => m.fetchFlashcardManifest()),
    staleTime: Infinity,
  });

  useEffect(() => {
    if (!data) return;
    asideRef.current
      ?.querySelector(".active")
      ?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }, [location.part, location.section, data]);

  if (!data) return null;

  return (
    <aside
      ref={asideRef}
      className="scrollbar-left hidden min-h-0 w-56 shrink-0 flex-col self-stretch overflow-y-auto px-4 lg:flex"
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted">
        Sections
      </p>
      <nav className="space-y-4">
        {data.parts.map((part) => {
          const sections = data.sections[part] ?? [];
          return (
            <div key={part}>
              <p className="mb-1 text-sm font-medium text-foreground">
                {shortPartLabel(part)}
              </p>
              <ul className="space-y-1">
                {sections.map((section) => {
                  const sectionCards = data.cards.filter(
                    (c) => c.part === part && c.section === section,
                  );
                  const known = sectionCards.filter(
                    (c) => flashcardProgress[String(c.id)] === "known",
                  ).length;
                  const pct =
                    sectionCards.length > 0
                      ? Math.round((known / sectionCards.length) * 100)
                      : 0;

                  const linkTarget = buildStudyNavigateTarget({ part, section });

                  return (
                    <li key={section}>
                      <Link
                        {...linkTarget}
                        className="block rounded-lg px-2 py-1.5 text-sm text-muted hover:bg-surface-elevated hover:text-foreground [&.active]:bg-accent-muted [&.active]:text-accent"
                        activeProps={{ className: "active" }}
                      >
                        <span className="line-clamp-2">{section}</span>
                        <span className="text-xs">
                          {known}/{sectionCards.length} · {pct}%
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </nav>
    </aside>
  );
}

export function computeStats(
  cards: { id: number }[],
  progress: Record<string, FlashcardStatus>,
) {
  const known = cards.filter((c) => progress[String(c.id)] === "known").length;
  const review = cards.filter(
    (c) => progress[String(c.id)] === "review",
  ).length;
  const learning = cards.filter(
    (c) => progress[String(c.id)] === "learning",
  ).length;
  return { known, review, learning, total: cards.length };
}
