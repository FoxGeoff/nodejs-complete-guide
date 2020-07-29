const http = require("http");
const express = require("express");

const app = express();

app.use("/add-product", (req, res, next) => {
  res.send("Hello from Express product!");
});

app.use("/", (req, res, next) => {
  res.send("Hello from Express!");
});

const server = http.createServer(app);

server.listen(3000);
 