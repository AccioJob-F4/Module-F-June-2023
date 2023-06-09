// Q : https://course.acciojob.com/idle?question=0252fab2-ae70-4fe8-890b-084c4b5b8e25

function supermarket(prices, n, k) {
  // write code here
  // do not console.log the answer
  // return sorted array
  const sortedPrices = prices.sort((a, b) => a - b);

  // prices.sort((a, b) => a - b) is a JavaScript method that sorts an array of numbers in ascending order.
  // The sort() method is a built-in function in JavaScript that sorts the elements of an array in place and returns the sorted array. By default, the sort() method sorts the elements in lexicographical order (alphabetical order for strings). However, if the array contains numbers, this default behavior may not be appropriate, as numbers should be sorted based on their numerical value rather than their string representation.
  // In this case, the sort() method is passed a function that compares two numbers (a and b) and returns the difference between them (a - b). This function is known as a "compare function", and it tells the sort() method how to sort the array.
  // When the sort() method compares two numbers a and b, it subtracts b from a. If the result is negative, it means that a should come before b in the sorted array. If the result is positive, it means that b should come before a. If the result is zero, it means that a and b are equal, and their relative order doesn't matter.
  // Overall, the code prices.sort((a, b) => a - b) sorts the prices array in ascending order based on the numerical values of its elements.

  const sum = sortedPrices.slice(2, k + 2).reduce((acc, curr) => acc + curr, 0);
  return sum;
}

var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
var A;
var B;
readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;
  if (lineNumber == 0) {
    [A, B] = inputArr[0].split(" ").map((x) => parseInt(x));
  }

  if (lineNumber === 1) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  //inputArr.shift();
  const n = A;
  const k = B;
  const prices = inputArr[1].split(" ").map((x) => parseInt(x));
  console.log(supermarket(prices, n, k));
}
