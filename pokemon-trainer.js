class Pokemon {
  constructor(pokemon) {
    // name, hitpoints, damage, move, type = "Normal", sound
    this.name = pokemon.name;
    this.hitpoints = pokemon.hitpoints;
    this.damage = pokemon.damage;
    this.move = pokemon.move;
    this.type = pokemon.type;
    this.sound = pokemon.sound;
    this.strength = "Normal";
    this.weakness = "Normal";
  }

  strengthWeakness() {
    if (this.type === "Fire") {
      this.strength = "Grass";
      this.weakness = "Water";
    } else if (this.type === "Grass") {
      this.strength = "Water";
      this.weakness = "Fire";
    } else if (this.type === "Water") {
      this.strength = "Fire";
      this.weakness = "Grass";
    }
  }

  talk() {
    return this.sound;
  }

  useYourMove() {
    return this.move;
  }
}

class Trainer {
  constructor(trainerName) {
    this.trainerName = trainerName;
    this.trainerPokemon = [];
  }

  catch(pokemon) {
    this.trainerPokemon.push(pokemon);
  }
}

class Battle {
  constructor(trainerOne, trainerTwo) {
    this.trainerOne = trainerOne;
    this.trainerTwo = trainerTwo;
  }

  fight(attackingPokemon, defendingPokemon) {
    let crit = Math.floor(Math.random() * (100 - 2) + 1);
    this.damageSum = 0;

    if (
      attackingPokemon.type === "Normal" ||
      attackingPokemon.type === defendingPokemon.type
    ) {
      if (crit >= 75) {
        this.damageSum = attackingPokemon.damage * 1.5;
        defendingPokemon.hitpoints =
          defendingPokemon.hitpoints - attackingPokemon.damage * 1.5;
        console.log("It was a critical hit!");
      } else {
        this.damageSum = attackingPokemon.damage;
        defendingPokemon.hitpoints =
          defendingPokemon.hitpoints - attackingPokemon.damage;
      }

      if (defendingPokemon.hitpoints <= 0) {
        console.log(`${defendingPokemon.name} has fainted!`);
        console.log(`${attackingPokemon.name} has won the battle!`);
        process.exit();
      } else {
        return `${attackingPokemon.name} used ${attackingPokemon.move} on ${defendingPokemon.name}, it had a normal effect.`;
      }
    } else if (defendingPokemon.type === "Normal") {
      if (crit >= 75) {
        this.damageSum = attackingPokemon.damage * 1.5;
        defendingPokemon.hitpoints =
          defendingPokemon.hitpoints - attackingPokemon.damage * 1.5;
        console.log("It was a critical hit!");
      } else {
        this.damageSum = attackingPokemon.damage;
        defendingPokemon.hitpoints =
          defendingPokemon.hitpoints - attackingPokemon.damage;
      }

      if (defendingPokemon.hitpoints <= 0) {
        console.log(`${defendingPokemon.name} has fainted!`);
        console.log(`${attackingPokemon.name} has won the battle!`);
        process.exit();
      } else {
        return `${attackingPokemon.name} used ${attackingPokemon.move} on ${defendingPokemon.name}, it had a normal effect.`;
      }
    } else if (attackingPokemon.strength === defendingPokemon.type) {
      if (crit >= 75) {
        this.damageSum = attackingPokemon.damage * 1.75;
        defendingPokemon.hitpoints =
          defendingPokemon.hitpoints - attackingPokemon.damage * 1.75;
        console.log("It was a critical hit!");
      } else {
        this.damageSum = attackingPokemon.damage * 1.25;
        defendingPokemon.hitpoints =
          defendingPokemon.hitpoints - attackingPokemon.damage * 1.25;
      }

      if (defendingPokemon.hitpoints <= 0) {
        console.log(`${defendingPokemon.name} has fainted!`);
        console.log(`${attackingPokemon.name} has won the battle!`);
        process.exit();
      } else {
        return `${attackingPokemon.name} used ${attackingPokemon.move} on ${defendingPokemon.name}, it was super-effective!`;
      }
    } else if (attackingPokemon.weakness === defendingPokemon.type) {
      if (crit >= 75) {
        this.damageSum = attackingPokemon.damage * 1.25;
        defendingPokemon.hitpoints =
          defendingPokemon.hitpoints - attackingPokemon.damage * 1.25;
        console.log("It was a critical hit!");
      } else {
        this.damageSum = attackingPokemon.damage * 0.75;
        defendingPokemon.hitpoints =
          defendingPokemon.hitpoints - attackingPokemon.damage * 0.75;
      }

      if (defendingPokemon.hitpoints <= 0) {
        console.log(`${defendingPokemon.name} has fainted!`);
        console.log(`${attackingPokemon.name} has won the battle!`);
        process.exit();
      } else {
        return `${attackingPokemon.name} used ${attackingPokemon.move} on ${defendingPokemon.name}, it was not effective!`;
      }
    }
  }
}

//LIST OF POKEMON
// name, hitpoints, damage, move, type = "Normal", sound

const Charmander = new Pokemon({
  name: "Charmander",
  hitpoints: 44,
  damage: 17,
  move: "Flamethrower",
  type: "Fire",
  sound: "Cha... Charmander!",
});

const Squirtle = new Pokemon({
  name: "Squirtle",
  hitpoints: 44,
  damage: 16,
  move: "Surf",
  type: "Water",
  sound: "Squ... Squirtle!",
});

const Eevee = new Pokemon({
  name: "Eevee",
  hitpoints: 55,
  damage: 18,
  move: "Headbutt",
  type: "Normal",
  sound: "Eev... Eevee!",
});

const Bulbasaur = new Pokemon({
  name: "Bulbasaur",
  hitpoints: 45,
  damage: 16,
  move: "Razorleaf",
  type: "Grass",
  sound: "Bul... Bulbasaur",
});

const Flareon = new Pokemon({
  name: "Flareon",
  hitpoints: 65,
  damage: 20,
  move: "Fireblast",
  type: "Fire",
  sound: "Fla... Flareon!",
});

const Vaporeon = new Pokemon({
  name: "Vaporeon",
  hitpoints: 70,
  damage: 19,
  move: "Hydropump",
  type: "Water",
  sound: "Vap... Vaporeon!",
});

const Leafeon = new Pokemon({
  name: "Leafeon",
  hitpoints: 65,
  damage: 17,
  move: "Gigadrain",
  type: "Grass",
  sound: "Lea... Leafeon!",
});

const nextLine = "                                                           "
const space = "========================================================="

module.exports = { Pokemon, Trainer, Battle };

// list of pokemon and their stats in the code, pre-populated
//

const inquirer = require("inquirer");

const firstQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is your name?",
    default: "Ash",
  },
];

const choose = [
  {
    type: "list",
    name: "pokemon",
    message: "Choose you pokemon!",
    choices: [
      Charmander,
      Squirtle,
      Bulbasaur,
      Eevee,
      Flareon,
      Vaporeon,
      Leafeon,
    ],
  },
]

const secondQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is your opponents name?",
    default: "Brock",
  },
];

const oppChoose = [
  {
    type: "list",
    name: "pokemon",
    message: "Choose you pokemon!",
    choices: [
      Charmander,
      Squirtle,
      Bulbasaur,
      Eevee,
      Flareon,
      Vaporeon,
      Leafeon,
    ],
  },
]

const thirdQuestions = [
  {
    type: "list",
    name: "battle",
    message: "Are you ready to battle?",
    choices: ["Fight!", "Run..."],
  },
];

const fourthQuestions = [
  {
    type: "list",
    name: "move",
    message: "Do you want to attack?",
    choices: ["Attack", "Skip"],
  },
];

const fifthQuestions = [
  {
    type: "list",
    name: "opponent",
    message: "Your opponent is about to attack!",
    choices: ["Continue"],
  },
];

function playGame() {
  inquirer
    .prompt(firstQuestions)
    .then(function (firstAnswers) {
      // do stuff with the answers to the firstQuestions, e.g. create trainers and catch pokemon
      newTrainer = new Trainer(firstAnswers.name);
      console.log(newTrainer);
      console.log(nextLine);
      console.log(space);
      console.log(nextLine);
      return inquirer.prompt(choose);
    })
    .then(function (chooseAnswers) {
      // do stuff with the answers to the firstQuestions, e.g. create trainers and catch pokemon
      yourPokemon = new Pokemon(eval(chooseAnswers.pokemon));
      newTrainer.catch(yourPokemon);
      yourPokemon.strengthWeakness();
      console.log(newTrainer);
      console.log(nextLine);
      console.log(space);
      console.log(nextLine);
      return inquirer.prompt(secondQuestions);
    })
    .then(function (secondAnswers) {
      // do stuff with the answers to the secondQuestions, e.g. choose moves to use / fight / run away / select pokemon to fight with
      newOpponent = new Trainer(secondAnswers.name);
      console.log(nextLine);
      console.log(space);
      console.log(nextLine);
      return inquirer.prompt(oppChoose);
    })
    .then(function (oppChooseAnswers) {
      // do stuff with the answers to the firstQuestions, e.g. create trainers and catch pokemon
      opponentsPokemon = new Pokemon(eval(oppChooseAnswers.pokemon));
      newOpponent.catch(opponentsPokemon);
      opponentsPokemon.strengthWeakness();
      console.log(newOpponent);
      console.log(nextLine);
      console.log(space);
      console.log(nextLine);
      return inquirer.prompt(thirdQuestions);
    })
    .then(function (thirdAnswers) {
      if (thirdAnswers.battle === "Run...") {
        console.log(`${newTrainer.trainerName} fled from battle!`);
        process.exit();
      } else {
        newBattle = new Battle(newTrainer, newOpponent);
        console.log(newBattle);
      }
      console.log(nextLine);
      console.log(space);
      console.log(nextLine);
      return inquirer.prompt(fourthQuestions);
    })
    .then(function (fourthAnswers) {
      if (fourthAnswers.move === "Skip") {
        console.log(`${newTrainer.trainerName} skipped their turn.`);
      } else {
        console.log(
          newBattle.fight(
            newTrainer.trainerPokemon[0],
            newOpponent.trainerPokemon[0]
          )
        );
        console.log(
          `${yourPokemon.name}'s ${yourPokemon.move} did ${newBattle.damageSum} damage!`
        );
        console.log(
          `${opponentsPokemon.name}'s HP is now ${opponentsPokemon.hitpoints}`
        );
      }
      console.log(nextLine);
      console.log(space);
      console.log(nextLine);
      return inquirer.prompt(fifthQuestions);
    })
    .then(function (fifithAnswers) {
      console.log(
        newBattle.fight(
          newOpponent.trainerPokemon[0],
          newTrainer.trainerPokemon[0]
        )
      );
      console.log(
        `${opponentsPokemon.name}'s ${opponentsPokemon.move} did ${newBattle.damageSum} damage!`
      );
      console.log(`${yourPokemon.name}'s HP is now ${yourPokemon.hitpoints}`);
      console.log(nextLine);
      console.log(space);
      console.log(nextLine);
      return inquirer.prompt(fourthQuestions);
    })
    .then(function (fourthAnswers) {
      if (fourthAnswers.move === "Skip") {
        console.log(`${newTrainer.trainerName} skipped their turn.`);
      } else {
        console.log(
          newBattle.fight(
            newTrainer.trainerPokemon[0],
            newOpponent.trainerPokemon[0]
          )
        );
        console.log(
          `${yourPokemon.name}'s ${yourPokemon.move} did ${newBattle.damageSum} damage!`
        );
        console.log(
          `${opponentsPokemon.name}'s HP is now ${opponentsPokemon.hitpoints}`
        );
      }
      console.log(nextLine);
      console.log(space);
      console.log(nextLine);
      return inquirer.prompt(fifthQuestions);
    })
    .then(function (fifthAnswers) {
      console.log(
        newBattle.fight(
          newOpponent.trainerPokemon[0],
          newTrainer.trainerPokemon[0]
        )
      );
      console.log(
        `${opponentsPokemon.name}'s ${opponentsPokemon.move} did ${newBattle.damageSum} damage!`
      );
      console.log(`${yourPokemon.name}'s HP is now ${yourPokemon.hitpoints}`);
      console.log(nextLine);
      console.log(space);
      console.log(nextLine);
      return inquirer.prompt(fourthQuestions);
    })
    .then(function (fourthAnswers) {
      if (fourthAnswers.move === "Skip") {
        console.log(`${newTrainer.trainerName} skipped their turn.`);
      } else {
        console.log(
          newBattle.fight(
            newTrainer.trainerPokemon[0],
            newOpponent.trainerPokemon[0]
          )
        );
        console.log(
          `${yourPokemon.name}'s ${yourPokemon.move} did ${newBattle.damageSum} damage!`
        );
        console.log(
          `${opponentsPokemon.name}'s HP is now ${opponentsPokemon.hitpoints}`
        );
      }
      console.log(nextLine);
      console.log(space);
      console.log(nextLine);
      return inquirer.prompt(fifthQuestions);
    })
    .then(function (fifthAnswers) {
      console.log(
        newBattle.fight(
          newOpponent.trainerPokemon[0],
          newTrainer.trainerPokemon[0]
        )
      );
      console.log(
        `${opponentsPokemon.name}'s ${opponentsPokemon.move} did ${newBattle.damageSum} damage!`
      );
      console.log(`${yourPokemon.name}'s HP is now ${yourPokemon.hitpoints}`);
      console.log(nextLine);
      console.log(space);
      console.log(nextLine);
      return inquirer.prompt(fourthQuestions);
    })
    .then(function (fourthAnswers) {
      if (fourthAnswers.move === "Skip") {
        console.log(`${newTrainer.trainerName} skipped their turn.`);
      } else {
        console.log(
          newBattle.fight(
            newTrainer.trainerPokemon[0],
            newOpponent.trainerPokemon[0]
          )
        );
        console.log(
          `${yourPokemon.name}'s ${yourPokemon.move} did ${newBattle.damageSum} damage!`
        );
        console.log(
          `${opponentsPokemon.name}'s HP is now ${opponentsPokemon.hitpoints}`
        );
      }
      console.log(nextLine);
      console.log(space);
      console.log(nextLine);
      return inquirer.prompt(fifthQuestions);
    })
    .then(function (fifthAnswers) {
      console.log(
        newBattle.fight(
          newOpponent.trainerPokemon[0],
          newTrainer.trainerPokemon[0]
        )
      );
      console.log(
        `${opponentsPokemon.name}'s ${opponentsPokemon.move} did ${newBattle.damageSum} damage!`
      );
      console.log(`${yourPokemon.name}'s HP is now ${yourPokemon.hitpoints}`);
      console.log(nextLine);
      console.log(space);
      console.log(nextLine);
    });
}

playGame();

// commence battle?
// invokes battle with newTrainer and newOpponenet

// fight? who goes first?
// attakcing pokemon = newTrainer.trainerPokemon[0] [{}]

// next turn

// extra if have time - array of move to choose from, the movees then effect damage number

// if opponents hitpoints ar elower than 5 && >0, can commence catch method()

// implement all methods
