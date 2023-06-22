// https://course.acciojob.com/idle?question=29bdff15-3021-4774-aea3-701cbf9f1676

const readline = require("readline");

function containsProp(obj, key) {
  //Write your code here
  return Object.hasOwnProperty.call(obj, key);
}

// Dont change the code below

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = 0;
let obj = {};
let stringX = "";

let count = 0;

rl.on("line", (line) => {
  count++;

  if (count === 1) {
    n = parseInt(line);
  } else if (count > 1 && count <= n + 1) {
    let [key, val] = line.split(" ");
    obj[key] = val;
  } else if (count === n + 2) {
    stringX = line;
    rl.close();
  }
});

rl.on("close", () => {
  if (containsProp(obj, stringX)) {
    console.log("true");
  } else {
    console.log("false");
  }
});
