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
const express = require("express")
const app = express()

const server = app.listen(3000, () => { // create a HTTP server on port 3000
    console.log(`${server.address().port}`)
});
app.use(express.static(__dirname, { // host the whole directory
    extensions: ["html", "htm", "gif", "png", "jpg"],
}))

app.route("/index").get((req, res) => {
    return res.sendFile(__dirname + "/index.html")
})