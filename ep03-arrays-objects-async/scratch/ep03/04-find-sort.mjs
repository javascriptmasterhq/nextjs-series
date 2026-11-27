const notes = [
  { id: 1, title: "Read docs", pinned: false },
  { id: 2, title: "Ship Ep 2", pinned: true },
  { id: 3, title: "Learn JS", pinned: false },
];

// find: the FIRST match (or undefined). some / every: yes or no
console.log(notes.find((n) => n.id === 2)?.title);
console.log(notes.some((n) => n.pinned), notes.every((n) => n.pinned));

// sort() MUTATES the original array...
const copy = [...notes];
copy.sort((a, b) => a.title.localeCompare(b.title)); // copy is now changed

// ...toSorted() returns a NEW sorted array (ES2023)
const sorted = notes.toSorted((a, b) => a.title.localeCompare(b.title));
console.log(sorted.map((n) => n.title));
console.log(notes.map((n) => n.title)); // untouched
