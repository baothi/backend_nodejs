require('dotenv').config();
const express = require('express')
// setup ejs server , config template engine
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web');

const app = express();
const port = process.env.PORT || 8080;
const hostname = process.env.HOST_NAME || "localhost";

configViewEngine(app);

// khai bao route
app.use('/',webRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});


// npm install --save-exact express@4.18.2
// npm install --save-exact ejs@3.1.8
// npm install --save-dev nodemon@2.0.20
// npm install --save-exact body-parser@1.19.0  @babel/core@7.15.5 @babel/node@7.15.4 @babel/preset-env@7.15.6
// npm install --save-exact dotenv@16.0.3
// npm install --save-exact pg-promise@10.12.0
// npm install --save-exact multer@1.4.3
// npm install --save-exact app-root-path@3.0.0
// npm install --save-exact morgan@1.10.0
