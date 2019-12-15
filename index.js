const http = require('http');

const hostname = "localhost";
const port = 3000;

const server = http.createServer((req,res) => {

    console.log(`request was made`+req.url);
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.end('<html> <h1> Server Connection Successfull </h1></html');

});

server.listen(port,hostname, ()=> {
    console.log(`Server running at http://${hostname}:${port}`);
});