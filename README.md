## Bingo

This is a simple project that permits someone to broadcast the numbers from a Bingo game to all clients connected.

It is a good idea to access the client URL using a TV, therefore many people may see the numbers called.
### Running

To run, follow these steps:
 - Make sure you have Node.js installed
 - Run `npm install` to install dependencies
 - Run `npm start` to start the server
 
 By default, port 8080 will be used, but you can change to any port you want by running:
 - On Windows: `set PORT=8081 & npm start`
 - On Linux or MacOs: `PORT=8081 npm start`

### How to use

An admin must browse to the url provided, for example `http://192.168.0.2:8080/admin`

All clients access `http://192.168.0.2:8080/` to view all the numbers.

### Screenshots

![Client](docs/exampleClient.png?raw=true "What clients will be seeing")

![Admin](docs/exampleAdmin.png?raw=true "What the admin will be seeing")