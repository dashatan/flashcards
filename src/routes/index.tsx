import { createFileRoute, redirect } from "@tanstack/react-router";

import { DEFAULT_STUDY_SEARCH } from "@/lib/defaultStudySearch";

export const Route = createFileRoute("/")({
  beforeLoad: () => {
    throw redirect({ to: "/study", search: DEFAULT_STUDY_SEARCH });
  },
});
