const notes = [
  { id: 1, title: "Learn JS", words: 120 },
  { id: 2, title: "Ship Ep 2", words: 40 },
  { id: 3, title: "Read docs", words: 300 },
];

// reduce: boil a whole array down to ONE value
const total = notes.reduce((sum, n) => sum + n.words, 0);
console.log("total words:", total);

// the accumulator can be anything, even an object
const byId = notes.reduce((acc, n) => ({ ...acc, [n.id]: n.title }), {});
console.log(byId);

// step by step: what the accumulator looks like on each pass
notes.reduce((sum, n) => {
  console.log(`sum=${sum} + ${n.words}`);
  return sum + n.words;
}, 0);
