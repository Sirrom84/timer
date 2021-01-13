let userInputs = process.argv.slice(2);
const timer1 = () => {
  if (isNaN(userInputs)) {
    return console.log("please use a number");
  } else if (userInputs < 0) {
    return console.log(`Please pick a positive number`);
  } else if (userInputs === []) {
    return console.log(`please use a number`);
  }
  for (const num of userInputs) {
    setTimeout(() => {
      process.stdout.write(`\r\ It's been ${num} seconds!`);
      process.stdout.write('\x07');
      process.stdout.write('\n');
    }, num * 1000);
  }
};

timer1();



