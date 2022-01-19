var http = require('http');

var options = {
    host: 'www.google.com',

};

http.get(options, function (resp) {
    resp.on('data', function (chunk) {
        //do something with chunk
        console.log(resp);
    });
}).on("error", function (e) {
    console.log("Got error: " + e.message);
});



// var http = require('http');
// http.request({
//     host: 'www.google.com',
//     method: 'GET',
//     path: "/"
// }, function (response) {
//     response.setEncoding("utf8");
//     response.on("readable", function () {
//         console.log(response.read())
//     });
// }).end();