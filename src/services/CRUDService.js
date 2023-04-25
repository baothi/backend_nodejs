const connection = require("../config/database") 
const getAllUsers = async() =>{
  let [results, fields] = await connection.query('select * from Users')
  return results;
}

const getUserById = async(userId) =>{
  let [results, fields] = await connection.query('select * from Users where id = ?', [userId])
  let user = results && results.length > 0 ? results[0] : {};
  return user;

}

const updateUserById = async(email, name, city, id) =>{
  let [results, fields] = await connection.query(
    `UPDATE Users SET email = ?, name = ?, city = ? WHERE id = ?`, 
    [email, name, city, id]);
  return results;

}

const deleteUserById = async(id) =>{
  let [results, fields] = await connection.query(`DELETE FROM Users WHERE id =?`, [id]);
}

module.exports = {
    getAllUsers, getUserById, updateUserById, deleteUserById
}