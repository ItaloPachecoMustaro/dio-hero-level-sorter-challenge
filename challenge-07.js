// Challenge done!

// Import the readline module for interaction with the user in the terminal
const readline = require("readline");

// Create a read-write interface using readline
const rl = readline.createInterface({
  input: process.stdin,   // Set the input to the terminal
  output: process.stdout, // Set the output to the terminal
});

// Defines a function to calculate hero level based on wins and losses
function calculateLevel(victories, defeats) {
  // Calculate the balance of victories and defeats
  const balanceVictories = victories - defeats;
  let level = "";

  // Determine the hero's level based on the number of victories
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

  // Return a message indicating the hero's level and balance
  return `The hero has a balance of ${balanceVictories} and is at the ${level} level`;
}

// Ask the user to enter the number of victories
rl.question("Enter the number of victories: ", (victories) => {
  // Ask the user to enter the number of defeats
  rl.question("Enter the number of defeats: ", (defeats) => {
    // Calculate the hero's level and display the result
    const message = calculateLevel(parseInt(victories), parseInt(defeats));
    console.log(message);
    
    // Close the read-write interface, ending the program
    rl.close();
  });
});
