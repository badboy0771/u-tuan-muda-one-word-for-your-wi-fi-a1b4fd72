// One Word for Your Wi-Fi — a single word that is the funniest and the
// truest description of home Wi-Fi, judged head-to-head against the other
// entries. The program validates the word against the bounty gate (UTF-8,
// 1-20 characters, one word, no whitespace) and writes it to
// /output/entry.txt, then reads the file back to confirm the write landed.
//
// v2 — "Sleepwalking".
// The joke: your Wi-Fi is sleepwalking. The lights are on, the router is
// blinking, the bars are full — and nobody is home. It is present but
// completely unaware, which is exactly the "Connected, no internet" state
// every household knows: full signal, zero actual internet, and a reboot as
// the only way to wake it up. True to the single most maddening Wi-Fi
// moment, and a fresh angle nobody in the field uses — the crowd is all
// Ghosting (26+), Gaslighting (18+), Peekaboo, Liar, Catfish, Buffering.
// The word is instantly spelled and instantly gettable: on, but nobody home.
// Doubt that keeps it from being final: the laugh is wry rather than loud.
// "Sleepwalking" makes the judge smile and nod; the winning word should
// make the judge laugh out loud at the exact second Wi-Fi betrays you.
// v3 goes for that second: the video freezing at the climax.
//
// v1 was "Goldfish" (Wi-Fi with a three-second memory — forgets your device
// every morning). Rejected: as a bare network name it can read as a pet
// name; the forgetfulness joke needs half a beat.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY = "Sleepwalking";

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
