// https://course.acciojob.com/idle?question=05b67273-12a3-4843-b214-83790e6050b7

const readline = require("readline");

function deleteProperty(obj, x) {
  delete obj[x];
}

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
  deleteProperty(obj, stringX);
  for (let key in obj) {
    console.log(`${key} ${obj[key]}`);
  }
});
