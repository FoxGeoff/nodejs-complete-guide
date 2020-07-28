# Project: Node.js Complete Guide

## Kanban Task #3: Understanding the Basics

### Task: Creating a Node Server

```Javascript
/* app.js  */
const server = http.createServer((req, res) => {
  console.log(req);  
});

server.listen(3000);
```
