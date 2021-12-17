//Create a constructor function calculator that creates objects with 3 methods.

//read() asks for two values using propmpt and remembers them in object properties

//sum() returns the sum of these properties 

//mul() returns the multiplication product of these properties

// for instance:
// let calculator = new Calculator();
// calculator.read();
// alert("Sum= "+ calculator.sum() );
// alert("Mul=" + calculator.mul() );


function Calculator(prop1, prop2) {
    this.prop1 = prop1;
    this.prop2 = prop2;

    this.read = function(){
        prop1 = parseInt(window.prompt("Enter first number"));
        prop2 = parseInt(window.prompt("Enter seconme"));
    }
}