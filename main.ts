import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One sentence, at most 200 characters, making a small everyday moment
// strange and new.
const sentence =
  "The spoon in my coffee turned my face upside down, and for one sip the morning ran the wrong way round.";

// The sealed scorer requires 1-200 characters of UTF-8 text.
if ([...sentence].length < 1 || [...sentence].length > 200) {
  throw new Error("entry must be 1-200 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), sentence, "utf8");
