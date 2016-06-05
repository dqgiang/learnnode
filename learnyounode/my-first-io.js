var fs = require('fs');

var pathToFile = process.argv[2];
var stringBuffer = fs.readFileSync(pathToFile).toString();
var lines = stringBuffer.split('\n');

console.log(lines.length - 1);
