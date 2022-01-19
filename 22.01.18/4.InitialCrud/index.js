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

//Insert and then Select 
connection.connect(function(error){
    if(error){
        console.log(error);
    }else{
        //insert
        let sql = "INSERT INTO artists (artistId, ArtistName) VALUES (10, 'Anna Visi')";
        connection.query(sql, function(err){
            if(err) throw err;
            console.log("1 record inserted");
        });
        //select
        connection.query("SELECT * FROM artists", function(err,result){
            if(err) throw err;
            //console.log(result);
            for (let row of result){
                console.log(`id: ${row.artistId} name: ${row.artistName}`);
            }
        })
    }
    connection.end();

})