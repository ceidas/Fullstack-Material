const test = {
    prop: 42,
    func: function(){
        return this.prop;
    },
    get getProp(){
        return this.prop;
    }
}

console.log(test.func());
console.log(test.getProp);

// var let keywords on for loop
for(var i = 1; i<=10; i++){
    console.log(i);
}

console.log("After for")
console.log(i);

function myFunction(){
    var x = 8;
}

//console.log(x); -> error

function Person(name){
    console.log(this);
    console.log(globalThis);
    this.name = name;
}

let person = new Person("George");

// assign (or not assign) 'this' to a variable


var myVar = 100;
let a = 6;
function whoIsThis(){
    var myVar = 200;
    console.log("myVar", myVar); // 200
    console.log("this.myVar", this.myVar); // 100
    console.log(a)
}

whoIsThis();
// console.log("Again")
// let w = new whoIsThis();

//
function f1(){
    return this;
}

console.log(f1() === window);
console.log(f1() === globalThis);

let user = {
    firstname : "John",
    age: 30,
    sayHi(){
        console.log(`Hi ${this.firstname}`) //this is the right way
        // console.log(`Hi ${user.firstname}`) //this is the wrong way        
    }
}

// // user.sayHi();
// let admin = user;
// user = null;
// console.log("test")
// admin.sayHi( );
var name =""
console.log(this.name);
function sayHi(){
    // 'use strict'
    console.log(this);
    console.log(this.name);
    console.log(globalThis.name);
}
sayHi();

let userOne = {name:"john"};

let adminOne = {name:"Administrator"};

function sayHiOne(){
    console.log(this.name);
}

userOne.sayHiOfUser = sayHiOne;
adminOne.sayHiOfAdmin = sayHiOne;

userOne.sayHiOfUser();
adminOne.sayHiOfAdmin();


console.log("Test2");
function makeUser() {
    return {
        name:"John",
        ref: this
    };
};

let userTen = new makeUser();
//alert (userTen.ref.name); //this will not run because it is translated as userTen.userTen.name

//strict mode Example
console.log("Strict Mode Example")
function foo(){
    'use strict'
    console.log('simple function call');
    console.log(this=== window);
}

let userEleven = {
    count: 10,
    foo: foo,
    foo1: function(){
        console.log(this === window)
    }
};

userEleven.foo();

let fun1 = userEleven.foo1;
fun1();
userEleven.foo();

//new example
console.log("New example")
const materials = [
    "hydrogen",
    "hellium",
    "lithium",
    "berrylium"
];

console.log(materials.map(material => material.length));

//Arrow functions (basic)
let sum = (a,b) => a+b;
console.log(sum(1,2));

let printSum = (a,b) => console.log(a+b);
printSum(2,4);

let printDouble = n => console.log(n*2);
printDouble(5)

sayHi1= () => console.log("Hello");
sayHi1();

let sumOne = (a,b) => {
    let result = a+b;
    return Math.pow(result,2);
}

console.log(sumOne(2,3));


console.log("From normal to arrow function syntax")
let ask (question, yes, no) {
    if (confirm(question))yes();
    else{
        return no();
    }
}

 ask(
     "Do you agree?",
     function(){alert("You agree");},
     function(){alert("You don't agree");}
 )
