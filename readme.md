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

### Task: Redirecting Requests

```JavaScript
const fs = equire("fs");
...
const method=fs.method;
...
if (url === "/message" && method === "POST") {
     fs.writeFileSync('message.txt', 'DUMMY');
     res.statusCode=302;
     res.setHeader('Location', '/');
     return res.end();
  }
```

### Task: Parsing Request Bodies

```JavaScript
const body = [];
...
if (url === "/message" && method === "POST") {
    /* Stream 'data' and read Buffer */
    req.on("data", (chunk) => {
      console.log(`Stream: ${chunk}`);
      body.push(chunk);
    });
    /* To work on each chunk we buffer them */
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(`text: ${parsedBody}`);
      const message = parsedBody.split("=")[1];
      fs.writeFileSync("message.txt", message);
    });

    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
```

- Output:

```JavaScript
Stream: message=Hello+from+Geoff
text: message=Hello+from+Geoff
```

### Task: Understanding Event Driven Code Execution

- these are call back functions. and will run 'sometime'
- the code is not blocked. So order of execution is:

```JavaScript
const server = http.createServer((req, res) => {

req.on("data", (chunk) => { }); //1st async callback
req.on("end", () => { }); //2nd async callback
...
res.statusCode = 302; // 1st sync before !st async and 2nd async
res.setHeader("Location", "/");
return res.end();
...
 return fs.writeFileSync("message.txt", message);
 //'return' forces callback before next sync code
  res.setHeader("Content-Type", "text/html"); // sync code
  ....
});

server.listen(3000); //1st sync exe (no return as end of callback)
```

### Task: Blocking and Non-Blocking Code

- ```fs.writeFileSync("message.txt", message);```
- 'writeFile' is non blocking main thread. Async Code (better)
- 'writeFileSync' is blocking main thread. Sync Code

```JavaScript
fs.writeFile("message.txt", message, (err) => {
  /* Run after writeFile completes*/
  res.statusCode = 302;
  res.setHeader("Location", "/");
  return res.end();
});
```

- ALL BUILT INTO NODE.JS
- Remember node uses one single JS thread
- Remember we always to dispatch onto the Event Loop: Event callbacks functions
- Remember The actual callback function is sent to a Worker Pool to wait execution
- Remember the Worker Pool is multi threaded
- Remember when the Callback function is done, it triggers a callback to the Event Loop
- Remember not to block main thread

### Task: Using the Node Modules System

- Import and export route.js file

```JavaScript
/* custom file */
const routes = require("./routes");

const server = http.createServer(routes);
```

- export file:

 ```JavaScript
 module.exports = requestHandler;
 ```

- Alternative from:

```JavaScript
const server = http.createServer(routes.requestHandler);
```

- Alternative form:

```JavaScript
module.exports = {
    requestHandler: requestHandler,
    textMessage: "Just some text"
}

OR

export.requestHandler = requestHandler;
export.textMessage = "Just some text"
```

## Kanban Task #4: Improving Dwvelopment Workflow and Debugging

- `Fixing Errors, Developing Efficiently

### Task:Understanding NPM Scripts

- To generate file 'package.jason' Run:

```JavaScript
> npm init
package name: (nodejs-complete-guide)
version: (1.0.0)
...
```

- Example npm script - "start: "node app.js"

### Task: Installing 3ed Party Packages

- ```npm install nodemon --save-dev```

### Task: Using Nodemon for Autorestarts

-(no code submited)

### Task: Understanding different Error Types

- in VSCode start debugger (node)

-(no code submited)

### Task: Restarting the Debugger Automatically After Editing our App

- On menu: view/explorer, Run/Add Configuration... < node >
- this creates the file: {...}launch.json

```JavaScript
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Launch Program",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "program": "${workspaceFolder}\\app.js",
            "restart": true,
            "runtimeExecutable": "nodemon",
            "console": "integratedTerminal"        }
    ]
}
```
  
- Note the global install must be used ```npm install nodemon -g```
