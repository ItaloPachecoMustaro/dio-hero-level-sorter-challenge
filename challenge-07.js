// Challenge done!

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calculateLevel(victories, defeats) {
  const balanceVictories = victories - defeats;
  let level = "";

  if (victories < 10) {
    level = "Iron";
  } else if (victories >= 11 && victories <= 20) {
    level = "Bronze";
  } else if (victories >= 21 && victories <= 50) {
    level = "Silver";
  } else if (victories >= 51 && victories <= 80) {
    level = "Gold";
  } else if (victories >= 81 && victories <= 90) {
    level = "Diamond";
  } else if (victories >= 91 && victories <= 100) {
    level = "Legendary";
  } else {
    level = "Immortal";
  }

  return `The hero has a balance of ${balanceVictories} and is at the ${level} level`;
}

rl.question("Enter the number of victories: ", (victories) => {
  rl.question("Enter the number od defeats: ", (defeats) => {
    const message = calculateLevel(parseInt(victories), parseInt(defeats));
    console.log(message);
    rl.close();
  });
});
