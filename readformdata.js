const http = require('http');
const url = require('url');

http.createServer((req, res)=>{
    parsedUrl = url.parse(req.url, true);
    query = parsedUrl.query;

    res.write("Name: " + query.name);
    res.write("Age: " + query.age);
    res.end();

}).listen(2000);

console.log("Server is running on port 2000");
