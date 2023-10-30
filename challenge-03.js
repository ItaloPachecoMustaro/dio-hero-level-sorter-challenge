// Challenge done!

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Choose a number (1, 2, 4, 5) to select a Pokémon: ", (answer) => {
  const chooseTheCoach = parseInt(answer);
  let chosenPokemon;

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

  console.log(`You chose ${chosenPokemon} as your starting Pokémon!`);
  rl.close();
});
