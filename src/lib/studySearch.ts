import type { StudySearch } from "@/types/content";

export function parseStudySearch(search: Record<string, unknown>): StudySearch {
  const part = typeof search.part === "string" ? search.part : "";
  const section = typeof search.section === "string" ? search.section : "";
  const shuffle = search.shuffle === true || search.shuffle === "true";
  const reviewOnly = search.reviewOnly === true || search.reviewOnly === "true";
  const unreadConcepts =
    search.unreadConcepts === true || search.unreadConcepts === "true";

  const statusRaw = typeof search.status === "string" ? search.status : "all";
  const status =
    statusRaw === "unseen" ||
    statusRaw === "learning" ||
    statusRaw === "known" ||
    statusRaw === "review"
      ? statusRaw
      : "all";

  const cardIdRaw = search.cardId;
  const cardId =
    typeof cardIdRaw === "number"
      ? cardIdRaw
      : typeof cardIdRaw === "string" && cardIdRaw !== ""
        ? Number(cardIdRaw)
        : undefined;

  return {
    part,
    section,
    shuffle,
    reviewOnly,
    status,
    unreadConcepts,
    cardId: Number.isFinite(cardId) ? cardId : undefined,
  };
}

export function studySearchToParams(search: StudySearch): Record<string, string | number | boolean> {
  const params: Record<string, string | number | boolean> = {};
  if (search.part) params.part = search.part;
  if (search.section) params.section = search.section;
  if (search.shuffle) params.shuffle = true;
  if (search.reviewOnly) params.reviewOnly = true;
  if (search.status !== "all") params.status = search.status;
  if (search.unreadConcepts) params.unreadConcepts = true;
  if (search.cardId !== undefined) params.cardId = search.cardId;
  return params;
}

export function shortPartLabel(part: string): string {
  const match = part.match(/Part \d+/);
  return match?.[0] ?? part;
}
