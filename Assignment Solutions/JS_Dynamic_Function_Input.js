// Q : https://course.acciojob.com/idle?question=33a20917-78e7-461c-8956-67295b66b736

function takeMultipleNumbersAndAdd(arr) {
  //do not console.log
  // return the sum
  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  return sum;
}
/*Do not change the code below*/

var readline = require("readline").createInterface(process.stdin);
let inputArr = [];
var lineNumber = -1;
var inputSize;
var K;

//multipleline input from User
readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;
  //Exit Condition
  if (lineNumber == 0) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  inputArr = inputArr[0].split(" ").map((x) => +x);
  console.log(takeMultipleNumbersAndAdd(inputArr));
}
