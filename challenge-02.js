// Challenge done!

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Monster Level: ", (num1) => {
  rl.question("Battle level: ", (num2) => {
    const xpGained = parseInt(num1) * parseInt(num2) * 100;
    console.log("You won: " + xpGained + " XP!");
    rl.close();
  });
});
