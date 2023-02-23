const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname,() => {
  console.log(`Server running at http://${hostname}:${port}/`);
});



// npm install --save-exact express@4.18.2
// npm install --save-exact ejs@3.1.6
// npm install --save-exact body-parser@1.19.0 nodemon@2.0.12  @babel/core@7.15.5 @babel/node@7.15.4 @babel/preset-env@7.15.6
// npm install --save-exact dotenv@10.0.0 
// npm install --save-exact pg-promise@10.12.0
// npm install --save-exact multer@1.4.3
// npm install --save-exact app-root-path@3.0.0
// npm install --save-exact morgan@1.10.0