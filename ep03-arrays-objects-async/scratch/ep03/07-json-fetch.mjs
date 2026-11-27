// JSON is just text. stringify: object -> text. parse: text -> object
const note = { id: 1, title: "Learn JS", tags: ["js"] };
const text = JSON.stringify(note);
console.log(typeof text, text);
console.log(JSON.parse(text).tags[0]);

// fetch returns a Promise of a Response. .json() is ANOTHER Promise
// (needs `npm run dev` running: it serves public/notes.json)
const res = await fetch("http://localhost:3000/notes.json");
console.log("status:", res.status, res.headers.get("content-type"));
const data = await res.json();
console.log(data.length, "notes from the server. First:", data[0].title);
