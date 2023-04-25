require('dotenv').config();
const express = require('express')
// setup ejs server , config template engine
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web');
const connection = require('./config/database');

const app = express();
const port = process.env.PORT || 8080;
const hostname = process.env.HOST_NAME || "localhost";

// config req.body
app.use(express.urlencoded({ extended: true })); 
app.use(express.json()); // for json

configViewEngine(app);

// khai bao route
app.use('/',webRoutes)

// simple query
// connection.query(
//   'SELECT * FROM Users u',
//   function(err, results, fields) {
//     console.log(">>> results : ",results); // results contains rows returned by server
//     // console.log(">>> fields : ",fields); // fields contains extra meta data about results, if available
//   }
// );


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
// npm install --save-exact mysql2@3.1.2

// CREATE TABLE Users (
//   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
//   email varchar(255) NOT NULL,
//   name varchar(255) NOT NULL,
//   city varchar(255)
// );

