const Person = require("./person");
const School = require("./school");
const Student = require("./student");
const Teacher = require("./teacher");

const person = new Person("Takis");
const student1 = new Student("Nick Lamprou");
const student2 = new Student("Peter Komninos");
const student3 = new Student("Kostas Pappas");
const student4 = new Student("Panos Bekas");
const student5 = new Student("Mike Lakis");
const student6 = new Student("John Pappas");

const teacher1 = new Teacher("George Laurentis");
const teacher2 = new Teacher("Tasos Lelakis");
const teacher3 = new Teacher("Kostas Timpas");

const people = [
    student1,student2,student3,student4,student5,student6,
    teacher1,teacher2,teacher3
];

for(let person of people)
    person.create();

//people.forEach(person => person.create());

console.log("---------------------------------Aggregation--------------------------");
const teachers = [teacher1, teacher3];
teacher1.students = [student1, student2];
teacher3.students = [student3, student4];

for(let teacher of teachers) {
    console.log(`******* ${teacher.name} *******`);
    for(let student of teacher.students) {
        console.log(`\t ${student.name}`);
    }
}


console.log("-------------------School Section---------------------");

const teachersOfSchool = [teacher1,teacher2,teacher3];
const studentsOfSchool = [
    student1,
    student2,
    student3,
    student4,
    student5,
    student6
];

const school = new School("Coding Bootcamp",studentsOfSchool,teachersOfSchool);
console.log(school.toString());