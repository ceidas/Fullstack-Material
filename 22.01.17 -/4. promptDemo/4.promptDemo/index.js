// Step 1 npm init
// step 2 npm install --save prompt-sync
const prompt = require('prompt-sync')();
let id = prompt('Give id ');
let name = prompt('Give name ');

console.log(`id: ${id} name: ${name}`);