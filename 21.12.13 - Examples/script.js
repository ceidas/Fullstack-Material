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




