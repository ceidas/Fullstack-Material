class Square{
    #perimeter;
    #side;
    constructor(side){
        this.side = side;
    }

    get area(){
        return Math.pow(this.#side,2);
    }

    // Correct way
    get perimeter(){
        this.#perimeter = 4 * this.#side
        return this.#perimeter;
    }

    get side(){
        return this.#side;
    }

    set side(value){
        if(value < 0)
            throw new Error('Invalid value');
        this.#side = value;
    }
    // Weak way
    // get perimeter(){
    //     return this.#perimeter;
    // }

    // set perimeter(value){
    //     this.#perimeter = 4 * this.side;
    // }
}

module.exports = Square;