const http = require('http');
const fs = require('fs');

// --------------- how to server html file ---------------

// const server = http.createServer((req, res) => {
//     fs.readFile('./data.html', 'utf-8', (err,data) => {
//         if(err){
//             console.log(err);
//             res.end();
//         }
//         else{
//             res.writeHead(200, {'content-type':'text/html'})
//             console.log(data);
//             res.end(data);
//         }
//     })
// })

// const port = 5000;
// server.listen(port, err => {
//     if(err) throw err;
//     console.log(`Server running on port ${port}`);
// })

// --------------- how to server css file ---------------

// const server = http.createServer((req, res) => {
//         fs.readFile('./data.css', 'utf-8', (err,data) => {
//             if(err){
//                 console.log(err);
//                 res.end();
//             }
//             else{
//                 res.writeHead(200, {'content-type':'text/css'})
//                 console.log(data);
//                 res.end(data);
//             }
//         })
//     })
    
//     const port = 5000;
//     server.listen(port, err => {
//         if(err) throw err;
//         console.log(`Server running on port ${port}`);
//     })

// // --------------- how to server json file ---------------

// const server = http.createServer((req, res) => {
//     fs.readFile('./data.json', 'utf-8', (err,data) => {
//         if(err){
//             console.log(err);
//             res.end();
//         }
//         else{
//             res.writeHead(200, {'content-type':'application/json'})
//             console.log(data);
//             res.end(data);
//         }
//     })
// })
    
// const port = 5000;
// server.listen(port, err => {
//     if(err) throw err;
//     console.log(`Server running on port ${port}`);
// })

// --------------- serve html file using readStream ---------------

// const server = http.createServer((req, res) => {
//     const data = fs.createReadStream('./data.html')
//     res.writeHead(200, {'content-type':'text/html'})
//     data.pipe(res);
// })
// const port = 5000;
// server.listen(port, err => {
//     if(err) throw err;
//     console.log(`Server running on port ${port}`);
// })

// --------------- serve css file using readStream ---------------

// const server = http.createServer((req, res) => {
//     const data = fs.createReadStream('./data.css')
//     res.writeHead(200, {'content-type':'text/css'})
//     data.pipe(res);
// })
// const port = 5000;
// server.listen(port, err => {
//     if(err) throw err;
//     console.log(`Server running on port ${port}`);
// })

// --------------- serve json file using readStream ---------------

// const server = http.createServer((req, res) => {
//     const data = fs.createReadStream('./data.json')
//     res.writeHead(200, {'content-type':'application/json'})
//     data.pipe(res);
// })
// const port = 5000;
// server.listen(port, err => {
//     if(err) throw err;
//     console.log(`Server running on port ${port}`);
// })