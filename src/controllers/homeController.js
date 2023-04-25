const connection = require('../config/database');
const { getAllUsers, getUserById, updateUserById, deleteUserById } = require('../services/CRUDService');


const getHomepage =async (req, res) =>{
  // call model
  let results = await getAllUsers();
  // console.log(JSON.stringify(results)); 
  return res.render("home.ejs",{listUsers: results});
}

const getABC = (req, res) =>{
  res.send(" check ABC");
}

const getHoiDanIT = (req, res) =>{
  res.render("sample.ejs");
}

const getCreateUser = (req, res) =>{
  res.render("createUser.ejs");
};

const postCreateUser = async (req, res) =>{
  let {email, name, city} = req.body;
  
  // with placeholder
  // connection.query(
  //   `INSERT INTO Users (email, name, city) VALUES(?, ?, ?)`,
  //   [email, name, city],
  //   function(err, results) {
  //     console.log(results);
  //     res.send("create a new user successfully");
  //   }
  // );
  let [results, fields] = await connection.query(
    `INSERT INTO Users (email, name, city) VALUES(?, ?, ?)`,[email, name, city]
  );
  // console.log(">>>> check results: ", results);
  res.send("create a new user successfully");
};

const getUpdateUser = async (req, res) =>{
  const userId = req.params.id;
  
  let user = await getUserById(userId);
  res.render("edit.ejs",{userEdit: user}); //x <- y
};

const postUpdateUser = async (req, res) =>{
  let {email, name, city, id} = req.body;
  await updateUserById(email, name, city, id)
  return res.redirect('/');
};

const postDeleteUser = async (req, res) =>{
  const userId = req.params.id;
  let user = await getUserById(userId);
  return res.render("delete.ejs",{userEdit: user});
}

const postHandleRemoveUser = async (req, res) =>{
  const id = req.body.userId;
  console.log("delete user by id: ", id);
  await deleteUserById(id)
  return res.redirect('/');
}

module.exports = {
  getHomepage, getABC, getHoiDanIT, 
  getCreateUser ,postCreateUser, getUpdateUser, 
  postUpdateUser, postDeleteUser, postHandleRemoveUser
}
