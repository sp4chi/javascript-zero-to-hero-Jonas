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
 * Challenge #1
 */

/**
 *
 * @param {String} maker - name of car manufacturer
 * @param {Number} speed - speed of the car
 */
/* function Car(maker, speed) {
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
car2.brake(); */

/**
 * Playing
 */

/* console.log(car1);
console.log(car1.__proto__);
console.log(Object.getPrototypeOf(car1)); */

/**
 * Classes - OOP
 */

//class expression
//const PersonCl = class{}

//class declaration

/**
 *  1. Classes are not hoisted unlike function constructors
 *  2. Classes are first-class citizens
 *  3. Classes are executed in strict mode
 */

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  /**
   * {@link calcAge} - returns age of person
   */
  calcAge() {
    return new Date().getFullYear() - this.birthYear;
  }

  greet = function () {
    console.log('Hello ' + this.fullName);
  };

  get fullName() {
    return this._fullName;
  }

  set fullName(name) {
    if (name.includes(' ')) {
      this._fullName = name;
    } else {
      alert(name + ' is not a valid full name!');
    }
  }
}

/**
 * @calcAge and @greet are not on the PersonCl object but on the prototype property, i.e, PersonCl.prototype
 */

const jessica = new PersonCl('Jessica Davis', 1998);

// jessica.calcAge();

// console.log(jessica.fullName);
// console.log(jessica);

// jessica.fullName = 'Jessica Davis';

// PersonCl.prototype.greet = function () {
//   console.log('Hello ' + this.firstName);
// };

//jessica.greet();

const walter = new PersonCl('Walter White', 1965);

console.log(walter.fullName);
walter.fullName = 'Heisenberg ';

console.log(walter.fullName);
console.log(walter.calcAge());

/**
 *  1. Classes are not hoisted unlike function constructors
 *  2. Classes are first-class citizens
 *  3. Classes are executed in strict mode
 *  4. getters and setters are not functions but are used as properties.
 *  5. {@link PersonCl | Example}
 */

const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};
// console.log(account.latest);
// account.latest = 119;
// console.log(account.latest);
