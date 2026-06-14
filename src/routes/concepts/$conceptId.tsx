import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

import { ConceptDetailView } from "@/components/ConceptDetailView";
import { pushNav } from "@/store/navigationStore";

export const Route = createFileRoute("/concepts/$conceptId")({
  component: ConceptPage,
});

function ConceptPage() {
  const { conceptId } = Route.useParams();

  useEffect(() => {
    pushNav({
      type: "concept",
      conceptId,
      label: conceptId.replace(/-/g, " "),
    });
  }, [conceptId]);

  return (
    <div className="w-full">
      <ConceptDetailView conceptId={conceptId} />
    </div>
  );
}
