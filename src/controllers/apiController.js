const User = require('../models/user');

const getUsersAPI = async (req, res) => {
  // call model
  let results = await User.find({});
  return res.status(200).json({
    errorCode: 0,
    data: results
  });
}

module.exports = {
  getUsersAPI
}