// Challenge done!

// Import the readline module for interaction with the user in the terminal
const readline = require("readline");

// Create a read-write interface using readline
const rl = readline.createInterface({
  input: process.stdin,   // Set the input to the terminal
  output: process.stdout, // Set the output to the terminal
});

// Ask the user to choose a number (1, 2, 4, 5) to select a Pokémon
rl.question("Escolha um número (1, 2, 4, 5) para selecionar um Pokémon: ", (answer) => {
  // Parse the user's answer to an integer
  const chooseTheCoach = parseInt(answer);
  let chosenPokemon;

  // Check the user's choice and assign the corresponding Pokémon
  if (chooseTheCoach === 1) {
    chosenPokemon = "Bulbasaur";
  } else if (chooseTheCoach === 2) {
    chosenPokemon = "Charmander";
  } else if (chooseTheCoach === 4) {
    chosenPokemon = "Pikachu";
  } else if (chooseTheCoach === 5) {
    chosenPokemon = "Mewtwo";
  } else {
    chosenPokemon = "unknown pokemon";
  }

  // Display the chosen Pokémon in the console
  console.log(`Você escolheu ${chosenPokemon} como seu Pokémon inicial!`);
  
  // Close the read-write interface, ending the program
  rl.close();
});