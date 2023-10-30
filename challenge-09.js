// Challenge done!

const readline = require("readline");

class Hero {
  constructor(heroName, heroAge, heroType) {
    this.name = heroName;
    this.age = heroAge;
    this.type = heroType;
  }

  attack() {
    let heroAttack = "";
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

    console.log(`The ${this.type} attacked using ${heroAttack}`);
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the hero's name: ", (heroName) => {
  rl.question("Enter the hero's age: ", (heroAge) => {
    rl.question(
      "Enter the hero type (mage, warrior, monk, ninja): ",
      (heroType) => {
        const userHero = new Hero(heroName, heroAge, heroType);
        userHero.attack();
        rl.close();
      }
    );
  });
});
