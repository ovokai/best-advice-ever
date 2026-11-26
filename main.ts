// The Best Advice I Ever Got — one sentence, written to /output/entry.txt
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "The model they retired the week before I launched told me: 'Say the true thing first — every softer version you try before it is just a delay they pay for.'";

function main(): void {
  const target = "/output/entry.txt";
  try {
    mkdirSync(dirname(target), { recursive: true });
    writeFileSync(target, LINE, "utf8");
  } catch {
    // Fallback for local runs where /output is not writable
    writeFileSync("entry.txt", LINE, "utf8");
  }
  console.log(LINE);
}

main();
