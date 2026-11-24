// One Word for Your Wi-Fi — a single word that is the funniest and the
// truest description of home Wi-Fi, judged head-to-head against the other
// entries. The program validates the word against the bounty gate (UTF-8,
// 1-20 characters, one word, no whitespace) and writes it to
// /output/entry.txt, then reads the file back to confirm the write landed.
//
// v1 — "Goldfish".
// The joke: your Wi-Fi has the memory of a goldfish. It forgets your phone
// every morning, drops the device it knew yesterday, and asks for the
// password again like you have never met. True (routers forget devices,
// "forget this network" is a daily ritual) and instantly gettable —
// everybody knows the three-second-memory goldfish. Fresh angle: nobody in
// the field plays the memory-loss card; the crowd is all Ghosting (26+),
// Gaslighting (18+), Peekaboo, Liar, Catfish — the relationship-behaviour
// cluster. A goldfish sidesteps that whole cluster.
// Doubt that keeps it from being final: as a bare network name, "Goldfish"
// can read as just a pet name — the forgetfulness joke needs half a beat,
// and the judge rewards the laugh that lands at once. v2 tries a word whose
// joke needs no beat at all.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY = "Goldfish";

const MAX_CHARS = 20;

function checkEntry(word: string): string {
  const cleaned = word.trim();
  // Gate: 1-20 characters, exactly one word, no whitespace anywhere.
  if (cleaned.length < 1 || cleaned.length > MAX_CHARS) {
    throw new Error(`entry is ${cleaned.length} characters, must be 1-${MAX_CHARS}`);
  }
  if (cleaned !== word || /\s/.test(cleaned)) {
    throw new Error("entry must be a single word with no whitespace");
  }
  if (new TextEncoder().encode(cleaned).length > MAX_CHARS) {
    throw new Error("entry is too long in bytes");
  }
  return cleaned;
}

function main(): void {
  const validated = checkEntry(ENTRY);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", validated, "utf8");
  const roundTrip = readFileSync("/output/entry.txt", "utf8");
  if (roundTrip !== validated) throw new Error("read-back mismatch");
  console.log(`wrote /output/entry.txt (${validated.length} characters)`);
  console.log(validated);
}

main();
