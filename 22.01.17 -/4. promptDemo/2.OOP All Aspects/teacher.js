const Person = require('./person');
class Teacher extends Person{
    constructor(name,students){
        super(name);
        this.students = students;
    }
}

module.exports = Teacher;