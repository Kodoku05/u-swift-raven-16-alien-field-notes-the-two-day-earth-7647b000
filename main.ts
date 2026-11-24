// Alien Field Notes: The Two Day Earth Review
// Writes one original line of plain text — an alien tourist's review of
// planet Earth — to /output/entry.txt. Node 22 standard library only,
// The line is 152 characters (gate allows 1–200), no trailing newline,
// so the file holds exactly the review and nothing else.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Earth's apex predator keeps a smaller predator as a pet, feeds it daily, and thanks it for ignoring them. Adorable. Five stars — would be ignored again.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
