const http = require("http");
const express = require("express");

const app = express();

app.use((req, res, next) => { 
    console.log('In 1st middleware');
    next();
});

app.use((req, res, next) => { 
    console.log('In 2nd middleware');
    res.send('<h1>Hello from Express</h1>');
});

const server = http.createServer(app);

server.listen(3000);
