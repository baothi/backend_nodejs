const express = require('express');

const routerAPI = express.Router();

const { getUsersAPI, postCreateUserAPI,
  putUpdateUserAPI, deleteUserAPI,
  uploadFileAPI, uploadMultipleFileAPI,
  postCustomersAPI }
  = require('../controllers/apiController');

const { postCreateCustomer } = require('../controllers/customerController');


routerAPI.get('/', (req, res) => {
  res.send("hello world! with apis");
});

routerAPI.get('/users', getUsersAPI);
// routerAPI.post('/users', (req, res) => {
//   return res.send("post a user");
// });
routerAPI.post('/users', postCreateUserAPI);
routerAPI.put('/users', putUpdateUserAPI);
routerAPI.delete('/users', deleteUserAPI);

routerAPI.post('/file', uploadFileAPI);
routerAPI.post('/multiplefile', uploadMultipleFileAPI);

routerAPI.post('/customers', postCreateCustomer);

module.exports = routerAPI;