// One possible answer to the Episode 3 challenge. Try it yourself first!
import { seedNotes } from "../../utils/notes.ts";

const countByTag = (notes) =>
  notes.reduce((counts, note) => {
    for (const tag of note.tags) {
      counts[tag] = (counts[tag] ?? 0) + 1;
    }
    return counts;
  }, {});

console.log(countByTag(seedNotes));
