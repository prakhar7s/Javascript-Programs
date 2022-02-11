const pattern = /Love/;

console.log(typeof pattern);

console.log(pattern.test("I Love You")); //true
console.log(pattern.test("I love You")); //false (it is case sensitive)
