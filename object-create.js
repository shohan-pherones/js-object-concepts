// 1. using object literal
const student = { name: "Sakib AL Hasan", job: "Cricketer" };

// 2. using constructor
const person = new Object();

// 3. using prototype (inheritance)
const human = Object.create(student);

// 4. using class
class People {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const peop = new People("Human", 12);

//5. using function
function Manush(name) {
  this.name = name;
}

const man = new Manush("Lily");
