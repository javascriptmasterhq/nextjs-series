const notes = [
  { id: 1, title: "Learn JS", tags: ["js"], words: 120 },
  { id: 2, title: "Ship Ep 2", tags: ["video"], words: 40 },
  { id: 3, title: "Read docs", tags: ["nextjs", "js"], words: 300 },
];

// map: transform EVERY item -> same length
const titles = notes.map((n) => n.title.toUpperCase());
console.log(titles);

// filter: KEEP the items that pass a test -> same or shorter
const jsNotes = notes.filter((n) => n.tags.includes("js"));
console.log(jsNotes.map((n) => n.id));

// chain them: long notes, as titles
const longOnes = notes.filter((n) => n.words > 100).map((n) => n.title);
console.log(longOnes);
console.log("original length:", notes.length);
