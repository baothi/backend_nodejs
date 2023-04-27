require('dotenv').config();
const express = require('express')
// setup ejs server , config template engine
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web');
const connection = require('./config/database');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 8080;
const hostname = process.env.HOST_NAME || "localhost";

// config req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // for json

configViewEngine(app);

// khai bao route


// connection();
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// });

const kittySchema = new mongoose.Schema({
  name: String
});

const Kitten = mongoose.model('Kitten', kittySchema);
const silence = new Kitten({ name: 'Silence' });
console.log(silence.name); // 'Silence'
silence.save();

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

app.use('/', webRoutes)





