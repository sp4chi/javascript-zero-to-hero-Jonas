'use strict';

/**
 *
 * @param {string} name
 * @param {number} birthYear
 */
// const Person = function (name, birthYear) {
//   this.name = name;
//   this.birthYear = birthYear;
//   console.log(this);
// };

// const jonas = new Person('Jonas', '1985');
// console.log(typeof jonas);
// console.log(typeof Person);

/**
 *
 * Challenge #1
 *
 */
/**
 *
 * @param {String} maker - name of car manufacturer
 * @param {Number} speed - speed of the car
 */
function Car(maker, speed) {
  this.maker = maker;
  this.speed = speed;
}

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.maker + ' going at ' + this.speed + ' km/h');
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.maker + ' going at ' + this.speed + ' km/h');
};

const car1 = new Car('BMW', 100);
const car2 = new Car('Toyota', 80);

car1.accelerate();
car1.brake();

car2.accelerate();
car2.accelerate();
car2.brake();

/**
 * Playing
 */

console.log(car1);
console.log(car1.__proto__);
console.log(Object.getPrototypeOf(car1));

/**
 * Classes - OOP
 */

//class expression
//const PersonCl = class{}

//class declaration

class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  /**
   * calcAge() not on the PersonCl but on the prototype property, i.e, PersonCl.prototype
   */
  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  }
}

const jessica = new PersonCl('Jessica', 1998);

jessica.calcAge();

PersonCl.prototype.greet = function () {
  console.log('Hello ' + this.firstName);
};

jessica.greet();
