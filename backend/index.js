const http = require("http");
const app = require("./src/app");
require('dotenv').config()

const port = process.env.PORT || process.env.SERVER_PORT;

const server = http.createServer(app);

server.listen(port);
console.log('server ok')


