const fs = require("fs");

const body = [];

const requestHandler = (req, res) => {
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
    /* Stream 'data' and read Buffer "event:'data' async" */
    req.on("data", (chunk) => {
      console.log(`Stream: ${chunk}`);
      body.push(chunk);
    });
    /* To work on each chunk we buffer them "event:'end' async" */
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(`text: ${parsedBody}`);
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        /* Run after writFile */
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
  /* Note: After res.end() we must not call 'setHeader" or 'res.write()' */
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My first page</title></head>");
  res.write("<body><h1>Hello world, from node server!</h1></body>");
  res.write("</html>");
  res.end();
};

module.exports = {
    requestHandler: requestHandler,
    textMessage: "Just some text"
}
