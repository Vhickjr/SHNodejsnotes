
const http = require('http');
const hostname= '127.0.0.1';
const port = 3000;

const server = http.createServer((req,res) => {
 res.writeHead(200, ('Content-Type', 'text/plain'));
    res.end('Hello from SideHustle!\n');
});
server.listen(port,hostname,() => {
    console.log('server running at http://'+hostname+':'+port+'/');
});
// we used the wrthead() function to send back a status code of 200