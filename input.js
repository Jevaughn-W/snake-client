const { stdin } = require('process');
let connection;

const setupInput = (conn) => { // Allows the user input to be read
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInput = function () {  // Assigns actions to the user input
  process.stdin.on('data', (key) =>  {
    
    switch (key) {  //creates the appropriate movement based on the user input
      case '\u0003':
        console.log("Exiting ...");
        process.exit();
      case "w": 
        setInterval( () => connection.write("Move: up"), 500);
        break;
      case "a": 
        setInterval( () => connection.write("Move: left"), 500);
        break;
      case "s": 
        setInterval( () => connection.write("Move: down"), 500);
        break;
      case "d": 
        setInterval( () => connection.write("Move: right"), 500);
        break;
      default: break; // seems to have a run each key in successive increments after the previous
    }
  });
};

stdin.on("data", handleUserInput);

module.exports = {setupInput};