//******************** Circle Calculation ********************/

//******************** Procedural Way ********************/

function area(radius){
    let result = Math.PI * Math.pow(radius,2);
    return result.toFixed(2);
}

function perimeter(radius){
    let result = 2 * Math.PI * radius;
    return result.toFixed(2); //me akribeia duo psifiwn
}


let radius1 = 10; 
console.log("The circle's radius is ", radius1);
console.log("The circle's area is ", area(radius1));
console.log("The circle's perimeter is ", perimeter(radius1));

let radius2 = 20; 
console.log("The circle's radius is ", radius2);
console.log("The circle's area is ", area(radius2));
console.log("The circle's perimeter is ", perimeter(radius2));


//****************** OOP implementatino *****************/
console.log("OOP Way");

//constructor syntax
function Circle(radius){
    this.radius = radius;

    this.area = function(){
        let result = Math.PI * Math.pow(this.radius, 2);
        return result.toFixed(2);
    }
    this.perimeter = function(){
        let result = 2 * Math.PI * this.radius;
        return result.toFixed(2);
    }
    this.details = function(){
        return "The circle's radius is: " + this.radius
         + " it's area is " + this.area() 
         + " and it's perimeter is: " + this.perimeter();
    }   
}

var circle1 = new Circle(10);
var circle2 = new Circle(20);

console.log(circle1.details());
console.log(circle2.details());

let circles = [circle1, circle2];
console.log(circles);

let moreCircles = [
    new Circle(10),
    new Circle(5),
    new Circle(4),
    new Circle(2),
    new Circle(1),
]

console.log(moreCircles[0]);
console.log("Getting all detail from all circles....")

for(let circle of moreCircles){
    console.log(circle.details());
}

console.log("Getting all detail from all circles with foreach....")

moreCircles.forEach(function(circle){
    console.log(circle.details)
});


