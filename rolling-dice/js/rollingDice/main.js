function main() {
  // Put your code here
  console.log("Let's roll some dice, baby!");
  console.log("---------------------------");

  //random number generator 
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  //take the die number and turn it into a unix svg of that die face
  const Die = (value) => {
    let dieString = "?";
    if (value == 1) {
      dieString = "\u2680";
    } else if (value == 2) {
      dieString = "\u2681";
    } else if (value == 3) {
      dieString = "\u2682";
    } else if
      (value == 4) {
      dieString = "\u2683";
    } else if (value == 5) {
      dieString = "\u2684";
    } else if (value == 6) {
      dieString = "\u2685";
    }
    return dieString.toString()
  }

  //loop to create variables to grab 2 random numbers and then a comparison and invoke Die
  for (let i = 0; i < 10; i++) {
    let die1 = getRandomInt(1, 6)
    let die2 = getRandomInt(1, 6)

    if (die1 == die2) {
      console.log(`${Die(die1)} + ${Die(die2)} =${die1 + die2} Doubles!`)
    } else {
      console.log(`${Die(die1)} + ${Die(die2)} =${die1 + die2} `)
    }
  }
}
main();