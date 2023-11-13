// Challenge done!

// Import the readline module for interaction with the user in the terminal
const readline = require("readline");

// Create a read-write interface using readline
const rl = readline.createInterface({
  input: process.stdin,   // Set the input to the terminal
  output: process.stdout, // Set the output to the terminal
});

// Ask the user for the monster level
rl.question("Monster Level: ", (num1) => {
  // Ask the user for the battle level
  rl.question("Battle level: ", (num2) => {
    // Calculate the experience gained by multiplying the monster level, battle level, and a constant factor (100 in this case)
    const xpGained = parseInt(num1) * parseInt(num2) * 100;
    
    // Display the amount of experience gained in the console
    console.log("You won: " + xpGained + " XP!");
    
    // Close the read-write interface, ending the program
    rl.close();
  });
});
