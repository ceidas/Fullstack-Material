function Book (title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
}

// prototype function
Book.prototype.getSummary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
}

Book.prototype.getAge = function() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
}

function Magazine(title, author, year, month){
    Book.call(this,title,author, year);
    this.month = month;    
}

// Inherit prototype from Book
Magazine.prototype = Object.create(Book.prototype);

// Initiate an object
const magazine1 = new Magazine("Magazine One", "Kostopoulos", 1999, "Jan")

// Use Magazine constructor 
Magazine.prototype.constructor = Magazine;

console.log(magazine1);
console.log(magazine1.getSummary());

