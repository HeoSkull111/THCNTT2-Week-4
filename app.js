var http = require('http');
var fs = require('fs').promises;
var url = require('url');
// let path = "/htmlpages";
http.createServer(function (req, res) {
    res.setHeader("Document", "text/html");
    res.writeHead(200);
    switch (req.url) {
        case "/index":
            fs.readFile(__dirname + "/index.html")
                .then(contents => {
                    res.end(contents);
                });
            break;
        case "/login":
            res.end('<h1>Login</h1>');
            break;
    }
}).listen(3000);
console.log("Listening on port 3000... ");