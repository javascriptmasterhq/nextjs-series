const course = "JavaScript Master";
let episode = 2;
episode = episode + 1;
console.log(course, episode);

const notes = ["Learn JS"];
notes.push("Ship Ep 2");
console.log(notes);

try {
  course = "Something else";
} catch (err) {
  console.log(err.name + ": " + err.message);
}

var late = [];
for (var i = 0; i < 3; i++) late.push(() => i);
console.log("var:", late.map((fn) => fn()));

const fine = [];
for (let j = 0; j < 3; j++) fine.push(() => j);
console.log("let:", fine.map((fn) => fn()));
