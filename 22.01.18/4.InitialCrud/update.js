const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    port: 3306,
    database: "typeofjoints"
});


// update
connection.connect(function(err){
    if(err) throw err;
    else{
        let sql = "UPDATE artists SET artistName = 'Makis' WHERE artistId = 2 "
        connection.query(sql, function(err,result){
            if(err) throw err;
            else{
                console.log(result);
                console.log(`${result.affectedRows} record(s) updated`);
            }
        })
    }
    connection.end();
})