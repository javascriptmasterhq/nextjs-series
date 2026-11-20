// Viewer challenge: rewrite these three old-style functions.
function fullName(person) {
  var first = person.first;
  var last = person.last;
  return first + " " + last;
}

function lineTotal(item) {
  var price = item.price;
  var qty = item.qty;
  return price * qty;
}

var cityOf = function (user) {
  if (user && user.address && user.address.city) {
    return user.address.city;
  }
  return "unknown";
};

console.log(fullName({ first: "Ada", last: "Lovelace" }));
console.log(lineTotal({ price: 4, qty: 3 }));
console.log(cityOf({ address: { city: "London" } }), cityOf({}));
