let sayHiMixin = {
    sayHi(){
        console.log(`Hello ${this.name}`);
    },
    sayBye(){
        console.log(`Bye ${this.name}`);
    }
}

let swimMixin = {
    swim(){
        console.log(`${this.name} is swimming`);
    }
}

class User{
    constructor(name){
        this.name = name;
    }
}

// Copy the methods
// Object.assign(User.prototype,sayHiMixin);
// Object.assign(User.prototype,swimMixin);
Object.assign(User.prototype,swimMixin,sayHiMixin);

new User("Dude").sayHi();
new User("Dude").swim();