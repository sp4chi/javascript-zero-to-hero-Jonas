'use strict';

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   console.log([first.toUpperCase(), ...others].join(' '));
// };

// //upperFirstWord('Javascript is the best language');

// const oneWord = function (str) {
//   const [first, ...others] = str.toLowerCase().split(' ').join('');
//   return [first.toUpperCase(), ...others].join('');
// };

// console.log(oneWord('Javascript Is The Best language'));

//FUNCTIONS RETURNING FUNCTIONS - HOF

// const greet = greet => name => console.log(`${greet} ${name}`);

// greet('Good morning')('Marc');

//CALL AND APPLY

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a ticket on ${this.airline} flight ${this.iataCode}${flightNum}`
    );

    this.bookings.push({
      flight: `${this.iataCode}${flightNum}`,
      name: `${name}`,
    });

    console.log(this);
  },
};

// lufthansa.book(239, 'Kaushik');
// lufthansa.book(237, 'Marc');

const book = lufthansa.book;

//DOES NOT WORK
//book(211, 'Sophie');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const swissAirline = {
  airline: 'Swiss Airlines',
  iataCode: 'SW',
  bookings: [],
};

//CALL

// book.call(eurowings, 677, 'John Denver');
// lufthansa.book.call(eurowings, 655, 'Temple OS');
// book.call(eurowings, 680, 'Sarah Connor');
// book.call(lufthansa, 244, 'Mary Jane');

//APPLY

// const flightData = [288, 'Finance with Sharan'];
// book.apply(eurowings, flightData);

// book.call(lufthansa, ...flightData);

//BIND-> bind doesn't call the func. but returns a new function which has the 'this' bind to the object passed

//<----bookEW's 'this' points to eurowings now---->

// const bookEW = book.bind(eurowings);

// bookEW(699, 'Sonny');

// book.bind(swissAirline)(800, 'Tommy Shelby');

// const bookEW233 = book.bind(eurowings, 233);

// const passengers = ['Marc', 'Ali', 'Ram', 'Angela'];

// passengers.forEach(name => bookEW233(name));

//BIND WITH EVENT LISTENERS

// lufthansa.planes = 300;

// lufthansa.buyPlanes = function () {
//   this.planes++;
//   console.log(`${this.planes}`);
//   console.log(this);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlanes.bind(lufthansa));

//PARTIAL APPLICATION

// const addTax = (rate, value) => value + value * rate;

// const addGST = addTax.bind(null, 0.18);

// console.log(`GST is ${addGST(100)}`);
// console.log(`GST is ${addGST(1001)}`);

// //HOF

// const addTaxHOF = rate => value => value + value * rate;

// const addGSTLOF = addTaxHOF(0.18);

// console.log(addGSTLOF(100));
// console.log(addGSTLOF(1001));

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: [0, 0, 0, 0],

  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number.)`
      )
    );
    if (answer === '' || answer >= this.answers.length || isNaN(answer)) return;

    this.answers[Number(answer)]++;
    this.displayResults();

    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    } else {
      console.log(this.answers);
    }
  },
};

const answer = document.querySelector('.poll');
const showResults = document.querySelector('.show-results');

answer.addEventListener('click', poll.registerNewAnswer.bind(poll));

showResults.addEventListener('click', () => {
  const input = prompt(
    "Enter option 'string' or 'array' ."
  ).toLocaleLowerCase();
  poll.displayResults(input);
});

poll.displayResults.call({ answers: [5, 2, 3] });

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');

poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
