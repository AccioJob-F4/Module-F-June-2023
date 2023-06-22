// https://course.acciojob.com/idle?question=12111cad-2ebb-4856-aeef-957418288e01

function Main(input) {
  const inputs = input.split("\n");
  //const N = Number(inputs[0]);
  const arr = inputs[0].split(" ");

  let res = easySorting(arr);
  print(res);

  function print(res) {
    for (let i = 0; i < 5; i++) process.stdout.write(res[i] + " ");
  }
  // You need to return the sorted String array
  // Backend code will print the result
  // arr: Arrays of 5 strings
  function easySorting(arr) {
    // Your code here
    for (let i = 1; i < arr.length; i++) {
      let current = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > current) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = current;
    }
    return arr;
  }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
