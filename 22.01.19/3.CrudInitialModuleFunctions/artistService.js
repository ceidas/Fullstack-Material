function getAll(connection) {
    connection.query("SELECT * FROM artists", function (err, result) {
        if (err) throw err;
        else {
            for (const row of result) {
                console.log(`id: ${row.artistId} name: ${row.artistName}`);
            }
        }
    });
}

function create(connection, artist) {
    let sql = `INSERT INTO artists (artistId, artistName) VALUES (${artist.id}, '${artist.name}' )`;
    connection.query(sql, function (err) {
        if (err) throw err;
        console.log("1 record inserted");
    });
}

function read(connection, id) {
    let sql = `SELECT * FROM artists WHERE artistId = ${id}`;
    connection.query(sql, function (err, result) {
        if (err) throw err;
        else {
            console.log(`id: ${result[0].artistId} name: ${result[0].artistName}`);
        }
    });
}

function update(connection, artist) {
    let sql = `UPDATE artists SET artistName = '${artist.name}' WHERE artistId = ${artist.id}`;
    connection.query(sql, function (err, result) {
        if (err) throw err;
        else {
            console.log(`${result.affectedRows} record(s) updated`);
        }
    });
}


function remove(connection, id) {
    let sql = `DELETE FROM artists WHERE artistId = ${id}`;
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
        console.log("Number of records deleted: " + result.affectedRows);
    });
}



module.exports.getAll = getAll;
module.exports.create = create;
module.exports.read = read;
module.exports.update = update;
module.exports.remove = remove;
