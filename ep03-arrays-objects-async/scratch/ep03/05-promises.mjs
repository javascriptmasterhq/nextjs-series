// A Promise is a value that arrives LATER
const fakeFetch = (title, ms) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!title) reject(new Error("no title"));
      else resolve({ title, ms });
    }, ms);
  });

console.log("1. start");
fakeFetch("Learn JS", 500)
  .then((note) => console.log("3. got", note.title, "after", note.ms, "ms"))
  .catch((err) => console.log("error:", err.message));
console.log("2. not blocked: this line runs first");

fakeFetch("", 800)
  .then((note) => console.log("never runs", note))
  .catch((err) => console.log("4. caught:", err.message));
