// Stream : 


// 1. readble stream 

let fs = require('fs');
// let readData = fs.createReadStream('./Streams.js', 'utf-8');
// readData.on('data', data => {
//     console.log(data);    
// })
// readData.on('end',_=>{
//     console.log("reading is finished")
// })
// readData.on('error', err => {
//     console.log(err);    
// })
// readData.on('close', _ => {
//     console.log('all events are closed');
// })

// 2. writable stream

// let writeData = fs.createWriteStream('./node.txt');
// writeData.write('writable streams......');

// let readData=fs.createReadStream('./streams1.js','utf-8')
// readData.on('data',data=>{
//     fs.createWriteStream('writeStream.txt').write(data)
//     console.log("read and write successful")
// })

// 3. duplex stream

// let readData=fs.createReadStream('./streams1.js')
// let writeData=fs.createWriteStream('writeStream2.txt')
// readData.pipe(writeData)