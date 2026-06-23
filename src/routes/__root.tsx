import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useEffect } from "react";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import {
  exportProgress,
  getAllConceptProgress,
  getAllFlashcardProgress,
  importProgress,
} from "@/lib/db";
import { setProgressLoaded } from "@/store/progressStore";
import { DEFAULT_STUDY_SEARCH } from "@/lib/defaultStudySearch";

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  useEffect(() => {
    async function loadProgress() {
      const flashcards = await getAllFlashcardProgress();
      const concepts = await getAllConceptProgress();
      setProgressLoaded(flashcards, concepts);
    }
    loadProgress();
  }, []);

  return (
    <div className="flex min-h-full flex-col flex-1">
      <header className="border-b border-border bg-surface px-4 py-3">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-4">
              <Link
                to="/study"
                search={DEFAULT_STUDY_SEARCH}
                className="text-lg font-semibold tracking-tight text-foreground"
              >
                Knowledge Flashcards
              </Link>
              <nav className="flex gap-3 text-sm">
                <Link
                  to="/study"
                  search={DEFAULT_STUDY_SEARCH}
                  className="text-muted hover:text-accent [&.active]:text-accent [&.active]:font-medium"
                >
                  Study
                </Link>
                <Link
                  to="/concepts"
                  className="text-muted hover:text-accent [&.active]:text-accent [&.active]:font-medium"
                >
                  Concepts
                </Link>
                <Link
                  to="/browse"
                  className="text-muted hover:text-accent [&.active]:text-accent [&.active]:font-medium"
                >
                  Browse
                </Link>
              </nav>
            </div>
            <Breadcrumbs />
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              className="rounded-lg border border-border px-3 py-1.5 text-xs text-muted hover:bg-surface-elevated"
              onClick={async () => {
                const json = await exportProgress();
                const blob = new Blob([json], { type: "application/json" });
                const url = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = `flashcards-progress-${Date.now()}.json`;
                a.click();
                URL.revokeObjectURL(url);
              }}
            >
              Export
            </button>
            <button
              type="button"
              className="rounded-lg border border-border px-3 py-1.5 text-xs text-muted hover:bg-surface-elevated"
              onClick={() => {
                const input = document.createElement("input");
                input.type = "file";
                input.accept = "application/json";
                input.onchange = async () => {
                  const file = input.files?.[0];
                  if (!file) return;
                  const text = await file.text();
                  await importProgress(text);
                  const flashcards = await getAllFlashcardProgress();
                  const concepts = await getAllConceptProgress();
                  setProgressLoaded(flashcards, concepts);
                };
                input.click();
              }}
            >
              Import
            </button>
          </div>
        </div>
      </header>
      <main className="mx-auto flex w-full max-w-6xl min-h-0 flex-1 gap-6 px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
}
