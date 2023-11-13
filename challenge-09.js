// Challenge done!

// Import the readline module for interaction with the user in the terminal
const readline = require("readline");

// Defines a Hero class with a constructor and an attack method
class Hero {
  constructor(heroName, heroAge, heroType) {
    this.name = heroName;
    this.age = heroAge;
    this.type = heroType;
  }

  attack() {
    let heroAttack = "";
    // Determine the hero's attack based on their type
    switch (this.type) {
      case "mage":
        heroAttack = "magic";
        break;
      case "warrior":
        heroAttack = "sword";
        break;
      case "monk":
        heroAttack = "martial arts";
        break;
      case "ninja":
        heroAttack = "shuriken";
        break;
      default:
        heroAttack = "an undefined attack";
    }

    // Display the hero's attack in the console
    console.log(`The ${this.type} attacked using ${heroAttack}`);
  }
}

// Create a readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Ask the user to enter the hero's information
rl.question("Enter the hero's name: ", (heroName) => {
  rl.question("Enter the hero's age: ", (heroAge) => {
    rl.question(
      "Enter the hero type (mage, warrior, monk, ninja): ",
      (heroType) => {
        // Create a new Hero instance with the user's input and call the attack method
        const userHero = new Hero(heroName, heroAge, heroType);
        userHero.attack();
        // Close the readline interface, ending the program
        rl.close();
      }
    );
  });
});
