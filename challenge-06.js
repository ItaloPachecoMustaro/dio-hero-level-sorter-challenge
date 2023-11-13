// Challenge done!

// Import the readline module for interaction with the user in the terminal
const readline = require("readline");

// Create a read-write interface using readline
const rl = readline.createInterface({
  input: process.stdin,   // Set the input to the terminal
  output: process.stdout, // Set the output to the terminal
});

// Ask the user to enter the hero's name
rl.question("Enter your hero's name: ", (heroName) => {
  // Ask the user to enter the hero's XP
  rl.question("Enter your hero's XP: ", (xp) => {
    let level = "";

    // Determines hero level based on XP
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

    // Display the hero's name and level in the console
    console.log(`The hero ${heroName} is at the ${level} level`);
    
    // Close the read-write interface, ending the program
    rl.close();
  });
});
