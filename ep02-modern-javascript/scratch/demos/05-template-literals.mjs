const name = "Armando";
const count = 3;

const old = "Hi " + name + ", you have " + count + " notes.";
const modern = `Hi ${name}, you have ${count} note${count === 1 ? "" : "s"}.`;
console.log(old);
console.log(modern);

const multi = `Line one
Line two`;
console.log(multi);
