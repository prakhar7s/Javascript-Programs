// empty array
const cities = ["Jabalpur", "Mumbai", "Bangalore"];

console.log(cities);
cities.length = 0;
console.log(cities);

// rounding number to n decimals
const roundn = (n, x) => n.toFixed(x);

console.log(roundn(1.23456, 2));
