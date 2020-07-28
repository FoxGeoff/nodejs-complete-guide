const http = require("http");

function rqListener(req, res) {}
/* Now use the thick arrow func notation */
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);  
});

server.listen(3000);
