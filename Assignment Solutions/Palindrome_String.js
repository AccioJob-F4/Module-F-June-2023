// https://course.acciojob.com/idle?question=ad163b7c-8fea-42d3-a8e9-39d4d6a06b18

var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
var inputSize;
var K;
readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;

  if (lineNumber == 0) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  const str = inputArr[0];

  console.log(isPalindrome(str));
}

function isPalindrome(S) {
  // Remove non-alphabetic characters and convert to lowercase
  const cleanStr = S.toLowerCase().replace(/[^a-z]/g, "");

  // Check if the clean string is a palindrome
  for (let i = 0, j = cleanStr.length - 1; i < j; i++, j--) {
    if (cleanStr[i] !== cleanStr[j]) {
      return 0; // Not a palindrome
    }
  }

  return 1; // Palindrome
}
