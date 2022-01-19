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
        throw error;
    }else{
        let sql = "SELECT * FROM artists WHERE artistId = 1";
        connection.query(sql, function(err,result){
            if(err) throw err;
            else{
                console.log(`id: ${result[0].artistId} name: ${result[0].artistName}`);
            }
        });
    }
    connection.end();
});