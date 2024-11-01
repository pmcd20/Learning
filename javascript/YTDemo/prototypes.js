//https://www.youtube.com/watch?v=mQ4oCgcgHOA&list=PL0Zuz27SZ-6N3bG4YZhkrCL3ZmDcLTuGd&index=2


const person = {
    alive: true
}

const musician = {
    plays: true
}

console.log(musician.plays);
console.log(musician.alive);  //undefined

//Setting proto //old way
//Person is the parent of musician
musician.__proto__ = person;

console.log(musician.alive); 
console.log(musician); //detail
console.log(musician.__proto__);


//JS now has Get and Set Proto 

const artist = {
    draws: true
}

Object.setPrototypeOf(artist, person);

console.log(Object.getPrototypeOf(artist));
console.log(Object.getPrototypeOf(artist) == musician.__proto__); //same proto 

//walks up the proto chain to goes up to the next proto -- artist --> person --> JS object

console.log('Adding to the chain')
const guitarist = {
    strings: 6,
    __proto__: musician
}

console.log(guitarist.alive); //goes to musician --> up again to Person
console.log(guitarist.plays);
console.log(guitarist.strings);
console.log(guitarist);

//no circular reference
//proto must be an obj or null

console.log('Car object example below');

const car = {
    doors: 2,
    seats: "vinyl",
    get seatMaterial() {
        return this.seats;
    },
    set seatMaterial(material) {
        this.seats = material;
    }
}


const luxCar = {};
Object.setPrototypeOf(luxCar, car);
luxCar.seatMaterial = "leather";
console.log(luxCar);
console.log(luxCar.doors);
console.log(car);

console.log(luxCar.valueOf()); //JS protoype

console.log('Keys of an object')

console.log(Object.keys(luxCar));

Object.keys(luxCar).forEach(k => console.log(k))

//for in includes inherited protos
for (let key in luxCar)
{
    console.log(key)
}


console.log('Below is object constructors');

function Animal(species){
    this.species = species;
    this.eats = true;
}

Animal.prototype.walks = function () {
    return `A ${this.species} is walking`;

};

const Bear = new Animal("bear");
console.log(Bear.species);
console.log(Bear.walks());

//get the proto of Bear
console.log(Object.getPrototypeOf(Bear));


//Now an ES6 class example of inheritance
console.log('Vehicle test with Class below')

class Vehicle {
    constructor() {
        this.wheels = 4,
        this.motorized = true 
    }

    ready(){
        return 'Ready to go';
    }
}


class Motorcycle extends Vehicle{
    constructor() {
        super();
        this.wheels = 2
    }

    wheelie() {
        return 'On the wheel now';
    }
}

const myBike = new Motorcycle();
console.log(myBike);
console.log(myBike.ready());
console.log(myBike.wheelie());

const myTruck = new Vehicle();
console.log(myTruck);






