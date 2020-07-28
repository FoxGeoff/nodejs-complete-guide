const http = require("http");
const { write } = require("fs");

function rqListener(req, res) {}
/* Now use the thick arrow func notation */
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My first psge</title></head>');
  res.write('<body><h1>Hello world, from node server!</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(3000);
