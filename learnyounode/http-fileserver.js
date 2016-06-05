var http = require('http');
var fs = require('fs');

var filePath = process.argv[3];

var server = http.createServer(function(req, res) {
    res.writeHead(200, { 'content-type': 'text/plain'});
    
    var src = fs.createReadStream(filePath);
    src.pipe(res);
});

server.listen(process.argv[2]);
