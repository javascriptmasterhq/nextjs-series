// Mutating: two names, ONE array in memory
const notes = ["Learn JS", "Ship Ep 2"];
const alias = notes;
alias.push("Oops");
console.log("notes:", notes); // changed too!

// Immutable: make a NEW array, keep the old one
const original = ["Learn JS", "Ship Ep 2"];
const updated = [...original, "Read docs"];
console.log("original:", original);
console.log("updated: ", updated);
console.log("same array?", original === updated);

// Objects work the same way
const note = { id: 1, title: "Learn JS", pinned: false };
const pinned = { ...note, pinned: true };
console.log(note.pinned, pinned.pinned);
