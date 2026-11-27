import { notes } from "./notes-data.mjs";
import { describe, addNote, pinNote } from "./notes-helpers.mjs";

const added = addNote(notes, { id: 4, title: "Celebrate", tags: ["fun"] });
const updated = pinNote(added, 2);

for (const note of updated) {
  console.log(`${describe(note)}${note.pinned ? " (pinned)" : ""}`);
}
