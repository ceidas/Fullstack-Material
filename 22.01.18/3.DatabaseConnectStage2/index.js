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

// connection.connect(function(error){
//     if(error){
//         console.log(error)
//     }else{
//         connection.query("SELECT * FROM artists", function(err,result){
//             if(err) throw err;
//             console.log(result);
//             for (let row of result){
//                 console.log(`id: ${row.artistId} name: ${row.artistName}`);
//             }
//         })
//     }
//     connection.end();
// });


// //Insert and then Select 
// connection.connect(function(error){
//     if(error){
//         console.log(error);
//     }else{
//         let sql = "INSERT INTO artists (artistId, ArtistName) VALUES (10, 'Anna Visi')";
//         connection.query(sql, function(err){
//             if(err) throw err;
//             console.log("1 record inserted");
//         });
//         connection.query("SELECT * FROM artists", function(err,result){
//             if(err) throw err;
//             //console.log(result);
//             for (let row of result){
//                 console.log(`id: ${row.artistId} name: ${row.artistName}`);
//             }
//         })
//     }
//     connection.end();

// })


// // Delete 
// connection.connect(function(err){
//     if(err) throw err;
//     else{
//         let sql = "DELETE FROM artists WHERE artistId = 9";
//         connection.query(sql, function(err, result){
//             if(err)throw err;
//             console.log("Number of records deleted: " + result.affectedRows);
//         });
//     }
//     connection.end();
// });

// // Delete 
// connection.connect(function(err){
//     if(err) throw err;
//     else{
//         let sql = "DELETE FROM artists WHERE artistId = 10";
//         connection.query(sql, function(err, result){
//             if(err)throw err;
//             console.log(result);

//             console.log("Number of records deleted: " + result.affectedRows);
//         });
//     }
//     connection.end();
// });


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