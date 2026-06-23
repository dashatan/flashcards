import { redirect } from "@tanstack/react-router";

import type { FlashcardManifest, StudyFilters, StudyLocation } from "@/types/content";
import { patchStudyFilters } from "@/store/studyFiltersStore";

export function toStudySlug(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function parseStudySplat(splat: string | undefined): {
  partSlug: string;
  sectionSlug: string;
  cardId: number | undefined;
} {
  const segments = splat?.split("/").filter(Boolean) ?? [];
  let cardId: number | undefined;

  if (segments.length >= 3 && /^\d+$/.test(segments[segments.length - 1] ?? "")) {
    cardId = Number(segments.pop());
  }

  return {
    partSlug: segments[0] ?? "",
    sectionSlug: segments[1] ?? "",
    cardId,
  };
}

export function resolveStudyLocation(
  manifest: FlashcardManifest,
  slugs: ReturnType<typeof parseStudySplat>,
): StudyLocation {
  const part =
    slugs.partSlug === ""
      ? ""
      : (manifest.parts.find((value) => toStudySlug(value) === slugs.partSlug) ?? "");

  const section =
    part === "" || slugs.sectionSlug === ""
      ? ""
      : (manifest.sections[part]?.find(
          (value) => toStudySlug(value) === slugs.sectionSlug,
        ) ?? "");

  return {
    part,
    section,
    cardId: slugs.cardId,
  };
}

export function mergeStudyLocation(
  prev: StudyLocation,
  patch: Partial<StudyLocation>,
): StudyLocation {
  const part = patch.part ?? prev.part;
  const section =
    patch.section !== undefined
      ? patch.section
      : patch.part !== undefined && patch.part !== prev.part
        ? ""
        : prev.section;

  return {
    part,
    section,
    cardId: patch.cardId !== undefined ? patch.cardId : prev.cardId,
  };
}

type StudyNavigateTarget =
  | { to: "/study" }
  | { to: "/study/$"; params: { _splat: string } };

export function buildStudyNavigateTarget(
  location: {
    part?: string;
    section?: string;
    cardId?: number;
  },
): StudyNavigateTarget {
  const segments: string[] = [];

  if (location.part) {
    segments.push(toStudySlug(location.part));
  }
  if (location.section) {
    segments.push(toStudySlug(location.section));
  }
  if (location.cardId !== undefined) {
    segments.push(String(location.cardId));
  }

  if (segments.length === 0) {
    return { to: "/study" };
  }

  return {
    to: "/study/$",
    params: { _splat: segments.join("/") },
  };
}

export function parseLegacyStudySearch(
  search: Record<string, unknown>,
): StudyLocation | null {
  const hasLegacy =
    typeof search.part === "string" ||
    typeof search.section === "string" ||
    search.cardId !== undefined ||
    search.shuffle === true ||
    search.shuffle === "true" ||
    search.reviewOnly === true ||
    search.reviewOnly === "true" ||
    (typeof search.status === "string" && search.status !== "all") ||
    search.unreadConcepts === true ||
    search.unreadConcepts === "true";

  if (!hasLegacy) {
    return null;
  }

  const cardIdRaw = search.cardId;
  const cardId =
    typeof cardIdRaw === "number"
      ? cardIdRaw
      : typeof cardIdRaw === "string" && cardIdRaw !== ""
        ? Number(cardIdRaw)
        : undefined;

  return {
    part: typeof search.part === "string" ? search.part : "",
    section: typeof search.section === "string" ? search.section : "",
    cardId: Number.isFinite(cardId) ? cardId : undefined,
  };
}

export function parseLegacyStudyFilters(
  search: Record<string, unknown>,
): StudyFilters | null {
  const hasFilters =
    search.shuffle === true ||
    search.shuffle === "true" ||
    search.reviewOnly === true ||
    search.reviewOnly === "true" ||
    (typeof search.status === "string" && search.status !== "all") ||
    search.unreadConcepts === true ||
    search.unreadConcepts === "true";

  if (!hasFilters) {
    return null;
  }

  const statusRaw = typeof search.status === "string" ? search.status : "all";

  return {
    shuffle: search.shuffle === true || search.shuffle === "true",
    reviewOnly: search.reviewOnly === true || search.reviewOnly === "true",
    status:
      statusRaw === "unseen" ||
      statusRaw === "learning" ||
      statusRaw === "known" ||
      statusRaw === "review"
        ? statusRaw
        : "all",
    unreadConcepts:
      search.unreadConcepts === true || search.unreadConcepts === "true",
  };
}

export function redirectLegacyStudySearch(search: Record<string, unknown>): void {
  const legacyFilters = parseLegacyStudyFilters(search);
  if (legacyFilters) {
    patchStudyFilters(legacyFilters);
  }

  const legacyLocation = parseLegacyStudySearch(search);
  if (!legacyLocation) {
    return;
  }

  throw redirect(buildStudyNavigateTarget(legacyLocation));
}
