
const http = require('http');
const hostname= '127.0.0.1';
const port = 5000;

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    // 'application/json' content type
    const serializedData = JSON.stringify ({
        // covert javasript object to json using stringify
    name: "Victor",
    age: 19,
    country: "Nigeria"
    });
    res.write(serializedData);
    res.end();
});
server.listen(port,hostname,() => {
    console.log('server running at http://'+hostname+':'+port+'/');
});