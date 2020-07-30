const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const shareRoutes = require("./routes/share");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoutes); // not calling as func adminRoutes()
app.use("/admin", shopRoutes);

app.use(shareRoutes);

const server = http.createServer(app);

server.listen(3000);
