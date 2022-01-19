//CORE MODULES FOR NODE JS

//http
//url
//querystring
//path
//fs
//util

var http=require('http');

var port = 3010;

var server = http.createServer((req,res) => {

    response.writeHead(200, {
        
        'Content-Type' : 'text/plain'
    
    })

    response.end('Hello world\n')
})

server.listen(port)

if(port!=1010){
    console.log('Invalid port number')
}

console.log("connection Established....")
console.log(server);


//Example 1 ////////////////////////////////////////////////
// var myLogModule = require('./Log.js');

// myLogModule.info('Node.js started')


// var msg = require('./Hello.js');
// console.log(msg);

//////////////////////////////////////////////////


var msg = require('./Hello.js');
// console.log(msg)
console.log(msg.mySimpleMessage);


