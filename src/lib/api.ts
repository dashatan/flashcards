import type { QueryClient } from "@tanstack/react-query";

import type {
  ConceptDetail,
  ConceptManifest,
  FlashcardManifest,
} from "@/types/content";

const FLASHCARDS_URL = "/data/flashcards.json";
const CONCEPTS_INDEX_URL = "/data/concepts-index.json";

export async function fetchFlashcardManifest(): Promise<FlashcardManifest> {
  const res = await fetch(FLASHCARDS_URL);
  if (!res.ok) throw new Error("Failed to load flashcards");
  return res.json() as Promise<FlashcardManifest>;
}

export async function fetchConceptManifest(): Promise<ConceptManifest> {
  const res = await fetch(CONCEPTS_INDEX_URL);
  if (!res.ok) throw new Error("Failed to load concepts index");
  return res.json() as Promise<ConceptManifest>;
}

export async function fetchConceptDetail(conceptId: string): Promise<ConceptDetail> {
  const res = await fetch(`/data/concepts/${conceptId}.json`);
  if (!res.ok) throw new Error(`Concept not found: ${conceptId}`);
  return res.json() as Promise<ConceptDetail>;
}

export const contentKeys = {
  flashcards: ["flashcards"] as const,
  conceptsIndex: ["concepts-index"] as const,
  concept: (id: string) => ["concept", id] as const,
};

export function getConceptIdFromPathname(pathname: string): string | undefined {
  const match = pathname.match(/^\/concepts\/([^/?#]+)/);
  return match?.[1];
}

export function prefetchConceptDetail(client: QueryClient, conceptId: string) {
  return client.prefetchQuery({
    queryKey: contentKeys.concept(conceptId),
    queryFn: () => fetchConceptDetail(conceptId),
    staleTime: Infinity,
  });
}
