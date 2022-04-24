// the nodmon package helps us run our code automatically any time changes are made
// install as a development dependency npm i -D nodmon

const http = require('http');
const hostname= '127.0.0.1';
const port = 3000;

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello from SideHustle!\n');
});
server.listen(port,hostname,() => {
    console.log('running http://'+hostname+':'+port+'/');
});