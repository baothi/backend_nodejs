const { uploadSingleFile, uploadMultipleFiles } = require('../services/FileService')
const { createCustomerService, createArrayCustomerService,
  getAllCustomerService, putUpdateCustomerService,
  deleteCustomerService }
  = require('../services/customerService');

module.exports = {
  postCreateCustomer: async (req, res) => {
    console.log(req.body);
    let { name, address, phone, email, description } = req.body;
    let imageUrl = "";
    if (!req.files || Object.keys(req.files).length === 0) {
      //do nothing
    } else {
      let result = await uploadSingleFile(req.files.image);
      imageUrl = result.path;
    }
    customerData = {
      name, address, phone, email, description, image: imageUrl
    }
    let customer = await createCustomerService(customerData)
    return res.status(200).json({
      EC: 0,
      data: customer
    });
  },

  postCreateArrCustomer: async (req, res) => {
    let customer = await createArrayCustomerService(req.body.customers);
    if (customer) {
      return res.status(200).json({
        EC: 0,
        data: customer
      });
    } else {
      return res.status(200).json({
        EC: 1,
        data: customer
      });
    }
  },

  getAllCustomers: async (req, res) => {
    let customer = await getAllCustomerService();
    if (customer) {
      return res.status(200).json({
        EC: 0,
        data: customer
      });
    } else {
      return res.status(200).json({
        EC: 1,
        data: []
      });
    }
  },

  putUpdateCustomer: async (req, res) => {
    let { id, email, name, address, phone, image, description } = req.body;
    let customer = await putUpdateCustomerService(id, email, name, address, phone, image, description);
    if (customer) {
      return res.status(200).json({
        EC: 0,
        data: customer
      });
    } else {
      return res.status(200).json({
        EC: 1,
        data: []
      });
    }
  },

  deleteCustomer: async (req, res) => {
    let id = req.body.id;
    let result = await deleteCustomerService(id);
    return res.status(200).json({
      EC: 0,
      data: result
    });
  },
}