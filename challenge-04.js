// Challenge done!

// Import the readline module for interaction with the user in the terminal
const readline = require("readline");

// Create a read-write interface using readline
const rl = readline.createInterface({
  input: process.stdin,   // Set the input to the terminal
  output: process.stdout, // Set the output to the terminal
});

// Ask the user to enter the total number of rooms
rl.question("Enter the total number of rooms: ", (totalRooms) => {
  // Set rooms with treasures and monsters
  const treasureRooms = [2, 4, 7];
  const monsterRooms = [3, 6, 8];

  // Loop through each room up to the total number of rooms
  for (let room = 1; room <= totalRooms; room++) {
    // Check if the room has a treasure
    const hasTreasure = treasureRooms.includes(room);
    // Check if the room has a monster
    const hasMonster = monsterRooms.includes(room);

    // Display messages based on the contents of the room
    if (hasTreasure) {
      console.log(`Treasure in the room: ${room}!`);
    } else if (hasMonster) {
      console.log(`Monster in the room: ${room}!`);
    }
  }

  // Close the read-write interface, ending the program
  rl.close();
});
