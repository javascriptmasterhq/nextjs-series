const users = [
  { name: "Ada", address: { city: "London" } },
  { name: "Bob" },
];

try {
  console.log(users[1].address.city);
} catch (err) {
  console.log("Crash:", err.message);
}

for (const user of users) {
  console.log(user.name, user.address?.city ?? "no city");
}
console.log(users[5]?.name, users[0].wave?.());
