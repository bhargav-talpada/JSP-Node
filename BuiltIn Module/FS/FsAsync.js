//---------------------- importing FS module ----------------------

const fs = require("fs");
// console.log(fs);

//---------------------- Asynchronous FILE OPERATIONS ----------------------

// 1. Read File
// fs.readFile('./node.txt', 'utf-8', (err, data2) => {
// if(err){
//     console.log(err);
// }
//     console.log(data2);
// });

// 2. Write File & Read File
// fs.writeFile("./node.txt", "i am from async file operation", (err) => {
//   if (err) {
//     console.log(err);
//   }
//   fs.readFile("./node.txt", "utf-8", (err, data2) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(data2);
//   });
// });

// 3. Append File
// fs.appendFile('./node.txt', '\nhello from async operation.' ,(err, data) => {
//     if (err) {
//         throw err;
//     }else{
//         console.log('done');
//     }
// });

// 4. Delete File
fs.unlink('./node3.txt', (err) => {
    if (err) {
        console.log(err);        
    } else {
        console.log('successfully deleted');        
    }
})

// 5. Rename File
// fs.rename('./node2.txt', 'node3.txt', (err) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log('done');
//     }
// });
