const note = { id: 7, title: "Learn React", tags: ["js", "react"] };

const { id, title } = note;
const { pinned = false } = note;
const { title: heading } = note;
const [firstTag, secondTag] = note.tags;

console.log(id, title, pinned, heading);
console.log(firstTag, secondTag);

const label = ({ title, tags: [main] }) => title + " / " + main;
console.log(label(note));
