class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummary(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }

    getAge(){
        const years = new Date().getFullYear - this.year;
        return `${this.title} is ${years} years old`;        
    }
}

const book1 = new Book("Book One", "Takis Bekas", 2016);
console.log(book1);
console.log(book1.getSummary());

class Magazine extends Book{
    constructor(title, author, year, month){
        super(title, author, year);
        this.month = month;
    }
}

const magazine1 = new Magazine("Magazine 1", "Kostopoulos", 2019, "Jan");

console.log(magazine1);
console.log(magazine1.getSummary());