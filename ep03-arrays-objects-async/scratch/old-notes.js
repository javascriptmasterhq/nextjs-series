// A notes list written the old way (before ES2015).
var notes = [
  { id: 1, title: "Learn JS", tags: ["js", "react"], author: { name: "Ada" } },
  { id: 2, title: "Ship Ep 2", tags: ["video"] },
  { id: 3, title: "Read docs", tags: [], author: { name: "Linus" } },
];

function describe(note) {
  var author = "unknown";
  if (note && note.author && note.author.name) {
    author = note.author.name;
  }
  return "#" + note.id + " " + note.title +
    " [" + note.tags.join(", ") + "] by " + author;
}

function addNote(list, note) {
  var copy = list.slice();
  copy.push(note);
  return copy;
}

function pinNote(list, id) {
  return list.map(function (note) {
    return Object.assign({}, note, { pinned: note.id === id });
  });
}

var added = addNote(notes, { id: 4, title: "Celebrate", tags: ["fun"] });
var updated = pinNote(added, 2);
for (var i = 0; i < updated.length; i++) {
  console.log(describe(updated[i]) + (updated[i].pinned ? " (pinned)" : ""));
}
