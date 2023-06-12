// Q : https://course.acciojob.com/idle?question=73906a2d-1dfd-438d-a0ae-8a76b6cfb008

const SumAndMean = (Arr, N) => {
  //Mean should be floor
  //return an array having 2 elements sum and mean respectively
  //do not console.log here
  let sum = 0;
  for (let i = 0; i < N; i++) {
    sum += Arr[i];
  }
  let mean = Math.floor(sum / N);
  return [sum, mean];
};

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
  if (lineNumber == 0) {
    size = parseInt(inputArr[0]);
  }
  //else if (lineNumber < size) {
  // }

  //Exit Condition
  if (lineNumber == 1) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  const N = size;
  const Arr = inputArr[1].split(" ").map((x) => parseInt(x));
  console.log(SumAndMean(Arr, N).join(" ").trim());
}
