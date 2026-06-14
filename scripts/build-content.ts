import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

import type {
  ConceptDepth,
  ConceptDetail,
  ConceptIndexEntry,
  ConceptManifest,
  Flashcard,
  FlashcardManifest,
} from "../src/types/content.ts";

const ROOT = path.resolve(import.meta.dirname, "..");
const CARDS_PATH = path.join(ROOT, "content/flashcards/cards.json");
const CONCEPTS_DIR = path.join(ROOT, "content/concepts");
const OUT_DIR = path.join(ROOT, "public/data");

interface RawFlashcardData {
  generatedAt: string;
  total: number;
  parts: string[];
  cards: Array<{
    id: number;
    part: string;
    section: string;
    question: string;
    answer: string;
  }>;
}

interface ConceptFrontmatter {
  id: string;
  title: string;
  aliases?: string[];
  depth?: ConceptDepth;
  related?: string[];
  usedInFlashcards?: number[];
}

const CONCEPT_LINK_RE = /\[([^\]]+)\]\(concept:([a-z0-9-]+)\)/gi;
const CODE_BLOCK_RE = /```[\s\S]*?```/g;
const INLINE_CODE_RE = /`[^`\n]+`/g;
const MARKDOWN_LINK_RE = /\[([^\]]+)\]\([^)]+\)/gi;
const PLACEHOLDER_RE =
  /__(?:CODE_BLOCK|INLINE_CODE|EXISTING_LINK)_(\d+)__/g;

function generateAliasVariants(raw: string): string[] {
  const variants = new Set<string>();
  const add = (value: string) => {
    if (typeof value !== "string" || !value) return;
    const trimmed = value.trim();
    if (trimmed.length >= 2) variants.add(trimmed);
  };

  add(raw);
  const lower = raw.toLowerCase();
  add(lower);

  if (raw.includes("-")) add(raw.replace(/-/g, " "));
  if (raw.includes(" ")) add(raw.replace(/ /g, "-"));

  if (lower.endsWith("-scope")) add(lower + "d");
  if (lower.endsWith(" scope")) add(lower.replace(/ scope$/, "-scoped"));

  if (lower.endsWith("ing") && lower.length > 4) {
    add(lower.slice(0, -3) + "ed");
  }

  if (!lower.endsWith("s") && lower.length > 3) add(lower + "s");

  return [...variants];
}

function registerConceptAliases(
  aliasToId: Map<string, string>,
  inlineAliasToId: Map<string, string>,
  alias: string,
  id: string,
): void {
  if (!id || typeof id !== "string") return;
  if (typeof alias !== "string" || !alias) return;
  for (const variant of generateAliasVariants(alias)) {
    const lower = variant.toLowerCase();
    if (!aliasToId.has(lower)) aliasToId.set(lower, id);
    if (!inlineAliasToId.has(variant)) inlineAliasToId.set(variant, id);
    if (!inlineAliasToId.has(lower)) inlineAliasToId.set(lower, id);
  }
}

function resolveInlineConceptId(
  inner: string,
  aliasToId: Map<string, string>,
  inlineAliasToId: Map<string, string>,
): string | undefined {
  return (
    inlineAliasToId.get(inner) ??
    inlineAliasToId.get(inner.toLowerCase()) ??
    aliasToId.get(inner.toLowerCase())
  );
}

function extractConceptIds(markdown: string): string[] {
  const ids = new Set<string>();
  let match = CONCEPT_LINK_RE.exec(markdown);
  while (match !== null) {
    ids.add(match[2]);
    match = CONCEPT_LINK_RE.exec(markdown);
  }
  CONCEPT_LINK_RE.lastIndex = 0;
  return [...ids];
}

function protectSegment(
  segment: string,
  placeholders: string[],
  kind: "CODE_BLOCK" | "INLINE_CODE" | "EXISTING_LINK",
): string {
  const index = placeholders.length;
  placeholders.push(segment);
  return `__${kind}_${index}__`;
}

function restorePlaceholders(text: string, placeholders: string[]): string {
  return text.replace(PLACEHOLDER_RE, (_, index) => {
    return placeholders[Number(index)] ?? "";
  });
}

function linkConceptsInText(
  text: string,
  aliasToId: Map<string, string>,
  inlineAliasToId: Map<string, string>,
): string {
  const placeholders: string[] = [];

  let protectedText = text.replace(CODE_BLOCK_RE, (block) =>
    protectSegment(block, placeholders, "CODE_BLOCK"),
  );

  protectedText = protectedText.replace(INLINE_CODE_RE, (code) => {
    const inner = code.slice(1, -1).trim();
    const id = resolveInlineConceptId(inner, aliasToId, inlineAliasToId);
    if (id) {
      return protectSegment(`[${inner}](concept:${id})`, placeholders, "EXISTING_LINK");
    }
    return protectSegment(code, placeholders, "INLINE_CODE");
  });

  protectedText = protectedText.replace(MARKDOWN_LINK_RE, (link) =>
    protectSegment(link, placeholders, "EXISTING_LINK"),
  );

  const aliases = [...aliasToId.keys()].sort((a, b) => b.length - a.length);

  for (const alias of aliases) {
    const id = aliasToId.get(alias);
    if (!id) continue;
    const pattern = new RegExp(`(?<![\\w/])${escapeRegex(alias)}(?![\\w-])`, "gi");
    protectedText = protectedText.replace(pattern, (match) =>
      protectSegment(`[${match}](concept:${id})`, placeholders, "EXISTING_LINK"),
    );
  }

  return restorePlaceholders(protectedText, placeholders);
}

function escapeRegex(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function readConcepts(): ConceptDetail[] {
  if (!fs.existsSync(CONCEPTS_DIR)) {
    return [];
  }

  const files = fs
    .readdirSync(CONCEPTS_DIR)
    .filter((file) => file.endsWith(".md"))
    .sort();

  return files.map((file) => {
    const raw = fs.readFileSync(path.join(CONCEPTS_DIR, file), "utf8");
    const { data, content } = matter(raw);
    const fm = data as ConceptFrontmatter;

    if (!fm.id || !fm.title) {
      throw new Error(`Concept ${file} must have id and title in frontmatter`);
    }

    const body = content.trim();
    const conceptIds = extractConceptIds(body);

    return {
      id: fm.id,
      title: fm.title,
      aliases: fm.aliases ?? [],
      depth: fm.depth ?? "intermediate",
      related: fm.related ?? [],
      usedInFlashcards: fm.usedInFlashcards ?? [],
      body,
      bodyLinked: body,
      conceptIds,
    };
  });
}

function buildAliasMap(concepts: ConceptDetail[]): {
  aliasToId: Map<string, string>;
  inlineAliasToId: Map<string, string>;
} {
  const aliasToId = new Map<string, string>();
  const inlineAliasToId = new Map<string, string>();

  for (const concept of concepts) {
    registerConceptAliases(aliasToId, inlineAliasToId, concept.title, concept.id);
    registerConceptAliases(aliasToId, inlineAliasToId, concept.id, concept.id);
    for (const alias of concept.aliases) {
      registerConceptAliases(aliasToId, inlineAliasToId, alias, concept.id);
    }
  }

  const supplements: Record<string, string> = {
    ssr: "server-side-rendering",
    tdz: "temporal-dead-zone",
    vdom: "virtual-dom",
    rsc: "react-server-components",
    rum: "observability",
    csp: "content-security-policy",
    inp: "inp",
    lcp: "lcp",
    cls: "cls",
    dom: "dom",
    call: "call-apply-bind",
    apply: "call-apply-bind",
    bind: "call-apply-bind",
    map: "array-map-filter-reduce",
    filter: "array-map-filter-reduce",
    reduce: "array-map-filter-reduce",
    foreach: "array-map-filter-reduce",
    findindex: "array-map-filter-reduce",
    find: "array-map-filter-reduce",
    flatmap: "array-map-filter-reduce",
    "promise.all": "promise",
    "promise.race": "promise",
    "promise.any": "promise",
    "promise.allsettled": "promise",
    "promise.resolve": "promise",
    ".then()": "promise",
    ".catch()": "promise",
    prototype: "prototype-chain",
    __proto__: "prototype-chain",
    "[[prototype]]": "prototype-chain",
    "object.prototype": "prototype-chain",
    syntaxerror: "syntax-error",
    null: "null-value",
    "object.assign": "object-assign",
    "object.defineproperty": "object-define-property",
    "object.create": "object-create",
    "object.freeze": "object-freeze-seal",
    "object.seal": "object-freeze-seal",
    settimeout: "timers",
    setinterval: "timers",
    "settimeout(0)": "timers",
    setimmediate: "timers",
    mutationobserver: "mutation-observer",
    abortcontroller: "abort-controller",
    componentdidmount: "component-lifecycle",
    "act()": "react-act",
    textcontent: "text-content",
    "super()": "super-keyword",
    "==": "loose-equality",
    "===": "strict-equality",
    tonumber: "abstract-operations",
    tostring: "abstract-operations",
    "number()": "abstract-operations",
    "parseint()": "abstract-operations",
    enumerable: "property-descriptors",
    configurable: "property-descriptors",
    writable: "property-descriptors",
    get: "getters-setters",
    set: "getters-setters",
    Map: "map-data-structure",
    Set: "set-data-structure",
    promises: "promise",
    microtasks: "microtask",
    macrotasks: "macrotask",
    "re-render": "react-re-render",
    rerender: "react-re-render",
    suspense: "react-suspense",
    "error boundaries": "error-boundary",
    monitoring: "observability",
    composition: "react-composition",
    "component composition": "react-composition",
    "prop drilling": "prop-drilling",
    "server state": "server-state-vs-client-state",
    "ui state": "server-state-vs-client-state",
    "component state": "props-vs-state",
    "react props": "props-vs-state",
    diffing: "reconciliation",
    "diffing algorithm": "reconciliation",
    "dead code elimination": "tree-shaking",
    "tree shaking": "tree-shaking",
    "code splitting": "code-splitting",
    "lazy loading": "lazy-loading",
    repaint: "reflow-repaint",
    reflow: "reflow-repaint",
    "layout thrashing": "reflow-repaint",
    "hot module replacement": "hmr",
    "virtual dom": "virtual-dom",
    "web workers": "web-workers",
    "es modules": "es-modules",
    "custom hooks": "custom-hooks",
    "arrow functions": "arrow-function",
    "function declarations": "function-declaration",
    "temporal dead zone": "temporal-dead-zone",
    prototypal: "prototype-chain",
    closures: "closure",
    hoisted: "hoisting",
    "lifted up": "lifting-state-up",
    "local state": "props-vs-state",
    "global state": "react-context-api",
    propagation: "event-bubbling-capturing",
    logging: "observability",
    accessibility: "accessibility-a11y",
    a11y: "accessibility-a11y",
    babel: "babel",
    "environment variables": "environment-variables",
    env: "environment-variables",
    rail: "rail-performance-model",
    "!!": "boolean-conversion",
    boolean: "boolean-conversion",
    "array.some": "array-some-every",
    "array.every": "array-some-every",
    some: "array-some-every",
    every: "array-some-every",
    shuffle: "fisher-yates-shuffle",
    sort: "array-sort",
    "custom error": "custom-error-types",
    "unit, integration, and e2e": "testing-pyramid",
    "unit tests": "testing-pyramid",
    "integration tests": "testing-pyramid",
    "e2e tests": "testing-pyramid",
    generics: "typescript-generics",
    "event handlers": "typescript-react-events",
    "higher-order components": "higher-order-component",
    hoc: "higher-order-component",
    profiling: "js-profiling",
    "large lists": "react-list-virtualization",
    "index as key": "react-key-prop",
    "coding standards": "coding-standards",
    "try...catch...finally": "try-catch-finally",
    "structure a large react application": "feature-based-architecture",
    "large react application": "feature-based-architecture",
    "local and global state": "props-vs-state",
    "debugging tools": "js-debugging-tools",
    "useimperativehandle": "use-imperative-handle",
    "redux toolkit": "redux-toolkit",
    "performance bottlenecks": "js-profiling",
    "generic components": "typescript-generics",
    "conditional types": "typescript-conditional-types",
    "mapped types": "typescript-mapped-types",
    "snapshot testing": "snapshot-testing",
    "module bundlers": "module-bundlers",
    postcss: "postcss",
    "branching strategy": "git-branching",
    "database migrations": "database-migrations",
    "deployment process": "ci-cd",
    documentation: "adr",
    "readable code": "coding-standards",
    readability: "coding-standards",
    devtools: "js-debugging-tools",
    "css selectors": "css-selector-performance",
    context: "use-context",
    playwright: "e2e-testing",
    cypress: "e2e-testing",
  };

  for (const [alias, id] of Object.entries(supplements)) {
    if (concepts.some((concept) => concept.id === id)) {
      registerConceptAliases(aliasToId, inlineAliasToId, alias, id);
    }
  }

  return { aliasToId, inlineAliasToId };
}

function validateLinks(concepts: ConceptDetail[], cards: Flashcard[]): void {
  const ids = new Set(concepts.map((c) => c.id));
  const errors: string[] = [];

  for (const concept of concepts) {
    for (const linked of concept.conceptIds) {
      if (!ids.has(linked)) {
        errors.push(`Concept "${concept.id}" links to missing concept "${linked}"`);
      }
    }
    for (const related of concept.related) {
      if (!related || typeof related !== "string") continue;
      if (!ids.has(related)) {
        errors.push(`Concept "${concept.id}" related to missing concept "${related}"`);
      }
    }
  }

  for (const card of cards) {
    for (const linked of card.conceptIds) {
      if (!ids.has(linked)) {
        errors.push(`Flashcard #${card.id} links to missing concept "${linked}"`);
      }
    }
  }

  if (errors.length > 0) {
    throw new Error(`Link validation failed:\n${errors.join("\n")}`);
  }
}

export function buildContent(): void {
  const raw = JSON.parse(fs.readFileSync(CARDS_PATH, "utf8")) as RawFlashcardData;
  const concepts = readConcepts();
  const { aliasToId, inlineAliasToId } = buildAliasMap(concepts);

  for (const concept of concepts) {
    concept.bodyLinked = linkConceptsInText(concept.body, aliasToId, inlineAliasToId);
    concept.conceptIds = extractConceptIds(concept.bodyLinked);
  }

  const cards: Flashcard[] = raw.cards.map((card) => {
    const questionLinked = linkConceptsInText(card.question, aliasToId, inlineAliasToId);
    const answerLinked = linkConceptsInText(card.answer, aliasToId, inlineAliasToId);
    const conceptIds = [
      ...extractConceptIds(questionLinked),
      ...extractConceptIds(answerLinked),
    ];

    return {
      ...card,
      questionLinked,
      answerLinked,
      conceptIds: [...new Set(conceptIds)],
    };
  });

  validateLinks(concepts, cards);

  const sections: Record<string, string[]> = {};
  for (const part of raw.parts) {
    sections[part] = [
      ...new Set(raw.cards.filter((c) => c.part === part).map((c) => c.section)),
    ].sort();
  }

  const flashcardManifest: FlashcardManifest = {
    generatedAt: new Date().toISOString(),
    total: raw.total,
    parts: raw.parts,
    sections,
    cards,
  };

  const conceptIndex: ConceptIndexEntry[] = concepts.map((c) => ({
    id: c.id,
    title: c.title,
    aliases: c.aliases,
    depth: c.depth,
    related: c.related,
    usedInFlashcards: [
      ...new Set([
        ...c.usedInFlashcards,
        ...cards.filter((card) => card.conceptIds.includes(c.id)).map((card) => card.id),
      ]),
    ].sort((a, b) => a - b),
  }));

  const aliasRecord: Record<string, string> = {};
  for (const [alias, id] of aliasToId.entries()) {
    aliasRecord[alias] = id;
  }

  const conceptManifest: ConceptManifest = {
    generatedAt: new Date().toISOString(),
    concepts: conceptIndex,
    aliasMap: aliasRecord,
  };

  fs.mkdirSync(path.join(OUT_DIR, "concepts"), { recursive: true });

  fs.writeFileSync(
    path.join(OUT_DIR, "flashcards.json"),
    JSON.stringify(flashcardManifest, null, 2),
  );
  fs.writeFileSync(
    path.join(OUT_DIR, "concepts-index.json"),
    JSON.stringify(conceptManifest, null, 2),
  );

  for (const concept of concepts) {
    const detail: ConceptDetail = {
      ...concept,
      usedInFlashcards: conceptIndex.find((e) => e.id === concept.id)?.usedInFlashcards ?? [],
    };
    fs.writeFileSync(
      path.join(OUT_DIR, "concepts", `${concept.id}.json`),
      JSON.stringify(detail, null, 2),
    );
  }

  console.log(
    `Built ${cards.length} flashcards and ${concepts.length} concepts → public/data/`,
  );
}

buildContent();
