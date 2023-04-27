const express = require('express');

const routerAPI = express.Router();

const { getUsersAPI, postCreateUserAPI,
  putUpdateUserAPI, deleteUserAPI,
  uploadFileAPI, uploadMultipleFileAPI }
  = require('../controllers/apiController');

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

module.exports = routerAPI;