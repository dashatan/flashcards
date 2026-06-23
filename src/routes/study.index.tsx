import { createFileRoute } from "@tanstack/react-router";

import { StudyPage } from "@/components/StudyPage";
import { redirectLegacyStudySearch } from "@/lib/studyPath";

export const Route = createFileRoute("/study/")({
  beforeLoad: ({ search }) => {
    redirectLegacyStudySearch(search as Record<string, unknown>);
  },
  component: StudyPage,
});
