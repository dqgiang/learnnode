var filterModule = require('./make-it-modular-module.js');

filterModule(process.argv[2], process.argv[3], function (err, fileName) {
    if(err) return console.error(err);
    // No error, print file name
    console.log(fileName);
});
