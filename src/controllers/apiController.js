const User = require('../models/user');
const { uploadSingleFile, uploadMultipleFiles } = require('../services/FileService')

const getUsersAPI = async (req, res) => {
  // call model
  let results = await User.find({});
  return res.status(200).json({
    EC: 0,
    data: results
  });
}


const postCreateUserAPI = async (req, res) => {
  let { email, name, city } = req.body;
  let result = await User.create({ email: email, name: name, city: city });
  return res.status(200).json({
    EC: 0,
    data: result
  });
};


const putUpdateUserAPI = async (req, res) => {
  let { email, name, city, id } = req.body;
  // await updateUserById(email, name, city, id)
  let result = await User.updateOne({ _id: id }, { name: name, email: email, city: city });
  return res.status(200).json({
    EC: 0,
    data: result
  });
};

const deleteUserAPI = async (req, res) => {
  const id = req.body.userId;
  let result = await User.deleteOne({ _id: id });
  return res.status(200).json({
    EC: 0,
    data: result
  });
};

const uploadFileAPI = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }
  let result = await uploadSingleFile(req.files.image);
  return res.status(200).json({
    EC: 0,
    data: result
  });
};


const uploadMultipleFileAPI = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }
  if (Array.isArray(req.files.image)) {
    let result = await uploadMultipleFiles(req.files.image);
    return res.status(200).json({
      EC: 0,
      data: result
    });
  } else {
    return await uploadFileAPI(req, res);
  }

};

module.exports = {
  getUsersAPI,
  postCreateUserAPI,
  putUpdateUserAPI,
  deleteUserAPI,
  uploadFileAPI,
  uploadMultipleFileAPI
}
