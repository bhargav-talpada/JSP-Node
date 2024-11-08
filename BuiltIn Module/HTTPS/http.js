// HTTP :
// --> Hyper Text Transfer Protocol
// --> It is a protocol that allows you to communicate between a server and a client.
// --> It is a stateless protocol.
// --> Stateless means that the server treats every request as a new request i.e., It will not store the previous request in memory.
// --> Http is a built in module.
// --> It means no need to install it separately.
// --> Simply we can import it and we can use it.
// --> It is used to create a server in nodejs.

let http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type' : 'text/plain' })
    res.end('hello from server')    
})

const port = 8000;
server.listen(port, err => {
    if(err) throw err;
    console.log(`server is runnig on ${port} port`);
});