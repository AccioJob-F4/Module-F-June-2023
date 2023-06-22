// https://course.acciojob.com/idle?question=40ad500f-e244-4123-96fa-fb6300ce8eac

function findMaxOnesRowIndex(N, M, grid) {
  let maxOnes = 0;
  let maxOnesIndex = 0;

  for (let i = 0; i < N; i++) {
    let onesCount = 0;

    for (let j = 0; j < M; j++) {
      if (grid[i][j] === 1) {
        onesCount++;
      }
    }

    if (onesCount > maxOnes) {
      maxOnes = onesCount;
      maxOnesIndex = i;
    }
  }

  return maxOnesIndex;
}

// Accepting input from the user
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (dimensions) => {
  const [N, M] = dimensions.split(" ").map(Number);

  // Creating a 2D array for the grid
  const grid = [];

  rl.on("line", (row) => {
    const rowElements = row.split(" ").map(Number);
    grid.push(rowElements);

    if (grid.length === N) {
      rl.close();

      const maxOnesRowIndex = findMaxOnesRowIndex(N, M, grid);
      console.log(maxOnesRowIndex);
    }
  });
});
