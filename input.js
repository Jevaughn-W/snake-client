const { stdin } = require('process');

const setupInput = function () { // Allows the user input to be read
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInput = function () {  // Assigns actions to the user input
  process.stdin.on('data', (key) =>  {
    if (key === '\u0003') {
      console.log("Exiting ...")
      process.exit();
    }
  });
};

stdin.on("data", handleUserInput);

module.exports = {setupInput};