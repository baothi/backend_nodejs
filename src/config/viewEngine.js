const path = require('path');
const express = require('express');

const configViewEngine = (app)=>{
  console.log(">>>>>>>>>>>>>>>   : ", __dirname)
  app.set('view engine', 'ejs');
  app.set('views', path.join("./src" ,'views'));

  // config static files
  //app.use(express.static(__dirname)); // Current directory is root
  app.use(express.static(path.join('./src', 'public'))); //  "public" off of current is root
}

module.exports = configViewEngine;