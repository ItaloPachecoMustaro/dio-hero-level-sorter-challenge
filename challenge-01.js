// Challenge done!

// Import the readline module for interaction with the user in the terminal
const readline = require("readline");

// Create a read-write interface using readline
const rl = readline.createInterface({
  input: process.stdin,   // Set the input to the terminal
  output: process.stdout, // Set the output to the terminal
});

// Ask the user for the initial position of the hero
rl.question("Enter the starting position: ", (initialPosition) => {
  // Ask the user for the total number of steps the hero will take
  rl.question("Enter the total number of steps: ", (totalSteps) => {
    // Calculate the final position of the hero by adding the initial position and the total number of steps
    const finalPosition = parseInt(initialPosition) + parseInt(totalSteps);
    
    // Display the hero's final position in the console
    console.log("Hero's final position: ", finalPosition);
    
    // Close the read-write interface, ending the program
    rl.close();
  });
});
