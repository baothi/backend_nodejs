const { uploadSingleFile, uploadMultipleFiles } = require('../services/FileService')
const { createCustomerService } = require('../services/customerService');

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
  }
}