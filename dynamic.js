const http = require('http');
const { parse } = require('path');
const url = require('url');

http.createServer((req, res) => {
    parsedurl = url.parse(req.url, true);
    query = parsedurl.query;

    console.log(req.method);

    res.writeHead(200, {"content-type": "text/html"});
    res.write("<h1>dynamic content is</h1>");

    if(query.name){
            res.write('<h2>Name: ' + query.name + '</h2>'); 

    }
    else {
        res.write('<h2>Name is not provided</h2>');
    }
}).listen(5000);

console.log("Server is running on port 5000");

