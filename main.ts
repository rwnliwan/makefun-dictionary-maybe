// make.fun entry: The Word You'd Delete From the Dictionary
// Writes the single word "maybe" to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "maybe";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
