// One possible answer. No peeking until you have tried it!
const fullName = ({ first, last }) => `${first} ${last}`;

const lineTotal = ({ price, qty }) => price * qty;

const cityOf = (user) => user?.address?.city ?? "unknown";

console.log(fullName({ first: "Ada", last: "Lovelace" }));
console.log(lineTotal({ price: 4, qty: 3 }));
console.log(cityOf({ address: { city: "London" } }), cityOf({}));
