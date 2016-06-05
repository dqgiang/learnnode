var sum = 0;

// ignore the node path & programm path in the first 2 arguments
for (var i = 2; i < process.argv.length; i++) {
    // prefix the arguments with + to parse it to number
    sum += +process.argv[i];
}

console.log(sum);
