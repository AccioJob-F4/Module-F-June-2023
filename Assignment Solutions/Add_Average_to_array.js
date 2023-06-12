// Q : https://course.acciojob.com/idle?question=39f00037-a2dc-48bf-92f0-dbd0184befa0

var readline = require("readline").createInterface(process.stdin);
var dp = new Array(200000);

let inputArr = [];
var lineNumber = -1;
var inputSize;
var K;

//multipleline input from User
readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;
  // if (lineNumber == 0) {
  //size = parseInt(inputArr[0])
  // } else if (lineNumber < size) {
  // }

  //Exit Condition
  if (lineNumber == 0) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  const arr = JSON.parse(inputArr[0]);
  console.log(arr.average());
}

// make a method for array average
//code here

if (!Array.prototype.average) {
  Array.prototype.average = function () {
    if (this.length === 0) {
      return 0;
    }

    const sum = this.reduce((acc, val) => acc + val, 0);
    return sum / this.length;
  };
}
