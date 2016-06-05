var fs = require('fs');
var path = require('path');

module.exports = function (dir, ext, printCallback) {
    ext = '.' + ext;
    fs.readdir(dir, function (err, files){
        if(err) return printCallback(err);

        for(var i = 0; i < files.length; i++) {
            if(path.extname(files[i]) == ext) {
                printCallback(null, files[i]);
            }
        }
    });
}
