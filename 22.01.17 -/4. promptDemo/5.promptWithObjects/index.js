const prompt = require('prompt-sync')();

class Person{
    constructor(name,country){
        this.name = name;
        this.country = country;
    }

    toString(){
        return `The person's name is ${this.name} and is from country: ${this.country}`;
    }
}

// First Approach
let name = prompt('What is your name? ');
let country = prompt('Where are you from? ');
let thePerson = new Person(name,country);
console.log(`result = ${thePerson.name} is from ${thePerson.country}`);
console.log(`Person = ${thePerson.toString()}`);


// Second Approach
let person = new Person();
person.name = prompt('What is your name? ');
person.country = prompt('Where are you from? ');
console.log(`result = ${person.name} is from ${person.country}`);
console.log(`Person = ${person.toString()}`);