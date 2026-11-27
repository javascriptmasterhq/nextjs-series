import { fetchNotes, fetchNote, byTitle, newestFirst, pinnedFirst, withTag, search, allTags } from "../../utils/notes.ts";

const t0 = Date.now();
const notes = await fetchNotes();
console.log(`fetched ${notes.length} notes in ${Date.now() - t0} ms`);

const show = (label, list) => console.log(label.padEnd(14), list.map((n) => n.title).join(" | "));
show("by title:", byTitle(notes));
show("newest first:", newestFirst(notes));
show("pinned first:", pinnedFirst(newestFirst(notes)));
show("tag 'js':", withTag(notes, "js"));
show("search 'ep':", search(notes, "ep"));
console.log("all tags:".padEnd(14), allTags(notes).join(", "));
console.log("untouched?".padEnd(14), notes[0].title === "Learn JS");

const [first, second] = await Promise.all([fetchNote(1), fetchNote(4)]);
console.log("Promise.all:".padEnd(14), first.title, "+", second.title);
try {
  await fetchNote(42);
} catch (err) {
  console.log("error:".padEnd(14), err.message);
}
