var net = require('net');

var server = net.createServer(function (socket) {
    var date = new Date();

    // Parse time value
    var data = date.getFullYear().toString() + '-'
            + zeroPad(date.getMonth() + 1, 2) + '-'
            + zeroPad(date.getDate(), 2) + ' '
            + zeroPad(date.getHours(), 2) + ':'
            + zeroPad(date.getMinutes(), 2) + '\n';

    socket.write(data);
    socket.end();
});

server.listen(process.argv[2]);

// There should not be any number having more than `size` digits
function zeroPad(num, size){
    return ('0' + num.toString()).substr(-size);
}
