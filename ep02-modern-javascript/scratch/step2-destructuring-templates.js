// Step 2: destructuring, default values, template literals
const notes = [
  { id: 1, title: "Learn JS", tags: ["js", "react"], author: { name: "Ada" } },
  { id: 2, title: "Ship Ep 2", tags: ["video"] },
  { id: 3, title: "Read docs", tags: [], author: { name: "Linus" } },
];

const describe = ({ id, title, tags = [], author }) => {
  let name = "unknown";
  if (author && author.name) {
    name = author.name;
  }
  return `#${id} ${title} [${tags.join(", ")}] by ${name}`;
};

const addNote = (list, note) => {
  const copy = list.slice();
  copy.push(note);
  return copy;
};

const pinNote = (list, id) =>
  list.map((note) => Object.assign({}, note, { pinned: note.id === id }));

const added = addNote(notes, { id: 4, title: "Celebrate", tags: ["fun"] });
const updated = pinNote(added, 2);
for (const note of updated) {
  console.log(`${describe(note)}${note.pinned ? " (pinned)" : ""}`);
}
