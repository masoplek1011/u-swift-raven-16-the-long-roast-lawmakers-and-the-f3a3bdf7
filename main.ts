import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SENTENCE =
  "The senator who wrote the internet-safety bill was asked to convert the final Word document into a PDF, so he printed it, signed the printout, and emailed back a photograph of his screen instead of a PDF.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), SENTENCE, "utf8");
