const e = require('express');
const Customer = require('../models/customer');

const createCustomerService = async (customerData) => {
  try {
    let result = await Customer.create({
      name: customerData.name,
      address: customerData.address,
      phone: customerData.phone,
      email: customerData.email,
      description: customerData.description,
      image: customerData.image
    });
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const createArrayCustomerService = async (arr) => {
  try {
    let result = await Customer.insertMany(arr);
    return result;
  } catch (error) {
    console.log("check error >>> ", error);
    return null;

  }
};

const getAllCustomerService = async () => {
  try {
    let result = await Customer.find({});
    return result;
  } catch (error) {
    console.log("check error >>> ", error);
    return null;
  }
};

const putUpdateCustomerService = async (id, email, name, address, phone, image, description) => {
  try {
    let result = await Customer.updateOne({ _id: id }, { email: email, name: name, address });
    return result;
  } catch (error) {
    console.log("check error >>> ", error);
    return null;
  }
}

const deleteCustomerService = async (id) => {
  try {
    let result = await Customer.deleteById({ _id: id });
    return result;
  } catch (error) {
    console.log("check error >>> ", error);
    return null;
  }
}

module.exports = {
  createCustomerService, createArrayCustomerService,
  getAllCustomerService, putUpdateCustomerService,
  deleteCustomerService
}

