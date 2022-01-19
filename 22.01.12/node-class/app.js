//Call express
const express = require('express');

//Assign express in app variable

const app = express();

//Create a port

const port = 1010;

//Get the routes

app.get( '/', (req, res)=> {
    res.send('Hello World')
} )

app.get( '/home', (req, res)=> {
    res.send('Home')
} )

app.get( '/about', (req, res)=> {
    res.send(`<h1> ABOUT </h1>`)
} )

//Listen on port

app.listen(port, ()=> {
    console.log(`Example server listening at ${port}`)
})

// You can run JS code directly to Node Runtime

function hello() {
    console.log('Hello')
}

var delayObj = setInterval(hello, 2000)

//INBUILT GLOBAL CLASSES-OBJECTS FOR NODE JS

//1)  Class Buffer represent binary data as a sequence of bytes

// const buffer = new Buffer.alloc(5, "abcd");
// console.log(buffer);

//2) Console inbuilt global object stdout/stderr I/O model

// console.log("Hello World");

//3) process = require() global object instance of Emmiter Constructor

//4) Global variables accessible only from the same origin(same-file)
//var myVar

//5) TextEncoder encodes in UTF-8

// const encoder = new TextEncoder();
// //Expression that returns a UNIT8 Array.
// const example = encoder.encode("Welcome to paradise");

// console.log(example);
//6) TextDecoder decodes from UTF-8

// const decoder = new TextDecoder();

// const translated = decoder.decode(example);

// console.log(translated);

//7) Class URL instance of URL OJECT - URL STANDARS

// const url = new URL('/home', 'https://www.google.gr/');
// console.log(url);

// const myURL = new URL('https://www.google.gr/?name=jhon')
// console.log(myURL.searchParams.get('name'))

// myURL.searchParams.append('name' , 'name2');
// console.log(myURL)