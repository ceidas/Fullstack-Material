class School{
    constructor(name,students,teachers){
        this.name = name;
        this.students = students;
        this.teachers = teachers;
    }

    toString(){
        let str = "The school's name is: ";
        str += this.name;
        str += "\nIt's instructors are: ";
        for(let teacher of this.teachers) {
            str+= "\n\t";
            str+= teacher.name;
        }
        str += "\nAnd it's students are: ";
        for(let student of this.students) {
            str+= "\n\t";
            str += student.name;
        }
        
        return str;        
    }
}

module.exports = School;