const http = require("http");
/* custom file */
const routes = require("./routes");

const server = http.createServer(routes);

server.listen(3000);
