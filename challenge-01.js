// Challenge done!

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the starting position: ", (initialPosition) => {
  rl.question("Enter the total number of steps: ", (totalSteps) => {
    const finalPosition = parseInt(initialPosition) + parseInt(totalSteps);
    console.log("Hero's final position: ", finalPosition);
    rl.close();
  });
});
