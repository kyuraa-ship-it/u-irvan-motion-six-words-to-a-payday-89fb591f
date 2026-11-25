import { writeFileSync, mkdirSync } from "node:fs";

const ENTRY = "First paycheck: I tipped my creator.";

// Gate assert: exactly six words, 1-60 chars, not only whitespace.
const words = ENTRY.trim().split(/\s+/);
if (words.length !== 6) throw new Error(`expected 6 words, got ${words.length}`);
if (ENTRY.length < 1 || ENTRY.length > 60) throw new Error(`length ${ENTRY.length} outside 1-60`);
if (!ENTRY.trim()) throw new Error("blank entry");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars`);
