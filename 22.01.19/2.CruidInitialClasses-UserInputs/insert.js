const mysql = require('mysql2');
const Artist = require('./artist');
const prompt = require('prompt-sync')();


const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    port: 3306,
    database: "typeofjoints"
});

function create(artist) {
    //Insert and then Select 
    connection.connect(function (error) {
        if (error) {
            console.log(error);
        } else {
            //insert
            let sql = `INSERT INTO artists (artistId, artistName) VALUES (${artist.id}, '${artist.name}' )`;
            connection.query(sql, function (err) {
                if (err) throw err;
                console.log("1 record inserted");
            });
            //select
            connection.query("SELECT * FROM artists", function (err, result) {
                if (err) throw err;
                //console.log(result);
                for (let row of result) {
                    console.log(`id: ${row.artistId} name: ${row.artistName}`);
                }
            })
            connection.end();

        }

    })
}

// const artist = new Artist(11, "SOAD");
const id = prompt('Give id: ');
const name = prompt('Give name: ');
const artist = new Artist(id, name);
create(artist);