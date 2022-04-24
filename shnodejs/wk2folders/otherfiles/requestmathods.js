
const http = require('http');


const hostname= '127.0.0.1';
const port = 3000;

const server = http.createServer((req,res) => {
    console.log(req.method);
    console.log(req.url);
    console.log(req.headers);
});
server.listen(port,hostname,() => {
    console.log('running at http://'+hostname+':'+port+'/');
});

