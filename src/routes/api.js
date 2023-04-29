const express = require('express');

const routerAPI = express.Router();

const { getUsersAPI, postCreateUserAPI,
  putUpdateUserAPI, deleteUserAPI,
  uploadFileAPI, uploadMultipleFileAPI,
  postCustomersAPI }
  = require('../controllers/apiController');

const { postCreateCustomer, postCreateArrCustomer, getAllCustomers, putUpdateCustomer, deleteCustomer, deleteArrCustomer } = require('../controllers/customerController');


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
routerAPI.post('/customers-many', postCreateArrCustomer);
routerAPI.get('/customers', getAllCustomers);
routerAPI.put('/customers', putUpdateCustomer);
routerAPI.delete('/customers', deleteCustomer);
routerAPI.delete('/customers-many', deleteArrCustomer);

routerAPI.get('/info', (req, res) => {
  console.log(req.query);
  return res.status(200).json({
    EC: 0,
    data: req.query
  });
});

routerAPI.get('/info/:name/:address', (req, res) => {
  console.log(req.params);
  return res.status(200).json({
    EC: 0,
    data: req.params
  });
});

module.exports = routerAPI;