var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
    if(req.method === 'GET'){
        var urlObject = url.parse(req.url, true)
        // This is different from Date.parse(string) which return directly unixtime
        var time = new Date(urlObject.query.iso);
        var resJsonObj;

        if(urlObject.pathname === '/api/parsetime') {
            resJsonObj = {
                hour: time.getHours(),
                minute: time.getMinutes(),
                second: time.getSeconds()
            };
        } else if(urlObject.pathname === '/api/unixtime') {
            resJsonObj = {unixtime: time.getTime()};
        }

        if(resJsonObj != null){
            res.writeHead(200, {'Content-Type':'application/json'});
            res.end(JSON.stringify(resJsonObj));
        }
        else {
            res.writeHead(404);
            res.end();
        }
    }
});

server.listen(process.argv[2]);
