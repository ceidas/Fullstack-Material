let product = {
    status: "Available",
    delete() {
        this.status = "Deleted";
        return this;
    },
    restore() {
        this.status = "Restored"
        return this;
    },
    showStatus: function () {
        console.log(this.status)
    }
}

// product.delete();
// product.restore();
// product.delete();
// product.showStatus();

// Chaining
product.delete().restore().delete().showStatus();


console.log("Example 2")
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function () {
        alert(this.step);
        return this;
    }
};

ladder.up().up().down().showStep();


class Circle{
    #area
    #perimeter
    constructor(radius){
        this.radius = radius
    }

    get area(){
        // return Math.PI*this.radius*this.radius;
        this.#area = Math.PI*(this.radius*this.radius);
        return this.#area;
    }

    get perimeter(){
        // return 2 * Math.PI * this.radius;
        this.#perimeter = 2 * Math.PI * this.radius;
        return this.#perimeter;
    }
}

let circle = new Circle(1);
circle.perimeter