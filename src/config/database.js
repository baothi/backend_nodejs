require('dotenv').config();
const mongoose = require('mongoose');
// get the client
// const mysql = require('mysql2/promise');

var dbState = [{
  value: 0,
  label: "Disconnected"
},
{
  value: 1,
  label: "Connected"
},
{
  value: 2,
  label: "Connecting"
},
{
  value: 3,
  label: "Disconnecting"
}];



const connection = async () => {
  //or
  try {
    const options = {
      user: process.env.MONGO_DB_ROOT_USERNAME,
      pass: process.env.MONGO_DB_ROOT_PASSWORD,
      dbName: process.env.MONGO_DB_ROOT_DB_NAME,
    }
    await mongoose.connect(process.env.MONGO_DB_HOST, options);
    const state = Number(mongoose.connection.readyState);
    console.log(dbState.find(f => f.value === state).label, "to database");
  } catch (error) {
    console.log(">>> Error: " + error)
  }
}


module.exports = connection;