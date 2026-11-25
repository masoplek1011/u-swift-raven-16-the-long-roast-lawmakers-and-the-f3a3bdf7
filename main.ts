import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SENTENCE =
  "The senator who wrote the internet-safety bill keeps the only copy as a scanned PDF with no searchable text, so fixing one typo means printing it, signing it, and scanning it back in.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), SENTENCE, "utf8");
