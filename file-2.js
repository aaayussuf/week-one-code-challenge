const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function checkSpeed(speed) {
  const speedLimit = 70;
  if (speed <= speedLimit) {
    console.log('Ok');
  } else {
    let demeritPoints = Math.floor((speed - speedLimit) / 5);
    if (demeritPoints > 12) {
      console.log('License suspended');
    } else {
      console.log(`Points: ${demeritPoints}`);
    }
  }
}

// Prompt the user for input
rl.question('Enter car speed: ', (input) => {
  const speed = parseInt(input, 10); // Convert input to a number
  if (isNaN(speed)) {
    console.log('Please enter a valid number.');
  } else {
    checkSpeed(speed);
  }
  rl.close();
});
