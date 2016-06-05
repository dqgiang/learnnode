var http = require('http');

var responses = [];
var numResponses = 0;

for (var i = 0; i < 3; i++){
    httpGet(i);
}

function httpGet (index) {
    responses[index] = '';

    http.get(process.argv[index + 2], function(response){
        response.on('data', function(data){
            responses[index] += data.toString();
        });

        response.on('end', onStreamEnd);
    });
}

function onStreamEnd(data){
    numResponses++;

    // Check if everyone has returned
    if(numResponses == 3){
        for(var i = 0; i < numResponses; i++)
            console.log(responses[i]);
    }
}
