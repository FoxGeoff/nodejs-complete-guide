const http = require("http");
const fs = require("fs");

function rqListener(req, res) {}
/* Now use the thick arrow func notation */
const server = http.createServer((req, res) => {
  /* Routing Requests */
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
     fs.writeFileSync('message.txt', 'DUMMY');
     res.statusCode=302;
     res.setHeader('Location', '/');
     return res.end();
  }
    /* Note: After res.end() we must not call 'setHeader" or 'res.write()' */
    res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My first page</title></head>");
  res.write("<body><h1>Hello world, from node server!</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
