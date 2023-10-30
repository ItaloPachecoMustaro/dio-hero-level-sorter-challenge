// Challenge done!

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Bumber of blows: ", (numberOfBlows) => {
  numberOfBlows = parseInt(numberOfBlows);
  let minerals = ["Coal", "Iron", "Diamond", "Stone"];

  for (let i = 0; i < numberOfBlows; i++) {
    let mineIndex = i % minerals.length;
    console.log(i + 1 + ": " + minerals[mineIndex]);
  }

  rl.close();
});
