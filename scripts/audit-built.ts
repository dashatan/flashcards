import fs from "node:fs";

const cards = JSON.parse(
  fs.readFileSync("public/data/flashcards.json", "utf8"),
).cards as Array<{ id: number; section: string; question: string; conceptIds: string[] }>;

const zero = cards.filter((c) => c.conceptIds.length === 0);
console.log("Zero link cards:", zero.length);
for (const c of zero) {
  console.log(`#${c.id} ${c.section} — ${c.question.slice(0, 72)}`);
}

const counts = cards.map((c) => c.conceptIds.length);
const avg = counts.reduce((a, b) => a + b, 0) / counts.length;
console.log(`Avg concepts per card: ${avg.toFixed(1)}`);
console.log(`Min: ${Math.min(...counts)}, Max: ${Math.max(...counts)}`);
