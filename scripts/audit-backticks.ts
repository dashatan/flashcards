import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const ROOT = path.resolve(import.meta.dirname, "..");
const CARDS_PATH = path.join(ROOT, "content/flashcards/cards.json");
const CONCEPTS_DIR = path.join(ROOT, "content/concepts");

const raw = JSON.parse(fs.readFileSync(CARDS_PATH, "utf8")) as {
  cards: Array<{ id: number; question: string; answer: string }>;
};

const aliasToId = new Map<string, string>();
for (const f of fs.readdirSync(CONCEPTS_DIR).filter((x) => x.endsWith(".md"))) {
  const { data } = matter(fs.readFileSync(path.join(CONCEPTS_DIR, f), "utf8"));
  const id = data.id as string;
  aliasToId.set(id.toLowerCase(), id);
  aliasToId.set((data.title as string).toLowerCase(), id);
  for (const a of (data.aliases as string[]) ?? []) aliasToId.set(a.toLowerCase(), id);
}

const backticks = new Map<string, number>();
for (const card of raw.cards) {
  const text = card.question + " " + card.answer;
  for (const m of text.matchAll(/`([^`\n]+)`/g)) {
    const t = m[1].trim();
    if (t.length > 60) continue;
    backticks.set(t, (backticks.get(t) ?? 0) + 1);
  }
}

const unmapped = [...backticks.entries()]
  .filter(([t]) => !aliasToId.has(t.toLowerCase()))
  .sort((a, b) => b[1] - a[1]);

console.log("Unmapped backtick terms (top 60):");
for (const [t, c] of unmapped.slice(0, 60)) {
  console.log(`${c}x  ${t}`);
}
