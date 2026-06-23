import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

import { ConceptDetailView } from "@/components/ConceptDetailView";
import { contentKeys, fetchConceptDetail } from "@/lib/api";
import { queryClient } from "@/lib/queryClient";
import { pushNav } from "@/store/navigationStore";

export const Route = createFileRoute("/concepts/$conceptId")({
  loader: ({ params }) =>
    queryClient.ensureQueryData({
      queryKey: contentKeys.concept(params.conceptId),
      queryFn: () => fetchConceptDetail(params.conceptId),
      staleTime: Infinity,
    }),
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
