function main() {
  // Put your code here

  const enemies = [
    {
      firstName: "Joshua",
      lastName: "Flowers",
      offenses: [
        "Being a jerk to me in elementary school",
        "Not being nice to me in elementary school"
      ],
      isReallyHated: true,
    },
  ];
  console.log(enemies)
  for (let enemy of enemies) {
    console.log(enemy)
    if (enemy.isReallyHated) {
      console.log(`${enemy.firstName} ${enemy.lastName} Really Really dislike`)
    }
    else {
      console.log(`${enemy.firstName} ${enemy.lastName}`)
    }
  };
}
main();
