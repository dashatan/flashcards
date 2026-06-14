import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { ConceptIndexList } from "@/components/ConceptIndexList";
import { resetNav } from "@/store/navigationStore";

export const Route = createFileRoute("/concepts/")({
  component: ConceptsIndexPage,
});

function ConceptsIndexPage() {
  const [filter, setFilter] = useState("");

  useEffect(() => {
    resetNav([{ type: "concepts-index", label: "Concepts" }]);
  }, []);

  return (
    <div className="w-full max-w-3xl space-y-4">
      <header>
        <h1 className="text-xl font-semibold">Concept glossary</h1>
        <p className="text-sm text-muted">
          Deep definitions for every term linked in flashcards. Tap unread dots to study.
        </p>
      </header>
      <input
        type="search"
        placeholder="Search concepts, aliases…"
        className="w-full rounded-lg border border-border bg-surface px-4 py-2 text-sm"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ConceptIndexList filter={filter} />
    </div>
  );
}
