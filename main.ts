// One Word for Your Wi-Fi — a single word that is the funniest and the
// truest description of home Wi-Fi, judged head-to-head against the other
// entries. The program validates the word against the bounty gate (UTF-8,
// 1-20 characters, one word, no whitespace) and writes it to
// /output/entry.txt, then reads the file back to confirm the write landed.
//
// FINAL — "Cliffhanger".
// The joke: your Wi-Fi always freezes at the cliffhanger. The hero is about
// to answer, the killer is about to be named, the goal is about to go in —
// and the wheel spins. It is the one Wi-Fi betrayal every household has
// lived through, at the exact second it hurts most, which is why the laugh
// lands at once with no explanation needed: everybody has shouted at a
// frozen frame. True (buffering strikes hardest at the tensest scene,
// because that is when you notice it), fresh (nobody in the field uses it —
// the crowd is Ghosting 26+, Gaslighting 18+, Peekaboo, Liar, Catfish,
// Buffering, Flaky), and a word that works perfectly as a network name:
// "Cliffhanger" is the SSID of a router that keeps you hanging. It also
// outplays the field's favourite, "Buffering", at its own game: same moment,
// but a story word instead of a loading word — a punchline, not a status.
// Spelled instantly, one word, 11 characters, inside the 1-20 gate.
//
// Rejected along the way:
// - v1 "Goldfish" (Wi-Fi with a three-second memory): as a bare network
//   name it can read as a pet name; the joke needs half a beat.
// - v2 "Sleepwalking" (lights on, nobody home — "Connected, no internet"):
//   wry smile, not a loud laugh; the winning word should land at the exact
//   second Wi-Fi betrays you.
// - Also weighed and dropped: "CommitmentIssues" (funny, but another member
//   of the crowded relationship cluster), "Teenager" (moody and room-bound,
//   but the mapping is diffuse), "PlotTwist" (generic surprise, overlaps
//   Flaky), "Goldfish" family aside — "Cliffhanger" wins on instant laugh +
//   universal truth + a fresh family of its own.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY = "Cliffhanger";

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
