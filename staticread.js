const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {

    fs.readFile("inde.html", (err, data) => {

        if (err) {
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("File Not Found");
        }
        else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        }

    });

}).listen(4001);

console.log("Server is running on port 4001");
