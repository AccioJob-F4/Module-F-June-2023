// https://course.acciojob.com/idle?question=e9d6cae5-a209-45f5-a2a2-b7a5fde786af

/*complete the function*/
const CreateUserObject = (Email, Password) => {
  // Your code here
  // do not console.log here return expected JSON object
  return {
    email: Email,
    password: Password,
  };
};

/*Do not change anything below*/

var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
var query;
var K;
readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;
  if (lineNumber == 0) {
    //size=parseInt(inputArr[0]);
  }

  if (lineNumber == 0) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  const [Email, Password] = inputArr[0].split(" ");
  console.log(CreateUserObject(Email, Password));
}
