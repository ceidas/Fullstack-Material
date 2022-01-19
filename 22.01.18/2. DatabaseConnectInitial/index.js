// npm init 
// npm install --save mysql2 

const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    port: 3306,
    database: "typeofjoints"
});

connection.connect(function(error){
    if(error){
        console.log(error);
    }else{
        console.log("Connected");
    }
});

connection.end();
