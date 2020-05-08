var fs = require("fs");
var http = require("http");
var server = http.createServer((req, res) => {
    res.end("a");
});
server.listen(8000, "localhost");