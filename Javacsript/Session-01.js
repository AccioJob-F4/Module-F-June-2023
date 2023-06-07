// Data Types and Variables

// Number, String, Boolean, Null, Undefined, Object, Array, Symbol

// var, let, const

let age = 25;
let name = "Divyansh Singh";
let isStudent = false;
let myVar = null;
let myVar2;
let person1 = { name: "Dom", age: 45 };
let numbers = [1, 2, 3, 4, 5];
let arr = [1, "String", true, ["rgndunes", 25]];
const id = Symbol();

console.log({ age, name, isStudent, myVar, myVar2, person1, numbers, arr, id });

// OPERATORS
// Arithmetic Operators : + - * / %
// Comparison Operators : == === != !== > < >= <=
// Logical Operators : && ||
// Assignment Operators : = += -= *= /=
// Conditional (ternary) Operators : condition ? expression1 : expression2
// Increment/Decrement Operators : ++ --
// Bitwise Operators : * | ^ ~ << >>

console.log(10 < 30 && 5 < 4);

console.log(3 != "3");
console.log(3 !== "3");

{
  /* switch (Val) {
  case Value1:
  //Logic
  case VALUE2:
  //Logic

  default:
  //Logic
} */
}

function func1() {}

const func1 = () => {};

{
  /* NORMAL FUNCTIONS USING function KEYWORD */
}
function addNumbers(num1, num2) {
  return num1 + num2;
}

{
  /* ARROW FUNCTIONS */
}
const addNumbers = (num1, num2) => {
  return num1 + num2;
};

console.log(addNumbers(3.1, 5));

ARRAYS;
let fruits = ["pomogrenate", "mango", "black currant", "Watermelon", "Tomato"];
let mix = [
  1,
  2,
  "Divyansh",
  true,
  { lastname: "Singh", age: 25 },
  ["Soumodeep", "Chintu", "Bheem"],
];

console.log(fruits[3]);

console.log(fruits.push("Grapes"), fruits);
console.log(fruits.pop(), fruits);
console.log(fruits.shift(), fruits);
console.log(fruits.slice(0, 2), fruits);
console.log(fruits.unshift("Oranges", "Banana"), fruits);
console.log(fruits.splice(1, 1, "Kiwi"), fruits);

{
  /* Higher Order Functions */
}

function higherOrderFunction(func) {
  console.log("Before function call");

  func();

  console.log("After function call");
}

function myFunction() {
  console.log("Inside function");
}

higherOrderFunction(myFunction);

{
  /* Pure Functions */
}

let totalPrice = 0;

{
  /* // IMPURE FUNCTION */
}
function calculateTotal(price) {
  totalPrice += price;
  return totalPrice;
}

console.log(calculateTotal(10));
console.log(calculateTotal(10));
console.log(calculateTotal(10));

{
  /* // PURE FUNCTION */
}
function add(a, b) {
  return a + b;
}

console.log(add(2, 3));
console.log(add(2, 3));
console.log(add(2, 3));

{
  /* Objects */
}

let person = {
  name: "Divyansh Singh",
  age: 25,
  org: "Razorpay",
  greet: function () {
    return "Hello Folks. Welcome to the very first session of Javascript Revision.";
  },
};

console.log(
  `${person.greet()}. My name is ${person.name}. I'm ${
    person.age
  } years old. And I've been working at ${person.org} for the last 2 years.`
);

// Take home assignment : How does Javascript handles this Infinitely nested object ?

const a = { b: 1, c: 2 };
a.d = a;
console.log(a);
