function double(n) {
  return n * 2;
}
const doubleArrow = (n) => n * 2;
const add = (a, b) => a + b;
const makeNote = (title) => ({ title, pinned: false });

console.log(double(4), doubleArrow(4), add(2, 3));
console.log(makeNote("Hello"));

const numbers = [1, 2, 3];
console.log(numbers.map((n) => n * 10));
