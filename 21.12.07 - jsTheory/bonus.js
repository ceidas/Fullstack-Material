// ** Functions Basics **
// performing a task
function greet(fullName) {
    console.log("Hello " + fullName);
}

// calculate a value
function square(number) {
    return number * number;
}

greet("Mike Bekas");
let squareOfTwo = square(2);
console.log(squareOfTwo);

// ** Functions In Detail **

// Function declaration
function sayHello(name) {
    console.log("Hi " + name);
}

sayHello("Takis");

// Function expression
let greetOne = function sayHi(name) {
    console.log("Hi " + name);
}

greetOne("Takis");

// Function expression (arrow)
let greetTwo = firstName => console.log("Hi " + firstName);
greetTwo("Takis");

// Function expression (arrow syntax parameterless)
let helloWorld = () => console.log("Hello World!");
helloWorld();

// ** Array Basics **
let instruments = ["guitar", "piano"];

instruments[2] = "bass";
instruments[2] = 1;

// Iterating an array
for (let instrument of instruments) {
    console.log(instrument);
}

// Get indexes
for (let index in instruments) {
    console.log(index);
}

// Get values with for in loop
for (let index in instruments)
    console.log(instruments[index]);

// ** Objects Basics **

// object literal syntax
let customer = {
    name: "Loukas",
    age: 30
}

console.log(customer);

        // How to access the properties of this object
        // 1st Way (dot notation)
        customer.name = "Nick";
        console.log(customer.name);

        // 2nd Way (bracket notation)
        customer["name"] = "Helen";
        console.log(customer["name"]);

        

// ** Objects in Detail **
//Object literal syntax
const circleOne = {
    radius : 1,
    draw: function () {
        console.log("Circle Drawed");
    }
}

circleOne.draw();

//Factory function syntax (oxi suxna)
function createCircle(radius, PI = 3.14){
    return{
        radius, 
        perimeter(){
            console.log(2*PI*radius);
        }
    }
}

const circleTwo = createCircle(1);
circleTwo.perimeter();
console.log(circleTwo.radius);

function createRectangle(sideA, sideB){
    return{
        sideA,
        sideB,
        area(){
            console.log(sideA*sideB);
        }
    }
}

const rectangle = createRectangle(4,5);
rectangle.area();
console.log(rectangle.sideA);
console.log( rectangle.sideB);

console.log("rectangle 2");

const rectangleTwo = createRectangle(2,3);
rectangle.area();
console.log(rectangleTwo.sideA);
console.log(rectangleTwo.sideB);

//Constructor Function syntax (auto tha xreisimopoieitai kuriws, ki oxi h factory function syntax)
function Circle(radius){  //h synartisi xekinaei me kefalaio gramma 
    console.log(this);
    this.radius = radius;
    this.PI = 3.14;
    this.perimeter = function(){
        console.log(2*this.PI*radius);
    }
}


const circle = new Circle(1); //otan exw constructor syntax, panta bazw to "new"
console.log(circle.radius);
circle.perimeter();

//Objects are dynamic
circle.opacity = 0.1;
circle.area = function(){
    return this.PI*this.radius*this.radius;
}

console.log(circle.opacity);
console.log(circle.area());

circle.opacity = 'dfd';
delete circle.opacity;
console.log(circle.opacity);

delete circle.area;
console.log(circle.area());