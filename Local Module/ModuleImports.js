// single import...
// let sum = require('./ModuleExports');
// console.log(sum(10, 50));

// multiple import...
let {add, sub} = require('./ModuleExports');
console.log(add(10, 20));
console.log(sub(10, 20));

// let multi = require('./ModuleExports');
// console.log(multi(10, 20));
