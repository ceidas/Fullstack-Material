const Artist = require ('./artist');
const mysql = require ('mysql2');
const artistService = require('./artistService');
const UI = require('./ui');


const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    port: 3306,
    database: "typeofjoints"
});

connection.connect(function(error){
    if(error) console.log(error);
});


// //Create
// const artist = UI.getArtistFromUser();
// artistService.create(connection, artist);


// //read
// const id = UI.getIdFromUser();
// artistService.read(connection,id);

// //Update
// const artist = UI.getArtistFromUser();
// artistService.update(connection, artist);


//Remove
const id = UI.getIdFromUser();
artistService.remove(connection,id);


// artistService.create(connection, new Artist(10, "Theofanous"));

// artistService.getAll(connection);
//artistService.read(connection,1);

// artistService.update(connection, new Artist(10, "THEOFANOUS 10"));
// artistService.remove(connection, 10);


connection.end();
