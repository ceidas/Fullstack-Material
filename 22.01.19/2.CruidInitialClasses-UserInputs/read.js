const mysql = require('mysql2');
//npm install prompt-sync
const prompt = require('prompt-sync')();

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    port: 3306,
    database: "typeofjoints"
});

function read(id){
    connection.connect(function(error){
        if(error){
            throw error;
        }else{
            let sql = `SELECT * FROM artists WHERE artistId = ${id}`;
            connection.query(sql, function(err,result){
                if(err) throw err;
                else{
                    console.log(`id: ${result[0].artistId} has name: ${result[0].artistName}`);
                }
            });
        }
        connection.end();
    });
}

const id = prompt("Give id: ")
read(id);