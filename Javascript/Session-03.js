// Closures

// function outer() {
//   var outerVar = "I'm from outer";

//   function inner() {
//     console.log(outerVar);
//   }

//   return inner;
// }

// var closureFn = outer();
// closureFn();

// ============================================================================================

// OOPs V/S Functional Programming

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   speak() {
//     console.log(this.name + " makes sound");
//   }
// }

// const cat = new Animal("Cat");
// cat.speak();

// const numbers = [1, 2, 3, 4, 5];

// const doubleNumbers1 = numbers.map((num) => num * 2);
// const doubleNumbers2 = numbers.map((num) => num * 2);

// console.log(doubleNumbers1);
// console.log(doubleNumbers2);

// ============================================================================================

// Imperative --> How to achieve a task
// const numbers = [1, 2, 3, 4, 5];
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }

// console.log(sum);

// // Declarative --> What should be achieved
// const numbers2 = [1, 2, 3, 4, 5];
// const sum2 = numbers2.reduce((acc, curr) => acc + curr, 0);
// console.log(sum2);

// ============================================================================================

// Mutability and Immutability

// const person = {
//   name: "John",
//   age: 30,
// };

// person.age = 31;

// console.log(person);

// let name = "John";
// name[0] = "D";
// // name = name.concat("Doe");
// console.log(name);

// ============================================================================================

// Polyfills

// if (!Array.prototype.hirendra) {
//   Array.prototype.hirendra = function (element) {
//     for (var i = 0; i < this.length; i++) {
//       if (this[i] === element) {
//         return true;
//       }
//     }
//     return false;
//   };
// }

// const num = [1, 2, 3];

// console.log(num.hirendra(4));

// ============================================================================================

// Strict Mode and Non Strict mode

// "use strict";

// function foo() {
//   x = 10;
//   console.log(x);
// }

// foo();

// ============================================================================================

// Function Currying

// function add(a) {
//   // a --> 5
//   return function (b) {
//     // b --> 3
//     return a + b;
//   };
// }

// // function add(a, b) {
// //   return a + b;
// // }

// const add5 = add(5);
// console.log(add5(3));

// ============================================================================================

// Creating objects using classes

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   speak() {
//     console.log(this.name + " makes a sound.");
//   }
// }

// const cat = new Animal("Cat");
// cat.speak();

// ============================================================================================

// null, undefined, not defined
// let var1 = null;
// let var2;
// console.log(var1);
// console.log(var2);
// console.log(var3);

// falsy : false, 0, "", null, undefined, NaN

// ============================================================================================

// Shallow Copy

// const originalArray = [1, 2, [3, 4]];
// const shallowCopy = [...originalArray];

// originalArray[0] = 6;
// originalArray[2][0] = 10;

// console.log(originalArray);
// console.log(shallowCopy);

// ============================================================================================

// Deep Copy
// const originalArray = [1, 2, [3, 4]];
// const deepCopy = JSON.parse(JSON.stringify(originalArray));

// originalArray[0] = 6;
// originalArray[2][0] = 10;

// console.log(originalArray);
// console.log(deepCopy);

// ============================================================================================

// Flattening an Object : American Express 3rd Round - Frontend Engineer Intern

const obj = {
  a: {
    b: {
      c: 1,
      d: 2,
    },
    e: 3,
  },
  f: 4,
};

function flattenObj(obj) {
  return something;
}

const output = {
  "a.b.c": 1,
  "a.b.d": 2,
  "a.e": 3,
  f: 4,
};
