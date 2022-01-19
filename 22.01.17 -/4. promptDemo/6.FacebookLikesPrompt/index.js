const prompt = require('prompt-sync')();
const social = require('./social');

let names = prompt('Give the names ');
let namesArray = names.split(" ");
console.log(social.likes(namesArray));