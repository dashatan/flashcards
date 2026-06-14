import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const ROOT = path.resolve(import.meta.dirname, "..");
const flashcards = JSON.parse(
  fs.readFileSync(path.join(ROOT, "public/data/flashcards.json"), "utf8"),
) as {
  cards: Array<{
    id: number;
    section: string;
    question: string;
    answer: string;
    questionLinked: string;
    answerLinked: string;
    conceptIds: string[];
  }>;
};

const conceptsDir = path.join(ROOT, "content/concepts");
const concepts = fs
  .readdirSync(conceptsDir)
  .filter((f) => f.endsWith(".md"))
  .map((f) => {
    const raw = fs.readFileSync(path.join(conceptsDir, f), "utf8");
    const { data } = matter(raw);
    return {
      id: data.id as string,
      title: data.title as string,
      aliases: (data.aliases as string[]) ?? [],
    };
  });

const aliasToId = new Map<string, string>();
for (const c of concepts) {
  aliasToId.set(c.title.toLowerCase(), c.id);
  aliasToId.set(c.id.toLowerCase(), c.id);
  for (const a of c.aliases) aliasToId.set(a.toLowerCase(), c.id);
}

const CODE_RE = /`[^`\n]+`/g;
const EXISTING_LINK_RE = /\[([^\]]+)\]\(concept:[a-z0-9-]+\)/gi;

function escapeRegex(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function findUnlinkedAliases(text: string): Array<{ alias: string; id: string }> {
  let plain = text.replace(CODE_RE, " ").replace(EXISTING_LINK_RE, " ");
  const found: Array<{ alias: string; id: string }> = [];
  const usedRanges: Array<{ start: number; end: number }> = [];
  const aliases = [...aliasToId.keys()].sort((a, b) => b.length - a.length);

  for (const alias of aliases) {
    const id = aliasToId.get(alias);
    if (!id) continue;
    const pattern = new RegExp(`(?<![\\w/])${escapeRegex(alias)}(?![\\w])`, "gi");
    let match = pattern.exec(plain);
    while (match !== null) {
      const start = match.index;
      const end = start + match[0].length;
      const overlaps = usedRanges.some((r) => start < r.end && end > r.start);
      if (!overlaps) {
        usedRanges.push({ start, end });
        found.push({ alias: match[0], id });
      }
      match = pattern.exec(plain);
    }
  }
  return found;
}

// Terms in backticks that might need concepts
const backtickTerms = new Map<string, number>();
for (const card of flashcards.cards) {
  const text = `${card.question} ${card.answer}`;
  for (const m of text.matchAll(/`([^`\n]+)`/g)) {
    const term = m[1].trim();
    if (term.length < 2 || term.length > 40) continue;
    if (/^[a-zA-Z_$][\w$]*$/.test(term) || term.includes("(")) {
      const key = term.toLowerCase();
      if (!backtickTerms.has(key)) backtickTerms.set(key, 0);
      backtickTerms.set(key, backtickTerms.get(key)! + 1);
    }
  }
}

const unlinkedByConcept = new Map<
  string,
  { count: number; examples: Array<{ cardId: number; alias: string }> }
>();
let cardsWithGaps = 0;

for (const card of flashcards.cards) {
  const qUnlinked = findUnlinkedAliases(card.question);
  const aUnlinked = findUnlinkedAliases(card.answer);
  const allUnlinked = [...qUnlinked, ...aUnlinked];

  if (allUnlinked.length > 0) {
    cardsWithGaps += 1;
    for (const u of allUnlinked) {
      if (!unlinkedByConcept.has(u.id)) {
        unlinkedByConcept.set(u.id, { count: 0, examples: [] });
      }
      const entry = unlinkedByConcept.get(u.id)!;
      entry.count += 1;
      if (entry.examples.length < 3) {
        entry.examples.push({ cardId: card.id, alias: u.alias });
      }
    }
  }
}

console.log("=== Coverage audit ===");
console.log(`Concepts: ${concepts.length}`);
console.log(`Cards: ${flashcards.cards.length}`);
console.log(`Cards with unlinked alias matches in raw text: ${cardsWithGaps}`);

const sorted = [...unlinkedByConcept.entries()].sort((a, b) => b[1].count - a[1].count);
console.log(`\nTop unlinked alias occurrences (${sorted.length} concepts):`);
for (const [id, info] of sorted.slice(0, 50)) {
  const ex = info.examples.map((e) => `${e.alias}@#${e.cardId}`).join(", ");
  console.log(`  ${id}: ${info.count} — ${ex}`);
}

// Backtick terms not mapped to any concept alias
const unmappedBackticks = [...backtickTerms.entries()]
  .filter(([term]) => !aliasToId.has(term.toLowerCase()))
  .sort((a, b) => b[1] - a[1])
  .slice(0, 80);

console.log(`\nFrequent backtick terms without concept alias (${unmappedBackticks.length} shown):`);
for (const [term, count] of unmappedBackticks) {
  console.log(`  ${term}: ${count}`);
}

// Cards with zero concept links checked via audit-built.ts
