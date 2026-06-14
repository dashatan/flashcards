import type { StudySearch } from "@/types/content";

export const DEFAULT_STUDY_SEARCH: StudySearch = {
  part: "",
  section: "",
  shuffle: false,
  reviewOnly: false,
  status: "all",
  unreadConcepts: false,
  cardId: undefined,
};

export function mergeStudySearch(
  prev: Partial<StudySearch> | undefined,
  patch: Partial<StudySearch> = {},
): StudySearch {
  return {
    part: patch.part ?? prev?.part ?? DEFAULT_STUDY_SEARCH.part,
    section: patch.section ?? prev?.section ?? DEFAULT_STUDY_SEARCH.section,
    shuffle: patch.shuffle ?? prev?.shuffle ?? DEFAULT_STUDY_SEARCH.shuffle,
    reviewOnly: patch.reviewOnly ?? prev?.reviewOnly ?? DEFAULT_STUDY_SEARCH.reviewOnly,
    status: patch.status ?? prev?.status ?? DEFAULT_STUDY_SEARCH.status,
    unreadConcepts:
      patch.unreadConcepts ?? prev?.unreadConcepts ?? DEFAULT_STUDY_SEARCH.unreadConcepts,
    cardId: patch.cardId !== undefined ? patch.cardId : prev?.cardId,
  };
}
