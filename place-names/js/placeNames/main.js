function main() {
    // Put your code here
    const names = ["Nashville", "Hong Kong", "The back yard", "Earth",
        "London", "The mall", "Ryman Auditorium", "The Great Wall of China"];

    //Print someout put to terminal
    console.log("All Place Names");

    //Iterate over each name in array of "names"
    for (let name of names) {
        console.log(name);
    };

    //blank line for spacing
    console.log("")

    const theNames = [];
    for (let i = 0; i < names.length; i++) {
        console.log("names[i]", names[i])
        if (names[i].startsWith("The")) {
            theNames.push(names[i])
        }
    }
    console.log("theNames", theNames)

}

main();