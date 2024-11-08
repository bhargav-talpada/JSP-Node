let add = (a, b) => {
    return a+b;
}
// module.exports = add; // single export....

let sub = (a, b) => {
    return a-b;
}
module.exports = {add, sub}; // multiple exports...

// exports.mul = (a,b ) => {
//     return a*b;
// }