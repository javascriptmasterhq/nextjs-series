const base = { id: 1, title: "Draft", pinned: false };
const edited = { ...base, title: "Final", pinned: true };
console.log(base);
console.log(edited);

const a = ["js", "react"];
const b = [...a, "next"];
console.log(a, b);

const sum = (...nums) => nums.reduce((t, n) => t + n, 0);
console.log(sum(1, 2, 3, 4), Math.max(...[3, 9, 4]));
