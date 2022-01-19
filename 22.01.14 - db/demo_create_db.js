const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'sales'
});

con.connect(function(err) {
    if(err) throw err;
    //Delete the 'customers' table:
    //var sql = "DROP TABLE customers";

    // con.query(sql, function (err,result) {
    con.query(CREATE database testtt, function (err,result) {

        if(err) throw err;
        console.log('Connected');
    });    
}); 