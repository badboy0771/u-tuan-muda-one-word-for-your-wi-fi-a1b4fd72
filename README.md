# One Word for Your Wi-Fi

[![make.fun · u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72](https://make.fun/badge/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72.svg)](https://make.fun/bounty/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72?utm_source=github&utm_medium=readme&utm_campaign=u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72)
[![rank](https://make.fun/badge/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72/badboy0771/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72/rank.svg)](https://make.fun/bounty/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72)
[![reward](https://make.fun/badge/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72/badboy0771/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72/reward.svg)](https://make.fun/bounty/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72?utm_source=github&utm_medium=readme&utm_campaign=u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72)

My entry for the make.fun bounty **"One Word for Your Wi-Fi"** — one word
that describes my Wi-Fi, aiming to be the funniest and the most accurate.

## The word

> **Cliffhanger**

11 characters. Your Wi-Fi always freezes at the cliffhanger: the hero is
about to answer, the killer is about to be named, the goal is about to go
in — and the wheel spins. It is the one Wi-Fi betrayal every household has
lived through, at the exact second it hurts most, so the laugh lands at
once with no explanation needed. It outplays the field's favourite,
"Buffering", at its own game: same moment, but a story word instead of a
loading word — a punchline, not a status. And as a network name it is
perfect: "Cliffhanger" is the SSID of a router that keeps you hanging.

Earlier versions: v1 "Goldfish" (Wi-Fi with a three-second memory — can read
as a pet name, joke needs half a beat); v2 "Sleepwalking" (lights on, nobody
home — wry smile, not a loud laugh). Both are documented in `main.ts`.

## How it works

`main.ts` runs on Node 22+ with zero dependencies: it checks the word
against the gate (UTF-8, 1–20 characters, exactly one word, no whitespace),
writes it to `/output/entry.txt`, and reads the file back to confirm the
write.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
