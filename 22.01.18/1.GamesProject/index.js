class Shop{
    constructor(id, name, games){
        this.id = id;
        this.name = name;
        this.games = games;
    }

    // //Get the cheapest game
    // getCheapestGame(){
    //     //(a,b)
    //     //symbol > sort b before a 
    //     //symbol < sort a before b 
    //     // === keep iriginal order of a and b 
    //     const sortedArray = this.games.sort((a,b) => (a.price > b.price)? 1 : -1);
    //     return sortedArray[0];
    // }

    get cheapestGame(){
        let result = this.games[0];
        let prices = this.games.map(g => g.price);
        for(let game of this.games){
            if(game.price == Math.min(...prices));
            result = game;
        }
        return result;
    }
}

class Game{
    constructor(id, name, price){
        this.id = id;
        this.name = name;
        this.price = price;
    }

    sell(){
        return "The game has been sold"
    }
}


class PCGame extends Game {
    constructor (id, name, price){
        super(id, name, price);
    }

    sell(){
        return `The PC game: ${this.name} has been sold`
    }
}

class ConsoleGame extends Game {
    constructor (id, name, price){
        super(id, name, price);
    }

    sell(){
        return `The Console game: ${this.name} has been sold`
    }
}


//Main program

const games = [
    new PCGame(1, "Tomb Raider", 50.00),
    new ConsoleGame(2, "Crash Bandicoot 3", 22.00),
    new ConsoleGame(3, "Spyro the Dragon", 21.00),
    new PCGame(4, "Dead Risng 3", 25.00),
    new ConsoleGame(5, "Resident Evil 3", 25.00),
    new PCGame (6, "Hitman 3", 23.00)
];

const videoGamesLtd = new Shop(1, "Video Games Ltd", games);

console.log(videoGamesLtd);

console.log("Get all games of Video Games Ltd")
for (let game of videoGamesLtd.games)
    console.log(game.name);

console.log("Sell all games of Video Games Ltd");
for(let game of videoGamesLtd.games)
    console.log(game.sell());

console.log("Get the cheapest game of Video Games Ltd");
//console.log(videoGamesLtd.getCheapestGame());
console.log(videoGamesLtd.cheapestGame);



const gameOfSpaceSystems = [
    new PCGame(1, "Tomb Raider 2", 50.00),
    new ConsoleGame(2, "Crash Bandicoot 4", 22.00),
    new ConsoleGame(3, "Spyro the Dragon 2", 21.00),
    new PCGame(4, "Dead Risng 4", 25.00),
    new ConsoleGame(5, "Resident Evil 4", 25.00),
    new PCGame (6, "Hitman 2", 23.00),
    new PCGame (7, "Hitman ", 20.00)
];

const spaceSystems = new Shop(2, "Space Systems", gameOfSpaceSystems);

const shops = [videoGamesLtd, spaceSystems];

console.log("Shops: ");
    for (let shop of shops){
        console.log(`***** ${shop.name}*****`);
        for(let game of shop.games){
            console.log(game.name);
        }
        // console.log(`Cheapest game of "${shop.name}" is: ${shop.getCheapestGame().name}`);
        console.log(`Cheapest game of "${shop.name}" is: ${shop.cheapestGame.name}`);

    }