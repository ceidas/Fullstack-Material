const mysql = require('mysql2');
const Artist = require('./artist');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    port: 3306,
    database: "typeofjoints"
});

function update(artist) {
    // update
    connection.connect(function (err) {
        if (err) throw err;
        else {
            let sql = `UPDATE artists SET artistName = '${artist.name' WHERE artistId = ${artist.id} `
            connection.query(sql, function (err, result) {
                if (err) throw err;
                else {
                    console.log(result);
                    console.log(`${result.affectedRows} record(s) updated`);
                }
            })
        }
        connection.end();
    })
}

const artist = new Artist(2, "Slayer");
update(artist);