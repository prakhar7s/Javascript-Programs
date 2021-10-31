const arr = [10, 20, [30, 40, [50, 60, [70, 80]]]];

const flattenArray = arr.flat(2);

console.log(flattenArray); //[ 10, 20, 30, 40, 50, 60, [ 70, 80 ] ]

const flattenArray2 = arr.flat(Infinity);

console.log(flattenArray2); //[ 10, 20, 30, 40, 50, 60, 70, 80]
