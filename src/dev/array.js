const arr = [1,2,3,4,5,6,7,8,9];

// mutable
let sortDesc = arr => arr.sort((a, b) => b - a);

console.log(arr);
console.log(sortDesc(arr));
console.log(arr);

