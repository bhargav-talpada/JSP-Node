//---------------------- importing FS module ----------------------

const fs = require('fs');
// console.log(fs);

//---------------------- Synchronous FILE OPERATIONS ----------------------

// 1. Read File
// let data = fs.readFileSync('./node.txt', 'utf-8');
// console.log(data);

// 2. Write File
// fs.writeFileSync('./node3.txt', 'i am a nodejs 2 file....')
// console.log('writing file successfully..');

// 3. Append File
// fs.appendFileSync('./node2.txt', '\ni am from append file operation....')
// console.log('data appended');

// 4. Read and Append File
// fs.appendFileSync('./node2.txt', '\ni am from append and read file operation....')
// let data1 = fs.readFileSync('./node2.txt', 'utf-8')
// console.log(data1);

// 5. Delete a File
// fs.unlinkSync('./node3.txt');
// console.log('file deleted successfully...');

// 6. Rename the file
// fs.renameSync('./node.txt', 'NODE.txt');

//---------------------- FOLDER OPERATIONS ----------------------

// 1. Create a new folder
// fs.mkdirSync('./NODEJS');
// console.log('folder created');

// 1.1 Create nested folder
// fs.mkdirSync('./NODEJS/nodeJS2');
// console.log('folder created');

// 2. Create new file inside of created folder
// fs.writeFileSync('./NODEJS/node.html', "nodehtml");
// console.log('file');

// 3. Delete file inside folder
// fs.unlinkSync('./NODEJS/node.html');
// console.log('deleted');

// 4. Remove folder
// fs.rmdirSync('./NODEJS');
// console.log('deleted');

// 5. Rename folder
// fs.renameSync('./nodeJS2', './NODEJS');
// console.log('modified');
