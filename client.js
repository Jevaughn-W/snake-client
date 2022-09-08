const { Server } = require("http");
const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  conn.on('connect', () => {
    console.log('Successfully connected to game server'); // Writes upon connecting with the server
  });
  
  conn.on('connect', () => { // Send user name upon connecting to client
    conn.write("Name: JJW");
    
    // setInterval(() => {
    //   conn.write("Move: up")}, 500   // Test to see how our snake moves
    // );

  });
  
  conn.on('data', (data) => { // Prints the data receieved from the server
    console.log(data);
  });


  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {connect};