const Square = require('./square');

const square = new Square(-2);
console.log(`Side: ${square.side}`);
console.log(`Area: ${square.area}`);
//square.perimeter = 9;

square.area = 8;
console.log(`Printing again the area after assigning a value`)
console.log(square.area);


console.log(`Perimeter is: ${square.perimeter}`);

square.side = -9;