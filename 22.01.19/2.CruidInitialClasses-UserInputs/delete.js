const mysql = require('mysql2');
const prompt = require('prompt-sync')();

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    port: 3306,
    database: "typeofjoints"
});


function remove(id){
    connection.connect(function(err){
        if(err) throw err;
        else{
            let sql = `DELETE FROM artists WHERE artistId = ${id}`;
            connection.query(sql, function(err,result){
                if(err) throw err;
                console.log(result);
                console.log("Number of records deleted: " + result.affectedRows);
            });
        }
        connection.end();
    });
}

const id = prompt('Give id: ')
remove(id);
