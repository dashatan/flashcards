import { Store } from "@tanstack/store";

import type { StudyFilters } from "@/types/content";

export const DEFAULT_STUDY_FILTERS: StudyFilters = {
  shuffle: false,
  reviewOnly: false,
  status: "all",
  unreadConcepts: false,
};

export const studyFiltersStore = new Store<StudyFilters>(DEFAULT_STUDY_FILTERS);

export function patchStudyFilters(patch: Partial<StudyFilters>): void {
  studyFiltersStore.setState((state) => ({ ...state, ...patch }));
}
