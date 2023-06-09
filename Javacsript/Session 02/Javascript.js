// Array Destructuring

// Male-- > false;
// Female-- > true;
// const person = ["Divyansh Singh", 25, false, "100 Crores", "SDE", "Razorpay"];

// const [name, age, isMale, CTC, designation, orgName] = person;

// // const name = person[0];
// // const age = person[1];
// // const isMale = person[2];

// console.log(name, age, isMale, CTC, designation, orgName);

// Spread Operator

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// // ...arr1 --> 1, 2, 3
// // ...arr2 --> 4, 5, 6

// console.log([...arr1, ...arr2]);

// Iterators on Arrays
// forEach, map, filter, sort, find, reduce;

// const numbers = [1, 2, 3, 4, 5, 6];
// numbers.forEach((item, idx) => {
//   console.log(item * 2, idx);
// });

// const numbers = [1, 2, 3, 4, 5, 6];
// numbers.map((item, idx) => {
//   //   console.log(item * 2, idx);
//   if (item % 2 == 0) return item * 3;
// });

// const numbers = [1, 2, 3, 4, 5, 6];
// numbers.filter((item, idx) => {
//   if (item % 2 == 0) return item * 3;
// });

// const numbers = [1, 3, 2, 4, 6, 5];

// console.log(numbers.sort());

// const numbers = [1, 2, 3, 5, 4, 6];

// const foundNumber = numbers.find((item) => {
//   return item > 3;
// });

// console.log(foundNumber);

// const numbers = [1, 2, 3, 4, 5, 6];

// const sum = numbers.reduce((accumulator, currentNumber) => {
//   console.log({ accumulator, currentNumber });
//   return accumulator + currentNumber;
// }, 10);

// console.log(sum);
