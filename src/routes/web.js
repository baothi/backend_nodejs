const express = require('express');
const { getHomepage, getABC, getHoiDanIT,postCreateUser,
  getCreateUser,getUpdateUser,postUpdateUser,
  postDeleteUser, postHandleRemoveUser } = require('../controllers/homeController');
const routes = express.Router();

routes.get('/', getHomepage);
routes.get('/abc', getABC);
routes.get('/hoidanit', getHoiDanIT)
routes.get('/create', getCreateUser)
routes.post('/create-user', postCreateUser)
routes.get('/update/:id', getUpdateUser)
routes.post('/update-user', postUpdateUser)
routes.post('/delete-user/:id', postDeleteUser)
routes.post('/delete-user', postHandleRemoveUser)

module.exports = routes;