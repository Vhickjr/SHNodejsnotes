const http = require('http');
const statusCode = 200;
const headers = '';
const request = http.get('http://www.google.com', (response) => {
    console.log('status code: '+response+' , '+statusCode+' ');
    console.log('Headers: '+response+' ,'+headers+'');
    
    response.on('data', (chunk) =>
 console.log('chunk received:'+chunk+''));
});
request.on('error', (err) => console.error(err));