let arr = [1, 2, 3];

console.log(arr.length);
arr.push(4);
console.log(arr);

//Object literal syntax
var person = {
    firstName: "John",
    lastName: "Doe"
}

console.log(person);

var car = {
    brand: "Audi",
    model: "A7",
    year: 2021
}

//Dot Notation
console.log(car.brand);

//Brackets notation
console.log(car['brand()']);

let person1 = new Object();
person1.firstName = "Mike";
person1.lastName = "Nikolaou";

console.log(person1.firstName);
console.log(person1["firstName"]);

let generalPerson = {
    firstName: "Someone's firstName",
    firstName: "Someone's firstName"
}

let me = Object.create(generalPerson);
me.firstName = "Panos";
me.lastName = "Bozass";

let other = Object.create(generalPerson);
other.firstName = "Mike";
other.lastName = "Panagopoulos";

//Recap

//Object literal syntax (1os tropos )
let customer1 = {
    firstName: "Mike",
    lastName: "Panagou",
    create: function () {
        return "Customer created";
    }
}

//Object constructor syntax (2os tropos)
let customer2 = new Object();
customer2.firstName = "Nick";
customer2.lastName = "Pappas";
customer2.create = function () {
    return "Customer created";
}

//Object create method (3os tropos)
let generalCustomer = {
    firstName: "Someone's firstname",
    lastName: "Someone's lastname",
    create: function () {
        return "customer created";
    }
}
let customer3 = Object.create(generalCustomer);
customer3.firstName = "Kostas";
customer3.lastName = "Nikolaou";
//

delete customer1.lastName;
console.log(customer1.lastName);

console.log("Test create method for three ways of object creation");

console.log(customer1.create());
console.log(customer2.create());
console.log(customer3.create());

let superbike = {
    brand: "Ducati",
    model: "Panigale",
    engine: 1200,
    speed: function () {
        return x;
    }
}


let CAR = {
    model: "Fiat",
    modelλ: "500",
    year: 2021
}

console.log(car.year);

let product1 = {
    title: "Apple",
    price: 4.5,
    "is reliable": true,
    create: function () {
        return "product created";
    }
};

console.log(product1['is reliable']);

//Fill an object from user
let user = {};
// user.firstName = prompt("what is the first name of the user?");
// user.age = prompt("How old is he?");

console.log(user.firstName);
console.log(user.age);
console.log(user);

let user1 = new Object();
user1.age = 19;


//check if a property exists
console.log('age' in user1);
//or 
console.log(user1.hasOwnProperty("ages")); //false

//exercise create an employee

let geneRalEmployee = {
    firstName: "Leonidas",
    lastName: "mavros",
    age: 40,
    salary: 1000,
    department: "IT"
}

let employee1 = Object.create(geneRalEmployee);
employee1.firstName = "Nick";
employee1.lastName = "Panagou";
employee1.age = 30;
employee1.salary = 800;
employee1.depart = "HR";

console.log(geneRalEmployee);
console.log(employee1);


let developer = {
    fullName: "Nick Bekas",
    develop: function (project) {
        return `${this.fullName} works on ${project}`;
    }
}

console.log(developer.develop("MIS"));


//Neo paradeigma
const product3 = { //object literal syntax
    title: "Orange",
    price: 1.00,
    category: {
        title: "Fruits",
        description: "Best quality of Fruits"
    }
}

console.log(product3);
console.log(product3.category.title);

//constructor syntax
function Product(title, price, category) { //with uppercase Product
    this.title = "title"; //auta ta this edw legontai "data properties"
    this.price = price;
    this.category = category; //it will be filled with "category" that will be received as parameter
}

function Category(title, description) { //with uppercase Category
    this.title = title;
    this.description = description;
}

const category1 = new Category("Fruits", "Best quality of fruits");
const product4 = new Product("Orange", 1.00, category1);

console.log(product4);

console.log(product4.category.description);

console.log(this); //refers to window object


//new paradigm with get
const square = {
    side: 2,
    get area() {
        return Math.pow(this.side, 2);
    }
}

console.log(square.area);
square.area = 100;
console.log(square.area);

let person2 = {
    firstName: "John",
    lastName: "Doe",
    language: "",
    set test(langOne) {
        this.language = langOne;
        this.language = langOne.toUpperCase();
    }
}

person2.test = "ene";
console.log(person2);


//Syndiastiko paradeigma me set kai get
console.log("new paradigm");

const person5 = {
    firstName: "John",
    lastName: "Doe",
    get fullName() {
        return `${this.firstName} ${this.lastName};`
    },
    set fullName(value) {
        const seperates = value.split(' ');
        this.firstName = seperates[0];
        this.lastName = seperates[1];
    }
}

console.log(person5.fullName);
person5.fullName = "Nick Pappas";
console.log(person5.firstName);
console.log(person5.lastName);
person5.firstName = "Leonidas";
console.log(person5.fullName);
// console.log(person5.fullName.split(''));


Object.defineProperty(person5, "firstName", {
    writable: false,
    enumerable: false,
    configurable: false
});

// console.log(person5.firstName); //comment in strict mode
delete person5.firstName;
console.log(person5.firstName);
console.log(Object.keys(person5));

const customer4 = {
    fullName: "Mike Doe",
    language: "en",
    create: function () {
        console.log("Created");
    }
}

console.log("**members**");
for (let member in customer4) {
    console.log(`$ {member} $ {customer4[member]}`);
}

console.log("**entries**");

console.log("map: ")
Object.entries(customer4).map(item => {
    console.log(item);
});

console.log("forEach: ")
Object.entries(customer4).forEach(item => {
    console.log(item);
})

console.log("Entries: ")
for (let item of Object.entries(customer4)) {
    console.log(item);
}

console.log(Object.entries(customer4));

// Object.keys()

const object1 = {
    a: "somestring",
    b: 42,
    c: false
}

console.log(Object.keys(object1));


//askisi diafaneies
var student = {
    name : "John Doe",
    sclass : "VI",
    rollno : 12
    };

for (let x in student) {
    console.log(`${x} ${student[x]}`);
}


///

let x =  5;
let y = x;
console.log(x);
console.log(y);

y = 10;
console.log(x);
console.log(y);


let person10 = {
    firstName: "John"
};

y = person10;
console.log(y);

y.firstName = "Nikos";
console.log(person10.firstName);
console.log(y);

function myFunc(){
    console.log(this);
}

var xq = new myFunc(); //Undefined in strict mode

// console.log(human);
//Nested objects
let human = {
    name: "Jason",
    age: 27,
    vehicles: {
        cars: "ford focus",
        bike: "ktm-duke",
        boat: "triton"
    } 
}

console.log("Car: ", human.vehicles.car);

console.log(new Product("Orange", 1.00, category1) === new Product ("Orange", 1.00, category1)) 


let product5 = new Product("Orange", 1.00, category1);
let product6 = product5;

console.log(product5 === product6);

let user10 = {
    name: "John",
    age: 30
};

let clone = {}

for (let key in user10){
    clone[key];
}

console.log(clone);
console.log(clone === user10);

//second way 
let product101 ={
    title: "Laptop 1",
    price: 1200
}

let productClone = {};
Object.assign(productClone, product101);
console.log(productClone);
productClone.title = "melon";
console.log(product101.title);

//String literal syntax
let myString = "Hello world";
console.log(myString.includes("Hello"));

//excercise 
let user = {
    id: 1,
    email: 'email@email.com',
    personal_details : {
        name: "name1",
        address: "odos"
    }
}

user.username = "newName";
delete user.personal_details.address;