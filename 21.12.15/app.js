function Book() {
    
}

const myBook = new Book(); //We Can ommit parenthesis
console.log(myBook)


//Instance Of Operator
console.log(myBook instanceof Book)//true
console.log(myBook instanceof Array)//false
console.log(myBook instanceof Object)//true

//Every Objecti in JS inherits a constructor Property
console.log(myBook.constructor === Book); //true

//Native Objects are the pre built in objects runs on the runtime env.(Node for Us)


var x1 = new Object();
console.log(x1)
var x2 = new String();
console.log(x2)
var x3 = new Number();
console.log(x3)
var x4 = new Boolean();
console.log(x4)
var x5 = new Date();
console.log(x5)
var x6 = new Array();
console.log(x6)
var x7 = new RegExp();
console.log(x7)
var x8 = new Date();
console.log(x8)
var x9 = new Function();
console.log(x9)

//Constructor Function

function User(name) {

//this keywrod is bound every new instance of User to take the new properties in it
//This implicity this={} in it's new instance an object created

    this.name = name;
    this.isAdmin = false;

    //return this, when it took those properties
}

const user1 = new User('Dimitris')
console.log(user1.isAdmin)

//Literall
let user2 = {
    name : 'Jack',
    isAdmin: false
}

//Reassign the instance alt  way
user2 = new User(user2.name);


console.log(user2);

//It works without capital also as you expected,but is common agreement to put space Letter the first one..
function bikes(name) {
    this.name = name;
}

const bik1 = new bikes('Yolo');

console.log(bik1)

//Constructors do not have a return statement.Return's only stuff into this keyword


//But if there is a statement,the rule is simple 

//If you call an obj in return then the obj  override this

//If return is called with a primitivive is ignored.

//If exist object the object itself returned otherwise returned this keyword


function BigUser() {

    this.name = 'Jhon';

    return {name:'Giorgos'};


}

console.log(new BigUser().name)
//If you check your console.log object replaced this


function BigUsers() {

    this.name = 'Jhon';

    return ; //in this case returns the this keyword or even if you have primitive value like Boolean,again are ignored.



}

console.log(new BigUsers().name)

//The object DefineProperty assign a new property on the current object

//obj The object on which to define the property.

//prop The name or Symbol of the property to be defined or modified.

//descriptor The descriptor for the property being defined or modified.


function Articles(name) {
    Object.defineProperty (this, "name", {
        get: function() {
        return "Book: " + name;
    },
    set: function(newName) {
        name = newName;
    },
    configurable: false 
    });
}

var myArticle = new Articles ("Single page applications");
console.log(myArticle.name); //Book: Single Page Web Applications

// We cannot delete the name property becasue "configurable is set to false
delete myArticle.name; //Book: Single Page Web Applications

//but we can change the value of the name property
myArticle.name = "Testable JS";
console.log(myArticle.name); //Book: Testable JS


let details = {
    firstName: "Lisandros",
    lastName: "Elis",
    myFunction: function(){
        return this.firstName;
    }
}