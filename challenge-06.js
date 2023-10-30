// Challenge done!

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter your hero's name: ", (heroName) => {
  rl.question("Enter your hero's XP: ", (xp) => {
    let level = "";

    if (xp <= 1000) {
      level = "Iron";
    } else if (xp >= 1001 && xp <= 2000) {
      level = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
      level = "Silver";
    } else if (xp >= 6001 && xp <= 7000) {
      level = "Gold";
    } else if (xp >= 7001 && xp <= 8000) {
      level = "Platinum";
    } else if (xp >= 8001 && xp <= 9000) {
      level = "Ascendant";
    } else if (xp >= 9001 && xp <= 10000) {
      level = "Immortal";
    } else {
      level = "Radiant";
    }

    console.log(`The name hero ${heroName} is at the ${level} level`);
    rl.close();
  });
});
