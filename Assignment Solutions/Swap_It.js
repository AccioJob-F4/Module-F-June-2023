// https://course.acciojob.com/idle?question=36905aab-b255-472c-88e3-49382a382939

function SwapIT(N, myArr) {
  // code here
  // Check if the array is already sorted
  let isSorted = true;
  for (let i = 0; i < N; i++) {
    if (myArr[i] !== i + 1) {
      isSorted = false;
      break;
    }
  }

  if (isSorted) {
    return "YES"; // Array is already sorted, no swap needed
  }

  // Find the misplaced elements and their indices
  let misplacedCount = 0;
  let misplacedIndices = [];
  for (let i = 0; i < N; i++) {
    if (myArr[i] !== i + 1) {
      misplacedCount++;
      misplacedIndices.push(i);
    }
  }

  // If there are more than two misplaced elements, cannot be sorted with one swap
  if (misplacedCount > 2) {
    return "NO";
  }

  // If there are two misplaced elements, check if they can be swapped
  if (misplacedCount === 2) {
    const [index1, index2] = misplacedIndices;
    if (myArr[index1] === index2 + 1 && myArr[index2] === index1 + 1) {
      return "YES";
    } else {
      return "NO";
    }
  }

  // If there is only one misplaced element, it can be sorted with one swap
  return "YES";
}

/*Do not change the code below*/
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

  console.log(SwapIT(N, Arr));
}
