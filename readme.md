# Project: Node.js Complete Guide

## Kanban Task #3: Understanding the Basics

### Task: Creating a Node Server

```JavaScript
/* app.js  */
const server = http.createServer((req, res) => {
  console.log(req);
  // process.exit(); This will quit the 'Event Loop'
});

server.listen(3000);
```

### Task: The node Lifecycle & Event Loop

- This is kept running as long as there is a listener (req) registered.
- This is the Event Loop. Js is single threaded and executes on events.

### Task: Understanding Requests

- ```console.log(req.url, req.method, req.headers);```

```javaScript
PS C:\Users\foxge\Github\nodejs-complete-guide> node app.js
/ GET {
  host: 'localhost:3000',
  'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:78.0) Gecko/20100101 Firefox/78.0',
  accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
  'accept-language': 'en-US,en;q=0.5',
  'accept-encoding': 'gzip, deflate',
  dnt: '1',
  connection: 'keep-alive',
  'upgrade-insecure-requests': '1'
}
```

### Task: Sending Responses

```JavaScript
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My first psge</title></head>');
  res.write('<body><h1>Hello world, from node server!</h1></body>');
  res.write('</html>');
  res.end();
});
```

### Task: Routing Requests

```JavaScript
const server = http.createServer((req, res) => {
  /* Routing Requests */
  const url = req.url;
  if(url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
  }
  /* Note: After res.end() we must not call 'setHeader" or 'res.write()' */
  ...
});

server.listen(3000);
```
