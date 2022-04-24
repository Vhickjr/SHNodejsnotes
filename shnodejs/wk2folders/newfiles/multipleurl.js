const http = require('http');
const hostname= '127.0.0.1';
const port = 3000;


const server = http.createServer((req,res) => {
    const urlPath = req.url;
    if(urlPath === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello from SideHustle!\n');
    } else if (urlPath === '/about'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(' This is about page!');
    } else if (urlPath === '/users'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(' We are here!');
    }  else  {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(' Page not found !');
    }
});
server.listen(port,hostname,() => {
    console.log('server running at http://'+hostname+':'+port+'/');
});