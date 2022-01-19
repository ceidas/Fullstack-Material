const mysql = require('mysql2');
const Artist = require('./artist');
const    _  = require('lodash')

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    port: 3306,
    database: "typeofjoints"
});

// function create(artist) {
//     //Insert and then Select 
//     connection.connect(function (error) {
//         if (error) {
//             console.log(error);
//         } else {
//             //insert
//             let sql = `INSERT INTO artists (artistId, artistName) VALUES (${artist.id}, '${artist.name}' )`;
//             connection.query(sql, function (err) {
//                 if (err) throw err;
//                 console.log("1 record inserted");
//             });
//             //select
//             connection.query("SELECT * FROM artists", function (err, result) {
//                 if (err) throw err;
//                 //console.log(result);
//                 for (let row of result) {
//                     console.log(`id: ${row.artistId} name: ${row.artistName}`);
//                 }
//             })
//         }
//         connection.end();

//     })
// }

// const artist = new Artist(11, "SOAD");
// create(artist);

function getAllWithSongs(){
    connection.connect(function(error){
        if(error){
            console.log(error);
        }else{
            let sql = `SELECT artistName, title FROM artists INNER JOIN songs ON songs.artistId = artists.artistId`;

            connection.query(sql, function(err, result){
                if(err) {throw err;}
                else{
                    // for (let row of result){
                    //     console.log(row);
                    // }
                    let rowsGrouped = _.groupBy(result, 'artistName');
                    // console.log(rowsGrouped);
                    _.forEach(rowsGrouped, function(textRow, key){
                        console.log(key);
                        //console.log(textRow); //brings the value of each key
                        for (let item of textRow){
                            console.log(`\t ${item.title}`);
                        }
                    })
                }
            })
        }
        connection.end();
    });
}

getAllWithSongs();