//array of objects
const todos = [
    {
        id:1,
        text: 'Take out trash',
        isComplete: true
    },
    {
        id:2,
        text: 'Meeting the boss',
        isComplete: true
    },
    {
        id: 3,
        text: "Dentist Date",
        isComplete: false
    }
];

console.log(todos);
console.log(todos[1].text);

//**********Constructor Syntax***********

function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
}

const book1 = new Book("Book One", "Panos Bozas", 2017);
////this wrong way
// book1.getAge = function(){
    // const years = new Date().getFullYear() - this.year;
    // return `${this.title} is ${years} years old`;
// }

Book.prototype.getAge = function(){
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
}

console.log(book1.getAge());

const book2 = new Book("Book Two", "Panos Bozas", 2019);
console.log(book2.getAge());


