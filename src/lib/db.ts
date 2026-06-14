import Dexie, { type Table } from "dexie";

import type { ConceptStatus, FlashcardStatus } from "@/types/content";

interface FlashcardProgressRow {
  cardId: string;
  status: FlashcardStatus;
  updatedAt: number;
}

interface ConceptProgressRow {
  conceptId: string;
  status: ConceptStatus;
  updatedAt: number;
}

interface SettingRow {
  key: string;
  value: string;
}

class KnowledgeDatabase extends Dexie {
  flashcardProgress!: Table<FlashcardProgressRow, string>;
  conceptProgress!: Table<ConceptProgressRow, string>;
  settings!: Table<SettingRow, string>;

  constructor() {
    super("knowledge-flashcards");

    this.version(1).stores({
      flashcardProgress: "cardId",
      conceptProgress: "conceptId",
      settings: "key",
    });
  }
}

export const db = new KnowledgeDatabase();

export async function getFlashcardStatus(cardId: number): Promise<FlashcardStatus> {
  const row = await db.flashcardProgress.get(String(cardId));
  return row?.status ?? "unseen";
}

export async function setFlashcardStatus(
  cardId: number,
  status: FlashcardStatus,
): Promise<void> {
  await db.flashcardProgress.put({
    cardId: String(cardId),
    status,
    updatedAt: Date.now(),
  });
}

export async function getConceptStatus(conceptId: string): Promise<ConceptStatus> {
  const row = await db.conceptProgress.get(conceptId);
  return row?.status ?? "unread";
}

export async function setConceptStatus(
  conceptId: string,
  status: ConceptStatus,
): Promise<void> {
  await db.conceptProgress.put({
    conceptId,
    status,
    updatedAt: Date.now(),
  });
}

export async function getAllFlashcardProgress(): Promise<
  Record<string, FlashcardStatus>
> {
  const rows = await db.flashcardProgress.toArray();
  return Object.fromEntries(rows.map((r) => [r.cardId, r.status]));
}

export async function getAllConceptProgress(): Promise<Record<string, ConceptStatus>> {
  const rows = await db.conceptProgress.toArray();
  return Object.fromEntries(rows.map((r) => [r.conceptId, r.status]));
}

export async function clearAllProgress(): Promise<void> {
  await db.flashcardProgress.clear();
  await db.conceptProgress.clear();
}

export async function exportProgress(): Promise<string> {
  const flashcards = await getAllFlashcardProgress();
  const concepts = await getAllConceptProgress();
  return JSON.stringify(
    {
      exportedAt: new Date().toISOString(),
      flashcards,
      concepts,
    },
    null,
    2,
  );
}

export async function importProgress(json: string): Promise<void> {
  const data = JSON.parse(json) as {
    flashcards?: Record<string, FlashcardStatus>;
    concepts?: Record<string, ConceptStatus>;
  };

  if (data.flashcards) {
    await db.flashcardProgress.clear();
    const now = Date.now();
    await db.flashcardProgress.bulkPut(
      Object.entries(data.flashcards).map(([cardId, status]) => ({
        cardId,
        status,
        updatedAt: now,
      })),
    );
  }

  if (data.concepts) {
    await db.conceptProgress.clear();
    const now = Date.now();
    await db.conceptProgress.bulkPut(
      Object.entries(data.concepts).map(([conceptId, status]) => ({
        conceptId,
        status,
        updatedAt: now,
      })),
    );
  }
}

export async function getSetting(key: string): Promise<string | undefined> {
  const row = await db.settings.get(key);
  return row?.value;
}

export async function setSetting(key: string, value: string): Promise<void> {
  await db.settings.put({ key, value });
}
