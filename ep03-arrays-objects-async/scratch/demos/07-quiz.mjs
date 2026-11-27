const nums = [1, 2, 3];
nums.push(4);
console.log(nums);

const base = { a: 1, b: 2 };
const copy = { ...base, b: 3 };
console.log(base.b, copy.b);

const user = { name: "Bob" };
console.log(user.address?.city);
