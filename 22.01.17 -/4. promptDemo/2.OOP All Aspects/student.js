const Person = require('./person');
class Student extends Person{
    constructor(name){
        super(name);
    }    
}

module.exports = Student;