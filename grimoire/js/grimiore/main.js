function main() {
  // Put your code here
  console.log("Do you believe in magic?");
  console.log("------------------------");

  //array of all spells
  const allSpells = [
    {
      name: "Turn enemy into a newt",
      isEvil: true,
      energyReqired: 5.1
    },
    {
      name: "Conjure some gold for a local charity",
      isEvil: false,
      energyReqired: 2.99
    },
    {
      name: "Give a deaf person the ability to heal",
      isEvil: false,
      energyReqired: 12.2
    },
    {
      name: "Make yourself emperor of the universe",
      isEvil: true,
      energyReqired: 100.0
    },
    {
      name: "Convince your relatives your political views are correct",
      isEvil: false,
      energyReqired: 2921.5
    }
  ];

  // books for each evil and good spells
  const goodBook = []
  const evilBook = []
  const makeSpellsBooks = () => {
    allSpells.map(singleSpell => {
      if (singleSpell.isEvil == true) {
        evilBook.push(singleSpell)
      } else {
        goodBook.push(singleSpell)
      }
    })
  }
  makeSpellsBooks()

  //consle.log of all good book spell names
  console.log("Good Book")
  for (let goodSpell of goodBook) {
    console.log(goodSpell.name)
  }

  console.log("")
  //consle.log of all evil book spell names
  console.log("Evil Book")
  for (let evilSpell of evilBook) {
    console.log(evilSpell.name);
  }
}

main();