class Person{
    constructor(name){
        this.name = name;
    }

    create(){
        console.log(`The ${this.constructor.name} with name: ${this.name} has been created`);
    }

    read(){
        console.log(`The ${this.constructor.name} with name: ${this.name} has been read`);
    }

    update(){
        console.log(`The ${this.constructor.name} with name: ${this.name} has been updated`);
    }

    delete(){
        console.log(`The ${this.constructor.name} with name: ${this.name} has been deleted`);
    }

    toString(){
        return `${this.constructor.name}: ${this.name}`;
    }
}

module.exports = Person;