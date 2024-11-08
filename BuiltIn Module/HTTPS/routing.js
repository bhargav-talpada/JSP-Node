const http = require('http');


const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end("<h1>This is my home page</h1>");
  }      
  else if (req.url === '/home') {
    res.end("<h1>This is my home page</h1>");
  }
  else if (req.url === '/about') {
    res.end("<h1>This is my about page</h1>");
  }
  else {
    res.end('<h1>404 page not found...</h1>');
  }
})
const port = 5000;
server.listen(port, err => {
    if(err) throw err;
    console.log(`Server running on port ${port}`);
})