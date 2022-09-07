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
  });

  conn.on('data', (data) => {
    console.log(data);
  });


  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {connect};