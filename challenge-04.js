// Challenge done!

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the total number of rooms: ", (totalRooms) => {
  const treasureRooms = [2, 4, 7];
  const monsterRooms = [3, 6, 8];

  for (let room = 1; room <= totalRooms; room++) {
    const hasTreasure = treasureRooms.includes(room);
    const hasMoster = monsterRooms.includes(room);

    if (hasTreasure) {
      console.log(`Treasure in the room: ${room}!`);
    } else if (hasMoster) {
      console.log(`Monster in the room: ${room}!`);
    }
  }
  rl.close();
});
