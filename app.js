const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");

const db = require("./util/database");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const path = require("path");

const app = express();

/* run db query */
db.execute("SELECT * FROM customers")
  .then((result) => {
    console / log(result[0] + result[1]);
  })
  .catch((err) => {
    console.loh(error);
  });

/* templating engine pug */
app.set("view engine", "pug");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes); // not calling as func adminRoutes()
app.use("/admin", shopRoutes);

// /* => any
app.use("/", (req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

const server = http.createServer(app);

server.listen(3000);
