import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const ROOT = path.resolve(import.meta.dirname, "..");
const CARDS_PATH = path.join(ROOT, "content/flashcards/cards.json");
const CONCEPTS_DIR = path.join(ROOT, "content/concepts");

const raw = JSON.parse(fs.readFileSync(CARDS_PATH, "utf8")) as {
  cards: Array<{ id: number; section: string; question: string; answer: string }>;
};

const concepts = fs
  .readdirSync(CONCEPTS_DIR)
  .filter((f) => f.endsWith(".md"))
  .map((f) => {
    const { data } = matter(fs.readFileSync(path.join(CONCEPTS_DIR, f), "utf8"));
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

function escapeRegex(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const CODE_BLOCK_RE = /```[\s\S]*?```/g;
const INLINE_CODE_RE = /`[^`\n]+`/g;
const MARKDOWN_LINK_RE = /\[([^\]]+)\]\([^)]+\)/gi;

function findMatches(text: string): Array<{ alias: string; id: string }> {
  let plain = text.replace(CODE_BLOCK_RE, " ").replace(INLINE_CODE_RE, " ");
  plain = plain.replace(MARKDOWN_LINK_RE, " ");
  const found: Array<{ alias: string; id: string }> = [];
  const usedRanges: Array<{ start: number; end: number }> = [];
  const aliases = [...aliasToId.keys()].sort((a, b) => b.length - a.length);

  for (const alias of aliases) {
    const id = aliasToId.get(alias)!;
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

const zeroLink = raw.cards.filter((card) => findMatches(card.question + " " + card.answer).length === 0);
console.log(`Cards with no possible alias matches: ${zeroLink.length}`);
for (const c of zeroLink.slice(0, 15)) {
  console.log(`#${c.id} ${c.section}`);
  console.log(`  Q: ${c.question.slice(0, 100)}`);
  console.log(`  A: ${c.answer.slice(0, 140)}`);
  console.log();
}
