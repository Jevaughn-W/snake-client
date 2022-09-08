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
        connection.write("Move: up");
        break;
      case "a": 
        connection.write("Move: left");
        break;
      case "s": 
        connection.write("Move: down");
        break;
      case "d": 
        connection.write("Move: right");
        break;
      case "z":
        connection.write("Say: So spicy");
        break;
      case "x":
        connection.write("Say: Get the rat!");
        break;
      case "c":
        connection.write("Say: psst!");
        break;
      case "v":
        connection.write("Say: See Ya!");
        break;
      default: break; // seems to have a run each key in successive increments after the previous
    }
  });
};

stdin.on("data", handleUserInput);

module.exports = {setupInput};