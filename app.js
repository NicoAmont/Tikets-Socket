require('dotenv').config();

const Server = require('./models/server');


const server = new Server(3000);



server.listen();


