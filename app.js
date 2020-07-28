const http = require("http");

function rqListener(req, res) {}
/* Now use the thick arrow func notation */
const server = http.createServer((req, res) => {
  console.log(req);  
});

server.listen(3000);
