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