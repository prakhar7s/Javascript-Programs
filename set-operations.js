// intersection
const intersection = arr1.filter((x) => arr2.includes(x));

// difference
const difference = arr1.filter((x) => !arr2.includes(x));

// union
const union = arr1.concat(arr2);

//symmetric difference
const sdifference = arr1
  .filter((x) => !arr2.includes(x))
  .concat(arr2.filter((x) => !arr1.includes(x)));
