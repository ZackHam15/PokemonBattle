const {
  Pokemon,
  Trainer,
  Battle,
} = require("../fun-pokemon-battler/pokemon-trainer");

describe("Pokemon", () => {
  test("ouputs an object", () => {
    expect(typeof new Pokemon()).toEqual("object");
  });
  test("returns an object with all the correct properties", () => {
    const testPokemon = new Pokemon(
      "Charmander",
      44,
      17,
      "Flamethrower",
      "Fire",
      "Cha... Charmander!"
    );
    expect(testPokemon.name).toBe("Charmander");
    expect(testPokemon.hitpoints).toBe(44);
    expect(testPokemon.damage).toBe(17);
    expect(testPokemon.move).toBe("Flamethrower");
    expect(testPokemon.type).toBe("Fire");
    expect(testPokemon.sound).toBe("Cha... Charmander!");
  });
  test("when given a type, strengthWeakness function changes the strength and weakness properties", () => {
    const testPokemon = new Pokemon(
      "Charmander",
      44,
      17,
      "Flamethrower",
      "Fire",
      "Cha... Charmander!"
    );
    testPokemon.strengthWeakness();
    expect(testPokemon.strength).toBe("Grass");
    expect(testPokemon.weakness).toBe("Water");
  });
  test("talk method returns the sound of the pokemon", () => {
    const testPokemon = new Pokemon(
      "Charmander",
      44,
      17,
      "Flamethrower",
      "Fire",
      "Cha... Charmander!"
    );
    testPokemon.talk();
    expect(testPokemon.talk()).toBe("Cha... Charmander!");
  });
  test("", () => {
    const testPokemon = new Pokemon(
      "Charmander",
      44,
      17,
      "Flamethrower",
      "Fire",
      "Cha... Charmander!"
    );
    testPokemon.useYourMove();
    expect(testPokemon.useYourMove()).toBe("Flamethrower");
  });
});
describe("Trainer", () => {
  test("ouputs an object", () => {
    expect(typeof new Trainer()).toEqual("object");
  });
  test("returns all the correct the properties", () => {
    const testTrainer = new Trainer("Zack");
    expect(testTrainer.trainerName).toBe("Zack");
    expect(typeof testTrainer.trainerPokemon).toEqual("object");
  });
  test("catch method inserts all pokemon data into trainerPokemon object", () => {
    const testTrainer = new Trainer("Isaak");
    const testPokemon = new Pokemon(
      "Charmander",
      44,
      17,
      "Flamethrower",
      "Fire",
      "Cha... Charmander!"
    );
    testTrainer.catch(testPokemon);
    expect(testTrainer.trainerPokemon).toEqual([testPokemon]);
  });
});
describe("Battle", () => {
  test("ouputs an object", () => {
    expect(typeof new Battle()).toEqual("object");
  });
  test("test that the fight method takes hitpoints from defending pokemon, equalling to attacking pokemons damage", () => {
    // arrange
    const testTrainer = new Trainer("Isaak");
    const testPokemon = new Pokemon(
      "Charmander",
      44,
      17,
      "Flamethrower",
      "Normal",
      "Cha... Charmander!"
    );
    testTrainer.catch(testPokemon);

    const testTrainerTwo = new Trainer("Zack");
    const testPokemonTwo = new Pokemon(
      "Squirtle",
      44,
      16,
      "Surf",
      "Normal",
      "Squ... Squirtle!"
    );
    testTrainerTwo.catch(testPokemonTwo);

    // act
    const testBattle = new Battle(testTrainer, testTrainerTwo);

    testBattle.fight(testPokemon, testPokemonTwo);

    //assert
    expect(testPokemonTwo.hitpoints).toBe(27);
  });
  test("that fight method takes stength into account", () => {
    // arrange
    const testTrainer = new Trainer("Isaak");
    const testPokemon = new Pokemon(
      "Charmander",
      44,
      17,
      "Flamethrower",
      "Fire",
      "Cha... Charmander!"
    );
    testPokemon.strengthWeakness();
    testTrainer.catch(testPokemon);

    const testTrainerTwo = new Trainer("Zack");
    const testPokemonTwo = new Pokemon(
      "Squirtle",
      44,
      16,
      "Surf",
      "Water",
      "Squ... Squirtle!"
    );
    testPokemonTwo.strengthWeakness();
    testTrainerTwo.catch(testPokemonTwo);

    // act
    const testBattle = new Battle(testTrainer, testTrainerTwo);

    testBattle.fight(testPokemon, testPokemonTwo);

    //assert
    expect(testPokemonTwo.hitpoints).toBe(31.25);
  });
  test("that fight method takes weakness into account", () => {
    // arrange

    const testTrainer = new Trainer("Zack");
    const testPokemon = new Pokemon(
      "Squirtle",
      44,
      16,
      "Surf",
      "Water",
      "Squ... Squirtle!"
    );
    testPokemon.strengthWeakness();
    testTrainer.catch(testPokemon);

    const testTrainerTwo = new Trainer("Isaak");
    const testPokemonTwo = new Pokemon(
      "Charmander",
      44,
      17,
      "Flamethrower",
      "Fire",
      "Cha... Charmander!"
    );
    testPokemonTwo.strengthWeakness();
    testTrainerTwo.catch(testPokemonTwo);

    // act
    const testBattle = new Battle(testTrainer, testTrainerTwo);

    testBattle.fight(testPokemon, testPokemonTwo);

    //assert
    expect(testPokemonTwo.hitpoints).toBe(24);
  });
  test("returns message after each attack(single invocation of fight)", () => {
    // arrange
    const testTrainer = new Trainer("Isaak");
    const testPokemon = new Pokemon(
      "Charmander",
      44,
      17,
      "Flamethrower",
      "Normal",
      "Cha... Charmander!"
    );
    testTrainer.catch(testPokemon);

    const testTrainerTwo = new Trainer("Zack");
    const testPokemonTwo = new Pokemon(
      "Squirtle",
      44,
      16,
      "Surf",
      "Normal",
      "Squ... Squirtle!"
    );
    testTrainerTwo.catch(testPokemonTwo);

    // act
    const testBattle = new Battle(testTrainer, testTrainerTwo);

    // assert
    expect(testBattle.fight(testPokemon, testPokemonTwo)).toEqual(
      "Charmander used Flamethrower on Squirtle, it had a normal effect."
    );
  });
  test("returns message if defending pokemon's hipoints reaches 0", () => {
    // arrange
    const testTrainer = new Trainer("Isaak");
    const testPokemon = new Pokemon(
      "Charmander",
      44,
      17,
      "Flamethrower",
      "Normal",
      "Cha... Charmander!"
    );
    testTrainer.catch(testPokemon);

    const testTrainerTwo = new Trainer("Zack");
    const testPokemonTwo = new Pokemon(
      "Squirtle",
      17,
      16,
      "Surf",
      "Normal",
      "Squ... Squirtle!"
    );
    testTrainerTwo.catch(testPokemonTwo);

    // act
    const testBattle = new Battle(testTrainer, testTrainerTwo);

    // assert
    expect(testBattle.fight(testPokemon, testPokemonTwo)).toEqual(
      "Squirtle has fainted!"
    );
  });
});
