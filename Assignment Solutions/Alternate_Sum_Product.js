// Q : https://course.acciojob.com/idle?question=ac9f32a2-2923-46ac-b7d9-011f2bf088cd

var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
var inputSize;

//multipleline input from User
readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;
  if (lineNumber == 0) {
    size = parseInt(inputArr[0]);
  } else if (lineNumber < size) {
  }

  //Exit Condition
  if (lineNumber == 1) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  const N = +inputArr[0];
  inputArr.shift();
  const Arr = inputArr[0].split(" ").map((x) => +x);

  AlternateSumProduct(N, Arr);
}

const AlternateSumProduct = (n, arr) => {
  // Your code here
  // do not return anything print the alternate sum and product value.
  let sum = 0;
  let product = 1;
  for (let i = 0; i < n; i++) {
    if ((i + 1) % 2 === 0) {
      sum += arr[i];
    } else {
      product *= arr[i];
    }
  }
  console.log(sum, product);
};
