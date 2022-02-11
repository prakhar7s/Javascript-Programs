const arr = [[1, 2, 3, [9]], [6]];

// just works for bi-dimensional array
const flattenArray = (arr) => {
  return [].concat(...arr);
};

// soln which will work for multi dimensional array
const flattenMulDiArray = (arr) => {
  const flattendArr = flattenArray(arr);

  return flattendArr.some((item) => Array.isArray(item))
    ? flattenMulDiArray(flattendArr)
    : flattendArr;
};

console.log(flattenArray(arr));
console.log(flattenMulDiArray(arr));
