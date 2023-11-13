// Challenge done!

// Import the readline module for interaction with the user in the terminal
const readline = require("readline");

// Create a read-write interface using readline
const rl = readline.createInterface({
  input: process.stdin,   // Set the input to the terminal
  output: process.stdout, // Set the output to the terminal
});

// Ask the user for the number of blows
rl.question("Number of blows: ", (numberOfBlows) => {
  // Parse the user's input to an integer
  numberOfBlows = parseInt(numberOfBlows);

  // Defines an array of minerals
  let minerals = ["Coal", "Iron", "Diamond", "Stone"];

  // Loop through each blow, determining the mined mineral and displaying the result
  for (let i = 0; i < numberOfBlows; i++) {
    // Calculate the index of the mined mineral based on the number of blows and the length of the minerals array
    let mineIndex = i % minerals.length;

    // Display the result of the blow, including the blow number and the mined mineral
    console.log(i + 1 + ": " + minerals[mineIndex]);
  }

  // Close the read-write interface, ending the program
  rl.close();
});
