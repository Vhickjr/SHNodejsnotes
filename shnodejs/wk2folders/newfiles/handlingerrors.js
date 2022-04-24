const http = require('http');
const hostname= '127.0.0.1';
const port = 5000;

const server = http.createServer((req,res) => {
  req.on("error", (err) => {
      console.log('An error occurred');
});

res.on("error", (err) => {
    console.log('An error occurred');
});
});

server.listen(port,hostname,() => {
    console.log('server running at http://'+hostname+':'+port+'/');
});