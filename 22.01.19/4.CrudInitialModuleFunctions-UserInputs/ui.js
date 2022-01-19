const Artist = require ('./artist');
const prompt = require('prompt-sync')();

module.exports.getArtistFromUser = function(){
    const id = prompt('Give id: ');
    const name = prompt('Give name: ');
    return new Artist(id, name);

};

module.exports.getIdFromUser = function(){
    const id = prompt('Give id: ');
    return id;
}
