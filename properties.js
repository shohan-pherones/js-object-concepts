const bottle = { color: "yellow", hold: "water", price: 50, isCleaned: true };

//getting all properties name
const keys = Object.keys(bottle);

//getting all values
const values = Object.values(bottle);

//getting keys and values together in a two-dimentional array
const pairs = Object.entries(bottle);

//seal
// Object.seal(bottle);

//freeze
Object.freeze(bottle);
bottle.price = 100;

//delete a property from an object
delete bottle.isCleaned;
console.log(bottle);
