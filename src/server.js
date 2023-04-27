require('dotenv').config();
const express = require('express');
// setup ejs server , config template engine
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web');
const apiRoutes = require('./routes/api');
const connection = require('./config/database');


const app = express();
const port = process.env.PORT || 8080;
const hostname = process.env.HOST_NAME || "localhost";

// config req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // for json

configViewEngine(app);


app.use('/', webRoutes);
app.use('/v1/api/', apiRoutes);

(async () => {
  try {
    await connection();
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    });
  } catch (error) {
    console.log(">>>>> Error: " + error)
  }
})()







